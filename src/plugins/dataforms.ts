import { Agent } from '../Definitions';
import { Namespaces } from '../protocol';
import { Message } from '../protocol/stanzas';

export default function(client: Agent) {
    client.disco.addFeature(Namespaces.DATAFORM);
    client.disco.addFeature(Namespaces.DATAFORM_MEDIA);
    client.disco.addFeature(Namespaces.DATAFORM_VALIDATION);
    client.disco.addFeature(Namespaces.DATAFORM_LAYOUT);

    client.on('message', (msg: Message) => {
        if (msg.forms && msg.forms.length) {
            client.emit('dataform', msg);
        }
    });
}
