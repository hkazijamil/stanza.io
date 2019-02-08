// ====================================================================
// XEP-0152: Reachability Addresses
// --------------------------------------------------------------------
// Source: https://xmpp.org/extensions/xep-0152.html
// Version: 1.0 (2014-02-25)
// ====================================================================

import {
    attribute,
    childAlternateLanguageText,
    childText,
    DefinitionOptions,
    LanguageSet,
    splicePath
} from '../../jxt';

import { NS_REACH_0 } from './namespaces';
import { extendPresence } from './util';

declare module './rfc6120' {
    export interface Presence {
        reachbilityAddresses?: ReachabilityAddress[];
    }
}

export interface ReachabilityAddress {
    uri: string;
    description?: string;
    alternateLanguageDescriptions?: LanguageSet<string>;
}

export default [
    extendPresence({
        reachabilityAddresses: splicePath(NS_REACH_0, 'reach', 'reachabilityAddress', true)
    }),
    {
        element: 'addr',
        fields: {
            alternateLanguageDescriptions: childAlternateLanguageText(null, 'desc'),
            description: childText(null, 'desc'),
            uri: attribute('uri')
        },
        namespace: NS_REACH_0,
        path: 'reachabilityAddress'
    }
] as DefinitionOptions[];
