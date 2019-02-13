import { Agent } from '../Definitions';
import { Namespaces } from '../protocol';
import { Message } from '../protocol/stanzas';

export default function(client: Agent) {
    client.disco.addFeature(Namespaces.CORRECTION_0);

    client.on('message', (msg: Message) => {
        if (msg.replace) {
            client.emit('replace', msg);
        }
    });
}
