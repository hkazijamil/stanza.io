import { Agent } from '../Definitions';
import { Namespaces } from '../protocol';
import { IQ, Message, UserMood } from '../protocol/stanzas';

declare module '../Definitions' {
    export interface Agent {
        publishMood(mood: UserMood): Promise<IQ>;
    }
}

export default function(client: Agent) {
    client.disco.addFeature(Namespaces.MOOD);
    client.disco.addFeature(Namespaces.PEP_NOTIFY(Namespaces.MOOD));

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

        client.emit('mood', {
            jid: msg.from,
            mood: msg.pubsub.items.published[0].content
        });
    });

    client.publishMood = (mood: UserMood) => {
        return client.publish('', Namespaces.MOOD, {
            itemType: Namespaces.MOOD,
            ...mood
        });
    };
}
