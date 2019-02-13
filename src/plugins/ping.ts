import { Agent } from '../Definitions';
import { Namespaces } from '../protocol';
import { IQ } from '../protocol/stanzas';

declare module '../Definitions' {
    export interface Agent {
        ping(jid?: string): Promise<IQ>;
    }
}

export default function(client: Agent) {
    client.disco.addFeature(Namespaces.PING);

    client.on('iq:get:ping', (iq: IQ) => {
        client.sendIQResult(iq);
    });

    client.ping = (jid: string) => {
        return client.sendIQ({
            ping: true,
            to: jid,
            type: 'get'
        });
    };
}
