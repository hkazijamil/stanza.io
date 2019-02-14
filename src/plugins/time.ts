import { Agent } from '../Definitions';
import { Namespaces } from '../protocol';
import { IQ } from '../protocol/stanzas';

declare module '../Definitions' {
    export interface Agent {
        getTime(jid: string): Promise<IQ>;
    }
}

export default function(client: Agent) {
    client.disco.addFeature(Namespaces.TIME);

    client.getTime = (jid: string) => {
        return client.sendIQ({
            time: {},
            to: jid,
            type: 'get'
        });
    };

    client.on('iq:get:time', (iq: IQ) => {
        const time = new Date();
        client.sendIQResult(iq, {
            time: {
                tzo: time.getTimezoneOffset(),
                utc: time
            }
        });
    });
}
