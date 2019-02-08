// ====================================================================
// XEP-0224: Attention
// --------------------------------------------------------------------
// Source: https://xmpp.org/extensions/xep-0224.html
// Version: Version 1.0 (2008-11-13)
// ====================================================================

import { childBoolean, DefinitionOptions } from '../../jxt';

import { NS_ATTENTION_0 } from './namespaces';
import './rfc6120';
import { extendMessage } from './util';

declare module './rfc6120' {
    export interface Message {
        requestingAttention?: boolean;
    }
}

export default extendMessage({
    requestingAttention: childBoolean(NS_ATTENTION_0, 'attention')
}) as DefinitionOptions;
