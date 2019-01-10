/* 
이 파일에서는, api폴더 안의 모든 폴더들을 살펴본 후에 graphql파일, 
resolvers파일들을 찾아서 app에 전달하면되,
graphql serer에 schema가 없다고 한 그부분에
 
 */

import { fileLoader, mergeResolvers, mergeTypes,}from "merge-graphql-schemas";
import {makeExecutableSchema}from "graphql-tools";
import path from "path";


const allTypes: any = fileLoader(
    path.join(__dirname,"./api/**/*.graphql")
)

const allResolver:any = fileLoader(
    path.join(__dirname,"./api/**/*.resolvers.*")
// 지금은 ts로 끝나지만 나중에 배포용으로 빌드를 하면 ts파일들을
// js파일로 바꿔야 한다.그래서 *.resolvers 이렇게 resolvers만 적자.
// 그래야 이파일들이 ts에서 js로 바뀌었을때도 충돌하지 않는다. 
);

const mergedTypes:any = mergeTypes(allTypes);
const mergedResolvers:any = mergeResolvers(allResolver);

const schema = makeExecutableSchema({
    typeDefs:mergedTypes,
    resolvers: mergedResolvers
});

export default schema;