Place the original legacy HTML applications in this folder using the exact filenames below:

- KIA_PAYROLL_BUDGET_ENGINE.html
- Bills-add-pay-260825-1711.html

These files are large, self-contained legacy application bundles. Keeping them here allows the new Vue shell to embed them via iframes at routes:

- /legacy/payroll -> legacy/KIA_PAYROLL_BUDGET_ENGINE.html
- /legacy/bills  -> legacy/Bills-add-pay-260825-1711.html

If you already have the original HTML files, copy them into this folder. Do NOT modify them until a full audit/migration is complete.
