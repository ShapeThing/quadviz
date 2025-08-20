import type { Quad } from "@rdfjs/types";
import Term from "../Term";
// import './triple.css';
import type { JsonLdContextNormalized } from "jsonld-context-parser";
import type { JSX } from "react/jsx-runtime";

type Props = {
    quad: Quad
    context?: JsonLdContextNormalized
}

/**
 * A component to display RDF triples (subject, predicate, object).
 */
export default function Triple ({ quad, context }: Props): JSX.Element {
    const { subject, predicate, object } = quad;
    return (
        <div className="triple">
            <Term term={subject} type="subject" context={context} />
            <Term term={predicate} type="predicate" context={context} />
            <Term term={object} type="object" context={context} />
        </div>
    );
}
