import namespace from '@rdfjs/namespace'
import {ContextParser} from 'jsonld-context-parser'
export const schema = namespace('https://schema.org/')
export const sdo = namespace('http://schema.org/')
export const rdfs = namespace('http://www.w3.org/2000/01/rdf-schema#')
export const dce = namespace('http://purl.org/dc/elements/1.1/')
export const dct = namespace('http://purl.org/dc/terms/1.1/')
export const rdf = namespace('http://www.w3.org/1999/02/22-rdf-syntax-ns#')
export const ex = namespace('http://example.com/')
export const sh = namespace('http://www.w3.org/ns/shacl#')
export const dash = namespace('http://datashapes.org/dash#')
export const xsd = namespace('http://www.w3.org/2001/XMLSchema#')
export const stsr = namespace('http://ontology.shapething.com/shacl-renderer#')
export const stf = namespace('http://ontology.shapething.com/facet#')
export const ed = namespace('https://editorjs.io/')
export const owl = namespace('http://www.w3.org/2002/07/owl#')
export const faker = namespace('https://fakerjs.dev/')
export const skos = namespace('http://www.w3.org/2004/02/skos/core#')
export const genid = namespace('https://shacl-renderer.shapething.com/.well-known/genid/')
export const foaf = namespace('http://xmlns.com/foaf/0.1/')
export const dbo = namespace('http://dbpedia.org/ontology/')
export const og = namespace('http://ogp.me/ns#')
export const sta = namespace('http://ontology.shapething.com/app#')
export const std = namespace('http://shapething.com/data/')
export const icon = namespace('https://iconify.design')
export const dcat = namespace('http://www.w3.org/ns/dcat#')
/** All prefixes used in Shapething */
export const prefixes: Record<string, string> = Object.fromEntries(
  Object.entries({
    schema,
    rdfs,
    rdf,
    ex,
    dce,
    dct,
    sh,
    dash,
    xsd,
    stsr,
    stf,
    ed,
    owl,
    faker,
    skos,
    foaf,
    dbo,
    og,
    sta,
    std,
    icon,
    dcat
  }).map(([alias, namespace]) => [alias, namespace('').value])
)

const myParser = new ContextParser();
export const context = await myParser.parse({
  '@context': prefixes
});