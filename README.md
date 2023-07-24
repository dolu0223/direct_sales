# gcde-dataform
Dataform workflow for gcde

## Project organization
**definitions**
- where you define your individual data transformation objects
- **/sources**
    - where you define transformations on your data sources
- **/staging**
    - where you define intermediary datasets that are only used within your Dataform project
- **/reporting**
    - where you define datasets that represent entities and proceses relevant to your business and will be consumed by downstream users.

**includes**
- where you reuse and share common code snippets across multiple data transformation objects
