/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model application
 *
 */
export type application = $Result.DefaultSelection<Prisma.$applicationPayload>;
/**
 * Model attendance
 *
 */
export type attendance = $Result.DefaultSelection<Prisma.$attendancePayload>;
/**
 * Model company
 *
 */
export type company = $Result.DefaultSelection<Prisma.$companyPayload>;
/**
 * Model job
 *
 */
export type job = $Result.DefaultSelection<Prisma.$jobPayload>;
/**
 * Model performance_review
 *
 */
export type performance_review = $Result.DefaultSelection<Prisma.$performance_reviewPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Applications
 * const applications = await prisma.application.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Applications
   * const applications = await prisma.application.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.application`: Exposes CRUD operations for the **application** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Applications
   * const applications = await prisma.application.findMany()
   * ```
   */
  get application(): Prisma.applicationDelegate<ExtArgs>;

  /**
   * `prisma.attendance`: Exposes CRUD operations for the **attendance** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Attendances
   * const attendances = await prisma.attendance.findMany()
   * ```
   */
  get attendance(): Prisma.attendanceDelegate<ExtArgs>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **company** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   */
  get company(): Prisma.companyDelegate<ExtArgs>;

  /**
   * `prisma.job`: Exposes CRUD operations for the **job** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Jobs
   * const jobs = await prisma.job.findMany()
   * ```
   */
  get job(): Prisma.jobDelegate<ExtArgs>;

  /**
   * `prisma.performance_review`: Exposes CRUD operations for the **performance_review** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Performance_reviews
   * const performance_reviews = await prisma.performance_review.findMany()
   * ```
   */
  get performance_review(): Prisma.performance_reviewDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.5.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
    ? False
    : T extends Date
    ? False
    : T extends Uint8Array
    ? False
    : T extends BigInt
    ? False
    : T extends object
    ? True
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    application: 'application';
    attendance: 'attendance';
    company: 'company';
    job: 'job';
    performance_review: 'performance_review';
    user: 'user';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'application' | 'attendance' | 'company' | 'job' | 'performance_review' | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      application: {
        payload: Prisma.$applicationPayload<ExtArgs>;
        fields: Prisma.applicationFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.applicationFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$applicationPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.applicationFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$applicationPayload>;
          };
          findFirst: {
            args: Prisma.applicationFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$applicationPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.applicationFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$applicationPayload>;
          };
          findMany: {
            args: Prisma.applicationFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$applicationPayload>[];
          };
          create: {
            args: Prisma.applicationCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$applicationPayload>;
          };
          createMany: {
            args: Prisma.applicationCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.applicationDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$applicationPayload>;
          };
          update: {
            args: Prisma.applicationUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$applicationPayload>;
          };
          deleteMany: {
            args: Prisma.applicationDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.applicationUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.applicationUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$applicationPayload>;
          };
          aggregate: {
            args: Prisma.ApplicationAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateApplication>;
          };
          groupBy: {
            args: Prisma.applicationGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ApplicationGroupByOutputType>[];
          };
          count: {
            args: Prisma.applicationCountArgs<ExtArgs>;
            result: $Utils.Optional<ApplicationCountAggregateOutputType> | number;
          };
        };
      };
      attendance: {
        payload: Prisma.$attendancePayload<ExtArgs>;
        fields: Prisma.attendanceFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.attendanceFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$attendancePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.attendanceFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$attendancePayload>;
          };
          findFirst: {
            args: Prisma.attendanceFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$attendancePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.attendanceFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$attendancePayload>;
          };
          findMany: {
            args: Prisma.attendanceFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$attendancePayload>[];
          };
          create: {
            args: Prisma.attendanceCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$attendancePayload>;
          };
          createMany: {
            args: Prisma.attendanceCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.attendanceDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$attendancePayload>;
          };
          update: {
            args: Prisma.attendanceUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$attendancePayload>;
          };
          deleteMany: {
            args: Prisma.attendanceDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.attendanceUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.attendanceUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$attendancePayload>;
          };
          aggregate: {
            args: Prisma.AttendanceAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAttendance>;
          };
          groupBy: {
            args: Prisma.attendanceGroupByArgs<ExtArgs>;
            result: $Utils.Optional<AttendanceGroupByOutputType>[];
          };
          count: {
            args: Prisma.attendanceCountArgs<ExtArgs>;
            result: $Utils.Optional<AttendanceCountAggregateOutputType> | number;
          };
        };
      };
      company: {
        payload: Prisma.$companyPayload<ExtArgs>;
        fields: Prisma.companyFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.companyFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.companyFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findFirst: {
            args: Prisma.companyFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.companyFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findMany: {
            args: Prisma.companyFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>[];
          };
          create: {
            args: Prisma.companyCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          createMany: {
            args: Prisma.companyCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.companyDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          update: {
            args: Prisma.companyUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          deleteMany: {
            args: Prisma.companyDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.companyUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.companyUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCompany>;
          };
          groupBy: {
            args: Prisma.companyGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CompanyGroupByOutputType>[];
          };
          count: {
            args: Prisma.companyCountArgs<ExtArgs>;
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number;
          };
        };
      };
      job: {
        payload: Prisma.$jobPayload<ExtArgs>;
        fields: Prisma.jobFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.jobFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$jobPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.jobFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$jobPayload>;
          };
          findFirst: {
            args: Prisma.jobFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$jobPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.jobFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$jobPayload>;
          };
          findMany: {
            args: Prisma.jobFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$jobPayload>[];
          };
          create: {
            args: Prisma.jobCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$jobPayload>;
          };
          createMany: {
            args: Prisma.jobCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.jobDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$jobPayload>;
          };
          update: {
            args: Prisma.jobUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$jobPayload>;
          };
          deleteMany: {
            args: Prisma.jobDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.jobUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.jobUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$jobPayload>;
          };
          aggregate: {
            args: Prisma.JobAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateJob>;
          };
          groupBy: {
            args: Prisma.jobGroupByArgs<ExtArgs>;
            result: $Utils.Optional<JobGroupByOutputType>[];
          };
          count: {
            args: Prisma.jobCountArgs<ExtArgs>;
            result: $Utils.Optional<JobCountAggregateOutputType> | number;
          };
        };
      };
      performance_review: {
        payload: Prisma.$performance_reviewPayload<ExtArgs>;
        fields: Prisma.performance_reviewFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.performance_reviewFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$performance_reviewPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.performance_reviewFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$performance_reviewPayload>;
          };
          findFirst: {
            args: Prisma.performance_reviewFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$performance_reviewPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.performance_reviewFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$performance_reviewPayload>;
          };
          findMany: {
            args: Prisma.performance_reviewFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$performance_reviewPayload>[];
          };
          create: {
            args: Prisma.performance_reviewCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$performance_reviewPayload>;
          };
          createMany: {
            args: Prisma.performance_reviewCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.performance_reviewDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$performance_reviewPayload>;
          };
          update: {
            args: Prisma.performance_reviewUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$performance_reviewPayload>;
          };
          deleteMany: {
            args: Prisma.performance_reviewDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.performance_reviewUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.performance_reviewUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$performance_reviewPayload>;
          };
          aggregate: {
            args: Prisma.Performance_reviewAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregatePerformance_review>;
          };
          groupBy: {
            args: Prisma.performance_reviewGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Performance_reviewGroupByOutputType>[];
          };
          count: {
            args: Prisma.performance_reviewCountArgs<ExtArgs>;
            result: $Utils.Optional<Performance_reviewCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    job: number;
  };

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | CompanyCountOutputTypeCountJobArgs;
  };

  // Custom InputTypes

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountJobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: jobWhereInput;
  };

  /**
   * Count Type JobCountOutputType
   */

  export type JobCountOutputType = {
    application: number;
  };

  export type JobCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | JobCountOutputTypeCountApplicationArgs;
  };

  // Custom InputTypes

  /**
   * JobCountOutputType without action
   */
  export type JobCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCountOutputType
     */
    select?: JobCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * JobCountOutputType without action
   */
  export type JobCountOutputTypeCountApplicationArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: applicationWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    application: number;
    attendance: number;
    company: number;
    performance_review_performance_review_reviewer_idTouser: number;
    performance_review_performance_review_user_idTouser: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | UserCountOutputTypeCountApplicationArgs;
    attendance?: boolean | UserCountOutputTypeCountAttendanceArgs;
    company?: boolean | UserCountOutputTypeCountCompanyArgs;
    performance_review_performance_review_reviewer_idTouser?:
      | boolean
      | UserCountOutputTypeCountPerformance_review_performance_review_reviewer_idTouserArgs;
    performance_review_performance_review_user_idTouser?:
      | boolean
      | UserCountOutputTypeCountPerformance_review_performance_review_user_idTouserArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountApplicationArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: applicationWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAttendanceArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: attendanceWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCompanyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: companyWhereInput;
    };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPerformance_review_performance_review_reviewer_idTouserArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: performance_reviewWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPerformance_review_performance_review_user_idTouserArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: performance_reviewWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model application
   */

  export type AggregateApplication = {
    _count: ApplicationCountAggregateOutputType | null;
    _min: ApplicationMinAggregateOutputType | null;
    _max: ApplicationMaxAggregateOutputType | null;
  };

  export type ApplicationMinAggregateOutputType = {
    id: string | null;
    job_id: string | null;
    user_id: string | null;
    application_date: Date | null;
    status: string | null;
    resume: string | null;
    cover_letter: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ApplicationMaxAggregateOutputType = {
    id: string | null;
    job_id: string | null;
    user_id: string | null;
    application_date: Date | null;
    status: string | null;
    resume: string | null;
    cover_letter: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ApplicationCountAggregateOutputType = {
    id: number;
    job_id: number;
    user_id: number;
    application_date: number;
    status: number;
    resume: number;
    cover_letter: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type ApplicationMinAggregateInputType = {
    id?: true;
    job_id?: true;
    user_id?: true;
    application_date?: true;
    status?: true;
    resume?: true;
    cover_letter?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ApplicationMaxAggregateInputType = {
    id?: true;
    job_id?: true;
    user_id?: true;
    application_date?: true;
    status?: true;
    resume?: true;
    cover_letter?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ApplicationCountAggregateInputType = {
    id?: true;
    job_id?: true;
    user_id?: true;
    application_date?: true;
    status?: true;
    resume?: true;
    cover_letter?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type ApplicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which application to aggregate.
     */
    where?: applicationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of applications to fetch.
     */
    orderBy?: applicationOrderByWithRelationInput | applicationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: applicationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` applications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` applications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned applications
     **/
    _count?: true | ApplicationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ApplicationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ApplicationMaxAggregateInputType;
  };

  export type GetApplicationAggregateType<T extends ApplicationAggregateArgs> = {
    [P in keyof T & keyof AggregateApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplication[P]>
      : GetScalarType<T[P], AggregateApplication[P]>;
  };

  export type applicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: applicationWhereInput;
    orderBy?: applicationOrderByWithAggregationInput | applicationOrderByWithAggregationInput[];
    by: ApplicationScalarFieldEnum[] | ApplicationScalarFieldEnum;
    having?: applicationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ApplicationCountAggregateInputType | true;
    _min?: ApplicationMinAggregateInputType;
    _max?: ApplicationMaxAggregateInputType;
  };

  export type ApplicationGroupByOutputType = {
    id: string;
    job_id: string;
    user_id: string;
    application_date: Date;
    status: string;
    resume: string;
    cover_letter: string;
    created_at: Date;
    updated_at: Date;
    _count: ApplicationCountAggregateOutputType | null;
    _min: ApplicationMinAggregateOutputType | null;
    _max: ApplicationMaxAggregateOutputType | null;
  };

  type GetApplicationGroupByPayload<T extends applicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApplicationGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ApplicationGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
          : GetScalarType<T[P], ApplicationGroupByOutputType[P]>;
      }
    >
  >;

  export type applicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        job_id?: boolean;
        user_id?: boolean;
        application_date?: boolean;
        status?: boolean;
        resume?: boolean;
        cover_letter?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        job?: boolean | jobDefaultArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['application']
    >;

  export type applicationSelectScalar = {
    id?: boolean;
    job_id?: boolean;
    user_id?: boolean;
    application_date?: boolean;
    status?: boolean;
    resume?: boolean;
    cover_letter?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type applicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | jobDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $applicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'application';
    objects: {
      job: Prisma.$jobPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        job_id: string;
        user_id: string;
        application_date: Date;
        status: string;
        resume: string;
        cover_letter: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['application']
    >;
    composites: {};
  };

  type applicationGetPayload<S extends boolean | null | undefined | applicationDefaultArgs> = $Result.GetResult<
    Prisma.$applicationPayload,
    S
  >;

  type applicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    applicationFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: ApplicationCountAggregateInputType | true;
  };

  export interface applicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['application']; meta: { name: 'application' } };
    /**
     * Find zero or one Application that matches the filter.
     * @param {applicationFindUniqueArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends applicationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, applicationFindUniqueArgs<ExtArgs>>,
    ): Prisma__applicationClient<
      $Result.GetResult<Prisma.$applicationPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Application that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {applicationFindUniqueOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends applicationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, applicationFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__applicationClient<
      $Result.GetResult<Prisma.$applicationPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Application that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applicationFindFirstArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends applicationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, applicationFindFirstArgs<ExtArgs>>,
    ): Prisma__applicationClient<
      $Result.GetResult<Prisma.$applicationPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Application that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applicationFindFirstOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends applicationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, applicationFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__applicationClient<
      $Result.GetResult<Prisma.$applicationPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Applications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applicationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Applications
     * const applications = await prisma.application.findMany()
     *
     * // Get first 10 Applications
     * const applications = await prisma.application.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const applicationWithIdOnly = await prisma.application.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends applicationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, applicationFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$applicationPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Application.
     * @param {applicationCreateArgs} args - Arguments to create a Application.
     * @example
     * // Create one Application
     * const Application = await prisma.application.create({
     *   data: {
     *     // ... data to create a Application
     *   }
     * })
     *
     **/
    create<T extends applicationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, applicationCreateArgs<ExtArgs>>,
    ): Prisma__applicationClient<$Result.GetResult<Prisma.$applicationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Applications.
     *     @param {applicationCreateManyArgs} args - Arguments to create many Applications.
     *     @example
     *     // Create many Applications
     *     const application = await prisma.application.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends applicationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, applicationCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Application.
     * @param {applicationDeleteArgs} args - Arguments to delete one Application.
     * @example
     * // Delete one Application
     * const Application = await prisma.application.delete({
     *   where: {
     *     // ... filter to delete one Application
     *   }
     * })
     *
     **/
    delete<T extends applicationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, applicationDeleteArgs<ExtArgs>>,
    ): Prisma__applicationClient<$Result.GetResult<Prisma.$applicationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Application.
     * @param {applicationUpdateArgs} args - Arguments to update one Application.
     * @example
     * // Update one Application
     * const application = await prisma.application.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends applicationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, applicationUpdateArgs<ExtArgs>>,
    ): Prisma__applicationClient<$Result.GetResult<Prisma.$applicationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Applications.
     * @param {applicationDeleteManyArgs} args - Arguments to filter Applications to delete.
     * @example
     * // Delete a few Applications
     * const { count } = await prisma.application.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends applicationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, applicationDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Applications
     * const application = await prisma.application.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends applicationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, applicationUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Application.
     * @param {applicationUpsertArgs} args - Arguments to update or create a Application.
     * @example
     * // Update or create a Application
     * const application = await prisma.application.upsert({
     *   create: {
     *     // ... data to create a Application
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Application we want to update
     *   }
     * })
     **/
    upsert<T extends applicationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, applicationUpsertArgs<ExtArgs>>,
    ): Prisma__applicationClient<$Result.GetResult<Prisma.$applicationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applicationCountArgs} args - Arguments to filter Applications to count.
     * @example
     * // Count the number of Applications
     * const count = await prisma.application.count({
     *   where: {
     *     // ... the filter for the Applications we want to count
     *   }
     * })
     **/
    count<T extends applicationCountArgs>(
      args?: Subset<T, applicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicationCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ApplicationAggregateArgs>(
      args: Subset<T, ApplicationAggregateArgs>,
    ): Prisma.PrismaPromise<GetApplicationAggregateType<T>>;

    /**
     * Group by Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applicationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends applicationGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: applicationGroupByArgs['orderBy'] }
        : { orderBy?: applicationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, applicationGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the application model
     */
    readonly fields: applicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for application.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__applicationClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    job<T extends jobDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, jobDefaultArgs<ExtArgs>>,
    ): Prisma__jobClient<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the application model
   */
  interface applicationFieldRefs {
    readonly id: FieldRef<'application', 'String'>;
    readonly job_id: FieldRef<'application', 'String'>;
    readonly user_id: FieldRef<'application', 'String'>;
    readonly application_date: FieldRef<'application', 'DateTime'>;
    readonly status: FieldRef<'application', 'String'>;
    readonly resume: FieldRef<'application', 'String'>;
    readonly cover_letter: FieldRef<'application', 'String'>;
    readonly created_at: FieldRef<'application', 'DateTime'>;
    readonly updated_at: FieldRef<'application', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * application findUnique
   */
  export type applicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the application
     */
    select?: applicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: applicationInclude<ExtArgs> | null;
    /**
     * Filter, which application to fetch.
     */
    where: applicationWhereUniqueInput;
  };

  /**
   * application findUniqueOrThrow
   */
  export type applicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the application
     */
    select?: applicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: applicationInclude<ExtArgs> | null;
    /**
     * Filter, which application to fetch.
     */
    where: applicationWhereUniqueInput;
  };

  /**
   * application findFirst
   */
  export type applicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the application
     */
    select?: applicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: applicationInclude<ExtArgs> | null;
    /**
     * Filter, which application to fetch.
     */
    where?: applicationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of applications to fetch.
     */
    orderBy?: applicationOrderByWithRelationInput | applicationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for applications.
     */
    cursor?: applicationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` applications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` applications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[];
  };

  /**
   * application findFirstOrThrow
   */
  export type applicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the application
     */
    select?: applicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: applicationInclude<ExtArgs> | null;
    /**
     * Filter, which application to fetch.
     */
    where?: applicationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of applications to fetch.
     */
    orderBy?: applicationOrderByWithRelationInput | applicationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for applications.
     */
    cursor?: applicationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` applications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` applications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[];
  };

  /**
   * application findMany
   */
  export type applicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the application
     */
    select?: applicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: applicationInclude<ExtArgs> | null;
    /**
     * Filter, which applications to fetch.
     */
    where?: applicationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of applications to fetch.
     */
    orderBy?: applicationOrderByWithRelationInput | applicationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing applications.
     */
    cursor?: applicationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` applications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` applications.
     */
    skip?: number;
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[];
  };

  /**
   * application create
   */
  export type applicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the application
     */
    select?: applicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: applicationInclude<ExtArgs> | null;
    /**
     * The data needed to create a application.
     */
    data: XOR<applicationCreateInput, applicationUncheckedCreateInput>;
  };

  /**
   * application createMany
   */
  export type applicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many applications.
     */
    data: applicationCreateManyInput | applicationCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * application update
   */
  export type applicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the application
     */
    select?: applicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: applicationInclude<ExtArgs> | null;
    /**
     * The data needed to update a application.
     */
    data: XOR<applicationUpdateInput, applicationUncheckedUpdateInput>;
    /**
     * Choose, which application to update.
     */
    where: applicationWhereUniqueInput;
  };

  /**
   * application updateMany
   */
  export type applicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update applications.
     */
    data: XOR<applicationUpdateManyMutationInput, applicationUncheckedUpdateManyInput>;
    /**
     * Filter which applications to update
     */
    where?: applicationWhereInput;
  };

  /**
   * application upsert
   */
  export type applicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the application
     */
    select?: applicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: applicationInclude<ExtArgs> | null;
    /**
     * The filter to search for the application to update in case it exists.
     */
    where: applicationWhereUniqueInput;
    /**
     * In case the application found by the `where` argument doesn't exist, create a new application with this data.
     */
    create: XOR<applicationCreateInput, applicationUncheckedCreateInput>;
    /**
     * In case the application was found with the provided `where` argument, update it with this data.
     */
    update: XOR<applicationUpdateInput, applicationUncheckedUpdateInput>;
  };

  /**
   * application delete
   */
  export type applicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the application
     */
    select?: applicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: applicationInclude<ExtArgs> | null;
    /**
     * Filter which application to delete.
     */
    where: applicationWhereUniqueInput;
  };

  /**
   * application deleteMany
   */
  export type applicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which applications to delete
     */
    where?: applicationWhereInput;
  };

  /**
   * application without action
   */
  export type applicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the application
     */
    select?: applicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: applicationInclude<ExtArgs> | null;
  };

  /**
   * Model attendance
   */

  export type AggregateAttendance = {
    _count: AttendanceCountAggregateOutputType | null;
    _min: AttendanceMinAggregateOutputType | null;
    _max: AttendanceMaxAggregateOutputType | null;
  };

  export type AttendanceMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    check_in_time: Date | null;
    check_out_time: Date | null;
    date: Date | null;
    status: string | null;
    notes: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type AttendanceMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    check_in_time: Date | null;
    check_out_time: Date | null;
    date: Date | null;
    status: string | null;
    notes: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type AttendanceCountAggregateOutputType = {
    id: number;
    user_id: number;
    check_in_time: number;
    check_out_time: number;
    date: number;
    status: number;
    notes: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type AttendanceMinAggregateInputType = {
    id?: true;
    user_id?: true;
    check_in_time?: true;
    check_out_time?: true;
    date?: true;
    status?: true;
    notes?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type AttendanceMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    check_in_time?: true;
    check_out_time?: true;
    date?: true;
    status?: true;
    notes?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type AttendanceCountAggregateInputType = {
    id?: true;
    user_id?: true;
    check_in_time?: true;
    check_out_time?: true;
    date?: true;
    status?: true;
    notes?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type AttendanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which attendance to aggregate.
     */
    where?: attendanceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of attendances to fetch.
     */
    orderBy?: attendanceOrderByWithRelationInput | attendanceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: attendanceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` attendances from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` attendances.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned attendances
     **/
    _count?: true | AttendanceCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: AttendanceMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: AttendanceMaxAggregateInputType;
  };

  export type GetAttendanceAggregateType<T extends AttendanceAggregateArgs> = {
    [P in keyof T & keyof AggregateAttendance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendance[P]>
      : GetScalarType<T[P], AggregateAttendance[P]>;
  };

  export type attendanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: attendanceWhereInput;
    orderBy?: attendanceOrderByWithAggregationInput | attendanceOrderByWithAggregationInput[];
    by: AttendanceScalarFieldEnum[] | AttendanceScalarFieldEnum;
    having?: attendanceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AttendanceCountAggregateInputType | true;
    _min?: AttendanceMinAggregateInputType;
    _max?: AttendanceMaxAggregateInputType;
  };

  export type AttendanceGroupByOutputType = {
    id: string;
    user_id: string;
    check_in_time: Date;
    check_out_time: Date;
    date: Date;
    status: string;
    notes: string | null;
    created_at: Date;
    updated_at: Date;
    _count: AttendanceCountAggregateOutputType | null;
    _min: AttendanceMinAggregateOutputType | null;
    _max: AttendanceMaxAggregateOutputType | null;
  };

  type GetAttendanceGroupByPayload<T extends attendanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendanceGroupByOutputType, T['by']> & {
        [P in keyof T & keyof AttendanceGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
          : GetScalarType<T[P], AttendanceGroupByOutputType[P]>;
      }
    >
  >;

  export type attendanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        user_id?: boolean;
        check_in_time?: boolean;
        check_out_time?: boolean;
        date?: boolean;
        status?: boolean;
        notes?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['attendance']
    >;

  export type attendanceSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    check_in_time?: boolean;
    check_out_time?: boolean;
    date?: boolean;
    status?: boolean;
    notes?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type attendanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $attendancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'attendance';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        check_in_time: Date;
        check_out_time: Date;
        date: Date;
        status: string;
        notes: string | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['attendance']
    >;
    composites: {};
  };

  type attendanceGetPayload<S extends boolean | null | undefined | attendanceDefaultArgs> = $Result.GetResult<
    Prisma.$attendancePayload,
    S
  >;

  type attendanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    attendanceFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: AttendanceCountAggregateInputType | true;
  };

  export interface attendanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['attendance']; meta: { name: 'attendance' } };
    /**
     * Find zero or one Attendance that matches the filter.
     * @param {attendanceFindUniqueArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends attendanceFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, attendanceFindUniqueArgs<ExtArgs>>,
    ): Prisma__attendanceClient<
      $Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Attendance that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {attendanceFindUniqueOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends attendanceFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, attendanceFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__attendanceClient<
      $Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Attendance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attendanceFindFirstArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends attendanceFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, attendanceFindFirstArgs<ExtArgs>>,
    ): Prisma__attendanceClient<
      $Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Attendance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attendanceFindFirstOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends attendanceFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, attendanceFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__attendanceClient<
      $Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Attendances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attendanceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attendances
     * const attendances = await prisma.attendance.findMany()
     *
     * // Get first 10 Attendances
     * const attendances = await prisma.attendance.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const attendanceWithIdOnly = await prisma.attendance.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends attendanceFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, attendanceFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Attendance.
     * @param {attendanceCreateArgs} args - Arguments to create a Attendance.
     * @example
     * // Create one Attendance
     * const Attendance = await prisma.attendance.create({
     *   data: {
     *     // ... data to create a Attendance
     *   }
     * })
     *
     **/
    create<T extends attendanceCreateArgs<ExtArgs>>(
      args: SelectSubset<T, attendanceCreateArgs<ExtArgs>>,
    ): Prisma__attendanceClient<$Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Attendances.
     *     @param {attendanceCreateManyArgs} args - Arguments to create many Attendances.
     *     @example
     *     // Create many Attendances
     *     const attendance = await prisma.attendance.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends attendanceCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, attendanceCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Attendance.
     * @param {attendanceDeleteArgs} args - Arguments to delete one Attendance.
     * @example
     * // Delete one Attendance
     * const Attendance = await prisma.attendance.delete({
     *   where: {
     *     // ... filter to delete one Attendance
     *   }
     * })
     *
     **/
    delete<T extends attendanceDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, attendanceDeleteArgs<ExtArgs>>,
    ): Prisma__attendanceClient<$Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Attendance.
     * @param {attendanceUpdateArgs} args - Arguments to update one Attendance.
     * @example
     * // Update one Attendance
     * const attendance = await prisma.attendance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends attendanceUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, attendanceUpdateArgs<ExtArgs>>,
    ): Prisma__attendanceClient<$Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Attendances.
     * @param {attendanceDeleteManyArgs} args - Arguments to filter Attendances to delete.
     * @example
     * // Delete a few Attendances
     * const { count } = await prisma.attendance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends attendanceDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, attendanceDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attendanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends attendanceUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, attendanceUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Attendance.
     * @param {attendanceUpsertArgs} args - Arguments to update or create a Attendance.
     * @example
     * // Update or create a Attendance
     * const attendance = await prisma.attendance.upsert({
     *   create: {
     *     // ... data to create a Attendance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attendance we want to update
     *   }
     * })
     **/
    upsert<T extends attendanceUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, attendanceUpsertArgs<ExtArgs>>,
    ): Prisma__attendanceClient<$Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attendanceCountArgs} args - Arguments to filter Attendances to count.
     * @example
     * // Count the number of Attendances
     * const count = await prisma.attendance.count({
     *   where: {
     *     // ... the filter for the Attendances we want to count
     *   }
     * })
     **/
    count<T extends attendanceCountArgs>(
      args?: Subset<T, attendanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendanceCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends AttendanceAggregateArgs>(
      args: Subset<T, AttendanceAggregateArgs>,
    ): Prisma.PrismaPromise<GetAttendanceAggregateType<T>>;

    /**
     * Group by Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attendanceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends attendanceGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: attendanceGroupByArgs['orderBy'] }
        : { orderBy?: attendanceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, attendanceGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetAttendanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the attendance model
     */
    readonly fields: attendanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for attendance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__attendanceClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the attendance model
   */
  interface attendanceFieldRefs {
    readonly id: FieldRef<'attendance', 'String'>;
    readonly user_id: FieldRef<'attendance', 'String'>;
    readonly check_in_time: FieldRef<'attendance', 'DateTime'>;
    readonly check_out_time: FieldRef<'attendance', 'DateTime'>;
    readonly date: FieldRef<'attendance', 'DateTime'>;
    readonly status: FieldRef<'attendance', 'String'>;
    readonly notes: FieldRef<'attendance', 'String'>;
    readonly created_at: FieldRef<'attendance', 'DateTime'>;
    readonly updated_at: FieldRef<'attendance', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * attendance findUnique
   */
  export type attendanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: attendanceInclude<ExtArgs> | null;
    /**
     * Filter, which attendance to fetch.
     */
    where: attendanceWhereUniqueInput;
  };

  /**
   * attendance findUniqueOrThrow
   */
  export type attendanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: attendanceInclude<ExtArgs> | null;
    /**
     * Filter, which attendance to fetch.
     */
    where: attendanceWhereUniqueInput;
  };

  /**
   * attendance findFirst
   */
  export type attendanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: attendanceInclude<ExtArgs> | null;
    /**
     * Filter, which attendance to fetch.
     */
    where?: attendanceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of attendances to fetch.
     */
    orderBy?: attendanceOrderByWithRelationInput | attendanceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for attendances.
     */
    cursor?: attendanceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` attendances from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` attendances.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[];
  };

  /**
   * attendance findFirstOrThrow
   */
  export type attendanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: attendanceInclude<ExtArgs> | null;
    /**
     * Filter, which attendance to fetch.
     */
    where?: attendanceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of attendances to fetch.
     */
    orderBy?: attendanceOrderByWithRelationInput | attendanceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for attendances.
     */
    cursor?: attendanceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` attendances from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` attendances.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[];
  };

  /**
   * attendance findMany
   */
  export type attendanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: attendanceInclude<ExtArgs> | null;
    /**
     * Filter, which attendances to fetch.
     */
    where?: attendanceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of attendances to fetch.
     */
    orderBy?: attendanceOrderByWithRelationInput | attendanceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing attendances.
     */
    cursor?: attendanceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` attendances from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` attendances.
     */
    skip?: number;
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[];
  };

  /**
   * attendance create
   */
  export type attendanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: attendanceInclude<ExtArgs> | null;
    /**
     * The data needed to create a attendance.
     */
    data: XOR<attendanceCreateInput, attendanceUncheckedCreateInput>;
  };

  /**
   * attendance createMany
   */
  export type attendanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many attendances.
     */
    data: attendanceCreateManyInput | attendanceCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * attendance update
   */
  export type attendanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: attendanceInclude<ExtArgs> | null;
    /**
     * The data needed to update a attendance.
     */
    data: XOR<attendanceUpdateInput, attendanceUncheckedUpdateInput>;
    /**
     * Choose, which attendance to update.
     */
    where: attendanceWhereUniqueInput;
  };

  /**
   * attendance updateMany
   */
  export type attendanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update attendances.
     */
    data: XOR<attendanceUpdateManyMutationInput, attendanceUncheckedUpdateManyInput>;
    /**
     * Filter which attendances to update
     */
    where?: attendanceWhereInput;
  };

  /**
   * attendance upsert
   */
  export type attendanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: attendanceInclude<ExtArgs> | null;
    /**
     * The filter to search for the attendance to update in case it exists.
     */
    where: attendanceWhereUniqueInput;
    /**
     * In case the attendance found by the `where` argument doesn't exist, create a new attendance with this data.
     */
    create: XOR<attendanceCreateInput, attendanceUncheckedCreateInput>;
    /**
     * In case the attendance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<attendanceUpdateInput, attendanceUncheckedUpdateInput>;
  };

  /**
   * attendance delete
   */
  export type attendanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: attendanceInclude<ExtArgs> | null;
    /**
     * Filter which attendance to delete.
     */
    where: attendanceWhereUniqueInput;
  };

  /**
   * attendance deleteMany
   */
  export type attendanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which attendances to delete
     */
    where?: attendanceWhereInput;
  };

  /**
   * attendance without action
   */
  export type attendanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: attendanceInclude<ExtArgs> | null;
  };

  /**
   * Model company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  export type CompanyMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    location: string | null;
    established_date: Date | null;
    industry: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type CompanyMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    location: string | null;
    established_date: Date | null;
    industry: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type CompanyCountAggregateOutputType = {
    id: number;
    description: number;
    location: number;
    established_date: number;
    industry: number;
    name: number;
    created_at: number;
    updated_at: number;
    user_id: number;
    tenant_id: number;
    _all: number;
  };

  export type CompanyMinAggregateInputType = {
    id?: true;
    description?: true;
    location?: true;
    established_date?: true;
    industry?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type CompanyMaxAggregateInputType = {
    id?: true;
    description?: true;
    location?: true;
    established_date?: true;
    industry?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type CompanyCountAggregateInputType = {
    id?: true;
    description?: true;
    location?: true;
    established_date?: true;
    industry?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
    _all?: true;
  };

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which company to aggregate.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned companies
     **/
    _count?: true | CompanyCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CompanyMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CompanyMaxAggregateInputType;
  };

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
    [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>;
  };

  export type companyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: companyWhereInput;
    orderBy?: companyOrderByWithAggregationInput | companyOrderByWithAggregationInput[];
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum;
    having?: companyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CompanyCountAggregateInputType | true;
    _min?: CompanyMinAggregateInputType;
    _max?: CompanyMaxAggregateInputType;
  };

  export type CompanyGroupByOutputType = {
    id: string;
    description: string | null;
    location: string | null;
    established_date: Date | null;
    industry: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    user_id: string;
    tenant_id: string;
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  type GetCompanyGroupByPayload<T extends companyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> & {
        [P in keyof T & keyof CompanyGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
          : GetScalarType<T[P], CompanyGroupByOutputType[P]>;
      }
    >
  >;

  export type companySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      description?: boolean;
      location?: boolean;
      established_date?: boolean;
      industry?: boolean;
      name?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user_id?: boolean;
      tenant_id?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
      job?: boolean | company$jobArgs<ExtArgs>;
      _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['company']
  >;

  export type companySelectScalar = {
    id?: boolean;
    description?: boolean;
    location?: boolean;
    established_date?: boolean;
    industry?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    user_id?: boolean;
    tenant_id?: boolean;
  };

  export type companyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
    job?: boolean | company$jobArgs<ExtArgs>;
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $companyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'company';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
      job: Prisma.$jobPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        location: string | null;
        established_date: Date | null;
        industry: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
        user_id: string;
        tenant_id: string;
      },
      ExtArgs['result']['company']
    >;
    composites: {};
  };

  type companyGetPayload<S extends boolean | null | undefined | companyDefaultArgs> = $Result.GetResult<
    Prisma.$companyPayload,
    S
  >;

  type companyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    companyFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: CompanyCountAggregateInputType | true;
  };

  export interface companyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['company']; meta: { name: 'company' } };
    /**
     * Find zero or one Company that matches the filter.
     * @param {companyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends companyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, companyFindUniqueArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Company that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {companyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends companyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends companyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends companyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     *
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends companyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Company.
     * @param {companyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     *
     **/
    create<T extends companyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, companyCreateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Companies.
     *     @param {companyCreateManyArgs} args - Arguments to create many Companies.
     *     @example
     *     // Create many Companies
     *     const company = await prisma.company.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends companyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Company.
     * @param {companyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     *
     **/
    delete<T extends companyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, companyDeleteArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Company.
     * @param {companyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends companyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Companies.
     * @param {companyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends companyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends companyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Company.
     * @param {companyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     **/
    upsert<T extends companyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpsertArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
     **/
    count<T extends companyCountArgs>(
      args?: Subset<T, companyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends CompanyAggregateArgs>(
      args: Subset<T, CompanyAggregateArgs>,
    ): Prisma.PrismaPromise<GetCompanyAggregateType<T>>;

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends companyGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: companyGroupByArgs['orderBy'] }
        : { orderBy?: companyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, companyGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the company model
     */
    readonly fields: companyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__companyClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    job<T extends company$jobArgs<ExtArgs> = {}>(
      args?: Subset<T, company$jobArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the company model
   */
  interface companyFieldRefs {
    readonly id: FieldRef<'company', 'String'>;
    readonly description: FieldRef<'company', 'String'>;
    readonly location: FieldRef<'company', 'String'>;
    readonly established_date: FieldRef<'company', 'DateTime'>;
    readonly industry: FieldRef<'company', 'String'>;
    readonly name: FieldRef<'company', 'String'>;
    readonly created_at: FieldRef<'company', 'DateTime'>;
    readonly updated_at: FieldRef<'company', 'DateTime'>;
    readonly user_id: FieldRef<'company', 'String'>;
    readonly tenant_id: FieldRef<'company', 'String'>;
  }

  // Custom InputTypes

  /**
   * company findUnique
   */
  export type companyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findUniqueOrThrow
   */
  export type companyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findFirst
   */
  export type companyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findFirstOrThrow
   */
  export type companyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findMany
   */
  export type companyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which companies to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company create
   */
  export type companyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The data needed to create a company.
     */
    data: XOR<companyCreateInput, companyUncheckedCreateInput>;
  };

  /**
   * company createMany
   */
  export type companyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many companies.
     */
    data: companyCreateManyInput | companyCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * company update
   */
  export type companyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The data needed to update a company.
     */
    data: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
    /**
     * Choose, which company to update.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company updateMany
   */
  export type companyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update companies.
     */
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyInput>;
    /**
     * Filter which companies to update
     */
    where?: companyWhereInput;
  };

  /**
   * company upsert
   */
  export type companyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The filter to search for the company to update in case it exists.
     */
    where: companyWhereUniqueInput;
    /**
     * In case the company found by the `where` argument doesn't exist, create a new company with this data.
     */
    create: XOR<companyCreateInput, companyUncheckedCreateInput>;
    /**
     * In case the company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
  };

  /**
   * company delete
   */
  export type companyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter which company to delete.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company deleteMany
   */
  export type companyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which companies to delete
     */
    where?: companyWhereInput;
  };

  /**
   * company.job
   */
  export type company$jobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jobInclude<ExtArgs> | null;
    where?: jobWhereInput;
    orderBy?: jobOrderByWithRelationInput | jobOrderByWithRelationInput[];
    cursor?: jobWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[];
  };

  /**
   * company without action
   */
  export type companyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
  };

  /**
   * Model job
   */

  export type AggregateJob = {
    _count: JobCountAggregateOutputType | null;
    _min: JobMinAggregateOutputType | null;
    _max: JobMaxAggregateOutputType | null;
  };

  export type JobMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    location: string | null;
    posting_date: Date | null;
    closing_date: Date | null;
    company_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type JobMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    location: string | null;
    posting_date: Date | null;
    closing_date: Date | null;
    company_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type JobCountAggregateOutputType = {
    id: number;
    title: number;
    description: number;
    location: number;
    posting_date: number;
    closing_date: number;
    company_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type JobMinAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    location?: true;
    posting_date?: true;
    closing_date?: true;
    company_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type JobMaxAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    location?: true;
    posting_date?: true;
    closing_date?: true;
    company_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type JobCountAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    location?: true;
    posting_date?: true;
    closing_date?: true;
    company_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type JobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which job to aggregate.
     */
    where?: jobWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of jobs to fetch.
     */
    orderBy?: jobOrderByWithRelationInput | jobOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: jobWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` jobs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` jobs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned jobs
     **/
    _count?: true | JobCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: JobMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: JobMaxAggregateInputType;
  };

  export type GetJobAggregateType<T extends JobAggregateArgs> = {
    [P in keyof T & keyof AggregateJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJob[P]>
      : GetScalarType<T[P], AggregateJob[P]>;
  };

  export type jobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: jobWhereInput;
    orderBy?: jobOrderByWithAggregationInput | jobOrderByWithAggregationInput[];
    by: JobScalarFieldEnum[] | JobScalarFieldEnum;
    having?: jobScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: JobCountAggregateInputType | true;
    _min?: JobMinAggregateInputType;
    _max?: JobMaxAggregateInputType;
  };

  export type JobGroupByOutputType = {
    id: string;
    title: string;
    description: string;
    location: string;
    posting_date: Date;
    closing_date: Date;
    company_id: string;
    created_at: Date;
    updated_at: Date;
    _count: JobCountAggregateOutputType | null;
    _min: JobMinAggregateOutputType | null;
    _max: JobMaxAggregateOutputType | null;
  };

  type GetJobGroupByPayload<T extends jobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobGroupByOutputType, T['by']> & {
        [P in keyof T & keyof JobGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], JobGroupByOutputType[P]>
          : GetScalarType<T[P], JobGroupByOutputType[P]>;
      }
    >
  >;

  export type jobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      description?: boolean;
      location?: boolean;
      posting_date?: boolean;
      closing_date?: boolean;
      company_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      application?: boolean | job$applicationArgs<ExtArgs>;
      company?: boolean | companyDefaultArgs<ExtArgs>;
      _count?: boolean | JobCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['job']
  >;

  export type jobSelectScalar = {
    id?: boolean;
    title?: boolean;
    description?: boolean;
    location?: boolean;
    posting_date?: boolean;
    closing_date?: boolean;
    company_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type jobInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | job$applicationArgs<ExtArgs>;
    company?: boolean | companyDefaultArgs<ExtArgs>;
    _count?: boolean | JobCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $jobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'job';
    objects: {
      application: Prisma.$applicationPayload<ExtArgs>[];
      company: Prisma.$companyPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        title: string;
        description: string;
        location: string;
        posting_date: Date;
        closing_date: Date;
        company_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['job']
    >;
    composites: {};
  };

  type jobGetPayload<S extends boolean | null | undefined | jobDefaultArgs> = $Result.GetResult<Prisma.$jobPayload, S>;

  type jobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    jobFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: JobCountAggregateInputType | true;
  };

  export interface jobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['job']; meta: { name: 'job' } };
    /**
     * Find zero or one Job that matches the filter.
     * @param {jobFindUniqueArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends jobFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, jobFindUniqueArgs<ExtArgs>>,
    ): Prisma__jobClient<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Job that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {jobFindUniqueOrThrowArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends jobFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, jobFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__jobClient<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Job that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobFindFirstArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends jobFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, jobFindFirstArgs<ExtArgs>>,
    ): Prisma__jobClient<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Job that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobFindFirstOrThrowArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends jobFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, jobFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__jobClient<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jobs
     * const jobs = await prisma.job.findMany()
     *
     * // Get first 10 Jobs
     * const jobs = await prisma.job.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const jobWithIdOnly = await prisma.job.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends jobFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, jobFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Job.
     * @param {jobCreateArgs} args - Arguments to create a Job.
     * @example
     * // Create one Job
     * const Job = await prisma.job.create({
     *   data: {
     *     // ... data to create a Job
     *   }
     * })
     *
     **/
    create<T extends jobCreateArgs<ExtArgs>>(
      args: SelectSubset<T, jobCreateArgs<ExtArgs>>,
    ): Prisma__jobClient<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Jobs.
     *     @param {jobCreateManyArgs} args - Arguments to create many Jobs.
     *     @example
     *     // Create many Jobs
     *     const job = await prisma.job.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends jobCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, jobCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Job.
     * @param {jobDeleteArgs} args - Arguments to delete one Job.
     * @example
     * // Delete one Job
     * const Job = await prisma.job.delete({
     *   where: {
     *     // ... filter to delete one Job
     *   }
     * })
     *
     **/
    delete<T extends jobDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, jobDeleteArgs<ExtArgs>>,
    ): Prisma__jobClient<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Job.
     * @param {jobUpdateArgs} args - Arguments to update one Job.
     * @example
     * // Update one Job
     * const job = await prisma.job.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends jobUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, jobUpdateArgs<ExtArgs>>,
    ): Prisma__jobClient<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Jobs.
     * @param {jobDeleteManyArgs} args - Arguments to filter Jobs to delete.
     * @example
     * // Delete a few Jobs
     * const { count } = await prisma.job.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends jobDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, jobDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jobs
     * const job = await prisma.job.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends jobUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, jobUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Job.
     * @param {jobUpsertArgs} args - Arguments to update or create a Job.
     * @example
     * // Update or create a Job
     * const job = await prisma.job.upsert({
     *   create: {
     *     // ... data to create a Job
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Job we want to update
     *   }
     * })
     **/
    upsert<T extends jobUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, jobUpsertArgs<ExtArgs>>,
    ): Prisma__jobClient<$Result.GetResult<Prisma.$jobPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobCountArgs} args - Arguments to filter Jobs to count.
     * @example
     * // Count the number of Jobs
     * const count = await prisma.job.count({
     *   where: {
     *     // ... the filter for the Jobs we want to count
     *   }
     * })
     **/
    count<T extends jobCountArgs>(
      args?: Subset<T, jobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends JobAggregateArgs>(
      args: Subset<T, JobAggregateArgs>,
    ): Prisma.PrismaPromise<GetJobAggregateType<T>>;

    /**
     * Group by Job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends jobGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: jobGroupByArgs['orderBy'] }
        : { orderBy?: jobGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, jobGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the job model
     */
    readonly fields: jobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for job.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__jobClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    application<T extends job$applicationArgs<ExtArgs> = {}>(
      args?: Subset<T, job$applicationArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$applicationPayload<ExtArgs>, T, 'findMany'> | Null>;

    company<T extends companyDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, companyDefaultArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the job model
   */
  interface jobFieldRefs {
    readonly id: FieldRef<'job', 'String'>;
    readonly title: FieldRef<'job', 'String'>;
    readonly description: FieldRef<'job', 'String'>;
    readonly location: FieldRef<'job', 'String'>;
    readonly posting_date: FieldRef<'job', 'DateTime'>;
    readonly closing_date: FieldRef<'job', 'DateTime'>;
    readonly company_id: FieldRef<'job', 'String'>;
    readonly created_at: FieldRef<'job', 'DateTime'>;
    readonly updated_at: FieldRef<'job', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * job findUnique
   */
  export type jobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jobInclude<ExtArgs> | null;
    /**
     * Filter, which job to fetch.
     */
    where: jobWhereUniqueInput;
  };

  /**
   * job findUniqueOrThrow
   */
  export type jobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jobInclude<ExtArgs> | null;
    /**
     * Filter, which job to fetch.
     */
    where: jobWhereUniqueInput;
  };

  /**
   * job findFirst
   */
  export type jobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jobInclude<ExtArgs> | null;
    /**
     * Filter, which job to fetch.
     */
    where?: jobWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of jobs to fetch.
     */
    orderBy?: jobOrderByWithRelationInput | jobOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for jobs.
     */
    cursor?: jobWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` jobs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` jobs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[];
  };

  /**
   * job findFirstOrThrow
   */
  export type jobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jobInclude<ExtArgs> | null;
    /**
     * Filter, which job to fetch.
     */
    where?: jobWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of jobs to fetch.
     */
    orderBy?: jobOrderByWithRelationInput | jobOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for jobs.
     */
    cursor?: jobWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` jobs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` jobs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[];
  };

  /**
   * job findMany
   */
  export type jobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jobInclude<ExtArgs> | null;
    /**
     * Filter, which jobs to fetch.
     */
    where?: jobWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of jobs to fetch.
     */
    orderBy?: jobOrderByWithRelationInput | jobOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing jobs.
     */
    cursor?: jobWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` jobs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` jobs.
     */
    skip?: number;
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[];
  };

  /**
   * job create
   */
  export type jobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jobInclude<ExtArgs> | null;
    /**
     * The data needed to create a job.
     */
    data: XOR<jobCreateInput, jobUncheckedCreateInput>;
  };

  /**
   * job createMany
   */
  export type jobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many jobs.
     */
    data: jobCreateManyInput | jobCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * job update
   */
  export type jobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jobInclude<ExtArgs> | null;
    /**
     * The data needed to update a job.
     */
    data: XOR<jobUpdateInput, jobUncheckedUpdateInput>;
    /**
     * Choose, which job to update.
     */
    where: jobWhereUniqueInput;
  };

  /**
   * job updateMany
   */
  export type jobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update jobs.
     */
    data: XOR<jobUpdateManyMutationInput, jobUncheckedUpdateManyInput>;
    /**
     * Filter which jobs to update
     */
    where?: jobWhereInput;
  };

  /**
   * job upsert
   */
  export type jobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jobInclude<ExtArgs> | null;
    /**
     * The filter to search for the job to update in case it exists.
     */
    where: jobWhereUniqueInput;
    /**
     * In case the job found by the `where` argument doesn't exist, create a new job with this data.
     */
    create: XOR<jobCreateInput, jobUncheckedCreateInput>;
    /**
     * In case the job was found with the provided `where` argument, update it with this data.
     */
    update: XOR<jobUpdateInput, jobUncheckedUpdateInput>;
  };

  /**
   * job delete
   */
  export type jobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jobInclude<ExtArgs> | null;
    /**
     * Filter which job to delete.
     */
    where: jobWhereUniqueInput;
  };

  /**
   * job deleteMany
   */
  export type jobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which jobs to delete
     */
    where?: jobWhereInput;
  };

  /**
   * job.application
   */
  export type job$applicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the application
     */
    select?: applicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: applicationInclude<ExtArgs> | null;
    where?: applicationWhereInput;
    orderBy?: applicationOrderByWithRelationInput | applicationOrderByWithRelationInput[];
    cursor?: applicationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[];
  };

  /**
   * job without action
   */
  export type jobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job
     */
    select?: jobSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: jobInclude<ExtArgs> | null;
  };

  /**
   * Model performance_review
   */

  export type AggregatePerformance_review = {
    _count: Performance_reviewCountAggregateOutputType | null;
    _avg: Performance_reviewAvgAggregateOutputType | null;
    _sum: Performance_reviewSumAggregateOutputType | null;
    _min: Performance_reviewMinAggregateOutputType | null;
    _max: Performance_reviewMaxAggregateOutputType | null;
  };

  export type Performance_reviewAvgAggregateOutputType = {
    rating: number | null;
  };

  export type Performance_reviewSumAggregateOutputType = {
    rating: number | null;
  };

  export type Performance_reviewMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    review_date: Date | null;
    reviewer_id: string | null;
    rating: number | null;
    comments: string | null;
    next_review_date: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Performance_reviewMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    review_date: Date | null;
    reviewer_id: string | null;
    rating: number | null;
    comments: string | null;
    next_review_date: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Performance_reviewCountAggregateOutputType = {
    id: number;
    user_id: number;
    review_date: number;
    reviewer_id: number;
    rating: number;
    comments: number;
    next_review_date: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Performance_reviewAvgAggregateInputType = {
    rating?: true;
  };

  export type Performance_reviewSumAggregateInputType = {
    rating?: true;
  };

  export type Performance_reviewMinAggregateInputType = {
    id?: true;
    user_id?: true;
    review_date?: true;
    reviewer_id?: true;
    rating?: true;
    comments?: true;
    next_review_date?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Performance_reviewMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    review_date?: true;
    reviewer_id?: true;
    rating?: true;
    comments?: true;
    next_review_date?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Performance_reviewCountAggregateInputType = {
    id?: true;
    user_id?: true;
    review_date?: true;
    reviewer_id?: true;
    rating?: true;
    comments?: true;
    next_review_date?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Performance_reviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which performance_review to aggregate.
     */
    where?: performance_reviewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of performance_reviews to fetch.
     */
    orderBy?: performance_reviewOrderByWithRelationInput | performance_reviewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: performance_reviewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` performance_reviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` performance_reviews.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned performance_reviews
     **/
    _count?: true | Performance_reviewCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: Performance_reviewAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: Performance_reviewSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Performance_reviewMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Performance_reviewMaxAggregateInputType;
  };

  export type GetPerformance_reviewAggregateType<T extends Performance_reviewAggregateArgs> = {
    [P in keyof T & keyof AggregatePerformance_review]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePerformance_review[P]>
      : GetScalarType<T[P], AggregatePerformance_review[P]>;
  };

  export type performance_reviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: performance_reviewWhereInput;
    orderBy?: performance_reviewOrderByWithAggregationInput | performance_reviewOrderByWithAggregationInput[];
    by: Performance_reviewScalarFieldEnum[] | Performance_reviewScalarFieldEnum;
    having?: performance_reviewScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Performance_reviewCountAggregateInputType | true;
    _avg?: Performance_reviewAvgAggregateInputType;
    _sum?: Performance_reviewSumAggregateInputType;
    _min?: Performance_reviewMinAggregateInputType;
    _max?: Performance_reviewMaxAggregateInputType;
  };

  export type Performance_reviewGroupByOutputType = {
    id: string;
    user_id: string;
    review_date: Date;
    reviewer_id: string;
    rating: number;
    comments: string;
    next_review_date: Date;
    created_at: Date;
    updated_at: Date;
    _count: Performance_reviewCountAggregateOutputType | null;
    _avg: Performance_reviewAvgAggregateOutputType | null;
    _sum: Performance_reviewSumAggregateOutputType | null;
    _min: Performance_reviewMinAggregateOutputType | null;
    _max: Performance_reviewMaxAggregateOutputType | null;
  };

  type GetPerformance_reviewGroupByPayload<T extends performance_reviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Performance_reviewGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Performance_reviewGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Performance_reviewGroupByOutputType[P]>
          : GetScalarType<T[P], Performance_reviewGroupByOutputType[P]>;
      }
    >
  >;

  export type performance_reviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        user_id?: boolean;
        review_date?: boolean;
        reviewer_id?: boolean;
        rating?: boolean;
        comments?: boolean;
        next_review_date?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        user_performance_review_reviewer_idTouser?: boolean | userDefaultArgs<ExtArgs>;
        user_performance_review_user_idTouser?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['performance_review']
    >;

  export type performance_reviewSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    review_date?: boolean;
    reviewer_id?: boolean;
    rating?: boolean;
    comments?: boolean;
    next_review_date?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type performance_reviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_performance_review_reviewer_idTouser?: boolean | userDefaultArgs<ExtArgs>;
    user_performance_review_user_idTouser?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $performance_reviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'performance_review';
    objects: {
      user_performance_review_reviewer_idTouser: Prisma.$userPayload<ExtArgs>;
      user_performance_review_user_idTouser: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        review_date: Date;
        reviewer_id: string;
        rating: number;
        comments: string;
        next_review_date: Date;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['performance_review']
    >;
    composites: {};
  };

  type performance_reviewGetPayload<S extends boolean | null | undefined | performance_reviewDefaultArgs> =
    $Result.GetResult<Prisma.$performance_reviewPayload, S>;

  type performance_reviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    performance_reviewFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Performance_reviewCountAggregateInputType | true;
  };

  export interface performance_reviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['performance_review'];
      meta: { name: 'performance_review' };
    };
    /**
     * Find zero or one Performance_review that matches the filter.
     * @param {performance_reviewFindUniqueArgs} args - Arguments to find a Performance_review
     * @example
     * // Get one Performance_review
     * const performance_review = await prisma.performance_review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends performance_reviewFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, performance_reviewFindUniqueArgs<ExtArgs>>,
    ): Prisma__performance_reviewClient<
      $Result.GetResult<Prisma.$performance_reviewPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Performance_review that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {performance_reviewFindUniqueOrThrowArgs} args - Arguments to find a Performance_review
     * @example
     * // Get one Performance_review
     * const performance_review = await prisma.performance_review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends performance_reviewFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, performance_reviewFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__performance_reviewClient<
      $Result.GetResult<Prisma.$performance_reviewPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Performance_review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {performance_reviewFindFirstArgs} args - Arguments to find a Performance_review
     * @example
     * // Get one Performance_review
     * const performance_review = await prisma.performance_review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends performance_reviewFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, performance_reviewFindFirstArgs<ExtArgs>>,
    ): Prisma__performance_reviewClient<
      $Result.GetResult<Prisma.$performance_reviewPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Performance_review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {performance_reviewFindFirstOrThrowArgs} args - Arguments to find a Performance_review
     * @example
     * // Get one Performance_review
     * const performance_review = await prisma.performance_review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends performance_reviewFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, performance_reviewFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__performance_reviewClient<
      $Result.GetResult<Prisma.$performance_reviewPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Performance_reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {performance_reviewFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Performance_reviews
     * const performance_reviews = await prisma.performance_review.findMany()
     *
     * // Get first 10 Performance_reviews
     * const performance_reviews = await prisma.performance_review.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const performance_reviewWithIdOnly = await prisma.performance_review.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends performance_reviewFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, performance_reviewFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$performance_reviewPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Performance_review.
     * @param {performance_reviewCreateArgs} args - Arguments to create a Performance_review.
     * @example
     * // Create one Performance_review
     * const Performance_review = await prisma.performance_review.create({
     *   data: {
     *     // ... data to create a Performance_review
     *   }
     * })
     *
     **/
    create<T extends performance_reviewCreateArgs<ExtArgs>>(
      args: SelectSubset<T, performance_reviewCreateArgs<ExtArgs>>,
    ): Prisma__performance_reviewClient<
      $Result.GetResult<Prisma.$performance_reviewPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Performance_reviews.
     *     @param {performance_reviewCreateManyArgs} args - Arguments to create many Performance_reviews.
     *     @example
     *     // Create many Performance_reviews
     *     const performance_review = await prisma.performance_review.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends performance_reviewCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, performance_reviewCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Performance_review.
     * @param {performance_reviewDeleteArgs} args - Arguments to delete one Performance_review.
     * @example
     * // Delete one Performance_review
     * const Performance_review = await prisma.performance_review.delete({
     *   where: {
     *     // ... filter to delete one Performance_review
     *   }
     * })
     *
     **/
    delete<T extends performance_reviewDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, performance_reviewDeleteArgs<ExtArgs>>,
    ): Prisma__performance_reviewClient<
      $Result.GetResult<Prisma.$performance_reviewPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Performance_review.
     * @param {performance_reviewUpdateArgs} args - Arguments to update one Performance_review.
     * @example
     * // Update one Performance_review
     * const performance_review = await prisma.performance_review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends performance_reviewUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, performance_reviewUpdateArgs<ExtArgs>>,
    ): Prisma__performance_reviewClient<
      $Result.GetResult<Prisma.$performance_reviewPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Performance_reviews.
     * @param {performance_reviewDeleteManyArgs} args - Arguments to filter Performance_reviews to delete.
     * @example
     * // Delete a few Performance_reviews
     * const { count } = await prisma.performance_review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends performance_reviewDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, performance_reviewDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Performance_reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {performance_reviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Performance_reviews
     * const performance_review = await prisma.performance_review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends performance_reviewUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, performance_reviewUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Performance_review.
     * @param {performance_reviewUpsertArgs} args - Arguments to update or create a Performance_review.
     * @example
     * // Update or create a Performance_review
     * const performance_review = await prisma.performance_review.upsert({
     *   create: {
     *     // ... data to create a Performance_review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Performance_review we want to update
     *   }
     * })
     **/
    upsert<T extends performance_reviewUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, performance_reviewUpsertArgs<ExtArgs>>,
    ): Prisma__performance_reviewClient<
      $Result.GetResult<Prisma.$performance_reviewPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Performance_reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {performance_reviewCountArgs} args - Arguments to filter Performance_reviews to count.
     * @example
     * // Count the number of Performance_reviews
     * const count = await prisma.performance_review.count({
     *   where: {
     *     // ... the filter for the Performance_reviews we want to count
     *   }
     * })
     **/
    count<T extends performance_reviewCountArgs>(
      args?: Subset<T, performance_reviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Performance_reviewCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Performance_review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Performance_reviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Performance_reviewAggregateArgs>(
      args: Subset<T, Performance_reviewAggregateArgs>,
    ): Prisma.PrismaPromise<GetPerformance_reviewAggregateType<T>>;

    /**
     * Group by Performance_review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {performance_reviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends performance_reviewGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: performance_reviewGroupByArgs['orderBy'] }
        : { orderBy?: performance_reviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, performance_reviewGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetPerformance_reviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the performance_review model
     */
    readonly fields: performance_reviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for performance_review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__performance_reviewClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user_performance_review_reviewer_idTouser<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user_performance_review_user_idTouser<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the performance_review model
   */
  interface performance_reviewFieldRefs {
    readonly id: FieldRef<'performance_review', 'String'>;
    readonly user_id: FieldRef<'performance_review', 'String'>;
    readonly review_date: FieldRef<'performance_review', 'DateTime'>;
    readonly reviewer_id: FieldRef<'performance_review', 'String'>;
    readonly rating: FieldRef<'performance_review', 'Int'>;
    readonly comments: FieldRef<'performance_review', 'String'>;
    readonly next_review_date: FieldRef<'performance_review', 'DateTime'>;
    readonly created_at: FieldRef<'performance_review', 'DateTime'>;
    readonly updated_at: FieldRef<'performance_review', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * performance_review findUnique
   */
  export type performance_reviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the performance_review
     */
    select?: performance_reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: performance_reviewInclude<ExtArgs> | null;
    /**
     * Filter, which performance_review to fetch.
     */
    where: performance_reviewWhereUniqueInput;
  };

  /**
   * performance_review findUniqueOrThrow
   */
  export type performance_reviewFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the performance_review
     */
    select?: performance_reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: performance_reviewInclude<ExtArgs> | null;
    /**
     * Filter, which performance_review to fetch.
     */
    where: performance_reviewWhereUniqueInput;
  };

  /**
   * performance_review findFirst
   */
  export type performance_reviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the performance_review
     */
    select?: performance_reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: performance_reviewInclude<ExtArgs> | null;
    /**
     * Filter, which performance_review to fetch.
     */
    where?: performance_reviewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of performance_reviews to fetch.
     */
    orderBy?: performance_reviewOrderByWithRelationInput | performance_reviewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for performance_reviews.
     */
    cursor?: performance_reviewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` performance_reviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` performance_reviews.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of performance_reviews.
     */
    distinct?: Performance_reviewScalarFieldEnum | Performance_reviewScalarFieldEnum[];
  };

  /**
   * performance_review findFirstOrThrow
   */
  export type performance_reviewFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the performance_review
     */
    select?: performance_reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: performance_reviewInclude<ExtArgs> | null;
    /**
     * Filter, which performance_review to fetch.
     */
    where?: performance_reviewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of performance_reviews to fetch.
     */
    orderBy?: performance_reviewOrderByWithRelationInput | performance_reviewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for performance_reviews.
     */
    cursor?: performance_reviewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` performance_reviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` performance_reviews.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of performance_reviews.
     */
    distinct?: Performance_reviewScalarFieldEnum | Performance_reviewScalarFieldEnum[];
  };

  /**
   * performance_review findMany
   */
  export type performance_reviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the performance_review
     */
    select?: performance_reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: performance_reviewInclude<ExtArgs> | null;
    /**
     * Filter, which performance_reviews to fetch.
     */
    where?: performance_reviewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of performance_reviews to fetch.
     */
    orderBy?: performance_reviewOrderByWithRelationInput | performance_reviewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing performance_reviews.
     */
    cursor?: performance_reviewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` performance_reviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` performance_reviews.
     */
    skip?: number;
    distinct?: Performance_reviewScalarFieldEnum | Performance_reviewScalarFieldEnum[];
  };

  /**
   * performance_review create
   */
  export type performance_reviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the performance_review
     */
    select?: performance_reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: performance_reviewInclude<ExtArgs> | null;
    /**
     * The data needed to create a performance_review.
     */
    data: XOR<performance_reviewCreateInput, performance_reviewUncheckedCreateInput>;
  };

  /**
   * performance_review createMany
   */
  export type performance_reviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many performance_reviews.
     */
    data: performance_reviewCreateManyInput | performance_reviewCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * performance_review update
   */
  export type performance_reviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the performance_review
     */
    select?: performance_reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: performance_reviewInclude<ExtArgs> | null;
    /**
     * The data needed to update a performance_review.
     */
    data: XOR<performance_reviewUpdateInput, performance_reviewUncheckedUpdateInput>;
    /**
     * Choose, which performance_review to update.
     */
    where: performance_reviewWhereUniqueInput;
  };

  /**
   * performance_review updateMany
   */
  export type performance_reviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update performance_reviews.
     */
    data: XOR<performance_reviewUpdateManyMutationInput, performance_reviewUncheckedUpdateManyInput>;
    /**
     * Filter which performance_reviews to update
     */
    where?: performance_reviewWhereInput;
  };

  /**
   * performance_review upsert
   */
  export type performance_reviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the performance_review
     */
    select?: performance_reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: performance_reviewInclude<ExtArgs> | null;
    /**
     * The filter to search for the performance_review to update in case it exists.
     */
    where: performance_reviewWhereUniqueInput;
    /**
     * In case the performance_review found by the `where` argument doesn't exist, create a new performance_review with this data.
     */
    create: XOR<performance_reviewCreateInput, performance_reviewUncheckedCreateInput>;
    /**
     * In case the performance_review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<performance_reviewUpdateInput, performance_reviewUncheckedUpdateInput>;
  };

  /**
   * performance_review delete
   */
  export type performance_reviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the performance_review
     */
    select?: performance_reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: performance_reviewInclude<ExtArgs> | null;
    /**
     * Filter which performance_review to delete.
     */
    where: performance_reviewWhereUniqueInput;
  };

  /**
   * performance_review deleteMany
   */
  export type performance_reviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which performance_reviews to delete
     */
    where?: performance_reviewWhereInput;
  };

  /**
   * performance_review without action
   */
  export type performance_reviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the performance_review
     */
    select?: performance_reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: performance_reviewInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    firstName: number;
    lastName: number;
    roq_user_id: number;
    tenant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      firstName?: boolean;
      lastName?: boolean;
      roq_user_id?: boolean;
      tenant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      application?: boolean | user$applicationArgs<ExtArgs>;
      attendance?: boolean | user$attendanceArgs<ExtArgs>;
      company?: boolean | user$companyArgs<ExtArgs>;
      performance_review_performance_review_reviewer_idTouser?:
        | boolean
        | user$performance_review_performance_review_reviewer_idTouserArgs<ExtArgs>;
      performance_review_performance_review_user_idTouser?:
        | boolean
        | user$performance_review_performance_review_user_idTouserArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    roq_user_id?: boolean;
    tenant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | user$applicationArgs<ExtArgs>;
    attendance?: boolean | user$attendanceArgs<ExtArgs>;
    company?: boolean | user$companyArgs<ExtArgs>;
    performance_review_performance_review_reviewer_idTouser?:
      | boolean
      | user$performance_review_performance_review_reviewer_idTouserArgs<ExtArgs>;
    performance_review_performance_review_user_idTouser?:
      | boolean
      | user$performance_review_performance_review_user_idTouserArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      application: Prisma.$applicationPayload<ExtArgs>[];
      attendance: Prisma.$attendancePayload<ExtArgs>[];
      company: Prisma.$companyPayload<ExtArgs>[];
      performance_review_performance_review_reviewer_idTouser: Prisma.$performance_reviewPayload<ExtArgs>[];
      performance_review_performance_review_user_idTouser: Prisma.$performance_reviewPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        firstName: string | null;
        lastName: string | null;
        roq_user_id: string;
        tenant_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    application<T extends user$applicationArgs<ExtArgs> = {}>(
      args?: Subset<T, user$applicationArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$applicationPayload<ExtArgs>, T, 'findMany'> | Null>;

    attendance<T extends user$attendanceArgs<ExtArgs> = {}>(
      args?: Subset<T, user$attendanceArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, 'findMany'> | Null>;

    company<T extends user$companyArgs<ExtArgs> = {}>(
      args?: Subset<T, user$companyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findMany'> | Null>;

    performance_review_performance_review_reviewer_idTouser<
      T extends user$performance_review_performance_review_reviewer_idTouserArgs<ExtArgs> = {},
    >(
      args?: Subset<T, user$performance_review_performance_review_reviewer_idTouserArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$performance_reviewPayload<ExtArgs>, T, 'findMany'> | Null>;

    performance_review_performance_review_user_idTouser<
      T extends user$performance_review_performance_review_user_idTouserArgs<ExtArgs> = {},
    >(
      args?: Subset<T, user$performance_review_performance_review_user_idTouserArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$performance_reviewPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly firstName: FieldRef<'user', 'String'>;
    readonly lastName: FieldRef<'user', 'String'>;
    readonly roq_user_id: FieldRef<'user', 'String'>;
    readonly tenant_id: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.application
   */
  export type user$applicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the application
     */
    select?: applicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: applicationInclude<ExtArgs> | null;
    where?: applicationWhereInput;
    orderBy?: applicationOrderByWithRelationInput | applicationOrderByWithRelationInput[];
    cursor?: applicationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[];
  };

  /**
   * user.attendance
   */
  export type user$attendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: attendanceInclude<ExtArgs> | null;
    where?: attendanceWhereInput;
    orderBy?: attendanceOrderByWithRelationInput | attendanceOrderByWithRelationInput[];
    cursor?: attendanceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[];
  };

  /**
   * user.company
   */
  export type user$companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    where?: companyWhereInput;
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    cursor?: companyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * user.performance_review_performance_review_reviewer_idTouser
   */
  export type user$performance_review_performance_review_reviewer_idTouserArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the performance_review
     */
    select?: performance_reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: performance_reviewInclude<ExtArgs> | null;
    where?: performance_reviewWhereInput;
    orderBy?: performance_reviewOrderByWithRelationInput | performance_reviewOrderByWithRelationInput[];
    cursor?: performance_reviewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Performance_reviewScalarFieldEnum | Performance_reviewScalarFieldEnum[];
  };

  /**
   * user.performance_review_performance_review_user_idTouser
   */
  export type user$performance_review_performance_review_user_idTouserArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the performance_review
     */
    select?: performance_reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: performance_reviewInclude<ExtArgs> | null;
    where?: performance_reviewWhereInput;
    orderBy?: performance_reviewOrderByWithRelationInput | performance_reviewOrderByWithRelationInput[];
    cursor?: performance_reviewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Performance_reviewScalarFieldEnum | Performance_reviewScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const ApplicationScalarFieldEnum: {
    id: 'id';
    job_id: 'job_id';
    user_id: 'user_id';
    application_date: 'application_date';
    status: 'status';
    resume: 'resume';
    cover_letter: 'cover_letter';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type ApplicationScalarFieldEnum = (typeof ApplicationScalarFieldEnum)[keyof typeof ApplicationScalarFieldEnum];

  export const AttendanceScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    check_in_time: 'check_in_time';
    check_out_time: 'check_out_time';
    date: 'date';
    status: 'status';
    notes: 'notes';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type AttendanceScalarFieldEnum = (typeof AttendanceScalarFieldEnum)[keyof typeof AttendanceScalarFieldEnum];

  export const CompanyScalarFieldEnum: {
    id: 'id';
    description: 'description';
    location: 'location';
    established_date: 'established_date';
    industry: 'industry';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
    user_id: 'user_id';
    tenant_id: 'tenant_id';
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum];

  export const JobScalarFieldEnum: {
    id: 'id';
    title: 'title';
    description: 'description';
    location: 'location';
    posting_date: 'posting_date';
    closing_date: 'closing_date';
    company_id: 'company_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type JobScalarFieldEnum = (typeof JobScalarFieldEnum)[keyof typeof JobScalarFieldEnum];

  export const Performance_reviewScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    review_date: 'review_date';
    reviewer_id: 'reviewer_id';
    rating: 'rating';
    comments: 'comments';
    next_review_date: 'next_review_date';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Performance_reviewScalarFieldEnum =
    (typeof Performance_reviewScalarFieldEnum)[keyof typeof Performance_reviewScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    firstName: 'firstName';
    lastName: 'lastName';
    roq_user_id: 'roq_user_id';
    tenant_id: 'tenant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type applicationWhereInput = {
    AND?: applicationWhereInput | applicationWhereInput[];
    OR?: applicationWhereInput[];
    NOT?: applicationWhereInput | applicationWhereInput[];
    id?: UuidFilter<'application'> | string;
    job_id?: UuidFilter<'application'> | string;
    user_id?: UuidFilter<'application'> | string;
    application_date?: DateTimeFilter<'application'> | Date | string;
    status?: StringFilter<'application'> | string;
    resume?: StringFilter<'application'> | string;
    cover_letter?: StringFilter<'application'> | string;
    created_at?: DateTimeFilter<'application'> | Date | string;
    updated_at?: DateTimeFilter<'application'> | Date | string;
    job?: XOR<JobRelationFilter, jobWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type applicationOrderByWithRelationInput = {
    id?: SortOrder;
    job_id?: SortOrder;
    user_id?: SortOrder;
    application_date?: SortOrder;
    status?: SortOrder;
    resume?: SortOrder;
    cover_letter?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    job?: jobOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type applicationWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: applicationWhereInput | applicationWhereInput[];
      OR?: applicationWhereInput[];
      NOT?: applicationWhereInput | applicationWhereInput[];
      job_id?: UuidFilter<'application'> | string;
      user_id?: UuidFilter<'application'> | string;
      application_date?: DateTimeFilter<'application'> | Date | string;
      status?: StringFilter<'application'> | string;
      resume?: StringFilter<'application'> | string;
      cover_letter?: StringFilter<'application'> | string;
      created_at?: DateTimeFilter<'application'> | Date | string;
      updated_at?: DateTimeFilter<'application'> | Date | string;
      job?: XOR<JobRelationFilter, jobWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type applicationOrderByWithAggregationInput = {
    id?: SortOrder;
    job_id?: SortOrder;
    user_id?: SortOrder;
    application_date?: SortOrder;
    status?: SortOrder;
    resume?: SortOrder;
    cover_letter?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: applicationCountOrderByAggregateInput;
    _max?: applicationMaxOrderByAggregateInput;
    _min?: applicationMinOrderByAggregateInput;
  };

  export type applicationScalarWhereWithAggregatesInput = {
    AND?: applicationScalarWhereWithAggregatesInput | applicationScalarWhereWithAggregatesInput[];
    OR?: applicationScalarWhereWithAggregatesInput[];
    NOT?: applicationScalarWhereWithAggregatesInput | applicationScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'application'> | string;
    job_id?: UuidWithAggregatesFilter<'application'> | string;
    user_id?: UuidWithAggregatesFilter<'application'> | string;
    application_date?: DateTimeWithAggregatesFilter<'application'> | Date | string;
    status?: StringWithAggregatesFilter<'application'> | string;
    resume?: StringWithAggregatesFilter<'application'> | string;
    cover_letter?: StringWithAggregatesFilter<'application'> | string;
    created_at?: DateTimeWithAggregatesFilter<'application'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'application'> | Date | string;
  };

  export type attendanceWhereInput = {
    AND?: attendanceWhereInput | attendanceWhereInput[];
    OR?: attendanceWhereInput[];
    NOT?: attendanceWhereInput | attendanceWhereInput[];
    id?: UuidFilter<'attendance'> | string;
    user_id?: UuidFilter<'attendance'> | string;
    check_in_time?: DateTimeFilter<'attendance'> | Date | string;
    check_out_time?: DateTimeFilter<'attendance'> | Date | string;
    date?: DateTimeFilter<'attendance'> | Date | string;
    status?: StringFilter<'attendance'> | string;
    notes?: StringNullableFilter<'attendance'> | string | null;
    created_at?: DateTimeFilter<'attendance'> | Date | string;
    updated_at?: DateTimeFilter<'attendance'> | Date | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type attendanceOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    check_in_time?: SortOrder;
    check_out_time?: SortOrder;
    date?: SortOrder;
    status?: SortOrder;
    notes?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByWithRelationInput;
  };

  export type attendanceWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: attendanceWhereInput | attendanceWhereInput[];
      OR?: attendanceWhereInput[];
      NOT?: attendanceWhereInput | attendanceWhereInput[];
      user_id?: UuidFilter<'attendance'> | string;
      check_in_time?: DateTimeFilter<'attendance'> | Date | string;
      check_out_time?: DateTimeFilter<'attendance'> | Date | string;
      date?: DateTimeFilter<'attendance'> | Date | string;
      status?: StringFilter<'attendance'> | string;
      notes?: StringNullableFilter<'attendance'> | string | null;
      created_at?: DateTimeFilter<'attendance'> | Date | string;
      updated_at?: DateTimeFilter<'attendance'> | Date | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type attendanceOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    check_in_time?: SortOrder;
    check_out_time?: SortOrder;
    date?: SortOrder;
    status?: SortOrder;
    notes?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: attendanceCountOrderByAggregateInput;
    _max?: attendanceMaxOrderByAggregateInput;
    _min?: attendanceMinOrderByAggregateInput;
  };

  export type attendanceScalarWhereWithAggregatesInput = {
    AND?: attendanceScalarWhereWithAggregatesInput | attendanceScalarWhereWithAggregatesInput[];
    OR?: attendanceScalarWhereWithAggregatesInput[];
    NOT?: attendanceScalarWhereWithAggregatesInput | attendanceScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'attendance'> | string;
    user_id?: UuidWithAggregatesFilter<'attendance'> | string;
    check_in_time?: DateTimeWithAggregatesFilter<'attendance'> | Date | string;
    check_out_time?: DateTimeWithAggregatesFilter<'attendance'> | Date | string;
    date?: DateTimeWithAggregatesFilter<'attendance'> | Date | string;
    status?: StringWithAggregatesFilter<'attendance'> | string;
    notes?: StringNullableWithAggregatesFilter<'attendance'> | string | null;
    created_at?: DateTimeWithAggregatesFilter<'attendance'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'attendance'> | Date | string;
  };

  export type companyWhereInput = {
    AND?: companyWhereInput | companyWhereInput[];
    OR?: companyWhereInput[];
    NOT?: companyWhereInput | companyWhereInput[];
    id?: UuidFilter<'company'> | string;
    description?: StringNullableFilter<'company'> | string | null;
    location?: StringNullableFilter<'company'> | string | null;
    established_date?: DateTimeNullableFilter<'company'> | Date | string | null;
    industry?: StringNullableFilter<'company'> | string | null;
    name?: StringFilter<'company'> | string;
    created_at?: DateTimeFilter<'company'> | Date | string;
    updated_at?: DateTimeFilter<'company'> | Date | string;
    user_id?: UuidFilter<'company'> | string;
    tenant_id?: StringFilter<'company'> | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
    job?: JobListRelationFilter;
  };

  export type companyOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    location?: SortOrderInput | SortOrder;
    established_date?: SortOrderInput | SortOrder;
    industry?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    user?: userOrderByWithRelationInput;
    job?: jobOrderByRelationAggregateInput;
  };

  export type companyWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: companyWhereInput | companyWhereInput[];
      OR?: companyWhereInput[];
      NOT?: companyWhereInput | companyWhereInput[];
      description?: StringNullableFilter<'company'> | string | null;
      location?: StringNullableFilter<'company'> | string | null;
      established_date?: DateTimeNullableFilter<'company'> | Date | string | null;
      industry?: StringNullableFilter<'company'> | string | null;
      name?: StringFilter<'company'> | string;
      created_at?: DateTimeFilter<'company'> | Date | string;
      updated_at?: DateTimeFilter<'company'> | Date | string;
      user_id?: UuidFilter<'company'> | string;
      tenant_id?: StringFilter<'company'> | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
      job?: JobListRelationFilter;
    },
    'id'
  >;

  export type companyOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    location?: SortOrderInput | SortOrder;
    established_date?: SortOrderInput | SortOrder;
    industry?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    _count?: companyCountOrderByAggregateInput;
    _max?: companyMaxOrderByAggregateInput;
    _min?: companyMinOrderByAggregateInput;
  };

  export type companyScalarWhereWithAggregatesInput = {
    AND?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    OR?: companyScalarWhereWithAggregatesInput[];
    NOT?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'company'> | string;
    description?: StringNullableWithAggregatesFilter<'company'> | string | null;
    location?: StringNullableWithAggregatesFilter<'company'> | string | null;
    established_date?: DateTimeNullableWithAggregatesFilter<'company'> | Date | string | null;
    industry?: StringNullableWithAggregatesFilter<'company'> | string | null;
    name?: StringWithAggregatesFilter<'company'> | string;
    created_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
    user_id?: UuidWithAggregatesFilter<'company'> | string;
    tenant_id?: StringWithAggregatesFilter<'company'> | string;
  };

  export type jobWhereInput = {
    AND?: jobWhereInput | jobWhereInput[];
    OR?: jobWhereInput[];
    NOT?: jobWhereInput | jobWhereInput[];
    id?: UuidFilter<'job'> | string;
    title?: StringFilter<'job'> | string;
    description?: StringFilter<'job'> | string;
    location?: StringFilter<'job'> | string;
    posting_date?: DateTimeFilter<'job'> | Date | string;
    closing_date?: DateTimeFilter<'job'> | Date | string;
    company_id?: UuidFilter<'job'> | string;
    created_at?: DateTimeFilter<'job'> | Date | string;
    updated_at?: DateTimeFilter<'job'> | Date | string;
    application?: ApplicationListRelationFilter;
    company?: XOR<CompanyRelationFilter, companyWhereInput>;
  };

  export type jobOrderByWithRelationInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    location?: SortOrder;
    posting_date?: SortOrder;
    closing_date?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    application?: applicationOrderByRelationAggregateInput;
    company?: companyOrderByWithRelationInput;
  };

  export type jobWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: jobWhereInput | jobWhereInput[];
      OR?: jobWhereInput[];
      NOT?: jobWhereInput | jobWhereInput[];
      title?: StringFilter<'job'> | string;
      description?: StringFilter<'job'> | string;
      location?: StringFilter<'job'> | string;
      posting_date?: DateTimeFilter<'job'> | Date | string;
      closing_date?: DateTimeFilter<'job'> | Date | string;
      company_id?: UuidFilter<'job'> | string;
      created_at?: DateTimeFilter<'job'> | Date | string;
      updated_at?: DateTimeFilter<'job'> | Date | string;
      application?: ApplicationListRelationFilter;
      company?: XOR<CompanyRelationFilter, companyWhereInput>;
    },
    'id'
  >;

  export type jobOrderByWithAggregationInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    location?: SortOrder;
    posting_date?: SortOrder;
    closing_date?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: jobCountOrderByAggregateInput;
    _max?: jobMaxOrderByAggregateInput;
    _min?: jobMinOrderByAggregateInput;
  };

  export type jobScalarWhereWithAggregatesInput = {
    AND?: jobScalarWhereWithAggregatesInput | jobScalarWhereWithAggregatesInput[];
    OR?: jobScalarWhereWithAggregatesInput[];
    NOT?: jobScalarWhereWithAggregatesInput | jobScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'job'> | string;
    title?: StringWithAggregatesFilter<'job'> | string;
    description?: StringWithAggregatesFilter<'job'> | string;
    location?: StringWithAggregatesFilter<'job'> | string;
    posting_date?: DateTimeWithAggregatesFilter<'job'> | Date | string;
    closing_date?: DateTimeWithAggregatesFilter<'job'> | Date | string;
    company_id?: UuidWithAggregatesFilter<'job'> | string;
    created_at?: DateTimeWithAggregatesFilter<'job'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'job'> | Date | string;
  };

  export type performance_reviewWhereInput = {
    AND?: performance_reviewWhereInput | performance_reviewWhereInput[];
    OR?: performance_reviewWhereInput[];
    NOT?: performance_reviewWhereInput | performance_reviewWhereInput[];
    id?: UuidFilter<'performance_review'> | string;
    user_id?: UuidFilter<'performance_review'> | string;
    review_date?: DateTimeFilter<'performance_review'> | Date | string;
    reviewer_id?: UuidFilter<'performance_review'> | string;
    rating?: IntFilter<'performance_review'> | number;
    comments?: StringFilter<'performance_review'> | string;
    next_review_date?: DateTimeFilter<'performance_review'> | Date | string;
    created_at?: DateTimeFilter<'performance_review'> | Date | string;
    updated_at?: DateTimeFilter<'performance_review'> | Date | string;
    user_performance_review_reviewer_idTouser?: XOR<UserRelationFilter, userWhereInput>;
    user_performance_review_user_idTouser?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type performance_reviewOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    review_date?: SortOrder;
    reviewer_id?: SortOrder;
    rating?: SortOrder;
    comments?: SortOrder;
    next_review_date?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_performance_review_reviewer_idTouser?: userOrderByWithRelationInput;
    user_performance_review_user_idTouser?: userOrderByWithRelationInput;
  };

  export type performance_reviewWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: performance_reviewWhereInput | performance_reviewWhereInput[];
      OR?: performance_reviewWhereInput[];
      NOT?: performance_reviewWhereInput | performance_reviewWhereInput[];
      user_id?: UuidFilter<'performance_review'> | string;
      review_date?: DateTimeFilter<'performance_review'> | Date | string;
      reviewer_id?: UuidFilter<'performance_review'> | string;
      rating?: IntFilter<'performance_review'> | number;
      comments?: StringFilter<'performance_review'> | string;
      next_review_date?: DateTimeFilter<'performance_review'> | Date | string;
      created_at?: DateTimeFilter<'performance_review'> | Date | string;
      updated_at?: DateTimeFilter<'performance_review'> | Date | string;
      user_performance_review_reviewer_idTouser?: XOR<UserRelationFilter, userWhereInput>;
      user_performance_review_user_idTouser?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type performance_reviewOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    review_date?: SortOrder;
    reviewer_id?: SortOrder;
    rating?: SortOrder;
    comments?: SortOrder;
    next_review_date?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: performance_reviewCountOrderByAggregateInput;
    _avg?: performance_reviewAvgOrderByAggregateInput;
    _max?: performance_reviewMaxOrderByAggregateInput;
    _min?: performance_reviewMinOrderByAggregateInput;
    _sum?: performance_reviewSumOrderByAggregateInput;
  };

  export type performance_reviewScalarWhereWithAggregatesInput = {
    AND?: performance_reviewScalarWhereWithAggregatesInput | performance_reviewScalarWhereWithAggregatesInput[];
    OR?: performance_reviewScalarWhereWithAggregatesInput[];
    NOT?: performance_reviewScalarWhereWithAggregatesInput | performance_reviewScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'performance_review'> | string;
    user_id?: UuidWithAggregatesFilter<'performance_review'> | string;
    review_date?: DateTimeWithAggregatesFilter<'performance_review'> | Date | string;
    reviewer_id?: UuidWithAggregatesFilter<'performance_review'> | string;
    rating?: IntWithAggregatesFilter<'performance_review'> | number;
    comments?: StringWithAggregatesFilter<'performance_review'> | string;
    next_review_date?: DateTimeWithAggregatesFilter<'performance_review'> | Date | string;
    created_at?: DateTimeWithAggregatesFilter<'performance_review'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'performance_review'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    firstName?: StringNullableFilter<'user'> | string | null;
    lastName?: StringNullableFilter<'user'> | string | null;
    roq_user_id?: StringFilter<'user'> | string;
    tenant_id?: StringFilter<'user'> | string;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    application?: ApplicationListRelationFilter;
    attendance?: AttendanceListRelationFilter;
    company?: CompanyListRelationFilter;
    performance_review_performance_review_reviewer_idTouser?: Performance_reviewListRelationFilter;
    performance_review_performance_review_user_idTouser?: Performance_reviewListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    application?: applicationOrderByRelationAggregateInput;
    attendance?: attendanceOrderByRelationAggregateInput;
    company?: companyOrderByRelationAggregateInput;
    performance_review_performance_review_reviewer_idTouser?: performance_reviewOrderByRelationAggregateInput;
    performance_review_performance_review_user_idTouser?: performance_reviewOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      firstName?: StringNullableFilter<'user'> | string | null;
      lastName?: StringNullableFilter<'user'> | string | null;
      roq_user_id?: StringFilter<'user'> | string;
      tenant_id?: StringFilter<'user'> | string;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      application?: ApplicationListRelationFilter;
      attendance?: AttendanceListRelationFilter;
      company?: CompanyListRelationFilter;
      performance_review_performance_review_reviewer_idTouser?: Performance_reviewListRelationFilter;
      performance_review_performance_review_user_idTouser?: Performance_reviewListRelationFilter;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    firstName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    lastName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    roq_user_id?: StringWithAggregatesFilter<'user'> | string;
    tenant_id?: StringWithAggregatesFilter<'user'> | string;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type applicationCreateInput = {
    id?: string;
    application_date: Date | string;
    status: string;
    resume: string;
    cover_letter: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    job: jobCreateNestedOneWithoutApplicationInput;
    user: userCreateNestedOneWithoutApplicationInput;
  };

  export type applicationUncheckedCreateInput = {
    id?: string;
    job_id: string;
    user_id: string;
    application_date: Date | string;
    status: string;
    resume: string;
    cover_letter: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type applicationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    application_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: StringFieldUpdateOperationsInput | string;
    resume?: StringFieldUpdateOperationsInput | string;
    cover_letter?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    job?: jobUpdateOneRequiredWithoutApplicationNestedInput;
    user?: userUpdateOneRequiredWithoutApplicationNestedInput;
  };

  export type applicationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    job_id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    application_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: StringFieldUpdateOperationsInput | string;
    resume?: StringFieldUpdateOperationsInput | string;
    cover_letter?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type applicationCreateManyInput = {
    id?: string;
    job_id: string;
    user_id: string;
    application_date: Date | string;
    status: string;
    resume: string;
    cover_letter: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type applicationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    application_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: StringFieldUpdateOperationsInput | string;
    resume?: StringFieldUpdateOperationsInput | string;
    cover_letter?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type applicationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    job_id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    application_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: StringFieldUpdateOperationsInput | string;
    resume?: StringFieldUpdateOperationsInput | string;
    cover_letter?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type attendanceCreateInput = {
    id?: string;
    check_in_time: Date | string;
    check_out_time: Date | string;
    date: Date | string;
    status: string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutAttendanceInput;
  };

  export type attendanceUncheckedCreateInput = {
    id?: string;
    user_id: string;
    check_in_time: Date | string;
    check_out_time: Date | string;
    date: Date | string;
    status: string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type attendanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    check_in_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    check_out_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: StringFieldUpdateOperationsInput | string;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutAttendanceNestedInput;
  };

  export type attendanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    check_in_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    check_out_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: StringFieldUpdateOperationsInput | string;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type attendanceCreateManyInput = {
    id?: string;
    user_id: string;
    check_in_time: Date | string;
    check_out_time: Date | string;
    date: Date | string;
    status: string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type attendanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    check_in_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    check_out_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: StringFieldUpdateOperationsInput | string;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type attendanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    check_in_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    check_out_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: StringFieldUpdateOperationsInput | string;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type companyCreateInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    established_date?: Date | string | null;
    industry?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutCompanyInput;
    job?: jobCreateNestedManyWithoutCompanyInput;
  };

  export type companyUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    established_date?: Date | string | null;
    industry?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    job?: jobUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type companyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    established_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutCompanyNestedInput;
    job?: jobUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    established_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    job?: jobUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type companyCreateManyInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    established_date?: Date | string | null;
    industry?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type companyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    established_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type companyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    established_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type jobCreateInput = {
    id?: string;
    title: string;
    description: string;
    location: string;
    posting_date: Date | string;
    closing_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    application?: applicationCreateNestedManyWithoutJobInput;
    company: companyCreateNestedOneWithoutJobInput;
  };

  export type jobUncheckedCreateInput = {
    id?: string;
    title: string;
    description: string;
    location: string;
    posting_date: Date | string;
    closing_date: Date | string;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    application?: applicationUncheckedCreateNestedManyWithoutJobInput;
  };

  export type jobUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    posting_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    closing_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    application?: applicationUpdateManyWithoutJobNestedInput;
    company?: companyUpdateOneRequiredWithoutJobNestedInput;
  };

  export type jobUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    posting_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    closing_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    application?: applicationUncheckedUpdateManyWithoutJobNestedInput;
  };

  export type jobCreateManyInput = {
    id?: string;
    title: string;
    description: string;
    location: string;
    posting_date: Date | string;
    closing_date: Date | string;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type jobUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    posting_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    closing_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type jobUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    posting_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    closing_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type performance_reviewCreateInput = {
    id?: string;
    review_date: Date | string;
    rating: number;
    comments: string;
    next_review_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_performance_review_reviewer_idTouser: userCreateNestedOneWithoutPerformance_review_performance_review_reviewer_idTouserInput;
    user_performance_review_user_idTouser: userCreateNestedOneWithoutPerformance_review_performance_review_user_idTouserInput;
  };

  export type performance_reviewUncheckedCreateInput = {
    id?: string;
    user_id: string;
    review_date: Date | string;
    reviewer_id: string;
    rating: number;
    comments: string;
    next_review_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type performance_reviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    review_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    rating?: IntFieldUpdateOperationsInput | number;
    comments?: StringFieldUpdateOperationsInput | string;
    next_review_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_performance_review_reviewer_idTouser?: userUpdateOneRequiredWithoutPerformance_review_performance_review_reviewer_idTouserNestedInput;
    user_performance_review_user_idTouser?: userUpdateOneRequiredWithoutPerformance_review_performance_review_user_idTouserNestedInput;
  };

  export type performance_reviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    review_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    reviewer_id?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    comments?: StringFieldUpdateOperationsInput | string;
    next_review_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type performance_reviewCreateManyInput = {
    id?: string;
    user_id: string;
    review_date: Date | string;
    reviewer_id: string;
    rating: number;
    comments: string;
    next_review_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type performance_reviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    review_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    rating?: IntFieldUpdateOperationsInput | number;
    comments?: StringFieldUpdateOperationsInput | string;
    next_review_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type performance_reviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    review_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    reviewer_id?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    comments?: StringFieldUpdateOperationsInput | string;
    next_review_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    application?: applicationCreateNestedManyWithoutUserInput;
    attendance?: attendanceCreateNestedManyWithoutUserInput;
    company?: companyCreateNestedManyWithoutUserInput;
    performance_review_performance_review_reviewer_idTouser?: performance_reviewCreateNestedManyWithoutUser_performance_review_reviewer_idTouserInput;
    performance_review_performance_review_user_idTouser?: performance_reviewCreateNestedManyWithoutUser_performance_review_user_idTouserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    application?: applicationUncheckedCreateNestedManyWithoutUserInput;
    attendance?: attendanceUncheckedCreateNestedManyWithoutUserInput;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
    performance_review_performance_review_reviewer_idTouser?: performance_reviewUncheckedCreateNestedManyWithoutUser_performance_review_reviewer_idTouserInput;
    performance_review_performance_review_user_idTouser?: performance_reviewUncheckedCreateNestedManyWithoutUser_performance_review_user_idTouserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    application?: applicationUpdateManyWithoutUserNestedInput;
    attendance?: attendanceUpdateManyWithoutUserNestedInput;
    company?: companyUpdateManyWithoutUserNestedInput;
    performance_review_performance_review_reviewer_idTouser?: performance_reviewUpdateManyWithoutUser_performance_review_reviewer_idTouserNestedInput;
    performance_review_performance_review_user_idTouser?: performance_reviewUpdateManyWithoutUser_performance_review_user_idTouserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    application?: applicationUncheckedUpdateManyWithoutUserNestedInput;
    attendance?: attendanceUncheckedUpdateManyWithoutUserNestedInput;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
    performance_review_performance_review_reviewer_idTouser?: performance_reviewUncheckedUpdateManyWithoutUser_performance_review_reviewer_idTouserNestedInput;
    performance_review_performance_review_user_idTouser?: performance_reviewUncheckedUpdateManyWithoutUser_performance_review_user_idTouserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type JobRelationFilter = {
    is?: jobWhereInput;
    isNot?: jobWhereInput;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type applicationCountOrderByAggregateInput = {
    id?: SortOrder;
    job_id?: SortOrder;
    user_id?: SortOrder;
    application_date?: SortOrder;
    status?: SortOrder;
    resume?: SortOrder;
    cover_letter?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type applicationMaxOrderByAggregateInput = {
    id?: SortOrder;
    job_id?: SortOrder;
    user_id?: SortOrder;
    application_date?: SortOrder;
    status?: SortOrder;
    resume?: SortOrder;
    cover_letter?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type applicationMinOrderByAggregateInput = {
    id?: SortOrder;
    job_id?: SortOrder;
    user_id?: SortOrder;
    application_date?: SortOrder;
    status?: SortOrder;
    resume?: SortOrder;
    cover_letter?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type attendanceCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    check_in_time?: SortOrder;
    check_out_time?: SortOrder;
    date?: SortOrder;
    status?: SortOrder;
    notes?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type attendanceMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    check_in_time?: SortOrder;
    check_out_time?: SortOrder;
    date?: SortOrder;
    status?: SortOrder;
    notes?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type attendanceMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    check_in_time?: SortOrder;
    check_out_time?: SortOrder;
    date?: SortOrder;
    status?: SortOrder;
    notes?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type JobListRelationFilter = {
    every?: jobWhereInput;
    some?: jobWhereInput;
    none?: jobWhereInput;
  };

  export type jobOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type companyCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    location?: SortOrder;
    established_date?: SortOrder;
    industry?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type companyMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    location?: SortOrder;
    established_date?: SortOrder;
    industry?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type companyMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    location?: SortOrder;
    established_date?: SortOrder;
    industry?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type ApplicationListRelationFilter = {
    every?: applicationWhereInput;
    some?: applicationWhereInput;
    none?: applicationWhereInput;
  };

  export type CompanyRelationFilter = {
    is?: companyWhereInput;
    isNot?: companyWhereInput;
  };

  export type applicationOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type jobCountOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    location?: SortOrder;
    posting_date?: SortOrder;
    closing_date?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type jobMaxOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    location?: SortOrder;
    posting_date?: SortOrder;
    closing_date?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type jobMinOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    location?: SortOrder;
    posting_date?: SortOrder;
    closing_date?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type performance_reviewCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    review_date?: SortOrder;
    reviewer_id?: SortOrder;
    rating?: SortOrder;
    comments?: SortOrder;
    next_review_date?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type performance_reviewAvgOrderByAggregateInput = {
    rating?: SortOrder;
  };

  export type performance_reviewMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    review_date?: SortOrder;
    reviewer_id?: SortOrder;
    rating?: SortOrder;
    comments?: SortOrder;
    next_review_date?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type performance_reviewMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    review_date?: SortOrder;
    reviewer_id?: SortOrder;
    rating?: SortOrder;
    comments?: SortOrder;
    next_review_date?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type performance_reviewSumOrderByAggregateInput = {
    rating?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type AttendanceListRelationFilter = {
    every?: attendanceWhereInput;
    some?: attendanceWhereInput;
    none?: attendanceWhereInput;
  };

  export type CompanyListRelationFilter = {
    every?: companyWhereInput;
    some?: companyWhereInput;
    none?: companyWhereInput;
  };

  export type Performance_reviewListRelationFilter = {
    every?: performance_reviewWhereInput;
    some?: performance_reviewWhereInput;
    none?: performance_reviewWhereInput;
  };

  export type attendanceOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type companyOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type performance_reviewOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type jobCreateNestedOneWithoutApplicationInput = {
    create?: XOR<jobCreateWithoutApplicationInput, jobUncheckedCreateWithoutApplicationInput>;
    connectOrCreate?: jobCreateOrConnectWithoutApplicationInput;
    connect?: jobWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutApplicationInput = {
    create?: XOR<userCreateWithoutApplicationInput, userUncheckedCreateWithoutApplicationInput>;
    connectOrCreate?: userCreateOrConnectWithoutApplicationInput;
    connect?: userWhereUniqueInput;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type jobUpdateOneRequiredWithoutApplicationNestedInput = {
    create?: XOR<jobCreateWithoutApplicationInput, jobUncheckedCreateWithoutApplicationInput>;
    connectOrCreate?: jobCreateOrConnectWithoutApplicationInput;
    upsert?: jobUpsertWithoutApplicationInput;
    connect?: jobWhereUniqueInput;
    update?: XOR<
      XOR<jobUpdateToOneWithWhereWithoutApplicationInput, jobUpdateWithoutApplicationInput>,
      jobUncheckedUpdateWithoutApplicationInput
    >;
  };

  export type userUpdateOneRequiredWithoutApplicationNestedInput = {
    create?: XOR<userCreateWithoutApplicationInput, userUncheckedCreateWithoutApplicationInput>;
    connectOrCreate?: userCreateOrConnectWithoutApplicationInput;
    upsert?: userUpsertWithoutApplicationInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutApplicationInput, userUpdateWithoutApplicationInput>,
      userUncheckedUpdateWithoutApplicationInput
    >;
  };

  export type userCreateNestedOneWithoutAttendanceInput = {
    create?: XOR<userCreateWithoutAttendanceInput, userUncheckedCreateWithoutAttendanceInput>;
    connectOrCreate?: userCreateOrConnectWithoutAttendanceInput;
    connect?: userWhereUniqueInput;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type userUpdateOneRequiredWithoutAttendanceNestedInput = {
    create?: XOR<userCreateWithoutAttendanceInput, userUncheckedCreateWithoutAttendanceInput>;
    connectOrCreate?: userCreateOrConnectWithoutAttendanceInput;
    upsert?: userUpsertWithoutAttendanceInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutAttendanceInput, userUpdateWithoutAttendanceInput>,
      userUncheckedUpdateWithoutAttendanceInput
    >;
  };

  export type userCreateNestedOneWithoutCompanyInput = {
    create?: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
    connectOrCreate?: userCreateOrConnectWithoutCompanyInput;
    connect?: userWhereUniqueInput;
  };

  export type jobCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<jobCreateWithoutCompanyInput, jobUncheckedCreateWithoutCompanyInput>
      | jobCreateWithoutCompanyInput[]
      | jobUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: jobCreateOrConnectWithoutCompanyInput | jobCreateOrConnectWithoutCompanyInput[];
    createMany?: jobCreateManyCompanyInputEnvelope;
    connect?: jobWhereUniqueInput | jobWhereUniqueInput[];
  };

  export type jobUncheckedCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<jobCreateWithoutCompanyInput, jobUncheckedCreateWithoutCompanyInput>
      | jobCreateWithoutCompanyInput[]
      | jobUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: jobCreateOrConnectWithoutCompanyInput | jobCreateOrConnectWithoutCompanyInput[];
    createMany?: jobCreateManyCompanyInputEnvelope;
    connect?: jobWhereUniqueInput | jobWhereUniqueInput[];
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type userUpdateOneRequiredWithoutCompanyNestedInput = {
    create?: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
    connectOrCreate?: userCreateOrConnectWithoutCompanyInput;
    upsert?: userUpsertWithoutCompanyInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutCompanyInput, userUpdateWithoutCompanyInput>,
      userUncheckedUpdateWithoutCompanyInput
    >;
  };

  export type jobUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<jobCreateWithoutCompanyInput, jobUncheckedCreateWithoutCompanyInput>
      | jobCreateWithoutCompanyInput[]
      | jobUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: jobCreateOrConnectWithoutCompanyInput | jobCreateOrConnectWithoutCompanyInput[];
    upsert?: jobUpsertWithWhereUniqueWithoutCompanyInput | jobUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: jobCreateManyCompanyInputEnvelope;
    set?: jobWhereUniqueInput | jobWhereUniqueInput[];
    disconnect?: jobWhereUniqueInput | jobWhereUniqueInput[];
    delete?: jobWhereUniqueInput | jobWhereUniqueInput[];
    connect?: jobWhereUniqueInput | jobWhereUniqueInput[];
    update?: jobUpdateWithWhereUniqueWithoutCompanyInput | jobUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: jobUpdateManyWithWhereWithoutCompanyInput | jobUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: jobScalarWhereInput | jobScalarWhereInput[];
  };

  export type jobUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<jobCreateWithoutCompanyInput, jobUncheckedCreateWithoutCompanyInput>
      | jobCreateWithoutCompanyInput[]
      | jobUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: jobCreateOrConnectWithoutCompanyInput | jobCreateOrConnectWithoutCompanyInput[];
    upsert?: jobUpsertWithWhereUniqueWithoutCompanyInput | jobUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: jobCreateManyCompanyInputEnvelope;
    set?: jobWhereUniqueInput | jobWhereUniqueInput[];
    disconnect?: jobWhereUniqueInput | jobWhereUniqueInput[];
    delete?: jobWhereUniqueInput | jobWhereUniqueInput[];
    connect?: jobWhereUniqueInput | jobWhereUniqueInput[];
    update?: jobUpdateWithWhereUniqueWithoutCompanyInput | jobUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: jobUpdateManyWithWhereWithoutCompanyInput | jobUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: jobScalarWhereInput | jobScalarWhereInput[];
  };

  export type applicationCreateNestedManyWithoutJobInput = {
    create?:
      | XOR<applicationCreateWithoutJobInput, applicationUncheckedCreateWithoutJobInput>
      | applicationCreateWithoutJobInput[]
      | applicationUncheckedCreateWithoutJobInput[];
    connectOrCreate?: applicationCreateOrConnectWithoutJobInput | applicationCreateOrConnectWithoutJobInput[];
    createMany?: applicationCreateManyJobInputEnvelope;
    connect?: applicationWhereUniqueInput | applicationWhereUniqueInput[];
  };

  export type companyCreateNestedOneWithoutJobInput = {
    create?: XOR<companyCreateWithoutJobInput, companyUncheckedCreateWithoutJobInput>;
    connectOrCreate?: companyCreateOrConnectWithoutJobInput;
    connect?: companyWhereUniqueInput;
  };

  export type applicationUncheckedCreateNestedManyWithoutJobInput = {
    create?:
      | XOR<applicationCreateWithoutJobInput, applicationUncheckedCreateWithoutJobInput>
      | applicationCreateWithoutJobInput[]
      | applicationUncheckedCreateWithoutJobInput[];
    connectOrCreate?: applicationCreateOrConnectWithoutJobInput | applicationCreateOrConnectWithoutJobInput[];
    createMany?: applicationCreateManyJobInputEnvelope;
    connect?: applicationWhereUniqueInput | applicationWhereUniqueInput[];
  };

  export type applicationUpdateManyWithoutJobNestedInput = {
    create?:
      | XOR<applicationCreateWithoutJobInput, applicationUncheckedCreateWithoutJobInput>
      | applicationCreateWithoutJobInput[]
      | applicationUncheckedCreateWithoutJobInput[];
    connectOrCreate?: applicationCreateOrConnectWithoutJobInput | applicationCreateOrConnectWithoutJobInput[];
    upsert?: applicationUpsertWithWhereUniqueWithoutJobInput | applicationUpsertWithWhereUniqueWithoutJobInput[];
    createMany?: applicationCreateManyJobInputEnvelope;
    set?: applicationWhereUniqueInput | applicationWhereUniqueInput[];
    disconnect?: applicationWhereUniqueInput | applicationWhereUniqueInput[];
    delete?: applicationWhereUniqueInput | applicationWhereUniqueInput[];
    connect?: applicationWhereUniqueInput | applicationWhereUniqueInput[];
    update?: applicationUpdateWithWhereUniqueWithoutJobInput | applicationUpdateWithWhereUniqueWithoutJobInput[];
    updateMany?: applicationUpdateManyWithWhereWithoutJobInput | applicationUpdateManyWithWhereWithoutJobInput[];
    deleteMany?: applicationScalarWhereInput | applicationScalarWhereInput[];
  };

  export type companyUpdateOneRequiredWithoutJobNestedInput = {
    create?: XOR<companyCreateWithoutJobInput, companyUncheckedCreateWithoutJobInput>;
    connectOrCreate?: companyCreateOrConnectWithoutJobInput;
    upsert?: companyUpsertWithoutJobInput;
    connect?: companyWhereUniqueInput;
    update?: XOR<
      XOR<companyUpdateToOneWithWhereWithoutJobInput, companyUpdateWithoutJobInput>,
      companyUncheckedUpdateWithoutJobInput
    >;
  };

  export type applicationUncheckedUpdateManyWithoutJobNestedInput = {
    create?:
      | XOR<applicationCreateWithoutJobInput, applicationUncheckedCreateWithoutJobInput>
      | applicationCreateWithoutJobInput[]
      | applicationUncheckedCreateWithoutJobInput[];
    connectOrCreate?: applicationCreateOrConnectWithoutJobInput | applicationCreateOrConnectWithoutJobInput[];
    upsert?: applicationUpsertWithWhereUniqueWithoutJobInput | applicationUpsertWithWhereUniqueWithoutJobInput[];
    createMany?: applicationCreateManyJobInputEnvelope;
    set?: applicationWhereUniqueInput | applicationWhereUniqueInput[];
    disconnect?: applicationWhereUniqueInput | applicationWhereUniqueInput[];
    delete?: applicationWhereUniqueInput | applicationWhereUniqueInput[];
    connect?: applicationWhereUniqueInput | applicationWhereUniqueInput[];
    update?: applicationUpdateWithWhereUniqueWithoutJobInput | applicationUpdateWithWhereUniqueWithoutJobInput[];
    updateMany?: applicationUpdateManyWithWhereWithoutJobInput | applicationUpdateManyWithWhereWithoutJobInput[];
    deleteMany?: applicationScalarWhereInput | applicationScalarWhereInput[];
  };

  export type userCreateNestedOneWithoutPerformance_review_performance_review_reviewer_idTouserInput = {
    create?: XOR<
      userCreateWithoutPerformance_review_performance_review_reviewer_idTouserInput,
      userUncheckedCreateWithoutPerformance_review_performance_review_reviewer_idTouserInput
    >;
    connectOrCreate?: userCreateOrConnectWithoutPerformance_review_performance_review_reviewer_idTouserInput;
    connect?: userWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutPerformance_review_performance_review_user_idTouserInput = {
    create?: XOR<
      userCreateWithoutPerformance_review_performance_review_user_idTouserInput,
      userUncheckedCreateWithoutPerformance_review_performance_review_user_idTouserInput
    >;
    connectOrCreate?: userCreateOrConnectWithoutPerformance_review_performance_review_user_idTouserInput;
    connect?: userWhereUniqueInput;
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type userUpdateOneRequiredWithoutPerformance_review_performance_review_reviewer_idTouserNestedInput = {
    create?: XOR<
      userCreateWithoutPerformance_review_performance_review_reviewer_idTouserInput,
      userUncheckedCreateWithoutPerformance_review_performance_review_reviewer_idTouserInput
    >;
    connectOrCreate?: userCreateOrConnectWithoutPerformance_review_performance_review_reviewer_idTouserInput;
    upsert?: userUpsertWithoutPerformance_review_performance_review_reviewer_idTouserInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<
        userUpdateToOneWithWhereWithoutPerformance_review_performance_review_reviewer_idTouserInput,
        userUpdateWithoutPerformance_review_performance_review_reviewer_idTouserInput
      >,
      userUncheckedUpdateWithoutPerformance_review_performance_review_reviewer_idTouserInput
    >;
  };

  export type userUpdateOneRequiredWithoutPerformance_review_performance_review_user_idTouserNestedInput = {
    create?: XOR<
      userCreateWithoutPerformance_review_performance_review_user_idTouserInput,
      userUncheckedCreateWithoutPerformance_review_performance_review_user_idTouserInput
    >;
    connectOrCreate?: userCreateOrConnectWithoutPerformance_review_performance_review_user_idTouserInput;
    upsert?: userUpsertWithoutPerformance_review_performance_review_user_idTouserInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<
        userUpdateToOneWithWhereWithoutPerformance_review_performance_review_user_idTouserInput,
        userUpdateWithoutPerformance_review_performance_review_user_idTouserInput
      >,
      userUncheckedUpdateWithoutPerformance_review_performance_review_user_idTouserInput
    >;
  };

  export type applicationCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<applicationCreateWithoutUserInput, applicationUncheckedCreateWithoutUserInput>
      | applicationCreateWithoutUserInput[]
      | applicationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: applicationCreateOrConnectWithoutUserInput | applicationCreateOrConnectWithoutUserInput[];
    createMany?: applicationCreateManyUserInputEnvelope;
    connect?: applicationWhereUniqueInput | applicationWhereUniqueInput[];
  };

  export type attendanceCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<attendanceCreateWithoutUserInput, attendanceUncheckedCreateWithoutUserInput>
      | attendanceCreateWithoutUserInput[]
      | attendanceUncheckedCreateWithoutUserInput[];
    connectOrCreate?: attendanceCreateOrConnectWithoutUserInput | attendanceCreateOrConnectWithoutUserInput[];
    createMany?: attendanceCreateManyUserInputEnvelope;
    connect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[];
  };

  export type companyCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
  };

  export type performance_reviewCreateNestedManyWithoutUser_performance_review_reviewer_idTouserInput = {
    create?:
      | XOR<
          performance_reviewCreateWithoutUser_performance_review_reviewer_idTouserInput,
          performance_reviewUncheckedCreateWithoutUser_performance_review_reviewer_idTouserInput
        >
      | performance_reviewCreateWithoutUser_performance_review_reviewer_idTouserInput[]
      | performance_reviewUncheckedCreateWithoutUser_performance_review_reviewer_idTouserInput[];
    connectOrCreate?:
      | performance_reviewCreateOrConnectWithoutUser_performance_review_reviewer_idTouserInput
      | performance_reviewCreateOrConnectWithoutUser_performance_review_reviewer_idTouserInput[];
    createMany?: performance_reviewCreateManyUser_performance_review_reviewer_idTouserInputEnvelope;
    connect?: performance_reviewWhereUniqueInput | performance_reviewWhereUniqueInput[];
  };

  export type performance_reviewCreateNestedManyWithoutUser_performance_review_user_idTouserInput = {
    create?:
      | XOR<
          performance_reviewCreateWithoutUser_performance_review_user_idTouserInput,
          performance_reviewUncheckedCreateWithoutUser_performance_review_user_idTouserInput
        >
      | performance_reviewCreateWithoutUser_performance_review_user_idTouserInput[]
      | performance_reviewUncheckedCreateWithoutUser_performance_review_user_idTouserInput[];
    connectOrCreate?:
      | performance_reviewCreateOrConnectWithoutUser_performance_review_user_idTouserInput
      | performance_reviewCreateOrConnectWithoutUser_performance_review_user_idTouserInput[];
    createMany?: performance_reviewCreateManyUser_performance_review_user_idTouserInputEnvelope;
    connect?: performance_reviewWhereUniqueInput | performance_reviewWhereUniqueInput[];
  };

  export type applicationUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<applicationCreateWithoutUserInput, applicationUncheckedCreateWithoutUserInput>
      | applicationCreateWithoutUserInput[]
      | applicationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: applicationCreateOrConnectWithoutUserInput | applicationCreateOrConnectWithoutUserInput[];
    createMany?: applicationCreateManyUserInputEnvelope;
    connect?: applicationWhereUniqueInput | applicationWhereUniqueInput[];
  };

  export type attendanceUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<attendanceCreateWithoutUserInput, attendanceUncheckedCreateWithoutUserInput>
      | attendanceCreateWithoutUserInput[]
      | attendanceUncheckedCreateWithoutUserInput[];
    connectOrCreate?: attendanceCreateOrConnectWithoutUserInput | attendanceCreateOrConnectWithoutUserInput[];
    createMany?: attendanceCreateManyUserInputEnvelope;
    connect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[];
  };

  export type companyUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
  };

  export type performance_reviewUncheckedCreateNestedManyWithoutUser_performance_review_reviewer_idTouserInput = {
    create?:
      | XOR<
          performance_reviewCreateWithoutUser_performance_review_reviewer_idTouserInput,
          performance_reviewUncheckedCreateWithoutUser_performance_review_reviewer_idTouserInput
        >
      | performance_reviewCreateWithoutUser_performance_review_reviewer_idTouserInput[]
      | performance_reviewUncheckedCreateWithoutUser_performance_review_reviewer_idTouserInput[];
    connectOrCreate?:
      | performance_reviewCreateOrConnectWithoutUser_performance_review_reviewer_idTouserInput
      | performance_reviewCreateOrConnectWithoutUser_performance_review_reviewer_idTouserInput[];
    createMany?: performance_reviewCreateManyUser_performance_review_reviewer_idTouserInputEnvelope;
    connect?: performance_reviewWhereUniqueInput | performance_reviewWhereUniqueInput[];
  };

  export type performance_reviewUncheckedCreateNestedManyWithoutUser_performance_review_user_idTouserInput = {
    create?:
      | XOR<
          performance_reviewCreateWithoutUser_performance_review_user_idTouserInput,
          performance_reviewUncheckedCreateWithoutUser_performance_review_user_idTouserInput
        >
      | performance_reviewCreateWithoutUser_performance_review_user_idTouserInput[]
      | performance_reviewUncheckedCreateWithoutUser_performance_review_user_idTouserInput[];
    connectOrCreate?:
      | performance_reviewCreateOrConnectWithoutUser_performance_review_user_idTouserInput
      | performance_reviewCreateOrConnectWithoutUser_performance_review_user_idTouserInput[];
    createMany?: performance_reviewCreateManyUser_performance_review_user_idTouserInputEnvelope;
    connect?: performance_reviewWhereUniqueInput | performance_reviewWhereUniqueInput[];
  };

  export type applicationUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<applicationCreateWithoutUserInput, applicationUncheckedCreateWithoutUserInput>
      | applicationCreateWithoutUserInput[]
      | applicationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: applicationCreateOrConnectWithoutUserInput | applicationCreateOrConnectWithoutUserInput[];
    upsert?: applicationUpsertWithWhereUniqueWithoutUserInput | applicationUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: applicationCreateManyUserInputEnvelope;
    set?: applicationWhereUniqueInput | applicationWhereUniqueInput[];
    disconnect?: applicationWhereUniqueInput | applicationWhereUniqueInput[];
    delete?: applicationWhereUniqueInput | applicationWhereUniqueInput[];
    connect?: applicationWhereUniqueInput | applicationWhereUniqueInput[];
    update?: applicationUpdateWithWhereUniqueWithoutUserInput | applicationUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: applicationUpdateManyWithWhereWithoutUserInput | applicationUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: applicationScalarWhereInput | applicationScalarWhereInput[];
  };

  export type attendanceUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<attendanceCreateWithoutUserInput, attendanceUncheckedCreateWithoutUserInput>
      | attendanceCreateWithoutUserInput[]
      | attendanceUncheckedCreateWithoutUserInput[];
    connectOrCreate?: attendanceCreateOrConnectWithoutUserInput | attendanceCreateOrConnectWithoutUserInput[];
    upsert?: attendanceUpsertWithWhereUniqueWithoutUserInput | attendanceUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: attendanceCreateManyUserInputEnvelope;
    set?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[];
    disconnect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[];
    delete?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[];
    connect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[];
    update?: attendanceUpdateWithWhereUniqueWithoutUserInput | attendanceUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: attendanceUpdateManyWithWhereWithoutUserInput | attendanceUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: attendanceScalarWhereInput | attendanceScalarWhereInput[];
  };

  export type companyUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    upsert?: companyUpsertWithWhereUniqueWithoutUserInput | companyUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    set?: companyWhereUniqueInput | companyWhereUniqueInput[];
    disconnect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    delete?: companyWhereUniqueInput | companyWhereUniqueInput[];
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    update?: companyUpdateWithWhereUniqueWithoutUserInput | companyUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: companyUpdateManyWithWhereWithoutUserInput | companyUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: companyScalarWhereInput | companyScalarWhereInput[];
  };

  export type performance_reviewUpdateManyWithoutUser_performance_review_reviewer_idTouserNestedInput = {
    create?:
      | XOR<
          performance_reviewCreateWithoutUser_performance_review_reviewer_idTouserInput,
          performance_reviewUncheckedCreateWithoutUser_performance_review_reviewer_idTouserInput
        >
      | performance_reviewCreateWithoutUser_performance_review_reviewer_idTouserInput[]
      | performance_reviewUncheckedCreateWithoutUser_performance_review_reviewer_idTouserInput[];
    connectOrCreate?:
      | performance_reviewCreateOrConnectWithoutUser_performance_review_reviewer_idTouserInput
      | performance_reviewCreateOrConnectWithoutUser_performance_review_reviewer_idTouserInput[];
    upsert?:
      | performance_reviewUpsertWithWhereUniqueWithoutUser_performance_review_reviewer_idTouserInput
      | performance_reviewUpsertWithWhereUniqueWithoutUser_performance_review_reviewer_idTouserInput[];
    createMany?: performance_reviewCreateManyUser_performance_review_reviewer_idTouserInputEnvelope;
    set?: performance_reviewWhereUniqueInput | performance_reviewWhereUniqueInput[];
    disconnect?: performance_reviewWhereUniqueInput | performance_reviewWhereUniqueInput[];
    delete?: performance_reviewWhereUniqueInput | performance_reviewWhereUniqueInput[];
    connect?: performance_reviewWhereUniqueInput | performance_reviewWhereUniqueInput[];
    update?:
      | performance_reviewUpdateWithWhereUniqueWithoutUser_performance_review_reviewer_idTouserInput
      | performance_reviewUpdateWithWhereUniqueWithoutUser_performance_review_reviewer_idTouserInput[];
    updateMany?:
      | performance_reviewUpdateManyWithWhereWithoutUser_performance_review_reviewer_idTouserInput
      | performance_reviewUpdateManyWithWhereWithoutUser_performance_review_reviewer_idTouserInput[];
    deleteMany?: performance_reviewScalarWhereInput | performance_reviewScalarWhereInput[];
  };

  export type performance_reviewUpdateManyWithoutUser_performance_review_user_idTouserNestedInput = {
    create?:
      | XOR<
          performance_reviewCreateWithoutUser_performance_review_user_idTouserInput,
          performance_reviewUncheckedCreateWithoutUser_performance_review_user_idTouserInput
        >
      | performance_reviewCreateWithoutUser_performance_review_user_idTouserInput[]
      | performance_reviewUncheckedCreateWithoutUser_performance_review_user_idTouserInput[];
    connectOrCreate?:
      | performance_reviewCreateOrConnectWithoutUser_performance_review_user_idTouserInput
      | performance_reviewCreateOrConnectWithoutUser_performance_review_user_idTouserInput[];
    upsert?:
      | performance_reviewUpsertWithWhereUniqueWithoutUser_performance_review_user_idTouserInput
      | performance_reviewUpsertWithWhereUniqueWithoutUser_performance_review_user_idTouserInput[];
    createMany?: performance_reviewCreateManyUser_performance_review_user_idTouserInputEnvelope;
    set?: performance_reviewWhereUniqueInput | performance_reviewWhereUniqueInput[];
    disconnect?: performance_reviewWhereUniqueInput | performance_reviewWhereUniqueInput[];
    delete?: performance_reviewWhereUniqueInput | performance_reviewWhereUniqueInput[];
    connect?: performance_reviewWhereUniqueInput | performance_reviewWhereUniqueInput[];
    update?:
      | performance_reviewUpdateWithWhereUniqueWithoutUser_performance_review_user_idTouserInput
      | performance_reviewUpdateWithWhereUniqueWithoutUser_performance_review_user_idTouserInput[];
    updateMany?:
      | performance_reviewUpdateManyWithWhereWithoutUser_performance_review_user_idTouserInput
      | performance_reviewUpdateManyWithWhereWithoutUser_performance_review_user_idTouserInput[];
    deleteMany?: performance_reviewScalarWhereInput | performance_reviewScalarWhereInput[];
  };

  export type applicationUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<applicationCreateWithoutUserInput, applicationUncheckedCreateWithoutUserInput>
      | applicationCreateWithoutUserInput[]
      | applicationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: applicationCreateOrConnectWithoutUserInput | applicationCreateOrConnectWithoutUserInput[];
    upsert?: applicationUpsertWithWhereUniqueWithoutUserInput | applicationUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: applicationCreateManyUserInputEnvelope;
    set?: applicationWhereUniqueInput | applicationWhereUniqueInput[];
    disconnect?: applicationWhereUniqueInput | applicationWhereUniqueInput[];
    delete?: applicationWhereUniqueInput | applicationWhereUniqueInput[];
    connect?: applicationWhereUniqueInput | applicationWhereUniqueInput[];
    update?: applicationUpdateWithWhereUniqueWithoutUserInput | applicationUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: applicationUpdateManyWithWhereWithoutUserInput | applicationUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: applicationScalarWhereInput | applicationScalarWhereInput[];
  };

  export type attendanceUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<attendanceCreateWithoutUserInput, attendanceUncheckedCreateWithoutUserInput>
      | attendanceCreateWithoutUserInput[]
      | attendanceUncheckedCreateWithoutUserInput[];
    connectOrCreate?: attendanceCreateOrConnectWithoutUserInput | attendanceCreateOrConnectWithoutUserInput[];
    upsert?: attendanceUpsertWithWhereUniqueWithoutUserInput | attendanceUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: attendanceCreateManyUserInputEnvelope;
    set?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[];
    disconnect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[];
    delete?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[];
    connect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[];
    update?: attendanceUpdateWithWhereUniqueWithoutUserInput | attendanceUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: attendanceUpdateManyWithWhereWithoutUserInput | attendanceUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: attendanceScalarWhereInput | attendanceScalarWhereInput[];
  };

  export type companyUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    upsert?: companyUpsertWithWhereUniqueWithoutUserInput | companyUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    set?: companyWhereUniqueInput | companyWhereUniqueInput[];
    disconnect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    delete?: companyWhereUniqueInput | companyWhereUniqueInput[];
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    update?: companyUpdateWithWhereUniqueWithoutUserInput | companyUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: companyUpdateManyWithWhereWithoutUserInput | companyUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: companyScalarWhereInput | companyScalarWhereInput[];
  };

  export type performance_reviewUncheckedUpdateManyWithoutUser_performance_review_reviewer_idTouserNestedInput = {
    create?:
      | XOR<
          performance_reviewCreateWithoutUser_performance_review_reviewer_idTouserInput,
          performance_reviewUncheckedCreateWithoutUser_performance_review_reviewer_idTouserInput
        >
      | performance_reviewCreateWithoutUser_performance_review_reviewer_idTouserInput[]
      | performance_reviewUncheckedCreateWithoutUser_performance_review_reviewer_idTouserInput[];
    connectOrCreate?:
      | performance_reviewCreateOrConnectWithoutUser_performance_review_reviewer_idTouserInput
      | performance_reviewCreateOrConnectWithoutUser_performance_review_reviewer_idTouserInput[];
    upsert?:
      | performance_reviewUpsertWithWhereUniqueWithoutUser_performance_review_reviewer_idTouserInput
      | performance_reviewUpsertWithWhereUniqueWithoutUser_performance_review_reviewer_idTouserInput[];
    createMany?: performance_reviewCreateManyUser_performance_review_reviewer_idTouserInputEnvelope;
    set?: performance_reviewWhereUniqueInput | performance_reviewWhereUniqueInput[];
    disconnect?: performance_reviewWhereUniqueInput | performance_reviewWhereUniqueInput[];
    delete?: performance_reviewWhereUniqueInput | performance_reviewWhereUniqueInput[];
    connect?: performance_reviewWhereUniqueInput | performance_reviewWhereUniqueInput[];
    update?:
      | performance_reviewUpdateWithWhereUniqueWithoutUser_performance_review_reviewer_idTouserInput
      | performance_reviewUpdateWithWhereUniqueWithoutUser_performance_review_reviewer_idTouserInput[];
    updateMany?:
      | performance_reviewUpdateManyWithWhereWithoutUser_performance_review_reviewer_idTouserInput
      | performance_reviewUpdateManyWithWhereWithoutUser_performance_review_reviewer_idTouserInput[];
    deleteMany?: performance_reviewScalarWhereInput | performance_reviewScalarWhereInput[];
  };

  export type performance_reviewUncheckedUpdateManyWithoutUser_performance_review_user_idTouserNestedInput = {
    create?:
      | XOR<
          performance_reviewCreateWithoutUser_performance_review_user_idTouserInput,
          performance_reviewUncheckedCreateWithoutUser_performance_review_user_idTouserInput
        >
      | performance_reviewCreateWithoutUser_performance_review_user_idTouserInput[]
      | performance_reviewUncheckedCreateWithoutUser_performance_review_user_idTouserInput[];
    connectOrCreate?:
      | performance_reviewCreateOrConnectWithoutUser_performance_review_user_idTouserInput
      | performance_reviewCreateOrConnectWithoutUser_performance_review_user_idTouserInput[];
    upsert?:
      | performance_reviewUpsertWithWhereUniqueWithoutUser_performance_review_user_idTouserInput
      | performance_reviewUpsertWithWhereUniqueWithoutUser_performance_review_user_idTouserInput[];
    createMany?: performance_reviewCreateManyUser_performance_review_user_idTouserInputEnvelope;
    set?: performance_reviewWhereUniqueInput | performance_reviewWhereUniqueInput[];
    disconnect?: performance_reviewWhereUniqueInput | performance_reviewWhereUniqueInput[];
    delete?: performance_reviewWhereUniqueInput | performance_reviewWhereUniqueInput[];
    connect?: performance_reviewWhereUniqueInput | performance_reviewWhereUniqueInput[];
    update?:
      | performance_reviewUpdateWithWhereUniqueWithoutUser_performance_review_user_idTouserInput
      | performance_reviewUpdateWithWhereUniqueWithoutUser_performance_review_user_idTouserInput[];
    updateMany?:
      | performance_reviewUpdateManyWithWhereWithoutUser_performance_review_user_idTouserInput
      | performance_reviewUpdateManyWithWhereWithoutUser_performance_review_user_idTouserInput[];
    deleteMany?: performance_reviewScalarWhereInput | performance_reviewScalarWhereInput[];
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type jobCreateWithoutApplicationInput = {
    id?: string;
    title: string;
    description: string;
    location: string;
    posting_date: Date | string;
    closing_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company: companyCreateNestedOneWithoutJobInput;
  };

  export type jobUncheckedCreateWithoutApplicationInput = {
    id?: string;
    title: string;
    description: string;
    location: string;
    posting_date: Date | string;
    closing_date: Date | string;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type jobCreateOrConnectWithoutApplicationInput = {
    where: jobWhereUniqueInput;
    create: XOR<jobCreateWithoutApplicationInput, jobUncheckedCreateWithoutApplicationInput>;
  };

  export type userCreateWithoutApplicationInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    attendance?: attendanceCreateNestedManyWithoutUserInput;
    company?: companyCreateNestedManyWithoutUserInput;
    performance_review_performance_review_reviewer_idTouser?: performance_reviewCreateNestedManyWithoutUser_performance_review_reviewer_idTouserInput;
    performance_review_performance_review_user_idTouser?: performance_reviewCreateNestedManyWithoutUser_performance_review_user_idTouserInput;
  };

  export type userUncheckedCreateWithoutApplicationInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    attendance?: attendanceUncheckedCreateNestedManyWithoutUserInput;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
    performance_review_performance_review_reviewer_idTouser?: performance_reviewUncheckedCreateNestedManyWithoutUser_performance_review_reviewer_idTouserInput;
    performance_review_performance_review_user_idTouser?: performance_reviewUncheckedCreateNestedManyWithoutUser_performance_review_user_idTouserInput;
  };

  export type userCreateOrConnectWithoutApplicationInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutApplicationInput, userUncheckedCreateWithoutApplicationInput>;
  };

  export type jobUpsertWithoutApplicationInput = {
    update: XOR<jobUpdateWithoutApplicationInput, jobUncheckedUpdateWithoutApplicationInput>;
    create: XOR<jobCreateWithoutApplicationInput, jobUncheckedCreateWithoutApplicationInput>;
    where?: jobWhereInput;
  };

  export type jobUpdateToOneWithWhereWithoutApplicationInput = {
    where?: jobWhereInput;
    data: XOR<jobUpdateWithoutApplicationInput, jobUncheckedUpdateWithoutApplicationInput>;
  };

  export type jobUpdateWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    posting_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    closing_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneRequiredWithoutJobNestedInput;
  };

  export type jobUncheckedUpdateWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    posting_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    closing_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUpsertWithoutApplicationInput = {
    update: XOR<userUpdateWithoutApplicationInput, userUncheckedUpdateWithoutApplicationInput>;
    create: XOR<userCreateWithoutApplicationInput, userUncheckedCreateWithoutApplicationInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutApplicationInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutApplicationInput, userUncheckedUpdateWithoutApplicationInput>;
  };

  export type userUpdateWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    attendance?: attendanceUpdateManyWithoutUserNestedInput;
    company?: companyUpdateManyWithoutUserNestedInput;
    performance_review_performance_review_reviewer_idTouser?: performance_reviewUpdateManyWithoutUser_performance_review_reviewer_idTouserNestedInput;
    performance_review_performance_review_user_idTouser?: performance_reviewUpdateManyWithoutUser_performance_review_user_idTouserNestedInput;
  };

  export type userUncheckedUpdateWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    attendance?: attendanceUncheckedUpdateManyWithoutUserNestedInput;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
    performance_review_performance_review_reviewer_idTouser?: performance_reviewUncheckedUpdateManyWithoutUser_performance_review_reviewer_idTouserNestedInput;
    performance_review_performance_review_user_idTouser?: performance_reviewUncheckedUpdateManyWithoutUser_performance_review_user_idTouserNestedInput;
  };

  export type userCreateWithoutAttendanceInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    application?: applicationCreateNestedManyWithoutUserInput;
    company?: companyCreateNestedManyWithoutUserInput;
    performance_review_performance_review_reviewer_idTouser?: performance_reviewCreateNestedManyWithoutUser_performance_review_reviewer_idTouserInput;
    performance_review_performance_review_user_idTouser?: performance_reviewCreateNestedManyWithoutUser_performance_review_user_idTouserInput;
  };

  export type userUncheckedCreateWithoutAttendanceInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    application?: applicationUncheckedCreateNestedManyWithoutUserInput;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
    performance_review_performance_review_reviewer_idTouser?: performance_reviewUncheckedCreateNestedManyWithoutUser_performance_review_reviewer_idTouserInput;
    performance_review_performance_review_user_idTouser?: performance_reviewUncheckedCreateNestedManyWithoutUser_performance_review_user_idTouserInput;
  };

  export type userCreateOrConnectWithoutAttendanceInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutAttendanceInput, userUncheckedCreateWithoutAttendanceInput>;
  };

  export type userUpsertWithoutAttendanceInput = {
    update: XOR<userUpdateWithoutAttendanceInput, userUncheckedUpdateWithoutAttendanceInput>;
    create: XOR<userCreateWithoutAttendanceInput, userUncheckedCreateWithoutAttendanceInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutAttendanceInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutAttendanceInput, userUncheckedUpdateWithoutAttendanceInput>;
  };

  export type userUpdateWithoutAttendanceInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    application?: applicationUpdateManyWithoutUserNestedInput;
    company?: companyUpdateManyWithoutUserNestedInput;
    performance_review_performance_review_reviewer_idTouser?: performance_reviewUpdateManyWithoutUser_performance_review_reviewer_idTouserNestedInput;
    performance_review_performance_review_user_idTouser?: performance_reviewUpdateManyWithoutUser_performance_review_user_idTouserNestedInput;
  };

  export type userUncheckedUpdateWithoutAttendanceInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    application?: applicationUncheckedUpdateManyWithoutUserNestedInput;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
    performance_review_performance_review_reviewer_idTouser?: performance_reviewUncheckedUpdateManyWithoutUser_performance_review_reviewer_idTouserNestedInput;
    performance_review_performance_review_user_idTouser?: performance_reviewUncheckedUpdateManyWithoutUser_performance_review_user_idTouserNestedInput;
  };

  export type userCreateWithoutCompanyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    application?: applicationCreateNestedManyWithoutUserInput;
    attendance?: attendanceCreateNestedManyWithoutUserInput;
    performance_review_performance_review_reviewer_idTouser?: performance_reviewCreateNestedManyWithoutUser_performance_review_reviewer_idTouserInput;
    performance_review_performance_review_user_idTouser?: performance_reviewCreateNestedManyWithoutUser_performance_review_user_idTouserInput;
  };

  export type userUncheckedCreateWithoutCompanyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    application?: applicationUncheckedCreateNestedManyWithoutUserInput;
    attendance?: attendanceUncheckedCreateNestedManyWithoutUserInput;
    performance_review_performance_review_reviewer_idTouser?: performance_reviewUncheckedCreateNestedManyWithoutUser_performance_review_reviewer_idTouserInput;
    performance_review_performance_review_user_idTouser?: performance_reviewUncheckedCreateNestedManyWithoutUser_performance_review_user_idTouserInput;
  };

  export type userCreateOrConnectWithoutCompanyInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
  };

  export type jobCreateWithoutCompanyInput = {
    id?: string;
    title: string;
    description: string;
    location: string;
    posting_date: Date | string;
    closing_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    application?: applicationCreateNestedManyWithoutJobInput;
  };

  export type jobUncheckedCreateWithoutCompanyInput = {
    id?: string;
    title: string;
    description: string;
    location: string;
    posting_date: Date | string;
    closing_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    application?: applicationUncheckedCreateNestedManyWithoutJobInput;
  };

  export type jobCreateOrConnectWithoutCompanyInput = {
    where: jobWhereUniqueInput;
    create: XOR<jobCreateWithoutCompanyInput, jobUncheckedCreateWithoutCompanyInput>;
  };

  export type jobCreateManyCompanyInputEnvelope = {
    data: jobCreateManyCompanyInput | jobCreateManyCompanyInput[];
    skipDuplicates?: boolean;
  };

  export type userUpsertWithoutCompanyInput = {
    update: XOR<userUpdateWithoutCompanyInput, userUncheckedUpdateWithoutCompanyInput>;
    create: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutCompanyInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutCompanyInput, userUncheckedUpdateWithoutCompanyInput>;
  };

  export type userUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    application?: applicationUpdateManyWithoutUserNestedInput;
    attendance?: attendanceUpdateManyWithoutUserNestedInput;
    performance_review_performance_review_reviewer_idTouser?: performance_reviewUpdateManyWithoutUser_performance_review_reviewer_idTouserNestedInput;
    performance_review_performance_review_user_idTouser?: performance_reviewUpdateManyWithoutUser_performance_review_user_idTouserNestedInput;
  };

  export type userUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    application?: applicationUncheckedUpdateManyWithoutUserNestedInput;
    attendance?: attendanceUncheckedUpdateManyWithoutUserNestedInput;
    performance_review_performance_review_reviewer_idTouser?: performance_reviewUncheckedUpdateManyWithoutUser_performance_review_reviewer_idTouserNestedInput;
    performance_review_performance_review_user_idTouser?: performance_reviewUncheckedUpdateManyWithoutUser_performance_review_user_idTouserNestedInput;
  };

  export type jobUpsertWithWhereUniqueWithoutCompanyInput = {
    where: jobWhereUniqueInput;
    update: XOR<jobUpdateWithoutCompanyInput, jobUncheckedUpdateWithoutCompanyInput>;
    create: XOR<jobCreateWithoutCompanyInput, jobUncheckedCreateWithoutCompanyInput>;
  };

  export type jobUpdateWithWhereUniqueWithoutCompanyInput = {
    where: jobWhereUniqueInput;
    data: XOR<jobUpdateWithoutCompanyInput, jobUncheckedUpdateWithoutCompanyInput>;
  };

  export type jobUpdateManyWithWhereWithoutCompanyInput = {
    where: jobScalarWhereInput;
    data: XOR<jobUpdateManyMutationInput, jobUncheckedUpdateManyWithoutCompanyInput>;
  };

  export type jobScalarWhereInput = {
    AND?: jobScalarWhereInput | jobScalarWhereInput[];
    OR?: jobScalarWhereInput[];
    NOT?: jobScalarWhereInput | jobScalarWhereInput[];
    id?: UuidFilter<'job'> | string;
    title?: StringFilter<'job'> | string;
    description?: StringFilter<'job'> | string;
    location?: StringFilter<'job'> | string;
    posting_date?: DateTimeFilter<'job'> | Date | string;
    closing_date?: DateTimeFilter<'job'> | Date | string;
    company_id?: UuidFilter<'job'> | string;
    created_at?: DateTimeFilter<'job'> | Date | string;
    updated_at?: DateTimeFilter<'job'> | Date | string;
  };

  export type applicationCreateWithoutJobInput = {
    id?: string;
    application_date: Date | string;
    status: string;
    resume: string;
    cover_letter: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutApplicationInput;
  };

  export type applicationUncheckedCreateWithoutJobInput = {
    id?: string;
    user_id: string;
    application_date: Date | string;
    status: string;
    resume: string;
    cover_letter: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type applicationCreateOrConnectWithoutJobInput = {
    where: applicationWhereUniqueInput;
    create: XOR<applicationCreateWithoutJobInput, applicationUncheckedCreateWithoutJobInput>;
  };

  export type applicationCreateManyJobInputEnvelope = {
    data: applicationCreateManyJobInput | applicationCreateManyJobInput[];
    skipDuplicates?: boolean;
  };

  export type companyCreateWithoutJobInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    established_date?: Date | string | null;
    industry?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutCompanyInput;
  };

  export type companyUncheckedCreateWithoutJobInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    established_date?: Date | string | null;
    industry?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type companyCreateOrConnectWithoutJobInput = {
    where: companyWhereUniqueInput;
    create: XOR<companyCreateWithoutJobInput, companyUncheckedCreateWithoutJobInput>;
  };

  export type applicationUpsertWithWhereUniqueWithoutJobInput = {
    where: applicationWhereUniqueInput;
    update: XOR<applicationUpdateWithoutJobInput, applicationUncheckedUpdateWithoutJobInput>;
    create: XOR<applicationCreateWithoutJobInput, applicationUncheckedCreateWithoutJobInput>;
  };

  export type applicationUpdateWithWhereUniqueWithoutJobInput = {
    where: applicationWhereUniqueInput;
    data: XOR<applicationUpdateWithoutJobInput, applicationUncheckedUpdateWithoutJobInput>;
  };

  export type applicationUpdateManyWithWhereWithoutJobInput = {
    where: applicationScalarWhereInput;
    data: XOR<applicationUpdateManyMutationInput, applicationUncheckedUpdateManyWithoutJobInput>;
  };

  export type applicationScalarWhereInput = {
    AND?: applicationScalarWhereInput | applicationScalarWhereInput[];
    OR?: applicationScalarWhereInput[];
    NOT?: applicationScalarWhereInput | applicationScalarWhereInput[];
    id?: UuidFilter<'application'> | string;
    job_id?: UuidFilter<'application'> | string;
    user_id?: UuidFilter<'application'> | string;
    application_date?: DateTimeFilter<'application'> | Date | string;
    status?: StringFilter<'application'> | string;
    resume?: StringFilter<'application'> | string;
    cover_letter?: StringFilter<'application'> | string;
    created_at?: DateTimeFilter<'application'> | Date | string;
    updated_at?: DateTimeFilter<'application'> | Date | string;
  };

  export type companyUpsertWithoutJobInput = {
    update: XOR<companyUpdateWithoutJobInput, companyUncheckedUpdateWithoutJobInput>;
    create: XOR<companyCreateWithoutJobInput, companyUncheckedCreateWithoutJobInput>;
    where?: companyWhereInput;
  };

  export type companyUpdateToOneWithWhereWithoutJobInput = {
    where?: companyWhereInput;
    data: XOR<companyUpdateWithoutJobInput, companyUncheckedUpdateWithoutJobInput>;
  };

  export type companyUpdateWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    established_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    established_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type userCreateWithoutPerformance_review_performance_review_reviewer_idTouserInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    application?: applicationCreateNestedManyWithoutUserInput;
    attendance?: attendanceCreateNestedManyWithoutUserInput;
    company?: companyCreateNestedManyWithoutUserInput;
    performance_review_performance_review_user_idTouser?: performance_reviewCreateNestedManyWithoutUser_performance_review_user_idTouserInput;
  };

  export type userUncheckedCreateWithoutPerformance_review_performance_review_reviewer_idTouserInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    application?: applicationUncheckedCreateNestedManyWithoutUserInput;
    attendance?: attendanceUncheckedCreateNestedManyWithoutUserInput;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
    performance_review_performance_review_user_idTouser?: performance_reviewUncheckedCreateNestedManyWithoutUser_performance_review_user_idTouserInput;
  };

  export type userCreateOrConnectWithoutPerformance_review_performance_review_reviewer_idTouserInput = {
    where: userWhereUniqueInput;
    create: XOR<
      userCreateWithoutPerformance_review_performance_review_reviewer_idTouserInput,
      userUncheckedCreateWithoutPerformance_review_performance_review_reviewer_idTouserInput
    >;
  };

  export type userCreateWithoutPerformance_review_performance_review_user_idTouserInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    application?: applicationCreateNestedManyWithoutUserInput;
    attendance?: attendanceCreateNestedManyWithoutUserInput;
    company?: companyCreateNestedManyWithoutUserInput;
    performance_review_performance_review_reviewer_idTouser?: performance_reviewCreateNestedManyWithoutUser_performance_review_reviewer_idTouserInput;
  };

  export type userUncheckedCreateWithoutPerformance_review_performance_review_user_idTouserInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    application?: applicationUncheckedCreateNestedManyWithoutUserInput;
    attendance?: attendanceUncheckedCreateNestedManyWithoutUserInput;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
    performance_review_performance_review_reviewer_idTouser?: performance_reviewUncheckedCreateNestedManyWithoutUser_performance_review_reviewer_idTouserInput;
  };

  export type userCreateOrConnectWithoutPerformance_review_performance_review_user_idTouserInput = {
    where: userWhereUniqueInput;
    create: XOR<
      userCreateWithoutPerformance_review_performance_review_user_idTouserInput,
      userUncheckedCreateWithoutPerformance_review_performance_review_user_idTouserInput
    >;
  };

  export type userUpsertWithoutPerformance_review_performance_review_reviewer_idTouserInput = {
    update: XOR<
      userUpdateWithoutPerformance_review_performance_review_reviewer_idTouserInput,
      userUncheckedUpdateWithoutPerformance_review_performance_review_reviewer_idTouserInput
    >;
    create: XOR<
      userCreateWithoutPerformance_review_performance_review_reviewer_idTouserInput,
      userUncheckedCreateWithoutPerformance_review_performance_review_reviewer_idTouserInput
    >;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutPerformance_review_performance_review_reviewer_idTouserInput = {
    where?: userWhereInput;
    data: XOR<
      userUpdateWithoutPerformance_review_performance_review_reviewer_idTouserInput,
      userUncheckedUpdateWithoutPerformance_review_performance_review_reviewer_idTouserInput
    >;
  };

  export type userUpdateWithoutPerformance_review_performance_review_reviewer_idTouserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    application?: applicationUpdateManyWithoutUserNestedInput;
    attendance?: attendanceUpdateManyWithoutUserNestedInput;
    company?: companyUpdateManyWithoutUserNestedInput;
    performance_review_performance_review_user_idTouser?: performance_reviewUpdateManyWithoutUser_performance_review_user_idTouserNestedInput;
  };

  export type userUncheckedUpdateWithoutPerformance_review_performance_review_reviewer_idTouserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    application?: applicationUncheckedUpdateManyWithoutUserNestedInput;
    attendance?: attendanceUncheckedUpdateManyWithoutUserNestedInput;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
    performance_review_performance_review_user_idTouser?: performance_reviewUncheckedUpdateManyWithoutUser_performance_review_user_idTouserNestedInput;
  };

  export type userUpsertWithoutPerformance_review_performance_review_user_idTouserInput = {
    update: XOR<
      userUpdateWithoutPerformance_review_performance_review_user_idTouserInput,
      userUncheckedUpdateWithoutPerformance_review_performance_review_user_idTouserInput
    >;
    create: XOR<
      userCreateWithoutPerformance_review_performance_review_user_idTouserInput,
      userUncheckedCreateWithoutPerformance_review_performance_review_user_idTouserInput
    >;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutPerformance_review_performance_review_user_idTouserInput = {
    where?: userWhereInput;
    data: XOR<
      userUpdateWithoutPerformance_review_performance_review_user_idTouserInput,
      userUncheckedUpdateWithoutPerformance_review_performance_review_user_idTouserInput
    >;
  };

  export type userUpdateWithoutPerformance_review_performance_review_user_idTouserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    application?: applicationUpdateManyWithoutUserNestedInput;
    attendance?: attendanceUpdateManyWithoutUserNestedInput;
    company?: companyUpdateManyWithoutUserNestedInput;
    performance_review_performance_review_reviewer_idTouser?: performance_reviewUpdateManyWithoutUser_performance_review_reviewer_idTouserNestedInput;
  };

  export type userUncheckedUpdateWithoutPerformance_review_performance_review_user_idTouserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    application?: applicationUncheckedUpdateManyWithoutUserNestedInput;
    attendance?: attendanceUncheckedUpdateManyWithoutUserNestedInput;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
    performance_review_performance_review_reviewer_idTouser?: performance_reviewUncheckedUpdateManyWithoutUser_performance_review_reviewer_idTouserNestedInput;
  };

  export type applicationCreateWithoutUserInput = {
    id?: string;
    application_date: Date | string;
    status: string;
    resume: string;
    cover_letter: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    job: jobCreateNestedOneWithoutApplicationInput;
  };

  export type applicationUncheckedCreateWithoutUserInput = {
    id?: string;
    job_id: string;
    application_date: Date | string;
    status: string;
    resume: string;
    cover_letter: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type applicationCreateOrConnectWithoutUserInput = {
    where: applicationWhereUniqueInput;
    create: XOR<applicationCreateWithoutUserInput, applicationUncheckedCreateWithoutUserInput>;
  };

  export type applicationCreateManyUserInputEnvelope = {
    data: applicationCreateManyUserInput | applicationCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type attendanceCreateWithoutUserInput = {
    id?: string;
    check_in_time: Date | string;
    check_out_time: Date | string;
    date: Date | string;
    status: string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type attendanceUncheckedCreateWithoutUserInput = {
    id?: string;
    check_in_time: Date | string;
    check_out_time: Date | string;
    date: Date | string;
    status: string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type attendanceCreateOrConnectWithoutUserInput = {
    where: attendanceWhereUniqueInput;
    create: XOR<attendanceCreateWithoutUserInput, attendanceUncheckedCreateWithoutUserInput>;
  };

  export type attendanceCreateManyUserInputEnvelope = {
    data: attendanceCreateManyUserInput | attendanceCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type companyCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    established_date?: Date | string | null;
    industry?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    job?: jobCreateNestedManyWithoutCompanyInput;
  };

  export type companyUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    established_date?: Date | string | null;
    industry?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    job?: jobUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type companyCreateOrConnectWithoutUserInput = {
    where: companyWhereUniqueInput;
    create: XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>;
  };

  export type companyCreateManyUserInputEnvelope = {
    data: companyCreateManyUserInput | companyCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type performance_reviewCreateWithoutUser_performance_review_reviewer_idTouserInput = {
    id?: string;
    review_date: Date | string;
    rating: number;
    comments: string;
    next_review_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_performance_review_user_idTouser: userCreateNestedOneWithoutPerformance_review_performance_review_user_idTouserInput;
  };

  export type performance_reviewUncheckedCreateWithoutUser_performance_review_reviewer_idTouserInput = {
    id?: string;
    user_id: string;
    review_date: Date | string;
    rating: number;
    comments: string;
    next_review_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type performance_reviewCreateOrConnectWithoutUser_performance_review_reviewer_idTouserInput = {
    where: performance_reviewWhereUniqueInput;
    create: XOR<
      performance_reviewCreateWithoutUser_performance_review_reviewer_idTouserInput,
      performance_reviewUncheckedCreateWithoutUser_performance_review_reviewer_idTouserInput
    >;
  };

  export type performance_reviewCreateManyUser_performance_review_reviewer_idTouserInputEnvelope = {
    data:
      | performance_reviewCreateManyUser_performance_review_reviewer_idTouserInput
      | performance_reviewCreateManyUser_performance_review_reviewer_idTouserInput[];
    skipDuplicates?: boolean;
  };

  export type performance_reviewCreateWithoutUser_performance_review_user_idTouserInput = {
    id?: string;
    review_date: Date | string;
    rating: number;
    comments: string;
    next_review_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_performance_review_reviewer_idTouser: userCreateNestedOneWithoutPerformance_review_performance_review_reviewer_idTouserInput;
  };

  export type performance_reviewUncheckedCreateWithoutUser_performance_review_user_idTouserInput = {
    id?: string;
    review_date: Date | string;
    reviewer_id: string;
    rating: number;
    comments: string;
    next_review_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type performance_reviewCreateOrConnectWithoutUser_performance_review_user_idTouserInput = {
    where: performance_reviewWhereUniqueInput;
    create: XOR<
      performance_reviewCreateWithoutUser_performance_review_user_idTouserInput,
      performance_reviewUncheckedCreateWithoutUser_performance_review_user_idTouserInput
    >;
  };

  export type performance_reviewCreateManyUser_performance_review_user_idTouserInputEnvelope = {
    data:
      | performance_reviewCreateManyUser_performance_review_user_idTouserInput
      | performance_reviewCreateManyUser_performance_review_user_idTouserInput[];
    skipDuplicates?: boolean;
  };

  export type applicationUpsertWithWhereUniqueWithoutUserInput = {
    where: applicationWhereUniqueInput;
    update: XOR<applicationUpdateWithoutUserInput, applicationUncheckedUpdateWithoutUserInput>;
    create: XOR<applicationCreateWithoutUserInput, applicationUncheckedCreateWithoutUserInput>;
  };

  export type applicationUpdateWithWhereUniqueWithoutUserInput = {
    where: applicationWhereUniqueInput;
    data: XOR<applicationUpdateWithoutUserInput, applicationUncheckedUpdateWithoutUserInput>;
  };

  export type applicationUpdateManyWithWhereWithoutUserInput = {
    where: applicationScalarWhereInput;
    data: XOR<applicationUpdateManyMutationInput, applicationUncheckedUpdateManyWithoutUserInput>;
  };

  export type attendanceUpsertWithWhereUniqueWithoutUserInput = {
    where: attendanceWhereUniqueInput;
    update: XOR<attendanceUpdateWithoutUserInput, attendanceUncheckedUpdateWithoutUserInput>;
    create: XOR<attendanceCreateWithoutUserInput, attendanceUncheckedCreateWithoutUserInput>;
  };

  export type attendanceUpdateWithWhereUniqueWithoutUserInput = {
    where: attendanceWhereUniqueInput;
    data: XOR<attendanceUpdateWithoutUserInput, attendanceUncheckedUpdateWithoutUserInput>;
  };

  export type attendanceUpdateManyWithWhereWithoutUserInput = {
    where: attendanceScalarWhereInput;
    data: XOR<attendanceUpdateManyMutationInput, attendanceUncheckedUpdateManyWithoutUserInput>;
  };

  export type attendanceScalarWhereInput = {
    AND?: attendanceScalarWhereInput | attendanceScalarWhereInput[];
    OR?: attendanceScalarWhereInput[];
    NOT?: attendanceScalarWhereInput | attendanceScalarWhereInput[];
    id?: UuidFilter<'attendance'> | string;
    user_id?: UuidFilter<'attendance'> | string;
    check_in_time?: DateTimeFilter<'attendance'> | Date | string;
    check_out_time?: DateTimeFilter<'attendance'> | Date | string;
    date?: DateTimeFilter<'attendance'> | Date | string;
    status?: StringFilter<'attendance'> | string;
    notes?: StringNullableFilter<'attendance'> | string | null;
    created_at?: DateTimeFilter<'attendance'> | Date | string;
    updated_at?: DateTimeFilter<'attendance'> | Date | string;
  };

  export type companyUpsertWithWhereUniqueWithoutUserInput = {
    where: companyWhereUniqueInput;
    update: XOR<companyUpdateWithoutUserInput, companyUncheckedUpdateWithoutUserInput>;
    create: XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>;
  };

  export type companyUpdateWithWhereUniqueWithoutUserInput = {
    where: companyWhereUniqueInput;
    data: XOR<companyUpdateWithoutUserInput, companyUncheckedUpdateWithoutUserInput>;
  };

  export type companyUpdateManyWithWhereWithoutUserInput = {
    where: companyScalarWhereInput;
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyWithoutUserInput>;
  };

  export type companyScalarWhereInput = {
    AND?: companyScalarWhereInput | companyScalarWhereInput[];
    OR?: companyScalarWhereInput[];
    NOT?: companyScalarWhereInput | companyScalarWhereInput[];
    id?: UuidFilter<'company'> | string;
    description?: StringNullableFilter<'company'> | string | null;
    location?: StringNullableFilter<'company'> | string | null;
    established_date?: DateTimeNullableFilter<'company'> | Date | string | null;
    industry?: StringNullableFilter<'company'> | string | null;
    name?: StringFilter<'company'> | string;
    created_at?: DateTimeFilter<'company'> | Date | string;
    updated_at?: DateTimeFilter<'company'> | Date | string;
    user_id?: UuidFilter<'company'> | string;
    tenant_id?: StringFilter<'company'> | string;
  };

  export type performance_reviewUpsertWithWhereUniqueWithoutUser_performance_review_reviewer_idTouserInput = {
    where: performance_reviewWhereUniqueInput;
    update: XOR<
      performance_reviewUpdateWithoutUser_performance_review_reviewer_idTouserInput,
      performance_reviewUncheckedUpdateWithoutUser_performance_review_reviewer_idTouserInput
    >;
    create: XOR<
      performance_reviewCreateWithoutUser_performance_review_reviewer_idTouserInput,
      performance_reviewUncheckedCreateWithoutUser_performance_review_reviewer_idTouserInput
    >;
  };

  export type performance_reviewUpdateWithWhereUniqueWithoutUser_performance_review_reviewer_idTouserInput = {
    where: performance_reviewWhereUniqueInput;
    data: XOR<
      performance_reviewUpdateWithoutUser_performance_review_reviewer_idTouserInput,
      performance_reviewUncheckedUpdateWithoutUser_performance_review_reviewer_idTouserInput
    >;
  };

  export type performance_reviewUpdateManyWithWhereWithoutUser_performance_review_reviewer_idTouserInput = {
    where: performance_reviewScalarWhereInput;
    data: XOR<
      performance_reviewUpdateManyMutationInput,
      performance_reviewUncheckedUpdateManyWithoutUser_performance_review_reviewer_idTouserInput
    >;
  };

  export type performance_reviewScalarWhereInput = {
    AND?: performance_reviewScalarWhereInput | performance_reviewScalarWhereInput[];
    OR?: performance_reviewScalarWhereInput[];
    NOT?: performance_reviewScalarWhereInput | performance_reviewScalarWhereInput[];
    id?: UuidFilter<'performance_review'> | string;
    user_id?: UuidFilter<'performance_review'> | string;
    review_date?: DateTimeFilter<'performance_review'> | Date | string;
    reviewer_id?: UuidFilter<'performance_review'> | string;
    rating?: IntFilter<'performance_review'> | number;
    comments?: StringFilter<'performance_review'> | string;
    next_review_date?: DateTimeFilter<'performance_review'> | Date | string;
    created_at?: DateTimeFilter<'performance_review'> | Date | string;
    updated_at?: DateTimeFilter<'performance_review'> | Date | string;
  };

  export type performance_reviewUpsertWithWhereUniqueWithoutUser_performance_review_user_idTouserInput = {
    where: performance_reviewWhereUniqueInput;
    update: XOR<
      performance_reviewUpdateWithoutUser_performance_review_user_idTouserInput,
      performance_reviewUncheckedUpdateWithoutUser_performance_review_user_idTouserInput
    >;
    create: XOR<
      performance_reviewCreateWithoutUser_performance_review_user_idTouserInput,
      performance_reviewUncheckedCreateWithoutUser_performance_review_user_idTouserInput
    >;
  };

  export type performance_reviewUpdateWithWhereUniqueWithoutUser_performance_review_user_idTouserInput = {
    where: performance_reviewWhereUniqueInput;
    data: XOR<
      performance_reviewUpdateWithoutUser_performance_review_user_idTouserInput,
      performance_reviewUncheckedUpdateWithoutUser_performance_review_user_idTouserInput
    >;
  };

  export type performance_reviewUpdateManyWithWhereWithoutUser_performance_review_user_idTouserInput = {
    where: performance_reviewScalarWhereInput;
    data: XOR<
      performance_reviewUpdateManyMutationInput,
      performance_reviewUncheckedUpdateManyWithoutUser_performance_review_user_idTouserInput
    >;
  };

  export type jobCreateManyCompanyInput = {
    id?: string;
    title: string;
    description: string;
    location: string;
    posting_date: Date | string;
    closing_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type jobUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    posting_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    closing_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    application?: applicationUpdateManyWithoutJobNestedInput;
  };

  export type jobUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    posting_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    closing_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    application?: applicationUncheckedUpdateManyWithoutJobNestedInput;
  };

  export type jobUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    posting_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    closing_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type applicationCreateManyJobInput = {
    id?: string;
    user_id: string;
    application_date: Date | string;
    status: string;
    resume: string;
    cover_letter: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type applicationUpdateWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string;
    application_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: StringFieldUpdateOperationsInput | string;
    resume?: StringFieldUpdateOperationsInput | string;
    cover_letter?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutApplicationNestedInput;
  };

  export type applicationUncheckedUpdateWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    application_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: StringFieldUpdateOperationsInput | string;
    resume?: StringFieldUpdateOperationsInput | string;
    cover_letter?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type applicationUncheckedUpdateManyWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    application_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: StringFieldUpdateOperationsInput | string;
    resume?: StringFieldUpdateOperationsInput | string;
    cover_letter?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type applicationCreateManyUserInput = {
    id?: string;
    job_id: string;
    application_date: Date | string;
    status: string;
    resume: string;
    cover_letter: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type attendanceCreateManyUserInput = {
    id?: string;
    check_in_time: Date | string;
    check_out_time: Date | string;
    date: Date | string;
    status: string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type companyCreateManyUserInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    established_date?: Date | string | null;
    industry?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type performance_reviewCreateManyUser_performance_review_reviewer_idTouserInput = {
    id?: string;
    user_id: string;
    review_date: Date | string;
    rating: number;
    comments: string;
    next_review_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type performance_reviewCreateManyUser_performance_review_user_idTouserInput = {
    id?: string;
    review_date: Date | string;
    reviewer_id: string;
    rating: number;
    comments: string;
    next_review_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type applicationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    application_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: StringFieldUpdateOperationsInput | string;
    resume?: StringFieldUpdateOperationsInput | string;
    cover_letter?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    job?: jobUpdateOneRequiredWithoutApplicationNestedInput;
  };

  export type applicationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    job_id?: StringFieldUpdateOperationsInput | string;
    application_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: StringFieldUpdateOperationsInput | string;
    resume?: StringFieldUpdateOperationsInput | string;
    cover_letter?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type applicationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    job_id?: StringFieldUpdateOperationsInput | string;
    application_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: StringFieldUpdateOperationsInput | string;
    resume?: StringFieldUpdateOperationsInput | string;
    cover_letter?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type attendanceUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    check_in_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    check_out_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: StringFieldUpdateOperationsInput | string;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type attendanceUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    check_in_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    check_out_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: StringFieldUpdateOperationsInput | string;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type attendanceUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    check_in_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    check_out_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: StringFieldUpdateOperationsInput | string;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type companyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    established_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    job?: jobUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    established_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    job?: jobUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    established_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type performance_reviewUpdateWithoutUser_performance_review_reviewer_idTouserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    review_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    rating?: IntFieldUpdateOperationsInput | number;
    comments?: StringFieldUpdateOperationsInput | string;
    next_review_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_performance_review_user_idTouser?: userUpdateOneRequiredWithoutPerformance_review_performance_review_user_idTouserNestedInput;
  };

  export type performance_reviewUncheckedUpdateWithoutUser_performance_review_reviewer_idTouserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    review_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    rating?: IntFieldUpdateOperationsInput | number;
    comments?: StringFieldUpdateOperationsInput | string;
    next_review_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type performance_reviewUncheckedUpdateManyWithoutUser_performance_review_reviewer_idTouserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    review_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    rating?: IntFieldUpdateOperationsInput | number;
    comments?: StringFieldUpdateOperationsInput | string;
    next_review_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type performance_reviewUpdateWithoutUser_performance_review_user_idTouserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    review_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    rating?: IntFieldUpdateOperationsInput | number;
    comments?: StringFieldUpdateOperationsInput | string;
    next_review_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_performance_review_reviewer_idTouser?: userUpdateOneRequiredWithoutPerformance_review_performance_review_reviewer_idTouserNestedInput;
  };

  export type performance_reviewUncheckedUpdateWithoutUser_performance_review_user_idTouserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    review_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    reviewer_id?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    comments?: StringFieldUpdateOperationsInput | string;
    next_review_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type performance_reviewUncheckedUpdateManyWithoutUser_performance_review_user_idTouserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    review_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    reviewer_id?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    comments?: StringFieldUpdateOperationsInput | string;
    next_review_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use CompanyCountOutputTypeDefaultArgs instead
   */
  export type CompanyCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    CompanyCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use JobCountOutputTypeDefaultArgs instead
   */
  export type JobCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    JobCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use applicationDefaultArgs instead
   */
  export type applicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    applicationDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use attendanceDefaultArgs instead
   */
  export type attendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    attendanceDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use companyDefaultArgs instead
   */
  export type companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    companyDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use jobDefaultArgs instead
   */
  export type jobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = jobDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use performance_reviewDefaultArgs instead
   */
  export type performance_reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    performance_reviewDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
