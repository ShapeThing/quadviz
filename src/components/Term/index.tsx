import type { Term as TermType } from "@rdfjs/types"
import { Icon } from "@iconify/react";
// import './term.css'
import { context as fallbackContext, rdf, xsd } from "../../helpers/namespaces";
// import '@fontsource-variable/roboto/index.css';
// import '@fontsource-variable/source-code-pro/index.css';
import type { JsonLdContextNormalized } from "jsonld-context-parser";
import type { JSX } from "react";

type Props = {
    term: TermType
    context?: JsonLdContextNormalized
    highlight?: boolean
    type?: 'subject' | 'predicate' | 'object'
}

const icons: Record<string, string> = {
    NamedNode: "mdi:link",
    BlankNode: "mdi:format-list-group"
}

const ignoredDatatypes = [
    xsd('string'),
    rdf('langString'),
]

/**
 * A component to display RDF terms (NamedNode, BlankNode, Literal).
 */
export default function Term ({ term, type, context, highlight }: Props): JSX.Element {
    const compactedIri = (context ?? fallbackContext).compactIri(term.value, true)
    let label: any = <span className="value">{term.termType === 'Literal' ? `"${term.value}"` : term.value}</span>

    if (compactedIri !== term.value) {
        const [prefix, local] = compactedIri.split(':')
        label = <><span className="prefix">{prefix}:</span><span className="local">{local}</span></>
    }

    const title = `${term.termType === 'Literal' ? `"${term.value}"${term.language ? `@${term.language}` : term.datatype && !term.datatype.equals(xsd('string')) ? `^^${term.datatype.value}` : ''}` : term.value}`

    return <div className={`term ${highlight ? 'highlight' : ''} ${term.termType} ${type ?? ''}`.trim()} title={title}>
        {term.termType in icons && <Icon icon={icons[term.termType]} />}
        {label}
        {term.termType === 'Literal' && term.language && <span className="language">&nbsp;({term.language})</span>}
        {term.termType === 'Literal' && term.datatype && !ignoredDatatypes.some(datatype => datatype.equals(term.datatype)) && <Term term={term.datatype} />}
    </div>
}