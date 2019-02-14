import { Agent } from '../Definitions';
import { IQ } from '../protocol/stanzas';

declare module '../Definitions' {
    export interface Agent {
        goInvisible(probe?: boolean): Promise<IQ>;
        goVisible(): Promise<IQ>;
    }
}

export default function(client: Agent) {
    client.goInvisible = (probe?: boolean) => {
        return client.sendIQ({
            type: 'set',
            visiblity: {
                probe,
                type: 'invisible'
            }
        });
    };

    client.goVisible = () => {
        return client.sendIQ({
            type: 'set',
            visiblity: {
                type: 'visible'
            }
        });
    };
}
