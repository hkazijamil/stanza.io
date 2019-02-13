import { Agent } from '../Definitions';
import { Namespaces } from '../protocol';
import { IQ } from '../protocol/stanzas';

declare module '../Definitions' {
    export interface Agent {
        getCommands(jid?: string): Promise<IQ>;
    }
}

export default function(client: Agent) {
    client.disco.addFeature(Namespaces.ADHOC_COMMANDS);
    client.disco.addItem({
        name: 'Ad-Hoc Commands',
        node: Namespaces.ADHOC_COMMANDS
    });

    client.getCommands = (jid?: string) => {
        return client.getDiscoItems(jid, Namespaces.ADHOC_COMMANDS);
    };
}
