import { Agent } from '../Definitions';
import Disco, { DiscoNodeInfo } from '../DiscoManager';
import { Namespaces } from '../protocol';
import { JID } from '../protocol/jid';
import { IQ, LegacyEntityCaps, Presence } from '../protocol/stanzas';

declare module '../Definitions' {
    export interface Agent {
        disco: Disco;
        getDiscoInfo(jid?: string, node?: string): Promise<IQ>;
        getDiscoItems(jid?: string, node?: string): Promise<IQ>;
        updateCaps(): LegacyEntityCaps | undefined;
        getCurrentCaps():
            | {
                  legacyEntityCaps: LegacyEntityCaps;
                  info: DiscoNodeInfo;
              }
            | undefined;
    }

    export interface AgentConfig {
        capsNode?: string;
    }
}

export default function(client: Agent) {
    client.disco = new Disco();

    client.disco.addFeature(Namespaces.DISCO_INFO);
    client.disco.addFeature(Namespaces.DISCO_ITEMS);
    client.disco.addIdentity({
        category: 'client',
        type: 'web'
    });

    client.registerFeature('caps', 100, (features, done) => {
        client.emit('disco:caps', {
            caps: features.legacyCapabilities,
            from: new JID(client.jid.domain || client.config.server)
        });
        client.features.negotiated.caps = true;
        done();
    });

    client.getDiscoInfo = (jid: string, node?: string) => {
        return client.sendIQ({
            disco: {
                node,
                type: 'info'
            },
            to: jid,
            type: 'get'
        });
    };

    client.getDiscoItems = (jid: string, node?: string) => {
        return client.sendIQ({
            disco: {
                node,
                type: 'items'
            },
            to: jid,
            type: 'get'
        });
    };

    client.updateCaps = () => {
        const node = client.config.capsNode || 'https://stanza.io';
        return client.disco.updateCaps(node, 'sha-1');
    };

    client.getCurrentCaps = () => {
        const caps = client.disco.caps;
        if (!caps) {
            return;
        }
        const node = `${caps.node}#${caps.value}`;
        return {
            info: client.disco.getNodeInfo(node),
            legacyEntityCaps: caps
        };
    };

    client.on('presence', (pres: Presence) => {
        if (pres.legacyCapabilities) {
            client.emit('disco:caps', pres);
        }
    });

    client.on('iq:get:disco', (iq: IQ) => {
        const disco = iq.disco!;
        if (disco.type === 'info') {
            let node = disco.node || '';
            let reportedNode = node;
            if (client.disco.caps) {
                if (node === `${client.disco.caps.node}#${client.disco.caps.value}`) {
                    reportedNode = node;
                    node = '';
                }
            }
            client.sendIQResult(iq, {
                disco: {
                    ...client.disco.getNodeInfo(node),
                    node: reportedNode,
                    type: 'info'
                }
            });
        }
        if (disco.type === 'items') {
            const node = disco.node || '';
            client.sendIQResult(iq, {
                disco: {
                    items: client.disco.items.get(node) || [],
                    type: 'items'
                }
            });
        }
    });
}
