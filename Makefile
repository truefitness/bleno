APPNAME=bleno
VERSION := $(shell cd ./$(APPNAME); git describe --abbrev=0 --tags )
APPDIR=${APPNAME}-${VERSION}
TARNAME=${APPDIR}.orig.tar.gz


LIBS=bluetooth

PREFIX=/usr/local/bin
DESTDIR=
TOPDIR=$(DESTDIR)$(PREFIX)/truetouch/qml/BlueTooth/$(APPNAME)
BINDIR=$(TOPDIR)/build/Release
TMPDIR=debian/tmp

TARGET=./build/Release

DEPLOY=$(INSTALL)/$(APPNAME)/$(BIN)
SRCDIR=bleno/src
all: hci-ble l2cap-ble

show:
	@echo $(VERSION) $(APPDIR)
clean:
	rm -rf $(TMPDIR)
dist-clean: clean
	rm -rf $(APPDIR)
	rm -f $(TARNAME)


hci-ble:	$(SRCDIR)/hci-ble.c
	mkdir -p $(TMPDIR)
	$(CC) $< -l $(LIBS) -o $(TMPDIR)/hci-ble

l2cap-ble:	$(SRCDIR)/l2cap-ble.c
	mkdir -p $(TMPDIR)
	$(CC) $< -l $(LIBS) -o $(TMPDIR)/l2cap-ble

install: all
	mkdir -p $(BINDIR)
	cp -r ./bleno/* $(TOPDIR)
	cp $(TMPDIR)/* $(BINDIR)

tarball:
	@echo copying sourcetree
	@echo version $(VERSION)
	mkdir -p $(APPDIR)
	cp -a ./$(APPNAME) $(APPDIR)
	rm -rf $(APPDIR)/.git	
	cp Makefile $(APPDIR)
	@echo creating tar archive
	tar czf ${TARNAME} ${APPDIR}

.PHONY : clean install dist-clean tarball


