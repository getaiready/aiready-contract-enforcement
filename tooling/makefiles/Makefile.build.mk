###############################################################################
# Makefile.build: Build-related targets
###############################################################################
include tooling/makefiles/Makefile.shared.mk

.PHONY: build build-core build-pattern-detect build-skills dev dev-core dev-pattern-detect dev-skills dev-landing dev-platform graph

build: ## Build all packages
	@$(call turbo_run,build,,Building all packages...)
	@$(call log_success,All packages built successfully)

build-skills: ## Build skills package (compiles AGENTS.md from rules)
	@$(call turbo_run,build,@aiready/skills,Building skills)

build-core: ## Build core package only
	@$(call turbo_run,build,@aiready/core,Building core)

build-pattern-detect: ## Build pattern-detect package only
	@$(call turbo_run,build,@aiready/pattern-detect,Building pattern-detect)

dev: ## Start development mode (watch) for all packages (excludes platform)
	@$(call log_step,Starting development mode with watch...)
	@echo "$(CYAN)💡 To start the platform, run: $(GREEN)make dev-platform$(NC)"
	@unset npm_config_loglevel; \
	$(TURBO) run dev --filter=!@aiready/platform --filter=!@aiready/serverlessclaw $(SILENT_TURBO)

dev-core: ## Start development mode (watch) for core package
	@$(call turbo_run,dev,@aiready/core,Starting dev for core)

dev-pattern-detect: ## Start development mode (watch) for pattern-detect package
	@$(call turbo_run,dev,@aiready/pattern-detect,Starting dev for pattern-detect)

dev-skills: ## Build and validate skills rules
	@$(call turbo_run,dev,@aiready/skills,Validating skills)

landing: dev-landing ## Alias for dev-landing
dev-landing: ## Start landing page dev server at http://localhost:8887
	@$(call log_step,Starting landing page dev server...)
	@echo "$(CYAN)Landing page will be available at: $(GREEN)http://localhost:8887$(NC)"
	@$(PNPM) --filter @aiready/landing dev

platform: dev-platform ## Alias for dev-platform
dev-platform: ## Start platform dev server locally (SST dev --stage local)
	@$(call log_step,Starting platform dev server with SST...)
	@echo "$(CYAN)Using AWS profile: $(GREEN)aiready$(NC)"
	@echo "$(CYAN)Platform will be available at: $(GREEN)http://localhost:8888$(NC)"
	@cd apps/platform && \
		[ -f .env.local ] && set -a && . ./.env.local && set +a || true && \
		AWS_PROFILE=aiready $(PNPM) dev

graph: ## Visualize project dependency graph (opens browser)
	@$(call log_step,Starting Nx graph visualization...)
	@echo "$(CYAN)Graph will be available at: $(GREEN)http://127.0.0.1:4211/projects$(NC)"
	@$(PNPM) run graph
