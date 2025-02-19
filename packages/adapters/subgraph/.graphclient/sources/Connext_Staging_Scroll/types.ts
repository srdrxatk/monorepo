// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace ConnextStagingScrollTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  stagingscroll_BigDecimal: any;
  BigInt: any;
  stagingscroll_Bytes: any;
  stagingscroll_Int8: any;
  Timestamp: any;
};

export type stagingscroll_AggregateRoot = {
  id: Scalars['ID'];
  root: Scalars['stagingscroll_Bytes'];
  blockNumber: Scalars['BigInt'];
};

export type stagingscroll_AggregateRootProposed = {
  id: Scalars['ID'];
  aggregateRoot: Scalars['stagingscroll_Bytes'];
  rootTimestamp: Scalars['BigInt'];
  endOfDispute: Scalars['BigInt'];
  domain: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  blockNumber?: Maybe<Scalars['BigInt']>;
};

export type stagingscroll_AggregateRootProposed_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  aggregateRoot?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  aggregateRoot_not?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  aggregateRoot_gt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  aggregateRoot_lt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  aggregateRoot_gte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  aggregateRoot_lte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  aggregateRoot_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  aggregateRoot_not_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  aggregateRoot_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  aggregateRoot_not_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  rootTimestamp?: InputMaybe<Scalars['BigInt']>;
  rootTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  rootTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  rootTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  rootTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  rootTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  rootTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rootTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endOfDispute?: InputMaybe<Scalars['BigInt']>;
  endOfDispute_not?: InputMaybe<Scalars['BigInt']>;
  endOfDispute_gt?: InputMaybe<Scalars['BigInt']>;
  endOfDispute_lt?: InputMaybe<Scalars['BigInt']>;
  endOfDispute_gte?: InputMaybe<Scalars['BigInt']>;
  endOfDispute_lte?: InputMaybe<Scalars['BigInt']>;
  endOfDispute_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endOfDispute_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  domain?: InputMaybe<Scalars['BigInt']>;
  domain_not?: InputMaybe<Scalars['BigInt']>;
  domain_gt?: InputMaybe<Scalars['BigInt']>;
  domain_lt?: InputMaybe<Scalars['BigInt']>;
  domain_gte?: InputMaybe<Scalars['BigInt']>;
  domain_lte?: InputMaybe<Scalars['BigInt']>;
  domain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  domain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<stagingscroll_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<stagingscroll_AggregateRootProposed_filter>>>;
  or?: InputMaybe<Array<InputMaybe<stagingscroll_AggregateRootProposed_filter>>>;
};

export type stagingscroll_AggregateRootProposed_orderBy =
  | 'id'
  | 'aggregateRoot'
  | 'rootTimestamp'
  | 'endOfDispute'
  | 'domain'
  | 'timestamp'
  | 'blockNumber';

export type stagingscroll_AggregateRoot_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  root?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  root_not?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  root_gt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  root_lt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  root_gte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  root_lte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  root_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  root_not_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  root_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  root_not_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<stagingscroll_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<stagingscroll_AggregateRoot_filter>>>;
  or?: InputMaybe<Array<InputMaybe<stagingscroll_AggregateRoot_filter>>>;
};

export type stagingscroll_AggregateRoot_orderBy =
  | 'id'
  | 'root'
  | 'blockNumber';

export type stagingscroll_Aggregation_interval =
  | 'hour'
  | 'day';

export type stagingscroll_Asset = {
  id: Scalars['ID'];
  key?: Maybe<Scalars['stagingscroll_Bytes']>;
  decimal?: Maybe<Scalars['BigInt']>;
  adoptedDecimal?: Maybe<Scalars['BigInt']>;
  canonicalId?: Maybe<Scalars['stagingscroll_Bytes']>;
  canonicalDomain?: Maybe<Scalars['BigInt']>;
  adoptedAsset?: Maybe<Scalars['stagingscroll_Bytes']>;
  localAsset?: Maybe<Scalars['stagingscroll_Bytes']>;
  blockNumber?: Maybe<Scalars['BigInt']>;
  status?: Maybe<stagingscroll_AssetStatus>;
};

export type stagingscroll_AssetBalance = {
  id: Scalars['ID'];
  amount: Scalars['BigInt'];
  locked: Scalars['BigInt'];
  supplied: Scalars['BigInt'];
  removed: Scalars['BigInt'];
  router: stagingscroll_Router;
  asset: stagingscroll_Asset;
  feesEarned: Scalars['BigInt'];
};

export type stagingscroll_AssetBalance_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  locked?: InputMaybe<Scalars['BigInt']>;
  locked_not?: InputMaybe<Scalars['BigInt']>;
  locked_gt?: InputMaybe<Scalars['BigInt']>;
  locked_lt?: InputMaybe<Scalars['BigInt']>;
  locked_gte?: InputMaybe<Scalars['BigInt']>;
  locked_lte?: InputMaybe<Scalars['BigInt']>;
  locked_in?: InputMaybe<Array<Scalars['BigInt']>>;
  locked_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  supplied?: InputMaybe<Scalars['BigInt']>;
  supplied_not?: InputMaybe<Scalars['BigInt']>;
  supplied_gt?: InputMaybe<Scalars['BigInt']>;
  supplied_lt?: InputMaybe<Scalars['BigInt']>;
  supplied_gte?: InputMaybe<Scalars['BigInt']>;
  supplied_lte?: InputMaybe<Scalars['BigInt']>;
  supplied_in?: InputMaybe<Array<Scalars['BigInt']>>;
  supplied_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  removed?: InputMaybe<Scalars['BigInt']>;
  removed_not?: InputMaybe<Scalars['BigInt']>;
  removed_gt?: InputMaybe<Scalars['BigInt']>;
  removed_lt?: InputMaybe<Scalars['BigInt']>;
  removed_gte?: InputMaybe<Scalars['BigInt']>;
  removed_lte?: InputMaybe<Scalars['BigInt']>;
  removed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  removed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  router?: InputMaybe<Scalars['String']>;
  router_not?: InputMaybe<Scalars['String']>;
  router_gt?: InputMaybe<Scalars['String']>;
  router_lt?: InputMaybe<Scalars['String']>;
  router_gte?: InputMaybe<Scalars['String']>;
  router_lte?: InputMaybe<Scalars['String']>;
  router_in?: InputMaybe<Array<Scalars['String']>>;
  router_not_in?: InputMaybe<Array<Scalars['String']>>;
  router_contains?: InputMaybe<Scalars['String']>;
  router_contains_nocase?: InputMaybe<Scalars['String']>;
  router_not_contains?: InputMaybe<Scalars['String']>;
  router_not_contains_nocase?: InputMaybe<Scalars['String']>;
  router_starts_with?: InputMaybe<Scalars['String']>;
  router_starts_with_nocase?: InputMaybe<Scalars['String']>;
  router_not_starts_with?: InputMaybe<Scalars['String']>;
  router_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  router_ends_with?: InputMaybe<Scalars['String']>;
  router_ends_with_nocase?: InputMaybe<Scalars['String']>;
  router_not_ends_with?: InputMaybe<Scalars['String']>;
  router_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  router_?: InputMaybe<stagingscroll_Router_filter>;
  asset?: InputMaybe<Scalars['String']>;
  asset_not?: InputMaybe<Scalars['String']>;
  asset_gt?: InputMaybe<Scalars['String']>;
  asset_lt?: InputMaybe<Scalars['String']>;
  asset_gte?: InputMaybe<Scalars['String']>;
  asset_lte?: InputMaybe<Scalars['String']>;
  asset_in?: InputMaybe<Array<Scalars['String']>>;
  asset_not_in?: InputMaybe<Array<Scalars['String']>>;
  asset_contains?: InputMaybe<Scalars['String']>;
  asset_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_not_contains?: InputMaybe<Scalars['String']>;
  asset_not_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_starts_with?: InputMaybe<Scalars['String']>;
  asset_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_starts_with?: InputMaybe<Scalars['String']>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_ends_with?: InputMaybe<Scalars['String']>;
  asset_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_ends_with?: InputMaybe<Scalars['String']>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_?: InputMaybe<stagingscroll_Asset_filter>;
  feesEarned?: InputMaybe<Scalars['BigInt']>;
  feesEarned_not?: InputMaybe<Scalars['BigInt']>;
  feesEarned_gt?: InputMaybe<Scalars['BigInt']>;
  feesEarned_lt?: InputMaybe<Scalars['BigInt']>;
  feesEarned_gte?: InputMaybe<Scalars['BigInt']>;
  feesEarned_lte?: InputMaybe<Scalars['BigInt']>;
  feesEarned_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feesEarned_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<stagingscroll_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<stagingscroll_AssetBalance_filter>>>;
  or?: InputMaybe<Array<InputMaybe<stagingscroll_AssetBalance_filter>>>;
};

export type stagingscroll_AssetBalance_orderBy =
  | 'id'
  | 'amount'
  | 'locked'
  | 'supplied'
  | 'removed'
  | 'router'
  | 'router__id'
  | 'router__isActive'
  | 'router__owner'
  | 'router__recipient'
  | 'router__proposedOwner'
  | 'router__proposedTimestamp'
  | 'asset'
  | 'asset__id'
  | 'asset__key'
  | 'asset__decimal'
  | 'asset__adoptedDecimal'
  | 'asset__canonicalId'
  | 'asset__canonicalDomain'
  | 'asset__adoptedAsset'
  | 'asset__localAsset'
  | 'asset__blockNumber'
  | 'feesEarned';

export type stagingscroll_AssetStatus = {
  id: Scalars['ID'];
  status?: Maybe<Scalars['Boolean']>;
};

export type stagingscroll_AssetStatus_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  status?: InputMaybe<Scalars['Boolean']>;
  status_not?: InputMaybe<Scalars['Boolean']>;
  status_in?: InputMaybe<Array<Scalars['Boolean']>>;
  status_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<stagingscroll_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<stagingscroll_AssetStatus_filter>>>;
  or?: InputMaybe<Array<InputMaybe<stagingscroll_AssetStatus_filter>>>;
};

export type stagingscroll_AssetStatus_orderBy =
  | 'id'
  | 'status';

export type stagingscroll_Asset_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  key?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  key_not?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  key_gt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  key_lt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  key_gte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  key_lte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  key_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  key_not_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  key_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  key_not_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  decimal?: InputMaybe<Scalars['BigInt']>;
  decimal_not?: InputMaybe<Scalars['BigInt']>;
  decimal_gt?: InputMaybe<Scalars['BigInt']>;
  decimal_lt?: InputMaybe<Scalars['BigInt']>;
  decimal_gte?: InputMaybe<Scalars['BigInt']>;
  decimal_lte?: InputMaybe<Scalars['BigInt']>;
  decimal_in?: InputMaybe<Array<Scalars['BigInt']>>;
  decimal_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  adoptedDecimal?: InputMaybe<Scalars['BigInt']>;
  adoptedDecimal_not?: InputMaybe<Scalars['BigInt']>;
  adoptedDecimal_gt?: InputMaybe<Scalars['BigInt']>;
  adoptedDecimal_lt?: InputMaybe<Scalars['BigInt']>;
  adoptedDecimal_gte?: InputMaybe<Scalars['BigInt']>;
  adoptedDecimal_lte?: InputMaybe<Scalars['BigInt']>;
  adoptedDecimal_in?: InputMaybe<Array<Scalars['BigInt']>>;
  adoptedDecimal_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  canonicalId?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  canonicalId_not?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  canonicalId_gt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  canonicalId_lt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  canonicalId_gte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  canonicalId_lte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  canonicalId_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  canonicalId_not_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  canonicalId_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  canonicalId_not_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  canonicalDomain?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_not?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_gt?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_lt?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_gte?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_lte?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  canonicalDomain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  adoptedAsset?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  adoptedAsset_not?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  adoptedAsset_gt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  adoptedAsset_lt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  adoptedAsset_gte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  adoptedAsset_lte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  adoptedAsset_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  adoptedAsset_not_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  adoptedAsset_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  adoptedAsset_not_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  localAsset?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  localAsset_not?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  localAsset_gt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  localAsset_lt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  localAsset_gte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  localAsset_lte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  localAsset_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  localAsset_not_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  localAsset_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  localAsset_not_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  status?: InputMaybe<Scalars['String']>;
  status_not?: InputMaybe<Scalars['String']>;
  status_gt?: InputMaybe<Scalars['String']>;
  status_lt?: InputMaybe<Scalars['String']>;
  status_gte?: InputMaybe<Scalars['String']>;
  status_lte?: InputMaybe<Scalars['String']>;
  status_in?: InputMaybe<Array<Scalars['String']>>;
  status_not_in?: InputMaybe<Array<Scalars['String']>>;
  status_contains?: InputMaybe<Scalars['String']>;
  status_contains_nocase?: InputMaybe<Scalars['String']>;
  status_not_contains?: InputMaybe<Scalars['String']>;
  status_not_contains_nocase?: InputMaybe<Scalars['String']>;
  status_starts_with?: InputMaybe<Scalars['String']>;
  status_starts_with_nocase?: InputMaybe<Scalars['String']>;
  status_not_starts_with?: InputMaybe<Scalars['String']>;
  status_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  status_ends_with?: InputMaybe<Scalars['String']>;
  status_ends_with_nocase?: InputMaybe<Scalars['String']>;
  status_not_ends_with?: InputMaybe<Scalars['String']>;
  status_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  status_?: InputMaybe<stagingscroll_AssetStatus_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<stagingscroll_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<stagingscroll_Asset_filter>>>;
  or?: InputMaybe<Array<InputMaybe<stagingscroll_Asset_filter>>>;
};

export type stagingscroll_Asset_orderBy =
  | 'id'
  | 'key'
  | 'decimal'
  | 'adoptedDecimal'
  | 'canonicalId'
  | 'canonicalDomain'
  | 'adoptedAsset'
  | 'localAsset'
  | 'blockNumber'
  | 'status'
  | 'status__id'
  | 'status__status';

export type stagingscroll_BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type stagingscroll_Block_height = {
  hash?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type stagingscroll_ConnectorMeta = {
  id: Scalars['ID'];
  spokeDomain?: Maybe<Scalars['BigInt']>;
  hubDomain?: Maybe<Scalars['BigInt']>;
  amb?: Maybe<Scalars['stagingscroll_Bytes']>;
  rootManager?: Maybe<Scalars['stagingscroll_Bytes']>;
  mirrorConnector?: Maybe<Scalars['stagingscroll_Bytes']>;
};

export type stagingscroll_ConnectorMeta_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  spokeDomain?: InputMaybe<Scalars['BigInt']>;
  spokeDomain_not?: InputMaybe<Scalars['BigInt']>;
  spokeDomain_gt?: InputMaybe<Scalars['BigInt']>;
  spokeDomain_lt?: InputMaybe<Scalars['BigInt']>;
  spokeDomain_gte?: InputMaybe<Scalars['BigInt']>;
  spokeDomain_lte?: InputMaybe<Scalars['BigInt']>;
  spokeDomain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  spokeDomain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  hubDomain?: InputMaybe<Scalars['BigInt']>;
  hubDomain_not?: InputMaybe<Scalars['BigInt']>;
  hubDomain_gt?: InputMaybe<Scalars['BigInt']>;
  hubDomain_lt?: InputMaybe<Scalars['BigInt']>;
  hubDomain_gte?: InputMaybe<Scalars['BigInt']>;
  hubDomain_lte?: InputMaybe<Scalars['BigInt']>;
  hubDomain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  hubDomain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amb?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  amb_not?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  amb_gt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  amb_lt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  amb_gte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  amb_lte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  amb_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  amb_not_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  amb_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  amb_not_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  rootManager?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  rootManager_not?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  rootManager_gt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  rootManager_lt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  rootManager_gte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  rootManager_lte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  rootManager_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  rootManager_not_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  rootManager_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  rootManager_not_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  mirrorConnector?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  mirrorConnector_not?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  mirrorConnector_gt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  mirrorConnector_lt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  mirrorConnector_gte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  mirrorConnector_lte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  mirrorConnector_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  mirrorConnector_not_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  mirrorConnector_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  mirrorConnector_not_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<stagingscroll_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<stagingscroll_ConnectorMeta_filter>>>;
  or?: InputMaybe<Array<InputMaybe<stagingscroll_ConnectorMeta_filter>>>;
};

export type stagingscroll_ConnectorMeta_orderBy =
  | 'id'
  | 'spokeDomain'
  | 'hubDomain'
  | 'amb'
  | 'rootManager'
  | 'mirrorConnector';

export type stagingscroll_DestinationTransfer = {
  id: Scalars['ID'];
  chainId?: Maybe<Scalars['BigInt']>;
  transferId?: Maybe<Scalars['stagingscroll_Bytes']>;
  nonce?: Maybe<Scalars['BigInt']>;
  status?: Maybe<stagingscroll_TransferStatus>;
  routers?: Maybe<Array<stagingscroll_Router>>;
  originDomain?: Maybe<Scalars['BigInt']>;
  destinationDomain?: Maybe<Scalars['BigInt']>;
  canonicalDomain?: Maybe<Scalars['BigInt']>;
  to?: Maybe<Scalars['stagingscroll_Bytes']>;
  delegate?: Maybe<Scalars['stagingscroll_Bytes']>;
  receiveLocal?: Maybe<Scalars['Boolean']>;
  callData?: Maybe<Scalars['stagingscroll_Bytes']>;
  slippage?: Maybe<Scalars['BigInt']>;
  bumpSlippageCount?: Maybe<Scalars['BigInt']>;
  originSender?: Maybe<Scalars['stagingscroll_Bytes']>;
  bridgedAmt?: Maybe<Scalars['BigInt']>;
  normalizedIn?: Maybe<Scalars['BigInt']>;
  canonicalId?: Maybe<Scalars['stagingscroll_Bytes']>;
  asset?: Maybe<stagingscroll_Asset>;
  amount?: Maybe<Scalars['BigInt']>;
  routersFee?: Maybe<Scalars['BigInt']>;
  executedCaller?: Maybe<Scalars['stagingscroll_Bytes']>;
  executedTransactionHash?: Maybe<Scalars['stagingscroll_Bytes']>;
  executedTimestamp?: Maybe<Scalars['BigInt']>;
  executedGasPrice?: Maybe<Scalars['BigInt']>;
  executedGasLimit?: Maybe<Scalars['BigInt']>;
  executedBlockNumber?: Maybe<Scalars['BigInt']>;
  executedTxOrigin?: Maybe<Scalars['stagingscroll_Bytes']>;
  executedTxNonce?: Maybe<Scalars['BigInt']>;
  reconciledCaller?: Maybe<Scalars['stagingscroll_Bytes']>;
  reconciledTransactionHash?: Maybe<Scalars['stagingscroll_Bytes']>;
  reconciledTimestamp?: Maybe<Scalars['BigInt']>;
  reconciledGasPrice?: Maybe<Scalars['BigInt']>;
  reconciledGasLimit?: Maybe<Scalars['BigInt']>;
  reconciledBlockNumber?: Maybe<Scalars['BigInt']>;
  reconciledTxOrigin?: Maybe<Scalars['stagingscroll_Bytes']>;
  reconciledTxNonce?: Maybe<Scalars['BigInt']>;
};


export type stagingscroll_DestinationTransferroutersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingscroll_Router_orderBy>;
  orderDirection?: InputMaybe<stagingscroll_OrderDirection>;
  where?: InputMaybe<stagingscroll_Router_filter>;
};

export type stagingscroll_DestinationTransfer_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  chainId?: InputMaybe<Scalars['BigInt']>;
  chainId_not?: InputMaybe<Scalars['BigInt']>;
  chainId_gt?: InputMaybe<Scalars['BigInt']>;
  chainId_lt?: InputMaybe<Scalars['BigInt']>;
  chainId_gte?: InputMaybe<Scalars['BigInt']>;
  chainId_lte?: InputMaybe<Scalars['BigInt']>;
  chainId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  chainId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transferId?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  transferId_not?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  transferId_gt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  transferId_lt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  transferId_gte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  transferId_lte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  transferId_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  transferId_not_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  transferId_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  transferId_not_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  nonce?: InputMaybe<Scalars['BigInt']>;
  nonce_not?: InputMaybe<Scalars['BigInt']>;
  nonce_gt?: InputMaybe<Scalars['BigInt']>;
  nonce_lt?: InputMaybe<Scalars['BigInt']>;
  nonce_gte?: InputMaybe<Scalars['BigInt']>;
  nonce_lte?: InputMaybe<Scalars['BigInt']>;
  nonce_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nonce_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  status?: InputMaybe<stagingscroll_TransferStatus>;
  status_not?: InputMaybe<stagingscroll_TransferStatus>;
  status_in?: InputMaybe<Array<stagingscroll_TransferStatus>>;
  status_not_in?: InputMaybe<Array<stagingscroll_TransferStatus>>;
  routers?: InputMaybe<Array<Scalars['String']>>;
  routers_not?: InputMaybe<Array<Scalars['String']>>;
  routers_contains?: InputMaybe<Array<Scalars['String']>>;
  routers_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  routers_not_contains?: InputMaybe<Array<Scalars['String']>>;
  routers_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  routers_?: InputMaybe<stagingscroll_Router_filter>;
  originDomain?: InputMaybe<Scalars['BigInt']>;
  originDomain_not?: InputMaybe<Scalars['BigInt']>;
  originDomain_gt?: InputMaybe<Scalars['BigInt']>;
  originDomain_lt?: InputMaybe<Scalars['BigInt']>;
  originDomain_gte?: InputMaybe<Scalars['BigInt']>;
  originDomain_lte?: InputMaybe<Scalars['BigInt']>;
  originDomain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  originDomain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  destinationDomain?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_not?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_gt?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_lt?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_gte?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_lte?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  destinationDomain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  canonicalDomain?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_not?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_gt?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_lt?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_gte?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_lte?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  canonicalDomain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  to?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  to_not?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  to_gt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  to_lt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  to_gte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  to_lte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  to_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  to_not_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  to_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  to_not_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  delegate?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  delegate_not?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  delegate_gt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  delegate_lt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  delegate_gte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  delegate_lte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  delegate_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  delegate_not_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  delegate_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  delegate_not_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  receiveLocal?: InputMaybe<Scalars['Boolean']>;
  receiveLocal_not?: InputMaybe<Scalars['Boolean']>;
  receiveLocal_in?: InputMaybe<Array<Scalars['Boolean']>>;
  receiveLocal_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  callData?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  callData_not?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  callData_gt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  callData_lt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  callData_gte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  callData_lte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  callData_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  callData_not_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  callData_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  callData_not_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  slippage?: InputMaybe<Scalars['BigInt']>;
  slippage_not?: InputMaybe<Scalars['BigInt']>;
  slippage_gt?: InputMaybe<Scalars['BigInt']>;
  slippage_lt?: InputMaybe<Scalars['BigInt']>;
  slippage_gte?: InputMaybe<Scalars['BigInt']>;
  slippage_lte?: InputMaybe<Scalars['BigInt']>;
  slippage_in?: InputMaybe<Array<Scalars['BigInt']>>;
  slippage_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bumpSlippageCount?: InputMaybe<Scalars['BigInt']>;
  bumpSlippageCount_not?: InputMaybe<Scalars['BigInt']>;
  bumpSlippageCount_gt?: InputMaybe<Scalars['BigInt']>;
  bumpSlippageCount_lt?: InputMaybe<Scalars['BigInt']>;
  bumpSlippageCount_gte?: InputMaybe<Scalars['BigInt']>;
  bumpSlippageCount_lte?: InputMaybe<Scalars['BigInt']>;
  bumpSlippageCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bumpSlippageCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  originSender?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  originSender_not?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  originSender_gt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  originSender_lt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  originSender_gte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  originSender_lte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  originSender_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  originSender_not_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  originSender_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  originSender_not_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  bridgedAmt?: InputMaybe<Scalars['BigInt']>;
  bridgedAmt_not?: InputMaybe<Scalars['BigInt']>;
  bridgedAmt_gt?: InputMaybe<Scalars['BigInt']>;
  bridgedAmt_lt?: InputMaybe<Scalars['BigInt']>;
  bridgedAmt_gte?: InputMaybe<Scalars['BigInt']>;
  bridgedAmt_lte?: InputMaybe<Scalars['BigInt']>;
  bridgedAmt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bridgedAmt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  normalizedIn?: InputMaybe<Scalars['BigInt']>;
  normalizedIn_not?: InputMaybe<Scalars['BigInt']>;
  normalizedIn_gt?: InputMaybe<Scalars['BigInt']>;
  normalizedIn_lt?: InputMaybe<Scalars['BigInt']>;
  normalizedIn_gte?: InputMaybe<Scalars['BigInt']>;
  normalizedIn_lte?: InputMaybe<Scalars['BigInt']>;
  normalizedIn_in?: InputMaybe<Array<Scalars['BigInt']>>;
  normalizedIn_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  canonicalId?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  canonicalId_not?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  canonicalId_gt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  canonicalId_lt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  canonicalId_gte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  canonicalId_lte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  canonicalId_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  canonicalId_not_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  canonicalId_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  canonicalId_not_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  asset?: InputMaybe<Scalars['String']>;
  asset_not?: InputMaybe<Scalars['String']>;
  asset_gt?: InputMaybe<Scalars['String']>;
  asset_lt?: InputMaybe<Scalars['String']>;
  asset_gte?: InputMaybe<Scalars['String']>;
  asset_lte?: InputMaybe<Scalars['String']>;
  asset_in?: InputMaybe<Array<Scalars['String']>>;
  asset_not_in?: InputMaybe<Array<Scalars['String']>>;
  asset_contains?: InputMaybe<Scalars['String']>;
  asset_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_not_contains?: InputMaybe<Scalars['String']>;
  asset_not_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_starts_with?: InputMaybe<Scalars['String']>;
  asset_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_starts_with?: InputMaybe<Scalars['String']>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_ends_with?: InputMaybe<Scalars['String']>;
  asset_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_ends_with?: InputMaybe<Scalars['String']>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_?: InputMaybe<stagingscroll_Asset_filter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  routersFee?: InputMaybe<Scalars['BigInt']>;
  routersFee_not?: InputMaybe<Scalars['BigInt']>;
  routersFee_gt?: InputMaybe<Scalars['BigInt']>;
  routersFee_lt?: InputMaybe<Scalars['BigInt']>;
  routersFee_gte?: InputMaybe<Scalars['BigInt']>;
  routersFee_lte?: InputMaybe<Scalars['BigInt']>;
  routersFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  routersFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executedCaller?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  executedCaller_not?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  executedCaller_gt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  executedCaller_lt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  executedCaller_gte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  executedCaller_lte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  executedCaller_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  executedCaller_not_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  executedCaller_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  executedCaller_not_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  executedTransactionHash?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  executedTransactionHash_not?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  executedTransactionHash_gt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  executedTransactionHash_lt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  executedTransactionHash_gte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  executedTransactionHash_lte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  executedTransactionHash_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  executedTransactionHash_not_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  executedTransactionHash_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  executedTransactionHash_not_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  executedTimestamp?: InputMaybe<Scalars['BigInt']>;
  executedTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  executedTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  executedTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  executedTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  executedTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  executedTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executedTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executedGasPrice?: InputMaybe<Scalars['BigInt']>;
  executedGasPrice_not?: InputMaybe<Scalars['BigInt']>;
  executedGasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  executedGasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  executedGasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  executedGasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  executedGasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executedGasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executedGasLimit?: InputMaybe<Scalars['BigInt']>;
  executedGasLimit_not?: InputMaybe<Scalars['BigInt']>;
  executedGasLimit_gt?: InputMaybe<Scalars['BigInt']>;
  executedGasLimit_lt?: InputMaybe<Scalars['BigInt']>;
  executedGasLimit_gte?: InputMaybe<Scalars['BigInt']>;
  executedGasLimit_lte?: InputMaybe<Scalars['BigInt']>;
  executedGasLimit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executedGasLimit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executedBlockNumber?: InputMaybe<Scalars['BigInt']>;
  executedBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  executedBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  executedBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  executedBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  executedBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  executedBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executedBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executedTxOrigin?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  executedTxOrigin_not?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  executedTxOrigin_gt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  executedTxOrigin_lt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  executedTxOrigin_gte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  executedTxOrigin_lte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  executedTxOrigin_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  executedTxOrigin_not_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  executedTxOrigin_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  executedTxOrigin_not_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  executedTxNonce?: InputMaybe<Scalars['BigInt']>;
  executedTxNonce_not?: InputMaybe<Scalars['BigInt']>;
  executedTxNonce_gt?: InputMaybe<Scalars['BigInt']>;
  executedTxNonce_lt?: InputMaybe<Scalars['BigInt']>;
  executedTxNonce_gte?: InputMaybe<Scalars['BigInt']>;
  executedTxNonce_lte?: InputMaybe<Scalars['BigInt']>;
  executedTxNonce_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executedTxNonce_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reconciledCaller?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  reconciledCaller_not?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  reconciledCaller_gt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  reconciledCaller_lt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  reconciledCaller_gte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  reconciledCaller_lte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  reconciledCaller_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  reconciledCaller_not_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  reconciledCaller_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  reconciledCaller_not_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  reconciledTransactionHash?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  reconciledTransactionHash_not?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  reconciledTransactionHash_gt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  reconciledTransactionHash_lt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  reconciledTransactionHash_gte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  reconciledTransactionHash_lte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  reconciledTransactionHash_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  reconciledTransactionHash_not_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  reconciledTransactionHash_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  reconciledTransactionHash_not_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  reconciledTimestamp?: InputMaybe<Scalars['BigInt']>;
  reconciledTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  reconciledTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  reconciledTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  reconciledTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  reconciledTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  reconciledTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reconciledTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reconciledGasPrice?: InputMaybe<Scalars['BigInt']>;
  reconciledGasPrice_not?: InputMaybe<Scalars['BigInt']>;
  reconciledGasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  reconciledGasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  reconciledGasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  reconciledGasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  reconciledGasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reconciledGasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reconciledGasLimit?: InputMaybe<Scalars['BigInt']>;
  reconciledGasLimit_not?: InputMaybe<Scalars['BigInt']>;
  reconciledGasLimit_gt?: InputMaybe<Scalars['BigInt']>;
  reconciledGasLimit_lt?: InputMaybe<Scalars['BigInt']>;
  reconciledGasLimit_gte?: InputMaybe<Scalars['BigInt']>;
  reconciledGasLimit_lte?: InputMaybe<Scalars['BigInt']>;
  reconciledGasLimit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reconciledGasLimit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reconciledBlockNumber?: InputMaybe<Scalars['BigInt']>;
  reconciledBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  reconciledBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  reconciledBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  reconciledBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  reconciledBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  reconciledBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reconciledBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reconciledTxOrigin?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  reconciledTxOrigin_not?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  reconciledTxOrigin_gt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  reconciledTxOrigin_lt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  reconciledTxOrigin_gte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  reconciledTxOrigin_lte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  reconciledTxOrigin_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  reconciledTxOrigin_not_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  reconciledTxOrigin_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  reconciledTxOrigin_not_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  reconciledTxNonce?: InputMaybe<Scalars['BigInt']>;
  reconciledTxNonce_not?: InputMaybe<Scalars['BigInt']>;
  reconciledTxNonce_gt?: InputMaybe<Scalars['BigInt']>;
  reconciledTxNonce_lt?: InputMaybe<Scalars['BigInt']>;
  reconciledTxNonce_gte?: InputMaybe<Scalars['BigInt']>;
  reconciledTxNonce_lte?: InputMaybe<Scalars['BigInt']>;
  reconciledTxNonce_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reconciledTxNonce_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<stagingscroll_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<stagingscroll_DestinationTransfer_filter>>>;
  or?: InputMaybe<Array<InputMaybe<stagingscroll_DestinationTransfer_filter>>>;
};

export type stagingscroll_DestinationTransfer_orderBy =
  | 'id'
  | 'chainId'
  | 'transferId'
  | 'nonce'
  | 'status'
  | 'routers'
  | 'originDomain'
  | 'destinationDomain'
  | 'canonicalDomain'
  | 'to'
  | 'delegate'
  | 'receiveLocal'
  | 'callData'
  | 'slippage'
  | 'bumpSlippageCount'
  | 'originSender'
  | 'bridgedAmt'
  | 'normalizedIn'
  | 'canonicalId'
  | 'asset'
  | 'asset__id'
  | 'asset__key'
  | 'asset__decimal'
  | 'asset__adoptedDecimal'
  | 'asset__canonicalId'
  | 'asset__canonicalDomain'
  | 'asset__adoptedAsset'
  | 'asset__localAsset'
  | 'asset__blockNumber'
  | 'amount'
  | 'routersFee'
  | 'executedCaller'
  | 'executedTransactionHash'
  | 'executedTimestamp'
  | 'executedGasPrice'
  | 'executedGasLimit'
  | 'executedBlockNumber'
  | 'executedTxOrigin'
  | 'executedTxNonce'
  | 'reconciledCaller'
  | 'reconciledTransactionHash'
  | 'reconciledTimestamp'
  | 'reconciledGasPrice'
  | 'reconciledGasLimit'
  | 'reconciledBlockNumber'
  | 'reconciledTxOrigin'
  | 'reconciledTxNonce';

export type stagingscroll_OptimisticRootFinalized = {
  id: Scalars['ID'];
  aggregateRoot: Scalars['stagingscroll_Bytes'];
  timestamp: Scalars['BigInt'];
  blockNumber?: Maybe<Scalars['BigInt']>;
};

export type stagingscroll_OptimisticRootFinalized_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  aggregateRoot?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  aggregateRoot_not?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  aggregateRoot_gt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  aggregateRoot_lt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  aggregateRoot_gte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  aggregateRoot_lte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  aggregateRoot_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  aggregateRoot_not_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  aggregateRoot_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  aggregateRoot_not_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<stagingscroll_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<stagingscroll_OptimisticRootFinalized_filter>>>;
  or?: InputMaybe<Array<InputMaybe<stagingscroll_OptimisticRootFinalized_filter>>>;
};

export type stagingscroll_OptimisticRootFinalized_orderBy =
  | 'id'
  | 'aggregateRoot'
  | 'timestamp'
  | 'blockNumber';

/** Defines the order direction, either ascending or descending */
export type stagingscroll_OrderDirection =
  | 'asc'
  | 'desc';

export type stagingscroll_OriginMessage = {
  id: Scalars['ID'];
  transferId?: Maybe<Scalars['stagingscroll_Bytes']>;
  destinationDomain?: Maybe<Scalars['BigInt']>;
  leaf?: Maybe<Scalars['stagingscroll_Bytes']>;
  index?: Maybe<Scalars['BigInt']>;
  message?: Maybe<Scalars['stagingscroll_Bytes']>;
  root?: Maybe<Scalars['stagingscroll_Bytes']>;
  transactionHash?: Maybe<Scalars['stagingscroll_Bytes']>;
  blockNumber?: Maybe<Scalars['BigInt']>;
  rootCount?: Maybe<stagingscroll_RootCount>;
};

export type stagingscroll_OriginMessage_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transferId?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  transferId_not?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  transferId_gt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  transferId_lt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  transferId_gte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  transferId_lte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  transferId_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  transferId_not_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  transferId_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  transferId_not_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  destinationDomain?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_not?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_gt?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_lt?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_gte?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_lte?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  destinationDomain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  leaf?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  leaf_not?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  leaf_gt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  leaf_lt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  leaf_gte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  leaf_lte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  leaf_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  leaf_not_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  leaf_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  leaf_not_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  index?: InputMaybe<Scalars['BigInt']>;
  index_not?: InputMaybe<Scalars['BigInt']>;
  index_gt?: InputMaybe<Scalars['BigInt']>;
  index_lt?: InputMaybe<Scalars['BigInt']>;
  index_gte?: InputMaybe<Scalars['BigInt']>;
  index_lte?: InputMaybe<Scalars['BigInt']>;
  index_in?: InputMaybe<Array<Scalars['BigInt']>>;
  index_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  message?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  message_not?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  message_gt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  message_lt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  message_gte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  message_lte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  message_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  message_not_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  message_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  message_not_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  root?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  root_not?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  root_gt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  root_lt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  root_gte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  root_lte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  root_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  root_not_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  root_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  root_not_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  transactionHash?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rootCount?: InputMaybe<Scalars['String']>;
  rootCount_not?: InputMaybe<Scalars['String']>;
  rootCount_gt?: InputMaybe<Scalars['String']>;
  rootCount_lt?: InputMaybe<Scalars['String']>;
  rootCount_gte?: InputMaybe<Scalars['String']>;
  rootCount_lte?: InputMaybe<Scalars['String']>;
  rootCount_in?: InputMaybe<Array<Scalars['String']>>;
  rootCount_not_in?: InputMaybe<Array<Scalars['String']>>;
  rootCount_contains?: InputMaybe<Scalars['String']>;
  rootCount_contains_nocase?: InputMaybe<Scalars['String']>;
  rootCount_not_contains?: InputMaybe<Scalars['String']>;
  rootCount_not_contains_nocase?: InputMaybe<Scalars['String']>;
  rootCount_starts_with?: InputMaybe<Scalars['String']>;
  rootCount_starts_with_nocase?: InputMaybe<Scalars['String']>;
  rootCount_not_starts_with?: InputMaybe<Scalars['String']>;
  rootCount_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  rootCount_ends_with?: InputMaybe<Scalars['String']>;
  rootCount_ends_with_nocase?: InputMaybe<Scalars['String']>;
  rootCount_not_ends_with?: InputMaybe<Scalars['String']>;
  rootCount_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  rootCount_?: InputMaybe<stagingscroll_RootCount_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<stagingscroll_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<stagingscroll_OriginMessage_filter>>>;
  or?: InputMaybe<Array<InputMaybe<stagingscroll_OriginMessage_filter>>>;
};

export type stagingscroll_OriginMessage_orderBy =
  | 'id'
  | 'transferId'
  | 'destinationDomain'
  | 'leaf'
  | 'index'
  | 'message'
  | 'root'
  | 'transactionHash'
  | 'blockNumber'
  | 'rootCount'
  | 'rootCount__id'
  | 'rootCount__count';

export type stagingscroll_OriginTransfer = {
  id: Scalars['ID'];
  chainId?: Maybe<Scalars['BigInt']>;
  transferId?: Maybe<Scalars['stagingscroll_Bytes']>;
  nonce?: Maybe<Scalars['BigInt']>;
  status?: Maybe<stagingscroll_TransferStatus>;
  messageHash?: Maybe<Scalars['stagingscroll_Bytes']>;
  originDomain?: Maybe<Scalars['BigInt']>;
  destinationDomain?: Maybe<Scalars['BigInt']>;
  canonicalDomain?: Maybe<Scalars['BigInt']>;
  to?: Maybe<Scalars['stagingscroll_Bytes']>;
  delegate?: Maybe<Scalars['stagingscroll_Bytes']>;
  receiveLocal?: Maybe<Scalars['Boolean']>;
  callData?: Maybe<Scalars['stagingscroll_Bytes']>;
  slippage?: Maybe<Scalars['BigInt']>;
  originSender?: Maybe<Scalars['stagingscroll_Bytes']>;
  bridgedAmt?: Maybe<Scalars['BigInt']>;
  normalizedIn?: Maybe<Scalars['BigInt']>;
  canonicalId?: Maybe<Scalars['stagingscroll_Bytes']>;
  asset?: Maybe<stagingscroll_Asset>;
  transactingAsset?: Maybe<Scalars['stagingscroll_Bytes']>;
  message?: Maybe<stagingscroll_OriginMessage>;
  bumpRelayerFeeCount?: Maybe<Scalars['BigInt']>;
  relayerFees?: Maybe<Array<stagingscroll_RelayerFee>>;
  initialRelayerFeeAsset?: Maybe<Scalars['stagingscroll_Bytes']>;
  caller?: Maybe<Scalars['stagingscroll_Bytes']>;
  transactionHash?: Maybe<Scalars['stagingscroll_Bytes']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  gasPrice?: Maybe<Scalars['BigInt']>;
  gasLimit?: Maybe<Scalars['BigInt']>;
  blockNumber?: Maybe<Scalars['BigInt']>;
  txOrigin?: Maybe<Scalars['stagingscroll_Bytes']>;
  txNonce?: Maybe<Scalars['BigInt']>;
};


export type stagingscroll_OriginTransferrelayerFeesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingscroll_RelayerFee_orderBy>;
  orderDirection?: InputMaybe<stagingscroll_OrderDirection>;
  where?: InputMaybe<stagingscroll_RelayerFee_filter>;
};

export type stagingscroll_OriginTransfer_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  chainId?: InputMaybe<Scalars['BigInt']>;
  chainId_not?: InputMaybe<Scalars['BigInt']>;
  chainId_gt?: InputMaybe<Scalars['BigInt']>;
  chainId_lt?: InputMaybe<Scalars['BigInt']>;
  chainId_gte?: InputMaybe<Scalars['BigInt']>;
  chainId_lte?: InputMaybe<Scalars['BigInt']>;
  chainId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  chainId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transferId?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  transferId_not?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  transferId_gt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  transferId_lt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  transferId_gte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  transferId_lte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  transferId_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  transferId_not_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  transferId_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  transferId_not_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  nonce?: InputMaybe<Scalars['BigInt']>;
  nonce_not?: InputMaybe<Scalars['BigInt']>;
  nonce_gt?: InputMaybe<Scalars['BigInt']>;
  nonce_lt?: InputMaybe<Scalars['BigInt']>;
  nonce_gte?: InputMaybe<Scalars['BigInt']>;
  nonce_lte?: InputMaybe<Scalars['BigInt']>;
  nonce_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nonce_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  status?: InputMaybe<stagingscroll_TransferStatus>;
  status_not?: InputMaybe<stagingscroll_TransferStatus>;
  status_in?: InputMaybe<Array<stagingscroll_TransferStatus>>;
  status_not_in?: InputMaybe<Array<stagingscroll_TransferStatus>>;
  messageHash?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  messageHash_not?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  messageHash_gt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  messageHash_lt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  messageHash_gte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  messageHash_lte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  messageHash_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  messageHash_not_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  messageHash_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  messageHash_not_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  originDomain?: InputMaybe<Scalars['BigInt']>;
  originDomain_not?: InputMaybe<Scalars['BigInt']>;
  originDomain_gt?: InputMaybe<Scalars['BigInt']>;
  originDomain_lt?: InputMaybe<Scalars['BigInt']>;
  originDomain_gte?: InputMaybe<Scalars['BigInt']>;
  originDomain_lte?: InputMaybe<Scalars['BigInt']>;
  originDomain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  originDomain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  destinationDomain?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_not?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_gt?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_lt?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_gte?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_lte?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  destinationDomain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  canonicalDomain?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_not?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_gt?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_lt?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_gte?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_lte?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  canonicalDomain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  to?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  to_not?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  to_gt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  to_lt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  to_gte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  to_lte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  to_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  to_not_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  to_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  to_not_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  delegate?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  delegate_not?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  delegate_gt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  delegate_lt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  delegate_gte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  delegate_lte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  delegate_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  delegate_not_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  delegate_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  delegate_not_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  receiveLocal?: InputMaybe<Scalars['Boolean']>;
  receiveLocal_not?: InputMaybe<Scalars['Boolean']>;
  receiveLocal_in?: InputMaybe<Array<Scalars['Boolean']>>;
  receiveLocal_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  callData?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  callData_not?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  callData_gt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  callData_lt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  callData_gte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  callData_lte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  callData_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  callData_not_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  callData_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  callData_not_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  slippage?: InputMaybe<Scalars['BigInt']>;
  slippage_not?: InputMaybe<Scalars['BigInt']>;
  slippage_gt?: InputMaybe<Scalars['BigInt']>;
  slippage_lt?: InputMaybe<Scalars['BigInt']>;
  slippage_gte?: InputMaybe<Scalars['BigInt']>;
  slippage_lte?: InputMaybe<Scalars['BigInt']>;
  slippage_in?: InputMaybe<Array<Scalars['BigInt']>>;
  slippage_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  originSender?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  originSender_not?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  originSender_gt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  originSender_lt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  originSender_gte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  originSender_lte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  originSender_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  originSender_not_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  originSender_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  originSender_not_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  bridgedAmt?: InputMaybe<Scalars['BigInt']>;
  bridgedAmt_not?: InputMaybe<Scalars['BigInt']>;
  bridgedAmt_gt?: InputMaybe<Scalars['BigInt']>;
  bridgedAmt_lt?: InputMaybe<Scalars['BigInt']>;
  bridgedAmt_gte?: InputMaybe<Scalars['BigInt']>;
  bridgedAmt_lte?: InputMaybe<Scalars['BigInt']>;
  bridgedAmt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bridgedAmt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  normalizedIn?: InputMaybe<Scalars['BigInt']>;
  normalizedIn_not?: InputMaybe<Scalars['BigInt']>;
  normalizedIn_gt?: InputMaybe<Scalars['BigInt']>;
  normalizedIn_lt?: InputMaybe<Scalars['BigInt']>;
  normalizedIn_gte?: InputMaybe<Scalars['BigInt']>;
  normalizedIn_lte?: InputMaybe<Scalars['BigInt']>;
  normalizedIn_in?: InputMaybe<Array<Scalars['BigInt']>>;
  normalizedIn_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  canonicalId?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  canonicalId_not?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  canonicalId_gt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  canonicalId_lt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  canonicalId_gte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  canonicalId_lte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  canonicalId_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  canonicalId_not_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  canonicalId_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  canonicalId_not_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  asset?: InputMaybe<Scalars['String']>;
  asset_not?: InputMaybe<Scalars['String']>;
  asset_gt?: InputMaybe<Scalars['String']>;
  asset_lt?: InputMaybe<Scalars['String']>;
  asset_gte?: InputMaybe<Scalars['String']>;
  asset_lte?: InputMaybe<Scalars['String']>;
  asset_in?: InputMaybe<Array<Scalars['String']>>;
  asset_not_in?: InputMaybe<Array<Scalars['String']>>;
  asset_contains?: InputMaybe<Scalars['String']>;
  asset_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_not_contains?: InputMaybe<Scalars['String']>;
  asset_not_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_starts_with?: InputMaybe<Scalars['String']>;
  asset_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_starts_with?: InputMaybe<Scalars['String']>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_ends_with?: InputMaybe<Scalars['String']>;
  asset_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_ends_with?: InputMaybe<Scalars['String']>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_?: InputMaybe<stagingscroll_Asset_filter>;
  transactingAsset?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  transactingAsset_not?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  transactingAsset_gt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  transactingAsset_lt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  transactingAsset_gte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  transactingAsset_lte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  transactingAsset_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  transactingAsset_not_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  transactingAsset_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  transactingAsset_not_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  message?: InputMaybe<Scalars['String']>;
  message_not?: InputMaybe<Scalars['String']>;
  message_gt?: InputMaybe<Scalars['String']>;
  message_lt?: InputMaybe<Scalars['String']>;
  message_gte?: InputMaybe<Scalars['String']>;
  message_lte?: InputMaybe<Scalars['String']>;
  message_in?: InputMaybe<Array<Scalars['String']>>;
  message_not_in?: InputMaybe<Array<Scalars['String']>>;
  message_contains?: InputMaybe<Scalars['String']>;
  message_contains_nocase?: InputMaybe<Scalars['String']>;
  message_not_contains?: InputMaybe<Scalars['String']>;
  message_not_contains_nocase?: InputMaybe<Scalars['String']>;
  message_starts_with?: InputMaybe<Scalars['String']>;
  message_starts_with_nocase?: InputMaybe<Scalars['String']>;
  message_not_starts_with?: InputMaybe<Scalars['String']>;
  message_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  message_ends_with?: InputMaybe<Scalars['String']>;
  message_ends_with_nocase?: InputMaybe<Scalars['String']>;
  message_not_ends_with?: InputMaybe<Scalars['String']>;
  message_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  message_?: InputMaybe<stagingscroll_OriginMessage_filter>;
  bumpRelayerFeeCount?: InputMaybe<Scalars['BigInt']>;
  bumpRelayerFeeCount_not?: InputMaybe<Scalars['BigInt']>;
  bumpRelayerFeeCount_gt?: InputMaybe<Scalars['BigInt']>;
  bumpRelayerFeeCount_lt?: InputMaybe<Scalars['BigInt']>;
  bumpRelayerFeeCount_gte?: InputMaybe<Scalars['BigInt']>;
  bumpRelayerFeeCount_lte?: InputMaybe<Scalars['BigInt']>;
  bumpRelayerFeeCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bumpRelayerFeeCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  relayerFees?: InputMaybe<Array<Scalars['String']>>;
  relayerFees_not?: InputMaybe<Array<Scalars['String']>>;
  relayerFees_contains?: InputMaybe<Array<Scalars['String']>>;
  relayerFees_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  relayerFees_not_contains?: InputMaybe<Array<Scalars['String']>>;
  relayerFees_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  relayerFees_?: InputMaybe<stagingscroll_RelayerFee_filter>;
  initialRelayerFeeAsset?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  initialRelayerFeeAsset_not?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  initialRelayerFeeAsset_gt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  initialRelayerFeeAsset_lt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  initialRelayerFeeAsset_gte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  initialRelayerFeeAsset_lte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  initialRelayerFeeAsset_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  initialRelayerFeeAsset_not_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  initialRelayerFeeAsset_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  initialRelayerFeeAsset_not_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  caller?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  caller_not?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  caller_gt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  caller_lt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  caller_gte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  caller_lte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  caller_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  caller_not_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  caller_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  caller_not_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  transactionHash?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasLimit?: InputMaybe<Scalars['BigInt']>;
  gasLimit_not?: InputMaybe<Scalars['BigInt']>;
  gasLimit_gt?: InputMaybe<Scalars['BigInt']>;
  gasLimit_lt?: InputMaybe<Scalars['BigInt']>;
  gasLimit_gte?: InputMaybe<Scalars['BigInt']>;
  gasLimit_lte?: InputMaybe<Scalars['BigInt']>;
  gasLimit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasLimit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txOrigin?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  txOrigin_not?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  txOrigin_gt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  txOrigin_lt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  txOrigin_gte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  txOrigin_lte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  txOrigin_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  txOrigin_not_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  txOrigin_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  txOrigin_not_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  txNonce?: InputMaybe<Scalars['BigInt']>;
  txNonce_not?: InputMaybe<Scalars['BigInt']>;
  txNonce_gt?: InputMaybe<Scalars['BigInt']>;
  txNonce_lt?: InputMaybe<Scalars['BigInt']>;
  txNonce_gte?: InputMaybe<Scalars['BigInt']>;
  txNonce_lte?: InputMaybe<Scalars['BigInt']>;
  txNonce_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txNonce_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<stagingscroll_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<stagingscroll_OriginTransfer_filter>>>;
  or?: InputMaybe<Array<InputMaybe<stagingscroll_OriginTransfer_filter>>>;
};

export type stagingscroll_OriginTransfer_orderBy =
  | 'id'
  | 'chainId'
  | 'transferId'
  | 'nonce'
  | 'status'
  | 'messageHash'
  | 'originDomain'
  | 'destinationDomain'
  | 'canonicalDomain'
  | 'to'
  | 'delegate'
  | 'receiveLocal'
  | 'callData'
  | 'slippage'
  | 'originSender'
  | 'bridgedAmt'
  | 'normalizedIn'
  | 'canonicalId'
  | 'asset'
  | 'asset__id'
  | 'asset__key'
  | 'asset__decimal'
  | 'asset__adoptedDecimal'
  | 'asset__canonicalId'
  | 'asset__canonicalDomain'
  | 'asset__adoptedAsset'
  | 'asset__localAsset'
  | 'asset__blockNumber'
  | 'transactingAsset'
  | 'message'
  | 'message__id'
  | 'message__transferId'
  | 'message__destinationDomain'
  | 'message__leaf'
  | 'message__index'
  | 'message__message'
  | 'message__root'
  | 'message__transactionHash'
  | 'message__blockNumber'
  | 'bumpRelayerFeeCount'
  | 'relayerFees'
  | 'initialRelayerFeeAsset'
  | 'caller'
  | 'transactionHash'
  | 'timestamp'
  | 'gasPrice'
  | 'gasLimit'
  | 'blockNumber'
  | 'txOrigin'
  | 'txNonce';

export type Query = {
  stagingscroll_asset?: Maybe<stagingscroll_Asset>;
  stagingscroll_assets: Array<stagingscroll_Asset>;
  stagingscroll_assetStatus?: Maybe<stagingscroll_AssetStatus>;
  stagingscroll_assetStatuses: Array<stagingscroll_AssetStatus>;
  stagingscroll_assetBalance?: Maybe<stagingscroll_AssetBalance>;
  stagingscroll_assetBalances: Array<stagingscroll_AssetBalance>;
  stagingscroll_router?: Maybe<stagingscroll_Router>;
  stagingscroll_routers: Array<stagingscroll_Router>;
  stagingscroll_routerDailyTVL?: Maybe<stagingscroll_RouterDailyTVL>;
  stagingscroll_routerDailyTVLs: Array<stagingscroll_RouterDailyTVL>;
  stagingscroll_routerLiquidityEvent?: Maybe<stagingscroll_RouterLiquidityEvent>;
  stagingscroll_routerLiquidityEvents: Array<stagingscroll_RouterLiquidityEvent>;
  stagingscroll_setting?: Maybe<stagingscroll_Setting>;
  stagingscroll_settings: Array<stagingscroll_Setting>;
  stagingscroll_relayer?: Maybe<stagingscroll_Relayer>;
  stagingscroll_relayers: Array<stagingscroll_Relayer>;
  stagingscroll_sequencer?: Maybe<stagingscroll_Sequencer>;
  stagingscroll_sequencers: Array<stagingscroll_Sequencer>;
  stagingscroll_relayerFee?: Maybe<stagingscroll_RelayerFee>;
  stagingscroll_relayerFees: Array<stagingscroll_RelayerFee>;
  stagingscroll_originTransfer?: Maybe<stagingscroll_OriginTransfer>;
  stagingscroll_originTransfers: Array<stagingscroll_OriginTransfer>;
  stagingscroll_destinationTransfer?: Maybe<stagingscroll_DestinationTransfer>;
  stagingscroll_destinationTransfers: Array<stagingscroll_DestinationTransfer>;
  stagingscroll_originMessage?: Maybe<stagingscroll_OriginMessage>;
  stagingscroll_originMessages: Array<stagingscroll_OriginMessage>;
  stagingscroll_aggregateRoot?: Maybe<stagingscroll_AggregateRoot>;
  stagingscroll_aggregateRoots: Array<stagingscroll_AggregateRoot>;
  stagingscroll_connectorMeta?: Maybe<stagingscroll_ConnectorMeta>;
  stagingscroll_connectorMetas: Array<stagingscroll_ConnectorMeta>;
  stagingscroll_rootCount?: Maybe<stagingscroll_RootCount>;
  stagingscroll_rootCounts: Array<stagingscroll_RootCount>;
  stagingscroll_rootMessageSent?: Maybe<stagingscroll_RootMessageSent>;
  stagingscroll_rootMessageSents: Array<stagingscroll_RootMessageSent>;
  stagingscroll_relayerFeesIncrease?: Maybe<stagingscroll_RelayerFeesIncrease>;
  stagingscroll_relayerFeesIncreases: Array<stagingscroll_RelayerFeesIncrease>;
  stagingscroll_slippageUpdate?: Maybe<stagingscroll_SlippageUpdate>;
  stagingscroll_slippageUpdates: Array<stagingscroll_SlippageUpdate>;
  stagingscroll_snapshotRoot?: Maybe<stagingscroll_SnapshotRoot>;
  stagingscroll_snapshotRoots: Array<stagingscroll_SnapshotRoot>;
  stagingscroll_spokeConnectorMode?: Maybe<stagingscroll_SpokeConnectorMode>;
  stagingscroll_spokeConnectorModes: Array<stagingscroll_SpokeConnectorMode>;
  stagingscroll_aggregateRootProposed?: Maybe<stagingscroll_AggregateRootProposed>;
  stagingscroll_aggregateRootProposeds: Array<stagingscroll_AggregateRootProposed>;
  stagingscroll_optimisticRootFinalized?: Maybe<stagingscroll_OptimisticRootFinalized>;
  stagingscroll_optimisticRootFinalizeds: Array<stagingscroll_OptimisticRootFinalized>;
  /** Access to subgraph metadata */
  stagingscroll__meta?: Maybe<stagingscroll__Meta_>;
};


export type Querystagingscroll_assetArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingscroll_assetsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingscroll_Asset_orderBy>;
  orderDirection?: InputMaybe<stagingscroll_OrderDirection>;
  where?: InputMaybe<stagingscroll_Asset_filter>;
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingscroll_assetStatusArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingscroll_assetStatusesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingscroll_AssetStatus_orderBy>;
  orderDirection?: InputMaybe<stagingscroll_OrderDirection>;
  where?: InputMaybe<stagingscroll_AssetStatus_filter>;
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingscroll_assetBalanceArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingscroll_assetBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingscroll_AssetBalance_orderBy>;
  orderDirection?: InputMaybe<stagingscroll_OrderDirection>;
  where?: InputMaybe<stagingscroll_AssetBalance_filter>;
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingscroll_routerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingscroll_routersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingscroll_Router_orderBy>;
  orderDirection?: InputMaybe<stagingscroll_OrderDirection>;
  where?: InputMaybe<stagingscroll_Router_filter>;
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingscroll_routerDailyTVLArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingscroll_routerDailyTVLsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingscroll_RouterDailyTVL_orderBy>;
  orderDirection?: InputMaybe<stagingscroll_OrderDirection>;
  where?: InputMaybe<stagingscroll_RouterDailyTVL_filter>;
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingscroll_routerLiquidityEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingscroll_routerLiquidityEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingscroll_RouterLiquidityEvent_orderBy>;
  orderDirection?: InputMaybe<stagingscroll_OrderDirection>;
  where?: InputMaybe<stagingscroll_RouterLiquidityEvent_filter>;
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingscroll_settingArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingscroll_settingsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingscroll_Setting_orderBy>;
  orderDirection?: InputMaybe<stagingscroll_OrderDirection>;
  where?: InputMaybe<stagingscroll_Setting_filter>;
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingscroll_relayerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingscroll_relayersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingscroll_Relayer_orderBy>;
  orderDirection?: InputMaybe<stagingscroll_OrderDirection>;
  where?: InputMaybe<stagingscroll_Relayer_filter>;
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingscroll_sequencerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingscroll_sequencersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingscroll_Sequencer_orderBy>;
  orderDirection?: InputMaybe<stagingscroll_OrderDirection>;
  where?: InputMaybe<stagingscroll_Sequencer_filter>;
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingscroll_relayerFeeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingscroll_relayerFeesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingscroll_RelayerFee_orderBy>;
  orderDirection?: InputMaybe<stagingscroll_OrderDirection>;
  where?: InputMaybe<stagingscroll_RelayerFee_filter>;
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingscroll_originTransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingscroll_originTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingscroll_OriginTransfer_orderBy>;
  orderDirection?: InputMaybe<stagingscroll_OrderDirection>;
  where?: InputMaybe<stagingscroll_OriginTransfer_filter>;
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingscroll_destinationTransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingscroll_destinationTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingscroll_DestinationTransfer_orderBy>;
  orderDirection?: InputMaybe<stagingscroll_OrderDirection>;
  where?: InputMaybe<stagingscroll_DestinationTransfer_filter>;
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingscroll_originMessageArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingscroll_originMessagesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingscroll_OriginMessage_orderBy>;
  orderDirection?: InputMaybe<stagingscroll_OrderDirection>;
  where?: InputMaybe<stagingscroll_OriginMessage_filter>;
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingscroll_aggregateRootArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingscroll_aggregateRootsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingscroll_AggregateRoot_orderBy>;
  orderDirection?: InputMaybe<stagingscroll_OrderDirection>;
  where?: InputMaybe<stagingscroll_AggregateRoot_filter>;
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingscroll_connectorMetaArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingscroll_connectorMetasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingscroll_ConnectorMeta_orderBy>;
  orderDirection?: InputMaybe<stagingscroll_OrderDirection>;
  where?: InputMaybe<stagingscroll_ConnectorMeta_filter>;
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingscroll_rootCountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingscroll_rootCountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingscroll_RootCount_orderBy>;
  orderDirection?: InputMaybe<stagingscroll_OrderDirection>;
  where?: InputMaybe<stagingscroll_RootCount_filter>;
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingscroll_rootMessageSentArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingscroll_rootMessageSentsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingscroll_RootMessageSent_orderBy>;
  orderDirection?: InputMaybe<stagingscroll_OrderDirection>;
  where?: InputMaybe<stagingscroll_RootMessageSent_filter>;
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingscroll_relayerFeesIncreaseArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingscroll_relayerFeesIncreasesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingscroll_RelayerFeesIncrease_orderBy>;
  orderDirection?: InputMaybe<stagingscroll_OrderDirection>;
  where?: InputMaybe<stagingscroll_RelayerFeesIncrease_filter>;
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingscroll_slippageUpdateArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingscroll_slippageUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingscroll_SlippageUpdate_orderBy>;
  orderDirection?: InputMaybe<stagingscroll_OrderDirection>;
  where?: InputMaybe<stagingscroll_SlippageUpdate_filter>;
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingscroll_snapshotRootArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingscroll_snapshotRootsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingscroll_SnapshotRoot_orderBy>;
  orderDirection?: InputMaybe<stagingscroll_OrderDirection>;
  where?: InputMaybe<stagingscroll_SnapshotRoot_filter>;
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingscroll_spokeConnectorModeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingscroll_spokeConnectorModesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingscroll_SpokeConnectorMode_orderBy>;
  orderDirection?: InputMaybe<stagingscroll_OrderDirection>;
  where?: InputMaybe<stagingscroll_SpokeConnectorMode_filter>;
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingscroll_aggregateRootProposedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingscroll_aggregateRootProposedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingscroll_AggregateRootProposed_orderBy>;
  orderDirection?: InputMaybe<stagingscroll_OrderDirection>;
  where?: InputMaybe<stagingscroll_AggregateRootProposed_filter>;
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingscroll_optimisticRootFinalizedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingscroll_optimisticRootFinalizedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingscroll_OptimisticRootFinalized_orderBy>;
  orderDirection?: InputMaybe<stagingscroll_OrderDirection>;
  where?: InputMaybe<stagingscroll_OptimisticRootFinalized_filter>;
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingscroll__metaArgs = {
  block?: InputMaybe<stagingscroll_Block_height>;
};

export type stagingscroll_Relayer = {
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  relayer?: Maybe<Scalars['stagingscroll_Bytes']>;
};

export type stagingscroll_RelayerFee = {
  id: Scalars['ID'];
  transfer: stagingscroll_OriginTransfer;
  fee: Scalars['BigInt'];
  asset: Scalars['stagingscroll_Bytes'];
};

export type stagingscroll_RelayerFee_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transfer?: InputMaybe<Scalars['String']>;
  transfer_not?: InputMaybe<Scalars['String']>;
  transfer_gt?: InputMaybe<Scalars['String']>;
  transfer_lt?: InputMaybe<Scalars['String']>;
  transfer_gte?: InputMaybe<Scalars['String']>;
  transfer_lte?: InputMaybe<Scalars['String']>;
  transfer_in?: InputMaybe<Array<Scalars['String']>>;
  transfer_not_in?: InputMaybe<Array<Scalars['String']>>;
  transfer_contains?: InputMaybe<Scalars['String']>;
  transfer_contains_nocase?: InputMaybe<Scalars['String']>;
  transfer_not_contains?: InputMaybe<Scalars['String']>;
  transfer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transfer_starts_with?: InputMaybe<Scalars['String']>;
  transfer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transfer_not_starts_with?: InputMaybe<Scalars['String']>;
  transfer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transfer_ends_with?: InputMaybe<Scalars['String']>;
  transfer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transfer_not_ends_with?: InputMaybe<Scalars['String']>;
  transfer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transfer_?: InputMaybe<stagingscroll_OriginTransfer_filter>;
  fee?: InputMaybe<Scalars['BigInt']>;
  fee_not?: InputMaybe<Scalars['BigInt']>;
  fee_gt?: InputMaybe<Scalars['BigInt']>;
  fee_lt?: InputMaybe<Scalars['BigInt']>;
  fee_gte?: InputMaybe<Scalars['BigInt']>;
  fee_lte?: InputMaybe<Scalars['BigInt']>;
  fee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  fee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  asset?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  asset_not?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  asset_gt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  asset_lt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  asset_gte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  asset_lte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  asset_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  asset_not_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  asset_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  asset_not_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<stagingscroll_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<stagingscroll_RelayerFee_filter>>>;
  or?: InputMaybe<Array<InputMaybe<stagingscroll_RelayerFee_filter>>>;
};

export type stagingscroll_RelayerFee_orderBy =
  | 'id'
  | 'transfer'
  | 'transfer__id'
  | 'transfer__chainId'
  | 'transfer__transferId'
  | 'transfer__nonce'
  | 'transfer__status'
  | 'transfer__messageHash'
  | 'transfer__originDomain'
  | 'transfer__destinationDomain'
  | 'transfer__canonicalDomain'
  | 'transfer__to'
  | 'transfer__delegate'
  | 'transfer__receiveLocal'
  | 'transfer__callData'
  | 'transfer__slippage'
  | 'transfer__originSender'
  | 'transfer__bridgedAmt'
  | 'transfer__normalizedIn'
  | 'transfer__canonicalId'
  | 'transfer__transactingAsset'
  | 'transfer__bumpRelayerFeeCount'
  | 'transfer__initialRelayerFeeAsset'
  | 'transfer__caller'
  | 'transfer__transactionHash'
  | 'transfer__timestamp'
  | 'transfer__gasPrice'
  | 'transfer__gasLimit'
  | 'transfer__blockNumber'
  | 'transfer__txOrigin'
  | 'transfer__txNonce'
  | 'fee'
  | 'asset';

export type stagingscroll_RelayerFeesIncrease = {
  id: Scalars['ID'];
  transfer: stagingscroll_OriginTransfer;
  increase?: Maybe<Scalars['BigInt']>;
  asset?: Maybe<Scalars['stagingscroll_Bytes']>;
  caller: Scalars['stagingscroll_Bytes'];
  transactionHash: Scalars['stagingscroll_Bytes'];
  timestamp: Scalars['BigInt'];
  gasPrice: Scalars['BigInt'];
  gasLimit: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
};

export type stagingscroll_RelayerFeesIncrease_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transfer?: InputMaybe<Scalars['String']>;
  transfer_not?: InputMaybe<Scalars['String']>;
  transfer_gt?: InputMaybe<Scalars['String']>;
  transfer_lt?: InputMaybe<Scalars['String']>;
  transfer_gte?: InputMaybe<Scalars['String']>;
  transfer_lte?: InputMaybe<Scalars['String']>;
  transfer_in?: InputMaybe<Array<Scalars['String']>>;
  transfer_not_in?: InputMaybe<Array<Scalars['String']>>;
  transfer_contains?: InputMaybe<Scalars['String']>;
  transfer_contains_nocase?: InputMaybe<Scalars['String']>;
  transfer_not_contains?: InputMaybe<Scalars['String']>;
  transfer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transfer_starts_with?: InputMaybe<Scalars['String']>;
  transfer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transfer_not_starts_with?: InputMaybe<Scalars['String']>;
  transfer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transfer_ends_with?: InputMaybe<Scalars['String']>;
  transfer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transfer_not_ends_with?: InputMaybe<Scalars['String']>;
  transfer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transfer_?: InputMaybe<stagingscroll_OriginTransfer_filter>;
  increase?: InputMaybe<Scalars['BigInt']>;
  increase_not?: InputMaybe<Scalars['BigInt']>;
  increase_gt?: InputMaybe<Scalars['BigInt']>;
  increase_lt?: InputMaybe<Scalars['BigInt']>;
  increase_gte?: InputMaybe<Scalars['BigInt']>;
  increase_lte?: InputMaybe<Scalars['BigInt']>;
  increase_in?: InputMaybe<Array<Scalars['BigInt']>>;
  increase_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  asset?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  asset_not?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  asset_gt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  asset_lt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  asset_gte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  asset_lte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  asset_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  asset_not_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  asset_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  asset_not_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  caller?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  caller_not?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  caller_gt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  caller_lt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  caller_gte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  caller_lte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  caller_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  caller_not_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  caller_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  caller_not_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  transactionHash?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasLimit?: InputMaybe<Scalars['BigInt']>;
  gasLimit_not?: InputMaybe<Scalars['BigInt']>;
  gasLimit_gt?: InputMaybe<Scalars['BigInt']>;
  gasLimit_lt?: InputMaybe<Scalars['BigInt']>;
  gasLimit_gte?: InputMaybe<Scalars['BigInt']>;
  gasLimit_lte?: InputMaybe<Scalars['BigInt']>;
  gasLimit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasLimit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<stagingscroll_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<stagingscroll_RelayerFeesIncrease_filter>>>;
  or?: InputMaybe<Array<InputMaybe<stagingscroll_RelayerFeesIncrease_filter>>>;
};

export type stagingscroll_RelayerFeesIncrease_orderBy =
  | 'id'
  | 'transfer'
  | 'transfer__id'
  | 'transfer__chainId'
  | 'transfer__transferId'
  | 'transfer__nonce'
  | 'transfer__status'
  | 'transfer__messageHash'
  | 'transfer__originDomain'
  | 'transfer__destinationDomain'
  | 'transfer__canonicalDomain'
  | 'transfer__to'
  | 'transfer__delegate'
  | 'transfer__receiveLocal'
  | 'transfer__callData'
  | 'transfer__slippage'
  | 'transfer__originSender'
  | 'transfer__bridgedAmt'
  | 'transfer__normalizedIn'
  | 'transfer__canonicalId'
  | 'transfer__transactingAsset'
  | 'transfer__bumpRelayerFeeCount'
  | 'transfer__initialRelayerFeeAsset'
  | 'transfer__caller'
  | 'transfer__transactionHash'
  | 'transfer__timestamp'
  | 'transfer__gasPrice'
  | 'transfer__gasLimit'
  | 'transfer__blockNumber'
  | 'transfer__txOrigin'
  | 'transfer__txNonce'
  | 'increase'
  | 'asset'
  | 'caller'
  | 'transactionHash'
  | 'timestamp'
  | 'gasPrice'
  | 'gasLimit'
  | 'blockNumber';

export type stagingscroll_Relayer_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isActive_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isActive_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  relayer?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  relayer_not?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  relayer_gt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  relayer_lt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  relayer_gte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  relayer_lte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  relayer_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  relayer_not_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  relayer_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  relayer_not_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<stagingscroll_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<stagingscroll_Relayer_filter>>>;
  or?: InputMaybe<Array<InputMaybe<stagingscroll_Relayer_filter>>>;
};

export type stagingscroll_Relayer_orderBy =
  | 'id'
  | 'isActive'
  | 'relayer';

export type stagingscroll_RootCount = {
  id: Scalars['ID'];
  count?: Maybe<Scalars['BigInt']>;
};

export type stagingscroll_RootCount_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  count?: InputMaybe<Scalars['BigInt']>;
  count_not?: InputMaybe<Scalars['BigInt']>;
  count_gt?: InputMaybe<Scalars['BigInt']>;
  count_lt?: InputMaybe<Scalars['BigInt']>;
  count_gte?: InputMaybe<Scalars['BigInt']>;
  count_lte?: InputMaybe<Scalars['BigInt']>;
  count_in?: InputMaybe<Array<Scalars['BigInt']>>;
  count_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<stagingscroll_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<stagingscroll_RootCount_filter>>>;
  or?: InputMaybe<Array<InputMaybe<stagingscroll_RootCount_filter>>>;
};

export type stagingscroll_RootCount_orderBy =
  | 'id'
  | 'count';

export type stagingscroll_RootMessageSent = {
  id: Scalars['ID'];
  spokeDomain?: Maybe<Scalars['BigInt']>;
  hubDomain?: Maybe<Scalars['BigInt']>;
  root?: Maybe<Scalars['stagingscroll_Bytes']>;
  count?: Maybe<Scalars['BigInt']>;
  caller?: Maybe<Scalars['stagingscroll_Bytes']>;
  transactionHash?: Maybe<Scalars['stagingscroll_Bytes']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  gasPrice?: Maybe<Scalars['BigInt']>;
  gasLimit?: Maybe<Scalars['BigInt']>;
  blockNumber?: Maybe<Scalars['BigInt']>;
};

export type stagingscroll_RootMessageSent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  spokeDomain?: InputMaybe<Scalars['BigInt']>;
  spokeDomain_not?: InputMaybe<Scalars['BigInt']>;
  spokeDomain_gt?: InputMaybe<Scalars['BigInt']>;
  spokeDomain_lt?: InputMaybe<Scalars['BigInt']>;
  spokeDomain_gte?: InputMaybe<Scalars['BigInt']>;
  spokeDomain_lte?: InputMaybe<Scalars['BigInt']>;
  spokeDomain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  spokeDomain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  hubDomain?: InputMaybe<Scalars['BigInt']>;
  hubDomain_not?: InputMaybe<Scalars['BigInt']>;
  hubDomain_gt?: InputMaybe<Scalars['BigInt']>;
  hubDomain_lt?: InputMaybe<Scalars['BigInt']>;
  hubDomain_gte?: InputMaybe<Scalars['BigInt']>;
  hubDomain_lte?: InputMaybe<Scalars['BigInt']>;
  hubDomain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  hubDomain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  root?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  root_not?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  root_gt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  root_lt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  root_gte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  root_lte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  root_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  root_not_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  root_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  root_not_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  count?: InputMaybe<Scalars['BigInt']>;
  count_not?: InputMaybe<Scalars['BigInt']>;
  count_gt?: InputMaybe<Scalars['BigInt']>;
  count_lt?: InputMaybe<Scalars['BigInt']>;
  count_gte?: InputMaybe<Scalars['BigInt']>;
  count_lte?: InputMaybe<Scalars['BigInt']>;
  count_in?: InputMaybe<Array<Scalars['BigInt']>>;
  count_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  caller?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  caller_not?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  caller_gt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  caller_lt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  caller_gte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  caller_lte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  caller_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  caller_not_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  caller_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  caller_not_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  transactionHash?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasLimit?: InputMaybe<Scalars['BigInt']>;
  gasLimit_not?: InputMaybe<Scalars['BigInt']>;
  gasLimit_gt?: InputMaybe<Scalars['BigInt']>;
  gasLimit_lt?: InputMaybe<Scalars['BigInt']>;
  gasLimit_gte?: InputMaybe<Scalars['BigInt']>;
  gasLimit_lte?: InputMaybe<Scalars['BigInt']>;
  gasLimit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasLimit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<stagingscroll_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<stagingscroll_RootMessageSent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<stagingscroll_RootMessageSent_filter>>>;
};

export type stagingscroll_RootMessageSent_orderBy =
  | 'id'
  | 'spokeDomain'
  | 'hubDomain'
  | 'root'
  | 'count'
  | 'caller'
  | 'transactionHash'
  | 'timestamp'
  | 'gasPrice'
  | 'gasLimit'
  | 'blockNumber';

export type stagingscroll_Router = {
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  owner?: Maybe<Scalars['stagingscroll_Bytes']>;
  recipient?: Maybe<Scalars['stagingscroll_Bytes']>;
  proposedOwner?: Maybe<Scalars['stagingscroll_Bytes']>;
  proposedTimestamp?: Maybe<Scalars['BigInt']>;
  assetBalances: Array<stagingscroll_AssetBalance>;
};


export type stagingscroll_RouterassetBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingscroll_AssetBalance_orderBy>;
  orderDirection?: InputMaybe<stagingscroll_OrderDirection>;
  where?: InputMaybe<stagingscroll_AssetBalance_filter>;
};

export type stagingscroll_RouterDailyTVL = {
  id: Scalars['ID'];
  router: stagingscroll_Router;
  asset: stagingscroll_Asset;
  timestamp: Scalars['BigInt'];
  balance: Scalars['BigInt'];
};

export type stagingscroll_RouterDailyTVL_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  router?: InputMaybe<Scalars['String']>;
  router_not?: InputMaybe<Scalars['String']>;
  router_gt?: InputMaybe<Scalars['String']>;
  router_lt?: InputMaybe<Scalars['String']>;
  router_gte?: InputMaybe<Scalars['String']>;
  router_lte?: InputMaybe<Scalars['String']>;
  router_in?: InputMaybe<Array<Scalars['String']>>;
  router_not_in?: InputMaybe<Array<Scalars['String']>>;
  router_contains?: InputMaybe<Scalars['String']>;
  router_contains_nocase?: InputMaybe<Scalars['String']>;
  router_not_contains?: InputMaybe<Scalars['String']>;
  router_not_contains_nocase?: InputMaybe<Scalars['String']>;
  router_starts_with?: InputMaybe<Scalars['String']>;
  router_starts_with_nocase?: InputMaybe<Scalars['String']>;
  router_not_starts_with?: InputMaybe<Scalars['String']>;
  router_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  router_ends_with?: InputMaybe<Scalars['String']>;
  router_ends_with_nocase?: InputMaybe<Scalars['String']>;
  router_not_ends_with?: InputMaybe<Scalars['String']>;
  router_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  router_?: InputMaybe<stagingscroll_Router_filter>;
  asset?: InputMaybe<Scalars['String']>;
  asset_not?: InputMaybe<Scalars['String']>;
  asset_gt?: InputMaybe<Scalars['String']>;
  asset_lt?: InputMaybe<Scalars['String']>;
  asset_gte?: InputMaybe<Scalars['String']>;
  asset_lte?: InputMaybe<Scalars['String']>;
  asset_in?: InputMaybe<Array<Scalars['String']>>;
  asset_not_in?: InputMaybe<Array<Scalars['String']>>;
  asset_contains?: InputMaybe<Scalars['String']>;
  asset_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_not_contains?: InputMaybe<Scalars['String']>;
  asset_not_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_starts_with?: InputMaybe<Scalars['String']>;
  asset_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_starts_with?: InputMaybe<Scalars['String']>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_ends_with?: InputMaybe<Scalars['String']>;
  asset_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_ends_with?: InputMaybe<Scalars['String']>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_?: InputMaybe<stagingscroll_Asset_filter>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  balance?: InputMaybe<Scalars['BigInt']>;
  balance_not?: InputMaybe<Scalars['BigInt']>;
  balance_gt?: InputMaybe<Scalars['BigInt']>;
  balance_lt?: InputMaybe<Scalars['BigInt']>;
  balance_gte?: InputMaybe<Scalars['BigInt']>;
  balance_lte?: InputMaybe<Scalars['BigInt']>;
  balance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  balance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<stagingscroll_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<stagingscroll_RouterDailyTVL_filter>>>;
  or?: InputMaybe<Array<InputMaybe<stagingscroll_RouterDailyTVL_filter>>>;
};

export type stagingscroll_RouterDailyTVL_orderBy =
  | 'id'
  | 'router'
  | 'router__id'
  | 'router__isActive'
  | 'router__owner'
  | 'router__recipient'
  | 'router__proposedOwner'
  | 'router__proposedTimestamp'
  | 'asset'
  | 'asset__id'
  | 'asset__key'
  | 'asset__decimal'
  | 'asset__adoptedDecimal'
  | 'asset__canonicalId'
  | 'asset__canonicalDomain'
  | 'asset__adoptedAsset'
  | 'asset__localAsset'
  | 'asset__blockNumber'
  | 'timestamp'
  | 'balance';

export type stagingscroll_RouterLiquidityEvent = {
  id: Scalars['ID'];
  type?: Maybe<stagingscroll_RouterLiquidityEventType>;
  router: stagingscroll_Router;
  asset: stagingscroll_Asset;
  amount: Scalars['BigInt'];
  balance: Scalars['BigInt'];
  caller?: Maybe<Scalars['stagingscroll_Bytes']>;
  blockNumber: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  transactionHash: Scalars['stagingscroll_Bytes'];
  nonce: Scalars['BigInt'];
};

export type stagingscroll_RouterLiquidityEventType =
  | 'Add'
  | 'Remove';

export type stagingscroll_RouterLiquidityEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  type?: InputMaybe<stagingscroll_RouterLiquidityEventType>;
  type_not?: InputMaybe<stagingscroll_RouterLiquidityEventType>;
  type_in?: InputMaybe<Array<stagingscroll_RouterLiquidityEventType>>;
  type_not_in?: InputMaybe<Array<stagingscroll_RouterLiquidityEventType>>;
  router?: InputMaybe<Scalars['String']>;
  router_not?: InputMaybe<Scalars['String']>;
  router_gt?: InputMaybe<Scalars['String']>;
  router_lt?: InputMaybe<Scalars['String']>;
  router_gte?: InputMaybe<Scalars['String']>;
  router_lte?: InputMaybe<Scalars['String']>;
  router_in?: InputMaybe<Array<Scalars['String']>>;
  router_not_in?: InputMaybe<Array<Scalars['String']>>;
  router_contains?: InputMaybe<Scalars['String']>;
  router_contains_nocase?: InputMaybe<Scalars['String']>;
  router_not_contains?: InputMaybe<Scalars['String']>;
  router_not_contains_nocase?: InputMaybe<Scalars['String']>;
  router_starts_with?: InputMaybe<Scalars['String']>;
  router_starts_with_nocase?: InputMaybe<Scalars['String']>;
  router_not_starts_with?: InputMaybe<Scalars['String']>;
  router_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  router_ends_with?: InputMaybe<Scalars['String']>;
  router_ends_with_nocase?: InputMaybe<Scalars['String']>;
  router_not_ends_with?: InputMaybe<Scalars['String']>;
  router_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  router_?: InputMaybe<stagingscroll_Router_filter>;
  asset?: InputMaybe<Scalars['String']>;
  asset_not?: InputMaybe<Scalars['String']>;
  asset_gt?: InputMaybe<Scalars['String']>;
  asset_lt?: InputMaybe<Scalars['String']>;
  asset_gte?: InputMaybe<Scalars['String']>;
  asset_lte?: InputMaybe<Scalars['String']>;
  asset_in?: InputMaybe<Array<Scalars['String']>>;
  asset_not_in?: InputMaybe<Array<Scalars['String']>>;
  asset_contains?: InputMaybe<Scalars['String']>;
  asset_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_not_contains?: InputMaybe<Scalars['String']>;
  asset_not_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_starts_with?: InputMaybe<Scalars['String']>;
  asset_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_starts_with?: InputMaybe<Scalars['String']>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_ends_with?: InputMaybe<Scalars['String']>;
  asset_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_ends_with?: InputMaybe<Scalars['String']>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_?: InputMaybe<stagingscroll_Asset_filter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  balance?: InputMaybe<Scalars['BigInt']>;
  balance_not?: InputMaybe<Scalars['BigInt']>;
  balance_gt?: InputMaybe<Scalars['BigInt']>;
  balance_lt?: InputMaybe<Scalars['BigInt']>;
  balance_gte?: InputMaybe<Scalars['BigInt']>;
  balance_lte?: InputMaybe<Scalars['BigInt']>;
  balance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  balance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  caller?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  caller_not?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  caller_gt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  caller_lt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  caller_gte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  caller_lte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  caller_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  caller_not_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  caller_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  caller_not_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  nonce?: InputMaybe<Scalars['BigInt']>;
  nonce_not?: InputMaybe<Scalars['BigInt']>;
  nonce_gt?: InputMaybe<Scalars['BigInt']>;
  nonce_lt?: InputMaybe<Scalars['BigInt']>;
  nonce_gte?: InputMaybe<Scalars['BigInt']>;
  nonce_lte?: InputMaybe<Scalars['BigInt']>;
  nonce_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nonce_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<stagingscroll_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<stagingscroll_RouterLiquidityEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<stagingscroll_RouterLiquidityEvent_filter>>>;
};

export type stagingscroll_RouterLiquidityEvent_orderBy =
  | 'id'
  | 'type'
  | 'router'
  | 'router__id'
  | 'router__isActive'
  | 'router__owner'
  | 'router__recipient'
  | 'router__proposedOwner'
  | 'router__proposedTimestamp'
  | 'asset'
  | 'asset__id'
  | 'asset__key'
  | 'asset__decimal'
  | 'asset__adoptedDecimal'
  | 'asset__canonicalId'
  | 'asset__canonicalDomain'
  | 'asset__adoptedAsset'
  | 'asset__localAsset'
  | 'asset__blockNumber'
  | 'amount'
  | 'balance'
  | 'caller'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionHash'
  | 'nonce';

export type stagingscroll_Router_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isActive_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isActive_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  owner?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  owner_not?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  owner_gt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  owner_lt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  owner_gte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  owner_lte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  owner_not_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  owner_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  recipient?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  recipient_not?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  recipient_gt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  recipient_lt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  recipient_gte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  recipient_lte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  recipient_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  recipient_not_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  recipient_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  recipient_not_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  proposedOwner?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  proposedOwner_not?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  proposedOwner_gt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  proposedOwner_lt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  proposedOwner_gte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  proposedOwner_lte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  proposedOwner_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  proposedOwner_not_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  proposedOwner_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  proposedOwner_not_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  proposedTimestamp?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  proposedTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  assetBalances_?: InputMaybe<stagingscroll_AssetBalance_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<stagingscroll_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<stagingscroll_Router_filter>>>;
  or?: InputMaybe<Array<InputMaybe<stagingscroll_Router_filter>>>;
};

export type stagingscroll_Router_orderBy =
  | 'id'
  | 'isActive'
  | 'owner'
  | 'recipient'
  | 'proposedOwner'
  | 'proposedTimestamp'
  | 'assetBalances';

export type stagingscroll_Sequencer = {
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  sequencer?: Maybe<Scalars['stagingscroll_Bytes']>;
};

export type stagingscroll_Sequencer_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isActive_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isActive_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  sequencer?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  sequencer_not?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  sequencer_gt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  sequencer_lt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  sequencer_gte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  sequencer_lte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  sequencer_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  sequencer_not_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  sequencer_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  sequencer_not_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<stagingscroll_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<stagingscroll_Sequencer_filter>>>;
  or?: InputMaybe<Array<InputMaybe<stagingscroll_Sequencer_filter>>>;
};

export type stagingscroll_Sequencer_orderBy =
  | 'id'
  | 'isActive'
  | 'sequencer';

export type stagingscroll_Setting = {
  id: Scalars['ID'];
  maxRoutersPerTransfer: Scalars['BigInt'];
  caller: Scalars['stagingscroll_Bytes'];
};

export type stagingscroll_Setting_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  maxRoutersPerTransfer?: InputMaybe<Scalars['BigInt']>;
  maxRoutersPerTransfer_not?: InputMaybe<Scalars['BigInt']>;
  maxRoutersPerTransfer_gt?: InputMaybe<Scalars['BigInt']>;
  maxRoutersPerTransfer_lt?: InputMaybe<Scalars['BigInt']>;
  maxRoutersPerTransfer_gte?: InputMaybe<Scalars['BigInt']>;
  maxRoutersPerTransfer_lte?: InputMaybe<Scalars['BigInt']>;
  maxRoutersPerTransfer_in?: InputMaybe<Array<Scalars['BigInt']>>;
  maxRoutersPerTransfer_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  caller?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  caller_not?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  caller_gt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  caller_lt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  caller_gte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  caller_lte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  caller_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  caller_not_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  caller_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  caller_not_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<stagingscroll_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<stagingscroll_Setting_filter>>>;
  or?: InputMaybe<Array<InputMaybe<stagingscroll_Setting_filter>>>;
};

export type stagingscroll_Setting_orderBy =
  | 'id'
  | 'maxRoutersPerTransfer'
  | 'caller';

export type stagingscroll_SlippageUpdate = {
  id: Scalars['ID'];
  transfer: stagingscroll_DestinationTransfer;
  slippage: Scalars['BigInt'];
  caller: Scalars['stagingscroll_Bytes'];
  transactionHash: Scalars['stagingscroll_Bytes'];
  timestamp: Scalars['BigInt'];
  gasPrice: Scalars['BigInt'];
  gasLimit: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
};

export type stagingscroll_SlippageUpdate_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transfer?: InputMaybe<Scalars['String']>;
  transfer_not?: InputMaybe<Scalars['String']>;
  transfer_gt?: InputMaybe<Scalars['String']>;
  transfer_lt?: InputMaybe<Scalars['String']>;
  transfer_gte?: InputMaybe<Scalars['String']>;
  transfer_lte?: InputMaybe<Scalars['String']>;
  transfer_in?: InputMaybe<Array<Scalars['String']>>;
  transfer_not_in?: InputMaybe<Array<Scalars['String']>>;
  transfer_contains?: InputMaybe<Scalars['String']>;
  transfer_contains_nocase?: InputMaybe<Scalars['String']>;
  transfer_not_contains?: InputMaybe<Scalars['String']>;
  transfer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transfer_starts_with?: InputMaybe<Scalars['String']>;
  transfer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transfer_not_starts_with?: InputMaybe<Scalars['String']>;
  transfer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transfer_ends_with?: InputMaybe<Scalars['String']>;
  transfer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transfer_not_ends_with?: InputMaybe<Scalars['String']>;
  transfer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transfer_?: InputMaybe<stagingscroll_DestinationTransfer_filter>;
  slippage?: InputMaybe<Scalars['BigInt']>;
  slippage_not?: InputMaybe<Scalars['BigInt']>;
  slippage_gt?: InputMaybe<Scalars['BigInt']>;
  slippage_lt?: InputMaybe<Scalars['BigInt']>;
  slippage_gte?: InputMaybe<Scalars['BigInt']>;
  slippage_lte?: InputMaybe<Scalars['BigInt']>;
  slippage_in?: InputMaybe<Array<Scalars['BigInt']>>;
  slippage_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  caller?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  caller_not?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  caller_gt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  caller_lt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  caller_gte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  caller_lte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  caller_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  caller_not_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  caller_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  caller_not_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  transactionHash?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasLimit?: InputMaybe<Scalars['BigInt']>;
  gasLimit_not?: InputMaybe<Scalars['BigInt']>;
  gasLimit_gt?: InputMaybe<Scalars['BigInt']>;
  gasLimit_lt?: InputMaybe<Scalars['BigInt']>;
  gasLimit_gte?: InputMaybe<Scalars['BigInt']>;
  gasLimit_lte?: InputMaybe<Scalars['BigInt']>;
  gasLimit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasLimit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<stagingscroll_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<stagingscroll_SlippageUpdate_filter>>>;
  or?: InputMaybe<Array<InputMaybe<stagingscroll_SlippageUpdate_filter>>>;
};

export type stagingscroll_SlippageUpdate_orderBy =
  | 'id'
  | 'transfer'
  | 'transfer__id'
  | 'transfer__chainId'
  | 'transfer__transferId'
  | 'transfer__nonce'
  | 'transfer__status'
  | 'transfer__originDomain'
  | 'transfer__destinationDomain'
  | 'transfer__canonicalDomain'
  | 'transfer__to'
  | 'transfer__delegate'
  | 'transfer__receiveLocal'
  | 'transfer__callData'
  | 'transfer__slippage'
  | 'transfer__bumpSlippageCount'
  | 'transfer__originSender'
  | 'transfer__bridgedAmt'
  | 'transfer__normalizedIn'
  | 'transfer__canonicalId'
  | 'transfer__amount'
  | 'transfer__routersFee'
  | 'transfer__executedCaller'
  | 'transfer__executedTransactionHash'
  | 'transfer__executedTimestamp'
  | 'transfer__executedGasPrice'
  | 'transfer__executedGasLimit'
  | 'transfer__executedBlockNumber'
  | 'transfer__executedTxOrigin'
  | 'transfer__executedTxNonce'
  | 'transfer__reconciledCaller'
  | 'transfer__reconciledTransactionHash'
  | 'transfer__reconciledTimestamp'
  | 'transfer__reconciledGasPrice'
  | 'transfer__reconciledGasLimit'
  | 'transfer__reconciledBlockNumber'
  | 'transfer__reconciledTxOrigin'
  | 'transfer__reconciledTxNonce'
  | 'slippage'
  | 'caller'
  | 'transactionHash'
  | 'timestamp'
  | 'gasPrice'
  | 'gasLimit'
  | 'blockNumber';

export type stagingscroll_SnapshotRoot = {
  id: Scalars['ID'];
  spokeDomain?: Maybe<Scalars['BigInt']>;
  root: Scalars['stagingscroll_Bytes'];
  count: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
};

export type stagingscroll_SnapshotRoot_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  spokeDomain?: InputMaybe<Scalars['BigInt']>;
  spokeDomain_not?: InputMaybe<Scalars['BigInt']>;
  spokeDomain_gt?: InputMaybe<Scalars['BigInt']>;
  spokeDomain_lt?: InputMaybe<Scalars['BigInt']>;
  spokeDomain_gte?: InputMaybe<Scalars['BigInt']>;
  spokeDomain_lte?: InputMaybe<Scalars['BigInt']>;
  spokeDomain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  spokeDomain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  root?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  root_not?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  root_gt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  root_lt?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  root_gte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  root_lte?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  root_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  root_not_in?: InputMaybe<Array<Scalars['stagingscroll_Bytes']>>;
  root_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  root_not_contains?: InputMaybe<Scalars['stagingscroll_Bytes']>;
  count?: InputMaybe<Scalars['BigInt']>;
  count_not?: InputMaybe<Scalars['BigInt']>;
  count_gt?: InputMaybe<Scalars['BigInt']>;
  count_lt?: InputMaybe<Scalars['BigInt']>;
  count_gte?: InputMaybe<Scalars['BigInt']>;
  count_lte?: InputMaybe<Scalars['BigInt']>;
  count_in?: InputMaybe<Array<Scalars['BigInt']>>;
  count_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<stagingscroll_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<stagingscroll_SnapshotRoot_filter>>>;
  or?: InputMaybe<Array<InputMaybe<stagingscroll_SnapshotRoot_filter>>>;
};

export type stagingscroll_SnapshotRoot_orderBy =
  | 'id'
  | 'spokeDomain'
  | 'root'
  | 'count'
  | 'timestamp'
  | 'blockNumber';

export type stagingscroll_SpokeConnectorMode = {
  id: Scalars['ID'];
  mode: Scalars['String'];
};

export type stagingscroll_SpokeConnectorMode_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  mode?: InputMaybe<Scalars['String']>;
  mode_not?: InputMaybe<Scalars['String']>;
  mode_gt?: InputMaybe<Scalars['String']>;
  mode_lt?: InputMaybe<Scalars['String']>;
  mode_gte?: InputMaybe<Scalars['String']>;
  mode_lte?: InputMaybe<Scalars['String']>;
  mode_in?: InputMaybe<Array<Scalars['String']>>;
  mode_not_in?: InputMaybe<Array<Scalars['String']>>;
  mode_contains?: InputMaybe<Scalars['String']>;
  mode_contains_nocase?: InputMaybe<Scalars['String']>;
  mode_not_contains?: InputMaybe<Scalars['String']>;
  mode_not_contains_nocase?: InputMaybe<Scalars['String']>;
  mode_starts_with?: InputMaybe<Scalars['String']>;
  mode_starts_with_nocase?: InputMaybe<Scalars['String']>;
  mode_not_starts_with?: InputMaybe<Scalars['String']>;
  mode_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  mode_ends_with?: InputMaybe<Scalars['String']>;
  mode_ends_with_nocase?: InputMaybe<Scalars['String']>;
  mode_not_ends_with?: InputMaybe<Scalars['String']>;
  mode_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<stagingscroll_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<stagingscroll_SpokeConnectorMode_filter>>>;
  or?: InputMaybe<Array<InputMaybe<stagingscroll_SpokeConnectorMode_filter>>>;
};

export type stagingscroll_SpokeConnectorMode_orderBy =
  | 'id'
  | 'mode';

export type Subscription = {
  stagingscroll_asset?: Maybe<stagingscroll_Asset>;
  stagingscroll_assets: Array<stagingscroll_Asset>;
  stagingscroll_assetStatus?: Maybe<stagingscroll_AssetStatus>;
  stagingscroll_assetStatuses: Array<stagingscroll_AssetStatus>;
  stagingscroll_assetBalance?: Maybe<stagingscroll_AssetBalance>;
  stagingscroll_assetBalances: Array<stagingscroll_AssetBalance>;
  stagingscroll_router?: Maybe<stagingscroll_Router>;
  stagingscroll_routers: Array<stagingscroll_Router>;
  stagingscroll_routerDailyTVL?: Maybe<stagingscroll_RouterDailyTVL>;
  stagingscroll_routerDailyTVLs: Array<stagingscroll_RouterDailyTVL>;
  stagingscroll_routerLiquidityEvent?: Maybe<stagingscroll_RouterLiquidityEvent>;
  stagingscroll_routerLiquidityEvents: Array<stagingscroll_RouterLiquidityEvent>;
  stagingscroll_setting?: Maybe<stagingscroll_Setting>;
  stagingscroll_settings: Array<stagingscroll_Setting>;
  stagingscroll_relayer?: Maybe<stagingscroll_Relayer>;
  stagingscroll_relayers: Array<stagingscroll_Relayer>;
  stagingscroll_sequencer?: Maybe<stagingscroll_Sequencer>;
  stagingscroll_sequencers: Array<stagingscroll_Sequencer>;
  stagingscroll_relayerFee?: Maybe<stagingscroll_RelayerFee>;
  stagingscroll_relayerFees: Array<stagingscroll_RelayerFee>;
  stagingscroll_originTransfer?: Maybe<stagingscroll_OriginTransfer>;
  stagingscroll_originTransfers: Array<stagingscroll_OriginTransfer>;
  stagingscroll_destinationTransfer?: Maybe<stagingscroll_DestinationTransfer>;
  stagingscroll_destinationTransfers: Array<stagingscroll_DestinationTransfer>;
  stagingscroll_originMessage?: Maybe<stagingscroll_OriginMessage>;
  stagingscroll_originMessages: Array<stagingscroll_OriginMessage>;
  stagingscroll_aggregateRoot?: Maybe<stagingscroll_AggregateRoot>;
  stagingscroll_aggregateRoots: Array<stagingscroll_AggregateRoot>;
  stagingscroll_connectorMeta?: Maybe<stagingscroll_ConnectorMeta>;
  stagingscroll_connectorMetas: Array<stagingscroll_ConnectorMeta>;
  stagingscroll_rootCount?: Maybe<stagingscroll_RootCount>;
  stagingscroll_rootCounts: Array<stagingscroll_RootCount>;
  stagingscroll_rootMessageSent?: Maybe<stagingscroll_RootMessageSent>;
  stagingscroll_rootMessageSents: Array<stagingscroll_RootMessageSent>;
  stagingscroll_relayerFeesIncrease?: Maybe<stagingscroll_RelayerFeesIncrease>;
  stagingscroll_relayerFeesIncreases: Array<stagingscroll_RelayerFeesIncrease>;
  stagingscroll_slippageUpdate?: Maybe<stagingscroll_SlippageUpdate>;
  stagingscroll_slippageUpdates: Array<stagingscroll_SlippageUpdate>;
  stagingscroll_snapshotRoot?: Maybe<stagingscroll_SnapshotRoot>;
  stagingscroll_snapshotRoots: Array<stagingscroll_SnapshotRoot>;
  stagingscroll_spokeConnectorMode?: Maybe<stagingscroll_SpokeConnectorMode>;
  stagingscroll_spokeConnectorModes: Array<stagingscroll_SpokeConnectorMode>;
  stagingscroll_aggregateRootProposed?: Maybe<stagingscroll_AggregateRootProposed>;
  stagingscroll_aggregateRootProposeds: Array<stagingscroll_AggregateRootProposed>;
  stagingscroll_optimisticRootFinalized?: Maybe<stagingscroll_OptimisticRootFinalized>;
  stagingscroll_optimisticRootFinalizeds: Array<stagingscroll_OptimisticRootFinalized>;
  /** Access to subgraph metadata */
  stagingscroll__meta?: Maybe<stagingscroll__Meta_>;
};


export type Subscriptionstagingscroll_assetArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingscroll_assetsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingscroll_Asset_orderBy>;
  orderDirection?: InputMaybe<stagingscroll_OrderDirection>;
  where?: InputMaybe<stagingscroll_Asset_filter>;
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingscroll_assetStatusArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingscroll_assetStatusesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingscroll_AssetStatus_orderBy>;
  orderDirection?: InputMaybe<stagingscroll_OrderDirection>;
  where?: InputMaybe<stagingscroll_AssetStatus_filter>;
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingscroll_assetBalanceArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingscroll_assetBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingscroll_AssetBalance_orderBy>;
  orderDirection?: InputMaybe<stagingscroll_OrderDirection>;
  where?: InputMaybe<stagingscroll_AssetBalance_filter>;
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingscroll_routerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingscroll_routersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingscroll_Router_orderBy>;
  orderDirection?: InputMaybe<stagingscroll_OrderDirection>;
  where?: InputMaybe<stagingscroll_Router_filter>;
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingscroll_routerDailyTVLArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingscroll_routerDailyTVLsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingscroll_RouterDailyTVL_orderBy>;
  orderDirection?: InputMaybe<stagingscroll_OrderDirection>;
  where?: InputMaybe<stagingscroll_RouterDailyTVL_filter>;
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingscroll_routerLiquidityEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingscroll_routerLiquidityEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingscroll_RouterLiquidityEvent_orderBy>;
  orderDirection?: InputMaybe<stagingscroll_OrderDirection>;
  where?: InputMaybe<stagingscroll_RouterLiquidityEvent_filter>;
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingscroll_settingArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingscroll_settingsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingscroll_Setting_orderBy>;
  orderDirection?: InputMaybe<stagingscroll_OrderDirection>;
  where?: InputMaybe<stagingscroll_Setting_filter>;
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingscroll_relayerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingscroll_relayersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingscroll_Relayer_orderBy>;
  orderDirection?: InputMaybe<stagingscroll_OrderDirection>;
  where?: InputMaybe<stagingscroll_Relayer_filter>;
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingscroll_sequencerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingscroll_sequencersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingscroll_Sequencer_orderBy>;
  orderDirection?: InputMaybe<stagingscroll_OrderDirection>;
  where?: InputMaybe<stagingscroll_Sequencer_filter>;
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingscroll_relayerFeeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingscroll_relayerFeesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingscroll_RelayerFee_orderBy>;
  orderDirection?: InputMaybe<stagingscroll_OrderDirection>;
  where?: InputMaybe<stagingscroll_RelayerFee_filter>;
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingscroll_originTransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingscroll_originTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingscroll_OriginTransfer_orderBy>;
  orderDirection?: InputMaybe<stagingscroll_OrderDirection>;
  where?: InputMaybe<stagingscroll_OriginTransfer_filter>;
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingscroll_destinationTransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingscroll_destinationTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingscroll_DestinationTransfer_orderBy>;
  orderDirection?: InputMaybe<stagingscroll_OrderDirection>;
  where?: InputMaybe<stagingscroll_DestinationTransfer_filter>;
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingscroll_originMessageArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingscroll_originMessagesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingscroll_OriginMessage_orderBy>;
  orderDirection?: InputMaybe<stagingscroll_OrderDirection>;
  where?: InputMaybe<stagingscroll_OriginMessage_filter>;
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingscroll_aggregateRootArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingscroll_aggregateRootsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingscroll_AggregateRoot_orderBy>;
  orderDirection?: InputMaybe<stagingscroll_OrderDirection>;
  where?: InputMaybe<stagingscroll_AggregateRoot_filter>;
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingscroll_connectorMetaArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingscroll_connectorMetasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingscroll_ConnectorMeta_orderBy>;
  orderDirection?: InputMaybe<stagingscroll_OrderDirection>;
  where?: InputMaybe<stagingscroll_ConnectorMeta_filter>;
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingscroll_rootCountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingscroll_rootCountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingscroll_RootCount_orderBy>;
  orderDirection?: InputMaybe<stagingscroll_OrderDirection>;
  where?: InputMaybe<stagingscroll_RootCount_filter>;
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingscroll_rootMessageSentArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingscroll_rootMessageSentsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingscroll_RootMessageSent_orderBy>;
  orderDirection?: InputMaybe<stagingscroll_OrderDirection>;
  where?: InputMaybe<stagingscroll_RootMessageSent_filter>;
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingscroll_relayerFeesIncreaseArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingscroll_relayerFeesIncreasesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingscroll_RelayerFeesIncrease_orderBy>;
  orderDirection?: InputMaybe<stagingscroll_OrderDirection>;
  where?: InputMaybe<stagingscroll_RelayerFeesIncrease_filter>;
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingscroll_slippageUpdateArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingscroll_slippageUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingscroll_SlippageUpdate_orderBy>;
  orderDirection?: InputMaybe<stagingscroll_OrderDirection>;
  where?: InputMaybe<stagingscroll_SlippageUpdate_filter>;
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingscroll_snapshotRootArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingscroll_snapshotRootsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingscroll_SnapshotRoot_orderBy>;
  orderDirection?: InputMaybe<stagingscroll_OrderDirection>;
  where?: InputMaybe<stagingscroll_SnapshotRoot_filter>;
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingscroll_spokeConnectorModeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingscroll_spokeConnectorModesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingscroll_SpokeConnectorMode_orderBy>;
  orderDirection?: InputMaybe<stagingscroll_OrderDirection>;
  where?: InputMaybe<stagingscroll_SpokeConnectorMode_filter>;
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingscroll_aggregateRootProposedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingscroll_aggregateRootProposedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingscroll_AggregateRootProposed_orderBy>;
  orderDirection?: InputMaybe<stagingscroll_OrderDirection>;
  where?: InputMaybe<stagingscroll_AggregateRootProposed_filter>;
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingscroll_optimisticRootFinalizedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingscroll_optimisticRootFinalizedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingscroll_OptimisticRootFinalized_orderBy>;
  orderDirection?: InputMaybe<stagingscroll_OrderDirection>;
  where?: InputMaybe<stagingscroll_OptimisticRootFinalized_filter>;
  block?: InputMaybe<stagingscroll_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingscroll__metaArgs = {
  block?: InputMaybe<stagingscroll_Block_height>;
};

export type stagingscroll_TransferStatus =
  | 'XCalled'
  | 'Executed'
  | 'Reconciled'
  | 'CompletedSlow'
  | 'CompletedFast';

export type stagingscroll__Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['stagingscroll_Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
  /** The hash of the parent block */
  parentHash?: Maybe<Scalars['stagingscroll_Bytes']>;
};

/** The type for the top-level _meta field */
export type stagingscroll__Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: stagingscroll__Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

  export type QuerySdk = {
      /** null **/
  stagingscroll_asset: InContextSdkMethod<Query['stagingscroll_asset'], Querystagingscroll_assetArgs, MeshContext>,
  /** null **/
  stagingscroll_assets: InContextSdkMethod<Query['stagingscroll_assets'], Querystagingscroll_assetsArgs, MeshContext>,
  /** null **/
  stagingscroll_assetStatus: InContextSdkMethod<Query['stagingscroll_assetStatus'], Querystagingscroll_assetStatusArgs, MeshContext>,
  /** null **/
  stagingscroll_assetStatuses: InContextSdkMethod<Query['stagingscroll_assetStatuses'], Querystagingscroll_assetStatusesArgs, MeshContext>,
  /** null **/
  stagingscroll_assetBalance: InContextSdkMethod<Query['stagingscroll_assetBalance'], Querystagingscroll_assetBalanceArgs, MeshContext>,
  /** null **/
  stagingscroll_assetBalances: InContextSdkMethod<Query['stagingscroll_assetBalances'], Querystagingscroll_assetBalancesArgs, MeshContext>,
  /** null **/
  stagingscroll_router: InContextSdkMethod<Query['stagingscroll_router'], Querystagingscroll_routerArgs, MeshContext>,
  /** null **/
  stagingscroll_routers: InContextSdkMethod<Query['stagingscroll_routers'], Querystagingscroll_routersArgs, MeshContext>,
  /** null **/
  stagingscroll_routerDailyTVL: InContextSdkMethod<Query['stagingscroll_routerDailyTVL'], Querystagingscroll_routerDailyTVLArgs, MeshContext>,
  /** null **/
  stagingscroll_routerDailyTVLs: InContextSdkMethod<Query['stagingscroll_routerDailyTVLs'], Querystagingscroll_routerDailyTVLsArgs, MeshContext>,
  /** null **/
  stagingscroll_routerLiquidityEvent: InContextSdkMethod<Query['stagingscroll_routerLiquidityEvent'], Querystagingscroll_routerLiquidityEventArgs, MeshContext>,
  /** null **/
  stagingscroll_routerLiquidityEvents: InContextSdkMethod<Query['stagingscroll_routerLiquidityEvents'], Querystagingscroll_routerLiquidityEventsArgs, MeshContext>,
  /** null **/
  stagingscroll_setting: InContextSdkMethod<Query['stagingscroll_setting'], Querystagingscroll_settingArgs, MeshContext>,
  /** null **/
  stagingscroll_settings: InContextSdkMethod<Query['stagingscroll_settings'], Querystagingscroll_settingsArgs, MeshContext>,
  /** null **/
  stagingscroll_relayer: InContextSdkMethod<Query['stagingscroll_relayer'], Querystagingscroll_relayerArgs, MeshContext>,
  /** null **/
  stagingscroll_relayers: InContextSdkMethod<Query['stagingscroll_relayers'], Querystagingscroll_relayersArgs, MeshContext>,
  /** null **/
  stagingscroll_sequencer: InContextSdkMethod<Query['stagingscroll_sequencer'], Querystagingscroll_sequencerArgs, MeshContext>,
  /** null **/
  stagingscroll_sequencers: InContextSdkMethod<Query['stagingscroll_sequencers'], Querystagingscroll_sequencersArgs, MeshContext>,
  /** null **/
  stagingscroll_relayerFee: InContextSdkMethod<Query['stagingscroll_relayerFee'], Querystagingscroll_relayerFeeArgs, MeshContext>,
  /** null **/
  stagingscroll_relayerFees: InContextSdkMethod<Query['stagingscroll_relayerFees'], Querystagingscroll_relayerFeesArgs, MeshContext>,
  /** null **/
  stagingscroll_originTransfer: InContextSdkMethod<Query['stagingscroll_originTransfer'], Querystagingscroll_originTransferArgs, MeshContext>,
  /** null **/
  stagingscroll_originTransfers: InContextSdkMethod<Query['stagingscroll_originTransfers'], Querystagingscroll_originTransfersArgs, MeshContext>,
  /** null **/
  stagingscroll_destinationTransfer: InContextSdkMethod<Query['stagingscroll_destinationTransfer'], Querystagingscroll_destinationTransferArgs, MeshContext>,
  /** null **/
  stagingscroll_destinationTransfers: InContextSdkMethod<Query['stagingscroll_destinationTransfers'], Querystagingscroll_destinationTransfersArgs, MeshContext>,
  /** null **/
  stagingscroll_originMessage: InContextSdkMethod<Query['stagingscroll_originMessage'], Querystagingscroll_originMessageArgs, MeshContext>,
  /** null **/
  stagingscroll_originMessages: InContextSdkMethod<Query['stagingscroll_originMessages'], Querystagingscroll_originMessagesArgs, MeshContext>,
  /** null **/
  stagingscroll_aggregateRoot: InContextSdkMethod<Query['stagingscroll_aggregateRoot'], Querystagingscroll_aggregateRootArgs, MeshContext>,
  /** null **/
  stagingscroll_aggregateRoots: InContextSdkMethod<Query['stagingscroll_aggregateRoots'], Querystagingscroll_aggregateRootsArgs, MeshContext>,
  /** null **/
  stagingscroll_connectorMeta: InContextSdkMethod<Query['stagingscroll_connectorMeta'], Querystagingscroll_connectorMetaArgs, MeshContext>,
  /** null **/
  stagingscroll_connectorMetas: InContextSdkMethod<Query['stagingscroll_connectorMetas'], Querystagingscroll_connectorMetasArgs, MeshContext>,
  /** null **/
  stagingscroll_rootCount: InContextSdkMethod<Query['stagingscroll_rootCount'], Querystagingscroll_rootCountArgs, MeshContext>,
  /** null **/
  stagingscroll_rootCounts: InContextSdkMethod<Query['stagingscroll_rootCounts'], Querystagingscroll_rootCountsArgs, MeshContext>,
  /** null **/
  stagingscroll_rootMessageSent: InContextSdkMethod<Query['stagingscroll_rootMessageSent'], Querystagingscroll_rootMessageSentArgs, MeshContext>,
  /** null **/
  stagingscroll_rootMessageSents: InContextSdkMethod<Query['stagingscroll_rootMessageSents'], Querystagingscroll_rootMessageSentsArgs, MeshContext>,
  /** null **/
  stagingscroll_relayerFeesIncrease: InContextSdkMethod<Query['stagingscroll_relayerFeesIncrease'], Querystagingscroll_relayerFeesIncreaseArgs, MeshContext>,
  /** null **/
  stagingscroll_relayerFeesIncreases: InContextSdkMethod<Query['stagingscroll_relayerFeesIncreases'], Querystagingscroll_relayerFeesIncreasesArgs, MeshContext>,
  /** null **/
  stagingscroll_slippageUpdate: InContextSdkMethod<Query['stagingscroll_slippageUpdate'], Querystagingscroll_slippageUpdateArgs, MeshContext>,
  /** null **/
  stagingscroll_slippageUpdates: InContextSdkMethod<Query['stagingscroll_slippageUpdates'], Querystagingscroll_slippageUpdatesArgs, MeshContext>,
  /** null **/
  stagingscroll_snapshotRoot: InContextSdkMethod<Query['stagingscroll_snapshotRoot'], Querystagingscroll_snapshotRootArgs, MeshContext>,
  /** null **/
  stagingscroll_snapshotRoots: InContextSdkMethod<Query['stagingscroll_snapshotRoots'], Querystagingscroll_snapshotRootsArgs, MeshContext>,
  /** null **/
  stagingscroll_spokeConnectorMode: InContextSdkMethod<Query['stagingscroll_spokeConnectorMode'], Querystagingscroll_spokeConnectorModeArgs, MeshContext>,
  /** null **/
  stagingscroll_spokeConnectorModes: InContextSdkMethod<Query['stagingscroll_spokeConnectorModes'], Querystagingscroll_spokeConnectorModesArgs, MeshContext>,
  /** null **/
  stagingscroll_aggregateRootProposed: InContextSdkMethod<Query['stagingscroll_aggregateRootProposed'], Querystagingscroll_aggregateRootProposedArgs, MeshContext>,
  /** null **/
  stagingscroll_aggregateRootProposeds: InContextSdkMethod<Query['stagingscroll_aggregateRootProposeds'], Querystagingscroll_aggregateRootProposedsArgs, MeshContext>,
  /** null **/
  stagingscroll_optimisticRootFinalized: InContextSdkMethod<Query['stagingscroll_optimisticRootFinalized'], Querystagingscroll_optimisticRootFinalizedArgs, MeshContext>,
  /** null **/
  stagingscroll_optimisticRootFinalizeds: InContextSdkMethod<Query['stagingscroll_optimisticRootFinalizeds'], Querystagingscroll_optimisticRootFinalizedsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  stagingscroll__meta: InContextSdkMethod<Query['stagingscroll__meta'], Querystagingscroll__metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  stagingscroll_asset: InContextSdkMethod<Subscription['stagingscroll_asset'], Subscriptionstagingscroll_assetArgs, MeshContext>,
  /** null **/
  stagingscroll_assets: InContextSdkMethod<Subscription['stagingscroll_assets'], Subscriptionstagingscroll_assetsArgs, MeshContext>,
  /** null **/
  stagingscroll_assetStatus: InContextSdkMethod<Subscription['stagingscroll_assetStatus'], Subscriptionstagingscroll_assetStatusArgs, MeshContext>,
  /** null **/
  stagingscroll_assetStatuses: InContextSdkMethod<Subscription['stagingscroll_assetStatuses'], Subscriptionstagingscroll_assetStatusesArgs, MeshContext>,
  /** null **/
  stagingscroll_assetBalance: InContextSdkMethod<Subscription['stagingscroll_assetBalance'], Subscriptionstagingscroll_assetBalanceArgs, MeshContext>,
  /** null **/
  stagingscroll_assetBalances: InContextSdkMethod<Subscription['stagingscroll_assetBalances'], Subscriptionstagingscroll_assetBalancesArgs, MeshContext>,
  /** null **/
  stagingscroll_router: InContextSdkMethod<Subscription['stagingscroll_router'], Subscriptionstagingscroll_routerArgs, MeshContext>,
  /** null **/
  stagingscroll_routers: InContextSdkMethod<Subscription['stagingscroll_routers'], Subscriptionstagingscroll_routersArgs, MeshContext>,
  /** null **/
  stagingscroll_routerDailyTVL: InContextSdkMethod<Subscription['stagingscroll_routerDailyTVL'], Subscriptionstagingscroll_routerDailyTVLArgs, MeshContext>,
  /** null **/
  stagingscroll_routerDailyTVLs: InContextSdkMethod<Subscription['stagingscroll_routerDailyTVLs'], Subscriptionstagingscroll_routerDailyTVLsArgs, MeshContext>,
  /** null **/
  stagingscroll_routerLiquidityEvent: InContextSdkMethod<Subscription['stagingscroll_routerLiquidityEvent'], Subscriptionstagingscroll_routerLiquidityEventArgs, MeshContext>,
  /** null **/
  stagingscroll_routerLiquidityEvents: InContextSdkMethod<Subscription['stagingscroll_routerLiquidityEvents'], Subscriptionstagingscroll_routerLiquidityEventsArgs, MeshContext>,
  /** null **/
  stagingscroll_setting: InContextSdkMethod<Subscription['stagingscroll_setting'], Subscriptionstagingscroll_settingArgs, MeshContext>,
  /** null **/
  stagingscroll_settings: InContextSdkMethod<Subscription['stagingscroll_settings'], Subscriptionstagingscroll_settingsArgs, MeshContext>,
  /** null **/
  stagingscroll_relayer: InContextSdkMethod<Subscription['stagingscroll_relayer'], Subscriptionstagingscroll_relayerArgs, MeshContext>,
  /** null **/
  stagingscroll_relayers: InContextSdkMethod<Subscription['stagingscroll_relayers'], Subscriptionstagingscroll_relayersArgs, MeshContext>,
  /** null **/
  stagingscroll_sequencer: InContextSdkMethod<Subscription['stagingscroll_sequencer'], Subscriptionstagingscroll_sequencerArgs, MeshContext>,
  /** null **/
  stagingscroll_sequencers: InContextSdkMethod<Subscription['stagingscroll_sequencers'], Subscriptionstagingscroll_sequencersArgs, MeshContext>,
  /** null **/
  stagingscroll_relayerFee: InContextSdkMethod<Subscription['stagingscroll_relayerFee'], Subscriptionstagingscroll_relayerFeeArgs, MeshContext>,
  /** null **/
  stagingscroll_relayerFees: InContextSdkMethod<Subscription['stagingscroll_relayerFees'], Subscriptionstagingscroll_relayerFeesArgs, MeshContext>,
  /** null **/
  stagingscroll_originTransfer: InContextSdkMethod<Subscription['stagingscroll_originTransfer'], Subscriptionstagingscroll_originTransferArgs, MeshContext>,
  /** null **/
  stagingscroll_originTransfers: InContextSdkMethod<Subscription['stagingscroll_originTransfers'], Subscriptionstagingscroll_originTransfersArgs, MeshContext>,
  /** null **/
  stagingscroll_destinationTransfer: InContextSdkMethod<Subscription['stagingscroll_destinationTransfer'], Subscriptionstagingscroll_destinationTransferArgs, MeshContext>,
  /** null **/
  stagingscroll_destinationTransfers: InContextSdkMethod<Subscription['stagingscroll_destinationTransfers'], Subscriptionstagingscroll_destinationTransfersArgs, MeshContext>,
  /** null **/
  stagingscroll_originMessage: InContextSdkMethod<Subscription['stagingscroll_originMessage'], Subscriptionstagingscroll_originMessageArgs, MeshContext>,
  /** null **/
  stagingscroll_originMessages: InContextSdkMethod<Subscription['stagingscroll_originMessages'], Subscriptionstagingscroll_originMessagesArgs, MeshContext>,
  /** null **/
  stagingscroll_aggregateRoot: InContextSdkMethod<Subscription['stagingscroll_aggregateRoot'], Subscriptionstagingscroll_aggregateRootArgs, MeshContext>,
  /** null **/
  stagingscroll_aggregateRoots: InContextSdkMethod<Subscription['stagingscroll_aggregateRoots'], Subscriptionstagingscroll_aggregateRootsArgs, MeshContext>,
  /** null **/
  stagingscroll_connectorMeta: InContextSdkMethod<Subscription['stagingscroll_connectorMeta'], Subscriptionstagingscroll_connectorMetaArgs, MeshContext>,
  /** null **/
  stagingscroll_connectorMetas: InContextSdkMethod<Subscription['stagingscroll_connectorMetas'], Subscriptionstagingscroll_connectorMetasArgs, MeshContext>,
  /** null **/
  stagingscroll_rootCount: InContextSdkMethod<Subscription['stagingscroll_rootCount'], Subscriptionstagingscroll_rootCountArgs, MeshContext>,
  /** null **/
  stagingscroll_rootCounts: InContextSdkMethod<Subscription['stagingscroll_rootCounts'], Subscriptionstagingscroll_rootCountsArgs, MeshContext>,
  /** null **/
  stagingscroll_rootMessageSent: InContextSdkMethod<Subscription['stagingscroll_rootMessageSent'], Subscriptionstagingscroll_rootMessageSentArgs, MeshContext>,
  /** null **/
  stagingscroll_rootMessageSents: InContextSdkMethod<Subscription['stagingscroll_rootMessageSents'], Subscriptionstagingscroll_rootMessageSentsArgs, MeshContext>,
  /** null **/
  stagingscroll_relayerFeesIncrease: InContextSdkMethod<Subscription['stagingscroll_relayerFeesIncrease'], Subscriptionstagingscroll_relayerFeesIncreaseArgs, MeshContext>,
  /** null **/
  stagingscroll_relayerFeesIncreases: InContextSdkMethod<Subscription['stagingscroll_relayerFeesIncreases'], Subscriptionstagingscroll_relayerFeesIncreasesArgs, MeshContext>,
  /** null **/
  stagingscroll_slippageUpdate: InContextSdkMethod<Subscription['stagingscroll_slippageUpdate'], Subscriptionstagingscroll_slippageUpdateArgs, MeshContext>,
  /** null **/
  stagingscroll_slippageUpdates: InContextSdkMethod<Subscription['stagingscroll_slippageUpdates'], Subscriptionstagingscroll_slippageUpdatesArgs, MeshContext>,
  /** null **/
  stagingscroll_snapshotRoot: InContextSdkMethod<Subscription['stagingscroll_snapshotRoot'], Subscriptionstagingscroll_snapshotRootArgs, MeshContext>,
  /** null **/
  stagingscroll_snapshotRoots: InContextSdkMethod<Subscription['stagingscroll_snapshotRoots'], Subscriptionstagingscroll_snapshotRootsArgs, MeshContext>,
  /** null **/
  stagingscroll_spokeConnectorMode: InContextSdkMethod<Subscription['stagingscroll_spokeConnectorMode'], Subscriptionstagingscroll_spokeConnectorModeArgs, MeshContext>,
  /** null **/
  stagingscroll_spokeConnectorModes: InContextSdkMethod<Subscription['stagingscroll_spokeConnectorModes'], Subscriptionstagingscroll_spokeConnectorModesArgs, MeshContext>,
  /** null **/
  stagingscroll_aggregateRootProposed: InContextSdkMethod<Subscription['stagingscroll_aggregateRootProposed'], Subscriptionstagingscroll_aggregateRootProposedArgs, MeshContext>,
  /** null **/
  stagingscroll_aggregateRootProposeds: InContextSdkMethod<Subscription['stagingscroll_aggregateRootProposeds'], Subscriptionstagingscroll_aggregateRootProposedsArgs, MeshContext>,
  /** null **/
  stagingscroll_optimisticRootFinalized: InContextSdkMethod<Subscription['stagingscroll_optimisticRootFinalized'], Subscriptionstagingscroll_optimisticRootFinalizedArgs, MeshContext>,
  /** null **/
  stagingscroll_optimisticRootFinalizeds: InContextSdkMethod<Subscription['stagingscroll_optimisticRootFinalizeds'], Subscriptionstagingscroll_optimisticRootFinalizedsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  stagingscroll__meta: InContextSdkMethod<Subscription['stagingscroll__meta'], Subscriptionstagingscroll__metaArgs, MeshContext>
  };

  export type Context = {
      ["Connext_Staging_Scroll"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
