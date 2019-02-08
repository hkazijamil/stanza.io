// ====================================================================
// XEP-0297: Stanza Forwarding
// --------------------------------------------------------------------
// Source: https://xmpp.org/extensions/xep-0297.html
// Version: 1.0 (2013-10-02)
// ====================================================================

import { define, DefinitionOptions } from '../../jxt';

import { NS_DELAY, NS_FORWARD_0 } from './namespaces';
import { IQ, Message, Presence } from './rfc6120';
import { addAlias, STREAM_TYPES } from './util';

declare module './rfc6120' {
    export interface Message {
        forward?: Forward;
    }
}

export interface Forward {
    message?: Message;
    presence?: Presence;
    iq?: IQ;
}

export default [
    define(STREAM_TYPES.map(([streamType, streamNS]) =>
        addAlias(streamNS, 'message', ['forward.message'])
    )),
    define(STREAM_TYPES.map(([streamType, streamNS]) =>
        addAlias(streamNS, 'presence', ['forward.presence'])
    )),
    define(STREAM_TYPES.map(([streamType, streamNS]) => addAlias(streamNS, 'iq', ['forward.iq']))),
    addAlias(NS_DELAY, 'delay', ['forward.delay']),
    {
        aliases: ['message.forward'],
        element: 'forwarded',
        namespace: NS_FORWARD_0,
        path: 'forward'
    }
] as DefinitionOptions[];
