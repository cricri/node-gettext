var testCase = require('nodeunit').testCase,
    Gettext = require("../lib/gettext"),
    fs = require("fs");
    
exports["UTF-8"] = {
    setUp: function (callback) {
        fs.readFile(__dirname+"/utf8.mo", (function(err, body){
            if(err){
                throw err;
            }
            this.g = new Gettext();
            this.g.addTextdomain("et", body);
            callback();
        }).bind(this));
    },
    "Simple string, default domain": function(test){
        test.equal(this.g.gettext("o1"), "t1");
        test.done();
    },
    "Simple string, nonexisting domain": function(test){
        this.g.textdomain("en");
        test.equal(this.g.gettext("o1"), "o1");
        test.done();
    },
    "Simple string, existing domain": function(test){
        this.g.textdomain("et");
        test.equal(this.g.gettext("o1"), "t1");
        test.done();
    },
    "Simple string with special chars": function(test){
        test.equal(this.g.gettext("o3-õäöü"), "t3-žš");
        test.done();
    },
    "dgettext": function(test){
        test.equal(this.g.dgettext("et", "o1"), "t1");
        test.equal(this.g.dgettext("en", "o1"), "o1");
        test.done();
    },
    "ngettext": function(test){
        test.equal(this.g.ngettext("o2-1", "a", 0), "t2-2");
        test.equal(this.g.ngettext("o2-1", "b", 1), "t2-1");
        test.equal(this.g.ngettext("o2-1", "c", 2), "t2-2");
        test.equal(this.g.ngettext("o2-1", "d", 3), "t2-2");
        test.done();
    },
    "dngettext": function(test){
        test.equal(this.g.dngettext("et", "o2-1", "a", 0), "t2-2");
        test.equal(this.g.dngettext("et", "o2-1", "b", 1), "t2-1");
        test.equal(this.g.dngettext("et", "o2-1", "c", 2), "t2-2");
        test.equal(this.g.dngettext("et", "o2-1", "c", 3), "t2-2");
        
        test.equal(this.g.dngettext("en", "o2-1", "a", 0), "a");
        test.equal(this.g.dngettext("en", "o2-1", "a", 1), "o2-1");
        test.equal(this.g.dngettext("en", "o2-1", "a", 2), "a");
        test.equal(this.g.dngettext("en", "o2-1", "a", 3), "a");
        
        test.done();
    },
    "pgettext": function(test){
        test.equal(this.g.pgettext("c1", "co1"), "ct1");
        
        test.equal(this.g.pgettext("c2", "co1"), "co1");
        test.done();
    },
    "dpgettext": function(test){
        test.equal(this.g.dpgettext("et", "c1", "co1"), "ct1");
        test.equal(this.g.dpgettext("et", "c2", "co1"), "co1");
        
        test.equal(this.g.dpgettext("en", "c1", "co1"), "co1");
        test.equal(this.g.dpgettext("en", "c2", "co1"), "co1");
        test.done();
    },
    "npgettext": function(test){
        test.equal(this.g.npgettext("c2", "co2-1", "a", 0), "ct2-2");
        test.equal(this.g.npgettext("c2", "co2-1", "a", 1), "ct2-1");
        test.equal(this.g.npgettext("c2", "co2-1", "a", 2), "ct2-2");
        test.equal(this.g.npgettext("c2", "co2-1", "a", 3), "ct2-2");
        test.done();
    },
    "dnpgettext": function(test){
        test.equal(this.g.dnpgettext("et", "c2", "co2-1", "a", 0), "ct2-2");
        test.equal(this.g.dnpgettext("et", "c2", "co2-1", "a", 1), "ct2-1");
        test.equal(this.g.dnpgettext("et", "c2", "co2-1", "a", 2), "ct2-2");
        test.equal(this.g.dnpgettext("et", "c2", "co2-1", "a", 3), "ct2-2");
        
        test.equal(this.g.dnpgettext("en", "c2", "co2-1", "a", 0), "a");
        test.equal(this.g.dnpgettext("en", "c2", "co2-1", "a", 1), "co2-1");
        test.equal(this.g.dnpgettext("en", "c2", "co2-1", "a", 2), "a");
        test.equal(this.g.dnpgettext("en", "c2", "co2-1", "a", 3), "a");
        test.done();
    }
};

exports["LATIN-13"] = {
    setUp: function (callback) {
        fs.readFile(__dirname+"/latin13.mo", (function(err, body){
            if(err){
                throw err;
            }
            this.g = new Gettext();
            this.g.addTextdomain("et", body);
            callback();
        }).bind(this));
    },
    "Simple string, default domain": function(test){
        test.equal(this.g.gettext("o1"), "t1");
        test.done();
    },
    "Simple string, nonexisting domain": function(test){
        this.g.textdomain("en");
        test.equal(this.g.gettext("o1"), "o1");
        test.done();
    },
    "Simple string, existing domain": function(test){
        this.g.textdomain("et");
        test.equal(this.g.gettext("o1"), "t1");
        test.done();
    },
    "Simple string with special chars": function(test){
        test.equal(this.g.gettext("o3-õäöü"), "t3-žš");
        test.done();
    },
    "dgettext": function(test){
        test.equal(this.g.dgettext("et", "o1"), "t1");
        test.equal(this.g.dgettext("en", "o1"), "o1");
        test.done();
    },
    "ngettext": function(test){
        test.equal(this.g.ngettext("o2-1", "a", 0), "t2-2");
        test.equal(this.g.ngettext("o2-1", "b", 1), "t2-1");
        test.equal(this.g.ngettext("o2-1", "c", 2), "t2-2");
        test.equal(this.g.ngettext("o2-1", "d", 3), "t2-2");
        test.done();
    },
    "dngettext": function(test){
        test.equal(this.g.dngettext("et", "o2-1", "a", 0), "t2-2");
        test.equal(this.g.dngettext("et", "o2-1", "b", 1), "t2-1");
        test.equal(this.g.dngettext("et", "o2-1", "c", 2), "t2-2");
        test.equal(this.g.dngettext("et", "o2-1", "c", 3), "t2-2");
        
        test.equal(this.g.dngettext("en", "o2-1", "a", 0), "a");
        test.equal(this.g.dngettext("en", "o2-1", "a", 1), "o2-1");
        test.equal(this.g.dngettext("en", "o2-1", "a", 2), "a");
        test.equal(this.g.dngettext("en", "o2-1", "a", 3), "a");
        
        test.done();
    },
    "pgettext": function(test){
        test.equal(this.g.pgettext("c1", "co1"), "ct1");
        
        test.equal(this.g.pgettext("c2", "co1"), "co1");
        test.done();
    },
    "dpgettext": function(test){
        test.equal(this.g.dpgettext("et", "c1", "co1"), "ct1");
        test.equal(this.g.dpgettext("et", "c2", "co1"), "co1");
        
        test.equal(this.g.dpgettext("en", "c1", "co1"), "co1");
        test.equal(this.g.dpgettext("en", "c2", "co1"), "co1");
        test.done();
    },
    "npgettext": function(test){
        test.equal(this.g.npgettext("c2", "co2-1", "a", 0), "ct2-2");
        test.equal(this.g.npgettext("c2", "co2-1", "a", 1), "ct2-1");
        test.equal(this.g.npgettext("c2", "co2-1", "a", 2), "ct2-2");
        test.equal(this.g.npgettext("c2", "co2-1", "a", 3), "ct2-2");
        test.done();
    },
    "dnpgettext": function(test){
        test.equal(this.g.dnpgettext("et", "c2", "co2-1", "a", 0), "ct2-2");
        test.equal(this.g.dnpgettext("et", "c2", "co2-1", "a", 1), "ct2-1");
        test.equal(this.g.dnpgettext("et", "c2", "co2-1", "a", 2), "ct2-2");
        test.equal(this.g.dnpgettext("et", "c2", "co2-1", "a", 3), "ct2-2");
        
        test.equal(this.g.dnpgettext("en", "c2", "co2-1", "a", 0), "a");
        test.equal(this.g.dnpgettext("en", "c2", "co2-1", "a", 1), "co2-1");
        test.equal(this.g.dnpgettext("en", "c2", "co2-1", "a", 2), "a");
        test.equal(this.g.dnpgettext("en", "c2", "co2-1", "a", 3), "a");
        test.done();
    }
};

exports["Helpers"] = {
    setUp: function (callback) {
        fs.readFile(__dirname+"/utf8.mo", (function(err, body){
            if(err){
                throw err;
            }
            this.g = new Gettext();
            this.g.addTextdomain("et", body);
            this.g.registerStringHelpers();
            callback();
        }).bind(this));
    },
    "textdomain": function(test){
        "".textdomain("en");
        test.equal(this.g._textdomain, "en");
        "".textdomain("et");
        test.equal(this.g._textdomain, "et");
        test.done();
    },
    "gettext": function(test){
        test.equal("o1".gettext(), "t1");
        test.done();
    },
    "dgettext": function(test){
        test.equal("o1".dgettext("et"), "t1");
        test.equal("o1".dgettext("en"), "o1");
        test.done();
    },
    "ngettext": function(test){
        test.equal("o2-1".ngettext("a", 0), "t2-2");
        test.equal("o2-1".ngettext("b", 1), "t2-1");
        test.equal("o2-1".ngettext("c", 2), "t2-2");
        test.equal("o2-1".ngettext("d", 3), "t2-2");
        test.done();
    },
    "dngettext": function(test){
        test.equal("o2-1".dngettext("et", "a", 0), "t2-2");
        test.equal("o2-1".dngettext("et", "b", 1), "t2-1");
        test.equal("o2-1".dngettext("et", "c", 2), "t2-2");
        test.equal("o2-1".dngettext("et", "d", 3), "t2-2");
        
        test.equal("o2-1".dngettext("en", "a", 0), "a");
        test.equal("o2-1".dngettext("en", "b", 1), "o2-1");
        test.equal("o2-1".dngettext("en", "c", 2), "c");
        test.equal("o2-1".dngettext("en", "d", 3), "d");
        test.done();
    },
    "pgettext": function(test){
        test.equal("co1".pgettext("c1"), "ct1");
        
        test.equal("co1".pgettext("c2"), "co1");
        test.done();
    },
    "dpgettext": function(test){
        test.equal("co1".dpgettext("et", "c1"), "ct1");
        test.equal("co1".dpgettext("et", "c2"), "co1");
        
        test.equal("co1".dpgettext("en", "c1"), "co1");
        test.equal("co1".dpgettext("en", "c2"), "co1");
        test.done();
    },
    "npgettext": function(test){
        test.equal("co2-1".npgettext("c2", "a", 0), "ct2-2");
        test.equal("co2-1".npgettext("c2", "a", 1), "ct2-1");
        test.equal("co2-1".npgettext("c2", "a", 2), "ct2-2");
        test.equal("co2-1".npgettext("c2", "a", 3), "ct2-2");
        test.done();
    },
    "dnpgettext": function(test){
        test.equal("co2-1".dnpgettext("et", "c2", "a", 0), "ct2-2");
        test.equal("co2-1".dnpgettext("et", "c2", "a", 1), "ct2-1");
        test.equal("co2-1".dnpgettext("et", "c2", "a", 2), "ct2-2");
        test.equal("co2-1".dnpgettext("et", "c2", "a", 3), "ct2-2");
        
        test.equal("co2-1".dnpgettext("en", "c2", "a", 0), "a");
        test.equal("co2-1".dnpgettext("en", "c2", "a", 1), "co2-1");
        test.equal("co2-1".dnpgettext("en", "c2", "a", 2), "a");
        test.equal("co2-1".dnpgettext("en", "c2", "a", 3), "a");
        test.done();
    }
}