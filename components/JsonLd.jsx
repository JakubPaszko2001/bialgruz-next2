// Wstrzykuje dane strukturalne (schema.org) do <head> jako JSON-LD.
// Renderowany po stronie serwera — Google odczyta go bez wykonywania JS.
export default function JsonLd({ data }) {
  const payload = Array.isArray(data) ? data : [data];
  // Łączymy w jeden graf @graph, co jest zalecane przez Google przy wielu schematach.
  const graph = {
    "@context": "https://schema.org",
    "@graph": payload.map(({ "@context": _ctx, ...rest }) => rest),
  };
  return (
    <script
      type="application/ld+json"
      // JSON.stringify + bezpieczne escapowanie </script>
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(graph).replace(/</g, "\\u003c"),
      }}
    />
  );
}
