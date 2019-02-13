import { Agent } from '../Definitions';
import { Namespaces } from '../protocol';
import { Geolocation, IQ, Message } from '../protocol/stanzas';

declare module '../Definitions' {
    export interface Agent {
        publishGeoLoc(data: Geolocation): Promise<IQ>;
    }
}

export default function(client: Agent) {
    client.disco.addFeature(Namespaces.GEOLOC);
    client.disco.addFeature(Namespaces.PEP_NOTIFY(Namespaces.GEOLOC));

    client.on('pubsub:event', (msg: Message) => {
        if (!msg.pubsub || !msg.pubsub.items) {
            return;
        }
        if (msg.pubsub.items.node !== Namespaces.GEOLOC) {
            return;
        }
        if (!msg.pubsub.items.published) {
            return;
        }

        client.emit('geoloc', {
            geoloc: msg.pubsub.items.published[0]!.content,
            jid: msg.from
        });
    });

    client.publishGeoLoc = (data: Geolocation): Promise<IQ> => {
        return client.publish('', Namespaces.GEOLOC, {
            itemType: Namespaces.GEOLOC,
            ...data
        });
    };
}
