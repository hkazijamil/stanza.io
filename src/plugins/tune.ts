import { Agent } from '../Definitions';
import { Namespaces } from '../protocol';
import { IQ, Message, UserTune } from '../protocol/stanzas';

declare module '../Definitions' {
    export interface Agent {
        publishTune(tune: UserTune): Promise<IQ>;
    }
}

export default function(client: Agent) {
    client.disco.addFeature(Namespaces.TUNE);
    client.disco.addFeature(Namespaces.PEP_NOTIFY(Namespaces.TUNE));

    client.on('pubsub:event', (msg: Message) => {
        if (!msg.pubsub || !msg.pubsub.items) {
            return;
        }
        if (msg.pubsub.items.node !== Namespaces.MOOD) {
            return;
        }
        if (!msg.pubsub.items.published) {
            return;
        }

        client.emit('tune', {
            jid: msg.from,
            tune: msg.pubsub.items.published[0].content
        });
    });

    client.publishTune = (tune: UserTune) => {
        return client.publish('', Namespaces.TUNE, {
            itemType: Namespaces.TUNE,
            ...tune
        });
    };
}
