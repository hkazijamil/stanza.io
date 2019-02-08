// ====================================================================
// XEP-0313: Message Archive Management
// --------------------------------------------------------------------
// Source: https://xmpp.org/extensions/xep-0313.html
// Version: 0.6.1 (2017-02-22)
// ====================================================================

import { attribute, booleanAttribute, DefinitionOptions } from '../../jxt';

import { NS_DATAFORM, NS_FORWARD_0, NS_MAM_2, NS_RSM } from './namespaces';
import './rfc6120';
import { addAlias, JID } from './util';
import { DataForm } from './xep0004';
import { Paging } from './xep0059';
import { Forward } from './xep0297';

declare module './rfc6120' {
    export interface Message {
        archive?: MAMResult;
    }

    export interface IQ {
        archive?: MAMQuery | MAMFin | MAMPrefs;
    }
}

export interface MAMQuery {
    type?: 'query';
    node?: string;
    form?: DataForm;
    queryId?: string;
    paging?: Paging;
}

export interface MAMFin {
    type: 'result';
    complete?: boolean;
    stable?: boolean;
    results?: MAMResult[];
    pagin?: Paging;
}

export interface MAMPrefs {
    type: 'preferences';
    default?: 'always' | 'never' | 'roster';
    always?: JID[];
    never?: JID[];
}

export interface MAMResult {
    queryId: string;
    id: string;
    forwarded: Forward;
}

export default [
    addAlias(NS_DATAFORM, 'x', ['iq.archive.form']),
    addAlias(NS_FORWARD_0, 'forwarded', ['message.archive.item']),
    addAlias(NS_RSM, 'set', ['iq.archive.paging']),
    {
        defaultType: 'query',
        element: 'query',
        fields: {
            queryId: attribute('queryid')
        },
        namespace: NS_MAM_2,
        path: 'iq.archive',
        type: 'query',
        typeField: 'type'
    },
    {
        element: 'fin',
        fields: {
            complete: booleanAttribute('complete'),
            stable: booleanAttribute('stable')
        },
        namespace: NS_MAM_2,
        path: 'iq.archive',
        type: 'result'
    },
    {
        element: 'prefs',
        fields: {
            default: attribute('default')
        },
        namespace: NS_MAM_2,
        path: 'iq.archive',
        type: 'preferences'
    },
    {
        element: 'result',
        fields: {
            id: attribute('id'),
            queryId: attribute('queryid')
        },
        namespace: NS_MAM_2,
        path: 'message.archive'
    }
] as DefinitionOptions[];
