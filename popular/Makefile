#npm パラメータ OS(グローバル)に入れたい時は-gをつける
NPMCMD=npm install
NPMUNCMD=npm uninstall -g
# GOBUILD=$(GOCMD) build
# GOCLEAN=$(GOCMD) clean
# GOTEST=$(GOCMD) test
# GOGET=$(GOCMD) get
# GOMOD=$(GOCMD) mod
# BINARY_NAME={popular}

all: deps
# build:
# 	# $(GOBUILD) -o $(BINARY_NAME) -v
# test:
# 	$(GOTEST) -v ./...
# clean:
# 	$(GOCLEAN)
# 	rm -f $(BINARY_NAME)
# 	$(GOMOD) tidy -v
# run:
# 	$(GOBUILD) -o $(BINARY_NAME) -v
# 	./$(BINARY_NAME)
deps:
	$(NPMCMD) -g @vue/cli
	$(NPMCMD) --save vue-router
	$(NPMCMD) --save vuex
	yarn add @chakra-ui/vue @emotion/css
	vue add vuetify
	$(NPMCMD) firebase
