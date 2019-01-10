/* 
이 파일에서는, api폴더 안의 모든 폴더들을 살펴본 후에 graphql파일, 
resolvers파일들을 찾아서 app에 전달하면되,
graphql serer에 schema가 없다고 한 그부분에
 
 */

import { fileLoader, mergeResolvers, mergeTypes,}from "merge-graphql-schemas";
import {GraphQLSchema} from "graphql";
import {makeExecutableSchema}from "graphql-tools";
import path from "path";

