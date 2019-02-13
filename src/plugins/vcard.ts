import { Agent } from '../Definitions';
import { Namespaces } from '../protocol';
import { IQ, VCardTemp } from '../protocol/stanzas';

declare module '../Definitions' {
    export interface Agent {
        getVCard(jid: string): Promise<IQ>;
        publishVCard(vcard: VCardTemp): Promise<IQ>;
    }
}

export default function(client: Agent) {
    client.disco.addFeature(Namespaces.VCARD_TEMP);

    client.getVCard = (jid: string) => {
        return client.sendIQ({
            to: jid,
            type: 'get',
            vcard: {
                format: Namespaces.VCARD_TEMP
            }
        });
    };

    client.publishVCard = (vcard: VCardTemp) => {
        return client.sendIQ({
            type: 'set',
            vcard
        });
    };
}
