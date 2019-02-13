import { Agent } from '../Definitions';
import { Namespaces } from '../protocol';
import { IQ } from '../protocol/stanzas';

declare module '../Definitions' {
    export interface Agent {
        getServices(jid: string, type: string): Promise<IQ>;
        getServiceCredentials(jid: string, host: string): Promise<IQ>;
    }
}

export default function(client: Agent) {
    client.disco.addFeature(Namespaces.DISCO_EXTERNAL_1);

    client.getServices = (jid: string, type: string) => {
        return this.sendIq(
            {
                services: {
                    type: type
                },
                to: jid,
                type: 'get'
            },
            cb
        );
    };

    client.getServiceCredentials = (jid: string, host: string) => {
        return this.sendIq(
            {
                credentials: {
                    service: {
                        host: host
                    }
                },
                to: jid,
                type: 'get'
            },
            cb
        );
    };
}
