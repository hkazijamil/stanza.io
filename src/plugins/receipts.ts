import { Agent } from '../Definitions';
import { Namespaces } from '../protocol';
import { Message } from '../protocol/stanzas';

declare module '../Definitions' {
    export interface AgentConfig {
        sendReceipts?: boolean;
    }
}

const ACK_TYPES = new Set<string>(['chat', 'headline', 'normal']);

export default function(client: Agent) {
    client.disco.addFeature(Namespaces.RECEIPTS);

    client.on('message', (msg: Message) => {
        const sendReceipts = client.config.sendReceipts !== false;

        if (!msg.receipt) {
            return;
        }

        if (sendReceipts && ACK_TYPES.has(msg.type || 'normal') && msg.receipt.type === 'request') {
            client.sendMessage({
                id: msg.id,
                receipt: {
                    id: msg.id,
                    type: 'received'
                },
                to: msg.from,
                type: msg.type
            });
        }

        if (msg.receipt.type === 'received') {
            client.emit('receipt', msg);
        }
    });
}
