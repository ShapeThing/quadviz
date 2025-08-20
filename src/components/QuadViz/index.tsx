import type { Quad, Quad_Subject, Term as TermType } from "@rdfjs/types";
import "./quad-viz.css";
import type { JsonLdContextNormalized } from "jsonld-context-parser";
import Term from "../Term";
import { Fragment } from "react/jsx-runtime";

type Props = {
  subject: Quad_Subject;
  quads: Quad[];
  context?: JsonLdContextNormalized;
  highlights?: Highlights;
};

type LevelProps = {
  subject: Quad_Subject;
  quads: Quad[];
  context?: JsonLdContextNormalized;
  highlights?: Highlights;
};

type Highlights = {
  quads?: Quad[];
  terms?: TermType[];
};

function QuadVizLevel({ subject, quads, context, highlights }: LevelProps) {
  const subjectQuads = quads.filter((quad) => quad.subject.equals(subject));

  return (
    <div className="quad-viz-level">
      {subjectQuads.map((quad: Quad, index: number) => {
        const { subject, predicate, object } = quad;

        const isHighlighted = highlights?.quads?.some((hQuad) =>
          hQuad.equals(quad)
        );

        const subjectHighlighted = highlights?.quads?.some((hQuad) =>
          hQuad.subject.equals(subject)
        ) || highlights?.quads?.some((hQuad) =>
          hQuad.object.equals(subject)
        ) || highlights?.terms?.some((hTerm) =>
          hTerm.equals(subject)
        )
        const predicateHighlighted = highlights?.terms?.some((hTerm) =>
          hTerm.equals(predicate)
        );
        const objectHighlighted = highlights?.terms?.some((hTerm) =>
          hTerm.equals(object)
        );

        return (
          <Fragment key={JSON.stringify(quad)}>
            {index === 0 ? (
              <div className="standalone-subject">
                <Term
                  highlight={isHighlighted || subjectHighlighted}
                  term={subject}
                  type="subject"
                  context={context}
                />
              </div>
            ) : null}
            <div className="triple">
              <Term
                highlight={isHighlighted || predicateHighlighted}
                term={predicate}
                type="predicate"
                context={context}
              />
              {object.termType === "BlankNode" ? (
                <QuadVizLevel
                  subject={object}
                  quads={quads}
                  context={context}
                  highlights={highlights}
                />
              ) : (
                <Term
                  highlight={isHighlighted || objectHighlighted}
                  term={object}
                  type="object"
                  context={context}
                />
              )}
            </div>
          </Fragment>
        );
      })}
    </div>
  );
}

export default function QuadViz({
  quads,
  subject,
  context,
  highlights,
}: Props) {
  return (
    <div className={`quad-viz ${highlights ? "has-highlights" : ""}`}>
      <QuadVizLevel
        subject={subject}
        quads={quads}
        context={context}
        highlights={highlights}
      />
    </div>
  );
}
