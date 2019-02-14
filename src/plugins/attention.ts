import { Agent } from '../Definitions';
import { Namespaces } from '../protocol';
import { Message } from '../protocol/stanzas';

declare module '../Definitions' {
    export interface Agent {
        getAttention(jid: string, opts?: Partial<Message>): void;
    }
}

export default function(client: Agent) {
    client.disco.addFeature(Namespaces.ATTENTION_0);

    client.getAttention = (jid: string, opts: Partial<Message> = {}) => {
        opts.to = jid;
        opts.type = 'headline';
        opts.requestingAttention = true;
        return client.sendMessage(opts);
    };

    client.on('message', (msg: Message) => {
        if (msg.requestingAttention) {
            client.emit('attention', msg);
        }
    });
}
