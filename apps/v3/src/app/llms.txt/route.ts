const content = `# Victor Mutai

> Personal website for Victor Mutai, a Lead Engineer specializing in distributed systems, supply chains, and TypeScript. 
> This site is his portfolio and résumé.
> Full-Stack Software Engineer and Engineering Lead with 10 years of experience designing, building, and deploying production-grade applications using TypeScript, Node.js, and React. Experienced in end-to-end delivery, distributed systems, microservices, cloud infrastructure (AWS and GCP), API integrations, and CI/CD automation. Proven track record of delivering complex software solutions from MVP to production, building reusable developer tools, and collaborating with global engineering teams and external stakeholders. Hands-on experience integrating LLM-powered features into software products, with a strong focus on system reliability, maintainability, and scalable architecture.

## Portfolio

- [Home](https://mutai.dev/): Overview of Victor's experience and selected projects.
- [CV](https://mutai.dev/cv): Detailed work experience, skills, education, and projects.
- [Colophon](https://mutai.dev/colophon): Tools used to build this site.

## Optional

- [Blog](https://blog.mutai.dev/): Victor's writing.
- [GitHub](https://github.com/victorjambo/): Victor's public code.
`;

export function GET(): Response {
  return new Response(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
