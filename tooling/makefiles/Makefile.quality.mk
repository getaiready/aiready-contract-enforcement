###############################################################################
# Makefile.quality: Linting, formatting, and type-checking targets
###############################################################################
include tooling/makefiles/Makefile.shared.mk

.PHONY: \
	check-all fix \
	lint lint-fix format format-check \
	type-check type-check-all

# Dynamically generate leaf targets from QUALITY_SPOKES
# NOTE: Do NOT add these to .PHONY — GNU Make 3.81 breaks pattern rules when
# combined with .PHONY, causing "Nothing to be done" instead of running the recipe.
FORMAT_LEAF := $(foreach spoke,$(QUALITY_SPOKES),format-check-$(spoke))
FORMAT_FIX_LEAF := $(foreach spoke,$(QUALITY_SPOKES),format-$(spoke))
LINT_LEAF := $(foreach spoke,$(QUALITY_SPOKES),lint-$(spoke))
LINT_FIX_LEAF := $(foreach spoke,$(QUALITY_SPOKES),lint-fix-$(spoke))
TYPE_LEAF := $(foreach spoke,$(QUALITY_SPOKES),type-check-$(spoke))

# Combined quality checks
check-all: ## Run format-check, lint, and type-check across the repo
	@$(call turbo_run,lint format-check type-check,,Running all quality checks...)
	@$(call log_success,All checks passed)

check: check-all ## Alias for check-all

# Combined quality fixes
fix: ## Run ESLint --fix and Prettier format
	@$(call turbo_run,lint:fix format,,Applying all quality fixes...)
	@$(call log_success,Codebase fixed and formatted)

# Lint targets
lint: ## Run ESLint on all packages
	@$(call turbo_run,lint,,Running ESLint on all packages...)
	@$(call log_success,All lint checks passed.)

lint-%:
	@$(call turbo_run,lint,@aiready/$*,Linting $*)

# Lint fixes
lint-fix: ## Run ESLint --fix on all packages
	@$(call turbo_run,lint:fix,,Auto-fixing lint issues on all packages...)
	@$(call log_success,All lint fixes completed)

lint-fix-%:
	@$(call turbo_run,lint:fix,@aiready/$*,Auto-fixing lint issues ($*))

# Format checks
format-check: ## Check formatting across all packages
	@$(call turbo_run,format-check,,Checking formatting with Prettier...)
	@$(call log_success,Formatting checks passed)

format-check-%:
	@$(call turbo_run,format-check,@aiready/$*,Checking formatting $*)

# Format fixes
format: ## Format all packages with Prettier
	@$(call turbo_run,format,,Formatting code with Prettier...)
	@$(call log_success,All packages formatted)

format-%:
	@$(call turbo_run,format,@aiready/$*,Formatting $*)

# Type checking
type-check: ## Run TypeScript type-check on all packages
	@$(call turbo_run,type-check,,Type-checking all packages...)
	@$(call log_success,All type checks passed)

type-check-%:
	@$(call turbo_run,type-check,@aiready/$*,Type-checking $*)

type-check-all: type-check ## Alias for type-check
