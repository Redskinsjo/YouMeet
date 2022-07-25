import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from 'graphql'
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  Date: any
}

/** enum for the scope of @cacheControl directive */
export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC',
}

/**
 * Description for the type:
 * An employee is the main user in the app
 */
export type Employee = {
  __typename?: 'Employee'
  /** Image photo of the employee */
  avatar: Scalars['String']
  /** color unique for the employee */
  color: Scalars['String']
  /** description of the employee */
  description: Scalars['String']
  /** email address of the employee */
  email: Scalars['String']
  /** firstname of the employee */
  firstname: Scalars['String']
  /** origin location of the employee */
  from: Scalars['String']
  /** fullname of the employee */
  fullname: Scalars['String']
  /** Identification of the employee */
  id: Scalars['ID']
  /** job of the employee */
  job: Scalars['String']
  /** lastname of the employee */
  lastname: Scalars['String']
  /** latitude location of the employee */
  lat: Scalars['String']
  /** longitude location of the employee */
  long: Scalars['String']
  /** starting is the starting date of the employee within the company */
  starting?: Maybe<Scalars['Date']>
}

/** somebody that filled email on website */
export type InterestedIndividual = {
  __typename?: 'InterestedIndividual'
  /** email of the individual */
  email?: Maybe<Scalars['String']>
}

/** all mutations of the app */
export type Mutation = {
  __typename?: 'Mutation'
  /** create individual and send email */
  createInterested?: Maybe<InterestedIndividual>
  /** send an email to an employee */
  sendEmail?: Maybe<SendEmailResponse>
}

/** all mutations of the app */
export type MutationCreateInterestedArgs = {
  email?: InputMaybe<Scalars['String']>
}

/** all mutations of the app */
export type MutationSendEmailArgs = {
  from?: InputMaybe<Scalars['String']>
  subject?: InputMaybe<Scalars['String']>
  text?: InputMaybe<Scalars['String']>
  to?: InputMaybe<Scalars['String']>
}

/** all queries of the app */
export type Query = {
  __typename?: 'Query'
  /** fetch many employees following the search filter and the sorting */
  employees: Array<Employee>
  /** fetch one employee following its identification (id) */
  oneEmployee: Employee
}

/** all queries of the app */
export type QueryEmployeesArgs = {
  filter?: InputMaybe<Scalars['String']>
  sort?: InputMaybe<Scalars['Int']>
}

/** all queries of the app */
export type QueryOneEmployeeArgs = {
  id?: InputMaybe<Scalars['ID']>
}

/** Response from an email sent to an employee */
export type SendEmailResponse = {
  __typename?: 'SendEmailResponse'
  /** Greets the client for a valid sent email */
  hello?: Maybe<Scalars['String']>
}

export type CreateInterestedIndividualAndSendEmailMutationVariables = Exact<{
  email?: InputMaybe<Scalars['String']>
}>

export type CreateInterestedIndividualAndSendEmailMutation = {
  __typename?: 'Mutation'
  createInterested?: {
    __typename?: 'InterestedIndividual'
    email?: string | null
  } | null
}

export type GetEmailProfileDataQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>
}>

export type GetEmailProfileDataQuery = {
  __typename?: 'Query'
  oneEmployee: {
    __typename?: 'Employee'
    firstname: string
    lastname: string
    avatar: string
    color: string
    from: string
    starting?: any | null
    job: string
    description: string
  }
}

export type GetEmployeesQueryVariables = Exact<{
  filter?: InputMaybe<Scalars['String']>
  sort?: InputMaybe<Scalars['Int']>
}>

export type GetEmployeesQuery = {
  __typename?: 'Query'
  employees: Array<{
    __typename?: 'Employee'
    id: string
    fullname: string
    firstname: string
    lastname: string
    email: string
    avatar: string
    color: string
    from: string
    lat: string
    long: string
    starting?: any | null
    job: string
    description: string
  }>
}

export type GetSendEmailDataQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>
}>

export type GetSendEmailDataQuery = {
  __typename?: 'Query'
  oneEmployee: {
    __typename?: 'Employee'
    id: string
    firstname: string
    lastname: string
    email: string
  }
}

export type SendEmailMutationVariables = Exact<{
  to?: InputMaybe<Scalars['String']>
  subject?: InputMaybe<Scalars['String']>
  text?: InputMaybe<Scalars['String']>
  from?: InputMaybe<Scalars['String']>
}>

export type SendEmailMutation = {
  __typename?: 'Mutation'
  sendEmail?: { __typename?: 'SendEmailResponse'; hello?: string | null } | null
}

export type ResolverTypeWrapper<T> = Promise<T> | T

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>

export type NextResolverFn<T> = () => Promise<T>

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>
  CacheControlScope: CacheControlScope
  Date: ResolverTypeWrapper<Scalars['Date']>
  Employee: ResolverTypeWrapper<Employee>
  ID: ResolverTypeWrapper<Scalars['ID']>
  Int: ResolverTypeWrapper<Scalars['Int']>
  InterestedIndividual: ResolverTypeWrapper<InterestedIndividual>
  Mutation: ResolverTypeWrapper<{}>
  Query: ResolverTypeWrapper<{}>
  SendEmailResponse: ResolverTypeWrapper<SendEmailResponse>
  String: ResolverTypeWrapper<Scalars['String']>
}

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']
  Date: Scalars['Date']
  Employee: Employee
  ID: Scalars['ID']
  Int: Scalars['Int']
  InterestedIndividual: InterestedIndividual
  Mutation: {}
  Query: {}
  SendEmailResponse: SendEmailResponse
  String: Scalars['String']
}

export type CacheControlDirectiveArgs = {
  inheritMaxAge?: Maybe<Scalars['Boolean']>
  maxAge?: Maybe<Scalars['Int']>
  scope?: Maybe<CacheControlScope>
}

export type CacheControlDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = CacheControlDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>

export interface DateScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date'
}

export type EmployeeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Employee'] = ResolversParentTypes['Employee']
> = {
  avatar?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  firstname?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  from?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  fullname?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  job?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  lastname?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  lat?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  long?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  starting?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type InterestedIndividualResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['InterestedIndividual'] = ResolversParentTypes['InterestedIndividual']
> = {
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = {
  createInterested?: Resolver<
    Maybe<ResolversTypes['InterestedIndividual']>,
    ParentType,
    ContextType,
    Partial<MutationCreateInterestedArgs>
  >
  sendEmail?: Resolver<
    Maybe<ResolversTypes['SendEmailResponse']>,
    ParentType,
    ContextType,
    Partial<MutationSendEmailArgs>
  >
}

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = {
  employees?: Resolver<
    Array<ResolversTypes['Employee']>,
    ParentType,
    ContextType,
    Partial<QueryEmployeesArgs>
  >
  oneEmployee?: Resolver<
    ResolversTypes['Employee'],
    ParentType,
    ContextType,
    Partial<QueryOneEmployeeArgs>
  >
}

export type SendEmailResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SendEmailResponse'] = ResolversParentTypes['SendEmailResponse']
> = {
  hello?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type Resolvers<ContextType = any> = {
  Date?: GraphQLScalarType
  Employee?: EmployeeResolvers<ContextType>
  InterestedIndividual?: InterestedIndividualResolvers<ContextType>
  Mutation?: MutationResolvers<ContextType>
  Query?: QueryResolvers<ContextType>
  SendEmailResponse?: SendEmailResponseResolvers<ContextType>
}

export type DirectiveResolvers<ContextType = any> = {
  cacheControl?: CacheControlDirectiveResolver<any, any, ContextType>
}

export const CreateInterestedIndividualAndSendEmailDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateInterestedIndividualAndSendEmail' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'email' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createInterested' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'email' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'email' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'email' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateInterestedIndividualAndSendEmailMutation,
  CreateInterestedIndividualAndSendEmailMutationVariables
>
export const GetEmailProfileDataDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetEmailProfileData' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'oneEmployee' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'firstname' } },
                { kind: 'Field', name: { kind: 'Name', value: 'lastname' } },
                { kind: 'Field', name: { kind: 'Name', value: 'avatar' } },
                { kind: 'Field', name: { kind: 'Name', value: 'color' } },
                { kind: 'Field', name: { kind: 'Name', value: 'from' } },
                { kind: 'Field', name: { kind: 'Name', value: 'starting' } },
                { kind: 'Field', name: { kind: 'Name', value: 'job' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetEmailProfileDataQuery,
  GetEmailProfileDataQueryVariables
>
export const GetEmployeesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetEmployees' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'filter' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'sort' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'employees' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'filter' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'sort' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'sort' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'fullname' } },
                { kind: 'Field', name: { kind: 'Name', value: 'firstname' } },
                { kind: 'Field', name: { kind: 'Name', value: 'lastname' } },
                { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                { kind: 'Field', name: { kind: 'Name', value: 'avatar' } },
                { kind: 'Field', name: { kind: 'Name', value: 'color' } },
                { kind: 'Field', name: { kind: 'Name', value: 'from' } },
                { kind: 'Field', name: { kind: 'Name', value: 'lat' } },
                { kind: 'Field', name: { kind: 'Name', value: 'long' } },
                { kind: 'Field', name: { kind: 'Name', value: 'starting' } },
                { kind: 'Field', name: { kind: 'Name', value: 'job' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetEmployeesQuery, GetEmployeesQueryVariables>
export const GetSendEmailDataDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetSendEmailData' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'oneEmployee' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'firstname' } },
                { kind: 'Field', name: { kind: 'Name', value: 'lastname' } },
                { kind: 'Field', name: { kind: 'Name', value: 'email' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetSendEmailDataQuery,
  GetSendEmailDataQueryVariables
>
export const SendEmailDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'SendEmail' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'to' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'subject' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'text' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'from' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'sendEmail' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'to' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'to' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'subject' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'subject' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'text' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'text' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'from' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'from' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'hello' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SendEmailMutation, SendEmailMutationVariables>
