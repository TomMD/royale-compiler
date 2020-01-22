/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * MyInitialView
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('MyInitialView');

goog.require('org.apache.royale.core.View');
goog.require('org.apache.royale.html.Label');
goog.require('org.apache.royale.binding.SimpleBinding');
goog.require('org.apache.royale.html.TextButton');
goog.require('org.apache.royale.html.List');
goog.require('org.apache.royale.binding.ConstantBinding');
goog.require('org.apache.royale.html.TextArea');
goog.require('org.apache.royale.html.TextInput');
goog.require('org.apache.royale.html.CheckBox');
goog.require('org.apache.royale.html.RadioButton');
goog.require('org.apache.royale.html.DropDownList');
goog.require('org.apache.royale.html.ComboBox');
goog.require('org.apache.royale.events.CustomEvent');
goog.require('org.apache.royale.events.Event');
goog.require('org.apache.royale.events.MouseEvent');
goog.require('org.apache.royale.utils.Timer');



/**
 * @constructor
 * @extends {org.apache.royale.core.View}
 */
MyInitialView = function() {
  MyInitialView.base(this, 'constructor');
  
  /**
   * @private
   * @type {org.apache.royale.html.Label}
   */
  this.lbl_;
  
  /**
   * @private
   * @type {org.apache.royale.binding.SimpleBinding}
   */
  this.$ID0_;
  
  /**
   * @private
   * @type {org.apache.royale.html.TextButton}
   */
  this.$ID1_;
  
  /**
   * @private
   * @type {org.apache.royale.html.TextButton}
   */
  this.$ID2_;
  
  /**
   * @private
   * @type {org.apache.royale.html.Label}
   */
  this.timerLabel_;
  
  /**
   * @private
   * @type {org.apache.royale.html.List}
   */
  this.cityList_;
  
  /**
   * @private
   * @type {org.apache.royale.binding.ConstantBinding}
   */
  this.$ID3_;
  
  /**
   * @private
   * @type {org.apache.royale.html.TextArea}
   */
  this.$ID5_;
  
  /**
   * @private
   * @type {org.apache.royale.binding.SimpleBinding}
   */
  this.$ID4_;
  
  /**
   * @private
   * @type {org.apache.royale.html.TextInput}
   */
  this.input_;
  
  /**
   * @private
   * @type {org.apache.royale.html.TextButton}
   */
  this.$ID6_;
  
  /**
   * @private
   * @type {org.apache.royale.html.CheckBox}
   */
  this.checkbox_;
  
  /**
   * @private
   * @type {org.apache.royale.html.RadioButton}
   */
  this.$ID7_;
  
  /**
   * @private
   * @type {org.apache.royale.html.RadioButton}
   */
  this.$ID8_;
  
  /**
   * @private
   * @type {org.apache.royale.html.RadioButton}
   */
  this.$ID9_;
  
  /**
   * @private
   * @type {org.apache.royale.html.RadioButton}
   */
  this.$ID10_;
  
  /**
   * @private
   * @type {org.apache.royale.html.RadioButton}
   */
  this.$ID11_;
  
  /**
   * @private
   * @type {org.apache.royale.html.RadioButton}
   */
  this.$ID12_;
  
  /**
   * @private
   * @type {org.apache.royale.html.DropDownList}
   */
  this.list_;
  
  /**
   * @private
   * @type {org.apache.royale.binding.ConstantBinding}
   */
  this.$ID13_;
  
  /**
   * @private
   * @type {org.apache.royale.html.TextButton}
   */
  this.$ID14_;
  
  /**
   * @private
   * @type {org.apache.royale.html.ComboBox}
   */
  this.comboBox_;
  
  /**
   * @private
   * @type {org.apache.royale.binding.ConstantBinding}
   */
  this.$ID15_;
  
  /**
   * @private
   * @type {Array}
   */
  this.mxmldd;
  
  /**
   * @private
   * @type {Array}
   */
  this.mxmldp;
};
goog.inherits(MyInitialView, org.apache.royale.core.View);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('MyInitialView', MyInitialView);



/**
 * @private
 * @type {org.apache.royale.utils.Timer}
 */
MyInitialView.prototype.timer = null;


;


;


;


;


/**
 * @export
 */
MyInitialView.prototype.startTimer = function() {
  this.timer = new org.apache.royale.utils.Timer(1000);
  this.timer.addEventListener('timer', org.apache.royale.utils.Language.closure(this.timerHandler, this, 'timerHandler'));
  this.timer.start();
};


/**
 * @export
 * @param {org.apache.royale.events.Event} event
 */
MyInitialView.prototype.timerHandler = function(event) {
  this.timerLabel.text = this.timer.currentCount.toString();
};





MyInitialView.prototype.get__symbol = function() {
  return org.apache.royale.utils.Language.as(this.list.selectedItem, String);
};


MyInitialView.prototype.get__city = function() {
  return org.apache.royale.utils.Language.as(this.cityList.selectedItem, String);
};


MyInitialView.prototype.get__inputText = function() {
  return this.input.text;
};


MyInitialView.prototype.get__comboBoxValue = function() {
  return String(this.comboBox.selectedItem);
};


Object.defineProperties(MyInitialView.prototype, /** @lends {MyInitialView.prototype} */ {
/**
  * @export
  * @type {string} */
symbol: {
get: MyInitialView.prototype.get__symbol},
/**
  * @export
  * @type {string} */
city: {
get: MyInitialView.prototype.get__city},
/**
  * @export
  * @type {string} */
inputText: {
get: MyInitialView.prototype.get__inputText},
/**
  * @export
  * @type {string} */
comboBoxValue: {
get: MyInitialView.prototype.get__comboBoxValue}}
);/**
 * @export
 * @param {org.apache.royale.events.MouseEvent} event
 */
MyInitialView.prototype.$EH0 = function(event)
{
  this.startTimer();
};


/**
 * @export
 * @param {org.apache.royale.events.MouseEvent} event
 */
MyInitialView.prototype.$EH1 = function(event)
{
  this.timer.removeEventListener('timer', org.apache.royale.utils.Language.closure(this.timerHandler, this, 'timerHandler'));
  this.timer.stop();
};


/**
 * @export
 * @param {org.apache.royale.events.Event} event
 */
MyInitialView.prototype.$EH2 = function(event)
{
  this.dispatchEvent(new org.apache.royale.events.CustomEvent('cityListChanged'));
};


/**
 * @export
 * @param {org.apache.royale.events.MouseEvent} event
 */
MyInitialView.prototype.$EH3 = function(event)
{
  this.dispatchEvent(new org.apache.royale.events.CustomEvent('transferClicked'));
};


/**
 * @export
 * @param {org.apache.royale.events.Event} event
 */
MyInitialView.prototype.$EH4 = function(event)
{
  this.dispatchEvent(new org.apache.royale.events.CustomEvent('listChanged'));
};


/**
 * @export
 * @param {org.apache.royale.events.MouseEvent} event
 */
MyInitialView.prototype.$EH5 = function(event)
{
  this.dispatchEvent(new org.apache.royale.events.CustomEvent('buttonClicked'));
};


/**
 * @export
 * @param {org.apache.royale.events.Event} event
 */
MyInitialView.prototype.$EH6 = function(event)
{
  this.dispatchEvent(new org.apache.royale.events.CustomEvent('comboBoxChanged'));
};


Object.defineProperties(MyInitialView.prototype, /** @lends {MyInitialView.prototype} */ {
/** @export */
    lbl: {
    /** @this {MyInitialView} */
    get: function() {
      return this.lbl_;
    },
    /** @this {MyInitialView} */
    set: function(value) {
      if (value != this.lbl_) {
        this.lbl_ = value;
        this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(this, 'lbl', null, value));
      }
    }
  },
  /** @export */
    timerLabel: {
    /** @this {MyInitialView} */
    get: function() {
      return this.timerLabel_;
    },
    /** @this {MyInitialView} */
    set: function(value) {
      if (value != this.timerLabel_) {
        this.timerLabel_ = value;
        this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(this, 'timerLabel', null, value));
      }
    }
  },
  /** @export */
    cityList: {
    /** @this {MyInitialView} */
    get: function() {
      return this.cityList_;
    },
    /** @this {MyInitialView} */
    set: function(value) {
      if (value != this.cityList_) {
        this.cityList_ = value;
        this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(this, 'cityList', null, value));
      }
    }
  },
  /** @export */
    input: {
    /** @this {MyInitialView} */
    get: function() {
      return this.input_;
    },
    /** @this {MyInitialView} */
    set: function(value) {
      if (value != this.input_) {
        this.input_ = value;
        this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(this, 'input', null, value));
      }
    }
  },
  /** @export */
    checkbox: {
    /** @this {MyInitialView} */
    get: function() {
      return this.checkbox_;
    },
    /** @this {MyInitialView} */
    set: function(value) {
      if (value != this.checkbox_) {
        this.checkbox_ = value;
        this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(this, 'checkbox', null, value));
      }
    }
  },
  /** @export */
    list: {
    /** @this {MyInitialView} */
    get: function() {
      return this.list_;
    },
    /** @this {MyInitialView} */
    set: function(value) {
      if (value != this.list_) {
        this.list_ = value;
        this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(this, 'list', null, value));
      }
    }
  },
  /** @export */
    comboBox: {
    /** @this {MyInitialView} */
    get: function() {
      return this.comboBox_;
    },
    /** @this {MyInitialView} */
    set: function(value) {
      if (value != this.comboBox_) {
        this.comboBox_ = value;
        this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(this, 'comboBox', null, value));
      }
    }
  },
  'MXMLDescriptor': {
    /** @this {MyInitialView} */
    get: function() {
      {
        if (this.mxmldd == undefined)
        {
          /** @type {Array} */
          var arr = MyInitialView.superClass_.get__MXMLDescriptor.apply(this);
          /** @type {Array} */
          var data = [
      org.apache.royale.html.Label,
4,
'id',
true,
'lbl',
goog.reflect.objectProperty('x', this),
true,
100,
goog.reflect.objectProperty('y', this),
true,
25,
goog.reflect.objectProperty('beads', this),
null, [org.apache.royale.binding.SimpleBinding, 5, '_id', true, '$ID0', goog.reflect.objectProperty('eventName', this), true, 'labelTextChanged', goog.reflect.objectProperty('sourceID', this), true, 'applicationModel', goog.reflect.objectProperty('sourcePropertyName', this), true, 'labelText', goog.reflect.objectProperty('destinationPropertyName', this), true, 'text', 0, 0, null],
0,
0,
null,
org.apache.royale.html.TextButton,
4,
'_id',
true,
'$ID1',
goog.reflect.objectProperty('text', this),
true,
'Let\'s Start Timer',
goog.reflect.objectProperty('x', this),
true,
100,
goog.reflect.objectProperty('y', this),
true,
75,
0,
1,
'click',
this.$EH0,
null,
org.apache.royale.html.TextButton,
4,
'_id',
true,
'$ID2',
goog.reflect.objectProperty('text', this),
true,
'Stop Timer',
goog.reflect.objectProperty('x', this),
true,
100,
goog.reflect.objectProperty('y', this),
true,
100,
0,
1,
'click',
this.$EH1,
null,
org.apache.royale.html.Label,
3,
'id',
true,
'timerLabel',
goog.reflect.objectProperty('x', this),
true,
100,
goog.reflect.objectProperty('y', this),
true,
125,
0,
0,
null,
org.apache.royale.html.List,
6,
'id',
true,
'cityList',
goog.reflect.objectProperty('x', this),
true,
200,
goog.reflect.objectProperty('y', this),
true,
75,
goog.reflect.objectProperty('width', this),
true,
100,
goog.reflect.objectProperty('height', this),
true,
75,
goog.reflect.objectProperty('beads', this),
null, [org.apache.royale.binding.ConstantBinding, 4, '_id', true, '$ID3', goog.reflect.objectProperty('sourceID', this), true, 'applicationModel', goog.reflect.objectProperty('sourcePropertyName', this), true, 'cities', goog.reflect.objectProperty('destinationPropertyName', this), true, 'dataProvider', 0, 0, null],
0,
1,
'change',
this.$EH2,
null,
org.apache.royale.html.TextArea,
6,
'_id',
true,
'$ID5',
goog.reflect.objectProperty('x', this),
true,
320,
goog.reflect.objectProperty('y', this),
true,
25,
goog.reflect.objectProperty('width', this),
true,
150,
goog.reflect.objectProperty('height', this),
true,
75,
goog.reflect.objectProperty('beads', this),
null, [org.apache.royale.binding.SimpleBinding, 5, '_id', true, '$ID4', goog.reflect.objectProperty('eventName', this), true, 'labelTextChanged', goog.reflect.objectProperty('sourceID', this), true, 'applicationModel', goog.reflect.objectProperty('sourcePropertyName', this), true, 'labelText', goog.reflect.objectProperty('destinationPropertyName', this), true, 'text', 0, 0, null],
0,
0,
null,
org.apache.royale.html.TextInput,
3,
'id',
true,
'input',
goog.reflect.objectProperty('x', this),
true,
320,
goog.reflect.objectProperty('y', this),
true,
110,
0,
0,
null,
org.apache.royale.html.TextButton,
4,
'_id',
true,
'$ID6',
goog.reflect.objectProperty('text', this),
true,
'Transfer',
goog.reflect.objectProperty('x', this),
true,
320,
goog.reflect.objectProperty('y', this),
true,
138,
0,
1,
'click',
this.$EH3,
null,
org.apache.royale.html.CheckBox,
4,
'id',
true,
'checkbox',
goog.reflect.objectProperty('x', this),
true,
320,
goog.reflect.objectProperty('y', this),
true,
170,
goog.reflect.objectProperty('text', this),
true,
'Check Me',
0,
0,
null,
org.apache.royale.html.RadioButton,
6,
'_id',
true,
'$ID7',
goog.reflect.objectProperty('groupName', this),
true,
'group1',
goog.reflect.objectProperty('text', this),
true,
'Apples',
goog.reflect.objectProperty('value', this),
true,
0,
goog.reflect.objectProperty('x', this),
true,
100,
goog.reflect.objectProperty('y', this),
true,
150,
0,
0,
null,
org.apache.royale.html.RadioButton,
7,
'_id',
true,
'$ID8',
goog.reflect.objectProperty('groupName', this),
true,
'group1',
goog.reflect.objectProperty('text', this),
true,
'Oranges',
goog.reflect.objectProperty('value', this),
true,
1,
goog.reflect.objectProperty('x', this),
true,
100,
goog.reflect.objectProperty('y', this),
true,
170,
goog.reflect.objectProperty('selected', this),
true,
true,
0,
0,
null,
org.apache.royale.html.RadioButton,
6,
'_id',
true,
'$ID9',
goog.reflect.objectProperty('groupName', this),
true,
'group1',
goog.reflect.objectProperty('text', this),
true,
'Grapes',
goog.reflect.objectProperty('value', this),
true,
2,
goog.reflect.objectProperty('x', this),
true,
100,
goog.reflect.objectProperty('y', this),
true,
190,
0,
0,
null,
org.apache.royale.html.RadioButton,
7,
'_id',
true,
'$ID10',
goog.reflect.objectProperty('groupName', this),
true,
'group2',
goog.reflect.objectProperty('text', this),
true,
'Red',
goog.reflect.objectProperty('value', this),
true,
16711680,
goog.reflect.objectProperty('x', this),
true,
100,
goog.reflect.objectProperty('y', this),
true,
250,
goog.reflect.objectProperty('selected', this),
true,
true,
0,
0,
null,
org.apache.royale.html.RadioButton,
6,
'_id',
true,
'$ID11',
goog.reflect.objectProperty('groupName', this),
true,
'group2',
goog.reflect.objectProperty('text', this),
true,
'Green',
goog.reflect.objectProperty('value', this),
true,
32768,
goog.reflect.objectProperty('x', this),
true,
100,
goog.reflect.objectProperty('y', this),
true,
270,
0,
0,
null,
org.apache.royale.html.RadioButton,
6,
'_id',
true,
'$ID12',
goog.reflect.objectProperty('groupName', this),
true,
'group2',
goog.reflect.objectProperty('text', this),
true,
'Blue',
goog.reflect.objectProperty('value', this),
true,
255,
goog.reflect.objectProperty('x', this),
true,
100,
goog.reflect.objectProperty('y', this),
true,
290,
0,
0,
null,
org.apache.royale.html.DropDownList,
6,
'id',
true,
'list',
goog.reflect.objectProperty('x', this),
true,
200,
goog.reflect.objectProperty('y', this),
true,
200,
goog.reflect.objectProperty('width', this),
true,
100,
goog.reflect.objectProperty('height', this),
true,
24,
goog.reflect.objectProperty('beads', this),
null, [org.apache.royale.binding.ConstantBinding, 4, '_id', true, '$ID13', goog.reflect.objectProperty('sourceID', this), true, 'applicationModel', goog.reflect.objectProperty('sourcePropertyName', this), true, 'strings', goog.reflect.objectProperty('destinationPropertyName', this), true, 'dataProvider', 0, 0, null],
0,
1,
'change',
this.$EH4,
null,
org.apache.royale.html.TextButton,
4,
'_id',
true,
'$ID14',
goog.reflect.objectProperty('text', this),
true,
'OK',
goog.reflect.objectProperty('x', this),
true,
200,
goog.reflect.objectProperty('y', this),
true,
230,
0,
1,
'click',
this.$EH5,
null,
org.apache.royale.html.ComboBox,
5,
'id',
true,
'comboBox',
goog.reflect.objectProperty('x', this),
true,
320,
goog.reflect.objectProperty('y', this),
true,
200,
goog.reflect.objectProperty('width', this),
true,
100,
goog.reflect.objectProperty('beads', this),
null, [org.apache.royale.binding.ConstantBinding, 4, '_id', true, '$ID15', goog.reflect.objectProperty('sourceID', this), true, 'applicationModel', goog.reflect.objectProperty('sourcePropertyName', this), true, 'cities', goog.reflect.objectProperty('destinationPropertyName', this), true, 'dataProvider', 0, 0, null],
0,
1,
'change',
this.$EH6,
null
      ];
        
          if (arr)
            this.mxmldd = arr.concat(data);
          else
            this.mxmldd = data;
        }
        return this.mxmldd;
      }
      }
    }
  });
  /**
   * Metadata
   *
   * @type {Object.<string, Array.<Object>>}
   */
  MyInitialView.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'MyInitialView', qName: 'MyInitialView', kind: 'class'  }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
MyInitialView.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'symbol': { type: 'String', access: 'readonly', declaredBy: 'MyInitialView'},
        'city': { type: 'String', access: 'readonly', declaredBy: 'MyInitialView'},
        'inputText': { type: 'String', access: 'readonly', declaredBy: 'MyInitialView'},
        'comboBoxValue': { type: 'String', access: 'readonly', declaredBy: 'MyInitialView'},
        'lbl': { type: 'org.apache.royale.html.Label', access: 'readwrite', declaredBy: 'MyInitialView'},
        'timerLabel': { type: 'org.apache.royale.html.Label', access: 'readwrite', declaredBy: 'MyInitialView'},
        'cityList': { type: 'org.apache.royale.html.List', access: 'readwrite', declaredBy: 'MyInitialView'},
        'input': { type: 'org.apache.royale.html.TextInput', access: 'readwrite', declaredBy: 'MyInitialView'},
        'checkbox': { type: 'org.apache.royale.html.CheckBox', access: 'readwrite', declaredBy: 'MyInitialView'},
        'list': { type: 'org.apache.royale.html.DropDownList', access: 'readwrite', declaredBy: 'MyInitialView'},
        'comboBox': { type: 'org.apache.royale.html.ComboBox', access: 'readwrite', declaredBy: 'MyInitialView'}
      };
    },
    methods: function () {
      return {
        'startTimer': { type: 'void', declaredBy: 'MyInitialView'},
        'timerHandler': { type: 'void', declaredBy: 'MyInitialView', parameters: function () { return [ 'org.apache.royale.events.Event', false ]; }},
        'MyInitialView': { type: '', declaredBy: 'MyInitialView'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
MyInitialView.prototype.ROYALE_COMPILE_FLAGS = 9;

  
  