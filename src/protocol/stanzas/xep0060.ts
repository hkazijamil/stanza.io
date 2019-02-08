// ====================================================================
// XEP-0060: Publish-Subscribe
// --------------------------------------------------------------------
// Source: https://xmpp.org/extensions/xep-0060.html
// Version: 1.15.1 (2018-02-02)
// ====================================================================

import {
    attribute,
    booleanAttribute,
    childAttribute,
    childBoolean,
    childEnum,
    deepChildBoolean,
    DefinitionOptions,
    FieldDefinition,
    integerAttribute,
    multipleChildAttribute,
    splicePath
} from '../../jxt';

import {
    NS_DATAFORM,
    NS_PUBSUB,
    NS_PUBSUB_ERRORS,
    NS_PUBSUB_EVENT,
    NS_PUBSUB_OWNER,
    NS_RSM
} from './namespaces';
import './rfc6120';
import { addAlias, extendStanzaError, JID, JIDAttribute } from './util';
import { DataForm } from './xep0004';
import { Paging } from './xep0059';

declare module './rfc6120' {
    export interface Message {
        pubsub?: PubsubEvent;
    }

    export interface IQ {
        pubsub?: Pubsub;
    }

    export interface StanzaError {
        pubsubError?:
            | 'closed-node'
            | 'configuration-required'
            | 'invalid-jid'
            | 'invalid-options'
            | 'invalid-payload'
            | 'invalid-subid'
            | 'item-forbidden'
            | 'item-required'
            | 'jid-required'
            | 'max-items-exceeded'
            | 'max-nodes-exceeded'
            | 'nodeid-required'
            | 'not-in-roster-group'
            | 'not-subscribed'
            | 'payload-too-big'
            | 'payload-required'
            | 'pending-subscription'
            | 'presence-subscription-required'
            | 'subid-required'
            | 'too-many-subscriptions'
            | 'unsupported'
            | 'unsupported-access-model';
        pubsubUnsupportedFeature?: string;
    }
}

export interface Pubsub {
    context?: 'owner' | 'user';
    subscribe?: PubsubSubscribe;
    unsubscribe?: PubsubUnsubscribe;
    subscription?: PubsubSubscription;
    publishOptions?: DataForm;
    publish?: PubsubPublish;
    retract?: PubsubRetract;
    purge?: string;
    fetch?: PubsubFetch;
    create?: PubsubCreate | boolean;
    destroy?: PubsubDestroy;
    configure?: PubsubConfigure;
    subscriptionOptions?: PubsubSubscriptionOptions;
}

export interface PubsubCreate {
    node?: string;
}

export interface PubsubDestroy {
    node: string;
}

export interface PubsubConfigure {
    node?: string;
    form?: DataForm;
}

export interface PubsubSubscribe {
    node?: string;
    jid?: JID;
}

export interface PubsubUnsubscribe {
    node?: string;
    jid?: JID;
    subid?: string;
}

export interface PubsubSubscription {
    node?: string;
    jid?: JID;
    subid?: string;
    state?: 'subscribed' | 'pending' | 'unconfigured' | 'none';
    configurable?: boolean;
    configurationRequired?: boolean;
}

export interface PubsubPublish {
    node?: string;
    item?: PubsubItem;
}

export interface PubsubItemContent {
    itemType?: string;
}

export interface PubsubItem<T extends PubsubItemContent = PubsubItemContent> {
    id?: string;
    publisher?: JID;
    content?: T;
}

export interface PubsubRetract {
    node: string;
    id: string;
    notify?: boolean;
}

export interface PubsubFetch {
    node: string;
    max?: number;
    items?: PubsubItem[];
    paging?: Paging;
}

export interface PubsubSubscriptionOptions {
    node?: string;
    jid?: JID;
    subid?: string;
    config?: DataForm;
}

export interface PubsubEvent {
    eventType: 'items' | 'purge' | 'delete' | 'configuration' | 'subscription';
    items?: PubsubEventItems;
    purge?: PubsubEventPurge;
    delete?: PubsubEventDelete;
    configuration?: PubsubEventConfiguration;
    subscription?: PubsubEventSubscription;
}

export interface PubsubEventItems {
    node: string;
    retracted?: string[];
    published?: PubsubItem[];
}

export interface PubsubEventPurge {
    node: string;
}

export interface PubsubEventDelete {
    node: string;
    redirect?: string;
}

export interface PubsubEventConfiguration {
    node: string;
    form: DataForm;
}

export interface PubsubEventSubscription {
    node: string;
    jid: JID;
    subid?: string;
    state: 'subscribed' | 'pending' | 'unconfigured' | 'none';
    expires?: Date | 'presence';
}

const dateOrPresenceAttribute = (name: string): FieldDefinition<Date | 'presence', string> => ({
    importer(xml) {
        const data = xml.getAttribute(name);
        if (data === 'presence') {
            return data;
        }
        if (data) {
            return new Date(data);
        }
    },
    exporter(xml, value) {
        let data: string;
        if (typeof value === 'string') {
            data = value;
        } else {
            data = value.toISOString();
        }
        xml.setAttribute(name, data);
    }
});

export default [
    {
        aliases: ['pubsub'],
        defaultType: 'user',
        element: 'pubsub',
        fields: {
            publishOptions: splicePath(null, 'publish-options', 'dataform')
        },
        namespace: NS_PUBSUB,
        path: 'iq.pubsub',
        type: 'user',
        typeField: 'context'
    },
    {
        aliases: ['pubsub'],
        defaultType: 'user',
        element: 'pubsub',
        fields: {
            purge: childAttribute(null, 'purge', 'node')
        },
        namespace: NS_PUBSUB_OWNER,
        path: 'iq.pubsub',
        type: 'owner',
        typeField: 'context'
    },
    addAlias(NS_DATAFORM, 'x', [
        'iq.pubsub.configure.form',
        'iq.pubsub.defaultConfiguration.form',
        'message.pubsub.configuration.form'
    ]),
    addAlias(NS_RSM, 'set', ['iq.pubsub.fetch']),
    extendStanzaError({
        pubsubError: childEnum(NS_PUBSUB_ERRORS, [
            'closed-node',
            'configuration-required',
            'invalid-jid',
            'invalid-options',
            'invalid-payload',
            'invalid-subid',
            'item-forbidden',
            'item-required',
            'jid-required',
            'max-items-exceeded',
            'max-nodes-exceeded',
            'nodeid-required',
            'not-in-roster-group',
            'not-subscribed',
            'payload-too-big',
            'payload-required',
            'pending-subscription',
            'presence-subscription-required',
            'subid-required',
            'too-many-subscriptions',
            'unsupported',
            'unsupported-access-model'
        ]),
        pubsubUnsupportedFeature: childAttribute(NS_PUBSUB_ERRORS, 'unsupported', 'feature')
    }),
    {
        element: 'subscribe',
        fields: {
            jid: JIDAttribute('jid'),
            node: attribute('node')
        },
        namespace: NS_PUBSUB,
        path: 'iq.pubsub.subscribe'
    },
    {
        element: 'unsubscribe',
        fields: {
            jid: JIDAttribute('jid'),
            node: attribute('node'),
            subid: attribute('subid')
        },
        namespace: NS_PUBSUB,
        path: 'iq.pubsub.unsubscribe'
    },
    {
        element: 'subscription',
        fields: {
            configurable: childBoolean(null, 'subscribe-options'),
            configurationRequired: deepChildBoolean([
                { namespace: null, element: 'subscribe-options' },
                { namespace: null, element: 'required' }
            ]),
            jid: JIDAttribute('jid'),
            node: attribute('node'),
            state: attribute('subscription'),
            subid: attribute('subid')
        },
        namespace: NS_PUBSUB,
        path: 'iq.pubsub.subscription'
    },
    {
        element: 'create',
        fields: {
            node: attribute('node')
        },
        namespace: NS_PUBSUB,
        path: 'iq.pubsub.create'
    },
    {
        aliases: [{ path: 'iq.pubsub.destroy', selector: 'owner' }],
        element: 'delete',
        fields: {
            node: attribute('node')
        },
        namespace: NS_PUBSUB_OWNER
    },
    {
        aliases: [{ path: 'iq.pubsub.configure', selector: 'owner', impliedType: true }],
        element: 'configure',
        fields: {
            node: attribute('node')
        },
        namespace: NS_PUBSUB_OWNER,
        type: 'owner'
    },
    {
        aliases: [{ path: 'iq.pubsub.configure', selector: 'user', impliedType: true }],
        element: 'configure',
        fields: {
            node: attribute('node')
        },
        namespace: NS_PUBSUB,
        type: 'user'
    },
    {
        element: 'publish',
        fields: {
            node: attribute('node')
        },
        namespace: NS_PUBSUB,
        path: 'iq.pubsub.publish'
    },
    {
        element: 'retract',
        fields: {
            id: childAttribute(null, 'item', 'id'),
            node: attribute('node'),
            notify: booleanAttribute('notify')
        },
        namespace: NS_PUBSUB,
        path: 'iq.pubsub.retract'
    },
    {
        element: 'items',
        fields: {
            max: integerAttribute('max_items'),
            node: attribute('node')
        },
        namespace: NS_PUBSUB,
        path: 'iq.pubsub.fetch'
    },
    {
        aliases: [
            'pubsubitem',
            'iq.pubsub.publish.item',
            { multiple: true, path: 'iq.pubsub.fetch.items' }
        ],
        element: 'item',
        fields: {
            id: attribute('id'),
            publisher: JIDAttribute('publisher')
        },
        namespace: NS_PUBSUB
    },
    {
        element: 'event',
        fields: {
            eventType: childEnum(null, [
                'purge',
                'delete',
                'subscription',
                'configuration',
                'items'
            ])
        },
        namespace: NS_PUBSUB_EVENT,
        path: 'message.pubsub'
    },
    {
        aliases: [{ path: 'message.pubsub.items.published', multiple: true }],
        element: 'item',
        fields: {
            id: attribute('id'),
            node: attribute('node'),
            publisher: JIDAttribute('publisher')
        },
        namespace: NS_PUBSUB_EVENT,
        path: 'pubsubeventitem'
    },
    {
        element: 'purge',
        fields: {
            node: attribute('node')
        },
        namespace: NS_PUBSUB_EVENT,
        path: 'message.pubsub.purge'
    },
    {
        element: 'delete',
        fields: {
            node: attribute('node'),
            redirect: childAttribute(null, 'redirect', 'uri')
        },
        namespace: NS_PUBSUB_EVENT,
        path: 'message.pubsub.delete'
    },
    {
        element: 'subscription',
        fields: {
            expires: dateOrPresenceAttribute('expiry'),
            jid: JIDAttribute('jid'),
            node: attribute('node'),
            subid: attribute('subid'),
            type: attribute('subscription')
        },
        namespace: NS_PUBSUB_EVENT,
        path: 'message.pubsub.subscription'
    },
    {
        element: 'configuration',
        fields: {
            node: attribute('node')
        },
        namespace: NS_PUBSUB_EVENT,
        path: 'message.pubsub.configuration'
    },
    {
        element: 'items',
        fields: {
            node: attribute('node'),
            retracted: multipleChildAttribute(null, 'retracted', 'id')
        },
        namespace: NS_PUBSUB_EVENT,
        path: 'message.pubsub.items'
    }
] as DefinitionOptions[];
