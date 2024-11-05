
gdjs.evtsExt__ButtonStates__ButtonObjectEffects = gdjs.evtsExt__ButtonStates__ButtonObjectEffects || {};

/**
 * Behavior generated from Button object effects
 */
gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects = class ButtonObjectEffects extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.ButtonFSM = behaviorData.ButtonFSM !== undefined ? behaviorData.ButtonFSM : "";
    this._behaviorData.Effect = behaviorData.Effect !== undefined ? behaviorData.Effect : "";
    this._behaviorData.IdleEffect = behaviorData.IdleEffect !== undefined ? behaviorData.IdleEffect : "";
    this._behaviorData.FocusedEffect = behaviorData.FocusedEffect !== undefined ? behaviorData.FocusedEffect : "";
    this._behaviorData.PressedEffect = behaviorData.PressedEffect !== undefined ? behaviorData.PressedEffect : "";
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.ButtonFSM !== newBehaviorData.ButtonFSM)
      this._behaviorData.ButtonFSM = newBehaviorData.ButtonFSM;
    if (oldBehaviorData.Effect !== newBehaviorData.Effect)
      this._behaviorData.Effect = newBehaviorData.Effect;
    if (oldBehaviorData.IdleEffect !== newBehaviorData.IdleEffect)
      this._behaviorData.IdleEffect = newBehaviorData.IdleEffect;
    if (oldBehaviorData.FocusedEffect !== newBehaviorData.FocusedEffect)
      this._behaviorData.FocusedEffect = newBehaviorData.FocusedEffect;
    if (oldBehaviorData.PressedEffect !== newBehaviorData.PressedEffect)
      this._behaviorData.PressedEffect = newBehaviorData.PressedEffect;

    return true;
  }

  // Network sync:
  getNetworkSyncData() {
    return {
      ...super.getNetworkSyncData(),
      props: {
        
    ButtonFSM: this._behaviorData.ButtonFSM,
    Effect: this._behaviorData.Effect,
    IdleEffect: this._behaviorData.IdleEffect,
    FocusedEffect: this._behaviorData.FocusedEffect,
    PressedEffect: this._behaviorData.PressedEffect,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData) {
    super.updateFromNetworkSyncData(networkSyncData);
    
    if (networkSyncData.props.ButtonFSM !== undefined)
      this._behaviorData.ButtonFSM = networkSyncData.props.ButtonFSM;
    if (networkSyncData.props.Effect !== undefined)
      this._behaviorData.Effect = networkSyncData.props.Effect;
    if (networkSyncData.props.IdleEffect !== undefined)
      this._behaviorData.IdleEffect = networkSyncData.props.IdleEffect;
    if (networkSyncData.props.FocusedEffect !== undefined)
      this._behaviorData.FocusedEffect = networkSyncData.props.FocusedEffect;
    if (networkSyncData.props.PressedEffect !== undefined)
      this._behaviorData.PressedEffect = networkSyncData.props.PressedEffect;
  }

  // Properties:
  
  _getButtonFSM() {
    return this._behaviorData.ButtonFSM !== undefined ? this._behaviorData.ButtonFSM : "";
  }
  _setButtonFSM(newValue) {
    this._behaviorData.ButtonFSM = newValue;
  }
  _getEffect() {
    return this._behaviorData.Effect !== undefined ? this._behaviorData.Effect : "";
  }
  _setEffect(newValue) {
    this._behaviorData.Effect = newValue;
  }
  _getIdleEffect() {
    return this._behaviorData.IdleEffect !== undefined ? this._behaviorData.IdleEffect : "";
  }
  _setIdleEffect(newValue) {
    this._behaviorData.IdleEffect = newValue;
  }
  _getFocusedEffect() {
    return this._behaviorData.FocusedEffect !== undefined ? this._behaviorData.FocusedEffect : "";
  }
  _setFocusedEffect(newValue) {
    this._behaviorData.FocusedEffect = newValue;
  }
  _getPressedEffect() {
    return this._behaviorData.PressedEffect !== undefined ? this._behaviorData.PressedEffect : "";
  }
  _setPressedEffect(newValue) {
    this._behaviorData.PressedEffect = newValue;
  }
}

/**
 * Shared data generated from Button object effects
 */
gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.SharedData = class ButtonObjectEffectsSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._ButtonStates_ButtonObjectEffectsSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._ButtonStates_ButtonObjectEffectsSharedData = new gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.SharedData(
      initialData
    );
  }
  return instanceContainer._ButtonStates_ButtonObjectEffectsSharedData;
}

// Methods:
gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.onCreatedContext = {};
gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.onCreatedContext.GDObjectObjects2= [];


gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Effect")).enableEffect((gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIdleEffect()), true);
}
}{for(var i = 0, len = gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Effect")).enableEffect((gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFocusedEffect()), false);
}
}{for(var i = 0, len = gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Effect")).enableEffect((gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPressedEffect()), false);
}
}}

}


};

gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "ButtonFSM": this._getButtonFSM()
, "Effect": this._getEffect()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ButtonStates"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ButtonStates"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.onCreatedContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.doStepPreEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.doStepPreEventsContext.GDObjectObjects3= [];


gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.doStepPreEventsContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Effect")).enableEffect((gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIdleEffect()), false);
}
}{for(var i = 0, len = gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Effect")).enableEffect((gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFocusedEffect()), false);
}
}{for(var i = 0, len = gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Effect")).enableEffect((gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPressedEffect()), false);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.doStepPreEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIdleEffect() != "" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("ButtonFSM")).IsIdle((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Effect")).enableEffect((gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIdleEffect()), true);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.doStepPreEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFocusedEffect() != "" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("ButtonFSM")).IsFocused((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Effect")).enableEffect((gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFocusedEffect()), true);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPressedEffect() != "" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("ButtonFSM")).IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Effect")).enableEffect((gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPressedEffect()), true);
}
}}

}


};gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "ButtonFSM": this._getButtonFSM()
, "Effect": this._getEffect()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ButtonStates"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ButtonStates"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;


return;
}
gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.IdleEffectContext = {};
gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.IdleEffectContext.GDObjectObjects1= [];
gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.IdleEffectContext.GDObjectObjects2= [];


gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.IdleEffectContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.IdleEffectContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.IdleEffectContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.IdleEffectContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIdleEffect()); }}}

}


};

gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.IdleEffect = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "ButtonFSM": this._getButtonFSM()
, "Effect": this._getEffect()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ButtonStates"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ButtonStates"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.IdleEffectContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.IdleEffectContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.IdleEffectContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.IdleEffectContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.IdleEffectContext.GDObjectObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.SetIdleEffectContext = {};
gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.SetIdleEffectContext.GDObjectObjects1= [];
gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.SetIdleEffectContext.GDObjectObjects2= [];


gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.SetIdleEffectContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.SetIdleEffectContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.SetIdleEffectContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.SetIdleEffectContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIdleEffect((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Value") : ""));
}
}}

}


};

gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.SetIdleEffect = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "ButtonFSM": this._getButtonFSM()
, "Effect": this._getEffect()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ButtonStates"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ButtonStates"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.SetIdleEffectContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.SetIdleEffectContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.SetIdleEffectContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.SetIdleEffectContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.SetIdleEffectContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.FocusedEffectContext = {};
gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.FocusedEffectContext.GDObjectObjects1= [];
gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.FocusedEffectContext.GDObjectObjects2= [];


gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.FocusedEffectContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.FocusedEffectContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.FocusedEffectContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.FocusedEffectContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFocusedEffect()); }}}

}


};

gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.FocusedEffect = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "ButtonFSM": this._getButtonFSM()
, "Effect": this._getEffect()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ButtonStates"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ButtonStates"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.FocusedEffectContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.FocusedEffectContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.FocusedEffectContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.FocusedEffectContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.FocusedEffectContext.GDObjectObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.SetFocusedEffectContext = {};
gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.SetFocusedEffectContext.GDObjectObjects1= [];
gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.SetFocusedEffectContext.GDObjectObjects2= [];


gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.SetFocusedEffectContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.SetFocusedEffectContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.SetFocusedEffectContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.SetFocusedEffectContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setFocusedEffect((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Value") : ""));
}
}}

}


};

gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.SetFocusedEffect = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "ButtonFSM": this._getButtonFSM()
, "Effect": this._getEffect()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ButtonStates"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ButtonStates"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.SetFocusedEffectContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.SetFocusedEffectContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.SetFocusedEffectContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.SetFocusedEffectContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.SetFocusedEffectContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.PressedEffectContext = {};
gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.PressedEffectContext.GDObjectObjects1= [];
gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.PressedEffectContext.GDObjectObjects2= [];


gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.PressedEffectContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.PressedEffectContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.PressedEffectContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.PressedEffectContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPressedEffect()); }}}

}


};

gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.PressedEffect = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "ButtonFSM": this._getButtonFSM()
, "Effect": this._getEffect()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ButtonStates"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ButtonStates"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.PressedEffectContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.PressedEffectContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.PressedEffectContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.PressedEffectContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.PressedEffectContext.GDObjectObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.SetPressedEffectContext = {};
gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.SetPressedEffectContext.GDObjectObjects1= [];
gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.SetPressedEffectContext.GDObjectObjects2= [];


gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.SetPressedEffectContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.SetPressedEffectContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.SetPressedEffectContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.SetPressedEffectContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPressedEffect((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Value") : ""));
}
}}

}


};

gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.SetPressedEffect = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "ButtonFSM": this._getButtonFSM()
, "Effect": this._getEffect()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ButtonStates"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ButtonStates"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.SetPressedEffectContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.SetPressedEffectContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.SetPressedEffectContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.SetPressedEffectContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects.prototype.SetPressedEffectContext.GDObjectObjects2.length = 0;


return;
}


gdjs.registerBehavior("ButtonStates::ButtonObjectEffects", gdjs.evtsExt__ButtonStates__ButtonObjectEffects.ButtonObjectEffects);
