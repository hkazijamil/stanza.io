import { Agent } from '../Definitions';
import { IQ } from '../protocol/stanzas';

declare module '../Definitions' {
    export interface Agent {
        prepJID(jid: string): Promise<string>;
    }
}

export default function(client: Agent) {
    client.prepJID = async (jid: string) => {
        const resp = await client.sendIQ({
            jidPrep: jid,
            type: 'get'
        });

        return resp.jidPrep!;
    };
}
