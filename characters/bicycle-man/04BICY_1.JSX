// Created using compCode v1.1.2
// 201801026 from composition "name:Character 04 Bicycle" in project "~/Desktop/EVT47 Repair/Man – kópia/EVT4 Character Animations 04 Bicycle Z.aep"
//
// aescripts.com/compCode

// compCode_201801026_141649();
function compCode_201801026_141649() {

app.beginUndoGroup("name:Character 04 Bicycle");

try {

// ANIMATION PRESETS START
	// name:Character 04 Bicycle -> C_HAND L -> Effects -> EVT4.1 Rig Control;
	// Pseudo Effect "EVT4.1 Rig Control" (Pseudo/EVT4.1 Rig Control)
	// var ap_PE_Evt41RigControl = File("~/Desktop/EVT 56serie/56 42 Out 2/(EVT Scripts)/Animation Presets/EVT4 Rig Control.ffx");
	//
	// name:Character 04 Bicycle -> Ctrl Eyes -> Effects -> EVT4.1 Eyes Control;
	// Pseudo Effect "EVT4.1 Eyes Control" (Pseudo/EVT4.1 Eyes Control)
	// var ap_PE_Evt41EyesControl = File("~/Desktop/EVT 56serie/56 42 Out 2/(EVT Scripts)/Animation Presets/EVT4 Eyes Control.ffx");
	//
	// name:Character 04 Bicycle -> Ctrl Limbs -> Effects -> EVT4.1 Limbs Control;
	// Pseudo Effect "EVT4.1 Limbs Control" (Pseudo/EVT4.1 Limbs Control)
	// var ap_PE_Evt41LimbsControl = File("~/Desktop/EVT 56serie/56 42 Out 2/(EVT Scripts)/Animation Presets/EVT4 Limbs Control.ffx");
// ANIMATION PRESETS END

// Create array to save strings to replace in expressions
	var renamedPropertiesArray = [];

// CREATE FOLDER HIERARCHY START
	var characterAnimations_folder_properties = {"name":"Character Animations","typeName":"Folder","label":2,"comment":""};
	var characterAnimations_folder = findProjectItem(app.project.rootFolder, false, characterAnimations_folder_properties);
	if (characterAnimations_folder === null) {
		characterAnimations_folder = app.project.items.addFolder(characterAnimations_folder_properties.name);
		characterAnimations_folder.label = characterAnimations_folder_properties.label;
	}
	var solids_folder_properties = {"name":"Solids","typeName":"Folder","label":2,"comment":""};
	var solids_folder = findProjectItem(characterAnimations_folder, false, solids_folder_properties);
	if (solids_folder === null) {
		solids_folder = app.project.items.addFolder(solids_folder_properties.name);
		solids_folder.label = solids_folder_properties.label;
		solids_folder.parentFolder = characterAnimations_folder;
	}
	var characterTextures_folder_properties = {"name":"Character Textures","typeName":"Folder","label":2,"comment":""};
	var characterTextures_folder = findProjectItem(characterAnimations_folder, false, characterTextures_folder_properties);
	if (characterTextures_folder === null) {
		characterTextures_folder = app.project.items.addFolder(characterTextures_folder_properties.name);
		characterTextures_folder.label = characterTextures_folder_properties.label;
		characterTextures_folder.parentFolder = characterAnimations_folder;
	}
	var characterBodyParts_folder_properties = {"name":"Character Body Parts","typeName":"Folder","label":2,"comment":""};
	var characterBodyParts_folder = findProjectItem(characterAnimations_folder, false, characterBodyParts_folder_properties);
	if (characterBodyParts_folder === null) {
		characterBodyParts_folder = app.project.items.addFolder(characterBodyParts_folder_properties.name);
		characterBodyParts_folder.label = characterBodyParts_folder_properties.label;
		characterBodyParts_folder.parentFolder = characterAnimations_folder;
	}
	var body_folder_properties = {"name":"Body","typeName":"Folder","label":2,"comment":""};
	var body_folder = findProjectItem(characterBodyParts_folder, false, body_folder_properties);
	if (body_folder === null) {
		body_folder = app.project.items.addFolder(body_folder_properties.name);
		body_folder.label = body_folder_properties.label;
		body_folder.parentFolder = characterBodyParts_folder;
	}
	var head_folder_properties = {"name":"Head","typeName":"Folder","label":2,"comment":""};
	var head_folder = findProjectItem(characterBodyParts_folder, false, head_folder_properties);
	if (head_folder === null) {
		head_folder = app.project.items.addFolder(head_folder_properties.name);
		head_folder.label = head_folder_properties.label;
		head_folder.parentFolder = characterBodyParts_folder;
	}
	var usedIcons_folder_properties = {"name":"Used Icons","typeName":"Folder","label":2,"comment":""};
	var usedIcons_folder = findProjectItem(characterAnimations_folder, false, usedIcons_folder_properties);
	if (usedIcons_folder === null) {
		usedIcons_folder = app.project.items.addFolder(usedIcons_folder_properties.name);
		usedIcons_folder.label = usedIcons_folder_properties.label;
		usedIcons_folder.parentFolder = characterAnimations_folder;
	}
	var textureComps_folder_properties = {"name":"Texture Comps","typeName":"Folder","label":2,"comment":""};
	var textureComps_folder = findProjectItem(characterTextures_folder, false, textureComps_folder_properties);
	if (textureComps_folder === null) {
		textureComps_folder = app.project.items.addFolder(textureComps_folder_properties.name);
		textureComps_folder.label = textureComps_folder_properties.label;
		textureComps_folder.parentFolder = characterTextures_folder;
	}
	var mouths_folder_properties = {"name":"Mouths","typeName":"Folder","label":2,"comment":""};
	var mouths_folder = findProjectItem(characterBodyParts_folder, false, mouths_folder_properties);
	if (mouths_folder === null) {
		mouths_folder = app.project.items.addFolder(mouths_folder_properties.name);
		mouths_folder.label = mouths_folder_properties.label;
		mouths_folder.parentFolder = characterBodyParts_folder;
	}
	var precomps_folder_properties = {"name":"Precomps","typeName":"Folder","label":2,"comment":""};
	var precomps_folder = findProjectItem(mouths_folder, false, precomps_folder_properties);
	if (precomps_folder === null) {
		precomps_folder = app.project.items.addFolder(precomps_folder_properties.name);
		precomps_folder.label = precomps_folder_properties.label;
		precomps_folder.parentFolder = mouths_folder;
	}
// CREATE FOLDER HIERARCHY END

// CREATE COMPOSITIONS START
	var character04Bicycle_comp_properties = {"name":"name:Character 04 Bicycle","typeName":"Composition","label":15,"comment":"","height":1080,"width":1920,"pixelAspect":1,"bgColor":[0.76078431372549,0.76078431372549,0.76078431372549],"duration":18,"numLayers":59,"frameRate":24};
	var character04Bicycle_comp = app.project.items.addComp(character04Bicycle_comp_properties.name, character04Bicycle_comp_properties.width, character04Bicycle_comp_properties.height, character04Bicycle_comp_properties.pixelAspect, character04Bicycle_comp_properties.duration, character04Bicycle_comp_properties.frameRate);
			promptName("Please enter Composition name (Project Panel).", character04Bicycle_comp);
		character04Bicycle_comp.time = 3.75;
		character04Bicycle_comp.bgColor = character04Bicycle_comp_properties.bgColor;
		character04Bicycle_comp.shutterPhase = -90;
		character04Bicycle_comp.workAreaDuration = 5.08333333333333;
		character04Bicycle_comp.resolutionFactor = [1, 1];
		character04Bicycle_comp.hideShyLayers = true;
		character04Bicycle_comp.parentFolder = characterAnimations_folder;
	var texture_comp_properties = {"name":"Texture","typeName":"Composition","label":15,"comment":"","height":2700,"width":5000,"pixelAspect":1,"bgColor":[0.85098039215686,0.85098039215686,0.85098039215686],"duration":18,"numLayers":1,"frameRate":24};
	var texture_comp = app.project.items.addComp(texture_comp_properties.name, texture_comp_properties.width, texture_comp_properties.height, texture_comp_properties.pixelAspect, texture_comp_properties.duration, texture_comp_properties.frameRate);
		texture_comp.time = 3.75;
		texture_comp.bgColor = texture_comp_properties.bgColor;
		texture_comp.shutterPhase = -90;
		texture_comp.resolutionFactor = [2, 2];
		texture_comp.parentFolder = characterTextures_folder;
	var handL_comp_properties = {"name":"Hand L","typeName":"Composition","label":15,"comment":"","height":320,"width":450,"pixelAspect":1,"bgColor":[1,1,1],"duration":18,"numLayers":4,"frameRate":24};
	var handL_comp = app.project.items.addComp(handL_comp_properties.name, handL_comp_properties.width, handL_comp_properties.height, handL_comp_properties.pixelAspect, handL_comp_properties.duration, handL_comp_properties.frameRate);
		handL_comp.time = 3.75;
		handL_comp.bgColor = handL_comp_properties.bgColor;
		handL_comp.shutterPhase = -90;
		handL_comp.resolutionFactor = [2, 2];
		handL_comp.parentFolder = body_folder;
	var forearmL_comp_properties = {"name":"Forearm L","typeName":"Composition","label":15,"comment":"","height":600,"width":400,"pixelAspect":1,"bgColor":[1,1,1],"duration":18,"numLayers":3,"frameRate":24};
	var forearmL_comp = app.project.items.addComp(forearmL_comp_properties.name, forearmL_comp_properties.width, forearmL_comp_properties.height, forearmL_comp_properties.pixelAspect, forearmL_comp_properties.duration, forearmL_comp_properties.frameRate);
		forearmL_comp.time = 3.75;
		forearmL_comp.bgColor = forearmL_comp_properties.bgColor;
		forearmL_comp.shutterPhase = -90;
		forearmL_comp.resolutionFactor = [2, 2];
		forearmL_comp.parentFolder = body_folder;
	var upperArmL_comp_properties = {"name":"Upper Arm L","typeName":"Composition","label":15,"comment":"","height":600,"width":400,"pixelAspect":1,"bgColor":[1,1,1],"duration":18,"numLayers":3,"frameRate":24};
	var upperArmL_comp = app.project.items.addComp(upperArmL_comp_properties.name, upperArmL_comp_properties.width, upperArmL_comp_properties.height, upperArmL_comp_properties.pixelAspect, upperArmL_comp_properties.duration, upperArmL_comp_properties.frameRate);
		upperArmL_comp.time = 3.75;
		upperArmL_comp.bgColor = upperArmL_comp_properties.bgColor;
		upperArmL_comp.shutterPhase = -90;
		upperArmL_comp.resolutionFactor = [2, 2];
		upperArmL_comp.parentFolder = body_folder;
	var glasses_comp_properties = {"name":"Glasses","typeName":"Composition","label":15,"comment":"","height":200,"width":300,"pixelAspect":1,"bgColor":[0.6156862745098,0.6156862745098,0.6156862745098],"duration":18,"numLayers":1,"frameRate":24};
	var glasses_comp = app.project.items.addComp(glasses_comp_properties.name, glasses_comp_properties.width, glasses_comp_properties.height, glasses_comp_properties.pixelAspect, glasses_comp_properties.duration, glasses_comp_properties.frameRate);
		glasses_comp.time = 3.75;
		glasses_comp.bgColor = glasses_comp_properties.bgColor;
		glasses_comp.shutterPhase = -90;
		glasses_comp.resolutionFactor = [2, 2];
		glasses_comp.parentFolder = head_folder;
	var eyelash_comp_properties = {"name":"Eyelash","typeName":"Composition","label":15,"comment":"","height":70,"width":100,"pixelAspect":1,"bgColor":[0.6156862745098,0.6156862745098,0.6156862745098],"duration":18,"numLayers":1,"frameRate":24};
	var eyelash_comp = app.project.items.addComp(eyelash_comp_properties.name, eyelash_comp_properties.width, eyelash_comp_properties.height, eyelash_comp_properties.pixelAspect, eyelash_comp_properties.duration, eyelash_comp_properties.frameRate);
		eyelash_comp.time = 3.75;
		eyelash_comp.bgColor = eyelash_comp_properties.bgColor;
		eyelash_comp.shutterPhase = -90;
		eyelash_comp.resolutionFactor = [2, 2];
		eyelash_comp.parentFolder = head_folder;
	var eyebrowR_comp_properties = {"name":"Eyebrow R","typeName":"Composition","label":15,"comment":"","height":60,"width":150,"pixelAspect":1,"bgColor":[0.6156862745098,0.6156862745098,0.6156862745098],"duration":18,"numLayers":1,"frameRate":24};
	var eyebrowR_comp = app.project.items.addComp(eyebrowR_comp_properties.name, eyebrowR_comp_properties.width, eyebrowR_comp_properties.height, eyebrowR_comp_properties.pixelAspect, eyebrowR_comp_properties.duration, eyebrowR_comp_properties.frameRate);
		eyebrowR_comp.time = 3.75;
		eyebrowR_comp.bgColor = eyebrowR_comp_properties.bgColor;
		eyebrowR_comp.shutterPhase = -90;
		eyebrowR_comp.resolutionFactor = [2, 2];
		eyebrowR_comp.parentFolder = head_folder;
	var eyebrowL_comp_properties = {"name":"Eyebrow L","typeName":"Composition","label":15,"comment":"","height":60,"width":150,"pixelAspect":1,"bgColor":[0.6156862745098,0.6156862745098,0.6156862745098],"duration":18,"numLayers":1,"frameRate":24};
	var eyebrowL_comp = app.project.items.addComp(eyebrowL_comp_properties.name, eyebrowL_comp_properties.width, eyebrowL_comp_properties.height, eyebrowL_comp_properties.pixelAspect, eyebrowL_comp_properties.duration, eyebrowL_comp_properties.frameRate);
		eyebrowL_comp.time = 3.75;
		eyebrowL_comp.bgColor = eyebrowL_comp_properties.bgColor;
		eyebrowL_comp.shutterPhase = -90;
		eyebrowL_comp.resolutionFactor = [2, 2];
		eyebrowL_comp.parentFolder = head_folder;
	var eyeR_comp_properties = {"name":"Eye R","typeName":"Composition","label":15,"comment":"","height":100,"width":100,"pixelAspect":1,"bgColor":[0.6156862745098,0.6156862745098,0.6156862745098],"duration":18,"numLayers":1,"frameRate":24};
	var eyeR_comp = app.project.items.addComp(eyeR_comp_properties.name, eyeR_comp_properties.width, eyeR_comp_properties.height, eyeR_comp_properties.pixelAspect, eyeR_comp_properties.duration, eyeR_comp_properties.frameRate);
		eyeR_comp.time = 3.75;
		eyeR_comp.bgColor = eyeR_comp_properties.bgColor;
		eyeR_comp.shutterPhase = -90;
		eyeR_comp.resolutionFactor = [2, 2];
		eyeR_comp.parentFolder = head_folder;
	var eyeR2_comp_properties = {"name":"Eye R 2","typeName":"Composition","label":15,"comment":"","height":100,"width":100,"pixelAspect":1,"bgColor":[0.6156862745098,0.6156862745098,0.6156862745098],"duration":18,"numLayers":1,"frameRate":24};
	var eyeR2_comp = app.project.items.addComp(eyeR2_comp_properties.name, eyeR2_comp_properties.width, eyeR2_comp_properties.height, eyeR2_comp_properties.pixelAspect, eyeR2_comp_properties.duration, eyeR2_comp_properties.frameRate);
		eyeR2_comp.time = 3.75;
		eyeR2_comp.bgColor = eyeR2_comp_properties.bgColor;
		eyeR2_comp.shutterPhase = -90;
		eyeR2_comp.resolutionFactor = [2, 2];
		eyeR2_comp.parentFolder = head_folder;
	var eyeL_comp_properties = {"name":"Eye L","typeName":"Composition","label":15,"comment":"","height":100,"width":100,"pixelAspect":1,"bgColor":[0.6156862745098,0.6156862745098,0.6156862745098],"duration":18,"numLayers":1,"frameRate":24};
	var eyeL_comp = app.project.items.addComp(eyeL_comp_properties.name, eyeL_comp_properties.width, eyeL_comp_properties.height, eyeL_comp_properties.pixelAspect, eyeL_comp_properties.duration, eyeL_comp_properties.frameRate);
		eyeL_comp.time = 3.75;
		eyeL_comp.bgColor = eyeL_comp_properties.bgColor;
		eyeL_comp.shutterPhase = -90;
		eyeL_comp.resolutionFactor = [2, 2];
		eyeL_comp.parentFolder = head_folder;
	var eyeL2_comp_properties = {"name":"Eye L 2","typeName":"Composition","label":15,"comment":"","height":100,"width":100,"pixelAspect":1,"bgColor":[0.6156862745098,0.6156862745098,0.6156862745098],"duration":18,"numLayers":1,"frameRate":24};
	var eyeL2_comp = app.project.items.addComp(eyeL2_comp_properties.name, eyeL2_comp_properties.width, eyeL2_comp_properties.height, eyeL2_comp_properties.pixelAspect, eyeL2_comp_properties.duration, eyeL2_comp_properties.frameRate);
		eyeL2_comp.time = 3.75;
		eyeL2_comp.bgColor = eyeL2_comp_properties.bgColor;
		eyeL2_comp.shutterPhase = -90;
		eyeL2_comp.resolutionFactor = [2, 2];
		eyeL2_comp.parentFolder = head_folder;
	var hairFront_comp_properties = {"name":"Hair Front","typeName":"Composition","label":15,"comment":"","height":400,"width":400,"pixelAspect":1,"bgColor":[0.6156862745098,0.6156862745098,0.6156862745098],"duration":18,"numLayers":1,"frameRate":24};
	var hairFront_comp = app.project.items.addComp(hairFront_comp_properties.name, hairFront_comp_properties.width, hairFront_comp_properties.height, hairFront_comp_properties.pixelAspect, hairFront_comp_properties.duration, hairFront_comp_properties.frameRate);
		hairFront_comp.time = 3.75;
		hairFront_comp.bgColor = hairFront_comp_properties.bgColor;
		hairFront_comp.shutterPhase = -90;
		hairFront_comp.resolutionFactor = [2, 2];
		hairFront_comp.parentFolder = head_folder;
	var noseShape_comp_properties = {"name":"Nose Shape","typeName":"Composition","label":15,"comment":"","height":300,"width":300,"pixelAspect":1,"bgColor":[1,1,1],"duration":18,"numLayers":1,"frameRate":24};
	var noseShape_comp = app.project.items.addComp(noseShape_comp_properties.name, noseShape_comp_properties.width, noseShape_comp_properties.height, noseShape_comp_properties.pixelAspect, noseShape_comp_properties.duration, noseShape_comp_properties.frameRate);
		noseShape_comp.time = 3.75;
		noseShape_comp.bgColor = noseShape_comp_properties.bgColor;
		noseShape_comp.shutterPhase = -90;
		noseShape_comp.resolutionFactor = [2, 2];
		noseShape_comp.parentFolder = head_folder;
	var mouth_comp_properties = {"name":"Mouth","typeName":"Composition","label":15,"comment":"","height":300,"width":300,"pixelAspect":1,"bgColor":[1,1,1],"duration":18,"numLayers":1,"frameRate":24};
	var mouth_comp = app.project.items.addComp(mouth_comp_properties.name, mouth_comp_properties.width, mouth_comp_properties.height, mouth_comp_properties.pixelAspect, mouth_comp_properties.duration, mouth_comp_properties.frameRate);
		mouth_comp.time = 3.75;
		mouth_comp.bgColor = mouth_comp_properties.bgColor;
		mouth_comp.shutterPhase = -90;
		mouth_comp.resolutionFactor = [2, 2];
		mouth_comp.parentFolder = head_folder;
	var beard_comp_properties = {"name":"Beard","typeName":"Composition","label":15,"comment":"","height":500,"width":500,"pixelAspect":1,"bgColor":[0.6156862745098,0.6156862745098,0.6156862745098],"duration":18,"numLayers":1,"frameRate":24};
	var beard_comp = app.project.items.addComp(beard_comp_properties.name, beard_comp_properties.width, beard_comp_properties.height, beard_comp_properties.pixelAspect, beard_comp_properties.duration, beard_comp_properties.frameRate);
		beard_comp.time = 3.75;
		beard_comp.bgColor = beard_comp_properties.bgColor;
		beard_comp.shutterPhase = -90;
		beard_comp.resolutionFactor = [2, 2];
		beard_comp.parentFolder = head_folder;
	var hairMiddle_comp_properties = {"name":"Hair Middle","typeName":"Composition","label":15,"comment":"","height":500,"width":400,"pixelAspect":1,"bgColor":[0.6156862745098,0.6156862745098,0.6156862745098],"duration":18,"numLayers":1,"frameRate":24};
	var hairMiddle_comp = app.project.items.addComp(hairMiddle_comp_properties.name, hairMiddle_comp_properties.width, hairMiddle_comp_properties.height, hairMiddle_comp_properties.pixelAspect, hairMiddle_comp_properties.duration, hairMiddle_comp_properties.frameRate);
		hairMiddle_comp.time = 3.75;
		hairMiddle_comp.bgColor = hairMiddle_comp_properties.bgColor;
		hairMiddle_comp.shutterPhase = -90;
		hairMiddle_comp.resolutionFactor = [2, 2];
		hairMiddle_comp.parentFolder = head_folder;
	var faceShape_comp_properties = {"name":"Face Shape","typeName":"Composition","label":15,"comment":"","height":450,"width":450,"pixelAspect":1,"bgColor":[1,1,1],"duration":18,"numLayers":1,"frameRate":24};
	var faceShape_comp = app.project.items.addComp(faceShape_comp_properties.name, faceShape_comp_properties.width, faceShape_comp_properties.height, faceShape_comp_properties.pixelAspect, faceShape_comp_properties.duration, faceShape_comp_properties.frameRate);
		faceShape_comp.time = 3.75;
		faceShape_comp.bgColor = faceShape_comp_properties.bgColor;
		faceShape_comp.shutterPhase = -90;
		faceShape_comp.resolutionFactor = [2, 2];
		faceShape_comp.parentFolder = head_folder;
	var earL_comp_properties = {"name":"Ear L","typeName":"Composition","label":15,"comment":"","height":400,"width":400,"pixelAspect":1,"bgColor":[0.6156862745098,0.6156862745098,0.6156862745098],"duration":18,"numLayers":1,"frameRate":24};
	var earL_comp = app.project.items.addComp(earL_comp_properties.name, earL_comp_properties.width, earL_comp_properties.height, earL_comp_properties.pixelAspect, earL_comp_properties.duration, earL_comp_properties.frameRate);
		earL_comp.time = 3.75;
		earL_comp.bgColor = earL_comp_properties.bgColor;
		earL_comp.shutterPhase = -90;
		earL_comp.resolutionFactor = [2, 2];
		earL_comp.parentFolder = head_folder;
	var earR_comp_properties = {"name":"Ear R","typeName":"Composition","label":15,"comment":"","height":400,"width":400,"pixelAspect":1,"bgColor":[0.6156862745098,0.6156862745098,0.6156862745098],"duration":18,"numLayers":1,"frameRate":24};
	var earR_comp = app.project.items.addComp(earR_comp_properties.name, earR_comp_properties.width, earR_comp_properties.height, earR_comp_properties.pixelAspect, earR_comp_properties.duration, earR_comp_properties.frameRate);
		earR_comp.time = 3.75;
		earR_comp.bgColor = earR_comp_properties.bgColor;
		earR_comp.shutterPhase = -90;
		earR_comp.resolutionFactor = [2, 2];
		earR_comp.parentFolder = head_folder;
	var neck_comp_properties = {"name":"Neck","typeName":"Composition","label":15,"comment":"","height":400,"width":250,"pixelAspect":1,"bgColor":[0.6156862745098,0.6156862745098,0.6156862745098],"duration":18,"numLayers":2,"frameRate":24};
	var neck_comp = app.project.items.addComp(neck_comp_properties.name, neck_comp_properties.width, neck_comp_properties.height, neck_comp_properties.pixelAspect, neck_comp_properties.duration, neck_comp_properties.frameRate);
		neck_comp.time = 3.75;
		neck_comp.bgColor = neck_comp_properties.bgColor;
		neck_comp.shutterPhase = -90;
		neck_comp.resolutionFactor = [2, 2];
		neck_comp.parentFolder = body_folder;
	var body2_comp_properties = {"name":"Body 2","typeName":"Composition","label":15,"comment":"","height":800,"width":800,"pixelAspect":1,"bgColor":[1,1,1],"duration":18,"numLayers":3,"frameRate":24};
	var body2_comp = app.project.items.addComp(body2_comp_properties.name, body2_comp_properties.width, body2_comp_properties.height, body2_comp_properties.pixelAspect, body2_comp_properties.duration, body2_comp_properties.frameRate);
		body2_comp.time = 3.75;
		body2_comp.bgColor = body2_comp_properties.bgColor;
		body2_comp.shutterPhase = -90;
		body2_comp.resolutionFactor = [2, 2];
		body2_comp.parentFolder = body_folder;
	var hips_comp_properties = {"name":"Hips","typeName":"Composition","label":15,"comment":"","height":900,"width":700,"pixelAspect":1,"bgColor":[0.43921568627451,0.49411764705882,0.57647058823529],"duration":18,"numLayers":4,"frameRate":24};
	var hips_comp = app.project.items.addComp(hips_comp_properties.name, hips_comp_properties.width, hips_comp_properties.height, hips_comp_properties.pixelAspect, hips_comp_properties.duration, hips_comp_properties.frameRate);
		hips_comp.time = 3.75;
		hips_comp.bgColor = hips_comp_properties.bgColor;
		hips_comp.shutterPhase = -90;
		hips_comp.workAreaDuration = 2.04166666666667;
		hips_comp.resolutionFactor = [2, 2];
		hips_comp.parentFolder = body_folder;
	var feetL_comp_properties = {"name":"Feet L","typeName":"Composition","label":15,"comment":"","height":320,"width":450,"pixelAspect":1,"bgColor":[1,1,1],"duration":18,"numLayers":2,"frameRate":24};
	var feetL_comp = app.project.items.addComp(feetL_comp_properties.name, feetL_comp_properties.width, feetL_comp_properties.height, feetL_comp_properties.pixelAspect, feetL_comp_properties.duration, feetL_comp_properties.frameRate);
		feetL_comp.time = 3.75;
		feetL_comp.bgColor = feetL_comp_properties.bgColor;
		feetL_comp.shutterPhase = -90;
		feetL_comp.resolutionFactor = [2, 2];
		feetL_comp.parentFolder = body_folder;
	var calfL_comp_properties = {"name":"Calf L","typeName":"Composition","label":15,"comment":"","height":600,"width":400,"pixelAspect":1,"bgColor":[1,1,1],"duration":18,"numLayers":3,"frameRate":24};
	var calfL_comp = app.project.items.addComp(calfL_comp_properties.name, calfL_comp_properties.width, calfL_comp_properties.height, calfL_comp_properties.pixelAspect, calfL_comp_properties.duration, calfL_comp_properties.frameRate);
		calfL_comp.time = 3.75;
		calfL_comp.bgColor = calfL_comp_properties.bgColor;
		calfL_comp.shutterPhase = -90;
		calfL_comp.resolutionFactor = [2, 2];
		calfL_comp.parentFolder = body_folder;
	var thighL_comp_properties = {"name":"Thigh L","typeName":"Composition","label":15,"comment":"","height":600,"width":400,"pixelAspect":1,"bgColor":[1,1,1],"duration":18,"numLayers":3,"frameRate":24};
	var thighL_comp = app.project.items.addComp(thighL_comp_properties.name, thighL_comp_properties.width, thighL_comp_properties.height, thighL_comp_properties.pixelAspect, thighL_comp_properties.duration, thighL_comp_properties.frameRate);
		thighL_comp.time = 3.75;
		thighL_comp.bgColor = thighL_comp_properties.bgColor;
		thighL_comp.shutterPhase = -90;
		thighL_comp.resolutionFactor = [2, 2];
		thighL_comp.parentFolder = body_folder;
	var body_comp_properties = {"name":"Body","typeName":"Composition","label":15,"comment":"","height":800,"width":800,"pixelAspect":1,"bgColor":[1,1,1],"duration":18,"numLayers":3,"frameRate":24};
	var body_comp = app.project.items.addComp(body_comp_properties.name, body_comp_properties.width, body_comp_properties.height, body_comp_properties.pixelAspect, body_comp_properties.duration, body_comp_properties.frameRate);
		body_comp.time = 3.75;
		body_comp.bgColor = body_comp_properties.bgColor;
		body_comp.shutterPhase = -90;
		body_comp.resolutionFactor = [2, 2];
		body_comp.parentFolder = body_folder;
	var bicycle_comp_properties = {"name":"Bicycle","typeName":"Composition","label":15,"comment":"","height":500,"width":800,"pixelAspect":1,"bgColor":[0.45882352941176,0.5921568627451,0.62745098039216],"duration":60,"numLayers":12,"frameRate":24};
	var bicycle_comp = app.project.items.addComp(bicycle_comp_properties.name, bicycle_comp_properties.width, bicycle_comp_properties.height, bicycle_comp_properties.pixelAspect, bicycle_comp_properties.duration, bicycle_comp_properties.frameRate);
		bicycle_comp.time = 3.75;
		bicycle_comp.bgColor = bicycle_comp_properties.bgColor;
		bicycle_comp.shutterPhase = -90;
		bicycle_comp.resolutionFactor = [1, 1];
		bicycle_comp.parentFolder = usedIcons_folder;
	var handR_comp_properties = {"name":"Hand R","typeName":"Composition","label":15,"comment":"","height":320,"width":450,"pixelAspect":1,"bgColor":[1,1,1],"duration":18,"numLayers":4,"frameRate":24};
	var handR_comp = app.project.items.addComp(handR_comp_properties.name, handR_comp_properties.width, handR_comp_properties.height, handR_comp_properties.pixelAspect, handR_comp_properties.duration, handR_comp_properties.frameRate);
		handR_comp.time = 3.75;
		handR_comp.bgColor = handR_comp_properties.bgColor;
		handR_comp.shutterPhase = -90;
		handR_comp.resolutionFactor = [2, 2];
		handR_comp.parentFolder = body_folder;
	var forearmR_comp_properties = {"name":"Forearm R","typeName":"Composition","label":15,"comment":"","height":600,"width":400,"pixelAspect":1,"bgColor":[1,1,1],"duration":18,"numLayers":3,"frameRate":24};
	var forearmR_comp = app.project.items.addComp(forearmR_comp_properties.name, forearmR_comp_properties.width, forearmR_comp_properties.height, forearmR_comp_properties.pixelAspect, forearmR_comp_properties.duration, forearmR_comp_properties.frameRate);
		forearmR_comp.time = 3.75;
		forearmR_comp.bgColor = forearmR_comp_properties.bgColor;
		forearmR_comp.shutterPhase = -90;
		forearmR_comp.resolutionFactor = [2, 2];
		forearmR_comp.parentFolder = body_folder;
	var upperArmR_comp_properties = {"name":"Upper Arm R","typeName":"Composition","label":15,"comment":"","height":600,"width":400,"pixelAspect":1,"bgColor":[1,1,1],"duration":18,"numLayers":3,"frameRate":24};
	var upperArmR_comp = app.project.items.addComp(upperArmR_comp_properties.name, upperArmR_comp_properties.width, upperArmR_comp_properties.height, upperArmR_comp_properties.pixelAspect, upperArmR_comp_properties.duration, upperArmR_comp_properties.frameRate);
		upperArmR_comp.time = 3.75;
		upperArmR_comp.bgColor = upperArmR_comp_properties.bgColor;
		upperArmR_comp.shutterPhase = -90;
		upperArmR_comp.resolutionFactor = [2, 2];
		upperArmR_comp.parentFolder = body_folder;
	var feetR_comp_properties = {"name":"Feet R","typeName":"Composition","label":15,"comment":"","height":320,"width":450,"pixelAspect":1,"bgColor":[1,1,1],"duration":18,"numLayers":2,"frameRate":24};
	var feetR_comp = app.project.items.addComp(feetR_comp_properties.name, feetR_comp_properties.width, feetR_comp_properties.height, feetR_comp_properties.pixelAspect, feetR_comp_properties.duration, feetR_comp_properties.frameRate);
		feetR_comp.time = 3.75;
		feetR_comp.bgColor = feetR_comp_properties.bgColor;
		feetR_comp.shutterPhase = -90;
		feetR_comp.resolutionFactor = [2, 2];
		feetR_comp.parentFolder = body_folder;
	var calfR_comp_properties = {"name":"Calf R","typeName":"Composition","label":15,"comment":"","height":600,"width":400,"pixelAspect":1,"bgColor":[1,1,1],"duration":18,"numLayers":3,"frameRate":24};
	var calfR_comp = app.project.items.addComp(calfR_comp_properties.name, calfR_comp_properties.width, calfR_comp_properties.height, calfR_comp_properties.pixelAspect, calfR_comp_properties.duration, calfR_comp_properties.frameRate);
		calfR_comp.time = 3.75;
		calfR_comp.bgColor = calfR_comp_properties.bgColor;
		calfR_comp.shutterPhase = -90;
		calfR_comp.resolutionFactor = [2, 2];
		calfR_comp.parentFolder = body_folder;
	var thighR_comp_properties = {"name":"Thigh R","typeName":"Composition","label":15,"comment":"","height":600,"width":400,"pixelAspect":1,"bgColor":[1,1,1],"duration":18,"numLayers":3,"frameRate":24};
	var thighR_comp = app.project.items.addComp(thighR_comp_properties.name, thighR_comp_properties.width, thighR_comp_properties.height, thighR_comp_properties.pixelAspect, thighR_comp_properties.duration, thighR_comp_properties.frameRate);
		thighR_comp.time = 3.75;
		thighR_comp.bgColor = thighR_comp_properties.bgColor;
		thighR_comp.shutterPhase = -90;
		thighR_comp.resolutionFactor = [2, 2];
		thighR_comp.parentFolder = body_folder;
	var bodyBack_comp_properties = {"name":"Body Back","typeName":"Composition","label":15,"comment":"","height":800,"width":800,"pixelAspect":1,"bgColor":[1,1,1],"duration":18,"numLayers":2,"frameRate":24};
	var bodyBack_comp = app.project.items.addComp(bodyBack_comp_properties.name, bodyBack_comp_properties.width, bodyBack_comp_properties.height, bodyBack_comp_properties.pixelAspect, bodyBack_comp_properties.duration, bodyBack_comp_properties.frameRate);
		bodyBack_comp.time = 3.75;
		bodyBack_comp.bgColor = bodyBack_comp_properties.bgColor;
		bodyBack_comp.shutterPhase = -90;
		bodyBack_comp.resolutionFactor = [2, 2];
		bodyBack_comp.parentFolder = body_folder;
	var hairBack_comp_properties = {"name":"Hair Back","typeName":"Composition","label":15,"comment":"","height":500,"width":400,"pixelAspect":1,"bgColor":[0.6156862745098,0.6156862745098,0.6156862745098],"duration":18,"numLayers":1,"frameRate":24};
	var hairBack_comp = app.project.items.addComp(hairBack_comp_properties.name, hairBack_comp_properties.width, hairBack_comp_properties.height, hairBack_comp_properties.pixelAspect, hairBack_comp_properties.duration, hairBack_comp_properties.frameRate);
		hairBack_comp.time = 3.75;
		hairBack_comp.bgColor = hairBack_comp_properties.bgColor;
		hairBack_comp.shutterPhase = -90;
		hairBack_comp.resolutionFactor = [2, 2];
		hairBack_comp.parentFolder = head_folder;
	var textureManNormie_comp_properties = {"name":"Texture MAN NORMIE","typeName":"Composition","label":15,"comment":"","height":2200,"width":4000,"pixelAspect":1,"bgColor":[0.7921568627451,0.77647058823529,0.80392156862745],"duration":18,"numLayers":104,"frameRate":24};
	var textureManNormie_comp = app.project.items.addComp(textureManNormie_comp_properties.name, textureManNormie_comp_properties.width, textureManNormie_comp_properties.height, textureManNormie_comp_properties.pixelAspect, textureManNormie_comp_properties.duration, textureManNormie_comp_properties.frameRate);
		textureManNormie_comp.time = 3.75;
		textureManNormie_comp.bgColor = textureManNormie_comp_properties.bgColor;
		textureManNormie_comp.shutterPhase = -90;
		textureManNormie_comp.resolutionFactor = [2, 2];
		textureManNormie_comp.hideShyLayers = true;
		textureManNormie_comp.parentFolder = characterTextures_folder;
	var handTexture_comp_properties = {"name":"Hand Texture","typeName":"Composition","label":15,"comment":"","height":320,"width":450,"pixelAspect":1,"bgColor":[1,1,1],"duration":18,"numLayers":1,"frameRate":24};
	var handTexture_comp = app.project.items.addComp(handTexture_comp_properties.name, handTexture_comp_properties.width, handTexture_comp_properties.height, handTexture_comp_properties.pixelAspect, handTexture_comp_properties.duration, handTexture_comp_properties.frameRate);
		handTexture_comp.time = 3.75;
		handTexture_comp.bgColor = handTexture_comp_properties.bgColor;
		handTexture_comp.shutterPhase = -90;
		handTexture_comp.resolutionFactor = [2, 2];
		handTexture_comp.parentFolder = textureComps_folder;
	var forearmTexture2_comp_properties = {"name":"Forearm Texture 2","typeName":"Composition","label":15,"comment":"","height":600,"width":400,"pixelAspect":1,"bgColor":[1,1,1],"duration":18,"numLayers":1,"frameRate":24};
	var forearmTexture2_comp = app.project.items.addComp(forearmTexture2_comp_properties.name, forearmTexture2_comp_properties.width, forearmTexture2_comp_properties.height, forearmTexture2_comp_properties.pixelAspect, forearmTexture2_comp_properties.duration, forearmTexture2_comp_properties.frameRate);
		forearmTexture2_comp.time = 3.75;
		forearmTexture2_comp.bgColor = forearmTexture2_comp_properties.bgColor;
		forearmTexture2_comp.shutterPhase = -90;
		forearmTexture2_comp.resolutionFactor = [2, 2];
		forearmTexture2_comp.parentFolder = textureComps_folder;
	var forearmTexture_comp_properties = {"name":"Forearm Texture","typeName":"Composition","label":15,"comment":"","height":600,"width":400,"pixelAspect":1,"bgColor":[1,1,1],"duration":18,"numLayers":1,"frameRate":24};
	var forearmTexture_comp = app.project.items.addComp(forearmTexture_comp_properties.name, forearmTexture_comp_properties.width, forearmTexture_comp_properties.height, forearmTexture_comp_properties.pixelAspect, forearmTexture_comp_properties.duration, forearmTexture_comp_properties.frameRate);
		forearmTexture_comp.time = 3.75;
		forearmTexture_comp.bgColor = forearmTexture_comp_properties.bgColor;
		forearmTexture_comp.shutterPhase = -90;
		forearmTexture_comp.resolutionFactor = [2, 2];
		forearmTexture_comp.parentFolder = textureComps_folder;
	var upperArmTexture2_comp_properties = {"name":"Upper Arm Texture 2","typeName":"Composition","label":15,"comment":"","height":600,"width":400,"pixelAspect":1,"bgColor":[1,1,1],"duration":18,"numLayers":1,"frameRate":24};
	var upperArmTexture2_comp = app.project.items.addComp(upperArmTexture2_comp_properties.name, upperArmTexture2_comp_properties.width, upperArmTexture2_comp_properties.height, upperArmTexture2_comp_properties.pixelAspect, upperArmTexture2_comp_properties.duration, upperArmTexture2_comp_properties.frameRate);
		upperArmTexture2_comp.time = 3.75;
		upperArmTexture2_comp.bgColor = upperArmTexture2_comp_properties.bgColor;
		upperArmTexture2_comp.shutterPhase = -90;
		upperArmTexture2_comp.resolutionFactor = [2, 2];
		upperArmTexture2_comp.parentFolder = textureComps_folder;
	var upperArmTexture_comp_properties = {"name":"Upper Arm Texture","typeName":"Composition","label":15,"comment":"","height":600,"width":400,"pixelAspect":1,"bgColor":[1,1,1],"duration":18,"numLayers":1,"frameRate":24};
	var upperArmTexture_comp = app.project.items.addComp(upperArmTexture_comp_properties.name, upperArmTexture_comp_properties.width, upperArmTexture_comp_properties.height, upperArmTexture_comp_properties.pixelAspect, upperArmTexture_comp_properties.duration, upperArmTexture_comp_properties.frameRate);
		upperArmTexture_comp.time = 3.75;
		upperArmTexture_comp.bgColor = upperArmTexture_comp_properties.bgColor;
		upperArmTexture_comp.shutterPhase = -90;
		upperArmTexture_comp.resolutionFactor = [2, 2];
		upperArmTexture_comp.parentFolder = textureComps_folder;
	var glassesTexture_comp_properties = {"name":"Glasses Texture","typeName":"Composition","label":15,"comment":"","height":200,"width":300,"pixelAspect":1,"bgColor":[0.6156862745098,0.6156862745098,0.6156862745098],"duration":18,"numLayers":1,"frameRate":24};
	var glassesTexture_comp = app.project.items.addComp(glassesTexture_comp_properties.name, glassesTexture_comp_properties.width, glassesTexture_comp_properties.height, glassesTexture_comp_properties.pixelAspect, glassesTexture_comp_properties.duration, glassesTexture_comp_properties.frameRate);
		glassesTexture_comp.time = 3.75;
		glassesTexture_comp.bgColor = glassesTexture_comp_properties.bgColor;
		glassesTexture_comp.shutterPhase = -90;
		glassesTexture_comp.resolutionFactor = [2, 2];
		glassesTexture_comp.parentFolder = textureComps_folder;
	var eyelashTexture_comp_properties = {"name":"Eyelash Texture","typeName":"Composition","label":15,"comment":"","height":70,"width":100,"pixelAspect":1,"bgColor":[0.6156862745098,0.6156862745098,0.6156862745098],"duration":18,"numLayers":1,"frameRate":24};
	var eyelashTexture_comp = app.project.items.addComp(eyelashTexture_comp_properties.name, eyelashTexture_comp_properties.width, eyelashTexture_comp_properties.height, eyelashTexture_comp_properties.pixelAspect, eyelashTexture_comp_properties.duration, eyelashTexture_comp_properties.frameRate);
		eyelashTexture_comp.time = 3.75;
		eyelashTexture_comp.bgColor = eyelashTexture_comp_properties.bgColor;
		eyelashTexture_comp.shutterPhase = -90;
		eyelashTexture_comp.resolutionFactor = [2, 2];
		eyelashTexture_comp.parentFolder = textureComps_folder;
	var eyebrowTexture_comp_properties = {"name":"Eyebrow Texture","typeName":"Composition","label":15,"comment":"","height":60,"width":150,"pixelAspect":1,"bgColor":[0.6156862745098,0.6156862745098,0.6156862745098],"duration":18,"numLayers":1,"frameRate":24};
	var eyebrowTexture_comp = app.project.items.addComp(eyebrowTexture_comp_properties.name, eyebrowTexture_comp_properties.width, eyebrowTexture_comp_properties.height, eyebrowTexture_comp_properties.pixelAspect, eyebrowTexture_comp_properties.duration, eyebrowTexture_comp_properties.frameRate);
		eyebrowTexture_comp.time = 3.75;
		eyebrowTexture_comp.bgColor = eyebrowTexture_comp_properties.bgColor;
		eyebrowTexture_comp.shutterPhase = -90;
		eyebrowTexture_comp.resolutionFactor = [2, 2];
		eyebrowTexture_comp.parentFolder = textureComps_folder;
	var eyeTexture_comp_properties = {"name":"Eye Texture","typeName":"Composition","label":15,"comment":"","height":100,"width":100,"pixelAspect":1,"bgColor":[0.6156862745098,0.6156862745098,0.6156862745098],"duration":18,"numLayers":1,"frameRate":24};
	var eyeTexture_comp = app.project.items.addComp(eyeTexture_comp_properties.name, eyeTexture_comp_properties.width, eyeTexture_comp_properties.height, eyeTexture_comp_properties.pixelAspect, eyeTexture_comp_properties.duration, eyeTexture_comp_properties.frameRate);
		eyeTexture_comp.time = 3.75;
		eyeTexture_comp.bgColor = eyeTexture_comp_properties.bgColor;
		eyeTexture_comp.shutterPhase = -90;
		eyeTexture_comp.resolutionFactor = [2, 2];
		eyeTexture_comp.parentFolder = textureComps_folder;
	var eyeTexture2_comp_properties = {"name":"Eye Texture 2","typeName":"Composition","label":15,"comment":"","height":100,"width":100,"pixelAspect":1,"bgColor":[0.6156862745098,0.6156862745098,0.6156862745098],"duration":18,"numLayers":1,"frameRate":24};
	var eyeTexture2_comp = app.project.items.addComp(eyeTexture2_comp_properties.name, eyeTexture2_comp_properties.width, eyeTexture2_comp_properties.height, eyeTexture2_comp_properties.pixelAspect, eyeTexture2_comp_properties.duration, eyeTexture2_comp_properties.frameRate);
		eyeTexture2_comp.time = 3.75;
		eyeTexture2_comp.bgColor = eyeTexture2_comp_properties.bgColor;
		eyeTexture2_comp.shutterPhase = -90;
		eyeTexture2_comp.resolutionFactor = [2, 2];
		eyeTexture2_comp.parentFolder = textureComps_folder;
	var hairFrontTexture_comp_properties = {"name":"Hair Front Texture","typeName":"Composition","label":15,"comment":"","height":400,"width":400,"pixelAspect":1,"bgColor":[0.6156862745098,0.6156862745098,0.6156862745098],"duration":18,"numLayers":1,"frameRate":24};
	var hairFrontTexture_comp = app.project.items.addComp(hairFrontTexture_comp_properties.name, hairFrontTexture_comp_properties.width, hairFrontTexture_comp_properties.height, hairFrontTexture_comp_properties.pixelAspect, hairFrontTexture_comp_properties.duration, hairFrontTexture_comp_properties.frameRate);
		hairFrontTexture_comp.time = 3.75;
		hairFrontTexture_comp.bgColor = hairFrontTexture_comp_properties.bgColor;
		hairFrontTexture_comp.shutterPhase = -90;
		hairFrontTexture_comp.resolutionFactor = [2, 2];
		hairFrontTexture_comp.parentFolder = textureComps_folder;
	var noseShapeTexture_comp_properties = {"name":"Nose Shape Texture","typeName":"Composition","label":15,"comment":"","height":300,"width":300,"pixelAspect":1,"bgColor":[1,1,1],"duration":18,"numLayers":1,"frameRate":24};
	var noseShapeTexture_comp = app.project.items.addComp(noseShapeTexture_comp_properties.name, noseShapeTexture_comp_properties.width, noseShapeTexture_comp_properties.height, noseShapeTexture_comp_properties.pixelAspect, noseShapeTexture_comp_properties.duration, noseShapeTexture_comp_properties.frameRate);
		noseShapeTexture_comp.time = 3.75;
		noseShapeTexture_comp.bgColor = noseShapeTexture_comp_properties.bgColor;
		noseShapeTexture_comp.shutterPhase = -90;
		noseShapeTexture_comp.resolutionFactor = [2, 2];
		noseShapeTexture_comp.parentFolder = textureComps_folder;
	var mouthSmile01_comp_properties = {"name":"Mouth Smile 01","typeName":"Composition","label":15,"comment":"","height":300,"width":300,"pixelAspect":1,"bgColor":[1,1,1],"duration":18,"numLayers":2,"frameRate":24};
	var mouthSmile01_comp = app.project.items.addComp(mouthSmile01_comp_properties.name, mouthSmile01_comp_properties.width, mouthSmile01_comp_properties.height, mouthSmile01_comp_properties.pixelAspect, mouthSmile01_comp_properties.duration, mouthSmile01_comp_properties.frameRate);
		mouthSmile01_comp.time = 3.75;
		mouthSmile01_comp.bgColor = mouthSmile01_comp_properties.bgColor;
		mouthSmile01_comp.shutterPhase = -90;
		mouthSmile01_comp.resolutionFactor = [2, 2];
		mouthSmile01_comp.parentFolder = mouths_folder;
	var beardTexture_comp_properties = {"name":"Beard Texture","typeName":"Composition","label":15,"comment":"","height":500,"width":500,"pixelAspect":1,"bgColor":[0.6156862745098,0.6156862745098,0.6156862745098],"duration":18,"numLayers":1,"frameRate":24};
	var beardTexture_comp = app.project.items.addComp(beardTexture_comp_properties.name, beardTexture_comp_properties.width, beardTexture_comp_properties.height, beardTexture_comp_properties.pixelAspect, beardTexture_comp_properties.duration, beardTexture_comp_properties.frameRate);
		beardTexture_comp.time = 3.75;
		beardTexture_comp.bgColor = beardTexture_comp_properties.bgColor;
		beardTexture_comp.shutterPhase = -90;
		beardTexture_comp.resolutionFactor = [2, 2];
		beardTexture_comp.parentFolder = textureComps_folder;
	var hairMiddleTexture_comp_properties = {"name":"Hair Middle Texture","typeName":"Composition","label":15,"comment":"","height":500,"width":400,"pixelAspect":1,"bgColor":[0.6156862745098,0.6156862745098,0.6156862745098],"duration":18,"numLayers":1,"frameRate":24};
	var hairMiddleTexture_comp = app.project.items.addComp(hairMiddleTexture_comp_properties.name, hairMiddleTexture_comp_properties.width, hairMiddleTexture_comp_properties.height, hairMiddleTexture_comp_properties.pixelAspect, hairMiddleTexture_comp_properties.duration, hairMiddleTexture_comp_properties.frameRate);
		hairMiddleTexture_comp.time = 3.75;
		hairMiddleTexture_comp.bgColor = hairMiddleTexture_comp_properties.bgColor;
		hairMiddleTexture_comp.shutterPhase = -90;
		hairMiddleTexture_comp.resolutionFactor = [2, 2];
		hairMiddleTexture_comp.parentFolder = textureComps_folder;
	var faceShapeTexture_comp_properties = {"name":"Face Shape Texture","typeName":"Composition","label":15,"comment":"","height":450,"width":450,"pixelAspect":1,"bgColor":[1,1,1],"duration":18,"numLayers":1,"frameRate":24};
	var faceShapeTexture_comp = app.project.items.addComp(faceShapeTexture_comp_properties.name, faceShapeTexture_comp_properties.width, faceShapeTexture_comp_properties.height, faceShapeTexture_comp_properties.pixelAspect, faceShapeTexture_comp_properties.duration, faceShapeTexture_comp_properties.frameRate);
		faceShapeTexture_comp.time = 3.75;
		faceShapeTexture_comp.bgColor = faceShapeTexture_comp_properties.bgColor;
		faceShapeTexture_comp.shutterPhase = -90;
		faceShapeTexture_comp.resolutionFactor = [2, 2];
		faceShapeTexture_comp.parentFolder = textureComps_folder;
	var earsTexture_comp_properties = {"name":"Ears Texture","typeName":"Composition","label":15,"comment":"","height":400,"width":400,"pixelAspect":1,"bgColor":[0.6156862745098,0.6156862745098,0.6156862745098],"duration":18,"numLayers":1,"frameRate":24};
	var earsTexture_comp = app.project.items.addComp(earsTexture_comp_properties.name, earsTexture_comp_properties.width, earsTexture_comp_properties.height, earsTexture_comp_properties.pixelAspect, earsTexture_comp_properties.duration, earsTexture_comp_properties.frameRate);
		earsTexture_comp.time = 3.75;
		earsTexture_comp.bgColor = earsTexture_comp_properties.bgColor;
		earsTexture_comp.shutterPhase = -90;
		earsTexture_comp.resolutionFactor = [2, 2];
		earsTexture_comp.parentFolder = textureComps_folder;
	var earsTexture2_comp_properties = {"name":"Ears Texture 2","typeName":"Composition","label":15,"comment":"","height":400,"width":400,"pixelAspect":1,"bgColor":[0.6156862745098,0.6156862745098,0.6156862745098],"duration":18,"numLayers":1,"frameRate":24};
	var earsTexture2_comp = app.project.items.addComp(earsTexture2_comp_properties.name, earsTexture2_comp_properties.width, earsTexture2_comp_properties.height, earsTexture2_comp_properties.pixelAspect, earsTexture2_comp_properties.duration, earsTexture2_comp_properties.frameRate);
		earsTexture2_comp.time = 3.75;
		earsTexture2_comp.bgColor = earsTexture2_comp_properties.bgColor;
		earsTexture2_comp.shutterPhase = -90;
		earsTexture2_comp.resolutionFactor = [2, 2];
		earsTexture2_comp.parentFolder = textureComps_folder;
	var neckTexture_comp_properties = {"name":"Neck Texture","typeName":"Composition","label":15,"comment":"","height":400,"width":250,"pixelAspect":1,"bgColor":[0.6156862745098,0.6156862745098,0.6156862745098],"duration":18,"numLayers":1,"frameRate":24};
	var neckTexture_comp = app.project.items.addComp(neckTexture_comp_properties.name, neckTexture_comp_properties.width, neckTexture_comp_properties.height, neckTexture_comp_properties.pixelAspect, neckTexture_comp_properties.duration, neckTexture_comp_properties.frameRate);
		neckTexture_comp.time = 3.75;
		neckTexture_comp.bgColor = neckTexture_comp_properties.bgColor;
		neckTexture_comp.shutterPhase = -90;
		neckTexture_comp.resolutionFactor = [2, 2];
		neckTexture_comp.parentFolder = textureComps_folder;
	var bodyTexture2_comp_properties = {"name":"Body Texture 2","typeName":"Composition","label":15,"comment":"","height":800,"width":800,"pixelAspect":1,"bgColor":[1,1,1],"duration":18,"numLayers":1,"frameRate":24};
	var bodyTexture2_comp = app.project.items.addComp(bodyTexture2_comp_properties.name, bodyTexture2_comp_properties.width, bodyTexture2_comp_properties.height, bodyTexture2_comp_properties.pixelAspect, bodyTexture2_comp_properties.duration, bodyTexture2_comp_properties.frameRate);
		bodyTexture2_comp.time = 3.75;
		bodyTexture2_comp.bgColor = bodyTexture2_comp_properties.bgColor;
		bodyTexture2_comp.shutterPhase = -90;
		bodyTexture2_comp.resolutionFactor = [2, 2];
		bodyTexture2_comp.parentFolder = textureComps_folder;
	var bodyTexture_comp_properties = {"name":"Body Texture","typeName":"Composition","label":15,"comment":"","height":800,"width":800,"pixelAspect":1,"bgColor":[1,1,1],"duration":18,"numLayers":1,"frameRate":24};
	var bodyTexture_comp = app.project.items.addComp(bodyTexture_comp_properties.name, bodyTexture_comp_properties.width, bodyTexture_comp_properties.height, bodyTexture_comp_properties.pixelAspect, bodyTexture_comp_properties.duration, bodyTexture_comp_properties.frameRate);
		bodyTexture_comp.time = 3.75;
		bodyTexture_comp.bgColor = bodyTexture_comp_properties.bgColor;
		bodyTexture_comp.shutterPhase = -90;
		bodyTexture_comp.resolutionFactor = [2, 2];
		bodyTexture_comp.parentFolder = textureComps_folder;
	var hipsTexture2_comp_properties = {"name":"Hips Texture 2","typeName":"Composition","label":15,"comment":"","height":900,"width":700,"pixelAspect":1,"bgColor":[1,1,1],"duration":18,"numLayers":1,"frameRate":24};
	var hipsTexture2_comp = app.project.items.addComp(hipsTexture2_comp_properties.name, hipsTexture2_comp_properties.width, hipsTexture2_comp_properties.height, hipsTexture2_comp_properties.pixelAspect, hipsTexture2_comp_properties.duration, hipsTexture2_comp_properties.frameRate);
		hipsTexture2_comp.time = 3.75;
		hipsTexture2_comp.bgColor = hipsTexture2_comp_properties.bgColor;
		hipsTexture2_comp.shutterPhase = -90;
		hipsTexture2_comp.resolutionFactor = [2, 2];
		hipsTexture2_comp.parentFolder = textureComps_folder;
	var hipsTexture_comp_properties = {"name":"Hips Texture","typeName":"Composition","label":15,"comment":"","height":900,"width":700,"pixelAspect":1,"bgColor":[1,1,1],"duration":18,"numLayers":1,"frameRate":24};
	var hipsTexture_comp = app.project.items.addComp(hipsTexture_comp_properties.name, hipsTexture_comp_properties.width, hipsTexture_comp_properties.height, hipsTexture_comp_properties.pixelAspect, hipsTexture_comp_properties.duration, hipsTexture_comp_properties.frameRate);
		hipsTexture_comp.time = 3.75;
		hipsTexture_comp.bgColor = hipsTexture_comp_properties.bgColor;
		hipsTexture_comp.shutterPhase = -90;
		hipsTexture_comp.resolutionFactor = [2, 2];
		hipsTexture_comp.parentFolder = textureComps_folder;
	var feetTexture_comp_properties = {"name":"Feet Texture","typeName":"Composition","label":15,"comment":"","height":320,"width":450,"pixelAspect":1,"bgColor":[1,1,1],"duration":18,"numLayers":1,"frameRate":24};
	var feetTexture_comp = app.project.items.addComp(feetTexture_comp_properties.name, feetTexture_comp_properties.width, feetTexture_comp_properties.height, feetTexture_comp_properties.pixelAspect, feetTexture_comp_properties.duration, feetTexture_comp_properties.frameRate);
		feetTexture_comp.time = 3.75;
		feetTexture_comp.bgColor = feetTexture_comp_properties.bgColor;
		feetTexture_comp.shutterPhase = -90;
		feetTexture_comp.resolutionFactor = [2, 2];
		feetTexture_comp.parentFolder = textureComps_folder;
	var calfTexture2_comp_properties = {"name":"Calf Texture 2","typeName":"Composition","label":15,"comment":"","height":600,"width":400,"pixelAspect":1,"bgColor":[1,1,1],"duration":18,"numLayers":1,"frameRate":24};
	var calfTexture2_comp = app.project.items.addComp(calfTexture2_comp_properties.name, calfTexture2_comp_properties.width, calfTexture2_comp_properties.height, calfTexture2_comp_properties.pixelAspect, calfTexture2_comp_properties.duration, calfTexture2_comp_properties.frameRate);
		calfTexture2_comp.time = 3.75;
		calfTexture2_comp.bgColor = calfTexture2_comp_properties.bgColor;
		calfTexture2_comp.shutterPhase = -90;
		calfTexture2_comp.resolutionFactor = [2, 2];
		calfTexture2_comp.parentFolder = textureComps_folder;
	var calfTexture_comp_properties = {"name":"Calf Texture","typeName":"Composition","label":15,"comment":"","height":600,"width":400,"pixelAspect":1,"bgColor":[1,1,1],"duration":18,"numLayers":1,"frameRate":24};
	var calfTexture_comp = app.project.items.addComp(calfTexture_comp_properties.name, calfTexture_comp_properties.width, calfTexture_comp_properties.height, calfTexture_comp_properties.pixelAspect, calfTexture_comp_properties.duration, calfTexture_comp_properties.frameRate);
		calfTexture_comp.time = 3.75;
		calfTexture_comp.bgColor = calfTexture_comp_properties.bgColor;
		calfTexture_comp.shutterPhase = -90;
		calfTexture_comp.resolutionFactor = [2, 2];
		calfTexture_comp.parentFolder = textureComps_folder;
	var thighTexture2_comp_properties = {"name":"Thigh Texture 2","typeName":"Composition","label":15,"comment":"","height":600,"width":400,"pixelAspect":1,"bgColor":[1,1,1],"duration":18,"numLayers":1,"frameRate":24};
	var thighTexture2_comp = app.project.items.addComp(thighTexture2_comp_properties.name, thighTexture2_comp_properties.width, thighTexture2_comp_properties.height, thighTexture2_comp_properties.pixelAspect, thighTexture2_comp_properties.duration, thighTexture2_comp_properties.frameRate);
		thighTexture2_comp.time = 3.75;
		thighTexture2_comp.bgColor = thighTexture2_comp_properties.bgColor;
		thighTexture2_comp.shutterPhase = -90;
		thighTexture2_comp.resolutionFactor = [2, 2];
		thighTexture2_comp.parentFolder = textureComps_folder;
	var thighTexture_comp_properties = {"name":"Thigh Texture","typeName":"Composition","label":15,"comment":"","height":600,"width":400,"pixelAspect":1,"bgColor":[1,1,1],"duration":18,"numLayers":1,"frameRate":24};
	var thighTexture_comp = app.project.items.addComp(thighTexture_comp_properties.name, thighTexture_comp_properties.width, thighTexture_comp_properties.height, thighTexture_comp_properties.pixelAspect, thighTexture_comp_properties.duration, thighTexture_comp_properties.frameRate);
		thighTexture_comp.time = 3.75;
		thighTexture_comp.bgColor = thighTexture_comp_properties.bgColor;
		thighTexture_comp.shutterPhase = -90;
		thighTexture_comp.resolutionFactor = [2, 2];
		thighTexture_comp.parentFolder = textureComps_folder;
	var bodyTexture3_comp_properties = {"name":"Body Texture 3","typeName":"Composition","label":15,"comment":"","height":800,"width":800,"pixelAspect":1,"bgColor":[1,1,1],"duration":18,"numLayers":1,"frameRate":24};
	var bodyTexture3_comp = app.project.items.addComp(bodyTexture3_comp_properties.name, bodyTexture3_comp_properties.width, bodyTexture3_comp_properties.height, bodyTexture3_comp_properties.pixelAspect, bodyTexture3_comp_properties.duration, bodyTexture3_comp_properties.frameRate);
		bodyTexture3_comp.time = 3.75;
		bodyTexture3_comp.bgColor = bodyTexture3_comp_properties.bgColor;
		bodyTexture3_comp.shutterPhase = -90;
		bodyTexture3_comp.resolutionFactor = [2, 2];
		bodyTexture3_comp.parentFolder = textureComps_folder;
	var hairBackTexture_comp_properties = {"name":"Hair Back Texture","typeName":"Composition","label":15,"comment":"","height":500,"width":400,"pixelAspect":1,"bgColor":[0.6156862745098,0.6156862745098,0.6156862745098],"duration":18,"numLayers":1,"frameRate":24};
	var hairBackTexture_comp = app.project.items.addComp(hairBackTexture_comp_properties.name, hairBackTexture_comp_properties.width, hairBackTexture_comp_properties.height, hairBackTexture_comp_properties.pixelAspect, hairBackTexture_comp_properties.duration, hairBackTexture_comp_properties.frameRate);
		hairBackTexture_comp.time = 3.75;
		hairBackTexture_comp.bgColor = hairBackTexture_comp_properties.bgColor;
		hairBackTexture_comp.shutterPhase = -90;
		hairBackTexture_comp.resolutionFactor = [2, 2];
		hairBackTexture_comp.parentFolder = textureComps_folder;
	var mouthSmile_comp_properties = {"name":"Mouth Smile","typeName":"Composition","label":15,"comment":"","height":250,"width":250,"pixelAspect":1,"bgColor":[0.6156862745098,0.6156862745098,0.6156862745098],"duration":18,"numLayers":3,"frameRate":24};
	var mouthSmile_comp = app.project.items.addComp(mouthSmile_comp_properties.name, mouthSmile_comp_properties.width, mouthSmile_comp_properties.height, mouthSmile_comp_properties.pixelAspect, mouthSmile_comp_properties.duration, mouthSmile_comp_properties.frameRate);
		mouthSmile_comp.time = 3.75;
		mouthSmile_comp.bgColor = mouthSmile_comp_properties.bgColor;
		mouthSmile_comp.shutterPhase = -90;
		mouthSmile_comp.resolutionFactor = [2, 2];
		mouthSmile_comp.parentFolder = precomps_folder;
// CREATE COMPOSITIONS END

// CREATE NULL LAYERS START
	var null12_null_properties = {"name":"Null 12","typeName":"Footage","comment":"","label":1,"height":100,"width":100,"mainSource":{"color":[1,1,1]}};
	var null12_null = findProjectItem(solids_folder, false, null12_null_properties);
	if (null12_null === null) {
		var null12_tempNull = character04Bicycle_comp.layers.addNull();
			null12_null = null12_tempNull.source;
			null12_null.name = null12_null_properties.name;
			null12_null.label = null12_null_properties.label;
			null12_null.mainSource.color = null12_null_properties.mainSource.color;
			null12_null.parentFolder = solids_folder;
		null12_tempNull.remove();
	}
	var null11_null_properties = {"name":"Null 11","typeName":"Footage","comment":"","label":1,"height":100,"width":100,"mainSource":{"color":[1,1,1]}};
	var null11_null = findProjectItem(solids_folder, false, null11_null_properties);
	if (null11_null === null) {
		var null11_tempNull = character04Bicycle_comp.layers.addNull();
			null11_null = null11_tempNull.source;
			null11_null.name = null11_null_properties.name;
			null11_null.label = null11_null_properties.label;
			null11_null.mainSource.color = null11_null_properties.mainSource.color;
			null11_null.parentFolder = solids_folder;
		null11_tempNull.remove();
	}
	var manWomanSlider_null_properties = {"name":"Man Woman Slider","typeName":"Footage","comment":"","label":1,"height":100,"width":100,"mainSource":{"color":[1,1,1]}};
	var manWomanSlider_null = findProjectItem(solids_folder, false, manWomanSlider_null_properties);
	if (manWomanSlider_null === null) {
		var manWomanSlider_tempNull = character04Bicycle_comp.layers.addNull();
			manWomanSlider_null = manWomanSlider_tempNull.source;
			manWomanSlider_null.name = manWomanSlider_null_properties.name;
			manWomanSlider_null.label = manWomanSlider_null_properties.label;
			manWomanSlider_null.mainSource.color = manWomanSlider_null_properties.mainSource.color;
			manWomanSlider_null.parentFolder = solids_folder;
		manWomanSlider_tempNull.remove();
	}
	var null13_null_properties = {"name":"Null 13","typeName":"Footage","comment":"","label":1,"height":100,"width":100,"mainSource":{"color":[1,1,1]}};
	var null13_null = findProjectItem(solids_folder, false, null13_null_properties);
	if (null13_null === null) {
		var null13_tempNull = character04Bicycle_comp.layers.addNull();
			null13_null = null13_tempNull.source;
			null13_null.name = null13_null_properties.name;
			null13_null.label = null13_null_properties.label;
			null13_null.mainSource.color = null13_null_properties.mainSource.color;
			null13_null.parentFolder = solids_folder;
		null13_tempNull.remove();
	}
	var null14_null_properties = {"name":"Null 14","typeName":"Footage","comment":"","label":1,"height":100,"width":100,"mainSource":{"color":[1,1,1]}};
	var null14_null = findProjectItem(solids_folder, false, null14_null_properties);
	if (null14_null === null) {
		var null14_tempNull = character04Bicycle_comp.layers.addNull();
			null14_null = null14_tempNull.source;
			null14_null.name = null14_null_properties.name;
			null14_null.label = null14_null_properties.label;
			null14_null.mainSource.color = null14_null_properties.mainSource.color;
			null14_null.parentFolder = solids_folder;
		null14_tempNull.remove();
	}
	var null15_null_properties = {"name":"Null 15","typeName":"Footage","comment":"","label":1,"height":100,"width":100,"mainSource":{"color":[1,1,1]}};
	var null15_null = findProjectItem(solids_folder, false, null15_null_properties);
	if (null15_null === null) {
		var null15_tempNull = character04Bicycle_comp.layers.addNull();
			null15_null = null15_tempNull.source;
			null15_null.name = null15_null_properties.name;
			null15_null.label = null15_null_properties.label;
			null15_null.mainSource.color = null15_null_properties.mainSource.color;
			null15_null.parentFolder = solids_folder;
		null15_tempNull.remove();
	}
// CREATE NULL LAYERS END

// CREATE SOLID LAYERS START
	var headRig_solid_properties = {"name":"Head Rig","typeName":"Footage","comment":"","label":1,"pixelAspect":1,"height":75,"width":75,"mainSource":{"color":[1,1,1]}};
	var headRig_solid = findProjectItem(solids_folder, false, headRig_solid_properties);
	if (headRig_solid === null) {
		var headRig_tempSolid = character04Bicycle_comp.layers.addSolid(headRig_solid_properties.mainSource.color, headRig_solid_properties.name, headRig_solid_properties.width, headRig_solid_properties.height, headRig_solid_properties.pixelAspect);
			headRig_solid = headRig_tempSolid.source;
			headRig_solid.label = headRig_solid_properties.label;
			headRig_solid.parentFolder = solids_folder;
		headRig_tempSolid.remove();
	}
	var joystkeyes_solid_properties = {"name":"JoyStkEyes","typeName":"Footage","comment":"","label":1,"pixelAspect":1,"height":75,"width":75,"mainSource":{"color":[1,1,1]}};
	var joystkeyes_solid = findProjectItem(solids_folder, false, joystkeyes_solid_properties);
	if (joystkeyes_solid === null) {
		var joystkeyes_tempSolid = character04Bicycle_comp.layers.addSolid(joystkeyes_solid_properties.mainSource.color, joystkeyes_solid_properties.name, joystkeyes_solid_properties.width, joystkeyes_solid_properties.height, joystkeyes_solid_properties.pixelAspect);
			joystkeyes_solid = joystkeyes_tempSolid.source;
			joystkeyes_solid.label = joystkeyes_solid_properties.label;
			joystkeyes_solid.parentFolder = solids_folder;
		joystkeyes_tempSolid.remove();
	}
	var eyebrowsCtrl_solid_properties = {"name":"Eyebrows Ctrl","typeName":"Footage","comment":"","label":1,"pixelAspect":1,"height":75,"width":75,"mainSource":{"color":[1,1,1]}};
	var eyebrowsCtrl_solid = findProjectItem(solids_folder, false, eyebrowsCtrl_solid_properties);
	if (eyebrowsCtrl_solid === null) {
		var eyebrowsCtrl_tempSolid = character04Bicycle_comp.layers.addSolid(eyebrowsCtrl_solid_properties.mainSource.color, eyebrowsCtrl_solid_properties.name, eyebrowsCtrl_solid_properties.width, eyebrowsCtrl_solid_properties.height, eyebrowsCtrl_solid_properties.pixelAspect);
			eyebrowsCtrl_solid = eyebrowsCtrl_tempSolid.source;
			eyebrowsCtrl_solid.label = eyebrowsCtrl_solid_properties.label;
			eyebrowsCtrl_solid.parentFolder = solids_folder;
		eyebrowsCtrl_tempSolid.remove();
	}
// CREATE SOLID LAYERS END

// Working with comp "name:Character 04 Bicycle", varName "character04Bicycle_comp";
	character04Bicycle_comp.openInViewer();
	// Add Shape Layer "C_HAND L", varName "chandL";
	var chandL = character04Bicycle_comp.layers.addShape();
		chandL.name = "C_HAND L";
		chandL.label = 14;
		chandL.comment = "|Controllers|  [Duik.twoLayerIK|layer1:DUIK TIGH|layer2:DUIK CALF] [Duik.goal|layer:DUIK FEET]";
		chandL.guideLayer = true;
		chandL.moveToEnd();
		chandL.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		chandL.property("ADBE Root Vectors Group").property(1).name = "Icon";
		chandL.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Group");
		chandL.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Scale";
		chandL.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).addProperty("ADBE Vector Shape - Group");
		chandL.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(1).name = "Path 1";
		var chandLPath = chandL.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(1).property("ADBE Vector Shape");
		var chandLPath_newShape = new Shape();
			chandLPath_newShape.vertices = [[-10, -20], [-20, -20], [-20, -10]];
			chandLPath_newShape.closed = false;
		chandLPath.setValue(chandLPath_newShape);
		chandL.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).addProperty("ADBE Vector Shape - Group");
		chandL.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(2).name = "Path 2";
		var chandLPath3 = chandL.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(2).property("ADBE Vector Shape");
		var chandLPath3_newShape = new Shape();
			chandLPath3_newShape.vertices = [[10, -20], [20, -20], [20, -10]];
			chandLPath3_newShape.closed = false;
		chandLPath3.setValue(chandLPath3_newShape);
		chandL.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).addProperty("ADBE Vector Shape - Group");
		chandL.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(3).name = "Path 3";
		var chandLPath5 = chandL.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(3).property("ADBE Vector Shape");
		var chandLPath5_newShape = new Shape();
			chandLPath5_newShape.vertices = [[10, 20], [20, 20], [20, 10]];
			chandLPath5_newShape.closed = false;
		chandLPath5.setValue(chandLPath5_newShape);
		chandL.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).addProperty("ADBE Vector Shape - Group");
		chandL.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(4).name = "Path 4";
		var chandLPath7 = chandL.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(4).property("ADBE Vector Shape");
		var chandLPath7_newShape = new Shape();
			chandLPath7_newShape.vertices = [[-10, 20], [-20, 20], [-20, 10]];
			chandLPath7_newShape.closed = false;
		chandLPath7.setValue(chandLPath7_newShape);
		chandL.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		chandL.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(5).name = "Stroke 1";
		chandL.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(5).property("ADBE Vector Stroke Color").setValue([0.23921568627451,0.63529411764706,0.64705882352941,1]);
		chandL.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(5).property("ADBE Vector Stroke Width").setValue(4);
		chandL.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Scale").setValue([123.333335876465,123.333335876465]);
		///// Placeholder for ANIMATION PRESET - START
		///// Pseudo Effect "EVT4.1 Rig Control" (Pseudo/EVT4.1 Rig Control)
			if (!chandL.property("ADBE Effect Parade").canAddProperty("Pseudo/EVT4.1 Rig Control")) {
				if (typeof ap_PE_Evt41RigControl !== "undefined" && ap_PE_Evt41RigControl.exists) {
					makePseudoEffectLive(ap_PE_Evt41RigControl);
				} else {
					alert("Cannot apply \"EVT4.1 Rig Control\" (Pseudo/EVT4.1 Rig Control) effect to layer \"" + chandL.name + "\" because you don't have this effect installed on your system.");
					return;
				}
			}
			chandL.property("ADBE Effect Parade").addProperty("Pseudo/EVT4.1 Rig Control");
		///// Placeholder for ANIMATION PRESET - END
		chandL.property("ADBE Effect Parade").property(1).name = "EVT4.1 Rig Control";
		chandL.property("ADBE Effect Parade").property(1).property("Pseudo/EVT4.1 Rig Control-0001").setValue(1);
		var chandLPosition = chandL.property("ADBE Transform Group").property("ADBE Position");
			var chandLPosition_keyTimesArray = [0,0.83333333333333,1.66666666666667,2.5,3.33333333333333,4.16666666666667,5,5.83333333333333,6.66666666666667,7.5,8.33333333333333,9.16666666666667,10,10.8333333333333,11.6666666666667,12.5,13.3333333333333,14.1666666666667,15,15.8333333333333,16.6666666666667,17.5];
			var chandLPosition_valuesArray = [[527.944458007813,451.635955810547,0],[522.977600097656,445.053375244141,0],[527.944458007813,451.635955810547,0],[522.977600097656,445.053375244141,0],[527.944458007813,451.635955810547,0],[522.977600097656,445.053375244141,0],[527.944458007813,451.635955810547,0],[522.977600097656,445.053375244141,0],[527.944458007813,451.635955810547,0],[522.977600097656,445.053375244141,0],[527.944458007813,451.635955810547,0],[522.977600097656,445.053375244141,0],[527.944458007813,451.635955810547,0],[522.977600097656,445.053375244141,0],[527.944458007813,451.635955810547,0],[522.977600097656,445.053375244141,0],[527.944458007813,451.635955810547,0],[522.977600097656,445.053375244141,0],[527.944458007813,451.635955810547,0],[522.977600097656,445.053375244141,0],[527.944458007813,451.635955810547,0],[522.977600097656,445.053375244141,0]];
			chandLPosition.setValuesAtTimes(chandLPosition_keyTimesArray, chandLPosition_valuesArray);
			var chandLPosition_inSpatialTangents = [[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]];
			var chandLPosition_outSpatialTangents = [[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]];
			applySpatialTangents(chandLPosition, chandLPosition_keyTimesArray, chandLPosition_inSpatialTangents, chandLPosition_outSpatialTangents);
			var chandLPosition_easeInSpeedArray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
			var chandLPosition_easeInInfluArray = [33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333];
			var chandLPosition_easeOutSpeedArray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
			var chandLPosition_easeOutInfluArray = [33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333];
			var chandLPosition_keyInInterpolationType = [KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER];
			var chandLPosition_keyOutInterpolationType = [KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER];
			applyEasing(chandLPosition, chandLPosition_keyTimesArray, [chandLPosition_easeInSpeedArray, chandLPosition_easeInInfluArray], [chandLPosition_easeOutSpeedArray, chandLPosition_easeOutInfluArray], [chandLPosition_keyInInterpolationType, chandLPosition_keyOutInterpolationType]);

		chandL.selected = false;
	// Add Shape Layer "C_HAND R", varName "chandR";
	var chandR = character04Bicycle_comp.layers.addShape();
		chandR.name = "C_HAND R";
		chandR.label = 1;
		chandR.comment = "|Controllers|  [Duik.twoLayerIK|layer1:DUIK TIGH|layer2:DUIK CALF] [Duik.goal|layer:DUIK FEET]";
		chandR.guideLayer = true;
		chandR.moveToEnd();
		chandR.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		chandR.property("ADBE Root Vectors Group").property(1).name = "Icon";
		chandR.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Group");
		chandR.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Scale";
		chandR.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).addProperty("ADBE Vector Shape - Group");
		chandR.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(1).name = "Path 1";
		var chandRPath = chandR.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(1).property("ADBE Vector Shape");
		var chandRPath_newShape = new Shape();
			chandRPath_newShape.vertices = [[-10, -20], [-20, -20], [-20, -10]];
			chandRPath_newShape.closed = false;
		chandRPath.setValue(chandRPath_newShape);
		chandR.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).addProperty("ADBE Vector Shape - Group");
		chandR.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(2).name = "Path 2";
		var chandRPath3 = chandR.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(2).property("ADBE Vector Shape");
		var chandRPath3_newShape = new Shape();
			chandRPath3_newShape.vertices = [[10, -20], [20, -20], [20, -10]];
			chandRPath3_newShape.closed = false;
		chandRPath3.setValue(chandRPath3_newShape);
		chandR.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).addProperty("ADBE Vector Shape - Group");
		chandR.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(3).name = "Path 3";
		var chandRPath5 = chandR.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(3).property("ADBE Vector Shape");
		var chandRPath5_newShape = new Shape();
			chandRPath5_newShape.vertices = [[10, 20], [20, 20], [20, 10]];
			chandRPath5_newShape.closed = false;
		chandRPath5.setValue(chandRPath5_newShape);
		chandR.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).addProperty("ADBE Vector Shape - Group");
		chandR.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(4).name = "Path 4";
		var chandRPath7 = chandR.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(4).property("ADBE Vector Shape");
		var chandRPath7_newShape = new Shape();
			chandRPath7_newShape.vertices = [[-10, 20], [-20, 20], [-20, 10]];
			chandRPath7_newShape.closed = false;
		chandRPath7.setValue(chandRPath7_newShape);
		chandR.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		chandR.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(5).name = "Stroke 1";
		chandR.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(5).property("ADBE Vector Stroke Color").setValue([0.70980392156863,0.21960784313725,0.21960784313725,1]);
		chandR.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(5).property("ADBE Vector Stroke Width").setValue(4);
		chandR.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Scale").setValue([123.333335876465,123.333335876465]);
		///// Placeholder for ANIMATION PRESET - START
		///// Pseudo Effect "EVT4.1 Rig Control" (Pseudo/EVT4.1 Rig Control)
			if (!chandR.property("ADBE Effect Parade").canAddProperty("Pseudo/EVT4.1 Rig Control")) {
				if (typeof ap_PE_Evt41RigControl !== "undefined" && ap_PE_Evt41RigControl.exists) {
					makePseudoEffectLive(ap_PE_Evt41RigControl);
				} else {
					alert("Cannot apply \"EVT4.1 Rig Control\" (Pseudo/EVT4.1 Rig Control) effect to layer \"" + chandR.name + "\" because you don't have this effect installed on your system.");
					return;
				}
			}
			chandR.property("ADBE Effect Parade").addProperty("Pseudo/EVT4.1 Rig Control");
		///// Placeholder for ANIMATION PRESET - END
		chandR.property("ADBE Effect Parade").property(1).name = "EVT4.1 Rig Control";
		chandR.property("ADBE Effect Parade").property(1).property("Pseudo/EVT4.1 Rig Control-0001").setValue(1);
		var chandRPosition = chandR.property("ADBE Transform Group").property("ADBE Position");
			var chandRPosition_keyTimesArray = [0,0.83333333333333,1.66666666666667,2.5,3.33333333333333,4.16666666666667,5,5.83333333333333,6.66666666666667,7.5,8.33333333333333,9.16666666666667,10,10.8333333333333,11.6666666666667,12.5,13.3333333333333,14.1666666666667,15,15.8333333333333,16.6666666666667,17.5];
			var chandRPosition_valuesArray = [[704.723906104635,412.171179384639,0],[699.757048194479,405.588598818233,0],[704.723906104635,412.171179384639,0],[699.757048194479,405.588598818233,0],[704.723906104635,412.171179384639,0],[699.757048194479,405.588598818233,0],[704.723906104635,412.171179384639,0],[699.757048194479,405.588598818233,0],[704.723906104635,412.171179384639,0],[699.757048194479,405.588598818233,0],[704.723906104635,412.171179384639,0],[699.757048194479,405.588598818233,0],[704.723906104635,412.171179384639,0],[699.757048194479,405.588598818233,0],[704.723906104635,412.171179384639,0],[699.757048194479,405.588598818233,0],[704.723906104635,412.171179384639,0],[699.757048194479,405.588598818233,0],[704.723906104635,412.171179384639,0],[699.757048194479,405.588598818233,0],[704.723906104635,412.171179384639,0],[699.757048194479,405.588598818233,0]];
			chandRPosition.setValuesAtTimes(chandRPosition_keyTimesArray, chandRPosition_valuesArray);
			var chandRPosition_inSpatialTangents = [[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]];
			var chandRPosition_outSpatialTangents = [[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]];
			applySpatialTangents(chandRPosition, chandRPosition_keyTimesArray, chandRPosition_inSpatialTangents, chandRPosition_outSpatialTangents);
			var chandRPosition_easeInSpeedArray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
			var chandRPosition_easeInInfluArray = [33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333];
			var chandRPosition_easeOutSpeedArray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
			var chandRPosition_easeOutInfluArray = [33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333];
			var chandRPosition_keyInInterpolationType = [KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER];
			var chandRPosition_keyOutInterpolationType = [KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER];
			applyEasing(chandRPosition, chandRPosition_keyTimesArray, [chandRPosition_easeInSpeedArray, chandRPosition_easeInInfluArray], [chandRPosition_easeOutSpeedArray, chandRPosition_easeOutInfluArray], [chandRPosition_keyInInterpolationType, chandRPosition_keyOutInterpolationType]);

		chandR.selected = false;
	// Add Shape Layer "C_BODY", varName "cbody";
	var cbody = character04Bicycle_comp.layers.addShape();
		cbody.name = "C_BODY";
		cbody.comment = "|Controllers| ";
		cbody.guideLayer = true;
		cbody.moveToEnd();
		cbody.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		cbody.property("ADBE Root Vectors Group").property(1).name = "Icon";
		cbody.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Group");
		cbody.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Scale";
		cbody.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).addProperty("ADBE Vector Shape - Group");
		cbody.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(1).name = "Path 1";
		var cbodyPath = cbody.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(1).property("ADBE Vector Shape");
		var cbodyPath_newShape = new Shape();
			cbodyPath_newShape.vertices = [[-10, -20], [-20, -20], [-20, -10]];
			cbodyPath_newShape.closed = false;
		cbodyPath.setValue(cbodyPath_newShape);
		cbody.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).addProperty("ADBE Vector Shape - Group");
		cbody.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(2).name = "Path 2";
		var cbodyPath3 = cbody.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(2).property("ADBE Vector Shape");
		var cbodyPath3_newShape = new Shape();
			cbodyPath3_newShape.vertices = [[10, -20], [20, -20], [20, -10]];
			cbodyPath3_newShape.closed = false;
		cbodyPath3.setValue(cbodyPath3_newShape);
		cbody.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).addProperty("ADBE Vector Shape - Group");
		cbody.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(3).name = "Path 3";
		var cbodyPath5 = cbody.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(3).property("ADBE Vector Shape");
		var cbodyPath5_newShape = new Shape();
			cbodyPath5_newShape.vertices = [[10, 20], [20, 20], [20, 10]];
			cbodyPath5_newShape.closed = false;
		cbodyPath5.setValue(cbodyPath5_newShape);
		cbody.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).addProperty("ADBE Vector Shape - Group");
		cbody.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(4).name = "Path 4";
		var cbodyPath7 = cbody.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(4).property("ADBE Vector Shape");
		var cbodyPath7_newShape = new Shape();
			cbodyPath7_newShape.vertices = [[-10, 20], [-20, 20], [-20, 10]];
			cbodyPath7_newShape.closed = false;
		cbodyPath7.setValue(cbodyPath7_newShape);
		cbody.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		cbody.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(5).name = "Stroke 1";
		cbody.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(5).property("ADBE Vector Stroke Color").setValue([0.40392156862745,0.49019607843137,0.87843137254902,1]);
		cbody.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(5).property("ADBE Vector Stroke Width").setValue(4);
		cbody.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Scale").setValue([123.333335876465,123.333335876465]);
		cbody.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0,0]);
		cbody.property("ADBE Transform Group").property("ADBE Position").setValue([350,350,0]);
		cbody.property("ADBE Transform Group").property("ADBE Rotate Z").setValue(5);
		cbody.selected = false;
	// Add Shape Layer "C_HIPS", varName "chips";
	var chips = character04Bicycle_comp.layers.addShape();
		chips.name = "C_HIPS";
		chips.label = 2;
		chips.comment = "|Controllers| ";
		chips.guideLayer = true;
		chips.moveToEnd();
		chips.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		chips.property("ADBE Root Vectors Group").property(1).name = "Icon";
		chips.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Group");
		chips.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Scale";
		chips.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).addProperty("ADBE Vector Shape - Group");
		chips.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(1).name = "Path 1";
		var chipsPath = chips.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(1).property("ADBE Vector Shape");
		var chipsPath_newShape = new Shape();
			chipsPath_newShape.vertices = [[-10, -20], [-20, -20], [-20, -10]];
			chipsPath_newShape.closed = false;
		chipsPath.setValue(chipsPath_newShape);
		chips.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).addProperty("ADBE Vector Shape - Group");
		chips.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(2).name = "Path 2";
		var chipsPath3 = chips.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(2).property("ADBE Vector Shape");
		var chipsPath3_newShape = new Shape();
			chipsPath3_newShape.vertices = [[10, -20], [20, -20], [20, -10]];
			chipsPath3_newShape.closed = false;
		chipsPath3.setValue(chipsPath3_newShape);
		chips.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).addProperty("ADBE Vector Shape - Group");
		chips.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(3).name = "Path 3";
		var chipsPath5 = chips.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(3).property("ADBE Vector Shape");
		var chipsPath5_newShape = new Shape();
			chipsPath5_newShape.vertices = [[10, 20], [20, 20], [20, 10]];
			chipsPath5_newShape.closed = false;
		chipsPath5.setValue(chipsPath5_newShape);
		chips.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).addProperty("ADBE Vector Shape - Group");
		chips.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(4).name = "Path 4";
		var chipsPath7 = chips.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(4).property("ADBE Vector Shape");
		var chipsPath7_newShape = new Shape();
			chipsPath7_newShape.vertices = [[-10, 20], [-20, 20], [-20, 10]];
			chipsPath7_newShape.closed = false;
		chipsPath7.setValue(chipsPath7_newShape);
		chips.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		chips.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(5).name = "Stroke 1";
		chips.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(5).property("ADBE Vector Stroke Color").setValue([0.89411764705882,0.84705882352941,0.29803921568627,1]);
		chips.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(5).property("ADBE Vector Stroke Width").setValue(4);
		chips.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Scale").setValue([123.333335876465,123.333335876465]);
		chips.property("ADBE Transform Group").property("ADBE Position").setValue([910.650000343323,540.8125,0]);
		chips.property("ADBE Transform Group").property("ADBE Scale").setValue([100,100,100]);
		var chipsRotation = chips.property("ADBE Transform Group").property("ADBE Rotate Z");
			var chipsRotation_keyTimesArray = [0,0.83333333333333,1.66666666666667,2.5,3.33333333333333,4.16666666666667,5,5.83333333333333,6.66666666666667,7.5,8.33333333333333,9.16666666666667,10,10.8333333333333,11.6666666666667,12.5,13.3333333333333,14.1666666666667,15,15.8333333333333,16.6666666666667,17.5];
			var chipsRotation_valuesArray = [16,18,16,18,16,18,16,18,16,18,16,18,16,18,16,18,16,18,16,18,16,18];
			chipsRotation.setValuesAtTimes(chipsRotation_keyTimesArray, chipsRotation_valuesArray);
			var chipsRotation_easeInSpeedArray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
			var chipsRotation_easeInInfluArray = [33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333];
			var chipsRotation_easeOutSpeedArray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
			var chipsRotation_easeOutInfluArray = [33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333];
			var chipsRotation_keyInInterpolationType = [KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER];
			var chipsRotation_keyOutInterpolationType = [KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER];
			applyEasing(chipsRotation, chipsRotation_keyTimesArray, [chipsRotation_easeInSpeedArray, chipsRotation_easeInInfluArray], [chipsRotation_easeOutSpeedArray, chipsRotation_easeOutInfluArray], [chipsRotation_keyInInterpolationType, chipsRotation_keyOutInterpolationType]);

		chips.selected = false;
	// Add Shape Layer "C_NECK", varName "cneck";
	var cneck = character04Bicycle_comp.layers.addShape();
		cneck.name = "C_NECK";
		cneck.enabled = false;
		cneck.comment = "|Controllers| ";
		cneck.guideLayer = true;
		cneck.moveToEnd();
		cneck.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		cneck.property("ADBE Root Vectors Group").property(1).name = "Icon";
		cneck.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Group");
		cneck.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Scale";
		cneck.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).addProperty("ADBE Vector Shape - Group");
		cneck.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(1).name = "Path 1";
		var cneckPath = cneck.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(1).property("ADBE Vector Shape");
		var cneckPath_newShape = new Shape();
			cneckPath_newShape.vertices = [[-10, -20], [-20, -20], [-20, -10]];
			cneckPath_newShape.closed = false;
		cneckPath.setValue(cneckPath_newShape);
		cneck.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).addProperty("ADBE Vector Shape - Group");
		cneck.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(2).name = "Path 2";
		var cneckPath3 = cneck.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(2).property("ADBE Vector Shape");
		var cneckPath3_newShape = new Shape();
			cneckPath3_newShape.vertices = [[10, -20], [20, -20], [20, -10]];
			cneckPath3_newShape.closed = false;
		cneckPath3.setValue(cneckPath3_newShape);
		cneck.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).addProperty("ADBE Vector Shape - Group");
		cneck.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(3).name = "Path 3";
		var cneckPath5 = cneck.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(3).property("ADBE Vector Shape");
		var cneckPath5_newShape = new Shape();
			cneckPath5_newShape.vertices = [[10, 20], [20, 20], [20, 10]];
			cneckPath5_newShape.closed = false;
		cneckPath5.setValue(cneckPath5_newShape);
		cneck.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).addProperty("ADBE Vector Shape - Group");
		cneck.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(4).name = "Path 4";
		var cneckPath7 = cneck.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(4).property("ADBE Vector Shape");
		var cneckPath7_newShape = new Shape();
			cneckPath7_newShape.vertices = [[-10, 20], [-20, 20], [-20, 10]];
			cneckPath7_newShape.closed = false;
		cneckPath7.setValue(cneckPath7_newShape);
		cneck.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		cneck.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(5).name = "Stroke 1";
		cneck.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(5).property("ADBE Vector Stroke Width").setValue(4);
		cneck.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Scale").setValue([123.333335876465,123.333335876465]);
		cneck.property("ADBE Transform Group").property("ADBE Position").setValue([400,236.5,0]);
		var cneckRotation = cneck.property("ADBE Transform Group").property("ADBE Rotate Z");
			var cneckRotation_keyTimesArray = [0];
			var cneckRotation_valuesArray = [-1];
			cneckRotation.setValuesAtTimes(cneckRotation_keyTimesArray, cneckRotation_valuesArray);
		cneck.selected = false;
	// Add Shape Layer "C_HEAD", varName "chead";
	var chead = character04Bicycle_comp.layers.addShape();
		chead.name = "C_HEAD";
		chead.enabled = false;
		chead.comment = "|Controllers| ";
		chead.guideLayer = true;
		chead.moveToEnd();
		chead.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		chead.property("ADBE Root Vectors Group").property(1).name = "Icon";
		chead.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Group");
		chead.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Scale";
		chead.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).addProperty("ADBE Vector Shape - Group");
		chead.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(1).name = "Path 1";
		var cheadPath = chead.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(1).property("ADBE Vector Shape");
		var cheadPath_newShape = new Shape();
			cheadPath_newShape.vertices = [[-10, -20], [-20, -20], [-20, -10]];
			cheadPath_newShape.closed = false;
		cheadPath.setValue(cheadPath_newShape);
		chead.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).addProperty("ADBE Vector Shape - Group");
		chead.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(2).name = "Path 2";
		var cheadPath3 = chead.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(2).property("ADBE Vector Shape");
		var cheadPath3_newShape = new Shape();
			cheadPath3_newShape.vertices = [[10, -20], [20, -20], [20, -10]];
			cheadPath3_newShape.closed = false;
		cheadPath3.setValue(cheadPath3_newShape);
		chead.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).addProperty("ADBE Vector Shape - Group");
		chead.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(3).name = "Path 3";
		var cheadPath5 = chead.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(3).property("ADBE Vector Shape");
		var cheadPath5_newShape = new Shape();
			cheadPath5_newShape.vertices = [[10, 20], [20, 20], [20, 10]];
			cheadPath5_newShape.closed = false;
		cheadPath5.setValue(cheadPath5_newShape);
		chead.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).addProperty("ADBE Vector Shape - Group");
		chead.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(4).name = "Path 4";
		var cheadPath7 = chead.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(4).property("ADBE Vector Shape");
		var cheadPath7_newShape = new Shape();
			cheadPath7_newShape.vertices = [[-10, 20], [-20, 20], [-20, 10]];
			cheadPath7_newShape.closed = false;
		cheadPath7.setValue(cheadPath7_newShape);
		chead.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		chead.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(5).name = "Stroke 1";
		chead.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(5).property("ADBE Vector Stroke Width").setValue(4);
		chead.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Scale").setValue([123.333335876465,123.333335876465]);
		chead.property("ADBE Transform Group").property("ADBE Position").setValue([125,177,0]);
		chead.property("ADBE Transform Group").property("ADBE Scale").setValue([100,100,100]);
		var cheadRotation = chead.property("ADBE Transform Group").property("ADBE Rotate Z");
			var cheadRotation_keyTimesArray = [0,0.83333333333333,1.66666666666667,2.5,3.33333333333333,4.16666666666667,5,5.83333333333333,6.66666666666667,7.5,8.33333333333333,9.16666666666667,10,10.8333333333333,11.6666666666667,12.5,13.3333333333333,14.1666666666667,15,15.8333333333333,16.6666666666667,17.5];
			var cheadRotation_valuesArray = [-8,-10,-8,-10,-8,-10,-8,-10,-8,-10,-8,-10,-8,-10,-8,-10,-8,-10,-8,-10,-8,-10];
			cheadRotation.setValuesAtTimes(cheadRotation_keyTimesArray, cheadRotation_valuesArray);
			var cheadRotation_easeInSpeedArray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
			var cheadRotation_easeInInfluArray = [33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333];
			var cheadRotation_easeOutSpeedArray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
			var cheadRotation_easeOutInfluArray = [33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333];
			var cheadRotation_keyInInterpolationType = [KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER];
			var cheadRotation_keyOutInterpolationType = [KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER];
			applyEasing(cheadRotation, cheadRotation_keyTimesArray, [cheadRotation_easeInSpeedArray, cheadRotation_easeInInfluArray], [cheadRotation_easeOutSpeedArray, cheadRotation_easeOutInfluArray], [cheadRotation_keyInInterpolationType, cheadRotation_keyOutInterpolationType]);

		chead.selected = false;
	// Add Shape Layer "C_FEET L", varName "cfeetL";
	var cfeetL = character04Bicycle_comp.layers.addShape();
		cfeetL.name = "C_FEET L";
		cfeetL.label = 9;
		cfeetL.comment = "|Controllers|  [Duik.twoLayerIK|layer1:DUIK TIGH|layer2:DUIK CALF] [Duik.goal|layer:DUIK FEET]";
		cfeetL.guideLayer = true;
		cfeetL.moveToEnd();
		cfeetL.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		cfeetL.property("ADBE Root Vectors Group").property(1).name = "Icon";
		cfeetL.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Group");
		cfeetL.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Scale";
		cfeetL.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).addProperty("ADBE Vector Shape - Group");
		cfeetL.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(1).name = "Path 1";
		var cfeetLPath = cfeetL.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(1).property("ADBE Vector Shape");
		var cfeetLPath_newShape = new Shape();
			cfeetLPath_newShape.vertices = [[-10, -20], [-20, -20], [-20, -10]];
			cfeetLPath_newShape.closed = false;
		cfeetLPath.setValue(cfeetLPath_newShape);
		cfeetL.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).addProperty("ADBE Vector Shape - Group");
		cfeetL.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(2).name = "Path 2";
		var cfeetLPath3 = cfeetL.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(2).property("ADBE Vector Shape");
		var cfeetLPath3_newShape = new Shape();
			cfeetLPath3_newShape.vertices = [[10, -20], [20, -20], [20, -10]];
			cfeetLPath3_newShape.closed = false;
		cfeetLPath3.setValue(cfeetLPath3_newShape);
		cfeetL.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).addProperty("ADBE Vector Shape - Group");
		cfeetL.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(3).name = "Path 3";
		var cfeetLPath5 = cfeetL.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(3).property("ADBE Vector Shape");
		var cfeetLPath5_newShape = new Shape();
			cfeetLPath5_newShape.vertices = [[10, 20], [20, 20], [20, 10]];
			cfeetLPath5_newShape.closed = false;
		cfeetLPath5.setValue(cfeetLPath5_newShape);
		cfeetL.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).addProperty("ADBE Vector Shape - Group");
		cfeetL.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(4).name = "Path 4";
		var cfeetLPath7 = cfeetL.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(4).property("ADBE Vector Shape");
		var cfeetLPath7_newShape = new Shape();
			cfeetLPath7_newShape.vertices = [[-10, 20], [-20, 20], [-20, 10]];
			cfeetLPath7_newShape.closed = false;
		cfeetLPath7.setValue(cfeetLPath7_newShape);
		cfeetL.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		cfeetL.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(5).name = "Stroke 1";
		cfeetL.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(5).property("ADBE Vector Stroke Color").setValue([0.29019607843137,0.64313725490196,0.29803921568627,1]);
		cfeetL.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(5).property("ADBE Vector Stroke Width").setValue(4);
		cfeetL.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Scale").setValue([123.333335876465,123.333335876465]);
		///// Placeholder for ANIMATION PRESET - START
		///// Pseudo Effect "EVT4.1 Rig Control" (Pseudo/EVT4.1 Rig Control)
			if (!cfeetL.property("ADBE Effect Parade").canAddProperty("Pseudo/EVT4.1 Rig Control")) {
				if (typeof ap_PE_Evt41RigControl !== "undefined" && ap_PE_Evt41RigControl.exists) {
					makePseudoEffectLive(ap_PE_Evt41RigControl);
				} else {
					alert("Cannot apply \"EVT4.1 Rig Control\" (Pseudo/EVT4.1 Rig Control) effect to layer \"" + cfeetL.name + "\" because you don't have this effect installed on your system.");
					return;
				}
			}
			cfeetL.property("ADBE Effect Parade").addProperty("Pseudo/EVT4.1 Rig Control");
		///// Placeholder for ANIMATION PRESET - END
		cfeetL.property("ADBE Effect Parade").property(1).name = "EVT4.1 Rig Control";
		var cfeetLPosition = cfeetL.property("ADBE Transform Group").property("ADBE Position");
			var cfeetLPosition_keyTimesArray = [0,0.41666666666667,0.83333333333333,1.25,1.66666666666667,2.08333333333333,2.5,2.91666666666667,3.33333333333333,3.75,4.16666666666667,4.58333333333333,5,5.41666666666667,5.83333333333333,6.25,6.66666666666667,7.08333333333333,7.5,7.91666666666667,8.33333333333333,8.75,9.16666666666667,9.58333333333333,10,10.4166666666667,10.8333333333333,11.25,11.6666666666667,12.0833333333333,12.5,12.9166666666667,13.3333333333333,13.75,14.1666666666667,14.5833333333333,15,15.4166666666667,15.8333333333333,16.25,16.6666666666667,17.0833333333333,17.5];
			var cfeetLPosition_valuesArray = [[1064.2353515625,856.432861328125,0],[867.154541015625,860.562866210938,0],[1064.2353515625,856.432861328125,0],[867.154541015625,860.562866210938,0],[1064.2353515625,856.432861328125,0],[867.154541015625,860.562866210938,0],[1064.2353515625,856.432861328125,0],[867.154541015625,860.562866210938,0],[1064.2353515625,856.432861328125,0],[867.154541015625,860.562866210938,0],[1064.2353515625,856.432861328125,0],[867.154541015625,860.562866210938,0],[1064.2353515625,856.432861328125,0],[867.154541015625,860.562866210938,0],[1064.2353515625,856.432861328125,0],[867.154541015625,860.562866210938,0],[1064.2353515625,856.432861328125,0],[867.154541015625,860.562866210938,0],[1064.2353515625,856.432861328125,0],[867.154541015625,860.562866210938,0],[1064.2353515625,856.432861328125,0],[867.154541015625,860.562866210938,0],[1064.2353515625,856.432861328125,0],[867.154541015625,860.562866210938,0],[1064.2353515625,856.432861328125,0],[867.154541015625,860.562866210938,0],[1064.2353515625,856.432861328125,0],[867.154541015625,860.562866210938,0],[1064.2353515625,856.432861328125,0],[867.154541015625,860.562866210938,0],[1064.2353515625,856.432861328125,0],[867.154541015625,860.562866210938,0],[1064.2353515625,856.432861328125,0],[867.154541015625,860.562866210938,0],[1064.2353515625,856.432861328125,0],[867.154541015625,860.562866210938,0],[1064.2353515625,856.432861328125,0],[867.154541015625,860.562866210938,0],[1064.2353515625,856.432861328125,0],[867.154541015625,860.562866210938,0],[1064.2353515625,856.432861328125,0],[867.154541015625,860.562866210938,0],[1064.2353515625,856.432861328125,0]];
			cfeetLPosition.setValuesAtTimes(cfeetLPosition_keyTimesArray, cfeetLPosition_valuesArray);
			var cfeetLPosition_inSpatialTangents = [[5.23539733886719,103.432891845703,0],[5.154541015625,84.5628814697266,0],[-10.7646026611328,-105.567108154297,0],[5.154541015625,84.5628814697266,0],[-10.7646026611328,-105.567108154297,0],[5.154541015625,84.5628814697266,0],[-10.7646026611328,-105.567108154297,0],[5.154541015625,84.5628814697266,0],[-10.7646026611328,-105.567108154297,0],[5.154541015625,84.5628814697266,0],[-10.7646026611328,-105.567108154297,0],[5.154541015625,84.5628814697266,0],[-10.7646026611328,-105.567108154297,0],[5.154541015625,84.5628814697266,0],[-10.7646026611328,-105.567108154297,0],[5.154541015625,84.5628814697266,0],[-10.7646026611328,-105.567108154297,0],[5.154541015625,84.5628814697266,0],[-10.7646026611328,-105.567108154297,0],[5.154541015625,84.5628814697266,0],[-10.7646026611328,-105.567108154297,0],[5.154541015625,84.5628814697266,0],[-10.7646026611328,-105.567108154297,0],[5.154541015625,84.5628814697266,0],[-10.7646026611328,-105.567108154297,0],[5.154541015625,84.5628814697266,0],[-10.7646026611328,-105.567108154297,0],[5.154541015625,84.5628814697266,0],[-10.7646026611328,-105.567108154297,0],[5.154541015625,84.5628814697266,0],[-10.7646026611328,-105.567108154297,0],[5.154541015625,84.5628814697266,0],[-10.7646026611328,-105.567108154297,0],[5.154541015625,84.5628814697266,0],[-10.7646026611328,-105.567108154297,0],[5.154541015625,84.5628814697266,0],[-10.7646026611328,-105.567108154297,0],[5.154541015625,84.5628814697266,0],[-10.7646026611328,-105.567108154297,0],[5.154541015625,84.5628814697266,0],[-10.7646026611328,-105.567108154297,0],[5.154541015625,84.5628814697266,0],[-10.7646026611328,-105.567108154297,0]];
			var cfeetLPosition_outSpatialTangents = [[-17.6501388549805,103.922164916992,0],[1.845458984375,-112.562881469727,0],[-21.6501388549805,107.922164916992,0],[1.845458984375,-112.562881469727,0],[-21.6501388549805,107.922164916992,0],[1.845458984375,-112.562881469727,0],[-21.6501388549805,107.922164916992,0],[1.845458984375,-112.562881469727,0],[-21.6501388549805,107.922164916992,0],[1.845458984375,-112.562881469727,0],[-21.6501388549805,107.922164916992,0],[1.845458984375,-112.562881469727,0],[-21.6501388549805,107.922164916992,0],[1.845458984375,-112.562881469727,0],[-21.6501388549805,107.922164916992,0],[1.845458984375,-112.562881469727,0],[-21.6501388549805,107.922164916992,0],[1.845458984375,-112.562881469727,0],[-21.6501388549805,107.922164916992,0],[1.845458984375,-112.562881469727,0],[-21.6501388549805,107.922164916992,0],[1.845458984375,-112.562881469727,0],[-21.6501388549805,107.922164916992,0],[1.845458984375,-112.562881469727,0],[-21.6501388549805,107.922164916992,0],[1.845458984375,-112.562881469727,0],[-21.6501388549805,107.922164916992,0],[1.845458984375,-112.562881469727,0],[-21.6501388549805,107.922164916992,0],[1.845458984375,-112.562881469727,0],[-21.6501388549805,107.922164916992,0],[1.845458984375,-112.562881469727,0],[-21.6501388549805,107.922164916992,0],[1.845458984375,-112.562881469727,0],[-21.6501388549805,107.922164916992,0],[1.845458984375,-112.562881469727,0],[-21.6501388549805,107.922164916992,0],[1.845458984375,-112.562881469727,0],[-21.6501388549805,107.922164916992,0],[1.845458984375,-112.562881469727,0],[-21.6501388549805,107.922164916992,0],[1.845458984375,-112.562881469727,0],[-21.6501388549805,107.922164916992,0]];
			applySpatialTangents(cfeetLPosition, cfeetLPosition_keyTimesArray, cfeetLPosition_inSpatialTangents, cfeetLPosition_outSpatialTangents);
		cfeetL.property("ADBE Transform Group").property("ADBE Scale").setValue([90,90,100]);
		var cfeetLRotation = cfeetL.property("ADBE Transform Group").property("ADBE Rotate Z");
			var cfeetLRotation_keyTimesArray = [0,0.41666666666667,0.83333333333333,1.25,1.66666666666667,2.08333333333333,2.5,2.91666666666667,3.33333333333333,3.75,4.16666666666667,4.58333333333333,5,5.41666666666667,5.83333333333333,6.25,6.66666666666667,7.08333333333333,7.5,7.91666666666667,8.33333333333333,8.75,9.16666666666667,9.58333333333333,10,10.4166666666667,10.8333333333333,11.25,11.6666666666667,12.0833333333333,12.5,12.9166666666667,13.3333333333333,13.75,14.1666666666667,14.5833333333333,15,15.4166666666667,15.8333333333333,16.25,16.6666666666667,17.0833333333333,17.5];
			var cfeetLRotation_valuesArray = [-19,22,-19,22,-19,22,-19,22,-19,22,-19,22,-19,22,-19,22,-19,22,-19,22,-19,22,-19,22,-19,22,-19,22,-19,22,-19,22,-19,22,-19,22,-19,22,-19,22,-19,22,-19];
			cfeetLRotation.setValuesAtTimes(cfeetLRotation_keyTimesArray, cfeetLRotation_valuesArray);
		cfeetL.selected = false;
	// Add Shape Layer "C_FEET R", varName "cfeetR";
	var cfeetR = character04Bicycle_comp.layers.addShape();
		cfeetR.name = "C_FEET R";
		cfeetR.label = 10;
		cfeetR.comment = "|Controllers|  [Duik.twoLayerIK|layer1:DUIK TIGH|layer2:DUIK CALF] [Duik.goal|layer:DUIK FEET]";
		cfeetR.guideLayer = true;
		cfeetR.moveToEnd();
		cfeetR.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		cfeetR.property("ADBE Root Vectors Group").property(1).name = "Icon";
		cfeetR.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Group");
		cfeetR.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Scale";
		cfeetR.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).addProperty("ADBE Vector Shape - Group");
		cfeetR.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(1).name = "Path 1";
		var cfeetRPath = cfeetR.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(1).property("ADBE Vector Shape");
		var cfeetRPath_newShape = new Shape();
			cfeetRPath_newShape.vertices = [[-10, -20], [-20, -20], [-20, -10]];
			cfeetRPath_newShape.closed = false;
		cfeetRPath.setValue(cfeetRPath_newShape);
		cfeetR.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).addProperty("ADBE Vector Shape - Group");
		cfeetR.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(2).name = "Path 2";
		var cfeetRPath3 = cfeetR.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(2).property("ADBE Vector Shape");
		var cfeetRPath3_newShape = new Shape();
			cfeetRPath3_newShape.vertices = [[10, -20], [20, -20], [20, -10]];
			cfeetRPath3_newShape.closed = false;
		cfeetRPath3.setValue(cfeetRPath3_newShape);
		cfeetR.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).addProperty("ADBE Vector Shape - Group");
		cfeetR.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(3).name = "Path 3";
		var cfeetRPath5 = cfeetR.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(3).property("ADBE Vector Shape");
		var cfeetRPath5_newShape = new Shape();
			cfeetRPath5_newShape.vertices = [[10, 20], [20, 20], [20, 10]];
			cfeetRPath5_newShape.closed = false;
		cfeetRPath5.setValue(cfeetRPath5_newShape);
		cfeetR.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).addProperty("ADBE Vector Shape - Group");
		cfeetR.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(4).name = "Path 4";
		var cfeetRPath7 = cfeetR.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(4).property("ADBE Vector Shape");
		var cfeetRPath7_newShape = new Shape();
			cfeetRPath7_newShape.vertices = [[-10, 20], [-20, 20], [-20, 10]];
			cfeetRPath7_newShape.closed = false;
		cfeetRPath7.setValue(cfeetRPath7_newShape);
		cfeetR.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		cfeetR.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(5).name = "Stroke 1";
		cfeetR.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(5).property("ADBE Vector Stroke Color").setValue([0.55686274509804,0.17254901960784,0.60392156862745,1]);
		cfeetR.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(5).property("ADBE Vector Stroke Width").setValue(4);
		cfeetR.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Scale").setValue([123.333335876465,123.333335876465]);
		///// Placeholder for ANIMATION PRESET - START
		///// Pseudo Effect "EVT4.1 Rig Control" (Pseudo/EVT4.1 Rig Control)
			if (!cfeetR.property("ADBE Effect Parade").canAddProperty("Pseudo/EVT4.1 Rig Control")) {
				if (typeof ap_PE_Evt41RigControl !== "undefined" && ap_PE_Evt41RigControl.exists) {
					makePseudoEffectLive(ap_PE_Evt41RigControl);
				} else {
					alert("Cannot apply \"EVT4.1 Rig Control\" (Pseudo/EVT4.1 Rig Control) effect to layer \"" + cfeetR.name + "\" because you don't have this effect installed on your system.");
					return;
				}
			}
			cfeetR.property("ADBE Effect Parade").addProperty("Pseudo/EVT4.1 Rig Control");
		///// Placeholder for ANIMATION PRESET - END
		cfeetR.property("ADBE Effect Parade").property(1).name = "EVT4.1 Rig Control";
		var cfeetRPosition = cfeetR.property("ADBE Transform Group").property("ADBE Position");
			var cfeetRPosition_keyTimesArray = [0,0.41666666666667,0.83333333333333,1.25,1.66666666666667,2.08333333333333,2.5,2.91666666666667,3.33333333333333,3.75,4.16666666666667,4.58333333333333,5,5.41666666666667,5.83333333333333,6.25,6.66666666666667,7.08333333333333,7.5,7.91666666666667,8.33333333333333,8.75,9.16666666666667,9.58333333333333,10,10.4166666666667,10.8333333333333,11.25,11.6666666666667,12.0833333333333,12.5,12.9166666666667,13.3333333333333,13.75,14.1666666666667,14.5833333333333,15,15.4166666666667,15.8333333333333,16.25,16.6666666666667,17.0833333333333,17.5];
			var cfeetRPosition_valuesArray = [[860.872375488281,865.161437988281,0],[1060.87243652344,865.161437988281,0],[860.872375488281,865.161437988281,0],[1060.87243652344,865.161437988281,0],[860.872375488281,865.161437988281,0],[1060.87243652344,865.161437988281,0],[860.872375488281,865.161437988281,0],[1060.87243652344,865.161437988281,0],[860.872375488281,865.161437988281,0],[1060.87243652344,865.161437988281,0],[860.872375488281,865.161437988281,0],[1060.87243652344,865.161437988281,0],[860.872375488281,865.161437988281,0],[1060.87243652344,865.161437988281,0],[860.872375488281,865.161437988281,0],[1060.87243652344,865.161437988281,0],[860.872375488281,865.161437988281,0],[1060.87243652344,865.161437988281,0],[860.872375488281,865.161437988281,0],[1060.87243652344,865.161437988281,0],[860.872375488281,865.161437988281,0],[1060.87243652344,865.161437988281,0],[860.872375488281,865.161437988281,0],[1060.87243652344,865.161437988281,0],[860.872375488281,865.161437988281,0],[1060.87243652344,865.161437988281,0],[860.872375488281,865.161437988281,0],[1060.87243652344,865.161437988281,0],[860.872375488281,865.161437988281,0],[1060.87243652344,865.161437988281,0],[860.872375488281,865.161437988281,0],[1060.87243652344,865.161437988281,0],[860.872375488281,865.161437988281,0],[1060.87243652344,865.161437988281,0],[860.872375488281,865.161437988281,0],[1060.87243652344,865.161437988281,0],[860.872375488281,865.161437988281,0],[1060.87243652344,865.161437988281,0],[860.872375488281,865.161437988281,0],[1060.87243652344,865.161437988281,0],[860.872375488281,865.161437988281,0],[1060.87243652344,865.161437988281,0],[860.872375488281,865.161437988281,0]];
			cfeetRPosition.setValuesAtTimes(cfeetRPosition_keyTimesArray, cfeetRPosition_valuesArray);
			var cfeetRPosition_inSpatialTangents = [[-11.9484453201294,110.230087280273,0],[-8.12762451171875,-114.838562011719,0],[42.8335037231445,107.83358001709,0],[-8.12762451171875,-114.838562011719,0],[42.8335037231445,107.83358001709,0],[-8.12762451171875,-114.838562011719,0],[42.8335037231445,107.83358001709,0],[-8.12762451171875,-114.838562011719,0],[42.8335037231445,107.83358001709,0],[-8.12762451171875,-114.838562011719,0],[42.8335037231445,107.83358001709,0],[-8.12762451171875,-114.838562011719,0],[42.8335037231445,107.83358001709,0],[-8.12762451171875,-114.838562011719,0],[42.8335037231445,107.83358001709,0],[-8.12762451171875,-114.838562011719,0],[42.8335037231445,107.83358001709,0],[-8.12762451171875,-114.838562011719,0],[42.8335037231445,107.83358001709,0],[-8.12762451171875,-114.838562011719,0],[42.8335037231445,107.83358001709,0],[-8.12762451171875,-114.838562011719,0],[42.8335037231445,107.83358001709,0],[-8.12762451171875,-114.838562011719,0],[42.8335037231445,107.83358001709,0],[-8.12762451171875,-114.838562011719,0],[42.8335037231445,107.83358001709,0],[-8.12762451171875,-114.838562011719,0],[42.8335037231445,107.83358001709,0],[-8.12762451171875,-114.838562011719,0],[42.8335037231445,107.83358001709,0],[-8.12762451171875,-114.838562011719,0],[42.8335037231445,107.83358001709,0],[-8.12762451171875,-114.838562011719,0],[42.8335037231445,107.83358001709,0],[-8.12762451171875,-114.838562011719,0],[42.8335037231445,107.83358001709,0],[-8.12762451171875,-114.838562011719,0],[42.8335037231445,107.83358001709,0],[-8.12762451171875,-114.838562011719,0],[42.8335037231445,107.83358001709,0],[-8.12762451171875,-114.838562011719,0],[42.8335037231445,107.83358001709,0]];
			var cfeetRPosition_outSpatialTangents = [[13.977255821228,-128.946823120117,0],[-4.87237548828125,65.8385620117188,0],[-45.81787109375,-115.346748352051,0],[-4.87237548828125,65.8385620117188,0],[-45.81787109375,-115.346748352051,0],[-4.87237548828125,65.8385620117188,0],[-45.81787109375,-115.346748352051,0],[-4.87237548828125,65.8385620117188,0],[-45.81787109375,-115.346748352051,0],[-4.87237548828125,65.8385620117188,0],[-45.81787109375,-115.346748352051,0],[-4.87237548828125,65.8385620117188,0],[-45.81787109375,-115.346748352051,0],[-4.87237548828125,65.8385620117188,0],[-45.81787109375,-115.346748352051,0],[-4.87237548828125,65.8385620117188,0],[-45.81787109375,-115.346748352051,0],[-4.87237548828125,65.8385620117188,0],[-45.81787109375,-115.346748352051,0],[-4.87237548828125,65.8385620117188,0],[-45.81787109375,-115.346748352051,0],[-4.87237548828125,65.8385620117188,0],[-45.81787109375,-115.346748352051,0],[-4.87237548828125,65.8385620117188,0],[-45.81787109375,-115.346748352051,0],[-4.87237548828125,65.8385620117188,0],[-45.81787109375,-115.346748352051,0],[-4.87237548828125,65.8385620117188,0],[-45.81787109375,-115.346748352051,0],[-4.87237548828125,65.8385620117188,0],[-45.81787109375,-115.346748352051,0],[-4.87237548828125,65.8385620117188,0],[-45.81787109375,-115.346748352051,0],[-4.87237548828125,65.8385620117188,0],[-45.81787109375,-115.346748352051,0],[-4.87237548828125,65.8385620117188,0],[-45.81787109375,-115.346748352051,0],[-4.87237548828125,65.8385620117188,0],[-45.81787109375,-115.346748352051,0],[-4.87237548828125,65.8385620117188,0],[-45.81787109375,-115.346748352051,0],[-4.87237548828125,65.8385620117188,0],[-45.81787109375,-115.346748352051,0]];
			applySpatialTangents(cfeetRPosition, cfeetRPosition_keyTimesArray, cfeetRPosition_inSpatialTangents, cfeetRPosition_outSpatialTangents);
		cfeetR.property("ADBE Transform Group").property("ADBE Scale").setValue([90,90,100]);
		var cfeetRRotation = cfeetR.property("ADBE Transform Group").property("ADBE Rotate Z");
			var cfeetRRotation_keyTimesArray = [0,0.41666666666667,0.83333333333333,1.25,1.66666666666667,2.08333333333333,2.5,2.91666666666667,3.33333333333333,3.75,4.16666666666667,4.58333333333333,5,5.41666666666667,5.83333333333333,6.25,6.66666666666667,7.08333333333333,7.5,7.91666666666667,8.33333333333333,8.75,9.16666666666667,9.58333333333333,10,10.4166666666667,10.8333333333333,11.25,11.6666666666667,12.0833333333333,12.5,12.9166666666667,13.3333333333333,13.75,14.1666666666667,14.5833333333333,15,15.4166666666667,15.8333333333333,16.25,16.6666666666667,17.0833333333333,17.5];
			var cfeetRRotation_valuesArray = [42,-22,42,-22,42,-22,42,-22,42,-22,42,-22,42,-22,42,-22,42,-22,42,-22,42,-22,42,-22,42,-22,42,-22,42,-22,42,-22,42,-22,42,-22,42,-22,42,-22,42,-22,42];
			cfeetRRotation.setValuesAtTimes(cfeetRRotation_keyTimesArray, cfeetRRotation_valuesArray);
		cfeetR.selected = false;
	// Add existing Solid Layer "Head Rig", varName "headRig_solid";
	var ctrlHead = character04Bicycle_comp.layers.add(headRig_solid);
		ctrlHead.name = "Ctrl Head";
		ctrlHead.label = 11;
		ctrlHead.comment = "joystick&%^*$%";
		ctrlHead.guideLayer = true;
		ctrlHead.moveToEnd();
		ctrlHead.property("ADBE Effect Parade").addProperty("ADBE Slider Control");
		ctrlHead.property("ADBE Effect Parade").property(1).name = "joystickLimit";
		ctrlHead.property("ADBE Effect Parade").property(1).property("ADBE Slider Control-0001").setValue(200);
		ctrlHead.property("ADBE Transform Group").property("ADBE Position").setValue([130,0,0]);
		ctrlHead.property("ADBE Transform Group").property("ADBE Scale").setValue([566.666666666667,100,100]);
		ctrlHead.selected = false;
	// Add existing Solid Layer "JoyStkEyes", varName "joystkeyes_solid";
	var ctrlEyesPosition = character04Bicycle_comp.layers.add(joystkeyes_solid);
		ctrlEyesPosition.name = "Ctrl Eyes Position";
		ctrlEyesPosition.label = 11;
		ctrlEyesPosition.comment = "joystick&%^*$%";
		ctrlEyesPosition.guideLayer = true;
		ctrlEyesPosition.moveToEnd();
		ctrlEyesPosition.property("ADBE Effect Parade").addProperty("ADBE Slider Control");
		ctrlEyesPosition.property("ADBE Effect Parade").property(1).name = "joystickLimit";
		ctrlEyesPosition.property("ADBE Effect Parade").property(1).property("ADBE Slider Control-0001").setValue(200);
		ctrlEyesPosition.property("ADBE Transform Group").property("ADBE Position").setValue([60,0,0]);
		ctrlEyesPosition.property("ADBE Transform Group").property("ADBE Scale").setValue([100,100,100]);
		ctrlEyesPosition.selected = false;
	// Add existing Solid Layer "Eyebrows Ctrl", varName "eyebrowsCtrl_solid";
	var ctrlEyebrows = character04Bicycle_comp.layers.add(eyebrowsCtrl_solid);
		ctrlEyebrows.name = "Ctrl Eyebrows";
		ctrlEyebrows.label = 11;
		ctrlEyebrows.comment = "joystick&%^*$%";
		ctrlEyebrows.guideLayer = true;
		ctrlEyebrows.moveToEnd();
		ctrlEyebrows.property("ADBE Effect Parade").addProperty("ADBE Slider Control");
		ctrlEyebrows.property("ADBE Effect Parade").property(1).name = "joystickLimit";
		ctrlEyebrows.property("ADBE Effect Parade").property(1).property("ADBE Slider Control-0001").setValue(200);
		ctrlEyebrows.property("ADBE Transform Group").property("ADBE Position").setValue([-110,-37.5,0]);
		ctrlEyebrows.property("ADBE Transform Group").property("ADBE Scale").setValue([100,100,100]);
		ctrlEyebrows.selected = false;
	//Create new Null layer "ctrlEyes" and replace its source with varName "null12_null";
	var ctrlEyes = character04Bicycle_comp.layers.addNull();
	var ctrlEyes_source = ctrlEyes.source;
		ctrlEyes.replaceSource(null12_null, true);
		ctrlEyes_source.remove();
		ctrlEyes.name = "Ctrl Eyes";
		ctrlEyes.label = 11;
		ctrlEyes.guideLayer = true;
		ctrlEyes.moveToEnd();
		///// Placeholder for ANIMATION PRESET - START
		///// Pseudo Effect "EVT4.1 Eyes Control" (Pseudo/EVT4.1 Eyes Control)
			if (!ctrlEyes.property("ADBE Effect Parade").canAddProperty("Pseudo/EVT4.1 Eyes Control")) {
				if (typeof ap_PE_Evt41EyesControl !== "undefined" && ap_PE_Evt41EyesControl.exists) {
					makePseudoEffectLive(ap_PE_Evt41EyesControl);
				} else {
					alert("Cannot apply \"EVT4.1 Eyes Control\" (Pseudo/EVT4.1 Eyes Control) effect to layer \"" + ctrlEyes.name + "\" because you don't have this effect installed on your system.");
					return;
				}
			}
			ctrlEyes.property("ADBE Effect Parade").addProperty("Pseudo/EVT4.1 Eyes Control");
		///// Placeholder for ANIMATION PRESET - END
		ctrlEyes.property("ADBE Effect Parade").property(1).name = "EVT4.1 Eyes Control";
		var ctrlEyesBoth = ctrlEyes.property("ADBE Effect Parade").property(1).property("Pseudo/EVT4.1 Eyes Control-0002");
			var ctrlEyesBoth_keyTimesArray = [0.41666666666667,0.54166666666667,0.625,1.875,2,2.08333333333333,3.08333333333333,3.20833333333333,3.29166666666667,4.125,4.25,4.33333333333333,6.33333333333333,6.45833333333333,6.54166666666667,8.70833333333333,8.83333333333333,8.91666666666667,9.75,9.875,9.95833333333333,11.9583333333333,12.0833333333333,12.1666666666667,14.125,14.25,14.3333333333333,15.1666666666667,15.2916666666667,15.375,17.375,17.5,17.5833333333333];
			var ctrlEyesBoth_valuesArray = [7,16,7,7,16,7,7,16,7,7,16,7,7,16,7,7,16,7,7,16,7,7,16,7,7,16,7,7,16,7,7,16,7];
			ctrlEyesBoth.setValuesAtTimes(ctrlEyesBoth_keyTimesArray, ctrlEyesBoth_valuesArray);
			var ctrlEyesBoth_easeInSpeedArray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
			var ctrlEyesBoth_easeInInfluArray = [33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333,33.333333];
			var ctrlEyesBoth_easeOutSpeedArray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
			var ctrlEyesBoth_easeOutInfluArray = [33.333333,33.333333,16.666666667,33.333333,33.333333,16.666666667,33.333333,33.333333,16.666666667,33.333333,33.333333,16.666666667,33.333333,33.333333,16.666666667,33.333333,33.333333,16.666666667,33.333333,33.333333,16.666666667,33.333333,33.333333,16.666666667,33.333333,33.333333,16.666666667,33.333333,33.333333,16.666666667,33.333333,33.333333,16.666666667];
			var ctrlEyesBoth_keyInInterpolationType = [KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER];
			var ctrlEyesBoth_keyOutInterpolationType = [KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER];
			applyEasing(ctrlEyesBoth, ctrlEyesBoth_keyTimesArray, [ctrlEyesBoth_easeInSpeedArray, ctrlEyesBoth_easeInInfluArray], [ctrlEyesBoth_easeOutSpeedArray, ctrlEyesBoth_easeOutInfluArray], [ctrlEyesBoth_keyInInterpolationType, ctrlEyesBoth_keyOutInterpolationType]);

		ctrlEyes.property("ADBE Effect Parade").property(1).property("Pseudo/EVT4.1 Eyes Control-0003").setValue(0);
		ctrlEyes.property("ADBE Effect Parade").property(1).property("Pseudo/EVT4.1 Eyes Control-0004").setValue(0);
		ctrlEyes.property("ADBE Effect Parade").property(1).property("Pseudo/EVT4.1 Eyes Control-0007").setValue(0);
		ctrlEyes.property("ADBE Effect Parade").property(1).property("Pseudo/EVT4.1 Eyes Control-0008").setValue(0);
		ctrlEyes.property("ADBE Effect Parade").property(1).property("Pseudo/EVT4.1 Eyes Control-0009").setValue(0);
		ctrlEyes.property("ADBE Effect Parade").property(1).property("Pseudo/EVT4.1 Eyes Control-0010").setValue(0);
		ctrlEyes.property("ADBE Effect Parade").property(1).property("Pseudo/EVT4.1 Eyes Control-0012").setValue(0);
		ctrlEyes.property("ADBE Transform Group").property("ADBE Position").setValue([12,12,0]);
		ctrlEyes.selected = false;
	//Create new Null layer "ctrlLimbs" and replace its source with varName "null11_null";
	var ctrlLimbs = character04Bicycle_comp.layers.addNull();
	var ctrlLimbs_source = ctrlLimbs.source;
		ctrlLimbs.replaceSource(null11_null, true);
		ctrlLimbs_source.remove();
		ctrlLimbs.name = "Ctrl Limbs";
		ctrlLimbs.guideLayer = true;
		ctrlLimbs.moveToEnd();
		///// Placeholder for ANIMATION PRESET - START
		///// Pseudo Effect "EVT4.1 Limbs Control" (Pseudo/EVT4.1 Limbs Control)
			if (!ctrlLimbs.property("ADBE Effect Parade").canAddProperty("Pseudo/EVT4.1 Limbs Control")) {
				if (typeof ap_PE_Evt41LimbsControl !== "undefined" && ap_PE_Evt41LimbsControl.exists) {
					makePseudoEffectLive(ap_PE_Evt41LimbsControl);
				} else {
					alert("Cannot apply \"EVT4.1 Limbs Control\" (Pseudo/EVT4.1 Limbs Control) effect to layer \"" + ctrlLimbs.name + "\" because you don't have this effect installed on your system.");
					return;
				}
			}
			ctrlLimbs.property("ADBE Effect Parade").addProperty("Pseudo/EVT4.1 Limbs Control");
		///// Placeholder for ANIMATION PRESET - END
		ctrlLimbs.property("ADBE Effect Parade").property(1).name = "EVT4.1 Limbs Control";
		ctrlLimbs.property("ADBE Effect Parade").property(1).property("Pseudo/EVT4.1 Limbs Control-0002").setValue(250);
		ctrlLimbs.property("ADBE Effect Parade").property(1).property("Pseudo/EVT4.1 Limbs Control-0003").setValue(290.5);
		ctrlLimbs.property("ADBE Effect Parade").property(1).property("Pseudo/EVT4.1 Limbs Control-0004").setValue(310);
		ctrlLimbs.property("ADBE Effect Parade").property(1).property("Pseudo/EVT4.1 Limbs Control-0005").setValue(140);
		ctrlLimbs.property("ADBE Effect Parade").property(1).property("Pseudo/EVT4.1 Limbs Control-0008").setValue(60);
		ctrlLimbs.property("ADBE Effect Parade").property(1).property("Pseudo/EVT4.1 Limbs Control-0009").setValue(66);
		ctrlLimbs.property("ADBE Effect Parade").property(1).property("Pseudo/EVT4.1 Limbs Control-0010").setValue(190);
		ctrlLimbs.property("ADBE Effect Parade").property(1).property("Pseudo/EVT4.1 Limbs Control-0011").setValue(60);
		ctrlLimbs.property("ADBE Effect Parade").property(1).property("Pseudo/EVT4.1 Limbs Control-0024").setValue(-38);
		ctrlLimbs.property("ADBE Effect Parade").property(1).property("Pseudo/EVT4.1 Limbs Control-0025").setValue(17);
		ctrlLimbs.property("ADBE Transform Group").property("ADBE Position").setValue([12,118,0]);
		ctrlLimbs.selected = false;
	//Create new Null layer "manWomanSlider" and replace its source with varName "manWomanSlider_null";
	var manWomanSlider = character04Bicycle_comp.layers.addNull();
	var manWomanSlider_source = manWomanSlider.source;
		manWomanSlider.replaceSource(manWomanSlider_null, true);
		manWomanSlider_source.remove();
		manWomanSlider.name = "Man Woman Slider";
		manWomanSlider.comment = "slider controller&%^*$%";
		manWomanSlider.guideLayer = true;
		manWomanSlider.moveToEnd();
		manWomanSlider.property("ADBE Effect Parade").addProperty("ADBE Slider Control");
		manWomanSlider.property("ADBE Effect Parade").property(1).name = "Gender Switch";
		manWomanSlider.property("ADBE Transform Group").property("ADBE Position").setValue([12,224.5,0]);
		manWomanSlider.selected = false;
	// Add existing composition "Texture", varName "texture_comp";
	var textureShortcut = character04Bicycle_comp.layers.add(texture_comp);
		textureShortcut.name = "Texture Shortcut";
		textureShortcut.label = 2;
		textureShortcut.enabled = false;
		textureShortcut.moveToEnd();
		textureShortcut.property("ADBE Transform Group").property("ADBE Position").setValue([178,430.664893617019,0]);
		textureShortcut.property("ADBE Transform Group").property("ADBE Scale").setValue([7,7,100]);
		textureShortcut.selected = false;
	//Create new Null layer "eyebrowsPosition" and replace its source with varName "null13_null";
	var eyebrowsPosition = character04Bicycle_comp.layers.addNull();
	var eyebrowsPosition_source = eyebrowsPosition.source;
		eyebrowsPosition.replaceSource(null13_null, true);
		eyebrowsPosition_source.remove();
		eyebrowsPosition.name = "Eyebrows Position";
		eyebrowsPosition.label = 8;
		eyebrowsPosition.enabled = false;
		eyebrowsPosition.shy = true;
		eyebrowsPosition.guideLayer = true;
		eyebrowsPosition.moveToEnd();
		eyebrowsPosition.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([50,50,0]);
		eyebrowsPosition.property("ADBE Transform Group").property("ADBE Position").setValue([225,202.404251098633,0]);
		eyebrowsPosition.property("ADBE Transform Group").property("ADBE Scale").setValue([100,100,100]);
		eyebrowsPosition.selected = false;
	//Create new Null layer "armsLengthAdjustmentmw" and replace its source with varName "null14_null";
	var armsLengthAdjustmentmw = character04Bicycle_comp.layers.addNull();
	var armsLengthAdjustmentmw_source = armsLengthAdjustmentmw.source;
		armsLengthAdjustmentmw.replaceSource(null14_null, true);
		armsLengthAdjustmentmw_source.remove();
		armsLengthAdjustmentmw.name = "Arms Length AdjustmentMW";
		armsLengthAdjustmentmw.label = 8;
		armsLengthAdjustmentmw.enabled = false;
		armsLengthAdjustmentmw.shy = true;
		armsLengthAdjustmentmw.guideLayer = true;
		armsLengthAdjustmentmw.moveToEnd();
		armsLengthAdjustmentmw.property("ADBE Effect Parade").addProperty("ADBE Slider Control");
		armsLengthAdjustmentmw.property("ADBE Effect Parade").property(1).name = "Arms Length additional value";
		armsLengthAdjustmentmw.property("ADBE Effect Parade").property(1).property("ADBE Slider Control-0001").setValue(0);
		armsLengthAdjustmentmw.property("ADBE Transform Group").property("ADBE Position").setValue([-31,12.5,0]);
		armsLengthAdjustmentmw.property("ADBE Transform Group").property("ADBE Scale").setValue([20,20,100]);
		armsLengthAdjustmentmw.selected = false;
	//Create new Null layer "mouthAdjustment" and replace its source with varName "null15_null";
	var mouthAdjustment = character04Bicycle_comp.layers.addNull();
	var mouthAdjustment_source = mouthAdjustment.source;
		mouthAdjustment.replaceSource(null15_null, true);
		mouthAdjustment_source.remove();
		mouthAdjustment.name = "Mouth Adjustment";
		mouthAdjustment.label = 8;
		mouthAdjustment.enabled = false;
		mouthAdjustment.shy = true;
		mouthAdjustment.guideLayer = true;
		mouthAdjustment.moveToEnd();
		mouthAdjustment.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([50,47.8125003814697,0]);
		mouthAdjustment.property("ADBE Transform Group").property("ADBE Position").setValue([225.265960693359,261.109039306641,0]);
		mouthAdjustment.property("ADBE Transform Group").property("ADBE Scale").setValue([100,100,100]);
		mouthAdjustment.selected = false;
	// Add Shape Layer "Ctrl Eyebrows Origin", varName "ctrlEyebrowsOrigin";
	var ctrlEyebrowsOrigin = character04Bicycle_comp.layers.addShape();
		ctrlEyebrowsOrigin.name = "Ctrl Eyebrows Origin";
		ctrlEyebrowsOrigin.shy = true;
		ctrlEyebrowsOrigin.guideLayer = true;
		ctrlEyebrowsOrigin.moveToEnd();
		ctrlEyebrowsOrigin.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		ctrlEyebrowsOrigin.property("ADBE Root Vectors Group").property(1).name = "Group 1";
		ctrlEyebrowsOrigin.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		ctrlEyebrowsOrigin.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		ctrlEyebrowsOrigin.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([251.383399209486,200]);
		ctrlEyebrowsOrigin.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(28);
		ctrlEyebrowsOrigin.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		ctrlEyebrowsOrigin.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		ctrlEyebrowsOrigin.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Dashes").addProperty("ADBE Vector Stroke Dash 1");
		ctrlEyebrowsOrigin.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Dashes").addProperty("ADBE Vector Stroke Offset");
		ctrlEyebrowsOrigin.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Color").setValue([0.29411762952805,0.31072655320168,1,1]);
		ctrlEyebrowsOrigin.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(7);
		ctrlEyebrowsOrigin.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(9).property("ADBE Vector Stroke Dash 1").setValue(14);
		ctrlEyebrowsOrigin.property("ADBE Transform Group").property("ADBE Position").setValue([162.5,52.5,0]);
		ctrlEyebrowsOrigin.property("ADBE Transform Group").property("ADBE Scale").setValue([20,20,100]);
		ctrlEyebrowsOrigin.selected = false;
	// Add Shape Layer "Ctrl Eyes Position Origin", varName "ctrlEyesPositionOrigin";
	var ctrlEyesPositionOrigin = character04Bicycle_comp.layers.addShape();
		ctrlEyesPositionOrigin.name = "Ctrl Eyes Position Origin";
		ctrlEyesPositionOrigin.shy = true;
		ctrlEyesPositionOrigin.guideLayer = true;
		ctrlEyesPositionOrigin.moveToEnd();
		ctrlEyesPositionOrigin.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		ctrlEyesPositionOrigin.property("ADBE Root Vectors Group").property(1).name = "Group 1";
		ctrlEyesPositionOrigin.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		ctrlEyesPositionOrigin.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		ctrlEyesPositionOrigin.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([251.383399209486,200]);
		ctrlEyesPositionOrigin.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(28);
		ctrlEyesPositionOrigin.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		ctrlEyesPositionOrigin.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		ctrlEyesPositionOrigin.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Dashes").addProperty("ADBE Vector Stroke Dash 1");
		ctrlEyesPositionOrigin.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Dashes").addProperty("ADBE Vector Stroke Offset");
		ctrlEyesPositionOrigin.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Color").setValue([0.29411762952805,0.31072655320168,1,1]);
		ctrlEyesPositionOrigin.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(7);
		ctrlEyesPositionOrigin.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(9).property("ADBE Vector Stroke Dash 1").setValue(14);
		ctrlEyesPositionOrigin.property("ADBE Transform Group").property("ADBE Position").setValue([248.5,52.5,0]);
		ctrlEyesPositionOrigin.property("ADBE Transform Group").property("ADBE Scale").setValue([20,20,100]);
		ctrlEyesPositionOrigin.selected = false;
	// Add Shape Layer "Ctrl Head Origin", varName "ctrlHeadOrigin";
	var ctrlHeadOrigin = character04Bicycle_comp.layers.addShape();
		ctrlHeadOrigin.name = "Ctrl Head Origin";
		ctrlHeadOrigin.shy = true;
		ctrlHeadOrigin.guideLayer = true;
		ctrlHeadOrigin.moveToEnd();
		ctrlHeadOrigin.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		ctrlHeadOrigin.property("ADBE Root Vectors Group").property(1).name = "Group 1";
		ctrlHeadOrigin.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		ctrlHeadOrigin.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		ctrlHeadOrigin.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([251.383399209486,200]);
		ctrlHeadOrigin.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(28);
		ctrlHeadOrigin.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		ctrlHeadOrigin.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		ctrlHeadOrigin.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Dashes").addProperty("ADBE Vector Stroke Dash 1");
		ctrlHeadOrigin.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Dashes").addProperty("ADBE Vector Stroke Offset");
		ctrlHeadOrigin.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Color").setValue([0.29411762952805,0.31072655320168,1,1]);
		ctrlHeadOrigin.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(7);
		ctrlHeadOrigin.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(9).property("ADBE Vector Stroke Dash 1").setValue(14);
		ctrlHeadOrigin.property("ADBE Transform Group").property("ADBE Position").setValue([334.25,52.5,0]);
		ctrlHeadOrigin.property("ADBE Transform Group").property("ADBE Scale").setValue([20,20,100]);
		ctrlHeadOrigin.selected = false;
	// Add existing composition "Hand L", varName "handL_comp";
	var handL = character04Bicycle_comp.layers.add(handL_comp);
		handL.name = "HAND L";
		handL.label = 2;
		handL.shy = true;
		handL.moveToEnd();
		handL.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([225,100.25,0]);
		handL.property("ADBE Transform Group").property("ADBE Position").setValue([200,400.25,0]);
		handL.property("ADBE Transform Group").property("ADBE Scale").setValue([100,100,100]);
		handL.property("ADBE Transform Group").property("ADBE Rotate Z").setValue(0);
		handL.selected = false;
	// Add existing composition "Forearm L", varName "forearmL_comp";
	var forearmL = character04Bicycle_comp.layers.add(forearmL_comp);
		forearmL.name = "FOREARM L";
		forearmL.label = 2;
		forearmL.shy = true;
		forearmL.moveToEnd();
		forearmL.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([200,200,0]);
		forearmL.property("ADBE Transform Group").property("ADBE Position").setValue([200,400,0]);
		forearmL.property("ADBE Transform Group").property("ADBE Rotate Z").setValue(0);
		forearmL.selected = false;
	// Add existing composition "Upper Arm L", varName "upperArmL_comp";
	var upperArmL = character04Bicycle_comp.layers.add(upperArmL_comp);
		upperArmL.name = "UPPER ARM L";
		upperArmL.label = 2;
		upperArmL.shy = true;
		upperArmL.moveToEnd();
		upperArmL.property("ADBE Effect Parade").addProperty("ADBE Angle Control");
		upperArmL.property("ADBE Effect Parade").property(1).name = "IK Limit";
		upperArmL.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([200,197.5,0]);
		upperArmL.property("ADBE Transform Group").property("ADBE Position").setValue([266.542700225025,275.65839901322,0]);
		upperArmL.property("ADBE Transform Group").property("ADBE Rotate Z").setValue(0);
		upperArmL.selected = false;
	// Add existing composition "Glasses", varName "glasses_comp";
	var glasses = character04Bicycle_comp.layers.add(glasses_comp);
		glasses.label = 3;
		glasses.shy = true;
		glasses.moveToEnd();
		glasses.property("ADBE Transform Group").property("ADBE Position").setValue([150,146,0]);
		glasses.selected = false;
	// Add existing composition "Eyelash", varName "eyelash_comp";
	var eyelash = character04Bicycle_comp.layers.add(eyelash_comp);
		eyelash.label = 3;
		eyelash.shy = true;
		eyelash.moveToEnd();
		eyelash.property("ADBE Transform Group").property("ADBE Position").setValue([59.75,42,0]);
		eyelash.selected = false;
	// Add existing composition "Eyelash", varName "eyelash_comp";
	var eyelash1 = character04Bicycle_comp.layers.add(eyelash_comp);
		eyelash1.label = 3;
		eyelash1.shy = true;
		eyelash1.moveToEnd();
		eyelash1.property("ADBE Transform Group").property("ADBE Position").setValue([38.25,42,0]);
		eyelash1.property("ADBE Transform Group").property("ADBE Scale").setValue([-100,100,100]);
		eyelash1.selected = false;
	// Add existing composition "Eyebrow R", varName "eyebrowR_comp";
	var eyebrowR = character04Bicycle_comp.layers.add(eyebrowR_comp);
		eyebrowR.label = 3;
		eyebrowR.shy = true;
		eyebrowR.moveToEnd();
		eyebrowR.property("ADBE Transform Group").property("ADBE Position").setValue([86,53,0]);
		eyebrowR.property("ADBE Transform Group").property("ADBE Scale").setValue([100,100,100]);
		eyebrowR.property("ADBE Transform Group").property("ADBE Rotate Z").setValue(0);
		eyebrowR.selected = false;
	// Add existing composition "Eyebrow L", varName "eyebrowL_comp";
	var eyebrowL = character04Bicycle_comp.layers.add(eyebrowL_comp);
		eyebrowL.label = 3;
		eyebrowL.shy = true;
		eyebrowL.moveToEnd();
		eyebrowL.property("ADBE Transform Group").property("ADBE Position").setValue([14,53,0]);
		eyebrowL.property("ADBE Transform Group").property("ADBE Scale").setValue([100,100,100]);
		eyebrowL.property("ADBE Transform Group").property("ADBE Rotate Z").setValue(0);
		eyebrowL.selected = false;
	// Add existing composition "Eye R", varName "eyeR_comp";
	var eyeR = character04Bicycle_comp.layers.add(eyeR_comp);
		eyeR.label = 3;
		eyeR.shy = true;
		eyeR.moveToEnd();
		eyeR.property("ADBE Mask Parade").addProperty("ADBE Mask Atom");
		eyeR.property("ADBE Mask Parade").property(1).name = "Mask 1";
		eyeR.property("ADBE Mask Parade").property(1).color = [0.49803921568627, 0.27058823529412, 0.16470588235294];
		eyeR.property("ADBE Mask Parade").property(1).maskMode = MaskMode.SUBTRACT;
		var eyeRMaskPath = eyeR.property("ADBE Mask Parade").property(1).property("ADBE Mask Shape");
		var eyeRMaskPath_newShape = new Shape();
			eyeRMaskPath_newShape.vertices = [[94, -59.75], [11, -59.75], [11, 34.7500152587891], [94, 34.7500152587891]];
			eyeRMaskPath_newShape.closed = true;
		eyeRMaskPath.setValue(eyeRMaskPath_newShape);
		eyeR.property("ADBE Mask Parade").property(1).property("ADBE Mask Offset").setValue(0);
		eyeR.property("ADBE Mask Parade").addProperty("ADBE Mask Atom");
		eyeR.property("ADBE Mask Parade").property(2).name = "Mask 2";
		eyeR.property("ADBE Mask Parade").property(2).color = [0.49803921568627, 0.27058823529412, 0.16470588235294];
		eyeR.property("ADBE Mask Parade").property(2).maskMode = MaskMode.SUBTRACT;
		var eyeRMaskPath1 = eyeR.property("ADBE Mask Parade").property(2).property("ADBE Mask Shape");
		var eyeRMaskPath1_newShape = new Shape();
			eyeRMaskPath1_newShape.vertices = [[94, 66], [11, 66], [11, 160.5], [94, 160.5]];
			eyeRMaskPath1_newShape.closed = true;
		eyeRMaskPath1.setValue(eyeRMaskPath1_newShape);
		eyeR.property("ADBE Mask Parade").property(2).property("ADBE Mask Offset").setValue(0);
		eyeR.property("ADBE Effect Parade").addProperty("ADBE Geometry2");
		eyeR.property("ADBE Effect Parade").property(1).name = "Transform";
		eyeR.property("ADBE Transform Group").property("ADBE Position").setValue([50,50,0]);
		eyeR.selected = false;
	// Add existing composition "Eye R 2", varName "eyeR2_comp";
	var eyeR2 = character04Bicycle_comp.layers.add(eyeR2_comp);
		eyeR2.label = 3;
		eyeR2.shy = true;
		eyeR2.moveToEnd();
		eyeR2.property("ADBE Mask Parade").addProperty("ADBE Mask Atom");
		eyeR2.property("ADBE Mask Parade").property(1).name = "Mask 1";
		eyeR2.property("ADBE Mask Parade").property(1).color = [0.49803921568627, 0.27058823529412, 0.16470588235294];
		eyeR2.property("ADBE Mask Parade").property(1).maskMode = MaskMode.SUBTRACT;
		var eyeR2MaskPath = eyeR2.property("ADBE Mask Parade").property(1).property("ADBE Mask Shape");
		var eyeR2MaskPath_newShape = new Shape();
			eyeR2MaskPath_newShape.vertices = [[94, -59.75], [11, -59.75], [11, 34.7500152587891], [94, 34.7500152587891]];
			eyeR2MaskPath_newShape.closed = true;
		eyeR2MaskPath.setValue(eyeR2MaskPath_newShape);
		eyeR2.property("ADBE Mask Parade").property(1).property("ADBE Mask Offset").setValue(0);
		eyeR2.property("ADBE Mask Parade").addProperty("ADBE Mask Atom");
		eyeR2.property("ADBE Mask Parade").property(2).name = "Mask 2";
		eyeR2.property("ADBE Mask Parade").property(2).color = [0.49803921568627, 0.27058823529412, 0.16470588235294];
		eyeR2.property("ADBE Mask Parade").property(2).maskMode = MaskMode.SUBTRACT;
		var eyeR2MaskPath1 = eyeR2.property("ADBE Mask Parade").property(2).property("ADBE Mask Shape");
		var eyeR2MaskPath1_newShape = new Shape();
			eyeR2MaskPath1_newShape.vertices = [[94, 66], [11, 66], [11, 160.5], [94, 160.5]];
			eyeR2MaskPath1_newShape.closed = true;
		eyeR2MaskPath1.setValue(eyeR2MaskPath1_newShape);
		eyeR2.property("ADBE Mask Parade").property(2).property("ADBE Mask Offset").setValue(0);
		eyeR2.property("ADBE Transform Group").property("ADBE Position").setValue([264,222,0]);
		eyeR2.property("ADBE Transform Group").property("ADBE Scale").setValue([100,100,100]);
		eyeR2.property("ADBE Transform Group").property("ADBE Rotate Z").setValue(0);
		eyeR2.selected = false;
	// Add existing composition "Eye L", varName "eyeL_comp";
	var eyeL = character04Bicycle_comp.layers.add(eyeL_comp);
		eyeL.label = 3;
		eyeL.shy = true;
		eyeL.moveToEnd();
		eyeL.property("ADBE Mask Parade").addProperty("ADBE Mask Atom");
		eyeL.property("ADBE Mask Parade").property(1).name = "Mask 1";
		eyeL.property("ADBE Mask Parade").property(1).color = [0.49803921568627, 0.27058823529412, 0.16470588235294];
		eyeL.property("ADBE Mask Parade").property(1).maskMode = MaskMode.SUBTRACT;
		var eyeLMaskPath = eyeL.property("ADBE Mask Parade").property(1).property("ADBE Mask Shape");
		var eyeLMaskPath_newShape = new Shape();
			eyeLMaskPath_newShape.vertices = [[94, -59.75], [11, -59.75], [11, 34.7500152587891], [94, 34.7500152587891]];
			eyeLMaskPath_newShape.closed = true;
		eyeLMaskPath.setValue(eyeLMaskPath_newShape);
		eyeL.property("ADBE Mask Parade").property(1).property("ADBE Mask Offset").setValue(0);
		eyeL.property("ADBE Mask Parade").addProperty("ADBE Mask Atom");
		eyeL.property("ADBE Mask Parade").property(2).name = "Mask 2";
		eyeL.property("ADBE Mask Parade").property(2).color = [0.49803921568627, 0.27058823529412, 0.16470588235294];
		eyeL.property("ADBE Mask Parade").property(2).maskMode = MaskMode.SUBTRACT;
		var eyeLMaskPath1 = eyeL.property("ADBE Mask Parade").property(2).property("ADBE Mask Shape");
		var eyeLMaskPath1_newShape = new Shape();
			eyeLMaskPath1_newShape.vertices = [[94, 66], [11, 66], [11, 160.5], [94, 160.5]];
			eyeLMaskPath1_newShape.closed = true;
		eyeLMaskPath1.setValue(eyeLMaskPath1_newShape);
		eyeL.property("ADBE Mask Parade").property(2).property("ADBE Mask Offset").setValue(0);
		eyeL.property("ADBE Transform Group").property("ADBE Position").setValue([50,50,0]);
		eyeL.selected = false;
	// Add existing composition "Eye L 2", varName "eyeL2_comp";
	var eyeL2 = character04Bicycle_comp.layers.add(eyeL2_comp);
		eyeL2.label = 3;
		eyeL2.shy = true;
		eyeL2.moveToEnd();
		eyeL2.property("ADBE Mask Parade").addProperty("ADBE Mask Atom");
		eyeL2.property("ADBE Mask Parade").property(1).name = "Mask 1";
		eyeL2.property("ADBE Mask Parade").property(1).color = [0.49803921568627, 0.27058823529412, 0.16470588235294];
		eyeL2.property("ADBE Mask Parade").property(1).maskMode = MaskMode.SUBTRACT;
		var eyeL2MaskPath = eyeL2.property("ADBE Mask Parade").property(1).property("ADBE Mask Shape");
		var eyeL2MaskPath_newShape = new Shape();
			eyeL2MaskPath_newShape.vertices = [[94, -59.75], [11, -59.75], [11, 34.7500152587891], [94, 34.7500152587891]];
			eyeL2MaskPath_newShape.closed = true;
		eyeL2MaskPath.setValue(eyeL2MaskPath_newShape);
		eyeL2.property("ADBE Mask Parade").property(1).property("ADBE Mask Offset").setValue(0);
		eyeL2.property("ADBE Mask Parade").addProperty("ADBE Mask Atom");
		eyeL2.property("ADBE Mask Parade").property(2).name = "Mask 2";
		eyeL2.property("ADBE Mask Parade").property(2).color = [0.49803921568627, 0.27058823529412, 0.16470588235294];
		eyeL2.property("ADBE Mask Parade").property(2).maskMode = MaskMode.SUBTRACT;
		var eyeL2MaskPath1 = eyeL2.property("ADBE Mask Parade").property(2).property("ADBE Mask Shape");
		var eyeL2MaskPath1_newShape = new Shape();
			eyeL2MaskPath1_newShape.vertices = [[94, 66], [11, 66], [11, 160.5], [94, 160.5]];
			eyeL2MaskPath1_newShape.closed = true;
		eyeL2MaskPath1.setValue(eyeL2MaskPath1_newShape);
		eyeL2.property("ADBE Mask Parade").property(2).property("ADBE Mask Offset").setValue(0);
		eyeL2.property("ADBE Transform Group").property("ADBE Position").setValue([186,222,0]);
		eyeL2.property("ADBE Transform Group").property("ADBE Scale").setValue([100,100,100]);
		eyeL2.property("ADBE Transform Group").property("ADBE Rotate Z").setValue(0);
		eyeL2.selected = false;
	// Add existing composition "Hair Front", varName "hairFront_comp";
	var hairFront = character04Bicycle_comp.layers.add(hairFront_comp);
		hairFront.label = 3;
		hairFront.shy = true;
		hairFront.moveToEnd();
		hairFront.property("ADBE Transform Group").property("ADBE Position").setValue([225,140,0]);
		hairFront.selected = false;
	// Add existing composition "Nose Shape", varName "noseShape_comp";
	var noseShape = character04Bicycle_comp.layers.add(noseShape_comp);
		noseShape.label = 3;
		noseShape.shy = true;
		noseShape.moveToEnd();
		noseShape.property("ADBE Transform Group").property("ADBE Position").setValue([225,226,0]);
		noseShape.property("ADBE Transform Group").property("ADBE Scale").setValue([100,100,100]);
		noseShape.property("ADBE Transform Group").property("ADBE Rotate Z").setValue(0);
		noseShape.selected = false;
	// Add existing composition "Mouth", varName "mouth_comp";
	var mouth = character04Bicycle_comp.layers.add(mouth_comp);
		mouth.label = 3;
		mouth.moveToEnd();
		mouth.property("ADBE Transform Group").property("ADBE Position").setValue([49.75,70,0]);
		mouth.property("ADBE Transform Group").property("ADBE Scale").setValue([100,100,100]);
		mouth.selected = false;
	// Add existing composition "Beard", varName "beard_comp";
	var beard = character04Bicycle_comp.layers.add(beard_comp);
		beard.label = 3;
		beard.shy = true;
		beard.moveToEnd();
		beard.property("ADBE Transform Group").property("ADBE Position").setValue([225,309,0]);
		beard.property("ADBE Transform Group").property("ADBE Rotate Z").setValue(0);
		beard.selected = false;
	// Add existing composition "Hair Middle", varName "hairMiddle_comp";
	var hairMiddle = character04Bicycle_comp.layers.add(hairMiddle_comp);
		hairMiddle.label = 3;
		hairMiddle.shy = true;
		hairMiddle.moveToEnd();
		hairMiddle.property("ADBE Transform Group").property("ADBE Position").setValue([225,223,0]);
		hairMiddle.selected = false;
	// Add existing composition "Face Shape", varName "faceShape_comp";
	var faceShape = character04Bicycle_comp.layers.add(faceShape_comp);
		faceShape.label = 2;
		faceShape.shy = true;
		faceShape.moveToEnd();
		faceShape.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([225,279,0]);
		faceShape.property("ADBE Transform Group").property("ADBE Position").setValue([0,9,0]);
		faceShape.property("ADBE Transform Group").property("ADBE Scale").setValue([100,100,100]);
		faceShape.property("ADBE Transform Group").property("ADBE Rotate Z").setValue(0);
		faceShape.selected = false;
	// Add existing composition "Ear L", varName "earL_comp";
	var earL = character04Bicycle_comp.layers.add(earL_comp);
		earL.label = 3;
		earL.shy = true;
		earL.moveToEnd();
		earL.property("ADBE Transform Group").property("ADBE Position").setValue([145,248.5,0]);
		earL.selected = false;
	// Add existing composition "Ear R", varName "earR_comp";
	var earR = character04Bicycle_comp.layers.add(earR_comp);
		earR.name = "Ear R";
		earR.label = 3;
		earR.shy = true;
		earR.moveToEnd();
		earR.property("ADBE Transform Group").property("ADBE Position").setValue([301,248.5,0]);
		earR.selected = false;
	// Add existing composition "Neck", varName "neck_comp";
	var neck = character04Bicycle_comp.layers.add(neck_comp);
		neck.name = "NECK";
		neck.shy = true;
		neck.moveToEnd();
		neck.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([125,199.75,0]);
		neck.property("ADBE Transform Group").property("ADBE Position").setValue([400,234,0]);
		neck.property("ADBE Transform Group").property("ADBE Rotate Z").setValue(0);
		neck.selected = false;
	// Add existing composition "Body 2", varName "body2_comp";
	var body2 = character04Bicycle_comp.layers.add(body2_comp);
		body2.name = "BODY 2";
		body2.shy = true;
		body2.moveToEnd();
		body2.property("ADBE Transform Group").property("ADBE Position").setValue([400,369,0]);
		body2.selected = false;
	// Add existing composition "Hips", varName "hips_comp";
	var hips = character04Bicycle_comp.layers.add(hips_comp);
		hips.name = "HIPS";
		hips.shy = true;
		hips.moveToEnd();
		hips.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([350,402.3125,0]);
		hips.property("ADBE Transform Group").property("ADBE Position").setValue([0,-26,0]);
		hips.selected = false;
	// Add existing composition "Feet L", varName "feetL_comp";
	var feetL2 = character04Bicycle_comp.layers.add(feetL_comp);
		feetL2.name = "FEET L2";
		feetL2.label = 5;
		feetL2.shy = true;
		feetL2.moveToEnd();
		feetL2.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([225,163,0]);
		feetL2.property("ADBE Transform Group").property("ADBE Position").setValue([1295.5,774.25,0]);
		feetL2.property("ADBE Transform Group").property("ADBE Scale").setValue([-100,100,100]);
		feetL2.property("ADBE Transform Group").property("ADBE Rotate Z").setValue(0);
		feetL2.selected = false;
	// Add existing composition "Feet L", varName "feetL_comp";
	var feetL = character04Bicycle_comp.layers.add(feetL_comp);
		feetL.name = "FEET L";
		feetL.label = 5;
		feetL.enabled = false;
		feetL.shy = true;
		feetL.moveToEnd();
		feetL.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([219,187,0]);
		feetL.property("ADBE Transform Group").property("ADBE Position").setValue([201,425,0]);
		feetL.property("ADBE Transform Group").property("ADBE Scale").setValue([100,100,100]);
		feetL.property("ADBE Transform Group").property("ADBE Rotate Z").setValue(0);
		feetL.selected = false;
	// Add existing composition "Calf L", varName "calfL_comp";
	var clafL = character04Bicycle_comp.layers.add(calfL_comp);
		clafL.name = "CLAF L";
		clafL.label = 5;
		clafL.shy = true;
		clafL.moveToEnd();
		clafL.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([200,200,0]);
		clafL.property("ADBE Transform Group").property("ADBE Position").setValue([200,400,0]);
		clafL.property("ADBE Transform Group").property("ADBE Rotate Z").setValue(0);
		clafL.selected = false;
	// Add existing composition "Thigh L", varName "thighL_comp";
	var thighL = character04Bicycle_comp.layers.add(thighL_comp);
		thighL.name = "THIGH L";
		thighL.label = 5;
		thighL.shy = true;
		thighL.moveToEnd();
		thighL.property("ADBE Effect Parade").addProperty("ADBE Angle Control");
		thighL.property("ADBE Effect Parade").property(1).name = "IK Limit";
		thighL.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([200,197.5,0]);
		thighL.property("ADBE Transform Group").property("ADBE Position").setValue([303,419.5,0]);
		thighL.property("ADBE Transform Group").property("ADBE Rotate Z").setValue(0);
		thighL.selected = false;
	// Add existing composition "Body", varName "body_comp";
	var body1 = character04Bicycle_comp.layers.add(body_comp);
		body1.name = "BODY 1";
		body1.shy = true;
		body1.moveToEnd();
		body1.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([400,477,0]);
		body1.property("ADBE Transform Group").property("ADBE Position").setValue([0,14,0]);
		body1.selected = false;
	// Add existing composition "Bicycle", varName "bicycle_comp";
	var bicycle = character04Bicycle_comp.layers.add(bicycle_comp);
		bicycle.collapseTransformation = true;
		bicycle.moveToEnd();
		bicycle.property("ADBE Transform Group").property("ADBE Position").setValue([1026,740.440014347935,0]);
		bicycle.property("ADBE Transform Group").property("ADBE Scale").setValue([-155,155,100]);
		bicycle.selected = false;
	// Add existing composition "Hand R", varName "handR_comp";
	var handR = character04Bicycle_comp.layers.add(handR_comp);
		handR.name = "HAND R";
		handR.label = 1;
		handR.shy = true;
		handR.moveToEnd();
		handR.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([225,100.25,0]);
		handR.property("ADBE Transform Group").property("ADBE Position").setValue([200,400.25,0]);
		handR.property("ADBE Transform Group").property("ADBE Scale").setValue([100,100,100]);
		handR.property("ADBE Transform Group").property("ADBE Rotate Z").setValue(0);
		handR.selected = false;
	// Add existing composition "Forearm R", varName "forearmR_comp";
	var forearmR = character04Bicycle_comp.layers.add(forearmR_comp);
		forearmR.name = "FOREARM R";
		forearmR.label = 1;
		forearmR.shy = true;
		forearmR.moveToEnd();
		forearmR.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([200,200,0]);
		forearmR.property("ADBE Transform Group").property("ADBE Position").setValue([200,400,0]);
		forearmR.property("ADBE Transform Group").property("ADBE Rotate Z").setValue(0);
		forearmR.selected = false;
	// Add existing composition "Upper Arm R", varName "upperArmR_comp";
	var upperArmR = character04Bicycle_comp.layers.add(upperArmR_comp);
		upperArmR.name = "UPPER ARM R";
		upperArmR.label = 1;
		upperArmR.shy = true;
		upperArmR.moveToEnd();
		upperArmR.property("ADBE Effect Parade").addProperty("ADBE Angle Control");
		upperArmR.property("ADBE Effect Parade").property(1).name = "IK Limit";
		upperArmR.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([200,197.5,0]);
		upperArmR.property("ADBE Transform Group").property("ADBE Position").setValue([423.764671361532,274.852380601626,0]);
		upperArmR.property("ADBE Transform Group").property("ADBE Rotate Z").setValue(0);
		upperArmR.selected = false;
	// Add existing composition "Feet R", varName "feetR_comp";
	var feetR2 = character04Bicycle_comp.layers.add(feetR_comp);
		feetR2.name = "FEET R2";
		feetR2.label = 8;
		feetR2.shy = true;
		feetR2.moveToEnd();
		feetR2.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([228,187,0]);
		feetR2.property("ADBE Transform Group").property("ADBE Position").setValue([1294.5,780.25,0]);
		feetR2.property("ADBE Transform Group").property("ADBE Scale").setValue([100,100,100]);
		feetR2.property("ADBE Transform Group").property("ADBE Rotate Z").setValue(0);
		feetR2.selected = false;
	// Add existing composition "Feet R", varName "feetR_comp";
	var feetR = character04Bicycle_comp.layers.add(feetR_comp);
		feetR.name = "FEET R";
		feetR.label = 8;
		feetR.enabled = false;
		feetR.shy = true;
		feetR.moveToEnd();
		feetR.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([228,187,0]);
		feetR.property("ADBE Transform Group").property("ADBE Position").setValue([200,425,0]);
		feetR.property("ADBE Transform Group").property("ADBE Scale").setValue([100,100,100]);
		feetR.selected = false;
	// Add existing composition "Calf R", varName "calfR_comp";
	var clafR = character04Bicycle_comp.layers.add(calfR_comp);
		clafR.name = "CLAF R";
		clafR.label = 8;
		clafR.shy = true;
		clafR.moveToEnd();
		clafR.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([200,200,0]);
		clafR.property("ADBE Transform Group").property("ADBE Position").setValue([200,400,0]);
		clafR.property("ADBE Transform Group").property("ADBE Rotate Z").setValue(0);
		clafR.selected = false;
	// Add existing composition "Thigh R", varName "thighR_comp";
	var thighR = character04Bicycle_comp.layers.add(thighR_comp);
		thighR.name = "THIGH R";
		thighR.label = 8;
		thighR.shy = true;
		thighR.moveToEnd();
		thighR.property("ADBE Effect Parade").addProperty("ADBE Angle Control");
		thighR.property("ADBE Effect Parade").property(1).name = "IK Limit";
		thighR.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([200,197.5,0]);
		thighR.property("ADBE Transform Group").property("ADBE Position").setValue([397,419.5,0]);
		thighR.property("ADBE Transform Group").property("ADBE Rotate Z").setValue(0);
		thighR.selected = false;
	// Add existing composition "Body Back", varName "bodyBack_comp";
	var bodyBack = character04Bicycle_comp.layers.add(bodyBack_comp);
		bodyBack.name = "BODY BACK";
		bodyBack.label = 10;
		bodyBack.shy = true;
		bodyBack.moveToEnd();
		bodyBack.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([400,463,0]);
		bodyBack.property("ADBE Transform Group").property("ADBE Position").setValue([400,422,0]);
		bodyBack.selected = false;
	// Add existing composition "Hair Back", varName "hairBack_comp";
	var hairBack = character04Bicycle_comp.layers.add(hairBack_comp);
		hairBack.label = 10;
		hairBack.shy = true;
		hairBack.moveToEnd();
		hairBack.property("ADBE Transform Group").property("ADBE Position").setValue([225,259,0]);
		hairBack.selected = false;
	// Apply parents
		chandL.setParentWithJump(body1);
		chandR.setParentWithJump(body1);
		cbody.setParentWithJump(hips);
		cneck.setParentWithJump(body1);
		chead.setParentWithJump(neck);
		ctrlHead.setParentWithJump(ctrlHeadOrigin);
		ctrlEyesPosition.setParentWithJump(ctrlEyesPositionOrigin);
		ctrlEyebrows.setParentWithJump(ctrlEyebrowsOrigin);
		eyebrowsPosition.setParentWithJump(faceShape);
		mouthAdjustment.setParentWithJump(faceShape);
		handL.setParentWithJump(forearmL);
		forearmL.setParentWithJump(upperArmL);
		upperArmL.setParentWithJump(body1);
		glasses.setParentWithJump(noseShape);
		eyelash.setParentWithJump(eyeR2);
		eyelash1.setParentWithJump(eyeL2);
		eyebrowR.setParentWithJump(eyebrowsPosition);
		eyebrowL.setParentWithJump(eyebrowsPosition);
		eyeR.setParentWithJump(eyeR2);
		eyeR2.setParentWithJump(faceShape);
		eyeL.setParentWithJump(eyeL2);
		eyeL2.setParentWithJump(faceShape);
		hairFront.setParentWithJump(faceShape);
		noseShape.setParentWithJump(faceShape);
		mouth.setParentWithJump(mouthAdjustment);
		beard.setParentWithJump(faceShape);
		hairMiddle.setParentWithJump(faceShape);
		faceShape.setParentWithJump(chead);
		earL.setParentWithJump(faceShape);
		earR.setParentWithJump(faceShape);
		neck.setParentWithJump(body1);
		body2.setParentWithJump(body1);
		hips.setParentWithJump(chips);
		feetL.setParentWithJump(clafL);
		clafL.setParentWithJump(thighL);
		thighL.setParentWithJump(hips);
		body1.setParentWithJump(cbody);
		handR.setParentWithJump(forearmR);
		forearmR.setParentWithJump(upperArmR);
		upperArmR.setParentWithJump(body1);
		feetR.setParentWithJump(clafR);
		clafR.setParentWithJump(thighR);
		thighR.setParentWithJump(hips);
		bodyBack.setParentWithJump(body1);
		hairBack.setParentWithJump(faceShape);

	// Lock Layers
		eyebrowsPosition.locked = true;
		armsLengthAdjustmentmw.locked = true;
		mouthAdjustment.locked = true;
		handL.locked = true;
		forearmL.locked = true;
		upperArmL.locked = true;
		glasses.locked = true;
		eyelash.locked = true;
		eyelash1.locked = true;
		eyebrowR.locked = true;
		eyebrowL.locked = true;
		eyeR.locked = true;
		eyeR2.locked = true;
		eyeL.locked = true;
		eyeL2.locked = true;
		hairFront.locked = true;
		noseShape.locked = true;
		beard.locked = true;
		hairMiddle.locked = true;
		faceShape.locked = true;
		earL.locked = true;
		earR.locked = true;
		neck.locked = true;
		body2.locked = true;
		hips.locked = true;
		feetL2.locked = true;
		feetL.locked = true;
		clafL.locked = true;
		thighL.locked = true;
		body1.locked = true;
		bicycle.locked = true;
		handR.locked = true;
		forearmR.locked = true;
		upperArmR.locked = true;
		feetR2.locked = true;
		feetR.locked = true;
		clafR.locked = true;
		thighR.locked = true;
		bodyBack.locked = true;
		hairBack.locked = true;

// Working with comp "Texture", varName "texture_comp";
	// Add existing composition "Texture MAN NORMIE", varName "textureManNormie_comp";
	var textureManNormie = texture_comp.layers.add(textureManNormie_comp);
		textureManNormie.collapseTransformation = true;
		textureManNormie.moveToEnd();
		textureManNormie.selected = false;
// Working with comp "Hand L", varName "handL_comp";
	// Add Shape Layer "Hand", varName "hand";
	var hand = handL_comp.layers.addShape();
		hand.name = "Hand";
		hand.enabled = false;
		hand.moveToEnd();
		hand.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		hand.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		hand.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		hand.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		hand.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([90,140]);
		hand.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(386);
		hand.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		hand.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		hand.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		hand.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(4);
		hand.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		hand.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		hand.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.22745098039216,0.30196078431373,0.36078431372549,1]);
		hand.property("ADBE Transform Group").property("ADBE Position").setValue([225,129.75,0]);
		hand.property("ADBE Transform Group").property("ADBE Scale").setValue([110,110,100]);
		hand.selected = false;
	// Add existing composition "Hand Texture", varName "handTexture_comp";
	var handTexture = handL_comp.layers.add(handTexture_comp);
		handTexture.moveToEnd();
		handTexture.trackMatteType = TrackMatteType.ALPHA;
		handTexture.property("ADBE Transform Group").property("ADBE Scale").setValue([-100,100,100]);
		handTexture.selected = false;
	// Add Shape Layer "Shape Layer 1", varName "shapeLayer1";
	var shapeLayer1 = handL_comp.layers.addShape();
		shapeLayer1.name = "Shape Layer 1";
		shapeLayer1.enabled = false;
		shapeLayer1.moveToEnd();
		shapeLayer1.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		shapeLayer1.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		shapeLayer1.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		shapeLayer1.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		shapeLayer1.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([37,81]);
		shapeLayer1.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(20);
		shapeLayer1.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		shapeLayer1.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		shapeLayer1.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		shapeLayer1.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(6);
		shapeLayer1.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		shapeLayer1.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		shapeLayer1.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.91764705882353,0.57254901960784,0.49411764705882,1]);
		shapeLayer1.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([52.5,-33.75]);
		shapeLayer1.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([52.2837540895649,-56.6164246407399,0]);
		shapeLayer1.property("ADBE Transform Group").property("ADBE Position").setValue([258.25,104.625,0]);
		shapeLayer1.property("ADBE Transform Group").property("ADBE Rotate Z").setValue(-14);
		shapeLayer1.selected = false;
	// Add existing composition "Hand Texture", varName "handTexture_comp";
	var handTexture1 = handL_comp.layers.add(handTexture_comp);
		handTexture1.moveToEnd();
		handTexture1.trackMatteType = TrackMatteType.ALPHA;
		handTexture1.property("ADBE Effect Parade").addProperty("ADBE Pro Levels2");
		handTexture1.property("ADBE Effect Parade").property(1).name = "Levels (Individual Controls)";
		handTexture1.property("ADBE Effect Parade").property(1).property("ADBE Pro Levels2-0006").setValue(0.7);
		handTexture1.property("ADBE Transform Group").property("ADBE Scale").setValue([-100,100,100]);
		handTexture1.selected = false;
// Working with comp "Forearm L", varName "forearmL_comp";
	// Add existing composition "Forearm Texture 2", varName "forearmTexture2_comp";
	var forearmTexture2 = forearmL_comp.layers.add(forearmTexture2_comp);
		forearmTexture2.moveToEnd();
		forearmTexture2.property("ADBE Transform Group").property("ADBE Scale").setValue([-100,100,100]);
		forearmTexture2.selected = false;
	// Add Shape Layer "Forearm", varName "forearm";
	var forearm = forearmL_comp.layers.addShape();
		forearm.name = "Forearm";
		forearm.enabled = false;
		forearm.moveToEnd();
		forearm.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		forearm.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		forearm.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		forearm.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		forearm.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([100,300]);
		forearm.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(185);
		forearm.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		forearm.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		forearm.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(0);
		forearm.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		forearm.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		forearm.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.22745098039216,0.30196078431373,0.36078431372549,1]);
		forearm.selected = false;
	// Add existing composition "Forearm Texture", varName "forearmTexture_comp";
	var forearmTexture = forearmL_comp.layers.add(forearmTexture_comp);
		forearmTexture.moveToEnd();
		forearmTexture.trackMatteType = TrackMatteType.ALPHA;
		forearmTexture.property("ADBE Transform Group").property("ADBE Scale").setValue([-100,100,100]);
		forearmTexture.selected = false;
// Working with comp "Upper Arm L", varName "upperArmL_comp";
	// Add existing composition "Upper Arm Texture 2", varName "upperArmTexture2_comp";
	var upperArmTexture2 = upperArmL_comp.layers.add(upperArmTexture2_comp);
		upperArmTexture2.moveToEnd();
		upperArmTexture2.property("ADBE Transform Group").property("ADBE Scale").setValue([-100,100,100]);
		upperArmTexture2.selected = false;
	// Add Shape Layer "Upper Arm", varName "upperArm";
	var upperArm = upperArmL_comp.layers.addShape();
		upperArm.name = "Upper Arm";
		upperArm.enabled = false;
		upperArm.moveToEnd();
		upperArm.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		upperArm.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		upperArm.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		upperArm.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		upperArm.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([100,300]);
		upperArm.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(185);
		upperArm.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		upperArm.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		upperArm.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		upperArm.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(10);
		upperArm.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		upperArm.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		upperArm.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.22745098039216,0.30196078431373,0.36078431372549,1]);
		upperArm.selected = false;
	// Add existing composition "Upper Arm Texture", varName "upperArmTexture_comp";
	var upperArmTexture = upperArmL_comp.layers.add(upperArmTexture_comp);
		upperArmTexture.moveToEnd();
		upperArmTexture.trackMatteType = TrackMatteType.ALPHA;
		upperArmTexture.property("ADBE Transform Group").property("ADBE Scale").setValue([-100,100,100]);
		upperArmTexture.selected = false;
// Working with comp "Glasses", varName "glasses_comp";
	// Add existing composition "Glasses Texture", varName "glassesTexture_comp";
	var glassesTexture = glasses_comp.layers.add(glassesTexture_comp);
		glassesTexture.moveToEnd();
		glassesTexture.selected = false;
// Working with comp "Eyelash", varName "eyelash_comp";
	// Add existing composition "Eyelash Texture", varName "eyelashTexture_comp";
	var eyelashTexture = eyelash_comp.layers.add(eyelashTexture_comp);
		eyelashTexture.moveToEnd();
		eyelashTexture.selected = false;
// Working with comp "Eyebrow R", varName "eyebrowR_comp";
	// Add existing composition "Eyebrow Texture", varName "eyebrowTexture_comp";
	var eyebrowTexture = eyebrowR_comp.layers.add(eyebrowTexture_comp);
		eyebrowTexture.moveToEnd();
		eyebrowTexture.selected = false;
// Working with comp "Eyebrow L", varName "eyebrowL_comp";
	// Add existing composition "Eyebrow Texture", varName "eyebrowTexture_comp";
	var eyebrowTexture1 = eyebrowL_comp.layers.add(eyebrowTexture_comp);
		eyebrowTexture1.moveToEnd();
		eyebrowTexture1.property("ADBE Transform Group").property("ADBE Scale").setValue([-100,100,100]);
		eyebrowTexture1.selected = false;
// Working with comp "Eye R", varName "eyeR_comp";
	// Add existing composition "Eye Texture", varName "eyeTexture_comp";
	var eyeTexture = eyeR_comp.layers.add(eyeTexture_comp);
		eyeTexture.collapseTransformation = true;
		eyeTexture.moveToEnd();
		eyeTexture.property("ADBE Mask Parade").addProperty("ADBE Mask Atom");
		eyeTexture.property("ADBE Mask Parade").property(1).name = "Mask 1";
		eyeTexture.property("ADBE Mask Parade").property(1).color = [0.70980392156863, 0.21960784313725, 0.21960784313725];
		var eyeTextureMaskPath = eyeTexture.property("ADBE Mask Parade").property(1).property("ADBE Mask Shape");
		var eyeTextureMaskPath_newShape = new Shape();
			eyeTextureMaskPath_newShape.vertices = [[100.25, 0.25], [-0.25, 0.25], [-0.24998474121094, 100], [100.250015258789, 100]];
			eyeTextureMaskPath_newShape.closed = true;
		eyeTextureMaskPath.setValue(eyeTextureMaskPath_newShape);
		eyeTexture.selected = false;
// Working with comp "Eye R 2", varName "eyeR2_comp";
	// Add existing composition "Eye Texture 2", varName "eyeTexture2_comp";
	var eyeTexture2 = eyeR2_comp.layers.add(eyeTexture2_comp);
		eyeTexture2.moveToEnd();
		eyeTexture2.selected = false;
// Working with comp "Eye L", varName "eyeL_comp";
	// Add existing composition "Eye Texture", varName "eyeTexture_comp";
	var eyeTexture1 = eyeL_comp.layers.add(eyeTexture_comp);
		eyeTexture1.collapseTransformation = true;
		eyeTexture1.moveToEnd();
		eyeTexture1.property("ADBE Mask Parade").addProperty("ADBE Mask Atom");
		eyeTexture1.property("ADBE Mask Parade").property(1).name = "Mask 2";
		eyeTexture1.property("ADBE Mask Parade").property(1).color = [0.70980392156863, 0.21960784313725, 0.21960784313725];
		var eyeTexture1MaskPath = eyeTexture1.property("ADBE Mask Parade").property(1).property("ADBE Mask Shape");
		var eyeTexture1MaskPath_newShape = new Shape();
			eyeTexture1MaskPath_newShape.vertices = [[100.25, 0.25], [-0.25, 0.25], [-0.24998474121094, 100], [100.250015258789, 100]];
			eyeTexture1MaskPath_newShape.closed = true;
		eyeTexture1MaskPath.setValue(eyeTexture1MaskPath_newShape);
		eyeTexture1.property("ADBE Transform Group").property("ADBE Scale").setValue([-100,100,100]);
		eyeTexture1.selected = false;
// Working with comp "Eye L 2", varName "eyeL2_comp";
	// Add existing composition "Eye Texture 2", varName "eyeTexture2_comp";
	var eyeTexture3 = eyeL2_comp.layers.add(eyeTexture2_comp);
		eyeTexture3.moveToEnd();
		eyeTexture3.property("ADBE Transform Group").property("ADBE Scale").setValue([-100,100,100]);
		eyeTexture3.selected = false;
// Working with comp "Hair Front", varName "hairFront_comp";
	// Add existing composition "Hair Front Texture", varName "hairFrontTexture_comp";
	var hairFrontTexture = hairFront_comp.layers.add(hairFrontTexture_comp);
		hairFrontTexture.moveToEnd();
		hairFrontTexture.selected = false;
// Working with comp "Nose Shape", varName "noseShape_comp";
	// Add existing composition "Nose Shape Texture", varName "noseShapeTexture_comp";
	var noseShapeTexture = noseShape_comp.layers.add(noseShapeTexture_comp);
		noseShapeTexture.moveToEnd();
		noseShapeTexture.selected = false;
// Working with comp "Mouth", varName "mouth_comp";
	// Add existing composition "Mouth Smile 01", varName "mouthSmile01_comp";
	var mouthSmile01 = mouth_comp.layers.add(mouthSmile01_comp);
		mouthSmile01.moveToEnd();
		mouthSmile01.selected = false;
// Working with comp "Beard", varName "beard_comp";
	// Add existing composition "Beard Texture", varName "beardTexture_comp";
	var beardTexture = beard_comp.layers.add(beardTexture_comp);
		beardTexture.moveToEnd();
		beardTexture.selected = false;
// Working with comp "Hair Middle", varName "hairMiddle_comp";
	// Add existing composition "Hair Middle Texture", varName "hairMiddleTexture_comp";
	var hairMiddleTexture = hairMiddle_comp.layers.add(hairMiddleTexture_comp);
		hairMiddleTexture.moveToEnd();
		hairMiddleTexture.selected = false;
// Working with comp "Face Shape", varName "faceShape_comp";
	// Add existing composition "Face Shape Texture", varName "faceShapeTexture_comp";
	var faceShapeTexture = faceShape_comp.layers.add(faceShapeTexture_comp);
		faceShapeTexture.moveToEnd();
		faceShapeTexture.selected = false;
// Working with comp "Ear L", varName "earL_comp";
	// Add existing composition "Ears Texture", varName "earsTexture_comp";
	var earsTexture = earL_comp.layers.add(earsTexture_comp);
		earsTexture.moveToEnd();
		earsTexture.selected = false;
// Working with comp "Ear R", varName "earR_comp";
	// Add existing composition "Ears Texture 2", varName "earsTexture2_comp";
	var earsTexture2 = earR_comp.layers.add(earsTexture2_comp);
		earsTexture2.moveToEnd();
		earsTexture2.selected = false;
// Working with comp "Neck", varName "neck_comp";
	// Add Shape Layer "Neck", varName "neck1";
	var neck1 = neck_comp.layers.addShape();
		neck1.name = "Neck";
		neck1.enabled = false;
		neck1.moveToEnd();
		neck1.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		neck1.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		neck1.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		neck1.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		neck1.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([100,300]);
		neck1.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(185);
		neck1.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		neck1.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		neck1.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(0);
		neck1.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		neck1.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		neck1.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.22745098039216,0.30196078431373,0.36078431372549,1]);
		neck1.selected = false;
	// Add existing composition "Neck Texture", varName "neckTexture_comp";
	var neckTexture = neck_comp.layers.add(neckTexture_comp);
		neckTexture.moveToEnd();
		neckTexture.trackMatteType = TrackMatteType.ALPHA;
		neckTexture.selected = false;
// Working with comp "Body 2", varName "body2_comp";
	// Add existing composition "Body Texture 2", varName "bodyTexture2_comp";
	var bodyTexture2 = body2_comp.layers.add(bodyTexture2_comp);
		bodyTexture2.moveToEnd();
		bodyTexture2.selected = false;
	// Add Shape Layer "Body Top", varName "bodyTop";
	var bodyTop = body2_comp.layers.addShape();
		bodyTop.name = "Body Top";
		bodyTop.enabled = false;
		bodyTop.moveToEnd();
		bodyTop.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		bodyTop.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		bodyTop.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		bodyTop.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		bodyTop.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([225,350]);
		bodyTop.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(373);
		bodyTop.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		bodyTop.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		bodyTop.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		bodyTop.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(10);
		bodyTop.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		bodyTop.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		bodyTop.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.97254901960784,0.75294117647059,0.6156862745098,1]);
		bodyTop.selected = false;
	// Add existing composition "Body Texture", varName "bodyTexture_comp";
	var bodyTexture = body2_comp.layers.add(bodyTexture_comp);
		bodyTexture.enabled = false;
		bodyTexture.moveToEnd();
		bodyTexture.trackMatteType = TrackMatteType.ALPHA;
		bodyTexture.selected = false;
// Working with comp "Hips", varName "hips_comp";
	// Add Shape Layer "Hips 2", varName "hips2";
	var hips2 = hips_comp.layers.addShape();
		hips2.name = "Hips 2";
		hips2.enabled = false;
		hips2.moveToEnd();
		hips2.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		hips2.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		hips2.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		hips2.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		hips2.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape Direction").setValue(3);
		hips2.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([700,900]);
		hips2.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(666);
		hips2.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		hips2.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		hips2.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		hips2.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(6);
		hips2.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		hips2.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		hips2.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.97254901960784,0.75294117647059,0.6078431372549,1]);
		hips2.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([270,-185]);
		hips2.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([270,-185.0625,0]);
		hips2.property("ADBE Transform Group").property("ADBE Position").setValue([350,349.9375,0]);
		hips2.selected = false;
	// Add existing composition "Hips Texture 2", varName "hipsTexture2_comp";
	var hipsTexture2 = hips_comp.layers.add(hipsTexture2_comp);
		hipsTexture2.moveToEnd();
		hipsTexture2.selected = false;
	// Add Shape Layer "Hips", varName "hips1";
	var hips1 = hips_comp.layers.addShape();
		hips1.name = "Hips";
		hips1.enabled = false;
		hips1.moveToEnd();
		hips1.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		hips1.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		hips1.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		hips1.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		hips1.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape Direction").setValue(3);
		hips1.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([700,900]);
		hips1.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(666);
		hips1.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		hips1.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		hips1.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		hips1.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		hips1.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.97254901960784,0.75294117647059,0.6078431372549,1]);
		hips1.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([270,-185]);
		hips1.property("ADBE Mask Parade").addProperty("ADBE Mask Atom");
		hips1.property("ADBE Mask Parade").property(1).name = "Mask 1";
		hips1.property("ADBE Mask Parade").property(1).color = [0.66274509803922, 0.79607843137255, 0.78039215686275];
		var hips1MaskPath = hips1.property("ADBE Mask Parade").property(1).property("ADBE Mask Shape");
		var hips1MaskPath_newShape = new Shape();
			hips1MaskPath_newShape.vertices = [[640, -143], [-100, -143], [-100, 425], [640, 425]];
			hips1MaskPath_newShape.closed = true;
		hips1MaskPath.setValue(hips1MaskPath_newShape);
		hips1.property("ADBE Mask Parade").addProperty("ADBE Mask Atom");
		hips1.property("ADBE Mask Parade").property(2).name = "Mask 2";
		hips1.property("ADBE Mask Parade").property(2).color = [0.97254901960784, 0.07450980392157, 0.49803921568627];
		hips1.property("ADBE Mask Parade").property(2).maskMode = MaskMode.NONE;
		var hips1MaskPath1 = hips1.property("ADBE Mask Parade").property(2).property("ADBE Mask Shape");
		var hips1MaskPath1_newShape = new Shape();
			hips1MaskPath1_newShape.vertices = [[640, -325], [-100, -325], [-100, 425], [640, 425]];
			hips1MaskPath1_newShape.closed = true;
		hips1MaskPath1.setValue(hips1MaskPath1_newShape);
		hips1.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([270,-185.0625,0]);
		hips1.property("ADBE Transform Group").property("ADBE Position").setValue([350,349.9375,0]);
		hips1.selected = false;
	// Add existing composition "Hips Texture", varName "hipsTexture_comp";
	var hipsTexture = hips_comp.layers.add(hipsTexture_comp);
		hipsTexture.moveToEnd();
		hipsTexture.trackMatteType = TrackMatteType.ALPHA;
		hipsTexture.selected = false;
// Working with comp "Feet L", varName "feetL_comp";
	// Add Shape Layer "Feet", varName "feet";
	var feet = feetL_comp.layers.addShape();
		feet.name = "Feet";
		feet.enabled = false;
		feet.moveToEnd();
		feet.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		feet.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		feet.property("ADBE Root Vectors Group").property(1).enabled = false;
		feet.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		feet.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		feet.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([49,135]);
		feet.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(20);
		feet.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		feet.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		feet.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		feet.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(6);
		feet.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		feet.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		feet.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.22745098039216,0.30196078431373,0.36078431372549,1]);
		feet.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([24,-1]);
		feet.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		feet.property("ADBE Root Vectors Group").property(2).name = "Ellipse 1";
		feet.property("ADBE Root Vectors Group").property(2).property(2).addProperty("ADBE Vector Shape - Ellipse");
		feet.property("ADBE Root Vectors Group").property(2).property(2).property(1).name = "Ellipse Path 1";
		feet.property("ADBE Root Vectors Group").property(2).property(2).property(1).property("ADBE Vector Ellipse Size").setValue([122,122]);
		feet.property("ADBE Root Vectors Group").property(2).property(2).addProperty("ADBE Vector Graphic - Stroke");
		feet.property("ADBE Root Vectors Group").property(2).property(2).property(2).name = "Stroke 1";
		feet.property("ADBE Root Vectors Group").property(2).property(2).property(2).enabled = false;
		feet.property("ADBE Root Vectors Group").property(2).property(2).property(2).property("ADBE Vector Stroke Width").setValue(10);
		feet.property("ADBE Root Vectors Group").property(2).property(2).addProperty("ADBE Vector Graphic - Fill");
		feet.property("ADBE Root Vectors Group").property(2).property(2).property(3).name = "Fill 1";
		feet.property("ADBE Root Vectors Group").property(2).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.22745098039216,0.30196078431373,0.36078431372549,1]);
		feet.property("ADBE Root Vectors Group").property(2).property(3).property("ADBE Vector Position").setValue([12.5,0]);
		feet.property("ADBE Mask Parade").addProperty("ADBE Mask Atom");
		feet.property("ADBE Mask Parade").property(1).name = "Mask 1";
		feet.property("ADBE Mask Parade").property(1).color = [0.49803921568627, 0.27058823529412, 0.16470588235294];
		var feetMaskPath = feet.property("ADBE Mask Parade").property(1).property("ADBE Mask Shape");
		var feetMaskPath_newShape = new Shape();
			feetMaskPath_newShape.vertices = [[145, -116], [-121, -116], [-121, 0.25], [145, 0.25]];
			feetMaskPath_newShape.closed = true;
		feetMaskPath.setValue(feetMaskPath_newShape);
		feet.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([30.75,0,0]);
		feet.property("ADBE Transform Group").property("ADBE Position").setValue([223.75,223.75,0]);
		feet.property("ADBE Transform Group").property("ADBE Scale").setValue([80,80,100]);
		feet.selected = false;
	// Add existing composition "Feet Texture", varName "feetTexture_comp";
	var feetTexture = feetL_comp.layers.add(feetTexture_comp);
		feetTexture.moveToEnd();
		feetTexture.trackMatteType = TrackMatteType.ALPHA;
		feetTexture.property("ADBE Transform Group").property("ADBE Scale").setValue([-100,100,100]);
		feetTexture.selected = false;
// Working with comp "Calf L", varName "calfL_comp";
	// Add existing composition "Calf Texture 2", varName "calfTexture2_comp";
	var calfTexture2 = calfL_comp.layers.add(calfTexture2_comp);
		calfTexture2.moveToEnd();
		calfTexture2.property("ADBE Transform Group").property("ADBE Position").setValue([200,322,0]);
		calfTexture2.property("ADBE Transform Group").property("ADBE Scale").setValue([-100,100,100]);
		calfTexture2.selected = false;
	// Add Shape Layer "Calf", varName "calf";
	var calf = calfL_comp.layers.addShape();
		calf.name = "Calf";
		calf.enabled = false;
		calf.moveToEnd();
		calf.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		calf.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		calf.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		calf.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		calf.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([100,300]);
		calf.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(185);
		calf.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		calf.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		calf.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		calf.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(10);
		calf.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		calf.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		calf.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.22745098039216,0.30196078431373,0.36078431372549,1]);
		calf.selected = false;
	// Add existing composition "Calf Texture", varName "calfTexture_comp";
	var calfTexture = calfL_comp.layers.add(calfTexture_comp);
		calfTexture.moveToEnd();
		calfTexture.trackMatteType = TrackMatteType.ALPHA;
		calfTexture.property("ADBE Transform Group").property("ADBE Scale").setValue([-100,100,100]);
		calfTexture.selected = false;
// Working with comp "Thigh L", varName "thighL_comp";
	// Add existing composition "Thigh Texture 2", varName "thighTexture2_comp";
	var thighTexture2 = thighL_comp.layers.add(thighTexture2_comp);
		thighTexture2.moveToEnd();
		thighTexture2.property("ADBE Transform Group").property("ADBE Scale").setValue([-100,100,100]);
		thighTexture2.selected = false;
	// Add Shape Layer "Tigh", varName "tigh";
	var tigh = thighL_comp.layers.addShape();
		tigh.name = "Tigh";
		tigh.enabled = false;
		tigh.moveToEnd();
		tigh.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		tigh.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		tigh.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		tigh.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		tigh.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([100,300]);
		tigh.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(185);
		tigh.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		tigh.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		tigh.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		tigh.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(10);
		tigh.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		tigh.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		tigh.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.22745098039216,0.30196078431373,0.36078431372549,1]);
		tigh.selected = false;
	// Add existing composition "Thigh Texture", varName "thighTexture_comp";
	var thighTexture = thighL_comp.layers.add(thighTexture_comp);
		thighTexture.moveToEnd();
		thighTexture.trackMatteType = TrackMatteType.ALPHA;
		thighTexture.property("ADBE Transform Group").property("ADBE Scale").setValue([-100,100,100]);
		thighTexture.selected = false;
// Working with comp "Body", varName "body_comp";
	// Add existing composition "Body Texture 2", varName "bodyTexture2_comp";
	var bodyTexture3 = body_comp.layers.add(bodyTexture2_comp);
		bodyTexture3.enabled = false;
		bodyTexture3.moveToEnd();
		bodyTexture3.selected = false;
	// Add Shape Layer "Body Top", varName "bodyTop1";
	var bodyTop1 = body_comp.layers.addShape();
		bodyTop1.name = "Body Top";
		bodyTop1.enabled = false;
		bodyTop1.moveToEnd();
		bodyTop1.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		bodyTop1.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		bodyTop1.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		bodyTop1.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		bodyTop1.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([225,350]);
		bodyTop1.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(373);
		bodyTop1.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		bodyTop1.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		bodyTop1.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		bodyTop1.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(10);
		bodyTop1.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		bodyTop1.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		bodyTop1.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.97254901960784,0.75294117647059,0.6156862745098,1]);
		bodyTop1.selected = false;
	// Add existing composition "Body Texture", varName "bodyTexture_comp";
	var bodyTexture1 = body_comp.layers.add(bodyTexture_comp);
		bodyTexture1.moveToEnd();
		bodyTexture1.trackMatteType = TrackMatteType.ALPHA;
		bodyTexture1.selected = false;
// Working with comp "Bicycle", varName "bicycle_comp";
	// Add Shape Layer "grip", varName "grip";
	var grip = bicycle_comp.layers.addShape();
		grip.name = "grip";
		grip.moveToEnd();
		grip.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		grip.property("ADBE Root Vectors Group").property(1).name = "Shape 1";
		grip.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		grip.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var gripPath = grip.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var gripPath_newShape = new Shape();
			gripPath_newShape.vertices = [[-188.25, -176.5], [-192.25, -149], [-122.125, -138.25], [-106.803268432617, -149.955718994141], [-117.875, -165.25]];
			gripPath_newShape.inTangents = [[0, 0], [0, 0], [0, 0], [-1.38421630859375, 14.4557189941406], [0, 0]];
			gripPath_newShape.outTangents = [[0, 0], [0, 0], [0, 0], [1.26109313964844, -13.1700134277344], [0, 0]];
			gripPath_newShape.closed = true;
		gripPath.setValue(gripPath_newShape);
		grip.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		grip.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		grip.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Color").setValue([0.69803921568627,0.69803921568627,0.69803921568627,1]);
		grip.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(0);
		grip.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		grip.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		grip.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.20392158358705,0.30196078431373,0.35686274509804,1]);
		grip.property("ADBE Transform Group").property("ADBE Position").setValue([6,-32,0]);
		grip.selected = false;
	// Add Shape Layer "middle", varName "middle";
	var middle = bicycle_comp.layers.addShape();
		middle.name = "middle";
		middle.moveToEnd();
		middle.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		middle.property("ADBE Root Vectors Group").property(1).name = "Ellipse 1";
		middle.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Ellipse");
		middle.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Ellipse Path 1";
		middle.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Ellipse Size").setValue([60,60]);
		middle.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		middle.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		middle.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Color").setValue([0.80392162846584,0.87058829513251,0.90196084415211,1]);
		middle.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(8);
		middle.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		middle.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		middle.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.67450980392157,0.72941176470588,0.76078437356388,1]);
		middle.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([78,173]);
		middle.property("ADBE Transform Group").property("ADBE Position").setValue([0,0,0]);
		middle.selected = false;
	// Add Shape Layer "chain", varName "chain";
	var chain = bicycle_comp.layers.addShape();
		chain.name = "chain";
		chain.moveToEnd();
		chain.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		chain.property("ADBE Root Vectors Group").property(1).name = "Shape 1";
		chain.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		chain.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var chainPath = chain.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var chainPath_newShape = new Shape();
			chainPath_newShape.vertices = [[76, 141], [43.5, 173], [78, 208], [315.5, 172.5], [327.132843017578, 159.101852416992], [314, 145]];
			chainPath_newShape.inTangents = [[0, 0], [0, -35], [0, 0], [0, 0], [0, 14.1018524169922], [0, 0]];
			chainPath_newShape.outTangents = [[0, 0], [0, 35], [0, 0], [0, 0], [0, -14.1018524169922], [0, 0]];
			chainPath_newShape.closed = true;
		chainPath.setValue(chainPath_newShape);
		chain.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		chain.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		chain.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(8);
		chain.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		chain.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		chain.property("ADBE Root Vectors Group").property(1).property(2).property(3).enabled = false;
		chain.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.77647058823529,0.79607843137255,0.22745098039216,1]);
		chain.property("ADBE Transform Group").property("ADBE Position").setValue([0,0,0]);
		chain.selected = false;
	// Add Shape Layer "mudguard", varName "mudguard";
	var mudguard = bicycle_comp.layers.addShape();
		mudguard.name = "mudguard";
		mudguard.moveToEnd();
		mudguard.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		mudguard.property("ADBE Root Vectors Group").property(1).name = "Shape 2";
		mudguard.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		mudguard.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var mudguardPath = mudguard.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var mudguardPath_newShape = new Shape();
			mudguardPath_newShape.vertices = [[-92.0000305175781, 69.0000152587891], [-226.231384277344, -36.3446655273438], [-340, -37]];
			mudguardPath_newShape.inTangents = [[0, 0], [85.2313995361328, 18.8446807861328], [0, 0]];
			mudguardPath_newShape.outTangents = [[0, 0], [-79.7725524902344, -17.6377258300781], [0, 0]];
			mudguardPath_newShape.closed = false;
		mudguardPath.setValue(mudguardPath_newShape);
		mudguard.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		mudguard.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		mudguard.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Color").setValue([0.67450980392157,0.72941176470588,0.76078437356388,1]);
		mudguard.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(19);
		mudguard.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Line Cap").setValue(2);
		mudguard.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Line Join").setValue(2);
		mudguard.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		mudguard.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		mudguard.property("ADBE Root Vectors Group").property(1).property(2).property(3).enabled = false;
		mudguard.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.27843137254902,0.19741330614277,0.148496725045,1]);
		mudguard.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		mudguard.property("ADBE Root Vectors Group").property(2).name = "Shape 1";
		mudguard.property("ADBE Root Vectors Group").property(2).property(2).addProperty("ADBE Vector Shape - Group");
		mudguard.property("ADBE Root Vectors Group").property(2).property(2).property(1).name = "Path 1";
		var mudguardPath3 = mudguard.property("ADBE Root Vectors Group").property(2).property(2).property(1).property("ADBE Vector Shape");
		var mudguardPath3_newShape = new Shape();
			mudguardPath3_newShape.vertices = [[118, 89], [195.768600463867, -18.3446655273438], [334, -50]];
			mudguardPath3_newShape.inTangents = [[0, 0], [-56.2313995361328, 38.6553344726563], [0, 0]];
			mudguardPath3_newShape.outTangents = [[0, 0], [56.2313995361328, -38.6553344726563], [0, 0]];
			mudguardPath3_newShape.closed = false;
		mudguardPath3.setValue(mudguardPath3_newShape);
		mudguard.property("ADBE Root Vectors Group").property(2).property(2).addProperty("ADBE Vector Graphic - Stroke");
		mudguard.property("ADBE Root Vectors Group").property(2).property(2).property(2).name = "Stroke 1";
		mudguard.property("ADBE Root Vectors Group").property(2).property(2).property(2).property("ADBE Vector Stroke Color").setValue([0.67450980392157,0.72941176470588,0.76078437356388,1]);
		mudguard.property("ADBE Root Vectors Group").property(2).property(2).property(2).property("ADBE Vector Stroke Width").setValue(19);
		mudguard.property("ADBE Root Vectors Group").property(2).property(2).property(2).property("ADBE Vector Stroke Line Cap").setValue(2);
		mudguard.property("ADBE Root Vectors Group").property(2).property(2).property(2).property("ADBE Vector Stroke Line Join").setValue(2);
		mudguard.property("ADBE Root Vectors Group").property(2).property(2).addProperty("ADBE Vector Graphic - Fill");
		mudguard.property("ADBE Root Vectors Group").property(2).property(2).property(3).name = "Fill 1";
		mudguard.property("ADBE Root Vectors Group").property(2).property(2).property(3).enabled = false;
		mudguard.property("ADBE Root Vectors Group").property(2).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.27843137254902,0.19741330614277,0.148496725045,1]);
		mudguard.property("ADBE Transform Group").property("ADBE Position").setValue([0,0,0]);
		mudguard.selected = false;
	// Add Shape Layer "seat", varName "seat";
	var seat = bicycle_comp.layers.addShape();
		seat.name = "seat";
		seat.moveToEnd();
		seat.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		seat.property("ADBE Root Vectors Group").property(1).name = "Shape 1";
		seat.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		seat.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var seatPath = seat.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var seatPath_newShape = new Shape();
			seatPath_newShape.vertices = [[61, -141], [58, -121], [166, -100.5], [207, -117.5], [181.5, -138], [144, -138.5]];
			seatPath_newShape.inTangents = [[0, 0], [0, 0], [-18, 0], [-7, 20], [0, 0], [0, 0]];
			seatPath_newShape.outTangents = [[0, 0], [0, 0], [18, 0], [7, -20], [0, 0], [0, 0]];
			seatPath_newShape.closed = true;
		seatPath.setValue(seatPath_newShape);
		seat.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		seat.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		seat.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Color").setValue([0.35686298445159,0.35686298445159,0.35686298445159,1]);
		seat.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(0);
		seat.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		seat.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		seat.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.20392158358705,0.30196078431373,0.35686274509804,1]);
		seat.property("ADBE Transform Group").property("ADBE Position").setValue([0,0,0]);
		seat.selected = false;
	// Add Shape Layer "fork", varName "fork";
	var fork = bicycle_comp.layers.addShape();
		fork.name = "fork";
		fork.moveToEnd();
		fork.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		fork.property("ADBE Root Vectors Group").property(1).name = "Shape 1";
		fork.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		fork.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var forkPath = fork.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var forkPath_newShape = new Shape();
			forkPath_newShape.vertices = [[-283, 161], [-196, -119.999984741211], [-225, -181], [-121, -182]];
			forkPath_newShape.inTangents = [[0, 0], [0, 0], [-14, 31], [-37, -5]];
			forkPath_newShape.outTangents = [[0, 0], [0, 0], [14, -31], [37, 5]];
			forkPath_newShape.closed = false;
		forkPath.setValue(forkPath_newShape);
		fork.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		fork.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		fork.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(20);
		fork.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		fork.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		fork.property("ADBE Root Vectors Group").property(1).property(2).property(3).enabled = false;
		fork.property("ADBE Transform Group").property("ADBE Position").setValue([0,0,0]);
		fork.selected = false;
	// Add Shape Layer "frame", varName "frame";
	var frame = bicycle_comp.layers.addShape();
		frame.name = "frame";
		frame.moveToEnd();
		frame.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		frame.property("ADBE Root Vectors Group").property(1).name = "Shape 1";
		frame.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		frame.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var framePath = frame.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var framePath_newShape = new Shape();
			framePath_newShape.vertices = [[109.999984741211, -14], [-204.625, -84.75], [-211.711349487305, -61.9223175048828], [-31.6575317382813, 30.8466644287109], [75.9999542236328, 176], [315, 159]];
			framePath_newShape.inTangents = [[0, 0], [0, 0], [0, 0.00001525878906], [0, 0], [0, 0], [0, 0]];
			framePath_newShape.closed = true;
		framePath.setValue(framePath_newShape);
		frame.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		frame.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		frame.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(25);
		frame.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Line Cap").setValue(2);
		frame.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Line Join").setValue(2);
		frame.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		frame.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		frame.property("ADBE Root Vectors Group").property(1).property(2).property(3).enabled = false;
		frame.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		frame.property("ADBE Root Vectors Group").property(2).name = "Shape 2";
		frame.property("ADBE Root Vectors Group").property(2).property(2).addProperty("ADBE Vector Shape - Group");
		frame.property("ADBE Root Vectors Group").property(2).property(2).property(1).name = "Path 1";
		var framePath3 = frame.property("ADBE Root Vectors Group").property(2).property(2).property(1).property("ADBE Vector Shape");
		var framePath3_newShape = new Shape();
			framePath3_newShape.vertices = [[78, 176], [130, -116]];
			framePath3_newShape.closed = false;
		framePath3.setValue(framePath3_newShape);
		frame.property("ADBE Root Vectors Group").property(2).property(2).addProperty("ADBE Vector Graphic - Stroke");
		frame.property("ADBE Root Vectors Group").property(2).property(2).property(2).name = "Stroke 1";
		frame.property("ADBE Root Vectors Group").property(2).property(2).property(2).property("ADBE Vector Stroke Width").setValue(25);
		frame.property("ADBE Root Vectors Group").property(2).property(2).property(2).property("ADBE Vector Stroke Line Cap").setValue(2);
		frame.property("ADBE Root Vectors Group").property(2).property(2).property(2).property("ADBE Vector Stroke Line Join").setValue(2);
		frame.property("ADBE Root Vectors Group").property(2).property(2).addProperty("ADBE Vector Graphic - Fill");
		frame.property("ADBE Root Vectors Group").property(2).property(2).property(3).name = "Fill 1";
		frame.property("ADBE Root Vectors Group").property(2).property(2).property(3).enabled = false;
		frame.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([2,336,0]);
		frame.property("ADBE Transform Group").property("ADBE Position").setValue([389.333318481445,428.666650314331,0]);
		frame.property("ADBE Transform Group").property("ADBE Scale").setValue([66.6666641235352,66.6666641235352,100]);
		frame.selected = false;
	// Add Shape Layer "wheels 2", varName "wheels2";
	var wheels2 = bicycle_comp.layers.addShape();
		wheels2.name = "wheels 2";
		wheels2.moveToEnd();
		wheels2.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		wheels2.property("ADBE Root Vectors Group").property(1).name = "Group 1";
		wheels2.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Group");
		wheels2.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Ellipse 1";
		wheels2.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).addProperty("ADBE Vector Shape - Ellipse");
		wheels2.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(1).name = "Ellipse Path 1";
		wheels2.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(1).property("ADBE Vector Ellipse Size").setValue([298,298]);
		wheels2.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		wheels2.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(2).name = "Stroke 1";
		wheels2.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(2).property("ADBE Vector Stroke Color").setValue([0.80392162846584,0.87058829513251,0.90196084415211,1]);
		wheels2.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(10);
		wheels2.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		wheels2.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(3).name = "Fill 1";
		wheels2.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(3).enabled = false;
		wheels2.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([1,1,1,1]);
		wheels2.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(3).property("ADBE Vector Position").setValue([-282,158]);
		wheels2.property("ADBE Root Vectors Group").addProperty("ADBE Vector Filter - Repeater");
		wheels2.property("ADBE Root Vectors Group").property(2).name = "Repeater 1";
		wheels2.property("ADBE Root Vectors Group").property(2).property("ADBE Vector Repeater Copies").setValue(2);
		wheels2.property("ADBE Root Vectors Group").property(2).property(4).property("ADBE Vector Repeater Position").setValue([594,0]);
		wheels2.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([-283,157,0]);
		wheels2.property("ADBE Transform Group").property("ADBE Position").setValue([-283,157,0]);
		wheels2.selected = false;
	// Add Shape Layer "wheels", varName "wheels";
	var wheels = bicycle_comp.layers.addShape();
		wheels.name = "wheels";
		wheels.moveToEnd();
		wheels.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		wheels.property("ADBE Root Vectors Group").property(1).name = "Group 1";
		wheels.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Group");
		wheels.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Ellipse 3";
		wheels.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).addProperty("ADBE Vector Shape - Ellipse");
		wheels.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(1).name = "Ellipse Path 1";
		wheels.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(1).property("ADBE Vector Ellipse Size").setValue([26.0000000000001,26.0000000000001]);
		wheels.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		wheels.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(2).name = "Stroke 1";
		wheels.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(2).property("ADBE Vector Stroke Color").setValue([0.20392158358705,0.30196078431373,0.35686274509804,1]);
		wheels.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(20);
		wheels.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		wheels.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(3).name = "Fill 1";
		wheels.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(3).enabled = false;
		wheels.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([1,1,1,1]);
		wheels.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(3).property("ADBE Vector Position").setValue([-282,158]);
		wheels.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Group");
		wheels.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Ellipse 2";
		wheels.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).addProperty("ADBE Vector Shape - Ellipse");
		wheels.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(1).name = "Ellipse Path 1";
		wheels.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(1).property("ADBE Vector Ellipse Size").setValue([26.0000000000001,26.0000000000001]);
		wheels.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).addProperty("ADBE Vector Graphic - Stroke");
		wheels.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(2).name = "Stroke 1";
		wheels.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(2).property("ADBE Vector Stroke Color").setValue([0.20392158358705,0.30196078431373,0.35686274509804,1]);
		wheels.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(2).property("ADBE Vector Stroke Width").setValue(20);
		wheels.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).addProperty("ADBE Vector Graphic - Fill");
		wheels.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(3).name = "Fill 1";
		wheels.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(3).enabled = false;
		wheels.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(3).property("ADBE Vector Fill Color").setValue([1,1,1,1]);
		wheels.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(3).property("ADBE Vector Position").setValue([-282,158]);
		wheels.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Group");
		wheels.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Ellipse 4";
		wheels.property("ADBE Root Vectors Group").property(1).property(2).property(3).property(2).addProperty("ADBE Vector Shape - Ellipse");
		wheels.property("ADBE Root Vectors Group").property(1).property(2).property(3).property(2).property(1).name = "Ellipse Path 1";
		wheels.property("ADBE Root Vectors Group").property(1).property(2).property(3).property(2).property(1).property("ADBE Vector Ellipse Size").setValue([323,322.999999999999]);
		wheels.property("ADBE Root Vectors Group").property(1).property(2).property(3).property(2).addProperty("ADBE Vector Graphic - Stroke");
		wheels.property("ADBE Root Vectors Group").property(1).property(2).property(3).property(2).property(2).name = "Stroke 1";
		wheels.property("ADBE Root Vectors Group").property(1).property(2).property(3).property(2).property(2).property("ADBE Vector Stroke Color").setValue([0.20392158358705,0.30196078431373,0.35686274509804,1]);
		wheels.property("ADBE Root Vectors Group").property(1).property(2).property(3).property(2).property(2).property("ADBE Vector Stroke Width").setValue(20);
		wheels.property("ADBE Root Vectors Group").property(1).property(2).property(3).property(2).addProperty("ADBE Vector Graphic - Fill");
		wheels.property("ADBE Root Vectors Group").property(1).property(2).property(3).property(2).property(3).name = "Fill 1";
		wheels.property("ADBE Root Vectors Group").property(1).property(2).property(3).property(2).property(3).enabled = false;
		wheels.property("ADBE Root Vectors Group").property(1).property(2).property(3).property(2).property(3).property("ADBE Vector Fill Color").setValue([1,1,1,1]);
		wheels.property("ADBE Root Vectors Group").property(1).property(2).property(3).property(3).property("ADBE Vector Position").setValue([-282,158]);
		wheels.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Group");
		wheels.property("ADBE Root Vectors Group").property(1).property(2).property(4).name = "Ellipse 1";
		wheels.property("ADBE Root Vectors Group").property(1).property(2).property(4).property(2).addProperty("ADBE Vector Shape - Ellipse");
		wheels.property("ADBE Root Vectors Group").property(1).property(2).property(4).property(2).property(1).name = "Ellipse Path 1";
		wheels.property("ADBE Root Vectors Group").property(1).property(2).property(4).property(2).property(1).property("ADBE Vector Ellipse Size").setValue([350,350]);
		wheels.property("ADBE Root Vectors Group").property(1).property(2).property(4).property(2).addProperty("ADBE Vector Graphic - Stroke");
		wheels.property("ADBE Root Vectors Group").property(1).property(2).property(4).property(2).property(2).name = "Stroke 1";
		wheels.property("ADBE Root Vectors Group").property(1).property(2).property(4).property(2).property(2).property("ADBE Vector Stroke Color").setValue([0.20392158358705,0.30196078431373,0.35686274509804,1]);
		wheels.property("ADBE Root Vectors Group").property(1).property(2).property(4).property(2).property(2).property("ADBE Vector Stroke Width").setValue(20);
		wheels.property("ADBE Root Vectors Group").property(1).property(2).property(4).property(2).addProperty("ADBE Vector Graphic - Fill");
		wheels.property("ADBE Root Vectors Group").property(1).property(2).property(4).property(2).property(3).name = "Fill 1";
		wheels.property("ADBE Root Vectors Group").property(1).property(2).property(4).property(2).property(3).enabled = false;
		wheels.property("ADBE Root Vectors Group").property(1).property(2).property(4).property(2).property(3).property("ADBE Vector Fill Color").setValue([1,1,1,1]);
		wheels.property("ADBE Root Vectors Group").property(1).property(2).property(4).property(3).property("ADBE Vector Position").setValue([-282,158]);
		wheels.property("ADBE Root Vectors Group").addProperty("ADBE Vector Filter - Repeater");
		wheels.property("ADBE Root Vectors Group").property(2).name = "Repeater 1";
		wheels.property("ADBE Root Vectors Group").property(2).property("ADBE Vector Repeater Copies").setValue(2);
		wheels.property("ADBE Root Vectors Group").property(2).property(4).property("ADBE Vector Repeater Position").setValue([594,0]);
		wheels.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([-283,157,0]);
		wheels.property("ADBE Transform Group").property("ADBE Position").setValue([-283,157,0]);
		wheels.selected = false;
	// Add Shape Layer "spokes 2", varName "spokes2";
	var spokes2 = bicycle_comp.layers.addShape();
		spokes2.name = "spokes 2";
		spokes2.moveToEnd();
		var spokes2_marker1 = new MarkerValue("Adjust value to increase or decrease speed");
			spokes2_marker1.eventCuePoint = true;
			var newMarkerParameters = {};
			spokes2_marker1.setParameters(newMarkerParameters);
			spokes2.property("ADBE Marker").setValueAtTime(0, spokes2_marker1);
		spokes2.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		spokes2.property("ADBE Root Vectors Group").property(1).name = "Shape 1";
		spokes2.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		spokes2.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var spokes2Path = spokes2.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var spokes2Path_newShape = new Shape();
			spokes2Path_newShape.vertices = [[-5.50003051757813, -171.5], [0, -9]];
			spokes2Path_newShape.closed = true;
		spokes2Path.setValue(spokes2Path_newShape);
		spokes2.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		spokes2.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		spokes2.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Color").setValue([0.67450980392157,0.72941176470588,0.76078437356388,1]);
		spokes2.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(8);
		spokes2.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		spokes2.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		spokes2.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.35686274509804,0.35686274509804,0.35686274509804,1]);
		spokes2.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Filter - Repeater");
		spokes2.property("ADBE Root Vectors Group").property(1).property(2).property(4).name = "Repeater 1";
		spokes2.property("ADBE Root Vectors Group").property(1).property(2).property(4).property("ADBE Vector Repeater Copies").setValue(24);
		spokes2.property("ADBE Root Vectors Group").property(1).property(2).property(4).property(4).property("ADBE Vector Repeater Rotation").setValue(15);
		spokes2.property("ADBE Transform Group").property("ADBE Position").setValue([312.5,159,0]);
		spokes2.property("ADBE Transform Group").property("ADBE Rotate Z").setValue(0);
		spokes2.selected = false;
	// Add Shape Layer "spokes", varName "spokes";
	var spokes = bicycle_comp.layers.addShape();
		spokes.name = "spokes";
		spokes.moveToEnd();
		spokes.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		spokes.property("ADBE Root Vectors Group").property(1).name = "Shape 1";
		spokes.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		spokes.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var spokesPath = spokes.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var spokesPath_newShape = new Shape();
			spokesPath_newShape.vertices = [[-5.50001525878906, -168.5], [0, -9]];
			spokesPath_newShape.closed = true;
		spokesPath.setValue(spokesPath_newShape);
		spokes.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		spokes.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		spokes.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Color").setValue([0.67450980392157,0.72941176470588,0.76078437356388,1]);
		spokes.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(8);
		spokes.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		spokes.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		spokes.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.35686274509804,0.35686274509804,0.35686274509804,1]);
		spokes.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Filter - Repeater");
		spokes.property("ADBE Root Vectors Group").property(1).property(2).property(4).name = "Repeater 1";
		spokes.property("ADBE Root Vectors Group").property(1).property(2).property(4).property("ADBE Vector Repeater Copies").setValue(24);
		spokes.property("ADBE Root Vectors Group").property(1).property(2).property(4).property(4).property("ADBE Vector Repeater Rotation").setValue(15);
		spokes.property("ADBE Transform Group").property("ADBE Position").setValue([-283,159,0]);
		spokes.property("ADBE Transform Group").property("ADBE Rotate Z").setValue(0);
		spokes.selected = false;
	// Add Shape Layer "Shape Layer 1", varName "shapeLayer2";
	var shapeLayer2 = bicycle_comp.layers.addShape();
		shapeLayer2.name = "Shape Layer 1";
		shapeLayer2.enabled = false;
		shapeLayer2.moveToEnd();
		shapeLayer2.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		shapeLayer2.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		shapeLayer2.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		shapeLayer2.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		shapeLayer2.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([86,26]);
		shapeLayer2.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(8);
		shapeLayer2.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		shapeLayer2.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		shapeLayer2.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		shapeLayer2.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(19);
		shapeLayer2.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		shapeLayer2.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		shapeLayer2.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([1,1,1,1]);
		shapeLayer2.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([-35,106]);
		shapeLayer2.property("ADBE Root Vectors Group").addProperty("ADBE Vector Filter - Repeater");
		shapeLayer2.property("ADBE Root Vectors Group").property(2).name = "Repeater 1";
		shapeLayer2.property("ADBE Root Vectors Group").property(2).property("ADBE Vector Repeater Copies").setValue(2);
		shapeLayer2.property("ADBE Root Vectors Group").property(2).property(4).property("ADBE Vector Repeater Position").setValue([218,0]);
		shapeLayer2.property("ADBE Transform Group").property("ADBE Position").setValue([399.999984741211,249.999990463257,0]);
		shapeLayer2.property("ADBE Transform Group").property("ADBE Scale").setValue([66.6666641235352,66.6666641235352,100]);
		shapeLayer2.selected = false;
	// Apply parents
		grip.setParentWithJump(frame);
		middle.setParentWithJump(frame);
		chain.setParentWithJump(frame);
		mudguard.setParentWithJump(frame);
		seat.setParentWithJump(frame);
		fork.setParentWithJump(frame);
		wheels2.setParentWithJump(frame);
		wheels.setParentWithJump(frame);
		spokes2.setParentWithJump(frame);
		spokes.setParentWithJump(frame);

// Working with comp "Hand R", varName "handR_comp";
	// Add Shape Layer "Hand", varName "hand1";
	var hand1 = handR_comp.layers.addShape();
		hand1.name = "Hand";
		hand1.enabled = false;
		hand1.moveToEnd();
		hand1.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		hand1.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		hand1.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		hand1.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		hand1.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([90,140]);
		hand1.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(386);
		hand1.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		hand1.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		hand1.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		hand1.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(4);
		hand1.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		hand1.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		hand1.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.22745098039216,0.30196078431373,0.36078431372549,1]);
		hand1.property("ADBE Transform Group").property("ADBE Position").setValue([225,129.75,0]);
		hand1.property("ADBE Transform Group").property("ADBE Scale").setValue([110,110,100]);
		hand1.selected = false;
	// Add existing composition "Hand Texture", varName "handTexture_comp";
	var handTexture2 = handR_comp.layers.add(handTexture_comp);
		handTexture2.moveToEnd();
		handTexture2.trackMatteType = TrackMatteType.ALPHA;
		handTexture2.selected = false;
	// Add Shape Layer "Shape Layer 1", varName "shapeLayer3";
	var shapeLayer3 = handR_comp.layers.addShape();
		shapeLayer3.name = "Shape Layer 1";
		shapeLayer3.enabled = false;
		shapeLayer3.moveToEnd();
		shapeLayer3.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		shapeLayer3.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		shapeLayer3.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		shapeLayer3.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		shapeLayer3.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([37,81]);
		shapeLayer3.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(20);
		shapeLayer3.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		shapeLayer3.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		shapeLayer3.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		shapeLayer3.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(6);
		shapeLayer3.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		shapeLayer3.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		shapeLayer3.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.91764705882353,0.57254901960784,0.49411764705882,1]);
		shapeLayer3.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([52.5,-33.75]);
		shapeLayer3.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([52.5,-50.25,0]);
		shapeLayer3.property("ADBE Transform Group").property("ADBE Position").setValue([191,110.75,0]);
		shapeLayer3.property("ADBE Transform Group").property("ADBE Rotate Z").setValue(14);
		shapeLayer3.selected = false;
	// Add existing composition "Hand Texture", varName "handTexture_comp";
	var handTexture3 = handR_comp.layers.add(handTexture_comp);
		handTexture3.moveToEnd();
		handTexture3.trackMatteType = TrackMatteType.ALPHA;
		handTexture3.property("ADBE Effect Parade").addProperty("ADBE Pro Levels2");
		handTexture3.property("ADBE Effect Parade").property(1).name = "Levels (Individual Controls)";
		handTexture3.property("ADBE Effect Parade").property(1).property("ADBE Pro Levels2-0006").setValue(0.7);
		handTexture3.selected = false;
// Working with comp "Forearm R", varName "forearmR_comp";
	// Add existing composition "Forearm Texture 2", varName "forearmTexture2_comp";
	var forearmTexture3 = forearmR_comp.layers.add(forearmTexture2_comp);
		forearmTexture3.moveToEnd();
		forearmTexture3.selected = false;
	// Add Shape Layer "Forearm", varName "forearm1";
	var forearm1 = forearmR_comp.layers.addShape();
		forearm1.name = "Forearm";
		forearm1.enabled = false;
		forearm1.moveToEnd();
		forearm1.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		forearm1.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		forearm1.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		forearm1.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		forearm1.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([100,300]);
		forearm1.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(185);
		forearm1.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		forearm1.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		forearm1.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(0);
		forearm1.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		forearm1.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		forearm1.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.22745098039216,0.30196078431373,0.36078431372549,1]);
		forearm1.selected = false;
	// Add existing composition "Forearm Texture", varName "forearmTexture_comp";
	var forearmTexture1 = forearmR_comp.layers.add(forearmTexture_comp);
		forearmTexture1.moveToEnd();
		forearmTexture1.trackMatteType = TrackMatteType.ALPHA;
		forearmTexture1.selected = false;
// Working with comp "Upper Arm R", varName "upperArmR_comp";
	// Add existing composition "Upper Arm Texture 2", varName "upperArmTexture2_comp";
	var upperArmTexture3 = upperArmR_comp.layers.add(upperArmTexture2_comp);
		upperArmTexture3.moveToEnd();
		upperArmTexture3.selected = false;
	// Add Shape Layer "Upper Arm", varName "upperArm1";
	var upperArm1 = upperArmR_comp.layers.addShape();
		upperArm1.name = "Upper Arm";
		upperArm1.enabled = false;
		upperArm1.moveToEnd();
		upperArm1.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		upperArm1.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		upperArm1.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		upperArm1.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		upperArm1.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([100,300]);
		upperArm1.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(185);
		upperArm1.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		upperArm1.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		upperArm1.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		upperArm1.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(10);
		upperArm1.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		upperArm1.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		upperArm1.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.22745098039216,0.30196078431373,0.36078431372549,1]);
		upperArm1.selected = false;
	// Add existing composition "Upper Arm Texture", varName "upperArmTexture_comp";
	var upperArmTexture1 = upperArmR_comp.layers.add(upperArmTexture_comp);
		upperArmTexture1.moveToEnd();
		upperArmTexture1.trackMatteType = TrackMatteType.ALPHA;
		upperArmTexture1.selected = false;
// Working with comp "Feet R", varName "feetR_comp";
	// Add Shape Layer "Feet 2", varName "feet2";
	var feet2 = feetR_comp.layers.addShape();
		feet2.name = "Feet 2";
		feet2.enabled = false;
		feet2.moveToEnd();
		feet2.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		feet2.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		feet2.property("ADBE Root Vectors Group").property(1).enabled = false;
		feet2.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		feet2.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		feet2.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([49,135]);
		feet2.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(20);
		feet2.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		feet2.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		feet2.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		feet2.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(6);
		feet2.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		feet2.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		feet2.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.22745098039216,0.30196078431373,0.36078431372549,1]);
		feet2.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([36,0]);
		feet2.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		feet2.property("ADBE Root Vectors Group").property(2).name = "Ellipse 1";
		feet2.property("ADBE Root Vectors Group").property(2).property(2).addProperty("ADBE Vector Shape - Ellipse");
		feet2.property("ADBE Root Vectors Group").property(2).property(2).property(1).name = "Ellipse Path 1";
		feet2.property("ADBE Root Vectors Group").property(2).property(2).property(1).property("ADBE Vector Ellipse Size").setValue([122,122]);
		feet2.property("ADBE Root Vectors Group").property(2).property(2).addProperty("ADBE Vector Graphic - Stroke");
		feet2.property("ADBE Root Vectors Group").property(2).property(2).property(2).name = "Stroke 1";
		feet2.property("ADBE Root Vectors Group").property(2).property(2).property(2).enabled = false;
		feet2.property("ADBE Root Vectors Group").property(2).property(2).property(2).property("ADBE Vector Stroke Width").setValue(10);
		feet2.property("ADBE Root Vectors Group").property(2).property(2).addProperty("ADBE Vector Graphic - Fill");
		feet2.property("ADBE Root Vectors Group").property(2).property(2).property(3).name = "Fill 1";
		feet2.property("ADBE Root Vectors Group").property(2).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.22745098039216,0.30196078431373,0.36078431372549,1]);
		feet2.property("ADBE Root Vectors Group").property(2).property(3).property("ADBE Vector Position").setValue([50,0]);
		feet2.property("ADBE Mask Parade").addProperty("ADBE Mask Atom");
		feet2.property("ADBE Mask Parade").property(1).name = "Mask 1";
		feet2.property("ADBE Mask Parade").property(1).color = [0.49803921568627, 0.27058823529412, 0.16470588235294];
		var feet2MaskPath = feet2.property("ADBE Mask Parade").property(1).property("ADBE Mask Shape");
		var feet2MaskPath_newShape = new Shape();
			feet2MaskPath_newShape.vertices = [[145, -116], [-121, -116], [-121, 0.25], [145, 0.25]];
			feet2MaskPath_newShape.closed = true;
		feet2MaskPath.setValue(feet2MaskPath_newShape);
		feet2.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([29,-1,0]);
		feet2.property("ADBE Transform Group").property("ADBE Position").setValue([222,222.25,0]);
		feet2.property("ADBE Transform Group").property("ADBE Scale").setValue([80,80,100]);
		feet2.selected = false;
	// Add existing composition "Feet Texture", varName "feetTexture_comp";
	var feetTexture1 = feetR_comp.layers.add(feetTexture_comp);
		feetTexture1.moveToEnd();
		feetTexture1.trackMatteType = TrackMatteType.ALPHA;
		feetTexture1.property("ADBE Transform Group").property("ADBE Scale").setValue([100,100,100]);
		feetTexture1.selected = false;
// Working with comp "Calf R", varName "calfR_comp";
	// Add existing composition "Calf Texture 2", varName "calfTexture2_comp";
	var calfTexture3 = calfR_comp.layers.add(calfTexture2_comp);
		calfTexture3.moveToEnd();
		calfTexture3.property("ADBE Transform Group").property("ADBE Position").setValue([200,322,0]);
		calfTexture3.selected = false;
	// Add Shape Layer "Calf", varName "calf1";
	var calf1 = calfR_comp.layers.addShape();
		calf1.name = "Calf";
		calf1.enabled = false;
		calf1.moveToEnd();
		calf1.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		calf1.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		calf1.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		calf1.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		calf1.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([100,300]);
		calf1.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(185);
		calf1.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		calf1.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		calf1.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		calf1.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(10);
		calf1.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		calf1.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		calf1.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.22745098039216,0.30196078431373,0.36078431372549,1]);
		calf1.selected = false;
	// Add existing composition "Calf Texture", varName "calfTexture_comp";
	var calfTexture1 = calfR_comp.layers.add(calfTexture_comp);
		calfTexture1.moveToEnd();
		calfTexture1.trackMatteType = TrackMatteType.ALPHA;
		calfTexture1.selected = false;
// Working with comp "Thigh R", varName "thighR_comp";
	// Add existing composition "Thigh Texture 2", varName "thighTexture2_comp";
	var thighTexture3 = thighR_comp.layers.add(thighTexture2_comp);
		thighTexture3.moveToEnd();
		thighTexture3.selected = false;
	// Add Shape Layer "Tigh", varName "tigh1";
	var tigh1 = thighR_comp.layers.addShape();
		tigh1.name = "Tigh";
		tigh1.enabled = false;
		tigh1.moveToEnd();
		tigh1.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		tigh1.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		tigh1.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		tigh1.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		tigh1.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([100,300]);
		tigh1.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(185);
		tigh1.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		tigh1.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		tigh1.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		tigh1.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(10);
		tigh1.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		tigh1.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		tigh1.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.22745098039216,0.30196078431373,0.36078431372549,1]);
		tigh1.selected = false;
	// Add existing composition "Thigh Texture", varName "thighTexture_comp";
	var thighTexture1 = thighR_comp.layers.add(thighTexture_comp);
		thighTexture1.moveToEnd();
		thighTexture1.trackMatteType = TrackMatteType.ALPHA;
		thighTexture1.selected = false;
// Working with comp "Body Back", varName "bodyBack_comp";
	// Add Shape Layer "Body Top", varName "bodyTop2";
	var bodyTop2 = bodyBack_comp.layers.addShape();
		bodyTop2.name = "Body Top";
		bodyTop2.enabled = false;
		bodyTop2.moveToEnd();
		bodyTop2.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		bodyTop2.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		bodyTop2.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		bodyTop2.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		bodyTop2.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([225,350]);
		bodyTop2.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(373);
		bodyTop2.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		bodyTop2.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		bodyTop2.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		bodyTop2.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(10);
		bodyTop2.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		bodyTop2.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		bodyTop2.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.97254901960784,0.75294117647059,0.6156862745098,1]);
		bodyTop2.selected = false;
	// Add existing composition "Body Texture 3", varName "bodyTexture3_comp";
	var bodyTexture4 = bodyBack_comp.layers.add(bodyTexture3_comp);
		bodyTexture4.moveToEnd();
		bodyTexture4.selected = false;
// Working with comp "Hair Back", varName "hairBack_comp";
	// Add existing composition "Hair Back Texture", varName "hairBackTexture_comp";
	var hairBackTexture = hairBack_comp.layers.add(hairBackTexture_comp);
		hairBackTexture.moveToEnd();
		hairBackTexture.selected = false;
// Working with comp "Texture MAN NORMIE", varName "textureManNormie_comp";
	// Add Shape Layer "Shape Layer 191", varName "shapeLayer191";
	var shapeLayer191 = textureManNormie_comp.layers.addShape();
		shapeLayer191.name = "Shape Layer 191";
		shapeLayer191.moveToEnd();
		shapeLayer191.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		shapeLayer191.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		shapeLayer191.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		shapeLayer191.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		shapeLayer191.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([50,18]);
		shapeLayer191.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(20);
		shapeLayer191.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		shapeLayer191.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		shapeLayer191.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		shapeLayer191.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(9);
		shapeLayer191.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([-657.75,-611.25]);
		shapeLayer191.selected = false;
	// Add Shape Layer "Shape Layer 190", varName "shapeLayer190";
	var shapeLayer190 = textureManNormie_comp.layers.addShape();
		shapeLayer190.name = "Shape Layer 190";
		shapeLayer190.blendingMode = BlendingMode.ADD;
		shapeLayer190.moveToEnd();
		shapeLayer190.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		shapeLayer190.property("ADBE Root Vectors Group").property(1).name = "Ellipse 1";
		shapeLayer190.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Ellipse");
		shapeLayer190.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Ellipse Path 1";
		shapeLayer190.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Ellipse Size").setValue([40,40]);
		shapeLayer190.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		shapeLayer190.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		shapeLayer190.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(9);
		shapeLayer190.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Line Cap").setValue(2);
		shapeLayer190.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		shapeLayer190.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		shapeLayer190.property("ADBE Root Vectors Group").property(1).property(2).property(3).enabled = false;
		shapeLayer190.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.08627450980392,0.1843137254902,0.23921568627451,1]);
		shapeLayer190.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([-615.5,694.5]);
		shapeLayer190.property("ADBE Root Vectors Group").addProperty("ADBE Vector Filter - Trim");
		shapeLayer190.property("ADBE Root Vectors Group").property(2).name = "Trim Paths 1";
		shapeLayer190.property("ADBE Root Vectors Group").property(2).property("ADBE Vector Trim End").setValue(13);
		shapeLayer190.property("ADBE Root Vectors Group").property(2).property("ADBE Vector Trim Offset").setValue(11);
		shapeLayer190.property("ADBE Transform Group").property("ADBE Position").setValue([2011.5,1088,0]);
		shapeLayer190.property("ADBE Transform Group").property("ADBE Opacity").setValue(8);
		shapeLayer190.selected = false;
	// Add Shape Layer "Shape Layer 189", varName "shapeLayer189";
	var shapeLayer189 = textureManNormie_comp.layers.addShape();
		shapeLayer189.name = "Shape Layer 189";
		shapeLayer189.moveToEnd();
		shapeLayer189.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		shapeLayer189.property("ADBE Root Vectors Group").property(1).name = "Ellipse 1";
		shapeLayer189.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Ellipse");
		shapeLayer189.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Ellipse Path 1";
		shapeLayer189.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Ellipse Size").setValue([74,74]);
		shapeLayer189.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		shapeLayer189.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		shapeLayer189.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		shapeLayer189.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(8);
		shapeLayer189.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		shapeLayer189.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		shapeLayer189.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.63921568627451,0.40392156862745,0.25882352941176,1]);
		shapeLayer189.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([-617,675]);
		shapeLayer189.property("ADBE Root Vectors Group").addProperty("ADBE Vector Filter - Trim");
		shapeLayer189.property("ADBE Root Vectors Group").property(2).name = "Trim Paths 1";
		shapeLayer189.property("ADBE Root Vectors Group").property(2).property("ADBE Vector Trim End").setValue(50);
		shapeLayer189.property("ADBE Root Vectors Group").property(2).property("ADBE Vector Trim Offset").setValue(90);
		shapeLayer189.property("ADBE Transform Group").property("ADBE Position").setValue([2000,1105,0]);
		shapeLayer189.selected = false;
	// Add Shape Layer "Shape Layer 188", varName "shapeLayer188";
	var shapeLayer188 = textureManNormie_comp.layers.addShape();
		shapeLayer188.name = "Shape Layer 188";
		shapeLayer188.moveToEnd();
		shapeLayer188.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		shapeLayer188.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		shapeLayer188.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		shapeLayer188.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		shapeLayer188.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([76,206]);
		shapeLayer188.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(68);
		shapeLayer188.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		shapeLayer188.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		shapeLayer188.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		shapeLayer188.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(8);
		shapeLayer188.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		shapeLayer188.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		shapeLayer188.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.18823529411765,0.70588235294118,0.30980392156863,1]);
		shapeLayer188.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([-874,149]);
		shapeLayer188.property("ADBE Mask Parade").addProperty("ADBE Mask Atom");
		shapeLayer188.property("ADBE Mask Parade").property(1).name = "Mask 1";
		shapeLayer188.property("ADBE Mask Parade").property(1).color = [0.90980392156863, 0.57254901960784, 0.05098039215686];
		var shapeLayer188MaskPath = shapeLayer188.property("ADBE Mask Parade").property(1).property("ADBE Mask Shape");
		var shapeLayer188MaskPath_newShape = new Shape();
			shapeLayer188MaskPath_newShape.vertices = [[-788, 14], [-984, 14], [-984, 160], [-788, 160]];
			shapeLayer188MaskPath_newShape.closed = true;
		shapeLayer188MaskPath.setValue(shapeLayer188MaskPath_newShape);
		shapeLayer188.property("ADBE Transform Group").property("ADBE Position").setValue([1987,1102,0]);
		shapeLayer188.selected = false;
	// Add Shape Layer "Shape Layer 187", varName "shapeLayer187";
	var shapeLayer187 = textureManNormie_comp.layers.addShape();
		shapeLayer187.name = "Shape Layer 187";
		shapeLayer187.moveToEnd();
		shapeLayer187.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		shapeLayer187.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		shapeLayer187.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		shapeLayer187.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		shapeLayer187.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([34.5,83]);
		shapeLayer187.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(40);
		shapeLayer187.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		shapeLayer187.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		shapeLayer187.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		shapeLayer187.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(13);
		shapeLayer187.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		shapeLayer187.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		shapeLayer187.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.63921568627451,0.40392156862745,0.25882352941176,1]);
		shapeLayer187.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([-977.75,661]);
		shapeLayer187.property("ADBE Transform Group").property("ADBE Position").setValue([1885.5,1097.5,0]);
		shapeLayer187.selected = false;
	// Add Shape Layer "Shape Layer 186", varName "shapeLayer186";
	var shapeLayer186 = textureManNormie_comp.layers.addShape();
		shapeLayer186.name = "Shape Layer 186";
		shapeLayer186.moveToEnd();
		shapeLayer186.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		shapeLayer186.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		shapeLayer186.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		shapeLayer186.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		shapeLayer186.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([34.5,83]);
		shapeLayer186.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(40);
		shapeLayer186.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		shapeLayer186.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		shapeLayer186.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		shapeLayer186.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(13);
		shapeLayer186.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		shapeLayer186.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		shapeLayer186.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.63921568627451,0.40392156862745,0.25882352941176,1]);
		shapeLayer186.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([-977.75,661]);
		shapeLayer186.property("ADBE Transform Group").property("ADBE Position").setValue([1994,1097.5,0]);
		shapeLayer186.selected = false;
	// Add Shape Layer "Shape Layer 185", varName "shapeLayer185";
	var shapeLayer185 = textureManNormie_comp.layers.addShape();
		shapeLayer185.name = "Shape Layer 185";
		shapeLayer185.moveToEnd();
		shapeLayer185.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		shapeLayer185.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		shapeLayer185.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		shapeLayer185.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		shapeLayer185.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([122,122]);
		shapeLayer185.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(60);
		shapeLayer185.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		shapeLayer185.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		shapeLayer185.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		shapeLayer185.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(9);
		shapeLayer185.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		shapeLayer185.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		shapeLayer185.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.97254901960784,0.75294117647059,0.6156862745098,1]);
		shapeLayer185.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([-168,747]);
		shapeLayer185.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Rotation").setValue(-45);
		shapeLayer185.property("ADBE Transform Group").property("ADBE Position").setValue([2000,1097,0]);
		shapeLayer185.selected = false;
	// Add Shape Layer "Nose", varName "nose";
	var nose = textureManNormie_comp.layers.addShape();
		nose.name = "Nose";
		nose.label = 3;
		nose.outPoint = 18.0833333333333;
		nose.moveToEnd();
		nose.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		nose.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		nose.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		nose.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		nose.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([35,86]);
		nose.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(114);
		nose.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		nose.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		nose.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		nose.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Color").setValue([0,0,0.03137255087495,1]);
		nose.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(10);
		nose.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		nose.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		nose.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.93725490196078,0.57647058823529,0.49411764705882,1]);
		nose.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([-13,-299]);
		nose.property("ADBE Transform Group").property("ADBE Position").setValue([-4862.3525,836.34,0]);
		nose.property("ADBE Transform Group").property("ADBE Scale").setValue([47,47,100]);
		nose.selected = false;
	// Add Shape Layer "Shape Layer 173", varName "shapeLayer173";
	var shapeLayer173 = textureManNormie_comp.layers.addShape();
		shapeLayer173.name = "Shape Layer 173";
		shapeLayer173.moveToEnd();
		shapeLayer173.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		shapeLayer173.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		shapeLayer173.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		shapeLayer173.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		shapeLayer173.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([132.802325581395,162]);
		shapeLayer173.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(70);
		shapeLayer173.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		shapeLayer173.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		shapeLayer173.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		shapeLayer173.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(4);
		shapeLayer173.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		shapeLayer173.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		shapeLayer173.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.63921568627451,0.40392156862745,0.25882352941176,1]);
		shapeLayer173.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([-1478,693]);
		shapeLayer173.property("ADBE Mask Parade").addProperty("ADBE Mask Atom");
		shapeLayer173.property("ADBE Mask Parade").property(1).name = "Mask 1";
		shapeLayer173.property("ADBE Mask Parade").property(1).color = [0.70196078431373, 0.78039215686275, 0.70196078431373];
		var shapeLayer173MaskPath = shapeLayer173.property("ADBE Mask Parade").property(1).property("ADBE Mask Shape");
		var shapeLayer173MaskPath_newShape = new Shape();
			shapeLayer173MaskPath_newShape.vertices = [[-1387, 585], [-1570, 585], [-1570, 670], [-1387, 670]];
			shapeLayer173MaskPath_newShape.closed = true;
		shapeLayer173MaskPath.setValue(shapeLayer173MaskPath_newShape);
		shapeLayer173.property("ADBE Transform Group").property("ADBE Position").setValue([2017,1103,0]);
		shapeLayer173.selected = false;
	// Add Shape Layer "Shape Layer 182", varName "shapeLayer182";
	var shapeLayer182 = textureManNormie_comp.layers.addShape();
		shapeLayer182.name = "Shape Layer 182";
		shapeLayer182.moveToEnd();
		shapeLayer182.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		shapeLayer182.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		shapeLayer182.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		shapeLayer182.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		shapeLayer182.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([88,63]);
		shapeLayer182.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(20);
		shapeLayer182.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		shapeLayer182.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		shapeLayer182.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		shapeLayer182.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(4);
		shapeLayer182.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		shapeLayer182.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		shapeLayer182.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.16470588235294,0.18823529411765,0.52156862745098,1]);
		shapeLayer182.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([-22,77]);
		shapeLayer182.property("ADBE Transform Group").property("ADBE Position").setValue([2034,1140,0]);
		shapeLayer182.selected = false;
	// Add Shape Layer "Shape Layer 176", varName "shapeLayer176";
	var shapeLayer176 = textureManNormie_comp.layers.addShape();
		shapeLayer176.name = "Shape Layer 176";
		shapeLayer176.moveToEnd();
		shapeLayer176.selected = false;
	// Add Shape Layer "Shape Layer 141", varName "shapeLayer141";
	var shapeLayer141 = textureManNormie_comp.layers.addShape();
		shapeLayer141.name = "Shape Layer 141";
		shapeLayer141.moveToEnd();
		shapeLayer141.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		shapeLayer141.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		shapeLayer141.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		shapeLayer141.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		shapeLayer141.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([131,172]);
		shapeLayer141.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(70);
		shapeLayer141.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		shapeLayer141.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		shapeLayer141.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		shapeLayer141.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(4);
		shapeLayer141.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		shapeLayer141.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		shapeLayer141.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.63921568627451,0.40392156862745,0.25882352941176,1]);
		shapeLayer141.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([-1478,698]);
		shapeLayer141.property("ADBE Mask Parade").addProperty("ADBE Mask Atom");
		shapeLayer141.property("ADBE Mask Parade").property(1).name = "Mask 1";
		shapeLayer141.property("ADBE Mask Parade").property(1).color = [0.89411764705882, 0.84705882352941, 0.29803921568627];
		var shapeLayer141MaskPath = shapeLayer141.property("ADBE Mask Parade").property(1).property("ADBE Mask Shape");
		var shapeLayer141MaskPath_newShape = new Shape();
			shapeLayer141MaskPath_newShape.vertices = [[-1352, 608], [-1586, 608], [-1586, 797], [-1352, 797]];
			shapeLayer141MaskPath_newShape.closed = true;
		shapeLayer141MaskPath.setValue(shapeLayer141MaskPath_newShape);
		shapeLayer141.property("ADBE Transform Group").property("ADBE Position").setValue([2440,1068,0]);
		shapeLayer141.selected = false;
	// Add Shape Layer "Shape Layer 121", varName "shapeLayer121";
	var shapeLayer121 = textureManNormie_comp.layers.addShape();
		shapeLayer121.name = "Shape Layer 121";
		shapeLayer121.moveToEnd();
		shapeLayer121.selected = false;
	// Add Shape Layer "Shape Layer 118", varName "shapeLayer118";
	var shapeLayer118 = textureManNormie_comp.layers.addShape();
		shapeLayer118.name = "Shape Layer 118";
		shapeLayer118.enabled = false;
		shapeLayer118.moveToEnd();
		shapeLayer118.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		shapeLayer118.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		shapeLayer118.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		shapeLayer118.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		shapeLayer118.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([280,150]);
		shapeLayer118.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(198);
		shapeLayer118.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		shapeLayer118.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		shapeLayer118.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		shapeLayer118.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Color").setValue([0,0,0.02352941222489,1]);
		shapeLayer118.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(6);
		shapeLayer118.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		shapeLayer118.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		shapeLayer118.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([1,1,1,1]);
		shapeLayer118.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([-718,-590]);
		shapeLayer118.property("ADBE Transform Group").property("ADBE Position").setValue([2008,1064,0]);
		shapeLayer118.selected = false;
	// Add Shape Layer "Calf 2", varName "calf2";
	var calf2 = textureManNormie_comp.layers.addShape();
		calf2.name = "Calf 2";
		calf2.label = 6;
		calf2.moveToEnd();
		calf2.trackMatteType = TrackMatteType.ALPHA;
		calf2.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		calf2.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		calf2.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		calf2.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		calf2.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([88,411]);
		calf2.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(93);
		calf2.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		calf2.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		calf2.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		calf2.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(8);
		calf2.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		calf2.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		calf2.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.97254901960784,0.75294117647059,0.6156862745098,1]);
		calf2.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([244.5,-10.5]);
		calf2.property("ADBE Transform Group").property("ADBE Position").setValue([-3548,-843,0]);
		calf2.selected = false;
	// Add Shape Layer "Shape Layer 94", varName "shapeLayer94";
	var shapeLayer94 = textureManNormie_comp.layers.addShape();
		shapeLayer94.name = "Shape Layer 94";
		shapeLayer94.moveToEnd();
		shapeLayer94.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		shapeLayer94.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		shapeLayer94.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		shapeLayer94.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		shapeLayer94.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([240,120]);
		shapeLayer94.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(198);
		shapeLayer94.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		shapeLayer94.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		shapeLayer94.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		shapeLayer94.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Color").setValue([0,0,0.02352941222489,1]);
		shapeLayer94.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(6);
		shapeLayer94.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		shapeLayer94.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		shapeLayer94.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.18823529411765,0.70588235294118,0.30980392156863,1]);
		shapeLayer94.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([-718,-590]);
		shapeLayer94.property("ADBE Transform Group").property("ADBE Position").setValue([2008,1049,0]);
		shapeLayer94.selected = false;
	// Add Shape Layer "Shape Layer 114", varName "shapeLayer114";
	var shapeLayer114 = textureManNormie_comp.layers.addShape();
		shapeLayer114.name = "Shape Layer 114";
		shapeLayer114.moveToEnd();
		shapeLayer114.selected = false;
	// Add Shape Layer "Shape Layer 111", varName "shapeLayer111";
	var shapeLayer111 = textureManNormie_comp.layers.addShape();
		shapeLayer111.name = "Shape Layer 111";
		shapeLayer111.moveToEnd();
		shapeLayer111.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		shapeLayer111.property("ADBE Root Vectors Group").property(1).name = "Ellipse 1";
		shapeLayer111.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Ellipse");
		shapeLayer111.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Ellipse Path 1";
		shapeLayer111.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Ellipse Size").setValue([31,31]);
		shapeLayer111.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Ellipse Position").setValue([0,-1]);
		shapeLayer111.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		shapeLayer111.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		shapeLayer111.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Color").setValue([0.97254901960784,0.75294117647059,0.61176470588235,1]);
		shapeLayer111.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(13);
		shapeLayer111.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		shapeLayer111.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		shapeLayer111.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.93725490196078,0.57647058823529,0.49411764705882,1]);
		shapeLayer111.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([293,677]);
		shapeLayer111.property("ADBE Transform Group").property("ADBE Position").setValue([2389,1100,0]);
		shapeLayer111.selected = false;
	// Add Shape Layer "Shape Layer 108", varName "shapeLayer108";
	var shapeLayer108 = textureManNormie_comp.layers.addShape();
		shapeLayer108.name = "Shape Layer 108";
		shapeLayer108.moveToEnd();
		shapeLayer108.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		shapeLayer108.property("ADBE Root Vectors Group").property(1).name = "Ellipse 1";
		shapeLayer108.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Ellipse");
		shapeLayer108.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Ellipse Path 1";
		shapeLayer108.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Ellipse Size").setValue([31,31]);
		shapeLayer108.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Ellipse Position").setValue([0,-1]);
		shapeLayer108.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		shapeLayer108.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		shapeLayer108.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Color").setValue([0.97254901960784,0.75294117647059,0.61176470588235,1]);
		shapeLayer108.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(13);
		shapeLayer108.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		shapeLayer108.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		shapeLayer108.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.93725490196078,0.57647058823529,0.49411764705882,1]);
		shapeLayer108.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([293,677]);
		shapeLayer108.property("ADBE Transform Group").property("ADBE Position").setValue([2009,1101,0]);
		shapeLayer108.selected = false;
	// Add Shape Layer "Shape Layer 120", varName "shapeLayer120";
	var shapeLayer120 = textureManNormie_comp.layers.addShape();
		shapeLayer120.name = "Shape Layer 120";
		shapeLayer120.moveToEnd();
		shapeLayer120.property("ADBE Transform Group").property("ADBE Position").setValue([2843,1132.5,0]);
		shapeLayer120.selected = false;
	// Add Shape Layer "Thigh", varName "thigh";
	var thigh = textureManNormie_comp.layers.addShape();
		thigh.name = "Thigh";
		thigh.label = 10;
		thigh.moveToEnd();
		thigh.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		thigh.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		thigh.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		thigh.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		thigh.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([178,411]);
		thigh.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(93);
		thigh.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		thigh.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		thigh.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		thigh.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Color").setValue([0,0,0.01568627543747,1]);
		thigh.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(6);
		thigh.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		thigh.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		thigh.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.14901960784314,0.22352941176471,0.5921568627451,1]);
		thigh.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([244.5,-10.5]);
		thigh.property("ADBE Transform Group").property("ADBE Position").setValue([-2461,181,0]);
		thigh.selected = false;
	// Add Shape Layer "Tigh", varName "tigh2";
	var tigh2 = textureManNormie_comp.layers.addShape();
		tigh2.name = "Tigh";
		tigh2.label = 10;
		tigh2.guideLayer = true;
		tigh2.moveToEnd();
		tigh2.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		tigh2.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		tigh2.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		tigh2.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		tigh2.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([100,300]);
		tigh2.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(185);
		tigh2.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		tigh2.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		tigh2.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Color").setValue([0.13187875186696,0.03875432107963,0.24705882352941,1]);
		tigh2.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		tigh2.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		tigh2.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.7843137254902,0.7843137254902,0.7843137254902,1]);
		tigh2.property("ADBE Transform Group").property("ADBE Position").setValue([-2217,161,0]);
		tigh2.selected = false;
	// Add Shape Layer "Calf", varName "calf3";
	var calf3 = textureManNormie_comp.layers.addShape();
		calf3.name = "Calf";
		calf3.label = 6;
		calf3.moveToEnd();
		calf3.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		calf3.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		calf3.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		calf3.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		calf3.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([59,411]);
		calf3.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(93);
		calf3.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		calf3.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		calf3.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		calf3.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Color").setValue([0,0,0.01568627543747,1]);
		calf3.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(6);
		calf3.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		calf3.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		calf3.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.14901960784314,0.22352941176471,0.5921568627451,1]);
		calf3.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([244.5,-10.5]);
		calf3.property("ADBE Transform Group").property("ADBE Position").setValue([-2460,191,0]);
		calf3.selected = false;
	// Add Shape Layer "Calf", varName "calf4";
	var calf4 = textureManNormie_comp.layers.addShape();
		calf4.name = "Calf";
		calf4.label = 6;
		calf4.guideLayer = true;
		calf4.moveToEnd();
		calf4.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		calf4.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		calf4.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		calf4.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		calf4.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([100,300]);
		calf4.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(185);
		calf4.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		calf4.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		calf4.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Color").setValue([0.13187875186696,0.03875432107963,0.24705882352941,1]);
		calf4.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		calf4.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		calf4.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.7843137254902,0.7843137254902,0.7843137254902,1]);
		calf4.property("ADBE Transform Group").property("ADBE Position").setValue([-2216,161,0]);
		calf4.selected = false;
	// Add Shape Layer "glasses", varName "glasses1";
	var glasses1 = textureManNormie_comp.layers.addShape();
		glasses1.name = "glasses";
		glasses1.label = 14;
		glasses1.enabled = false;
		glasses1.moveToEnd();
		glasses1.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		glasses1.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		glasses1.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		glasses1.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		glasses1.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([34,1]);
		glasses1.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		glasses1.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		glasses1.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Color").setValue([0.13333333333333,0.17647058823529,0.37254901960784,1]);
		glasses1.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(6);
		glasses1.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		glasses1.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		glasses1.property("ADBE Root Vectors Group").property(1).property(2).property(3).enabled = false;
		glasses1.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([-2256,163.5]);
		glasses1.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		glasses1.property("ADBE Root Vectors Group").property(2).name = "Ellipse 2";
		glasses1.property("ADBE Root Vectors Group").property(2).property(2).addProperty("ADBE Vector Shape - Ellipse");
		glasses1.property("ADBE Root Vectors Group").property(2).property(2).property(1).name = "Ellipse Path 1";
		glasses1.property("ADBE Root Vectors Group").property(2).property(2).property(1).property("ADBE Vector Ellipse Size").setValue([38,38]);
		glasses1.property("ADBE Root Vectors Group").property(2).property(2).addProperty("ADBE Vector Graphic - Stroke");
		glasses1.property("ADBE Root Vectors Group").property(2).property(2).property(2).name = "Stroke 1";
		glasses1.property("ADBE Root Vectors Group").property(2).property(2).property(2).property("ADBE Vector Stroke Color").setValue([0.13333333333333,0.17647058823529,0.37254901960784,1]);
		glasses1.property("ADBE Root Vectors Group").property(2).property(2).property(2).property("ADBE Vector Stroke Width").setValue(6);
		glasses1.property("ADBE Root Vectors Group").property(2).property(2).addProperty("ADBE Vector Graphic - Fill");
		glasses1.property("ADBE Root Vectors Group").property(2).property(2).property(3).name = "Fill 1";
		glasses1.property("ADBE Root Vectors Group").property(2).property(2).property(3).enabled = false;
		glasses1.property("ADBE Root Vectors Group").property(2).property(3).property("ADBE Vector Position").setValue([-2215,164]);
		glasses1.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		glasses1.property("ADBE Root Vectors Group").property(3).name = "Ellipse 1";
		glasses1.property("ADBE Root Vectors Group").property(3).property(2).addProperty("ADBE Vector Shape - Ellipse");
		glasses1.property("ADBE Root Vectors Group").property(3).property(2).property(1).name = "Ellipse Path 1";
		glasses1.property("ADBE Root Vectors Group").property(3).property(2).property(1).property("ADBE Vector Ellipse Size").setValue([38,38]);
		glasses1.property("ADBE Root Vectors Group").property(3).property(2).addProperty("ADBE Vector Graphic - Stroke");
		glasses1.property("ADBE Root Vectors Group").property(3).property(2).property(2).name = "Stroke 1";
		glasses1.property("ADBE Root Vectors Group").property(3).property(2).property(2).property("ADBE Vector Stroke Color").setValue([0.13333333333333,0.17647058823529,0.37254901960784,1]);
		glasses1.property("ADBE Root Vectors Group").property(3).property(2).property(2).property("ADBE Vector Stroke Width").setValue(6);
		glasses1.property("ADBE Root Vectors Group").property(3).property(2).addProperty("ADBE Vector Graphic - Fill");
		glasses1.property("ADBE Root Vectors Group").property(3).property(2).property(3).name = "Fill 1";
		glasses1.property("ADBE Root Vectors Group").property(3).property(2).property(3).enabled = false;
		glasses1.property("ADBE Root Vectors Group").property(3).property(3).property("ADBE Vector Position").setValue([-2296,164]);
		glasses1.property("ADBE Transform Group").property("ADBE Position").setValue([39,-4,0]);
		glasses1.selected = false;
	// Add Shape Layer "Neck", varName "neck2";
	var neck2 = textureManNormie_comp.layers.addShape();
		neck2.name = "Neck";
		neck2.label = 13;
		neck2.moveToEnd();
		neck2.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		neck2.property("ADBE Root Vectors Group").property(1).name = "Rectangle 2";
		neck2.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		neck2.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		neck2.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([159,229]);
		neck2.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(166);
		neck2.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		neck2.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		neck2.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		neck2.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Color").setValue([0,0,0.03137255087495,1]);
		neck2.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(13);
		neck2.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		neck2.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		neck2.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.93725490196078,0.57647058823529,0.49411764705882,1]);
		neck2.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([0,-251]);
		neck2.property("ADBE Transform Group").property("ADBE Position").setValue([-4880,1033.5,0]);
		neck2.selected = false;
	// Add Shape Layer "eyelash", varName "eyelash2";
	var eyelash2 = textureManNormie_comp.layers.addShape();
		eyelash2.name = "eyelash";
		eyelash2.label = 7;
		eyelash2.enabled = false;
		eyelash2.moveToEnd();
		eyelash2.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		eyelash2.property("ADBE Root Vectors Group").property(1).name = "Rectangle 2";
		eyelash2.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		eyelash2.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		eyelash2.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([5,9]);
		eyelash2.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(20);
		eyelash2.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		eyelash2.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		eyelash2.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		eyelash2.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(13);
		eyelash2.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		eyelash2.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		eyelash2.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.08235294117647,0.18039215686275,0.23529411764706,1]);
		eyelash2.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([-2237.75,575]);
		eyelash2.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Rotation").setValue(-41.4151755984224);
		eyelash2.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		eyelash2.property("ADBE Root Vectors Group").property(2).name = "Rectangle 1";
		eyelash2.property("ADBE Root Vectors Group").property(2).property(2).addProperty("ADBE Vector Shape - Rect");
		eyelash2.property("ADBE Root Vectors Group").property(2).property(2).property(1).name = "Rectangle Path 1";
		eyelash2.property("ADBE Root Vectors Group").property(2).property(2).property(1).property("ADBE Vector Rect Size").setValue([5,13.5]);
		eyelash2.property("ADBE Root Vectors Group").property(2).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(20);
		eyelash2.property("ADBE Root Vectors Group").property(2).property(2).addProperty("ADBE Vector Graphic - Stroke");
		eyelash2.property("ADBE Root Vectors Group").property(2).property(2).property(2).name = "Stroke 1";
		eyelash2.property("ADBE Root Vectors Group").property(2).property(2).property(2).enabled = false;
		eyelash2.property("ADBE Root Vectors Group").property(2).property(2).property(2).property("ADBE Vector Stroke Width").setValue(13);
		eyelash2.property("ADBE Root Vectors Group").property(2).property(2).addProperty("ADBE Vector Graphic - Fill");
		eyelash2.property("ADBE Root Vectors Group").property(2).property(2).property(3).name = "Fill 1";
		eyelash2.property("ADBE Root Vectors Group").property(2).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.08235294117647,0.18039215686275,0.23529411764706,1]);
		eyelash2.property("ADBE Root Vectors Group").property(2).property(3).property("ADBE Vector Position").setValue([-2229,570.25]);
		eyelash2.property("ADBE Root Vectors Group").property(2).property(3).property("ADBE Vector Rotation").setValue(-20.0819774841808);
		eyelash2.property("ADBE Transform Group").property("ADBE Position").setValue([21,145,0]);
		eyelash2.selected = false;
	// Add Shape Layer "Eye2", varName "eye2";
	var eye2 = textureManNormie_comp.layers.addShape();
		eye2.name = "Eye2";
		eye2.label = 13;
		eye2.enabled = false;
		eye2.moveToEnd();
		eye2.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		eye2.property("ADBE Root Vectors Group").property(1).name = "Ellipse 1";
		eye2.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Ellipse");
		eye2.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Ellipse Path 1";
		eye2.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Ellipse Size").setValue([32,32]);
		eye2.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		eye2.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		eye2.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		eye2.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(10);
		eye2.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		eye2.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		eye2.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([1,1,1,1]);
		eye2.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([-113,-338.5]);
		eye2.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([-113,-338.5,0]);
		eye2.property("ADBE Transform Group").property("ADBE Position").setValue([-2207.6875,716.875000000001,0]);
		eye2.property("ADBE Transform Group").property("ADBE Scale").setValue([67,67,100]);
		eye2.selected = false;
	// Add Shape Layer "Eye", varName "eye";
	var eye = textureManNormie_comp.layers.addShape();
		eye.name = "Eye";
		eye.label = 6;
		eye.moveToEnd();
		eye.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		eye.property("ADBE Root Vectors Group").property(1).name = "Ellipse 1";
		eye.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Ellipse");
		eye.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Ellipse Path 1";
		eye.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Ellipse Size").setValue([32,32]);
		eye.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		eye.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		eye.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		eye.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Color").setValue([0,0,0.02352941222489,1]);
		eye.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(10);
		eye.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		eye.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		eye.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0,0,0.02352941222489,1]);
		eye.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([-113,-338.5]);
		eye.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([-113,-338.5,0]);
		eye.property("ADBE Transform Group").property("ADBE Position").setValue([-2214.1875,716.875000000001,0]);
		eye.property("ADBE Transform Group").property("ADBE Scale").setValue([47,47,100]);
		eye.selected = false;
	// Add Shape Layer "Eyebrow", varName "eyebrow";
	var eyebrow = textureManNormie_comp.layers.addShape();
		eyebrow.name = "Eyebrow";
		eyebrow.label = 7;
		eyebrow.moveToEnd();
		eyebrow.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		eyebrow.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		eyebrow.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		eyebrow.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		eyebrow.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([55,18]);
		eyebrow.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(20);
		eyebrow.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		eyebrow.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		eyebrow.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		eyebrow.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Color").setValue([0,0,0.0274509806186,1]);
		eyebrow.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(10);
		eyebrow.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		eyebrow.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		eyebrow.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.91764705882353,0.40392156862745,0.42352941176471,1]);
		eyebrow.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([-102,-373]);
		eyebrow.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([-103,-373,0]);
		eyebrow.property("ADBE Transform Group").property("ADBE Position").setValue([758.26,823.75,0]);
		eyebrow.property("ADBE Transform Group").property("ADBE Scale").setValue([47,47,100]);
		eyebrow.selected = false;
	// Add Shape Layer "Shape Layer 27", varName "shapeLayer27";
	var shapeLayer27 = textureManNormie_comp.layers.addShape();
		shapeLayer27.name = "Shape Layer 27";
		shapeLayer27.label = 11;
		shapeLayer27.outPoint = 18.0833333333333;
		shapeLayer27.moveToEnd();
		shapeLayer27.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		shapeLayer27.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		shapeLayer27.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		shapeLayer27.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		shapeLayer27.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([250,476.157575757576]);
		shapeLayer27.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(580);
		shapeLayer27.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		shapeLayer27.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		shapeLayer27.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		shapeLayer27.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Color").setValue([0,0,0.03529411926866,1]);
		shapeLayer27.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(10);
		shapeLayer27.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		shapeLayer27.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		shapeLayer27.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.97254901960784,0.75294117647059,0.6156862745098,1]);
		shapeLayer27.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([-14.0000000000001,-288.5]);
		shapeLayer27.property("ADBE Mask Parade").addProperty("ADBE Mask Atom");
		shapeLayer27.property("ADBE Mask Parade").property(1).name = "Mask 1";
		shapeLayer27.property("ADBE Mask Parade").property(1).color = [0.40392156862745, 0.49019607843137, 0.87843137254902];
		var shapeLayer27MaskPath = shapeLayer27.property("ADBE Mask Parade").property(1).property("ADBE Mask Shape");
		var shapeLayer27MaskPath_newShape = new Shape();
			shapeLayer27MaskPath_newShape.vertices = [[148.936187744141, -469.14892578125], [-187.234039306641, -469.14892578125], [-187.234039306641, -194.680847167969], [148.936187744141, -194.680847167969]];
			shapeLayer27MaskPath_newShape.closed = true;
		shapeLayer27MaskPath.setValue(shapeLayer27MaskPath_newShape);
		shapeLayer27.property("ADBE Transform Group").property("ADBE Position").setValue([-2211,-978,0]);
		shapeLayer27.property("ADBE Transform Group").property("ADBE Scale").setValue([47,47,100]);
		shapeLayer27.selected = false;
	// Add Shape Layer "Shape Layer 25", varName "shapeLayer25";
	var shapeLayer25 = textureManNormie_comp.layers.addShape();
		shapeLayer25.name = "Shape Layer 25";
		shapeLayer25.label = 13;
		shapeLayer25.moveToEnd();
		shapeLayer25.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		shapeLayer25.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		shapeLayer25.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		shapeLayer25.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		shapeLayer25.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([244,10]);
		shapeLayer25.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		shapeLayer25.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		shapeLayer25.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		shapeLayer25.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Color").setValue([0,0,0.02352941222489,1]);
		shapeLayer25.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(13);
		shapeLayer25.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		shapeLayer25.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		shapeLayer25.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.05098039215686,0.11372549019608,0.14901960784314,1]);
		shapeLayer25.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([962,-275]);
		shapeLayer25.property("ADBE Transform Group").property("ADBE Position").setValue([-3154,622,0]);
		shapeLayer25.selected = false;
	// Add Shape Layer "Shape Layer 116", varName "shapeLayer116";
	var shapeLayer116 = textureManNormie_comp.layers.addShape();
		shapeLayer116.name = "Shape Layer 116";
		shapeLayer116.label = 13;
		shapeLayer116.enabled = false;
		shapeLayer116.moveToEnd();
		shapeLayer116.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		shapeLayer116.property("ADBE Root Vectors Group").property(1).name = "Ellipse 1";
		shapeLayer116.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Ellipse");
		shapeLayer116.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Ellipse Path 1";
		shapeLayer116.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Ellipse Size").setValue([78,78]);
		shapeLayer116.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		shapeLayer116.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		shapeLayer116.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		shapeLayer116.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Color").setValue([0,0,0.01960784383118,1]);
		shapeLayer116.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(13);
		shapeLayer116.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		shapeLayer116.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		shapeLayer116.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([1,1,1,1]);
		shapeLayer116.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([988,-301]);
		shapeLayer116.property("ADBE Root Vectors Group").addProperty("ADBE Vector Filter - Trim");
		shapeLayer116.property("ADBE Root Vectors Group").property(2).name = "Trim Paths 1";
		shapeLayer116.property("ADBE Root Vectors Group").property(2).property("ADBE Vector Trim End").setValue(50);
		shapeLayer116.property("ADBE Root Vectors Group").property(2).property("ADBE Vector Trim Offset").setValue(-90);
		shapeLayer116.property("ADBE Transform Group").property("ADBE Position").setValue([-3146,647,0]);
		shapeLayer116.selected = false;
	// Add Shape Layer "Shape Layer 24", varName "shapeLayer24";
	var shapeLayer24 = textureManNormie_comp.layers.addShape();
		shapeLayer24.name = "Shape Layer 24";
		shapeLayer24.label = 13;
		shapeLayer24.moveToEnd();
		shapeLayer24.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		shapeLayer24.property("ADBE Root Vectors Group").property(1).name = "Ellipse 1";
		shapeLayer24.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Ellipse");
		shapeLayer24.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Ellipse Path 1";
		shapeLayer24.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Ellipse Size").setValue([110,110]);
		shapeLayer24.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		shapeLayer24.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		shapeLayer24.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		shapeLayer24.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Color").setValue([0,0,0.01960784383118,1]);
		shapeLayer24.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(13);
		shapeLayer24.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		shapeLayer24.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		shapeLayer24.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.12156862745098,0.12941176470588,0.35294117647059,1]);
		shapeLayer24.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([981,-301]);
		shapeLayer24.property("ADBE Root Vectors Group").addProperty("ADBE Vector Filter - Trim");
		shapeLayer24.property("ADBE Root Vectors Group").property(2).name = "Trim Paths 1";
		shapeLayer24.property("ADBE Root Vectors Group").property(2).property("ADBE Vector Trim End").setValue(50);
		shapeLayer24.property("ADBE Root Vectors Group").property(2).property("ADBE Vector Trim Offset").setValue(-90);
		shapeLayer24.property("ADBE Transform Group").property("ADBE Position").setValue([-3146,647,0]);
		shapeLayer24.selected = false;
	// Add Shape Layer "Shape Layer 7", varName "shapeLayer7";
	var shapeLayer7 = textureManNormie_comp.layers.addShape();
		shapeLayer7.name = "Shape Layer 7";
		shapeLayer7.label = 13;
		shapeLayer7.moveToEnd();
		shapeLayer7.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		shapeLayer7.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		shapeLayer7.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		shapeLayer7.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		shapeLayer7.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([248,124]);
		shapeLayer7.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(20);
		shapeLayer7.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		shapeLayer7.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		shapeLayer7.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		shapeLayer7.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Color").setValue([0,0,0.02352941222489,1]);
		shapeLayer7.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(109);
		shapeLayer7.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		shapeLayer7.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		shapeLayer7.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.12156862745098,0.12941176470588,0.35294117647059,1]);
		shapeLayer7.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([960,-308]);
		shapeLayer7.property("ADBE Transform Group").property("ADBE Position").setValue([-3154,619,0]);
		shapeLayer7.selected = false;
	// Add Shape Layer "Feet", varName "feet1";
	var feet1 = textureManNormie_comp.layers.addShape();
		feet1.name = "Feet";
		feet1.label = 13;
		feet1.guideLayer = true;
		feet1.moveToEnd();
		feet1.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		feet1.property("ADBE Root Vectors Group").property(1).name = "Ellipse 1";
		feet1.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Ellipse");
		feet1.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Ellipse Path 1";
		feet1.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Ellipse Size").setValue([150,150]);
		feet1.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		feet1.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		feet1.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Color").setValue([0.13187875186696,0.03875432107963,0.24705882352941,1]);
		feet1.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		feet1.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		feet1.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.7843137254902,0.7843137254902,0.7843137254902,1]);
		feet1.property("ADBE Mask Parade").addProperty("ADBE Mask Atom");
		feet1.property("ADBE Mask Parade").property(1).name = "Mask 1";
		feet1.property("ADBE Mask Parade").property(1).color = [0.49803921568627, 0.27058823529412, 0.16470588235294];
		var feet1MaskPath = feet1.property("ADBE Mask Parade").property(1).property("ADBE Mask Shape");
		var feet1MaskPath_newShape = new Shape();
			feet1MaskPath_newShape.vertices = [[145, -116], [-121, -116], [-121, 0.25], [145, 0.25]];
			feet1MaskPath_newShape.closed = true;
		feet1MaskPath.setValue(feet1MaskPath_newShape);
		feet1.property("ADBE Transform Group").property("ADBE Position").setValue([-2195,352.75,0]);
		feet1.selected = false;
	// Add Shape Layer "hand", varName "hand2";
	var hand2 = textureManNormie_comp.layers.addShape();
		hand2.name = "hand";
		hand2.label = 16;
		hand2.moveToEnd();
		hand2.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		hand2.property("ADBE Root Vectors Group").property(1).name = "Rectangle 3";
		hand2.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		hand2.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		hand2.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([208,260]);
		hand2.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(20);
		hand2.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		hand2.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		hand2.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		hand2.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Color").setValue([0,0,0.03529411926866,1]);
		hand2.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(109);
		hand2.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		hand2.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		hand2.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.97254901960784,0.75294117647059,0.6156862745098,1]);
		hand2.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([956,-36]);
		hand2.property("ADBE Transform Group").property("ADBE Position").setValue([-3176,166.5,0]);
		hand2.selected = false;
	// Add Shape Layer "Hand", varName "hand3";
	var hand3 = textureManNormie_comp.layers.addShape();
		hand3.name = "Hand";
		hand3.label = 16;
		hand3.guideLayer = true;
		hand3.moveToEnd();
		hand3.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		hand3.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		hand3.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		hand3.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		hand3.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([120,170]);
		hand3.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(386);
		hand3.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		hand3.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		hand3.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Color").setValue([0.13187875186696,0.03875432107963,0.24705882352941,1]);
		hand3.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		hand3.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		hand3.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.7843137254902,0.7843137254902,0.7843137254902,1]);
		hand3.property("ADBE Transform Group").property("ADBE Position").setValue([-2217,130.25,0]);
		hand3.selected = false;
	// Add Shape Layer "FOrearm", varName "forearm2";
	var forearm2 = textureManNormie_comp.layers.addShape();
		forearm2.name = "FOrearm";
		forearm2.label = 1;
		forearm2.moveToEnd();
		forearm2.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		forearm2.property("ADBE Root Vectors Group").property(1).name = "Rectangle 2";
		forearm2.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		forearm2.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		forearm2.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([208,380]);
		forearm2.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(20);
		forearm2.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		forearm2.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		forearm2.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		forearm2.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Color").setValue([0,0,0.00784313771874,1]);
		forearm2.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(109);
		forearm2.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		forearm2.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		forearm2.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.97254901960784,0.75294117647059,0.6156862745098,1]);
		forearm2.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([-132,-4]);
		forearm2.property("ADBE Transform Group").property("ADBE Position").setValue([-2092,174.5,0]);
		forearm2.selected = false;
	// Add Shape Layer "Forearm", varName "forearm3";
	var forearm3 = textureManNormie_comp.layers.addShape();
		forearm3.name = "Forearm";
		forearm3.label = 1;
		forearm3.guideLayer = true;
		forearm3.moveToEnd();
		forearm3.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		forearm3.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		forearm3.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		forearm3.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		forearm3.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([70,250]);
		forearm3.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(185);
		forearm3.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		forearm3.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		forearm3.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Color").setValue([0.13187875186696,0.03875432107963,0.24705882352941,1]);
		forearm3.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		forearm3.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		forearm3.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.7843137254902,0.7843137254902,0.7843137254902,1]);
		forearm3.property("ADBE Transform Group").property("ADBE Position").setValue([-2217,160.5,0]);
		forearm3.selected = false;
	// Add Shape Layer "Shape Layer 46", varName "shapeLayer46";
	var shapeLayer46 = textureManNormie_comp.layers.addShape();
		shapeLayer46.name = "Shape Layer 46";
		shapeLayer46.label = 7;
		shapeLayer46.moveToEnd();
		shapeLayer46.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		shapeLayer46.property("ADBE Root Vectors Group").property(1).name = "Rectangle 2";
		shapeLayer46.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		shapeLayer46.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		shapeLayer46.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([208,380]);
		shapeLayer46.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(20);
		shapeLayer46.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		shapeLayer46.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		shapeLayer46.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		shapeLayer46.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Color").setValue([0,0,0.00784313771874,1]);
		shapeLayer46.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(109);
		shapeLayer46.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		shapeLayer46.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		shapeLayer46.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.97254901960784,0.75294117647059,0.6156862745098,1]);
		shapeLayer46.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([-132,-4]);
		shapeLayer46.property("ADBE Transform Group").property("ADBE Position").setValue([-2092,177,0]);
		shapeLayer46.selected = false;
	// Add Shape Layer "Upper Arm", varName "upperArm2";
	var upperArm2 = textureManNormie_comp.layers.addShape();
		upperArm2.name = "Upper Arm";
		upperArm2.label = 3;
		upperArm2.guideLayer = true;
		upperArm2.moveToEnd();
		upperArm2.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		upperArm2.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		upperArm2.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		upperArm2.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		upperArm2.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([70,250]);
		upperArm2.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(185);
		upperArm2.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		upperArm2.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		upperArm2.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Color").setValue([0.13187875186696,0.03875432107963,0.24705882352941,1]);
		upperArm2.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		upperArm2.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		upperArm2.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.7843137254902,0.7843137254902,0.7843137254902,1]);
		upperArm2.property("ADBE Transform Group").property("ADBE Position").setValue([-2217,161,0]);
		upperArm2.selected = false;
	// Add Shape Layer "Hips", varName "hips3";
	var hips3 = textureManNormie_comp.layers.addShape();
		hips3.name = "Hips";
		hips3.label = 3;
		hips3.moveToEnd();
		hips3.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		hips3.property("ADBE Root Vectors Group").property(1).name = "Rectangle 3";
		hips3.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		hips3.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		hips3.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([344,240]);
		hips3.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(20);
		hips3.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		hips3.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		hips3.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		hips3.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Color").setValue([0,0,0.01568627543747,1]);
		hips3.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(109);
		hips3.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		hips3.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		hips3.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.14901960784314,0.22352941176471,0.5921568627451,1]);
		hips3.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([-1010,-66]);
		hips3.property("ADBE Transform Group").property("ADBE Position").setValue([-1215,246.5,0]);
		hips3.selected = false;
	// Add Shape Layer "Hips", varName "hips4";
	var hips4 = textureManNormie_comp.layers.addShape();
		hips4.name = "Hips";
		hips4.label = 3;
		hips4.guideLayer = true;
		hips4.moveToEnd();
		hips4.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		hips4.property("ADBE Root Vectors Group").property(1).name = "Ellipse 1";
		hips4.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Ellipse");
		hips4.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Ellipse Path 1";
		hips4.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Ellipse Size").setValue([225,225]);
		hips4.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		hips4.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		hips4.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Color").setValue([0.13187875186696,0.03875432107963,0.24705882352941,1]);
		hips4.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		hips4.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		hips4.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.7843137254902,0.7843137254902,0.7843137254902,1]);
		hips4.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([270,-195]);
		hips4.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([270,-185.0625,0]);
		hips4.property("ADBE Transform Group").property("ADBE Position").setValue([-2217,70.4375,0]);
		hips4.selected = false;
	// Add Shape Layer "Body", varName "body";
	var body = textureManNormie_comp.layers.addShape();
		body.name = "Body";
		body.label = 11;
		body.moveToEnd();
		body.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		body.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		body.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		body.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		body.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([244,509]);
		body.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(293);
		body.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		body.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		body.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		body.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Color").setValue([0,0,0.02352941222489,1]);
		body.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(109);
		body.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		body.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		body.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.18823529411765,0.70588235294118,0.30980392156863,1]);
		body.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([-1592,108]);
		body.property("ADBE Transform Group").property("ADBE Position").setValue([-626,54.5,0]);
		body.selected = false;
	// Add Shape Layer "Body Top", varName "bodyTop3";
	var bodyTop3 = textureManNormie_comp.layers.addShape();
		bodyTop3.name = "Body Top";
		bodyTop3.label = 11;
		bodyTop3.guideLayer = true;
		bodyTop3.moveToEnd();
		bodyTop3.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		bodyTop3.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		bodyTop3.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		bodyTop3.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		bodyTop3.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([225,350]);
		bodyTop3.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(373);
		bodyTop3.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		bodyTop3.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		bodyTop3.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Color").setValue([0.13187875186696,0.03875432107963,0.24705882352941,1]);
		bodyTop3.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		bodyTop3.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		bodyTop3.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.7843137254902,0.7843137254902,0.7843137254902,1]);
		bodyTop3.property("ADBE Transform Group").property("ADBE Position").setValue([-2217,160.5,0]);
		bodyTop3.selected = false;
	var hipsTop25 = textureManNormie_comp.layers.addText("Eye 2");
		hipsTop25.name = "Hips Top 25";
		hipsTop25.shy = true;
		hipsTop25.guideLayer = true;
		hipsTop25.moveToEnd();
		var hipsTop25_TextProp = hipsTop25.property("ADBE Text Properties").property("ADBE Text Document");
		var hipsTop25_TextDocument = hipsTop25_TextProp.value;
			hipsTop25_TextDocument.font = "ArialMT";
			hipsTop25_TextDocument.fontSize = 40;
			hipsTop25_TextDocument.applyFill = true;
			hipsTop25_TextDocument.fillColor = [0.45490002632141,0.45490002632141,0.45490002632141];
			hipsTop25_TextDocument.applyStroke = false;
			hipsTop25_TextDocument.justification = ParagraphJustification.CENTER_JUSTIFY;
			hipsTop25_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				hipsTop25_TextDocument.verticalScale = 1;
				hipsTop25_TextDocument.horizontalScale = 1;
				hipsTop25_TextDocument.baselineShift = 0;
				hipsTop25_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// hipsTop25_TextDocument.fauxBold = false;
				// hipsTop25_TextDocument.fauxItalic = false;
				// hipsTop25_TextDocument.allCaps = false;
				// hipsTop25_TextDocument.smallCaps = false;
				// hipsTop25_TextDocument.superscript = false;
				// hipsTop25_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				hipsTop25_TextDocument.leading = 48;
				hipsTop25_TextDocument.autoLeading = true;
			}
			hipsTop25_TextProp.setValue(hipsTop25_TextDocument);
		hipsTop25.property("ADBE Transform Group").property("ADBE Position").setValue([-2202.13153076172,819,0]);
		hipsTop25.selected = false;
	var hipsTop24 = textureManNormie_comp.layers.addText("Eye Middle");
		hipsTop24.name = "Hips Top 24";
		hipsTop24.shy = true;
		hipsTop24.guideLayer = true;
		hipsTop24.moveToEnd();
		var hipsTop24_TextProp = hipsTop24.property("ADBE Text Properties").property("ADBE Text Document");
		var hipsTop24_TextDocument = hipsTop24_TextProp.value;
			hipsTop24_TextDocument.font = "ArialMT";
			hipsTop24_TextDocument.fontSize = 40;
			hipsTop24_TextDocument.applyFill = true;
			hipsTop24_TextDocument.fillColor = [0.45490002632141,0.45490002632141,0.45490002632141];
			hipsTop24_TextDocument.applyStroke = false;
			hipsTop24_TextDocument.justification = ParagraphJustification.CENTER_JUSTIFY;
			hipsTop24_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				hipsTop24_TextDocument.verticalScale = 1;
				hipsTop24_TextDocument.horizontalScale = 1;
				hipsTop24_TextDocument.baselineShift = 0;
				hipsTop24_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// hipsTop24_TextDocument.fauxBold = false;
				// hipsTop24_TextDocument.fauxItalic = false;
				// hipsTop24_TextDocument.allCaps = false;
				// hipsTop24_TextDocument.smallCaps = false;
				// hipsTop24_TextDocument.superscript = false;
				// hipsTop24_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				hipsTop24_TextDocument.leading = 48;
				hipsTop24_TextDocument.autoLeading = true;
			}
			hipsTop24_TextProp.setValue(hipsTop24_TextDocument);
		hipsTop24.property("ADBE Transform Group").property("ADBE Position").setValue([-2204.63153076172,819,0]);
		hipsTop24.selected = false;
	var hipsTop23 = textureManNormie_comp.layers.addText("Eyelash");
		hipsTop23.name = "Hips Top 23";
		hipsTop23.shy = true;
		hipsTop23.guideLayer = true;
		hipsTop23.moveToEnd();
		var hipsTop23_TextProp = hipsTop23.property("ADBE Text Properties").property("ADBE Text Document");
		var hipsTop23_TextDocument = hipsTop23_TextProp.value;
			hipsTop23_TextDocument.font = "ArialMT";
			hipsTop23_TextDocument.fontSize = 40;
			hipsTop23_TextDocument.applyFill = true;
			hipsTop23_TextDocument.fillColor = [0.45490002632141,0.45490002632141,0.45490002632141];
			hipsTop23_TextDocument.applyStroke = false;
			hipsTop23_TextDocument.justification = ParagraphJustification.CENTER_JUSTIFY;
			hipsTop23_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				hipsTop23_TextDocument.verticalScale = 1;
				hipsTop23_TextDocument.horizontalScale = 1;
				hipsTop23_TextDocument.baselineShift = 0;
				hipsTop23_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// hipsTop23_TextDocument.fauxBold = false;
				// hipsTop23_TextDocument.fauxItalic = false;
				// hipsTop23_TextDocument.allCaps = false;
				// hipsTop23_TextDocument.smallCaps = false;
				// hipsTop23_TextDocument.superscript = false;
				// hipsTop23_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				hipsTop23_TextDocument.leading = 48;
				hipsTop23_TextDocument.autoLeading = true;
			}
			hipsTop23_TextProp.setValue(hipsTop23_TextDocument);
		hipsTop23.property("ADBE Transform Group").property("ADBE Position").setValue([-2206.13153076172,821,0]);
		hipsTop23.selected = false;
	var hipsTop22 = textureManNormie_comp.layers.addText("Eyebrow");
		hipsTop22.name = "Hips Top 22";
		hipsTop22.shy = true;
		hipsTop22.guideLayer = true;
		hipsTop22.moveToEnd();
		var hipsTop22_TextProp = hipsTop22.property("ADBE Text Properties").property("ADBE Text Document");
		var hipsTop22_TextDocument = hipsTop22_TextProp.value;
			hipsTop22_TextDocument.font = "ArialMT";
			hipsTop22_TextDocument.fontSize = 40;
			hipsTop22_TextDocument.applyFill = true;
			hipsTop22_TextDocument.fillColor = [0.45490002632141,0.45490002632141,0.45490002632141];
			hipsTop22_TextDocument.applyStroke = false;
			hipsTop22_TextDocument.justification = ParagraphJustification.CENTER_JUSTIFY;
			hipsTop22_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				hipsTop22_TextDocument.verticalScale = 1;
				hipsTop22_TextDocument.horizontalScale = 1;
				hipsTop22_TextDocument.baselineShift = 0;
				hipsTop22_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// hipsTop22_TextDocument.fauxBold = false;
				// hipsTop22_TextDocument.fauxItalic = false;
				// hipsTop22_TextDocument.allCaps = false;
				// hipsTop22_TextDocument.smallCaps = false;
				// hipsTop22_TextDocument.superscript = false;
				// hipsTop22_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				hipsTop22_TextDocument.leading = 48;
				hipsTop22_TextDocument.autoLeading = true;
			}
			hipsTop22_TextProp.setValue(hipsTop22_TextDocument);
		hipsTop22.property("ADBE Transform Group").property("ADBE Position").setValue([756.868469238281,927,0]);
		hipsTop22.selected = false;
	var hipsTop21 = textureManNormie_comp.layers.addText("Neck");
		hipsTop21.name = "Hips Top 21";
		hipsTop21.shy = true;
		hipsTop21.guideLayer = true;
		hipsTop21.moveToEnd();
		var hipsTop21_TextProp = hipsTop21.property("ADBE Text Properties").property("ADBE Text Document");
		var hipsTop21_TextDocument = hipsTop21_TextProp.value;
			hipsTop21_TextDocument.font = "ArialMT";
			hipsTop21_TextDocument.fontSize = 45;
			hipsTop21_TextDocument.applyFill = true;
			hipsTop21_TextDocument.fillColor = [0.45490002632141,0.45490002632141,0.45490002632141];
			hipsTop21_TextDocument.applyStroke = false;
			hipsTop21_TextDocument.justification = ParagraphJustification.CENTER_JUSTIFY;
			hipsTop21_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				hipsTop21_TextDocument.verticalScale = 1;
				hipsTop21_TextDocument.horizontalScale = 1;
				hipsTop21_TextDocument.baselineShift = 0;
				hipsTop21_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// hipsTop21_TextDocument.fauxBold = false;
				// hipsTop21_TextDocument.fauxItalic = false;
				// hipsTop21_TextDocument.allCaps = false;
				// hipsTop21_TextDocument.smallCaps = false;
				// hipsTop21_TextDocument.superscript = false;
				// hipsTop21_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				hipsTop21_TextDocument.leading = 54.0000038146973;
				hipsTop21_TextDocument.autoLeading = true;
			}
			hipsTop21_TextProp.setValue(hipsTop21_TextDocument);
		hipsTop21.property("ADBE Transform Group").property("ADBE Position").setValue([-4886.38153076172,970.5,0]);
		hipsTop21.selected = false;
	var hipsTop20 = textureManNormie_comp.layers.addText("Hair Middle");
		hipsTop20.name = "Hips Top 20";
		hipsTop20.shy = true;
		hipsTop20.guideLayer = true;
		hipsTop20.moveToEnd();
		var hipsTop20_TextProp = hipsTop20.property("ADBE Text Properties").property("ADBE Text Document");
		var hipsTop20_TextDocument = hipsTop20_TextProp.value;
			hipsTop20_TextDocument.font = "ArialMT";
			hipsTop20_TextDocument.fontSize = 45;
			hipsTop20_TextDocument.applyFill = true;
			hipsTop20_TextDocument.fillColor = [0.45490002632141,0.45490002632141,0.45490002632141];
			hipsTop20_TextDocument.applyStroke = false;
			hipsTop20_TextDocument.justification = ParagraphJustification.CENTER_JUSTIFY;
			hipsTop20_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				hipsTop20_TextDocument.verticalScale = 1;
				hipsTop20_TextDocument.horizontalScale = 1;
				hipsTop20_TextDocument.baselineShift = 0;
				hipsTop20_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// hipsTop20_TextDocument.fauxBold = false;
				// hipsTop20_TextDocument.fauxItalic = false;
				// hipsTop20_TextDocument.allCaps = false;
				// hipsTop20_TextDocument.smallCaps = false;
				// hipsTop20_TextDocument.superscript = false;
				// hipsTop20_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				hipsTop20_TextDocument.leading = 54.0000038146973;
				hipsTop20_TextDocument.autoLeading = true;
			}
			hipsTop20_TextProp.setValue(hipsTop20_TextDocument);
		hipsTop20.property("ADBE Transform Group").property("ADBE Position").setValue([-2217.88153076172,-889.5,0]);
		hipsTop20.selected = false;
	var hipsTop19 = textureManNormie_comp.layers.addText("Hair Back");
		hipsTop19.name = "Hips Top 19";
		hipsTop19.shy = true;
		hipsTop19.guideLayer = true;
		hipsTop19.moveToEnd();
		var hipsTop19_TextProp = hipsTop19.property("ADBE Text Properties").property("ADBE Text Document");
		var hipsTop19_TextDocument = hipsTop19_TextProp.value;
			hipsTop19_TextDocument.font = "ArialMT";
			hipsTop19_TextDocument.fontSize = 45;
			hipsTop19_TextDocument.applyFill = true;
			hipsTop19_TextDocument.fillColor = [0.45490002632141,0.45490002632141,0.45490002632141];
			hipsTop19_TextDocument.applyStroke = false;
			hipsTop19_TextDocument.justification = ParagraphJustification.CENTER_JUSTIFY;
			hipsTop19_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				hipsTop19_TextDocument.verticalScale = 1;
				hipsTop19_TextDocument.horizontalScale = 1;
				hipsTop19_TextDocument.baselineShift = 0;
				hipsTop19_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// hipsTop19_TextDocument.fauxBold = false;
				// hipsTop19_TextDocument.fauxItalic = false;
				// hipsTop19_TextDocument.allCaps = false;
				// hipsTop19_TextDocument.smallCaps = false;
				// hipsTop19_TextDocument.superscript = false;
				// hipsTop19_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				hipsTop19_TextDocument.leading = 54.0000038146973;
				hipsTop19_TextDocument.autoLeading = true;
			}
			hipsTop19_TextProp.setValue(hipsTop19_TextDocument);
		hipsTop19.property("ADBE Transform Group").property("ADBE Position").setValue([-2219.38153076172,379.5,0]);
		hipsTop19.selected = false;
	var hipsTop18 = textureManNormie_comp.layers.addText("Hair Front");
		hipsTop18.name = "Hips Top 18";
		hipsTop18.shy = true;
		hipsTop18.guideLayer = true;
		hipsTop18.moveToEnd();
		var hipsTop18_TextProp = hipsTop18.property("ADBE Text Properties").property("ADBE Text Document");
		var hipsTop18_TextDocument = hipsTop18_TextProp.value;
			hipsTop18_TextDocument.font = "ArialMT";
			hipsTop18_TextDocument.fontSize = 45;
			hipsTop18_TextDocument.applyFill = true;
			hipsTop18_TextDocument.fillColor = [0.45490002632141,0.45490002632141,0.45490002632141];
			hipsTop18_TextDocument.applyStroke = false;
			hipsTop18_TextDocument.justification = ParagraphJustification.CENTER_JUSTIFY;
			hipsTop18_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				hipsTop18_TextDocument.verticalScale = 1;
				hipsTop18_TextDocument.horizontalScale = 1;
				hipsTop18_TextDocument.baselineShift = 0;
				hipsTop18_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// hipsTop18_TextDocument.fauxBold = false;
				// hipsTop18_TextDocument.fauxItalic = false;
				// hipsTop18_TextDocument.allCaps = false;
				// hipsTop18_TextDocument.smallCaps = false;
				// hipsTop18_TextDocument.superscript = false;
				// hipsTop18_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				hipsTop18_TextDocument.leading = 54.0000038146973;
				hipsTop18_TextDocument.autoLeading = true;
			}
			hipsTop18_TextProp.setValue(hipsTop18_TextDocument);
		hipsTop18.property("ADBE Transform Group").property("ADBE Position").setValue([-2222.38153076172,331.5,0]);
		hipsTop18.selected = false;
	var hipsTop17 = textureManNormie_comp.layers.addText("Head Shape");
		hipsTop17.name = "Hips Top 17";
		hipsTop17.shy = true;
		hipsTop17.guideLayer = true;
		hipsTop17.moveToEnd();
		var hipsTop17_TextProp = hipsTop17.property("ADBE Text Properties").property("ADBE Text Document");
		var hipsTop17_TextDocument = hipsTop17_TextProp.value;
			hipsTop17_TextDocument.font = "ArialMT";
			hipsTop17_TextDocument.fontSize = 45;
			hipsTop17_TextDocument.applyFill = true;
			hipsTop17_TextDocument.fillColor = [0.45490002632141,0.45490002632141,0.45490002632141];
			hipsTop17_TextDocument.applyStroke = false;
			hipsTop17_TextDocument.justification = ParagraphJustification.CENTER_JUSTIFY;
			hipsTop17_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				hipsTop17_TextDocument.verticalScale = 1;
				hipsTop17_TextDocument.horizontalScale = 1;
				hipsTop17_TextDocument.baselineShift = 0;
				hipsTop17_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// hipsTop17_TextDocument.fauxBold = false;
				// hipsTop17_TextDocument.fauxItalic = false;
				// hipsTop17_TextDocument.allCaps = false;
				// hipsTop17_TextDocument.smallCaps = false;
				// hipsTop17_TextDocument.superscript = false;
				// hipsTop17_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				hipsTop17_TextDocument.leading = 54.0000038146973;
				hipsTop17_TextDocument.autoLeading = true;
			}
			hipsTop17_TextProp.setValue(hipsTop17_TextDocument);
		hipsTop17.property("ADBE Transform Group").property("ADBE Position").setValue([-2219.38153076172,-910.5,0]);
		hipsTop17.selected = false;
	var hipsTop16 = textureManNormie_comp.layers.addText("Ear Left");
		hipsTop16.name = "Hips Top 16";
		hipsTop16.shy = true;
		hipsTop16.guideLayer = true;
		hipsTop16.moveToEnd();
		var hipsTop16_TextProp = hipsTop16.property("ADBE Text Properties").property("ADBE Text Document");
		var hipsTop16_TextDocument = hipsTop16_TextProp.value;
			hipsTop16_TextDocument.font = "ArialMT";
			hipsTop16_TextDocument.fontSize = 45;
			hipsTop16_TextDocument.applyFill = true;
			hipsTop16_TextDocument.fillColor = [0.45490002632141,0.45490002632141,0.45490002632141];
			hipsTop16_TextDocument.applyStroke = false;
			hipsTop16_TextDocument.justification = ParagraphJustification.CENTER_JUSTIFY;
			hipsTop16_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				hipsTop16_TextDocument.verticalScale = 1;
				hipsTop16_TextDocument.horizontalScale = 1;
				hipsTop16_TextDocument.baselineShift = 0;
				hipsTop16_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// hipsTop16_TextDocument.fauxBold = false;
				// hipsTop16_TextDocument.fauxItalic = false;
				// hipsTop16_TextDocument.allCaps = false;
				// hipsTop16_TextDocument.smallCaps = false;
				// hipsTop16_TextDocument.superscript = false;
				// hipsTop16_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				hipsTop16_TextDocument.leading = 54.0000038146973;
				hipsTop16_TextDocument.autoLeading = true;
			}
			hipsTop16_TextProp.setValue(hipsTop16_TextDocument);
		hipsTop16.property("ADBE Transform Group").property("ADBE Position").setValue([-4867.38153076172,863.5,0]);
		hipsTop16.selected = false;
	var hipsTop15 = textureManNormie_comp.layers.addText("Ear Right");
		hipsTop15.name = "Hips Top 15";
		hipsTop15.shy = true;
		hipsTop15.guideLayer = true;
		hipsTop15.moveToEnd();
		var hipsTop15_TextProp = hipsTop15.property("ADBE Text Properties").property("ADBE Text Document");
		var hipsTop15_TextDocument = hipsTop15_TextProp.value;
			hipsTop15_TextDocument.font = "ArialMT";
			hipsTop15_TextDocument.fontSize = 45;
			hipsTop15_TextDocument.applyFill = true;
			hipsTop15_TextDocument.fillColor = [0.45490002632141,0.45490002632141,0.45490002632141];
			hipsTop15_TextDocument.applyStroke = false;
			hipsTop15_TextDocument.justification = ParagraphJustification.CENTER_JUSTIFY;
			hipsTop15_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				hipsTop15_TextDocument.verticalScale = 1;
				hipsTop15_TextDocument.horizontalScale = 1;
				hipsTop15_TextDocument.baselineShift = 0;
				hipsTop15_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// hipsTop15_TextDocument.fauxBold = false;
				// hipsTop15_TextDocument.fauxItalic = false;
				// hipsTop15_TextDocument.allCaps = false;
				// hipsTop15_TextDocument.smallCaps = false;
				// hipsTop15_TextDocument.superscript = false;
				// hipsTop15_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				hipsTop15_TextDocument.leading = 54.0000038146973;
				hipsTop15_TextDocument.autoLeading = true;
			}
			hipsTop15_TextProp.setValue(hipsTop15_TextDocument);
		hipsTop15.property("ADBE Transform Group").property("ADBE Position").setValue([-4867.38153076172,863.5,0]);
		hipsTop15.selected = false;
	var hipsTop14 = textureManNormie_comp.layers.addText("Beard");
		hipsTop14.name = "Hips Top 14";
		hipsTop14.shy = true;
		hipsTop14.guideLayer = true;
		hipsTop14.moveToEnd();
		var hipsTop14_TextProp = hipsTop14.property("ADBE Text Properties").property("ADBE Text Document");
		var hipsTop14_TextDocument = hipsTop14_TextProp.value;
			hipsTop14_TextDocument.font = "ArialMT";
			hipsTop14_TextDocument.fontSize = 45;
			hipsTop14_TextDocument.applyFill = true;
			hipsTop14_TextDocument.fillColor = [0.45490002632141,0.45490002632141,0.45490002632141];
			hipsTop14_TextDocument.applyStroke = false;
			hipsTop14_TextDocument.justification = ParagraphJustification.CENTER_JUSTIFY;
			hipsTop14_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				hipsTop14_TextDocument.verticalScale = 1;
				hipsTop14_TextDocument.horizontalScale = 1;
				hipsTop14_TextDocument.baselineShift = 0;
				hipsTop14_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// hipsTop14_TextDocument.fauxBold = false;
				// hipsTop14_TextDocument.fauxItalic = false;
				// hipsTop14_TextDocument.allCaps = false;
				// hipsTop14_TextDocument.smallCaps = false;
				// hipsTop14_TextDocument.superscript = false;
				// hipsTop14_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				hipsTop14_TextDocument.leading = 54.0000038146973;
				hipsTop14_TextDocument.autoLeading = true;
			}
			hipsTop14_TextProp.setValue(hipsTop14_TextDocument);
		hipsTop14.property("ADBE Transform Group").property("ADBE Position").setValue([-4871.38153076172,907.5,0]);
		hipsTop14.selected = false;
	var hipsTop13 = textureManNormie_comp.layers.addText("Glasses");
		hipsTop13.name = "Hips Top 13";
		hipsTop13.shy = true;
		hipsTop13.guideLayer = true;
		hipsTop13.moveToEnd();
		var hipsTop13_TextProp = hipsTop13.property("ADBE Text Properties").property("ADBE Text Document");
		var hipsTop13_TextDocument = hipsTop13_TextProp.value;
			hipsTop13_TextDocument.font = "ArialMT";
			hipsTop13_TextDocument.fontSize = 45;
			hipsTop13_TextDocument.applyFill = true;
			hipsTop13_TextDocument.fillColor = [0.45490002632141,0.45490002632141,0.45490002632141];
			hipsTop13_TextDocument.applyStroke = false;
			hipsTop13_TextDocument.justification = ParagraphJustification.CENTER_JUSTIFY;
			hipsTop13_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				hipsTop13_TextDocument.verticalScale = 1;
				hipsTop13_TextDocument.horizontalScale = 1;
				hipsTop13_TextDocument.baselineShift = 0;
				hipsTop13_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// hipsTop13_TextDocument.fauxBold = false;
				// hipsTop13_TextDocument.fauxItalic = false;
				// hipsTop13_TextDocument.allCaps = false;
				// hipsTop13_TextDocument.smallCaps = false;
				// hipsTop13_TextDocument.superscript = false;
				// hipsTop13_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				hipsTop13_TextDocument.leading = 54.0000038146973;
				hipsTop13_TextDocument.autoLeading = true;
			}
			hipsTop13_TextProp.setValue(hipsTop13_TextDocument);
		hipsTop13.property("ADBE Transform Group").property("ADBE Position").setValue([-2216.38153076172,237.5,0]);
		hipsTop13.selected = false;
	var hipsTop12 = textureManNormie_comp.layers.addText("Nose");
		hipsTop12.name = "Hips Top 12";
		hipsTop12.shy = true;
		hipsTop12.guideLayer = true;
		hipsTop12.moveToEnd();
		var hipsTop12_TextProp = hipsTop12.property("ADBE Text Properties").property("ADBE Text Document");
		var hipsTop12_TextDocument = hipsTop12_TextProp.value;
			hipsTop12_TextDocument.font = "ArialMT";
			hipsTop12_TextDocument.fontSize = 45;
			hipsTop12_TextDocument.applyFill = true;
			hipsTop12_TextDocument.fillColor = [0.45490002632141,0.45490002632141,0.45490002632141];
			hipsTop12_TextDocument.applyStroke = false;
			hipsTop12_TextDocument.justification = ParagraphJustification.CENTER_JUSTIFY;
			hipsTop12_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				hipsTop12_TextDocument.verticalScale = 1;
				hipsTop12_TextDocument.horizontalScale = 1;
				hipsTop12_TextDocument.baselineShift = 0;
				hipsTop12_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// hipsTop12_TextDocument.fauxBold = false;
				// hipsTop12_TextDocument.fauxItalic = false;
				// hipsTop12_TextDocument.allCaps = false;
				// hipsTop12_TextDocument.smallCaps = false;
				// hipsTop12_TextDocument.superscript = false;
				// hipsTop12_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				hipsTop12_TextDocument.leading = 54.0000038146973;
				hipsTop12_TextDocument.autoLeading = true;
			}
			hipsTop12_TextProp.setValue(hipsTop12_TextDocument);
		hipsTop12.property("ADBE Transform Group").property("ADBE Position").setValue([-4868.38153076172,817.5,0]);
		hipsTop12.selected = false;
	var hipsTop11 = textureManNormie_comp.layers.addText("Foot");
		hipsTop11.name = "Hips Top 11";
		hipsTop11.shy = true;
		hipsTop11.guideLayer = true;
		hipsTop11.moveToEnd();
		var hipsTop11_TextProp = hipsTop11.property("ADBE Text Properties").property("ADBE Text Document");
		var hipsTop11_TextDocument = hipsTop11_TextProp.value;
			hipsTop11_TextDocument.font = "ArialMT";
			hipsTop11_TextDocument.fontSize = 45;
			hipsTop11_TextDocument.applyFill = true;
			hipsTop11_TextDocument.fillColor = [0.45490002632141,0.45490002632141,0.45490002632141];
			hipsTop11_TextDocument.applyStroke = false;
			hipsTop11_TextDocument.justification = ParagraphJustification.CENTER_JUSTIFY;
			hipsTop11_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				hipsTop11_TextDocument.verticalScale = 1;
				hipsTop11_TextDocument.horizontalScale = 1;
				hipsTop11_TextDocument.baselineShift = 0;
				hipsTop11_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// hipsTop11_TextDocument.fauxBold = false;
				// hipsTop11_TextDocument.fauxItalic = false;
				// hipsTop11_TextDocument.allCaps = false;
				// hipsTop11_TextDocument.smallCaps = false;
				// hipsTop11_TextDocument.superscript = false;
				// hipsTop11_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				hipsTop11_TextDocument.leading = 54.0000038146973;
				hipsTop11_TextDocument.autoLeading = true;
			}
			hipsTop11_TextProp.setValue(hipsTop11_TextDocument);
		hipsTop11.property("ADBE Transform Group").property("ADBE Position").setValue([-2198.38153076172,428.5,0]);
		hipsTop11.selected = false;
	var hipsTop10 = textureManNormie_comp.layers.addText("Hand");
		hipsTop10.name = "Hips Top 10";
		hipsTop10.shy = true;
		hipsTop10.guideLayer = true;
		hipsTop10.moveToEnd();
		var hipsTop10_TextProp = hipsTop10.property("ADBE Text Properties").property("ADBE Text Document");
		var hipsTop10_TextDocument = hipsTop10_TextProp.value;
			hipsTop10_TextDocument.font = "ArialMT";
			hipsTop10_TextDocument.fontSize = 45;
			hipsTop10_TextDocument.applyFill = true;
			hipsTop10_TextDocument.fillColor = [0.45490002632141,0.45490002632141,0.45490002632141];
			hipsTop10_TextDocument.applyStroke = false;
			hipsTop10_TextDocument.justification = ParagraphJustification.CENTER_JUSTIFY;
			hipsTop10_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				hipsTop10_TextDocument.verticalScale = 1;
				hipsTop10_TextDocument.horizontalScale = 1;
				hipsTop10_TextDocument.baselineShift = 0;
				hipsTop10_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// hipsTop10_TextDocument.fauxBold = false;
				// hipsTop10_TextDocument.fauxItalic = false;
				// hipsTop10_TextDocument.allCaps = false;
				// hipsTop10_TextDocument.smallCaps = false;
				// hipsTop10_TextDocument.superscript = false;
				// hipsTop10_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				hipsTop10_TextDocument.leading = 54.0000038146973;
				hipsTop10_TextDocument.autoLeading = true;
			}
			hipsTop10_TextProp.setValue(hipsTop10_TextDocument);
		hipsTop10.property("ADBE Transform Group").property("ADBE Position").setValue([-2222.38153076172,291.5,0]);
		hipsTop10.selected = false;
	var hipsTop9 = textureManNormie_comp.layers.addText("Calf Top");
		hipsTop9.name = "Hips Top 9";
		hipsTop9.shy = true;
		hipsTop9.guideLayer = true;
		hipsTop9.moveToEnd();
		var hipsTop9_TextProp = hipsTop9.property("ADBE Text Properties").property("ADBE Text Document");
		var hipsTop9_TextDocument = hipsTop9_TextProp.value;
			hipsTop9_TextDocument.font = "ArialMT";
			hipsTop9_TextDocument.fontSize = 45;
			hipsTop9_TextDocument.applyFill = true;
			hipsTop9_TextDocument.fillColor = [0.45490002632141,0.45490002632141,0.45490002632141];
			hipsTop9_TextDocument.applyStroke = false;
			hipsTop9_TextDocument.justification = ParagraphJustification.CENTER_JUSTIFY;
			hipsTop9_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				hipsTop9_TextDocument.verticalScale = 1;
				hipsTop9_TextDocument.horizontalScale = 1;
				hipsTop9_TextDocument.baselineShift = 0;
				hipsTop9_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// hipsTop9_TextDocument.fauxBold = false;
				// hipsTop9_TextDocument.fauxItalic = false;
				// hipsTop9_TextDocument.allCaps = false;
				// hipsTop9_TextDocument.smallCaps = false;
				// hipsTop9_TextDocument.superscript = false;
				// hipsTop9_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				hipsTop9_TextDocument.leading = 54.0000038146973;
				hipsTop9_TextDocument.autoLeading = true;
			}
			hipsTop9_TextProp.setValue(hipsTop9_TextDocument);
		hipsTop9.property("ADBE Transform Group").property("ADBE Position").setValue([-2219.88153076172,425.5,0]);
		hipsTop9.selected = false;
	var hipsTop8 = textureManNormie_comp.layers.addText("Thigh Top");
		hipsTop8.name = "Hips Top 8";
		hipsTop8.shy = true;
		hipsTop8.guideLayer = true;
		hipsTop8.moveToEnd();
		var hipsTop8_TextProp = hipsTop8.property("ADBE Text Properties").property("ADBE Text Document");
		var hipsTop8_TextDocument = hipsTop8_TextProp.value;
			hipsTop8_TextDocument.font = "ArialMT";
			hipsTop8_TextDocument.fontSize = 45;
			hipsTop8_TextDocument.applyFill = true;
			hipsTop8_TextDocument.fillColor = [0.45490002632141,0.45490002632141,0.45490002632141];
			hipsTop8_TextDocument.applyStroke = false;
			hipsTop8_TextDocument.justification = ParagraphJustification.CENTER_JUSTIFY;
			hipsTop8_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				hipsTop8_TextDocument.verticalScale = 1;
				hipsTop8_TextDocument.horizontalScale = 1;
				hipsTop8_TextDocument.baselineShift = 0;
				hipsTop8_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// hipsTop8_TextDocument.fauxBold = false;
				// hipsTop8_TextDocument.fauxItalic = false;
				// hipsTop8_TextDocument.allCaps = false;
				// hipsTop8_TextDocument.smallCaps = false;
				// hipsTop8_TextDocument.superscript = false;
				// hipsTop8_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				hipsTop8_TextDocument.leading = 54.0000038146973;
				hipsTop8_TextDocument.autoLeading = true;
			}
			hipsTop8_TextProp.setValue(hipsTop8_TextDocument);
		hipsTop8.property("ADBE Transform Group").property("ADBE Position").setValue([-2219.88153076172,425.5,0]);
		hipsTop8.selected = false;
	var hipsTop7 = textureManNormie_comp.layers.addText("Calf");
		hipsTop7.name = "Hips Top 7";
		hipsTop7.shy = true;
		hipsTop7.guideLayer = true;
		hipsTop7.moveToEnd();
		var hipsTop7_TextProp = hipsTop7.property("ADBE Text Properties").property("ADBE Text Document");
		var hipsTop7_TextDocument = hipsTop7_TextProp.value;
			hipsTop7_TextDocument.font = "ArialMT";
			hipsTop7_TextDocument.fontSize = 45;
			hipsTop7_TextDocument.applyFill = true;
			hipsTop7_TextDocument.fillColor = [0.45490002632141,0.45490002632141,0.45490002632141];
			hipsTop7_TextDocument.applyStroke = false;
			hipsTop7_TextDocument.justification = ParagraphJustification.CENTER_JUSTIFY;
			hipsTop7_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				hipsTop7_TextDocument.verticalScale = 1;
				hipsTop7_TextDocument.horizontalScale = 1;
				hipsTop7_TextDocument.baselineShift = 0;
				hipsTop7_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// hipsTop7_TextDocument.fauxBold = false;
				// hipsTop7_TextDocument.fauxItalic = false;
				// hipsTop7_TextDocument.allCaps = false;
				// hipsTop7_TextDocument.smallCaps = false;
				// hipsTop7_TextDocument.superscript = false;
				// hipsTop7_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				hipsTop7_TextDocument.leading = 54.0000038146973;
				hipsTop7_TextDocument.autoLeading = true;
			}
			hipsTop7_TextProp.setValue(hipsTop7_TextDocument);
		hipsTop7.property("ADBE Transform Group").property("ADBE Position").setValue([-2219.38153076172,425.5,0]);
		hipsTop7.selected = false;
	var hipsTop6 = textureManNormie_comp.layers.addText("Thigh");
		hipsTop6.name = "Hips Top 6";
		hipsTop6.shy = true;
		hipsTop6.guideLayer = true;
		hipsTop6.moveToEnd();
		var hipsTop6_TextProp = hipsTop6.property("ADBE Text Properties").property("ADBE Text Document");
		var hipsTop6_TextDocument = hipsTop6_TextProp.value;
			hipsTop6_TextDocument.font = "ArialMT";
			hipsTop6_TextDocument.fontSize = 45;
			hipsTop6_TextDocument.applyFill = true;
			hipsTop6_TextDocument.fillColor = [0.45490002632141,0.45490002632141,0.45490002632141];
			hipsTop6_TextDocument.applyStroke = false;
			hipsTop6_TextDocument.justification = ParagraphJustification.CENTER_JUSTIFY;
			hipsTop6_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				hipsTop6_TextDocument.verticalScale = 1;
				hipsTop6_TextDocument.horizontalScale = 1;
				hipsTop6_TextDocument.baselineShift = 0;
				hipsTop6_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// hipsTop6_TextDocument.fauxBold = false;
				// hipsTop6_TextDocument.fauxItalic = false;
				// hipsTop6_TextDocument.allCaps = false;
				// hipsTop6_TextDocument.smallCaps = false;
				// hipsTop6_TextDocument.superscript = false;
				// hipsTop6_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				hipsTop6_TextDocument.leading = 54.0000038146973;
				hipsTop6_TextDocument.autoLeading = true;
			}
			hipsTop6_TextProp.setValue(hipsTop6_TextDocument);
		hipsTop6.property("ADBE Transform Group").property("ADBE Position").setValue([-2217.88153076172,425.5,0]);
		hipsTop6.selected = false;
	var hipsTop5 = textureManNormie_comp.layers.addText("Forearm Top");
		hipsTop5.name = "Hips Top 5";
		hipsTop5.shy = true;
		hipsTop5.guideLayer = true;
		hipsTop5.moveToEnd();
		var hipsTop5_TextProp = hipsTop5.property("ADBE Text Properties").property("ADBE Text Document");
		var hipsTop5_TextDocument = hipsTop5_TextProp.value;
			hipsTop5_TextDocument.font = "ArialMT";
			hipsTop5_TextDocument.fontSize = 45;
			hipsTop5_TextDocument.applyFill = true;
			hipsTop5_TextDocument.fillColor = [0.45490002632141,0.45490002632141,0.45490002632141];
			hipsTop5_TextDocument.applyStroke = false;
			hipsTop5_TextDocument.justification = ParagraphJustification.CENTER_JUSTIFY;
			hipsTop5_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				hipsTop5_TextDocument.verticalScale = 1;
				hipsTop5_TextDocument.horizontalScale = 1;
				hipsTop5_TextDocument.baselineShift = 0;
				hipsTop5_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// hipsTop5_TextDocument.fauxBold = false;
				// hipsTop5_TextDocument.fauxItalic = false;
				// hipsTop5_TextDocument.allCaps = false;
				// hipsTop5_TextDocument.smallCaps = false;
				// hipsTop5_TextDocument.superscript = false;
				// hipsTop5_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				hipsTop5_TextDocument.leading = 54.0000038146973;
				hipsTop5_TextDocument.autoLeading = true;
			}
			hipsTop5_TextProp.setValue(hipsTop5_TextDocument);
		hipsTop5.property("ADBE Transform Group").property("ADBE Position").setValue([-2220.38153076172,425.5,0]);
		hipsTop5.selected = false;
	var hipsTop4 = textureManNormie_comp.layers.addText("Upper Arm Top");
		hipsTop4.name = "Hips Top 4";
		hipsTop4.shy = true;
		hipsTop4.guideLayer = true;
		hipsTop4.moveToEnd();
		var hipsTop4_TextProp = hipsTop4.property("ADBE Text Properties").property("ADBE Text Document");
		var hipsTop4_TextDocument = hipsTop4_TextProp.value;
			hipsTop4_TextDocument.font = "ArialMT";
			hipsTop4_TextDocument.fontSize = 45;
			hipsTop4_TextDocument.applyFill = true;
			hipsTop4_TextDocument.fillColor = [0.45490002632141,0.45490002632141,0.45490002632141];
			hipsTop4_TextDocument.applyStroke = false;
			hipsTop4_TextDocument.justification = ParagraphJustification.CENTER_JUSTIFY;
			hipsTop4_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				hipsTop4_TextDocument.verticalScale = 1;
				hipsTop4_TextDocument.horizontalScale = 1;
				hipsTop4_TextDocument.baselineShift = 0;
				hipsTop4_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// hipsTop4_TextDocument.fauxBold = false;
				// hipsTop4_TextDocument.fauxItalic = false;
				// hipsTop4_TextDocument.allCaps = false;
				// hipsTop4_TextDocument.smallCaps = false;
				// hipsTop4_TextDocument.superscript = false;
				// hipsTop4_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				hipsTop4_TextDocument.leading = 54.0000038146973;
				hipsTop4_TextDocument.autoLeading = true;
			}
			hipsTop4_TextProp.setValue(hipsTop4_TextDocument);
		hipsTop4.property("ADBE Transform Group").property("ADBE Position").setValue([-2217.38153076172,425.5,0]);
		hipsTop4.selected = false;
	var hipsTop3 = textureManNormie_comp.layers.addText("Forearm");
		hipsTop3.name = "Hips Top 3";
		hipsTop3.shy = true;
		hipsTop3.guideLayer = true;
		hipsTop3.moveToEnd();
		var hipsTop3_TextProp = hipsTop3.property("ADBE Text Properties").property("ADBE Text Document");
		var hipsTop3_TextDocument = hipsTop3_TextProp.value;
			hipsTop3_TextDocument.font = "ArialMT";
			hipsTop3_TextDocument.fontSize = 45;
			hipsTop3_TextDocument.applyFill = true;
			hipsTop3_TextDocument.fillColor = [0.45490002632141,0.45490002632141,0.45490002632141];
			hipsTop3_TextDocument.applyStroke = false;
			hipsTop3_TextDocument.justification = ParagraphJustification.CENTER_JUSTIFY;
			hipsTop3_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				hipsTop3_TextDocument.verticalScale = 1;
				hipsTop3_TextDocument.horizontalScale = 1;
				hipsTop3_TextDocument.baselineShift = 0;
				hipsTop3_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// hipsTop3_TextDocument.fauxBold = false;
				// hipsTop3_TextDocument.fauxItalic = false;
				// hipsTop3_TextDocument.allCaps = false;
				// hipsTop3_TextDocument.smallCaps = false;
				// hipsTop3_TextDocument.superscript = false;
				// hipsTop3_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				hipsTop3_TextDocument.leading = 54.0000038146973;
				hipsTop3_TextDocument.autoLeading = true;
			}
			hipsTop3_TextProp.setValue(hipsTop3_TextDocument);
		hipsTop3.property("ADBE Transform Group").property("ADBE Position").setValue([-2223.38153076172,425.5,0]);
		hipsTop3.selected = false;
	var hipsTop2 = textureManNormie_comp.layers.addText("Upper Arm");
		hipsTop2.name = "Hips Top 2";
		hipsTop2.shy = true;
		hipsTop2.guideLayer = true;
		hipsTop2.moveToEnd();
		var hipsTop2_TextProp = hipsTop2.property("ADBE Text Properties").property("ADBE Text Document");
		var hipsTop2_TextDocument = hipsTop2_TextProp.value;
			hipsTop2_TextDocument.font = "ArialMT";
			hipsTop2_TextDocument.fontSize = 45;
			hipsTop2_TextDocument.applyFill = true;
			hipsTop2_TextDocument.fillColor = [0.45490002632141,0.45490002632141,0.45490002632141];
			hipsTop2_TextDocument.applyStroke = false;
			hipsTop2_TextDocument.justification = ParagraphJustification.CENTER_JUSTIFY;
			hipsTop2_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				hipsTop2_TextDocument.verticalScale = 1;
				hipsTop2_TextDocument.horizontalScale = 1;
				hipsTop2_TextDocument.baselineShift = 0;
				hipsTop2_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// hipsTop2_TextDocument.fauxBold = false;
				// hipsTop2_TextDocument.fauxItalic = false;
				// hipsTop2_TextDocument.allCaps = false;
				// hipsTop2_TextDocument.smallCaps = false;
				// hipsTop2_TextDocument.superscript = false;
				// hipsTop2_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				hipsTop2_TextDocument.leading = 54.0000038146973;
				hipsTop2_TextDocument.autoLeading = true;
			}
			hipsTop2_TextProp.setValue(hipsTop2_TextDocument);
		hipsTop2.property("ADBE Transform Group").property("ADBE Position").setValue([-2217.38153076172,425.5,0]);
		hipsTop2.selected = false;
	var hipsTop = textureManNormie_comp.layers.addText("Hips Top");
		hipsTop.name = "Hips Top";
		hipsTop.shy = true;
		hipsTop.guideLayer = true;
		hipsTop.moveToEnd();
		var hipsTop_TextProp = hipsTop.property("ADBE Text Properties").property("ADBE Text Document");
		var hipsTop_TextDocument = hipsTop_TextProp.value;
			hipsTop_TextDocument.font = "ArialMT";
			hipsTop_TextDocument.fontSize = 50;
			hipsTop_TextDocument.applyFill = true;
			hipsTop_TextDocument.fillColor = [0.45490002632141,0.45490002632141,0.45490002632141];
			hipsTop_TextDocument.applyStroke = false;
			hipsTop_TextDocument.justification = ParagraphJustification.CENTER_JUSTIFY;
			hipsTop_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				hipsTop_TextDocument.verticalScale = 1;
				hipsTop_TextDocument.horizontalScale = 1;
				hipsTop_TextDocument.baselineShift = 0;
				hipsTop_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// hipsTop_TextDocument.fauxBold = false;
				// hipsTop_TextDocument.fauxItalic = false;
				// hipsTop_TextDocument.allCaps = false;
				// hipsTop_TextDocument.smallCaps = false;
				// hipsTop_TextDocument.superscript = false;
				// hipsTop_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				hipsTop_TextDocument.leading = 60.0000038146973;
				hipsTop_TextDocument.autoLeading = true;
			}
			hipsTop_TextProp.setValue(hipsTop_TextDocument);
		hipsTop.property("ADBE Transform Group").property("ADBE Position").setValue([-2222.38153076172,568.5,0]);
		hipsTop.selected = false;
	var hips5 = textureManNormie_comp.layers.addText("Hips");
		hips5.name = "Hips 2";
		hips5.shy = true;
		hips5.guideLayer = true;
		hips5.moveToEnd();
		var hips5_TextProp = hips5.property("ADBE Text Properties").property("ADBE Text Document");
		var hips5_TextDocument = hips5_TextProp.value;
			hips5_TextDocument.font = "ArialMT";
			hips5_TextDocument.fontSize = 50;
			hips5_TextDocument.applyFill = true;
			hips5_TextDocument.fillColor = [0.45490002632141,0.45490002632141,0.45490002632141];
			hips5_TextDocument.applyStroke = false;
			hips5_TextDocument.justification = ParagraphJustification.CENTER_JUSTIFY;
			hips5_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				hips5_TextDocument.verticalScale = 1;
				hips5_TextDocument.horizontalScale = 1;
				hips5_TextDocument.baselineShift = 0;
				hips5_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// hips5_TextDocument.fauxBold = false;
				// hips5_TextDocument.fauxItalic = false;
				// hips5_TextDocument.allCaps = false;
				// hips5_TextDocument.smallCaps = false;
				// hips5_TextDocument.superscript = false;
				// hips5_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				hips5_TextDocument.leading = 60.0000038146973;
				hips5_TextDocument.autoLeading = true;
			}
			hips5_TextProp.setValue(hips5_TextDocument);
		hips5.property("ADBE Transform Group").property("ADBE Position").setValue([-2226.38153076172,568.5,0]);
		hips5.selected = false;
	var body3 = textureManNormie_comp.layers.addText("Body");
		body3.name = "Body 2";
		body3.shy = true;
		body3.guideLayer = true;
		body3.moveToEnd();
		var body3_TextProp = body3.property("ADBE Text Properties").property("ADBE Text Document");
		var body3_TextDocument = body3_TextProp.value;
			body3_TextDocument.font = "ArialMT";
			body3_TextDocument.fontSize = 50;
			body3_TextDocument.applyFill = true;
			body3_TextDocument.fillColor = [0.45490002632141,0.45490002632141,0.45490002632141];
			body3_TextDocument.applyStroke = false;
			body3_TextDocument.justification = ParagraphJustification.CENTER_JUSTIFY;
			body3_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				body3_TextDocument.verticalScale = 1;
				body3_TextDocument.horizontalScale = 1;
				body3_TextDocument.baselineShift = 0;
				body3_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// body3_TextDocument.fauxBold = false;
				// body3_TextDocument.fauxItalic = false;
				// body3_TextDocument.allCaps = false;
				// body3_TextDocument.smallCaps = false;
				// body3_TextDocument.superscript = false;
				// body3_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				body3_TextDocument.leading = 60.0000038146973;
				body3_TextDocument.autoLeading = true;
			}
			body3_TextProp.setValue(body3_TextDocument);
		body3.property("ADBE Transform Group").property("ADBE Position").setValue([-2223.38153076172,518.5,0]);
		body3.selected = false;
	var bodyTop4 = textureManNormie_comp.layers.addText("Body Top");
		bodyTop4.name = "Body Top 2";
		bodyTop4.shy = true;
		bodyTop4.guideLayer = true;
		bodyTop4.moveToEnd();
		var bodyTop4_TextProp = bodyTop4.property("ADBE Text Properties").property("ADBE Text Document");
		var bodyTop4_TextDocument = bodyTop4_TextProp.value;
			bodyTop4_TextDocument.font = "ArialMT";
			bodyTop4_TextDocument.fontSize = 50;
			bodyTop4_TextDocument.applyFill = true;
			bodyTop4_TextDocument.fillColor = [0.45490002632141,0.45490002632141,0.45490002632141];
			bodyTop4_TextDocument.applyStroke = false;
			bodyTop4_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			bodyTop4_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				bodyTop4_TextDocument.verticalScale = 1;
				bodyTop4_TextDocument.horizontalScale = 1;
				bodyTop4_TextDocument.baselineShift = 0;
				bodyTop4_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// bodyTop4_TextDocument.fauxBold = false;
				// bodyTop4_TextDocument.fauxItalic = false;
				// bodyTop4_TextDocument.allCaps = false;
				// bodyTop4_TextDocument.smallCaps = false;
				// bodyTop4_TextDocument.superscript = false;
				// bodyTop4_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				bodyTop4_TextDocument.leading = 60.0000038146973;
				bodyTop4_TextDocument.autoLeading = true;
			}
			bodyTop4_TextProp.setValue(bodyTop4_TextDocument);
		bodyTop4.property("ADBE Transform Group").property("ADBE Position").setValue([-4981.38153076172,1149.5,0]);
		bodyTop4.selected = false;
	var bodyBack1 = textureManNormie_comp.layers.addText("Body Back");
		bodyBack1.name = "Body Back";
		bodyBack1.shy = true;
		bodyBack1.guideLayer = true;
		bodyBack1.moveToEnd();
		var bodyBack1_TextProp = bodyBack1.property("ADBE Text Properties").property("ADBE Text Document");
		var bodyBack1_TextDocument = bodyBack1_TextProp.value;
			bodyBack1_TextDocument.font = "ArialMT";
			bodyBack1_TextDocument.fontSize = 50;
			bodyBack1_TextDocument.applyFill = true;
			bodyBack1_TextDocument.fillColor = [0.45490002632141,0.45490002632141,0.45490002632141];
			bodyBack1_TextDocument.applyStroke = false;
			bodyBack1_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			bodyBack1_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				bodyBack1_TextDocument.verticalScale = 1;
				bodyBack1_TextDocument.horizontalScale = 1;
				bodyBack1_TextDocument.baselineShift = 0;
				bodyBack1_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// bodyBack1_TextDocument.fauxBold = false;
				// bodyBack1_TextDocument.fauxItalic = false;
				// bodyBack1_TextDocument.allCaps = false;
				// bodyBack1_TextDocument.smallCaps = false;
				// bodyBack1_TextDocument.superscript = false;
				// bodyBack1_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				bodyBack1_TextDocument.leading = 60.0000038146973;
				bodyBack1_TextDocument.autoLeading = true;
			}
			bodyBack1_TextProp.setValue(bodyBack1_TextDocument);
		bodyBack1.property("ADBE Transform Group").property("ADBE Position").setValue([-2337.38153076172,520.5,0]);
		bodyBack1.selected = false;
	// Add Shape Layer "Shape Layer 92", varName "shapeLayer92";
	var shapeLayer92 = textureManNormie_comp.layers.addShape();
		shapeLayer92.name = "Shape Layer 92";
		shapeLayer92.label = 10;
		shapeLayer92.shy = true;
		shapeLayer92.guideLayer = true;
		shapeLayer92.moveToEnd();
		shapeLayer92.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		shapeLayer92.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		shapeLayer92.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		shapeLayer92.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		shapeLayer92.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([400,500]);
		shapeLayer92.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(20);
		shapeLayer92.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		shapeLayer92.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		shapeLayer92.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		shapeLayer92.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(6);
		shapeLayer92.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		shapeLayer92.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		shapeLayer92.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.92156862745098,0.92156862745098,0.92156862745098,1]);
		shapeLayer92.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([-2217,160.5]);
		shapeLayer92.property("ADBE Transform Group").property("ADBE Position").setValue([3179,1672.5,0]);
		shapeLayer92.selected = false;
	// Add Shape Layer "Shape Layer 85", varName "shapeLayer85";
	var shapeLayer85 = textureManNormie_comp.layers.addShape();
		shapeLayer85.name = "Shape Layer 85";
		shapeLayer85.label = 9;
		shapeLayer85.shy = true;
		shapeLayer85.guideLayer = true;
		shapeLayer85.moveToEnd();
		shapeLayer85.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		shapeLayer85.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		shapeLayer85.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		shapeLayer85.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		shapeLayer85.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([400,600]);
		shapeLayer85.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(20);
		shapeLayer85.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		shapeLayer85.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		shapeLayer85.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		shapeLayer85.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(6);
		shapeLayer85.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		shapeLayer85.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		shapeLayer85.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.92156862745098,0.92156862745098,0.92156862745098,1]);
		shapeLayer85.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([-2217,160.5]);
		shapeLayer85.property("ADBE Transform Group").property("ADBE Position").setValue([5433.5,1102.5,0]);
		shapeLayer85.selected = false;
	// Add Shape Layer "Shape Layer 87", varName "shapeLayer87";
	var shapeLayer87 = textureManNormie_comp.layers.addShape();
		shapeLayer87.name = "Shape Layer 87";
		shapeLayer87.label = 2;
		shapeLayer87.shy = true;
		shapeLayer87.guideLayer = true;
		shapeLayer87.moveToEnd();
		shapeLayer87.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		shapeLayer87.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		shapeLayer87.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		shapeLayer87.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		shapeLayer87.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([400,600]);
		shapeLayer87.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(20);
		shapeLayer87.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		shapeLayer87.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		shapeLayer87.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		shapeLayer87.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(6);
		shapeLayer87.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		shapeLayer87.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		shapeLayer87.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.92156862745098,0.92156862745098,0.92156862745098,1]);
		shapeLayer87.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([-2217,160.5]);
		shapeLayer87.property("ADBE Transform Group").property("ADBE Position").setValue([5013.5,1102.5,0]);
		shapeLayer87.selected = false;
	// Add Shape Layer "Shape Layer 86", varName "shapeLayer86";
	var shapeLayer86 = textureManNormie_comp.layers.addShape();
		shapeLayer86.name = "Shape Layer 86";
		shapeLayer86.label = 10;
		shapeLayer86.shy = true;
		shapeLayer86.guideLayer = true;
		shapeLayer86.moveToEnd();
		shapeLayer86.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		shapeLayer86.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		shapeLayer86.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		shapeLayer86.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		shapeLayer86.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([400,600]);
		shapeLayer86.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(20);
		shapeLayer86.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		shapeLayer86.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		shapeLayer86.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		shapeLayer86.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(6);
		shapeLayer86.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		shapeLayer86.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		shapeLayer86.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.92156862745098,0.92156862745098,0.92156862745098,1]);
		shapeLayer86.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([-2217,160.5]);
		shapeLayer86.property("ADBE Transform Group").property("ADBE Position").setValue([4171.5,1102.5,0]);
		shapeLayer86.selected = false;
	// Add Shape Layer "Shape Layer 84", varName "shapeLayer84";
	var shapeLayer84 = textureManNormie_comp.layers.addShape();
		shapeLayer84.name = "Shape Layer 84";
		shapeLayer84.label = 6;
		shapeLayer84.shy = true;
		shapeLayer84.guideLayer = true;
		shapeLayer84.moveToEnd();
		shapeLayer84.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		shapeLayer84.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		shapeLayer84.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		shapeLayer84.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		shapeLayer84.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([400,600]);
		shapeLayer84.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(20);
		shapeLayer84.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		shapeLayer84.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		shapeLayer84.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		shapeLayer84.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(6);
		shapeLayer84.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		shapeLayer84.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		shapeLayer84.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.92156862745098,0.92156862745098,0.92156862745098,1]);
		shapeLayer84.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([-2217,160.5]);
		shapeLayer84.property("ADBE Transform Group").property("ADBE Position").setValue([4593,1102.5,0]);
		shapeLayer84.selected = false;
	// Add Shape Layer "Shape Layer 74", varName "shapeLayer74";
	var shapeLayer74 = textureManNormie_comp.layers.addShape();
		shapeLayer74.name = "Shape Layer 74";
		shapeLayer74.label = 15;
		shapeLayer74.shy = true;
		shapeLayer74.guideLayer = true;
		shapeLayer74.moveToEnd();
		shapeLayer74.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		shapeLayer74.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		shapeLayer74.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		shapeLayer74.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		shapeLayer74.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([400,400]);
		shapeLayer74.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(20);
		shapeLayer74.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		shapeLayer74.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		shapeLayer74.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		shapeLayer74.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(6);
		shapeLayer74.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		shapeLayer74.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		shapeLayer74.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.92156862745098,0.92156862745098,0.92156862745098,1]);
		shapeLayer74.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([-4869,692.5]);
		shapeLayer74.property("ADBE Transform Group").property("ADBE Position").setValue([7147,1090.5,0]);
		shapeLayer74.selected = false;
	// Add Shape Layer "Shape Layer 75", varName "shapeLayer75";
	var shapeLayer75 = textureManNormie_comp.layers.addShape();
		shapeLayer75.name = "Shape Layer 75";
		shapeLayer75.label = 14;
		shapeLayer75.shy = true;
		shapeLayer75.guideLayer = true;
		shapeLayer75.moveToEnd();
		shapeLayer75.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		shapeLayer75.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		shapeLayer75.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		shapeLayer75.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		shapeLayer75.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([400,400]);
		shapeLayer75.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(20);
		shapeLayer75.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		shapeLayer75.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		shapeLayer75.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		shapeLayer75.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(6);
		shapeLayer75.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		shapeLayer75.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		shapeLayer75.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.92156862745098,0.92156862745098,0.92156862745098,1]);
		shapeLayer75.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([-4869,692.5]);
		shapeLayer75.property("ADBE Transform Group").property("ADBE Position").setValue([7569,1090.5,0]);
		shapeLayer75.selected = false;
	// Add Shape Layer "Shape Layer 72", varName "shapeLayer72";
	var shapeLayer72 = textureManNormie_comp.layers.addShape();
		shapeLayer72.name = "Shape Layer 72";
		shapeLayer72.label = 6;
		shapeLayer72.shy = true;
		shapeLayer72.guideLayer = true;
		shapeLayer72.moveToEnd();
		shapeLayer72.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		shapeLayer72.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		shapeLayer72.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		shapeLayer72.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		shapeLayer72.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([400,500]);
		shapeLayer72.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(20);
		shapeLayer72.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		shapeLayer72.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		shapeLayer72.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		shapeLayer72.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(6);
		shapeLayer72.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		shapeLayer72.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		shapeLayer72.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.92156862745098,0.92156862745098,0.92156862745098,1]);
		shapeLayer72.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([-2218,-1108.5]);
		shapeLayer72.property("ADBE Transform Group").property("ADBE Position").setValue([2757.5,2941.5,0]);
		shapeLayer72.selected = false;
	// Add Shape Layer "Shape Layer 64", varName "shapeLayer64";
	var shapeLayer64 = textureManNormie_comp.layers.addShape();
		shapeLayer64.name = "Shape Layer 64";
		shapeLayer64.label = 14;
		shapeLayer64.shy = true;
		shapeLayer64.guideLayer = true;
		shapeLayer64.moveToEnd();
		shapeLayer64.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		shapeLayer64.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		shapeLayer64.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		shapeLayer64.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		shapeLayer64.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([300,200]);
		shapeLayer64.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(20);
		shapeLayer64.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		shapeLayer64.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		shapeLayer64.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		shapeLayer64.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(6);
		shapeLayer64.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		shapeLayer64.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		shapeLayer64.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.92156862745098,0.92156862745098,0.92156862745098,1]);
		shapeLayer64.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([-2217,160.5]);
		shapeLayer64.property("ADBE Transform Group").property("ADBE Position").setValue([5804,1898.5,0]);
		shapeLayer64.selected = false;
	// Add Shape Layer "Shape Layer 76", varName "shapeLayer76";
	var shapeLayer76 = textureManNormie_comp.layers.addShape();
		shapeLayer76.name = "Shape Layer 76";
		shapeLayer76.label = 13;
		shapeLayer76.shy = true;
		shapeLayer76.guideLayer = true;
		shapeLayer76.moveToEnd();
		shapeLayer76.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		shapeLayer76.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		shapeLayer76.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		shapeLayer76.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		shapeLayer76.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([250,400]);
		shapeLayer76.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(20);
		shapeLayer76.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		shapeLayer76.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		shapeLayer76.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		shapeLayer76.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(6);
		shapeLayer76.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		shapeLayer76.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		shapeLayer76.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.92156862745098,0.92156862745098,0.92156862745098,1]);
		shapeLayer76.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([-4881,791.5]);
		shapeLayer76.property("ADBE Transform Group").property("ADBE Position").setValue([5076,991.5,0]);
		shapeLayer76.selected = false;
	// Add Shape Layer "Shape Layer 68", varName "shapeLayer68";
	var shapeLayer68 = textureManNormie_comp.layers.addShape();
		shapeLayer68.name = "Shape Layer 68";
		shapeLayer68.label = 7;
		shapeLayer68.shy = true;
		shapeLayer68.guideLayer = true;
		shapeLayer68.moveToEnd();
		shapeLayer68.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		shapeLayer68.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		shapeLayer68.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		shapeLayer68.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		shapeLayer68.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([100,70]);
		shapeLayer68.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(20);
		shapeLayer68.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		shapeLayer68.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		shapeLayer68.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		shapeLayer68.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(6);
		shapeLayer68.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		shapeLayer68.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		shapeLayer68.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.92156862745098,0.92156862745098,0.92156862745098,1]);
		shapeLayer68.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([-2211,718.5]);
		shapeLayer68.property("ADBE Transform Group").property("ADBE Position").setValue([4613.75,1333,0]);
		shapeLayer68.selected = false;
	// Add Shape Layer "Shape Layer 67", varName "shapeLayer67";
	var shapeLayer67 = textureManNormie_comp.layers.addShape();
		shapeLayer67.name = "Shape Layer 67";
		shapeLayer67.label = 13;
		shapeLayer67.shy = true;
		shapeLayer67.guideLayer = true;
		shapeLayer67.moveToEnd();
		shapeLayer67.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		shapeLayer67.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		shapeLayer67.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		shapeLayer67.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		shapeLayer67.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(20);
		shapeLayer67.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		shapeLayer67.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		shapeLayer67.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		shapeLayer67.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(6);
		shapeLayer67.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		shapeLayer67.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		shapeLayer67.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.92156862745098,0.92156862745098,0.92156862745098,1]);
		shapeLayer67.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([-2208,717]);
		shapeLayer67.property("ADBE Transform Group").property("ADBE Position").setValue([4999.75,1335,0]);
		shapeLayer67.selected = false;
	// Add Shape Layer "Shape Layer 66", varName "shapeLayer66";
	var shapeLayer66 = textureManNormie_comp.layers.addShape();
		shapeLayer66.name = "Shape Layer 66";
		shapeLayer66.label = 6;
		shapeLayer66.shy = true;
		shapeLayer66.guideLayer = true;
		shapeLayer66.moveToEnd();
		shapeLayer66.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		shapeLayer66.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		shapeLayer66.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		shapeLayer66.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		shapeLayer66.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(20);
		shapeLayer66.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		shapeLayer66.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		shapeLayer66.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		shapeLayer66.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(6);
		shapeLayer66.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		shapeLayer66.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		shapeLayer66.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.92156862745098,0.92156862745098,0.92156862745098,1]);
		shapeLayer66.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([-2208,717]);
		shapeLayer66.property("ADBE Transform Group").property("ADBE Position").setValue([4822.25,1335,0]);
		shapeLayer66.selected = false;
	// Add Shape Layer "Shape Layer 65", varName "shapeLayer65";
	var shapeLayer65 = textureManNormie_comp.layers.addShape();
		shapeLayer65.name = "Shape Layer 65";
		shapeLayer65.label = 7;
		shapeLayer65.shy = true;
		shapeLayer65.guideLayer = true;
		shapeLayer65.moveToEnd();
		shapeLayer65.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		shapeLayer65.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		shapeLayer65.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		shapeLayer65.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		shapeLayer65.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([150,60]);
		shapeLayer65.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(20);
		shapeLayer65.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		shapeLayer65.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		shapeLayer65.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		shapeLayer65.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(6);
		shapeLayer65.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		shapeLayer65.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		shapeLayer65.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.92156862745098,0.92156862745098,0.92156862745098,1]);
		shapeLayer65.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([760,824]);
		shapeLayer65.property("ADBE Transform Group").property("ADBE Position").setValue([1454.75,1227,0]);
		shapeLayer65.selected = false;
	// Add Shape Layer "Shape Layer 71", varName "shapeLayer71";
	var shapeLayer71 = textureManNormie_comp.layers.addShape();
		shapeLayer71.name = "Shape Layer 71";
		shapeLayer71.label = 5;
		shapeLayer71.shy = true;
		shapeLayer71.guideLayer = true;
		shapeLayer71.moveToEnd();
		shapeLayer71.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		shapeLayer71.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		shapeLayer71.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		shapeLayer71.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		shapeLayer71.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([500,500]);
		shapeLayer71.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(20);
		shapeLayer71.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		shapeLayer71.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		shapeLayer71.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		shapeLayer71.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(6);
		shapeLayer71.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		shapeLayer71.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		shapeLayer71.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.92156862745098,0.92156862745098,0.92156862745098,1]);
		shapeLayer71.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([-4869,692.5]);
		shapeLayer71.property("ADBE Transform Group").property("ADBE Position").setValue([8039,1140.5,0]);
		shapeLayer71.selected = false;
	// Add Shape Layer "Shape Layer 70", varName "shapeLayer70";
	var shapeLayer70 = textureManNormie_comp.layers.addShape();
		shapeLayer70.name = "Shape Layer 70";
		shapeLayer70.label = 3;
		shapeLayer70.shy = true;
		shapeLayer70.guideLayer = true;
		shapeLayer70.moveToEnd();
		shapeLayer70.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		shapeLayer70.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		shapeLayer70.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		shapeLayer70.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		shapeLayer70.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([300,300]);
		shapeLayer70.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(20);
		shapeLayer70.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		shapeLayer70.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		shapeLayer70.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		shapeLayer70.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(6);
		shapeLayer70.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		shapeLayer70.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		shapeLayer70.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.92156862745098,0.92156862745098,0.92156862745098,1]);
		shapeLayer70.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([-4869,692.5]);
		shapeLayer70.property("ADBE Transform Group").property("ADBE Position").setValue([8456,1098.5,0]);
		shapeLayer70.selected = false;
	// Add Shape Layer "Shape Layer 73", varName "shapeLayer73";
	var shapeLayer73 = textureManNormie_comp.layers.addShape();
		shapeLayer73.name = "Shape Layer 73";
		shapeLayer73.label = 11;
		shapeLayer73.shy = true;
		shapeLayer73.guideLayer = true;
		shapeLayer73.moveToEnd();
		shapeLayer73.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		shapeLayer73.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		shapeLayer73.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		shapeLayer73.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		shapeLayer73.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([450,450]);
		shapeLayer73.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(20);
		shapeLayer73.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		shapeLayer73.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		shapeLayer73.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		shapeLayer73.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(6);
		shapeLayer73.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		shapeLayer73.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		shapeLayer73.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.92156862745098,0.92156862745098,0.92156862745098,1]);
		shapeLayer73.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([-2218,-1108.5]);
		shapeLayer73.property("ADBE Transform Group").property("ADBE Position").setValue([4049,2916.5,0]);
		shapeLayer73.selected = false;
	// Add Shape Layer "Shape Layer 91", varName "shapeLayer91";
	var shapeLayer91 = textureManNormie_comp.layers.addShape();
		shapeLayer91.name = "Shape Layer 91";
		shapeLayer91.shy = true;
		shapeLayer91.guideLayer = true;
		shapeLayer91.moveToEnd();
		shapeLayer91.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		shapeLayer91.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		shapeLayer91.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		shapeLayer91.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		shapeLayer91.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([800,800]);
		shapeLayer91.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(20);
		shapeLayer91.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		shapeLayer91.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		shapeLayer91.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		shapeLayer91.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(6);
		shapeLayer91.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		shapeLayer91.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		shapeLayer91.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.92156862745098,0.92156862745098,0.92156862745098,1]);
		shapeLayer91.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([-2217,160.5]);
		shapeLayer91.property("ADBE Transform Group").property("ADBE Position").setValue([2687,383.5,0]);
		shapeLayer91.selected = false;
	// Add Shape Layer "Shape Layer 88", varName "shapeLayer88";
	var shapeLayer88 = textureManNormie_comp.layers.addShape();
		shapeLayer88.name = "Shape Layer 88";
		shapeLayer88.label = 14;
		shapeLayer88.shy = true;
		shapeLayer88.guideLayer = true;
		shapeLayer88.moveToEnd();
		shapeLayer88.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		shapeLayer88.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		shapeLayer88.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		shapeLayer88.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		shapeLayer88.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([700,900]);
		shapeLayer88.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(20);
		shapeLayer88.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		shapeLayer88.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		shapeLayer88.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		shapeLayer88.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(6);
		shapeLayer88.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		shapeLayer88.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		shapeLayer88.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.92156862745098,0.92156862745098,0.92156862745098,1]);
		shapeLayer88.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([-2217,160.5]);
		shapeLayer88.property("ADBE Transform Group").property("ADBE Position").setValue([5808,335.5,0]);
		shapeLayer88.selected = false;
	// Add Shape Layer "Shape Layer 79", varName "shapeLayer79";
	var shapeLayer79 = textureManNormie_comp.layers.addShape();
		shapeLayer79.name = "Shape Layer 79";
		shapeLayer79.label = 1;
		shapeLayer79.shy = true;
		shapeLayer79.guideLayer = true;
		shapeLayer79.moveToEnd();
		shapeLayer79.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		shapeLayer79.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		shapeLayer79.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		shapeLayer79.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		shapeLayer79.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([400,600]);
		shapeLayer79.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(20);
		shapeLayer79.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		shapeLayer79.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		shapeLayer79.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		shapeLayer79.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(6);
		shapeLayer79.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		shapeLayer79.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		shapeLayer79.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.92156862745098,0.92156862745098,0.92156862745098,1]);
		shapeLayer79.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([-2217,160.5]);
		shapeLayer79.property("ADBE Transform Group").property("ADBE Position").setValue([3750,1102.5,0]);
		shapeLayer79.selected = false;
	// Add Shape Layer "Shape Layer 81", varName "shapeLayer81";
	var shapeLayer81 = textureManNormie_comp.layers.addShape();
		shapeLayer81.name = "Shape Layer 81";
		shapeLayer81.label = 2;
		shapeLayer81.shy = true;
		shapeLayer81.guideLayer = true;
		shapeLayer81.moveToEnd();
		shapeLayer81.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		shapeLayer81.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		shapeLayer81.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		shapeLayer81.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		shapeLayer81.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([400,600]);
		shapeLayer81.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(20);
		shapeLayer81.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		shapeLayer81.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		shapeLayer81.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		shapeLayer81.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(6);
		shapeLayer81.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		shapeLayer81.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		shapeLayer81.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.92156862745098,0.92156862745098,0.92156862745098,1]);
		shapeLayer81.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([-2217,160.5]);
		shapeLayer81.property("ADBE Transform Group").property("ADBE Position").setValue([3329,1102.5,0]);
		shapeLayer81.selected = false;
	// Add Shape Layer "Shape Layer 83", varName "shapeLayer83";
	var shapeLayer83 = textureManNormie_comp.layers.addShape();
		shapeLayer83.name = "Shape Layer 83";
		shapeLayer83.label = 13;
		shapeLayer83.shy = true;
		shapeLayer83.guideLayer = true;
		shapeLayer83.moveToEnd();
		shapeLayer83.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		shapeLayer83.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		shapeLayer83.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		shapeLayer83.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		shapeLayer83.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([450,320]);
		shapeLayer83.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(20);
		shapeLayer83.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		shapeLayer83.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		shapeLayer83.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		shapeLayer83.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(6);
		shapeLayer83.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		shapeLayer83.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		shapeLayer83.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.92156862745098,0.92156862745098,0.92156862745098,1]);
		shapeLayer83.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([-2195,286.5]);
		shapeLayer83.property("ADBE Transform Group").property("ADBE Position").setValue([5854,1175.5,0]);
		shapeLayer83.selected = false;
	// Add Shape Layer "Shape Layer 78", varName "shapeLayer78";
	var shapeLayer78 = textureManNormie_comp.layers.addShape();
		shapeLayer78.name = "Shape Layer 78";
		shapeLayer78.label = 16;
		shapeLayer78.shy = true;
		shapeLayer78.guideLayer = true;
		shapeLayer78.moveToEnd();
		shapeLayer78.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		shapeLayer78.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		shapeLayer78.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		shapeLayer78.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		shapeLayer78.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([450,320]);
		shapeLayer78.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(20);
		shapeLayer78.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		shapeLayer78.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		shapeLayer78.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		shapeLayer78.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(6);
		shapeLayer78.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		shapeLayer78.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		shapeLayer78.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.92156862745098,0.92156862745098,0.92156862745098,1]);
		shapeLayer78.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([-2217,160.5]);
		shapeLayer78.property("ADBE Transform Group").property("ADBE Position").setValue([5876,962.5,0]);
		shapeLayer78.selected = false;
	// Add Shape Layer "Shape Layer 80", varName "shapeLayer80";
	var shapeLayer80 = textureManNormie_comp.layers.addShape();
		shapeLayer80.name = "Shape Layer 80";
		shapeLayer80.label = 1;
		shapeLayer80.shy = true;
		shapeLayer80.guideLayer = true;
		shapeLayer80.moveToEnd();
		shapeLayer80.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		shapeLayer80.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		shapeLayer80.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		shapeLayer80.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		shapeLayer80.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([400,600]);
		shapeLayer80.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(20);
		shapeLayer80.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		shapeLayer80.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		shapeLayer80.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		shapeLayer80.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(6);
		shapeLayer80.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		shapeLayer80.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		shapeLayer80.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.92156862745098,0.92156862745098,0.92156862745098,1]);
		shapeLayer80.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([-2217,160.5]);
		shapeLayer80.property("ADBE Transform Group").property("ADBE Position").setValue([2907,1102.5,0]);
		shapeLayer80.selected = false;
	// Add Shape Layer "Shape Layer 82", varName "shapeLayer82";
	var shapeLayer82 = textureManNormie_comp.layers.addShape();
		shapeLayer82.name = "Shape Layer 82";
		shapeLayer82.label = 7;
		shapeLayer82.shy = true;
		shapeLayer82.guideLayer = true;
		shapeLayer82.moveToEnd();
		shapeLayer82.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		shapeLayer82.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		shapeLayer82.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		shapeLayer82.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		shapeLayer82.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([400,600]);
		shapeLayer82.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(20);
		shapeLayer82.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		shapeLayer82.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		shapeLayer82.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		shapeLayer82.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(6);
		shapeLayer82.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		shapeLayer82.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		shapeLayer82.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.92156862745098,0.92156862745098,0.92156862745098,1]);
		shapeLayer82.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([-2217,160.5]);
		shapeLayer82.property("ADBE Transform Group").property("ADBE Position").setValue([2487,1102.5,0]);
		shapeLayer82.selected = false;
	// Add Shape Layer "Shape Layer 89", varName "shapeLayer89";
	var shapeLayer89 = textureManNormie_comp.layers.addShape();
		shapeLayer89.name = "Shape Layer 89";
		shapeLayer89.label = 3;
		shapeLayer89.shy = true;
		shapeLayer89.guideLayer = true;
		shapeLayer89.moveToEnd();
		shapeLayer89.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		shapeLayer89.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		shapeLayer89.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		shapeLayer89.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		shapeLayer89.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([700,900]);
		shapeLayer89.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(20);
		shapeLayer89.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		shapeLayer89.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		shapeLayer89.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		shapeLayer89.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(6);
		shapeLayer89.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		shapeLayer89.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		shapeLayer89.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.92156862745098,0.92156862745098,0.92156862745098,1]);
		shapeLayer89.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([-2217,160.5]);
		shapeLayer89.property("ADBE Transform Group").property("ADBE Position").setValue([5092,335.5,0]);
		shapeLayer89.selected = false;
	// Add Shape Layer "Shape Layer 77", varName "shapeLayer77";
	var shapeLayer77 = textureManNormie_comp.layers.addShape();
		shapeLayer77.name = "Shape Layer 77";
		shapeLayer77.label = 15;
		shapeLayer77.shy = true;
		shapeLayer77.guideLayer = true;
		shapeLayer77.moveToEnd();
		shapeLayer77.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		shapeLayer77.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		shapeLayer77.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		shapeLayer77.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		shapeLayer77.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([800,800]);
		shapeLayer77.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(20);
		shapeLayer77.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		shapeLayer77.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		shapeLayer77.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		shapeLayer77.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(6);
		shapeLayer77.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		shapeLayer77.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		shapeLayer77.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.92156862745098,0.92156862745098,0.92156862745098,1]);
		shapeLayer77.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([-4881,791.5]);
		shapeLayer77.property("ADBE Transform Group").property("ADBE Position").setValue([6171,-245.5,0]);
		shapeLayer77.selected = false;
	// Add Shape Layer "Shape Layer 90", varName "shapeLayer90";
	var shapeLayer90 = textureManNormie_comp.layers.addShape();
		shapeLayer90.name = "Shape Layer 90";
		shapeLayer90.label = 11;
		shapeLayer90.shy = true;
		shapeLayer90.guideLayer = true;
		shapeLayer90.moveToEnd();
		shapeLayer90.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		shapeLayer90.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		shapeLayer90.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		shapeLayer90.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		shapeLayer90.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([800,800]);
		shapeLayer90.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(20);
		shapeLayer90.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		shapeLayer90.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		shapeLayer90.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		shapeLayer90.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(6);
		shapeLayer90.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		shapeLayer90.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		shapeLayer90.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.92156862745098,0.92156862745098,0.92156862745098,1]);
		shapeLayer90.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([-2217,160.5]);
		shapeLayer90.property("ADBE Transform Group").property("ADBE Position").setValue([4325,385.5,0]);
		shapeLayer90.selected = false;
	// Add Shape Layer "Shape Layer 69", varName "shapeLayer69";
	var shapeLayer69 = textureManNormie_comp.layers.addShape();
		shapeLayer69.name = "Shape Layer 69";
		shapeLayer69.label = 12;
		shapeLayer69.shy = true;
		shapeLayer69.guideLayer = true;
		shapeLayer69.moveToEnd();
		shapeLayer69.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		shapeLayer69.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		shapeLayer69.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		shapeLayer69.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		shapeLayer69.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([400,400]);
		shapeLayer69.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(20);
		shapeLayer69.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		shapeLayer69.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		shapeLayer69.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		shapeLayer69.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(6);
		shapeLayer69.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		shapeLayer69.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		shapeLayer69.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.92156862745098,0.92156862745098,0.92156862745098,1]);
		shapeLayer69.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([-2217,160.5]);
		shapeLayer69.property("ADBE Transform Group").property("ADBE Position").setValue([3600,1622.5,0]);
		shapeLayer69.selected = false;
	// Apply parents
		nose.setParentWithJump(shapeLayer70);
		calf2.setParentWithJump(shapeLayer84);
		thigh.setParentWithJump(shapeLayer86);
		tigh2.setParentWithJump(shapeLayer86);
		calf3.setParentWithJump(shapeLayer84);
		calf4.setParentWithJump(shapeLayer84);
		glasses1.setParentWithJump(shapeLayer64);
		neck2.setParentWithJump(shapeLayer76);
		eyelash2.setParentWithJump(shapeLayer68);
		eye2.setParentWithJump(shapeLayer67);
		eye.setParentWithJump(shapeLayer66);
		eyebrow.setParentWithJump(shapeLayer65);
		shapeLayer27.setParentWithJump(shapeLayer73);
		shapeLayer25.setParentWithJump(shapeLayer83);
		shapeLayer116.setParentWithJump(shapeLayer83);
		shapeLayer24.setParentWithJump(shapeLayer83);
		shapeLayer7.setParentWithJump(shapeLayer83);
		feet1.setParentWithJump(shapeLayer83);
		hand2.setParentWithJump(shapeLayer78);
		hand3.setParentWithJump(shapeLayer78);
		forearm2.setParentWithJump(shapeLayer80);
		forearm3.setParentWithJump(shapeLayer80);
		shapeLayer46.setParentWithJump(shapeLayer82);
		upperArm2.setParentWithJump(shapeLayer82);
		hips3.setParentWithJump(shapeLayer89);
		hips4.setParentWithJump(shapeLayer89);
		body.setParentWithJump(shapeLayer90);
		bodyTop3.setParentWithJump(shapeLayer90);
		hipsTop25.setParentWithJump(shapeLayer67);
		hipsTop24.setParentWithJump(shapeLayer66);
		hipsTop23.setParentWithJump(shapeLayer68);
		hipsTop22.setParentWithJump(shapeLayer65);
		hipsTop21.setParentWithJump(shapeLayer76);
		hipsTop20.setParentWithJump(shapeLayer72);
		hipsTop19.setParentWithJump(shapeLayer92);
		hipsTop18.setParentWithJump(shapeLayer69);
		hipsTop17.setParentWithJump(shapeLayer73);
		hipsTop16.setParentWithJump(shapeLayer74);
		hipsTop15.setParentWithJump(shapeLayer75);
		hipsTop14.setParentWithJump(shapeLayer71);
		hipsTop13.setParentWithJump(shapeLayer64);
		hipsTop12.setParentWithJump(shapeLayer70);
		hipsTop11.setParentWithJump(shapeLayer83);
		hipsTop10.setParentWithJump(shapeLayer78);
		hipsTop9.setParentWithJump(shapeLayer85);
		hipsTop8.setParentWithJump(shapeLayer87);
		hipsTop7.setParentWithJump(shapeLayer84);
		hipsTop6.setParentWithJump(shapeLayer86);
		hipsTop5.setParentWithJump(shapeLayer79);
		hipsTop4.setParentWithJump(shapeLayer81);
		hipsTop3.setParentWithJump(shapeLayer80);
		hipsTop2.setParentWithJump(shapeLayer82);
		hipsTop.setParentWithJump(shapeLayer88);
		hips5.setParentWithJump(shapeLayer89);
		body3.setParentWithJump(shapeLayer90);
		bodyTop4.setParentWithJump(shapeLayer77);
		bodyBack1.setParentWithJump(shapeLayer91);

	// Lock Layers
		hipsTop25.locked = true;
		hipsTop24.locked = true;
		hipsTop23.locked = true;
		hipsTop22.locked = true;
		hipsTop21.locked = true;
		hipsTop20.locked = true;
		hipsTop19.locked = true;
		hipsTop18.locked = true;
		hipsTop17.locked = true;
		hipsTop16.locked = true;
		hipsTop15.locked = true;
		hipsTop14.locked = true;
		hipsTop13.locked = true;
		hipsTop12.locked = true;
		hipsTop11.locked = true;
		hipsTop10.locked = true;
		hipsTop9.locked = true;
		hipsTop8.locked = true;
		hipsTop7.locked = true;
		hipsTop6.locked = true;
		hipsTop5.locked = true;
		hipsTop4.locked = true;
		hipsTop3.locked = true;
		hipsTop2.locked = true;
		hipsTop.locked = true;
		hips5.locked = true;
		body3.locked = true;
		bodyTop4.locked = true;
		bodyBack1.locked = true;
		shapeLayer92.locked = true;
		shapeLayer85.locked = true;
		shapeLayer87.locked = true;
		shapeLayer86.locked = true;
		shapeLayer84.locked = true;
		shapeLayer74.locked = true;
		shapeLayer75.locked = true;
		shapeLayer72.locked = true;
		shapeLayer64.locked = true;
		shapeLayer76.locked = true;
		shapeLayer68.locked = true;
		shapeLayer67.locked = true;
		shapeLayer66.locked = true;
		shapeLayer65.locked = true;
		shapeLayer71.locked = true;
		shapeLayer70.locked = true;
		shapeLayer73.locked = true;
		shapeLayer91.locked = true;
		shapeLayer88.locked = true;
		shapeLayer79.locked = true;
		shapeLayer81.locked = true;
		shapeLayer83.locked = true;
		shapeLayer78.locked = true;
		shapeLayer80.locked = true;
		shapeLayer82.locked = true;
		shapeLayer89.locked = true;
		shapeLayer77.locked = true;
		shapeLayer90.locked = true;
		shapeLayer69.locked = true;

// Working with comp "Hand Texture", varName "handTexture_comp";
	// Add existing composition "Texture", varName "texture_comp";
	var texture = handTexture_comp.layers.add(texture_comp);
		texture.moveToEnd();
		texture.property("ADBE Transform Group").property("ADBE Position").setValue([-1434,137,0]);
		texture.selected = false;
// Working with comp "Forearm Texture 2", varName "forearmTexture2_comp";
	// Add existing composition "Texture", varName "texture_comp";
	var texture1 = forearmTexture2_comp.layers.add(texture_comp);
		texture1.moveToEnd();
		texture1.property("ADBE Transform Group").property("ADBE Position").setValue([667,137,0]);
		texture1.selected = false;
// Working with comp "Forearm Texture", varName "forearmTexture_comp";
	// Add existing composition "Texture", varName "texture_comp";
	var texture2 = forearmTexture_comp.layers.add(texture_comp);
		texture2.moveToEnd();
		texture2.property("ADBE Transform Group").property("ADBE Position").setValue([1510,137,0]);
		texture2.selected = false;
// Working with comp "Upper Arm Texture 2", varName "upperArmTexture2_comp";
	// Add existing composition "Texture", varName "texture_comp";
	var texture3 = upperArmTexture2_comp.layers.add(texture_comp);
		texture3.moveToEnd();
		texture3.property("ADBE Transform Group").property("ADBE Position").setValue([1088,137,0]);
		texture3.selected = false;
// Working with comp "Upper Arm Texture", varName "upperArmTexture_comp";
	// Add existing composition "Texture", varName "texture_comp";
	var texture4 = upperArmTexture_comp.layers.add(texture_comp);
		texture4.moveToEnd();
		texture4.property("ADBE Transform Group").property("ADBE Position").setValue([1930,137,0]);
		texture4.selected = false;
// Working with comp "Glasses Texture", varName "glassesTexture_comp";
	// Add existing composition "Texture", varName "texture_comp";
	var texture5 = glassesTexture_comp.layers.add(texture_comp);
		texture5.moveToEnd();
		texture5.property("ADBE Transform Group").property("ADBE Position").setValue([-1437,-859,0]);
		texture5.selected = false;
// Working with comp "Eyelash Texture", varName "eyelashTexture_comp";
	// Add existing composition "Texture", varName "texture_comp";
	var texture6 = eyelashTexture_comp.layers.add(texture_comp);
		texture6.moveToEnd();
		texture6.property("ADBE Transform Group").property("ADBE Position").setValue([-352.875,-916.5,0]);
		texture6.selected = false;
// Working with comp "Eyebrow Texture", varName "eyebrowTexture_comp";
	// Add existing composition "Texture", varName "texture_comp";
	var texture7 = eyebrowTexture_comp.layers.add(texture_comp);
		texture7.moveToEnd();
		texture7.property("ADBE Transform Group").property("ADBE Position").setValue([-139.625,-921,0]);
		texture7.selected = false;
// Working with comp "Eye Texture", varName "eyeTexture_comp";
	// Add existing composition "Texture", varName "texture_comp";
	var texture8 = eyeTexture_comp.layers.add(texture_comp);
		texture8.moveToEnd();
		texture8.property("ADBE Mask Parade").addProperty("ADBE Mask Atom");
		texture8.property("ADBE Mask Parade").property(1).name = "Mask 1";
		texture8.property("ADBE Mask Parade").property(1).color = [0.66274509803922, 0.79607843137255, 0.78039215686275];
		var texture8MaskPath = texture8.property("ADBE Mask Parade").property(1).property("ADBE Mask Shape");
		var texture8MaskPath_newShape = new Shape();
			texture8MaskPath_newShape.vertices = [[3163.74877929688, 2252.35913085938], [3064.74755859375, 2252.35888671875], [3064.74755859375, 2352.109375], [3163.74877929688, 2352.109375]];
			texture8MaskPath_newShape.closed = true;
		texture8MaskPath.setValue(texture8MaskPath_newShape);
		texture8.property("ADBE Transform Group").property("ADBE Position").setValue([-564.25,-902,0]);
		texture8.selected = false;
// Working with comp "Eye Texture 2", varName "eyeTexture2_comp";
	// Add existing composition "Texture", varName "texture_comp";
	var texture9 = eyeTexture2_comp.layers.add(texture_comp);
		texture9.moveToEnd();
		texture9.property("ADBE Mask Parade").addProperty("ADBE Mask Atom");
		texture9.property("ADBE Mask Parade").property(1).name = "Mask 1";
		texture9.property("ADBE Mask Parade").property(1).color = [0.40392156862745, 0.49019607843137, 0.87843137254902];
		var texture9MaskPath = texture9.property("ADBE Mask Parade").property(1).property("ADBE Mask Shape");
		var texture9MaskPath_newShape = new Shape();
			texture9MaskPath_newShape.vertices = [[3342.37475585938, 2251.75], [3241.87475585938, 2251.75], [3241.87475585938, 2352], [3342.37475585938, 2352]];
			texture9MaskPath_newShape.closed = true;
		texture9MaskPath.setValue(texture9MaskPath_newShape);
		texture9.property("ADBE Transform Group").property("ADBE Position").setValue([-742.125,-902,0]);
		texture9.selected = false;
// Working with comp "Hair Front Texture", varName "hairFrontTexture_comp";
	// Add existing composition "Texture", varName "texture_comp";
	var texture10 = hairFrontTexture_comp.layers.add(texture_comp);
		texture10.moveToEnd();
		texture10.property("ADBE Transform Group").property("ADBE Position").setValue([817,-483,0]);
		texture10.selected = false;
// Working with comp "Nose Shape Texture", varName "noseShapeTexture_comp";
	// Add existing composition "Texture", varName "texture_comp";
	var texture11 = noseShapeTexture_comp.layers.add(texture_comp);
		texture11.moveToEnd();
		texture11.property("ADBE Transform Group").property("ADBE Position").setValue([-1437,-541,0]);
		texture11.selected = false;
// Working with comp "Mouth Smile 01", varName "mouthSmile01_comp";
	// Add Shape Layer "Shape Layer 11", varName "shapeLayer11";
	var shapeLayer11 = mouthSmile01_comp.layers.addShape();
		shapeLayer11.name = "Shape Layer 11";
		shapeLayer11.label = 2;
		shapeLayer11.enabled = false;
		shapeLayer11.outPoint = 18.0833333333333;
		shapeLayer11.moveToEnd();
		shapeLayer11.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		shapeLayer11.property("ADBE Root Vectors Group").property(1).name = "Ellipse 1";
		shapeLayer11.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Ellipse");
		shapeLayer11.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Ellipse Path 1";
		shapeLayer11.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Ellipse Size").setValue([111,111]);
		shapeLayer11.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		shapeLayer11.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		shapeLayer11.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		shapeLayer11.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(10);
		shapeLayer11.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		shapeLayer11.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		shapeLayer11.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.08235294117647,0.18039215686275,0.23529411764706,1]);
		shapeLayer11.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([-11,-204.5]);
		shapeLayer11.property("ADBE Mask Parade").addProperty("ADBE Mask Atom");
		shapeLayer11.property("ADBE Mask Parade").property(1).name = "Mask 1";
		shapeLayer11.property("ADBE Mask Parade").property(1).color = [0.66274509803922, 0.66274509803922, 0.7921568627451];
		var shapeLayer11MaskPath = shapeLayer11.property("ADBE Mask Parade").property(1).property("ADBE Mask Shape");
		var shapeLayer11MaskPath_newShape = new Shape();
			shapeLayer11MaskPath_newShape.vertices = [[54.9574432373047, -210.351058959961], [-81.2127685546875, -210.351058959961], [-81.2127685546875, -130.03190612793], [54.9574432373047, -130.03190612793]];
			shapeLayer11MaskPath_newShape.closed = true;
		shapeLayer11MaskPath.setValue(shapeLayer11MaskPath_newShape);
		shapeLayer11.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([-11,-204.5,0]);
		shapeLayer11.property("ADBE Transform Group").property("ADBE Position").setValue([125.000001831055,114.999998779297,0]);
		shapeLayer11.property("ADBE Transform Group").property("ADBE Scale").setValue([47,47,100]);
		shapeLayer11.selected = false;
	// Add existing composition "Mouth Smile", varName "mouthSmile_comp";
	var mouthSmile = mouthSmile01_comp.layers.add(mouthSmile_comp);
		mouthSmile.name = "Mouth Smile";
		mouthSmile.moveToEnd();
		mouthSmile.trackMatteType = TrackMatteType.ALPHA;
		mouthSmile.property("ADBE Transform Group").property("ADBE Position").setValue([150,136.5,0]);
		mouthSmile.property("ADBE Transform Group").property("ADBE Scale").setValue([100,100,100]);
		mouthSmile.selected = false;
	// Apply parents
		shapeLayer11.setParentWithJump(mouthSmile);

// Working with comp "Beard Texture", varName "beardTexture_comp";
	// Add existing composition "Texture", varName "texture_comp";
	var texture12 = beardTexture_comp.layers.add(texture_comp);
		texture12.moveToEnd();
		texture12.property("ADBE Transform Group").property("ADBE Position").setValue([-920,-483,0]);
		texture12.selected = false;
// Working with comp "Hair Middle Texture", varName "hairMiddleTexture_comp";
	// Add existing composition "Texture", varName "texture_comp";
	var texture13 = hairMiddleTexture_comp.layers.add(texture_comp);
		texture13.moveToEnd();
		texture13.property("ADBE Transform Group").property("ADBE Position").setValue([1660.5,-483,0]);
		texture13.selected = false;
// Working with comp "Face Shape Texture", varName "faceShapeTexture_comp";
	// Add existing composition "Texture", varName "texture_comp";
	var texture14 = faceShapeTexture_comp.layers.add(texture_comp);
		texture14.moveToEnd();
		texture14.property("ADBE Transform Group").property("ADBE Position").setValue([394,-483,0]);
		texture14.selected = false;
// Working with comp "Ears Texture", varName "earsTexture_comp";
	// Add existing composition "Texture", varName "texture_comp";
	var texture15 = earsTexture_comp.layers.add(texture_comp);
		texture15.moveToEnd();
		texture15.property("ADBE Transform Group").property("ADBE Position").setValue([-78.25,-483,0]);
		texture15.selected = false;
// Working with comp "Ears Texture 2", varName "earsTexture2_comp";
	// Add existing composition "Texture", varName "texture_comp";
	var texture16 = earsTexture2_comp.layers.add(texture_comp);
		texture16.moveToEnd();
		texture16.property("ADBE Transform Group").property("ADBE Position").setValue([-500,-483,0]);
		texture16.selected = false;
// Working with comp "Neck Texture", varName "neckTexture_comp";
	// Add existing composition "Texture", varName "texture_comp";
	var texture17 = neckTexture_comp.layers.add(texture_comp);
		texture17.moveToEnd();
		texture17.property("ADBE Transform Group").property("ADBE Position").setValue([1930,-483,0]);
		texture17.selected = false;
// Working with comp "Body Texture 2", varName "bodyTexture2_comp";
	// Add existing composition "Texture", varName "texture_comp";
	var texture18 = bodyTexture2_comp.layers.add(texture_comp);
		texture18.moveToEnd();
		texture18.property("ADBE Transform Group").property("ADBE Position").setValue([1110,954,0]);
		texture18.selected = false;
// Working with comp "Body Texture", varName "bodyTexture_comp";
	// Add existing composition "Texture", varName "texture_comp";
	var texture19 = bodyTexture_comp.layers.add(texture_comp);
		texture19.moveToEnd();
		texture19.property("ADBE Transform Group").property("ADBE Position").setValue([292,954,0]);
		texture19.selected = false;
// Working with comp "Hips Texture 2", varName "hipsTexture2_comp";
	// Add existing composition "Texture", varName "texture_comp";
	var texture20 = hipsTexture2_comp.layers.add(texture_comp);
		texture20.moveToEnd();
		texture20.property("ADBE Transform Group").property("ADBE Position").setValue([-1241,1054,0]);
		texture20.selected = false;
// Working with comp "Hips Texture", varName "hipsTexture_comp";
	// Add existing composition "Texture", varName "texture_comp";
	var texture21 = hipsTexture_comp.layers.add(texture_comp);
		texture21.moveToEnd();
		texture21.property("ADBE Transform Group").property("ADBE Position").setValue([-525,1054,0]);
		texture21.selected = false;
// Working with comp "Feet Texture", varName "feetTexture_comp";
	// Add existing composition "Texture", varName "texture_comp";
	var texture22 = feetTexture_comp.layers.add(texture_comp);
		texture22.moveToEnd();
		texture22.property("ADBE Transform Group").property("ADBE Position").setValue([-1434,-202,0]);
		texture22.selected = false;
// Working with comp "Calf Texture 2", varName "calfTexture2_comp";
	// Add existing composition "Texture", varName "texture_comp";
	var texture23 = calfTexture2_comp.layers.add(texture_comp);
		texture23.moveToEnd();
		texture23.property("ADBE Transform Group").property("ADBE Position").setValue([-1017,137,0]);
		texture23.selected = false;
// Working with comp "Calf Texture", varName "calfTexture_comp";
	// Add existing composition "Texture", varName "texture_comp";
	var texture24 = calfTexture_comp.layers.add(texture_comp);
		texture24.moveToEnd();
		texture24.property("ADBE Transform Group").property("ADBE Position").setValue([-176,137,0]);
		texture24.selected = false;
// Working with comp "Thigh Texture 2", varName "thighTexture2_comp";
	// Add existing composition "Texture", varName "texture_comp";
	var texture25 = thighTexture2_comp.layers.add(texture_comp);
		texture25.moveToEnd();
		texture25.property("ADBE Transform Group").property("ADBE Position").setValue([-596.625,137,0]);
		texture25.selected = false;
// Working with comp "Thigh Texture", varName "thighTexture_comp";
	// Add existing composition "Texture", varName "texture_comp";
	var texture26 = thighTexture_comp.layers.add(texture_comp);
		texture26.moveToEnd();
		texture26.property("ADBE Transform Group").property("ADBE Position").setValue([245.5,137,0]);
		texture26.selected = false;
// Working with comp "Body Texture 3", varName "bodyTexture3_comp";
	// Add existing composition "Texture", varName "texture_comp";
	var texture27 = bodyTexture3_comp.layers.add(texture_comp);
		texture27.moveToEnd();
		texture27.property("ADBE Transform Group").property("ADBE Position").setValue([1930,956,0]);
		texture27.selected = false;
// Working with comp "Hair Back Texture", varName "hairBackTexture_comp";
	// Add existing composition "Texture", varName "texture_comp";
	var texture28 = hairBackTexture_comp.layers.add(texture_comp);
		texture28.moveToEnd();
		texture28.property("ADBE Transform Group").property("ADBE Position").setValue([1238,-483,0]);
		texture28.selected = false;
// Working with comp "Mouth Smile", varName "mouthSmile_comp";
	// Add Shape Layer "Shape Layer 12", varName "shapeLayer12";
	var shapeLayer12 = mouthSmile_comp.layers.addShape();
		shapeLayer12.name = "Shape Layer 12";
		shapeLayer12.label = 2;
		shapeLayer12.outPoint = 18.0833333333333;
		shapeLayer12.moveToEnd();
		shapeLayer12.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		shapeLayer12.property("ADBE Root Vectors Group").property(1).name = "Ellipse 1";
		shapeLayer12.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Ellipse");
		shapeLayer12.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Ellipse Path 1";
		shapeLayer12.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Ellipse Size").setValue([116,116]);
		shapeLayer12.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		shapeLayer12.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		shapeLayer12.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		shapeLayer12.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(10);
		shapeLayer12.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		shapeLayer12.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		shapeLayer12.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([1,1,1,1]);
		shapeLayer12.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([-11,-204.5]);
		shapeLayer12.property("ADBE Mask Parade").addProperty("ADBE Mask Atom");
		shapeLayer12.property("ADBE Mask Parade").property(1).name = "Mask 1";
		shapeLayer12.property("ADBE Mask Parade").property(1).color = [0.90588235294118, 0.75686274509804, 0.61960784313725];
		var shapeLayer12MaskPath = shapeLayer12.property("ADBE Mask Parade").property(1).property("ADBE Mask Shape");
		var shapeLayer12MaskPath_newShape = new Shape();
			shapeLayer12MaskPath_newShape.vertices = [[111, -289.5], [-120, -289.5], [-120, -195.5], [111, -195.5]];
			shapeLayer12MaskPath_newShape.closed = true;
		shapeLayer12MaskPath.setValue(shapeLayer12MaskPath_newShape);
		shapeLayer12.property("ADBE Transform Group").property("ADBE Position").setValue([130.170001831055,211.114998779297,0]);
		shapeLayer12.property("ADBE Transform Group").property("ADBE Scale").setValue([47,47,100]);
		shapeLayer12.selected = false;
	// Add Shape Layer "Shape Layer 10", varName "shapeLayer10";
	var shapeLayer10 = mouthSmile_comp.layers.addShape();
		shapeLayer10.name = "Shape Layer 10";
		shapeLayer10.label = 2;
		shapeLayer10.outPoint = 18.0833333333333;
		shapeLayer10.moveToEnd();
		shapeLayer10.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		shapeLayer10.property("ADBE Root Vectors Group").property(1).name = "Ellipse 1";
		shapeLayer10.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Ellipse");
		shapeLayer10.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Ellipse Path 1";
		shapeLayer10.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Ellipse Size").setValue([96,96]);
		shapeLayer10.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		shapeLayer10.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		shapeLayer10.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		shapeLayer10.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(10);
		shapeLayer10.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		shapeLayer10.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		shapeLayer10.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.74901960784314,0.14509803921569,0.34117647058824,1]);
		shapeLayer10.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([-11,-204.5]);
		shapeLayer10.property("ADBE Transform Group").property("ADBE Position").setValue([130.170001831055,245.424998779297,0]);
		shapeLayer10.property("ADBE Transform Group").property("ADBE Scale").setValue([47,47,100]);
		shapeLayer10.selected = false;
	// Add Shape Layer "Shape Layer 9", varName "shapeLayer9";
	var shapeLayer9 = mouthSmile_comp.layers.addShape();
		shapeLayer9.name = "Shape Layer 9";
		shapeLayer9.label = 2;
		shapeLayer9.outPoint = 18.0833333333333;
		shapeLayer9.moveToEnd();
		shapeLayer9.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		shapeLayer9.property("ADBE Root Vectors Group").property(1).name = "Ellipse 1";
		shapeLayer9.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Ellipse");
		shapeLayer9.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Ellipse Path 1";
		shapeLayer9.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Ellipse Size").setValue([114,114]);
		shapeLayer9.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		shapeLayer9.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		shapeLayer9.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		shapeLayer9.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(10);
		shapeLayer9.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		shapeLayer9.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		shapeLayer9.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.08235294117647,0.18039215686275,0.23529411764706,1]);
		shapeLayer9.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([-11,-204.5]);
		shapeLayer9.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([-10.9999999999999,-204.5,0]);
		shapeLayer9.property("ADBE Transform Group").property("ADBE Position").setValue([125.000001831055,114.999998779297,0]);
		shapeLayer9.property("ADBE Transform Group").property("ADBE Scale").setValue([47,47,100]);
		shapeLayer9.selected = false;

// Remove empty Solids folder
	var tempNullComp = app.project.items.addComp("tempNullComp", 100, 100, 1, 1, 24);
	var tempNullLayer = tempNullComp.layers.addNull();
	var nullFolder = tempNullLayer.source.parentFolder;
		tempNullLayer.source.remove();
		tempNullComp.remove();
	if (nullFolder.numItems === 0)
		nullFolder.remove();


	// Apply expressions to properties
		try {
			chandL.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(1).property("ADBE Vector Shape").expression = "value";
		} catch (err) {}
		try {
			chandL.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(2).property("ADBE Vector Shape").expression = "value";
		} catch (err) {}
		try {
			chandL.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(3).property("ADBE Vector Shape").expression = "value";
		} catch (err) {}
		try {
			chandL.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(4).property("ADBE Vector Shape").expression = "value";
		} catch (err) {}
		try {
			chandL.property("ADBE Transform Group").property("ADBE Position").expression = "W=thisComp.layer(\"Ctrl Limbs\").effect(\"EVT4.1 Limbs Control\");" + "\n" + 
				"" + "\n" + 
				"BL=W(14);" + "\n" + 
				"" + "\n" + 
				"L=W(2);" + "\n" + 
				"" + "\n" + 
				"T=W(8);" + "\n" + 
				"" + "\n" + 
				"BT=W(18);" + "\n" + 
				"" + "\n" + 
				"ZD=W(16);" + "\n" + 
				"" + "\n" + 
				"D=W(4);" + "\n" + 
				"" + "\n" + 
				"H=W(10);" + "\n" + 
				"" + "\n" + 
				"ZH=W(20);" + "\n" + 
				"" + "\n" + 
				"SS=W(24);" + "\n" + 
				"" + "\n" + 
				"[transform.position[0]+((ZH-H)/2)-SS,transform.position[1]+((BL-L)*-2)+((BT-T)*2)+((ZD-D)/2)];";
		} catch (err) {}
		try {
			chandR.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(1).property("ADBE Vector Shape").expression = "value";
		} catch (err) {}
		try {
			chandR.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(2).property("ADBE Vector Shape").expression = "value";
		} catch (err) {}
		try {
			chandR.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(3).property("ADBE Vector Shape").expression = "value";
		} catch (err) {}
		try {
			chandR.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(4).property("ADBE Vector Shape").expression = "value";
		} catch (err) {}
		try {
			chandR.property("ADBE Transform Group").property("ADBE Position").expression = "W=thisComp.layer(\"Ctrl Limbs\").effect(\"EVT4.1 Limbs Control\");" + "\n" + 
				"" + "\n" + 
				"BL=W(14);" + "\n" + 
				"" + "\n" + 
				"L=W(2);" + "\n" + 
				"" + "\n" + 
				"T=W(8);" + "\n" + 
				"" + "\n" + 
				"BT=W(18);" + "\n" + 
				"" + "\n" + 
				"ZD=W(16);" + "\n" + 
				"" + "\n" + 
				"D=W(4);" + "\n" + 
				"" + "\n" + 
				"H=W(10);" + "\n" + 
				"" + "\n" + 
				"ZH=W(20);" + "\n" + 
				"" + "\n" + 
				"SS=W(24);" + "\n" + 
				"" + "\n" + 
				"[transform.position[0]-((ZH-H)/2)+SS,transform.position[1]+((BL-L)*-2)+((BT-T)*2)+((ZD-D)/2)];";
		} catch (err) {}
		try {
			cbody.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(1).property("ADBE Vector Shape").expression = "value";
		} catch (err) {}
		try {
			cbody.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(2).property("ADBE Vector Shape").expression = "value";
		} catch (err) {}
		try {
			cbody.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(3).property("ADBE Vector Shape").expression = "value";
		} catch (err) {}
		try {
			cbody.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(4).property("ADBE Vector Shape").expression = "value";
		} catch (err) {}
		try {
			cbody.property("ADBE Transform Group").property("ADBE Anchor Point").expression = "W=thisComp.layer(\"Ctrl Limbs\").effect(\"EVT4.1 Limbs Control\");" + "\n" + 
				"" + "\n" + 
				"T=W(10);" + "\n" + 
				"" + "\n" + 
				"BT=W(20);" + "\n" + 
				"" + "\n" + 
				"[transform.anchorPoint[0],transform.anchorPoint[1]+((BT-T)/2)];";
		} catch (err) {}
		try {
			cbody.property("ADBE Transform Group").property("ADBE Position").expression = "W=thisComp.layer(\"Ctrl Limbs\").effect(\"EVT4.1 Limbs Control\");" + "\n" + 
				"" + "\n" + 
				"BT=W(20);" + "\n" + 
				"" + "\n" + 
				"T=W(10);" + "\n" + 
				"" + "\n" + 
				"[transform.position[0], transform.position[1]+((BT-T)/2)];" + "\n" + 
				"";
		} catch (err) {}
		try {
			chips.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(1).property("ADBE Vector Shape").expression = "value";
		} catch (err) {}
		try {
			chips.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(2).property("ADBE Vector Shape").expression = "value";
		} catch (err) {}
		try {
			chips.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(3).property("ADBE Vector Shape").expression = "value";
		} catch (err) {}
		try {
			chips.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(4).property("ADBE Vector Shape").expression = "value";
		} catch (err) {}
		try {
			cneck.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(1).property("ADBE Vector Shape").expression = "value";
		} catch (err) {}
		try {
			cneck.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(2).property("ADBE Vector Shape").expression = "value";
		} catch (err) {}
		try {
			cneck.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(3).property("ADBE Vector Shape").expression = "value";
		} catch (err) {}
		try {
			cneck.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(4).property("ADBE Vector Shape").expression = "value";
		} catch (err) {}
		try {
			chead.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(1).property("ADBE Vector Shape").expression = "value";
		} catch (err) {}
		try {
			chead.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(2).property("ADBE Vector Shape").expression = "value";
		} catch (err) {}
		try {
			chead.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(3).property("ADBE Vector Shape").expression = "value";
		} catch (err) {}
		try {
			chead.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(4).property("ADBE Vector Shape").expression = "value";
		} catch (err) {}
		try {
			chead.property("ADBE Transform Group").property("ADBE Scale").expression = "//////BEGIN SLIDER CODE//////" + "\n" + 
				"function slider (inputValue){" + "\n" + 
				"var contrl = thisComp.layer(\"Man Woman Slider\");var contrlCurVal1 = contrl(\"ADBE Effect Parade\")(1)(\"ADBE Slider Control-0001\");" + "\n" + 
				"var k1=[100,100,100];" + "\n" + 
				"var k2=[94,94,100];" + "\n" + 
				"k1= unArray(k1);" + "\n" + 
				"k2= unArray(k2);" + "\n" + 
				"if(contrlCurVal1 >=0){" + "\n" + 
				" var resultAdd1 = linear(contrlCurVal1,0,100,k1,k2);}else{var resultAdd1 = k1+(-linear(-contrlCurVal1,0,100,k1,k2)+k1);}" + "\n" + 
				"var myResult = resultAdd1+(inputValue-k1);" + "\n" + 
				"return myResult;}" + "\n" + 
				"function unArray(inKey){" + "\n" + 
				"    if(inKey instanceof Array && inKey.length === 1){" + "\n" + 
				"     return inKey[0];" + "\n" + 
				"      }else{" + "\n" + 
				"        return inKey;" + "\n" + 
				"     }" + "\n" + 
				"  }" + "\n" + 
				"slider(value);";
		} catch (err) {}
		try {
			cfeetL.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(1).property("ADBE Vector Shape").expression = "value";
		} catch (err) {}
		try {
			cfeetL.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(2).property("ADBE Vector Shape").expression = "value";
		} catch (err) {}
		try {
			cfeetL.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(3).property("ADBE Vector Shape").expression = "value";
		} catch (err) {}
		try {
			cfeetL.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(4).property("ADBE Vector Shape").expression = "value";
		} catch (err) {}
		try {
			cfeetL.property("ADBE Transform Group").property("ADBE Position").expression = "W=thisComp.layer(\"Ctrl Limbs\").effect(\"EVT4.1 Limbs Control\");" + "\n" + 
				"" + "\n" + 
				"BL=W(15);" + "\n" + 
				"" + "\n" + 
				"L=W(3);" + "\n" + 
				"" + "\n" + 
				"T=W(9);" + "\n" + 
				"" + "\n" + 
				"BT=W(19);" + "\n" + 
				"" + "\n" + 
				"H=W(10);" + "\n" + 
				"" + "\n" + 
				"ZH=W(20);" + "\n" + 
				"" + "\n" + 
				"SH=W(25);" + "\n" + 
				"" + "\n" + 
				"[transform.position[0]+((ZH-H)/2)-SH,transform.position[1]+((L-BL)*2)-((T-BT)*2)+((T-BT)/2)];";
		} catch (err) {}
		try {
			cfeetL.property("ADBE Transform Group").property("ADBE Scale").expression = "//////BEGIN SLIDER CODE//////" + "\n" + 
				"function slider (inputValue){" + "\n" + 
				"var contrl = thisComp.layer(\"Man Woman Slider\");var contrlCurVal1 = contrl(\"ADBE Effect Parade\")(1)(\"ADBE Slider Control-0001\");" + "\n" + 
				"var k1=[90,90,100];" + "\n" + 
				"var k2=[70,70,100];" + "\n" + 
				"k1= unArray(k1);" + "\n" + 
				"k2= unArray(k2);" + "\n" + 
				"if(contrlCurVal1 >=0){" + "\n" + 
				" var resultAdd1 = linear(contrlCurVal1,0,100,k1,k2);}else{var resultAdd1 = k1+(-linear(-contrlCurVal1,0,100,k1,k2)+k1);}" + "\n" + 
				"var myResult = resultAdd1+(inputValue-k1);" + "\n" + 
				"return myResult;}" + "\n" + 
				"function unArray(inKey){" + "\n" + 
				"    if(inKey instanceof Array && inKey.length === 1){" + "\n" + 
				"     return inKey[0];" + "\n" + 
				"      }else{" + "\n" + 
				"        return inKey;" + "\n" + 
				"     }" + "\n" + 
				"  }" + "\n" + 
				"slider(value);";
		} catch (err) {}
		try {
			cfeetR.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(1).property("ADBE Vector Shape").expression = "value";
		} catch (err) {}
		try {
			cfeetR.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(2).property("ADBE Vector Shape").expression = "value";
		} catch (err) {}
		try {
			cfeetR.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(3).property("ADBE Vector Shape").expression = "value";
		} catch (err) {}
		try {
			cfeetR.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(4).property("ADBE Vector Shape").expression = "value";
		} catch (err) {}
		try {
			cfeetR.property("ADBE Transform Group").property("ADBE Position").expression = "W=thisComp.layer(\"Ctrl Limbs\").effect(\"EVT4.1 Limbs Control\");" + "\n" + 
				"" + "\n" + 
				"BL=W(15);" + "\n" + 
				"" + "\n" + 
				"L=W(3);" + "\n" + 
				"" + "\n" + 
				"T=W(9);" + "\n" + 
				"" + "\n" + 
				"BT=W(19);" + "\n" + 
				"" + "\n" + 
				"H=W(10);" + "\n" + 
				"" + "\n" + 
				"ZH=W(20);" + "\n" + 
				"" + "\n" + 
				"SH=W(25);" + "\n" + 
				"" + "\n" + 
				"[transform.position[0]-((ZH-H)/2)+SH,transform.position[1]+((L-BL)*2)-((T-BT)*2)+((T-BT)/2)];";
		} catch (err) {}
		try {
			cfeetR.property("ADBE Transform Group").property("ADBE Scale").expression = "//////BEGIN SLIDER CODE//////" + "\n" + 
				"function slider (inputValue){" + "\n" + 
				"var contrl = thisComp.layer(\"Man Woman Slider\");var contrlCurVal1 = contrl(\"ADBE Effect Parade\")(1)(\"ADBE Slider Control-0001\");" + "\n" + 
				"var k1=[90,90,100];" + "\n" + 
				"var k2=[70,70,100];" + "\n" + 
				"k1= unArray(k1);" + "\n" + 
				"k2= unArray(k2);" + "\n" + 
				"if(contrlCurVal1 >=0){" + "\n" + 
				" var resultAdd1 = linear(contrlCurVal1,0,100,k1,k2);}else{var resultAdd1 = k1+(-linear(-contrlCurVal1,0,100,k1,k2)+k1);}" + "\n" + 
				"var myResult = resultAdd1+(inputValue-k1);" + "\n" + 
				"return myResult;}" + "\n" + 
				"function unArray(inKey){" + "\n" + 
				"    if(inKey instanceof Array && inKey.length === 1){" + "\n" + 
				"     return inKey[0];" + "\n" + 
				"      }else{" + "\n" + 
				"        return inKey;" + "\n" + 
				"     }" + "\n" + 
				"  }" + "\n" + 
				"slider(value);";
		} catch (err) {}
		try {
			ctrlHead.property("ADBE Transform Group").property("ADBE Scale").expression = "[100,100]";
		} catch (err) {}
		try {
			ctrlEyesPosition.property("ADBE Transform Group").property("ADBE Scale").expression = "[100,100]";
		} catch (err) {}
		try {
			ctrlEyebrows.property("ADBE Transform Group").property("ADBE Scale").expression = "[100,100]";
		} catch (err) {}
		try {
			ctrlEyes.property("ADBE Effect Parade").property(1).property("Pseudo/EVT4.1 Eyes Control-0003").expression = "effect(\"EVT4.1 Eyes Control\")(3)+effect(\"EVT4.1 Eyes Control\")(2);";
		} catch (err) {}
		try {
			ctrlEyes.property("ADBE Effect Parade").property(1).property("Pseudo/EVT4.1 Eyes Control-0004").expression = "effect(\"EVT4.1 Eyes Control\")(4)+effect(\"EVT4.1 Eyes Control\")(2);";
		} catch (err) {}
		try {
			ctrlEyes.property("ADBE Effect Parade").property(1).property("Pseudo/EVT4.1 Eyes Control-0007").expression = "effect(\"EVT4.1 Eyes Control\")(7)+effect(\"EVT4.1 Eyes Control\")(3);";
		} catch (err) {}
		try {
			ctrlEyes.property("ADBE Effect Parade").property(1).property("Pseudo/EVT4.1 Eyes Control-0008").expression = "effect(\"EVT4.1 Eyes Control\")(8)+effect(\"EVT4.1 Eyes Control\")(4);";
		} catch (err) {}
		try {
			ctrlEyes.property("ADBE Effect Parade").property(1).property("Pseudo/EVT4.1 Eyes Control-0009").expression = "effect(\"EVT4.1 Eyes Control\")(9)+effect(\"EVT4.1 Eyes Control\")(3);";
		} catch (err) {}
		try {
			ctrlEyes.property("ADBE Effect Parade").property(1).property("Pseudo/EVT4.1 Eyes Control-0010").expression = "effect(\"EVT4.1 Eyes Control\")(10)+effect(\"EVT4.1 Eyes Control\")(4);";
		} catch (err) {}
		try {
			ctrlEyes.property("ADBE Effect Parade").property(1).property("Pseudo/EVT4.1 Eyes Control-0012").expression = "effect(\"EVT4.1 Eyes Control\")(12)";
		} catch (err) {}
		try {
			ctrlLimbs.property("ADBE Effect Parade").property(1).property("Pseudo/EVT4.1 Limbs Control-0002").expression = "W=effect(\"EVT4.1 Limbs Control\");" + "\n" + 
				"" + "\n" + 
				"A=thisComp.layer(\"Arms Length AdjustmentMW\").effect(\"Arms Length additional value\")(\"Slider\");" + "\n" + 
				"" + "\n" + 
				"T=W(8);" + "\n" + 
				"" + "\n" + 
				"BT=W(18);" + "\n" + 
				"" + "\n" + 
				"effect(\"EVT4.1 Limbs Control\")(2)-(BT-T)+A;";
		} catch (err) {}
		try {
			ctrlLimbs.property("ADBE Effect Parade").property(1).property("Pseudo/EVT4.1 Limbs Control-0003").expression = "W=effect(\"EVT4.1 Limbs Control\");" + "\n" + 
				"" + "\n" + 
				"" + "\n" + 
				"" + "\n" + 
				"T=W(9);" + "\n" + 
				"" + "\n" + 
				"" + "\n" + 
				"" + "\n" + 
				"BT=W(19);" + "\n" + 
				"" + "\n" + 
				"" + "\n" + 
				"" + "\n" + 
				"effect(\"EVT4.1 Limbs Control\")(3)-((BT-T)/4*3);";
		} catch (err) {}
		try {
			ctrlLimbs.property("ADBE Effect Parade").property(1).property("Pseudo/EVT4.1 Limbs Control-0004").expression = "//////BEGIN SLIDER CODE//////" + "\n" + 
				"function slider (inputValue){" + "\n" + 
				"var contrl = thisComp.layer(\"Man Woman Slider\");var contrlCurVal1 = contrl(\"ADBE Effect Parade\")(1)(\"ADBE Slider Control-0001\");" + "\n" + 
				"var k1=[310];" + "\n" + 
				"var k2=[270];" + "\n" + 
				"k1= unArray(k1);" + "\n" + 
				"k2= unArray(k2);" + "\n" + 
				"if(contrlCurVal1 >=0){" + "\n" + 
				" var resultAdd1 = linear(contrlCurVal1,0,100,k1,k2);}else{var resultAdd1 = k1+(-linear(-contrlCurVal1,0,100,k1,k2)+k1);}" + "\n" + 
				"var myResult = resultAdd1+(inputValue-k1);" + "\n" + 
				"return myResult;}" + "\n" + 
				"function unArray(inKey){" + "\n" + 
				"    if(inKey instanceof Array && inKey.length === 1){" + "\n" + 
				"     return inKey[0];" + "\n" + 
				"      }else{" + "\n" + 
				"        return inKey;" + "\n" + 
				"     }" + "\n" + 
				"  }" + "\n" + 
				"slider(value);";
		} catch (err) {}
		try {
			ctrlLimbs.property("ADBE Effect Parade").property(1).property("Pseudo/EVT4.1 Limbs Control-0005").expression = "//////BEGIN SLIDER CODE//////" + "\n" + 
				"function slider (inputValue){" + "\n" + 
				"var contrl = thisComp.layer(\"Man Woman Slider\");var contrlCurVal1 = contrl(\"ADBE Effect Parade\")(1)(\"ADBE Slider Control-0001\");" + "\n" + 
				"var k1=[140];" + "\n" + 
				"var k2=[90];" + "\n" + 
				"k1= unArray(k1);" + "\n" + 
				"k2= unArray(k2);" + "\n" + 
				"if(contrlCurVal1 >=0){" + "\n" + 
				" var resultAdd1 = linear(contrlCurVal1,0,100,k1,k2);}else{var resultAdd1 = k1+(-linear(-contrlCurVal1,0,100,k1,k2)+k1);}" + "\n" + 
				"var myResult = resultAdd1+(inputValue-k1);" + "\n" + 
				"return myResult;}" + "\n" + 
				"function unArray(inKey){" + "\n" + 
				"    if(inKey instanceof Array && inKey.length === 1){" + "\n" + 
				"     return inKey[0];" + "\n" + 
				"      }else{" + "\n" + 
				"        return inKey;" + "\n" + 
				"     }" + "\n" + 
				"  }" + "\n" + 
				"slider(value);";
		} catch (err) {}
		try {
			ctrlLimbs.property("ADBE Effect Parade").property(1).property("Pseudo/EVT4.1 Limbs Control-0008").expression = "//////BEGIN SLIDER CODE//////" + "\n" + 
				"function slider (inputValue){" + "\n" + 
				"var contrl = thisComp.layer(\"Man Woman Slider\");var contrlCurVal1 = contrl(\"ADBE Effect Parade\")(1)(\"ADBE Slider Control-0001\");" + "\n" + 
				"var k1=[60];" + "\n" + 
				"var k2=[40];" + "\n" + 
				"k1= unArray(k1);" + "\n" + 
				"k2= unArray(k2);" + "\n" + 
				"if(contrlCurVal1 >=0){" + "\n" + 
				" var resultAdd1 = linear(contrlCurVal1,0,100,k1,k2);}else{var resultAdd1 = k1+(-linear(-contrlCurVal1,0,100,k1,k2)+k1);}" + "\n" + 
				"var myResult = resultAdd1+(inputValue-k1);" + "\n" + 
				"return myResult;}" + "\n" + 
				"function unArray(inKey){" + "\n" + 
				"    if(inKey instanceof Array && inKey.length === 1){" + "\n" + 
				"     return inKey[0];" + "\n" + 
				"      }else{" + "\n" + 
				"        return inKey;" + "\n" + 
				"     }" + "\n" + 
				"  }" + "\n" + 
				"slider(value);";
		} catch (err) {}
		try {
			ctrlLimbs.property("ADBE Effect Parade").property(1).property("Pseudo/EVT4.1 Limbs Control-0009").expression = "//////BEGIN SLIDER CODE//////" + "\n" + 
				"function slider (inputValue){" + "\n" + 
				"var contrl = thisComp.layer(\"Man Woman Slider\");var contrlCurVal1 = contrl(\"ADBE Effect Parade\")(1)(\"ADBE Slider Control-0001\");" + "\n" + 
				"var k1=[66];" + "\n" + 
				"var k2=[50];" + "\n" + 
				"k1= unArray(k1);" + "\n" + 
				"k2= unArray(k2);" + "\n" + 
				"if(contrlCurVal1 >=0){" + "\n" + 
				" var resultAdd1 = linear(contrlCurVal1,0,100,k1,k2);}else{var resultAdd1 = k1+(-linear(-contrlCurVal1,0,100,k1,k2)+k1);}" + "\n" + 
				"var myResult = resultAdd1+(inputValue-k1);" + "\n" + 
				"return myResult;}" + "\n" + 
				"function unArray(inKey){" + "\n" + 
				"    if(inKey instanceof Array && inKey.length === 1){" + "\n" + 
				"     return inKey[0];" + "\n" + 
				"      }else{" + "\n" + 
				"        return inKey;" + "\n" + 
				"     }" + "\n" + 
				"  }" + "\n" + 
				"slider(value);";
		} catch (err) {}
		try {
			ctrlLimbs.property("ADBE Effect Parade").property(1).property("Pseudo/EVT4.1 Limbs Control-0010").expression = "//////BEGIN SLIDER CODE//////" + "\n" + 
				"function slider (inputValue){" + "\n" + 
				"var contrl = thisComp.layer(\"Man Woman Slider\");var contrlCurVal1 = contrl(\"ADBE Effect Parade\")(1)(\"ADBE Slider Control-0001\");" + "\n" + 
				"var k1=[190];" + "\n" + 
				"var k2=[120];" + "\n" + 
				"k1= unArray(k1);" + "\n" + 
				"k2= unArray(k2);" + "\n" + 
				"if(contrlCurVal1 >=0){" + "\n" + 
				" var resultAdd1 = linear(contrlCurVal1,0,100,k1,k2);}else{var resultAdd1 = k1+(-linear(-contrlCurVal1,0,100,k1,k2)+k1);}" + "\n" + 
				"var myResult = resultAdd1+(inputValue-k1);" + "\n" + 
				"return myResult;}" + "\n" + 
				"function unArray(inKey){" + "\n" + 
				"    if(inKey instanceof Array && inKey.length === 1){" + "\n" + 
				"     return inKey[0];" + "\n" + 
				"      }else{" + "\n" + 
				"        return inKey;" + "\n" + 
				"     }" + "\n" + 
				"  }" + "\n" + 
				"slider(value);";
		} catch (err) {}
		try {
			ctrlLimbs.property("ADBE Effect Parade").property(1).property("Pseudo/EVT4.1 Limbs Control-0011").expression = "//////BEGIN SLIDER CODE//////" + "\n" + 
				"function slider (inputValue){" + "\n" + 
				"var contrl = thisComp.layer(\"Man Woman Slider\");var contrlCurVal1 = contrl(\"ADBE Effect Parade\")(1)(\"ADBE Slider Control-0001\");" + "\n" + 
				"var k1=[60];" + "\n" + 
				"var k2=[40];" + "\n" + 
				"k1= unArray(k1);" + "\n" + 
				"k2= unArray(k2);" + "\n" + 
				"if(contrlCurVal1 >=0){" + "\n" + 
				" var resultAdd1 = linear(contrlCurVal1,0,100,k1,k2);}else{var resultAdd1 = k1+(-linear(-contrlCurVal1,0,100,k1,k2)+k1);}" + "\n" + 
				"var myResult = resultAdd1+(inputValue-k1);" + "\n" + 
				"return myResult;}" + "\n" + 
				"function unArray(inKey){" + "\n" + 
				"    if(inKey instanceof Array && inKey.length === 1){" + "\n" + 
				"     return inKey[0];" + "\n" + 
				"      }else{" + "\n" + 
				"        return inKey;" + "\n" + 
				"     }" + "\n" + 
				"  }" + "\n" + 
				"slider(value);";
		} catch (err) {}
		try {
			ctrlLimbs.property("ADBE Effect Parade").property(1).property("Pseudo/EVT4.1 Limbs Control-0024").expression = "//////BEGIN SLIDER CODE//////" + "\n" + 
				"function slider (inputValue){" + "\n" + 
				"var contrl = thisComp.layer(\"Man Woman Slider\");var contrlCurVal1 = contrl(\"ADBE Effect Parade\")(1)(\"ADBE Slider Control-0001\");" + "\n" + 
				"var k1=[-38];" + "\n" + 
				"var k2=[-40];" + "\n" + 
				"k1= unArray(k1);" + "\n" + 
				"k2= unArray(k2);" + "\n" + 
				"if(contrlCurVal1 >=0){" + "\n" + 
				" var resultAdd1 = linear(contrlCurVal1,0,100,k1,k2);}else{var resultAdd1 = k1+(-linear(-contrlCurVal1,0,100,k1,k2)+k1);}" + "\n" + 
				"var myResult = resultAdd1+(inputValue-k1);" + "\n" + 
				"return myResult;}" + "\n" + 
				"function unArray(inKey){" + "\n" + 
				"    if(inKey instanceof Array && inKey.length === 1){" + "\n" + 
				"     return inKey[0];" + "\n" + 
				"      }else{" + "\n" + 
				"        return inKey;" + "\n" + 
				"     }" + "\n" + 
				"  }" + "\n" + 
				"slider(value);";
		} catch (err) {}
		try {
			ctrlLimbs.property("ADBE Effect Parade").property(1).property("Pseudo/EVT4.1 Limbs Control-0025").expression = "//////BEGIN SLIDER CODE//////" + "\n" + 
				"function slider (inputValue){" + "\n" + 
				"var contrl = thisComp.layer(\"Man Woman Slider\");var contrlCurVal1 = contrl(\"ADBE Effect Parade\")(1)(\"ADBE Slider Control-0001\");" + "\n" + 
				"var k1=[17];" + "\n" + 
				"var k2=[40];" + "\n" + 
				"k1= unArray(k1);" + "\n" + 
				"k2= unArray(k2);" + "\n" + 
				"if(contrlCurVal1 >=0){" + "\n" + 
				" var resultAdd1 = linear(contrlCurVal1,0,100,k1,k2);}else{var resultAdd1 = k1+(-linear(-contrlCurVal1,0,100,k1,k2)+k1);}" + "\n" + 
				"var myResult = resultAdd1+(inputValue-k1);" + "\n" + 
				"return myResult;}" + "\n" + 
				"function unArray(inKey){" + "\n" + 
				"    if(inKey instanceof Array && inKey.length === 1){" + "\n" + 
				"     return inKey[0];" + "\n" + 
				"      }else{" + "\n" + 
				"        return inKey;" + "\n" + 
				"     }" + "\n" + 
				"  }" + "\n" + 
				"slider(value);";
		} catch (err) {}
		try {
			eyebrowsPosition.property("ADBE Transform Group").property("ADBE Position").expression = "/////// BEGIN JOYSTICK CODE ///////" + "\n" + 
				"function joystick(inputResult){" + "\n" + 
				"    var easeOverride_right = null;" + "\n" + 
				"    var easeOverride_left =  null;" + "\n" + 
				"    var easeOverride_up =    null;" + "\n" + 
				"    var easeOverride_down =  null;" + "\n" + 
				"	var contrl = thisComp.layer(\"Ctrl Head\");" + "\n" + 
				"	var myLimit = contrl(\"ADBE Effect Parade\")(\"joystickLimit\")(\"ADBE Slider Control-0001\");" + "\n" + 
				"	var contrlCurVal = contrl(\"ADBE Transform Group\")(\"ADBE Position\");" + "\n" + 
				"	var resultVal;" + "\n" + 
				"	var key1 = [225,202.404251098633,0];" + "\n" + 
				"	var key2 = [244.512954711914,203.406433105469,0];" + "\n" + 
				"	var key3 = [206.571105957031,203.35075378418,0];" + "\n" + 
				"	var key4 = [225,183.630783081055,0];" + "\n" + 
				"	var key5 = [225,217.005844116211,0];" + "\n" + 
				"    key1 = unArray(key1);" + "\n" + 
				"    key2 = unArray(key2);" + "\n" + 
				"    key3 = unArray(key3);" + "\n" + 
				"    key4 = unArray(key4);" + "\n" + 
				"    key5 = unArray(key5);" + "\n" + 
				"	try{" + "\n" + 
				"        if(!thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\").active){" + "\n" + 
				"			throw (\"inactive\");" + "\n" + 
				"        }" + "\n" + 
				"		slideR = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0001\");" + "\n" + 
				"		slideL = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0002\");" + "\n" + 
				"		slideU = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0003\");" + "\n" + 
				"		slideD = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0004\");" + "\n" + 
				"	}catch(err){" + "\n" + 
				"		slideR = 0;" + "\n" + 
				"		slideL = 0;" + "\n" + 
				"		slideU = 0;" + "\n" + 
				"		slideD = 0;" + "\n" + 
				"	}" + "\n" + 
				"    if(easeOverride_right !== null && !isNaN(easeOverride_right)){" + "\n" + 
				"        slideR = moClamp(easeOverride_right,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_left !== null && !isNaN(easeOverride_left)){" + "\n" + 
				"        slideL = moClamp(easeOverride_left,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_up !== null && !isNaN(easeOverride_up)){" + "\n" + 
				"        slideU = moClamp(easeOverride_up,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_down !== null && !isNaN(easeOverride_down)){" + "\n" + 
				"        slideD = moClamp(easeOverride_down,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"	var easeResultX,easeResultY;" + "\n" + 
				"	if(contrlCurVal[0]>=0){" + "\n" + 
				"		resultVal = linear(contrlCurVal[0], 0, myLimit, key1, key2);" + "\n" + 
				"		if(slideR !==0){" + "\n" + 
				"			easeResultX = easeSwitch(contrlCurVal[0], 0, myLimit, key1, key2,slideR);" + "\n" + 
				"			resultVal = linear(Math.abs(slideR),0,100, resultVal,easeResultX);" + "\n" + 
				"		}" + "\n" + 
				"	}else{" + "\n" + 
				"		resultVal = linear(-contrlCurVal[0], 0, myLimit, key1, key3);" + "\n" + 
				"		if(slideL !==0){" + "\n" + 
				"			easeResultX = easeSwitch(-contrlCurVal[0], 0, myLimit, key1, key3,slideL);" + "\n" + 
				"			resultVal = linear(Math.abs(slideL),0,100, resultVal,easeResultX);" + "\n" + 
				"		}" + "\n" + 
				"	}" + "\n" + 
				"	var resultAdd = 0;" + "\n" + 
				"	if(contrlCurVal[1]<=0){" + "\n" + 
				"		resultAdd = linear(-contrlCurVal[1], 0, myLimit, key1, key4)- key1;" + "\n" + 
				"		if(slideU !==0){" + "\n" + 
				"			easeResultY = easeSwitch(-contrlCurVal[1], 0, myLimit, key1, key4,slideU)- key1;" + "\n" + 
				"			resultAdd = linear(Math.abs(slideU),0,100, resultAdd,easeResultY);" + "\n" + 
				"		}" + "\n" + 
				"	}else{" + "\n" + 
				"		resultAdd = linear(contrlCurVal[1], 0, myLimit, key1, key5)- key1;" + "\n" + 
				"		if(slideD!==0){" + "\n" + 
				"			easeResultY = easeSwitch(contrlCurVal[1], 0, myLimit, key1, key5,slideD)- key1;" + "\n" + 
				"			resultAdd = linear(Math.abs(slideD),0,100, resultAdd,easeResultY);" + "\n" + 
				"		}" + "\n" + 
				"	}" + "\n" + 
				"	return (resultVal+resultAdd)+(inputResult-key1);" + "\n" + 
				"}" + "\n" + 
				"function cosEase(val,min1,max1,input1,input2){" + "\n" + 
				"	var myCos = [];" + "\n" + 
				"    if(input1 instanceof Array){" + "\n" + 
				"        for(var x = 0; x < input1.length; x++){" + "\n" + 
				"            myCos.push(getMeCos(val, min1,max1,input1[x],input2[x]));" + "\n" + 
				"        }" + "\n" + 
				"    }else{ myCos = getMeCos(val, min1,max1,input1,input2);" + "\n" + 
				"	}return myCos;" + "\n" + 
				"	function getMeCos(val,min1,max1,input1,input2){" + "\n" + 
				"		var mapVal = moClamp(val/(max1-min1),0,1);" + "\n" + 
				"		var c = input2 - input1;" + "\n" + 
				"		var myCos2 = -c * Math.cos(mapVal * (Math.PI/2)) + c+ input1;" + "\n" + 
				"		return myCos2;" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"function sinEase(val,min1,max1,input1,input2){" + "\n" + 
				"	var mySin = [];" + "\n" + 
				"    if(input1 instanceof Array){" + "\n" + 
				"        for(var x = 0; x < input1.length; x++){" + "\n" + 
				"            mySin.push(getMeSin(val, min1,max1,input1[x],input2[x]));" + "\n" + 
				"        }" + "\n" + 
				"    }else{ mySin = getMeSin(val, min1,max1,input1,input2);" + "\n" + 
				"	}return mySin;" + "\n" + 
				"	function getMeSin(val,min1,max1,input1,input2){" + "\n" + 
				"		var mapVal = moClamp(val/(max1-min1),0,1);" + "\n" + 
				"		var c = input2 - input1;" + "\n" + 
				"		var mySin2 = c * Math.sin(mapVal * (Math.PI/2)) + input1;" + "\n" + 
				"		return mySin2;" + "\n" + 
				"    }" + "\n" + 
				"}" + "\n" + 
				"function easeSwitch(val,min1,max1,input1,input2,morph){" + "\n" + 
				"	if(morph < 0){" + "\n" + 
				"		return cosEase(val,min1,max1,input1,input2);" + "\n" + 
				"	}else{" + "\n" + 
				"		return sinEase(val,min1,max1,input1,input2);" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"function unArray(inKey){" + "\n" + 
				"    if(inKey instanceof Array && inKey.length === 1){" + "\n" + 
				"        return inKey[0];" + "\n" + 
				"    }else{" + "\n" + 
				"        return inKey;" + "\n" + 
				"    }" + "\n" + 
				"}" + "\n" + 
				"function moClamp(a,b,c){" + "\n" + 
				"	if(!(a instanceof Array)){" + "\n" + 
				"		return (Math.max(b, Math.min(c, a)));" + "\n" + 
				"	}else{" + "\n" + 
				"		var aryHold = [];" + "\n" + 
				"		for(var x = 0; x < a.length; x++){" + "\n" + 
				"			aryHold.push(Math.max(b, Math.min(c, a[x])));" + "\n" + 
				"		}return aryHold;" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"joystick(value);";
		} catch (err) {}
		try {
			armsLengthAdjustmentmw.property("ADBE Effect Parade").property(1).property("ADBE Slider Control-0001").expression = "//////BEGIN SLIDER CODE//////" + "\n" + 
				"function slider (inputValue){" + "\n" + 
				"var contrl = thisComp.layer(\"Man Woman Slider\");var contrlCurVal1 = contrl(\"ADBE Effect Parade\")(1)(\"ADBE Slider Control-0001\");" + "\n" + 
				"var k1=[0];" + "\n" + 
				"var k2=[0];" + "\n" + 
				"k1= unArray(k1);" + "\n" + 
				"k2= unArray(k2);" + "\n" + 
				"if(contrlCurVal1 >=0){" + "\n" + 
				" var resultAdd1 = linear(contrlCurVal1,0,100,k1,k2);}else{var resultAdd1 = k1+(-linear(-contrlCurVal1,0,100,k1,k2)+k1);}" + "\n" + 
				"var myResult = resultAdd1+(inputValue-k1);" + "\n" + 
				"return myResult;}" + "\n" + 
				"function unArray(inKey){" + "\n" + 
				"    if(inKey instanceof Array && inKey.length === 1){" + "\n" + 
				"     return inKey[0];" + "\n" + 
				"      }else{" + "\n" + 
				"        return inKey;" + "\n" + 
				"     }" + "\n" + 
				"  }" + "\n" + 
				"slider(value);";
		} catch (err) {}
		try {
			mouthAdjustment.property("ADBE Transform Group").property("ADBE Position").expression = "//////BEGIN SLIDER CODE//////" + "\n" + 
				"function slider (inputValue){" + "\n" + 
				"var contrl = thisComp.layer(\"Man Woman Slider\");var contrlCurVal1 = contrl(\"ADBE Effect Parade\")(1)(\"ADBE Slider Control-0001\");" + "\n" + 
				"var k1=[225.265960693359,261.109039306641,0];" + "\n" + 
				"var k2=[225.265960693359,254.726058959961,0];" + "\n" + 
				"k1= unArray(k1);" + "\n" + 
				"k2= unArray(k2);" + "\n" + 
				"if(contrlCurVal1 >=0){" + "\n" + 
				" var resultAdd1 = linear(contrlCurVal1,0,100,k1,k2);}else{var resultAdd1 = k1+(-linear(-contrlCurVal1,0,100,k1,k2)+k1);}" + "\n" + 
				"var myResult = resultAdd1+(inputValue-k1);" + "\n" + 
				"return myResult;}" + "\n" + 
				"function unArray(inKey){" + "\n" + 
				"    if(inKey instanceof Array && inKey.length === 1){" + "\n" + 
				"     return inKey[0];" + "\n" + 
				"      }else{" + "\n" + 
				"        return inKey;" + "\n" + 
				"     }" + "\n" + 
				"  }" + "\n" + 
				"slider(value);";
		} catch (err) {}
		try {
			mouthAdjustment.property("ADBE Transform Group").property("ADBE Scale").expression = "//////BEGIN SLIDER CODE//////" + "\n" + 
				"function slider (inputValue){" + "\n" + 
				"var contrl = thisComp.layer(\"Man Woman Slider\");var contrlCurVal1 = contrl(\"ADBE Effect Parade\")(1)(\"ADBE Slider Control-0001\");" + "\n" + 
				"var k1=[100,100,100];" + "\n" + 
				"var k2=[90,90,100];" + "\n" + 
				"k1= unArray(k1);" + "\n" + 
				"k2= unArray(k2);" + "\n" + 
				"if(contrlCurVal1 >=0){" + "\n" + 
				" var resultAdd1 = linear(contrlCurVal1,0,100,k1,k2);}else{var resultAdd1 = k1+(-linear(-contrlCurVal1,0,100,k1,k2)+k1);}" + "\n" + 
				"var myResult = resultAdd1+(inputValue-k1);" + "\n" + 
				"return myResult;}" + "\n" + 
				"function unArray(inKey){" + "\n" + 
				"    if(inKey instanceof Array && inKey.length === 1){" + "\n" + 
				"     return inKey[0];" + "\n" + 
				"      }else{" + "\n" + 
				"        return inKey;" + "\n" + 
				"     }" + "\n" + 
				"  }" + "\n" + 
				"slider(value);";
		} catch (err) {}
		try {
			ctrlEyebrowsOrigin.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").expression = "/////BEGIN LIMIT CODE//////" + "\n" + 
				"     temp = thisComp.layer(\"Ctrl Eyebrows\")(\"ADBE Effect Parade\")(\"joystickLimit\")(\"ADBE Slider Control-0001\")*2;" + "\n" + 
				"       [temp,temp];";
		} catch (err) {}
		try {
			ctrlEyesPositionOrigin.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").expression = "/////BEGIN LIMIT CODE//////" + "\n" + 
				"     temp = thisComp.layer(\"Ctrl Eyes Position\")(\"ADBE Effect Parade\")(\"joystickLimit\")(\"ADBE Slider Control-0001\")*2;" + "\n" + 
				"       [temp,temp];";
		} catch (err) {}
		try {
			ctrlHeadOrigin.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").expression = "/////BEGIN LIMIT CODE//////" + "\n" + 
				"     temp = thisComp.layer(\"Ctrl Head\")(\"ADBE Effect Parade\")(\"joystickLimit\")(\"ADBE Slider Control-0001\")*2;" + "\n" + 
				"       [temp,temp];";
		} catch (err) {}
		try {
			handL.property("ADBE Transform Group").property("ADBE Position").expression = "W=thisComp.layer(\"Ctrl Limbs\").effect(\"EVT4.1 Limbs Control\");" + "\n" + 
				"" + "\n" + 
				"BL=W(14);" + "\n" + 
				"" + "\n" + 
				"L=W(2);" + "\n" + 
				"" + "\n" + 
				"T=W(8);" + "\n" + 
				"" + "\n" + 
				"BT=W(18);" + "\n" + 
				"" + "\n" + 
				"[transform.position[0], transform.position[1]+(L-BL)/2-((T-BT)/2)];" + "\n" + 
				"";
		} catch (err) {}
		try {
			handL.property("ADBE Transform Group").property("ADBE Scale").expression = "temp = thisComp.layer(\"Ctrl Limbs\").effect(\"EVT4.1 Limbs Control\")(8);" + "\n" + 
				"" + "\n" + 
				"[temp, temp]";
		} catch (err) {}
		try {
			handL.property("ADBE Transform Group").property("ADBE Rotate Z").expression = "thisComp.layer(\"C_HAND L\").transform.rotation";
		} catch (err) {}
		try {
			forearmL.property("ADBE Transform Group").property("ADBE Anchor Point").expression = "W=thisComp.layer(\"Ctrl Limbs\").effect(\"EVT4.1 Limbs Control\");" + "\n" + 
				"" + "\n" + 
				"BL=W(14);" + "\n" + 
				"" + "\n" + 
				"L=W(2);" + "\n" + 
				"" + "\n" + 
				"T=W(8);" + "\n" + 
				"" + "\n" + 
				"BT=W(18);" + "\n" + 
				"" + "\n" + 
				"[transform.anchorPoint[0],transform.anchorPoint[1]-(L-BL)/2+((T-BT)/2)];";
		} catch (err) {}
		try {
			forearmL.property("ADBE Transform Group").property("ADBE Position").expression = "W=thisComp.layer(\"Ctrl Limbs\").effect(\"EVT4.1 Limbs Control\");" + "\n" + 
				"" + "\n" + 
				"BL=W(14);" + "\n" + 
				"" + "\n" + 
				"L=W(2);" + "\n" + 
				"" + "\n" + 
				"T=W(8);" + "\n" + 
				"" + "\n" + 
				"BT=W(18);" + "\n" + 
				"" + "\n" + 
				"[transform.position[0], transform.position[1]+(L-BL-((L-BL)/2))-((T-BT)/2)];" + "\n" + 
				"" + "\n" + 
				"" + "\n" + 
				"";
		} catch (err) {}
		try {
			forearmL.property("ADBE Transform Group").property("ADBE Rotate Z").expression = "//EVT4.1 Rig" + "\n" + 
				"" + "\n" + 
				"layer1 = thisComp.layer(\"UPPER ARM L\");" + "\n" + 
				"" + "\n" + 
				"layer2 = thisComp.layer(\"FOREARM L\");" + "\n" + 
				"" + "\n" + 
				"layer3 = thisComp.layer(\"HAND L\");" + "\n" + 
				"" + "\n" + 
				"controller = thisComp.layer(\"C_HAND L\");" + "\n" + 
				"" + "\n" + 
				"ctrlEffect = controller.effect(\"EVT4.1 Rig Control\")" + "\n" + 
				"" + "\n" + 
				"FK = ctrlEffect(6);" + "\n" + 
				"" + "\n" + 
				"IKFK = ctrlEffect(4) == 0;" + "\n" + 
				"" + "\n" + 
				"cw = ctrlEffect(1) == 0;" + "\n" + 
				"" + "\n" + 
				"function getWorldPos(L){" + "\n" + 
				"" + "\n" + 
				"return L.toWorld(L.anchorPoint);" + "\n" + 
				"" + "\n" + 
				"}" + "\n" + 
				"" + "\n" + 
				"function ik() {" + "\n" + 
				"" + "\n" + 
				"A = getWorldPos(layer1);" + "\n" + 
				"" + "\n" + 
				"B = getWorldPos(layer2);" + "\n" + 
				"" + "\n" + 
				"C = getWorldPos(layer3);" + "\n" + 
				"" + "\n" + 
				"E = getWorldPos(controller);" + "\n" + 
				"" + "\n" + 
				"a = length(B,C);" + "\n" + 
				"" + "\n" + 
				"b = length(E,A);" + "\n" + 
				"" + "\n" + 
				"c = length(A,B);" + "\n" + 
				"" + "\n" + 
				"x = (b*b + c*c - a*a )/(2*b);" + "\n" + 
				"" + "\n" + 
				"alpha = Math.acos(clamp(x/c,-1,1));" + "\n" + 
				"" + "\n" + 
				"y = b - x;" + "\n" + 
				"" + "\n" + 
				"  gamma = Math.acos(clamp(y/a,-1,1));" + "\n" + 
				"" + "\n" + 
				"result = (cw ? 1 : -1)*radiansToDegrees(gamma + alpha);  V1 = B - A;" + "\n" + 
				"" + "\n" + 
				"  adj1 = radiansToDegrees(Math.atan2(V1[1],V1[0]));" + "\n" + 
				"" + "\n" + 
				"  V2 = C - B;" + "\n" + 
				"" + "\n" + 
				"  adj2 = radiansToDegrees(Math.atan2(V2[1],V2[0]));" + "\n" + 
				"" + "\n" + 
				"  IK = result +  adj1 - adj2 + value;" + "\n" + 
				"" + "\n" + 
				"return IK;" + "\n" + 
				"" + "\n" + 
				"}" + "\n" + 
				"" + "\n" + 
				"IKFK ? ik() : FK;";
		} catch (err) {}
		try {
			upperArmL.property("ADBE Transform Group").property("ADBE Anchor Point").expression = "W=thisComp.layer(\"Ctrl Limbs\").effect(\"EVT4.1 Limbs Control\");" + "\n" + 
				"" + "\n" + 
				"BL=W(14);" + "\n" + 
				"" + "\n" + 
				"L=W(2);" + "\n" + 
				"" + "\n" + 
				"T=W(8);" + "\n" + 
				"" + "\n" + 
				"BT=W(18);" + "\n" + 
				"" + "\n" + 
				"[transform.anchorPoint[0],transform.anchorPoint[1]-(L-BL)/2+((T-BT)/2)];";
		} catch (err) {}
		try {
			upperArmL.property("ADBE Transform Group").property("ADBE Position").expression = "W=thisComp.layer(\"Ctrl Limbs\").effect(\"EVT4.1 Limbs Control\");" + "\n" + 
				"" + "\n" + 
				"BL=W(16);" + "\n" + 
				"" + "\n" + 
				"L=W(4);" + "\n" + 
				"" + "\n" + 
				"T=W(10);" + "\n" + 
				"" + "\n" + 
				"BT=W(20);" + "\n" + 
				"" + "\n" + 
				"SS=W(24);" + "\n" + 
				"" + "\n" + 
				"[transform.position[0]+((BT-T)/2)-SS, transform.position[1]+((BL-L)/2)];" + "\n" + 
				"";
		} catch (err) {}
		try {
			upperArmL.property("ADBE Transform Group").property("ADBE Rotate Z").expression = "//EVT4.1 Rig" + "\n" + 
				"" + "\n" + 
				"layer1 = thisComp.layer(\"UPPER ARM L\");" + "\n" + 
				"" + "\n" + 
				"layer2 = thisComp.layer(\"FOREARM L\");" + "\n" + 
				"" + "\n" + 
				"layer3 = thisComp.layer(\"HAND L\");" + "\n" + 
				"" + "\n" + 
				"controller = thisComp.layer(\"C_HAND L\");" + "\n" + 
				"" + "\n" + 
				"ctrlEffect = controller.effect(\"EVT4.1 Rig Control\")" + "\n" + 
				"" + "\n" + 
				"limit = effect(\"IK Limit\")(1);" + "\n" + 
				"" + "\n" + 
				"FK = ctrlEffect(5);" + "\n" + 
				"" + "\n" + 
				"IKFK = ctrlEffect(4) == 0;" + "\n" + 
				"" + "\n" + 
				"cw = ctrlEffect(1) == 0;" + "\n" + 
				"" + "\n" + 
				"function getWorldPos(L){" + "\n" + 
				"" + "\n" + 
				"return L.toWorld(L.anchorPoint);" + "\n" + 
				"" + "\n" + 
				"}" + "\n" + 
				"" + "\n" + 
				"function ik() {" + "\n" + 
				"" + "\n" + 
				"A = getWorldPos(layer1);" + "\n" + 
				"" + "\n" + 
				"B = getWorldPos(layer2);" + "\n" + 
				"" + "\n" + 
				"C = getWorldPos(layer3);" + "\n" + 
				"" + "\n" + 
				"E = getWorldPos(controller);" + "\n" + 
				"" + "\n" + 
				"a = length(B,C);" + "\n" + 
				"" + "\n" + 
				"b = length(E,A);" + "\n" + 
				"" + "\n" + 
				"c = length(A,B);" + "\n" + 
				"" + "\n" + 
				"x = (b*b + c*c - a*a )/(2*b);" + "\n" + 
				"" + "\n" + 
				"alpha = Math.acos(clamp(x/c,-1,1));" + "\n" + 
				"" + "\n" + 
				"D = E - A;" + "\n" + 
				"" + "\n" + 
				"delta = Math.atan2(D[1],D[0]);" + "\n" + 
				"" + "\n" + 
				"result = radiansToDegrees(delta - (cw ? 1 : -1)*alpha);" + "\n" + 
				"" + "\n" + 
				"V = B - A;" + "\n" + 
				"" + "\n" + 
				"adj1 = radiansToDegrees(Math.atan2(V[1],V[0]));" + "\n" + 
				"" + "\n" + 
				"IK = result - adj1 + value;" + "\n" + 
				"" + "\n" + 
				"if (IK < limit) IK+=360;" + "\n" + 
				"" + "\n" + 
				"return IK;" + "\n" + 
				"" + "\n" + 
				"}" + "\n" + 
				"" + "\n" + 
				"IKFK ? ik() : FK;";
		} catch (err) {}
		try {
			eyebrowR.property("ADBE Transform Group").property("ADBE Position").expression = "/////// BEGIN JOYSTICK CODE ///////" + "\n" + 
				"function joystick(inputResult){" + "\n" + 
				"    var easeOverride_right = null;" + "\n" + 
				"    var easeOverride_left =  null;" + "\n" + 
				"    var easeOverride_up =    null;" + "\n" + 
				"    var easeOverride_down =  null;" + "\n" + 
				"	var contrl = thisComp.layer(\"Ctrl Eyebrows\");" + "\n" + 
				"	var myLimit = contrl(\"ADBE Effect Parade\")(\"joystickLimit\")(\"ADBE Slider Control-0001\");" + "\n" + 
				"	var contrlCurVal = contrl(\"ADBE Transform Group\")(\"ADBE Position\");" + "\n" + 
				"	var resultVal;" + "\n" + 
				"	var key1 = [261.3125,202.75,0];" + "\n" + 
				"	var key2 = [261.8125,203.75,0];" + "\n" + 
				"	var key3 = [261.8125,189.75,0];" + "\n" + 
				"	var key4 = [262.8125,197.75,0];" + "\n" + 
				"	var key5 = [259.8125,207.75,0];" + "\n" + 
				"    key1 = unArray(key1);" + "\n" + 
				"    key2 = unArray(key2);" + "\n" + 
				"    key3 = unArray(key3);" + "\n" + 
				"    key4 = unArray(key4);" + "\n" + 
				"    key5 = unArray(key5);" + "\n" + 
				"	try{" + "\n" + 
				"        if(!thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\").active){" + "\n" + 
				"			throw (\"inactive\");" + "\n" + 
				"        }" + "\n" + 
				"		slideR = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0001\");" + "\n" + 
				"		slideL = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0002\");" + "\n" + 
				"		slideU = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0003\");" + "\n" + 
				"		slideD = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0004\");" + "\n" + 
				"	}catch(err){" + "\n" + 
				"		slideR = 0;" + "\n" + 
				"		slideL = 0;" + "\n" + 
				"		slideU = 0;" + "\n" + 
				"		slideD = 0;" + "\n" + 
				"	}" + "\n" + 
				"    if(easeOverride_right !== null && !isNaN(easeOverride_right)){" + "\n" + 
				"        slideR = moClamp(easeOverride_right,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_left !== null && !isNaN(easeOverride_left)){" + "\n" + 
				"        slideL = moClamp(easeOverride_left,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_up !== null && !isNaN(easeOverride_up)){" + "\n" + 
				"        slideU = moClamp(easeOverride_up,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_down !== null && !isNaN(easeOverride_down)){" + "\n" + 
				"        slideD = moClamp(easeOverride_down,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"	var easeResultX,easeResultY;" + "\n" + 
				"	if(contrlCurVal[0]>=0){" + "\n" + 
				"		resultVal = linear(contrlCurVal[0], 0, myLimit, key1, key2);" + "\n" + 
				"		if(slideR !==0){" + "\n" + 
				"			easeResultX = easeSwitch(contrlCurVal[0], 0, myLimit, key1, key2,slideR);" + "\n" + 
				"			resultVal = linear(Math.abs(slideR),0,100, resultVal,easeResultX);" + "\n" + 
				"		}" + "\n" + 
				"	}else{" + "\n" + 
				"		resultVal = linear(-contrlCurVal[0], 0, myLimit, key1, key3);" + "\n" + 
				"		if(slideL !==0){" + "\n" + 
				"			easeResultX = easeSwitch(-contrlCurVal[0], 0, myLimit, key1, key3,slideL);" + "\n" + 
				"			resultVal = linear(Math.abs(slideL),0,100, resultVal,easeResultX);" + "\n" + 
				"		}" + "\n" + 
				"	}" + "\n" + 
				"	var resultAdd = 0;" + "\n" + 
				"	if(contrlCurVal[1]<=0){" + "\n" + 
				"		resultAdd = linear(-contrlCurVal[1], 0, myLimit, key1, key4)- key1;" + "\n" + 
				"		if(slideU !==0){" + "\n" + 
				"			easeResultY = easeSwitch(-contrlCurVal[1], 0, myLimit, key1, key4,slideU)- key1;" + "\n" + 
				"			resultAdd = linear(Math.abs(slideU),0,100, resultAdd,easeResultY);" + "\n" + 
				"		}" + "\n" + 
				"	}else{" + "\n" + 
				"		resultAdd = linear(contrlCurVal[1], 0, myLimit, key1, key5)- key1;" + "\n" + 
				"		if(slideD!==0){" + "\n" + 
				"			easeResultY = easeSwitch(contrlCurVal[1], 0, myLimit, key1, key5,slideD)- key1;" + "\n" + 
				"			resultAdd = linear(Math.abs(slideD),0,100, resultAdd,easeResultY);" + "\n" + 
				"		}" + "\n" + 
				"	}" + "\n" + 
				"	return (resultVal+resultAdd)+(inputResult-key1);" + "\n" + 
				"}" + "\n" + 
				"function cosEase(val,min1,max1,input1,input2){" + "\n" + 
				"	var myCos = [];" + "\n" + 
				"    if(input1 instanceof Array){" + "\n" + 
				"        for(var x = 0; x < input1.length; x++){" + "\n" + 
				"            myCos.push(getMeCos(val, min1,max1,input1[x],input2[x]));" + "\n" + 
				"        }" + "\n" + 
				"    }else{ myCos = getMeCos(val, min1,max1,input1,input2);" + "\n" + 
				"	}return myCos;" + "\n" + 
				"	function getMeCos(val,min1,max1,input1,input2){" + "\n" + 
				"		var mapVal = moClamp(val/(max1-min1),0,1);" + "\n" + 
				"		var c = input2 - input1;" + "\n" + 
				"		var myCos2 = -c * Math.cos(mapVal * (Math.PI/2)) + c+ input1;" + "\n" + 
				"		return myCos2;" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"function sinEase(val,min1,max1,input1,input2){" + "\n" + 
				"	var mySin = [];" + "\n" + 
				"    if(input1 instanceof Array){" + "\n" + 
				"        for(var x = 0; x < input1.length; x++){" + "\n" + 
				"            mySin.push(getMeSin(val, min1,max1,input1[x],input2[x]));" + "\n" + 
				"        }" + "\n" + 
				"    }else{ mySin = getMeSin(val, min1,max1,input1,input2);" + "\n" + 
				"	}return mySin;" + "\n" + 
				"	function getMeSin(val,min1,max1,input1,input2){" + "\n" + 
				"		var mapVal = moClamp(val/(max1-min1),0,1);" + "\n" + 
				"		var c = input2 - input1;" + "\n" + 
				"		var mySin2 = c * Math.sin(mapVal * (Math.PI/2)) + input1;" + "\n" + 
				"		return mySin2;" + "\n" + 
				"    }" + "\n" + 
				"}" + "\n" + 
				"function easeSwitch(val,min1,max1,input1,input2,morph){" + "\n" + 
				"	if(morph < 0){" + "\n" + 
				"		return cosEase(val,min1,max1,input1,input2);" + "\n" + 
				"	}else{" + "\n" + 
				"		return sinEase(val,min1,max1,input1,input2);" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"function unArray(inKey){" + "\n" + 
				"    if(inKey instanceof Array && inKey.length === 1){" + "\n" + 
				"        return inKey[0];" + "\n" + 
				"    }else{" + "\n" + 
				"        return inKey;" + "\n" + 
				"    }" + "\n" + 
				"}" + "\n" + 
				"function moClamp(a,b,c){" + "\n" + 
				"	if(!(a instanceof Array)){" + "\n" + 
				"		return (Math.max(b, Math.min(c, a)));" + "\n" + 
				"	}else{" + "\n" + 
				"		var aryHold = [];" + "\n" + 
				"		for(var x = 0; x < a.length; x++){" + "\n" + 
				"			aryHold.push(Math.max(b, Math.min(c, a[x])));" + "\n" + 
				"		}return aryHold;" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"joystick(value);";
		} catch (err) {}
		try {
			eyebrowR.property("ADBE Transform Group").property("ADBE Scale").expression = "/////// BEGIN JOYSTICK CODE ///////" + "\n" + 
				"function joystick(inputResult){" + "\n" + 
				"    var easeOverride_right = null;" + "\n" + 
				"    var easeOverride_left =  null;" + "\n" + 
				"    var easeOverride_up =    null;" + "\n" + 
				"    var easeOverride_down =  null;" + "\n" + 
				"	var contrl = thisComp.layer(\"Ctrl Head\");" + "\n" + 
				"	var myLimit = contrl(\"ADBE Effect Parade\")(\"joystickLimit\")(\"ADBE Slider Control-0001\");" + "\n" + 
				"	var contrlCurVal = contrl(\"ADBE Transform Group\")(\"ADBE Position\");" + "\n" + 
				"	var resultVal;" + "\n" + 
				"	var key1 = [100,100,100];" + "\n" + 
				"	var key2 = [80,100,100];" + "\n" + 
				"	var key3 = [100,100,100];" + "\n" + 
				"	var key4 = [100,100,100];" + "\n" + 
				"	var key5 = [100,100,100];" + "\n" + 
				"    key1 = unArray(key1);" + "\n" + 
				"    key2 = unArray(key2);" + "\n" + 
				"    key3 = unArray(key3);" + "\n" + 
				"    key4 = unArray(key4);" + "\n" + 
				"    key5 = unArray(key5);" + "\n" + 
				"	try{" + "\n" + 
				"        if(!thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\").active){" + "\n" + 
				"			throw (\"inactive\");" + "\n" + 
				"        }" + "\n" + 
				"		slideR = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0001\");" + "\n" + 
				"		slideL = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0002\");" + "\n" + 
				"		slideU = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0003\");" + "\n" + 
				"		slideD = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0004\");" + "\n" + 
				"	}catch(err){" + "\n" + 
				"		slideR = 0;" + "\n" + 
				"		slideL = 0;" + "\n" + 
				"		slideU = 0;" + "\n" + 
				"		slideD = 0;" + "\n" + 
				"	}" + "\n" + 
				"    if(easeOverride_right !== null && !isNaN(easeOverride_right)){" + "\n" + 
				"        slideR = moClamp(easeOverride_right,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_left !== null && !isNaN(easeOverride_left)){" + "\n" + 
				"        slideL = moClamp(easeOverride_left,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_up !== null && !isNaN(easeOverride_up)){" + "\n" + 
				"        slideU = moClamp(easeOverride_up,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_down !== null && !isNaN(easeOverride_down)){" + "\n" + 
				"        slideD = moClamp(easeOverride_down,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"	var easeResultX,easeResultY;" + "\n" + 
				"	if(contrlCurVal[0]>=0){" + "\n" + 
				"		resultVal = linear(contrlCurVal[0], 0, myLimit, key1, key2);" + "\n" + 
				"		if(slideR !==0){" + "\n" + 
				"			easeResultX = easeSwitch(contrlCurVal[0], 0, myLimit, key1, key2,slideR);" + "\n" + 
				"			resultVal = linear(Math.abs(slideR),0,100, resultVal,easeResultX);" + "\n" + 
				"		}" + "\n" + 
				"	}else{" + "\n" + 
				"		resultVal = linear(-contrlCurVal[0], 0, myLimit, key1, key3);" + "\n" + 
				"		if(slideL !==0){" + "\n" + 
				"			easeResultX = easeSwitch(-contrlCurVal[0], 0, myLimit, key1, key3,slideL);" + "\n" + 
				"			resultVal = linear(Math.abs(slideL),0,100, resultVal,easeResultX);" + "\n" + 
				"		}" + "\n" + 
				"	}" + "\n" + 
				"	var resultAdd = 0;" + "\n" + 
				"	if(contrlCurVal[1]<=0){" + "\n" + 
				"		resultAdd = linear(-contrlCurVal[1], 0, myLimit, key1, key4)- key1;" + "\n" + 
				"		if(slideU !==0){" + "\n" + 
				"			easeResultY = easeSwitch(-contrlCurVal[1], 0, myLimit, key1, key4,slideU)- key1;" + "\n" + 
				"			resultAdd = linear(Math.abs(slideU),0,100, resultAdd,easeResultY);" + "\n" + 
				"		}" + "\n" + 
				"	}else{" + "\n" + 
				"		resultAdd = linear(contrlCurVal[1], 0, myLimit, key1, key5)- key1;" + "\n" + 
				"		if(slideD!==0){" + "\n" + 
				"			easeResultY = easeSwitch(contrlCurVal[1], 0, myLimit, key1, key5,slideD)- key1;" + "\n" + 
				"			resultAdd = linear(Math.abs(slideD),0,100, resultAdd,easeResultY);" + "\n" + 
				"		}" + "\n" + 
				"	}" + "\n" + 
				"	return (resultVal+resultAdd)+(inputResult-key1);" + "\n" + 
				"}" + "\n" + 
				"function cosEase(val,min1,max1,input1,input2){" + "\n" + 
				"	var myCos = [];" + "\n" + 
				"    if(input1 instanceof Array){" + "\n" + 
				"        for(var x = 0; x < input1.length; x++){" + "\n" + 
				"            myCos.push(getMeCos(val, min1,max1,input1[x],input2[x]));" + "\n" + 
				"        }" + "\n" + 
				"    }else{ myCos = getMeCos(val, min1,max1,input1,input2);" + "\n" + 
				"	}return myCos;" + "\n" + 
				"	function getMeCos(val,min1,max1,input1,input2){" + "\n" + 
				"		var mapVal = moClamp(val/(max1-min1),0,1);" + "\n" + 
				"		var c = input2 - input1;" + "\n" + 
				"		var myCos2 = -c * Math.cos(mapVal * (Math.PI/2)) + c+ input1;" + "\n" + 
				"		return myCos2;" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"function sinEase(val,min1,max1,input1,input2){" + "\n" + 
				"	var mySin = [];" + "\n" + 
				"    if(input1 instanceof Array){" + "\n" + 
				"        for(var x = 0; x < input1.length; x++){" + "\n" + 
				"            mySin.push(getMeSin(val, min1,max1,input1[x],input2[x]));" + "\n" + 
				"        }" + "\n" + 
				"    }else{ mySin = getMeSin(val, min1,max1,input1,input2);" + "\n" + 
				"	}return mySin;" + "\n" + 
				"	function getMeSin(val,min1,max1,input1,input2){" + "\n" + 
				"		var mapVal = moClamp(val/(max1-min1),0,1);" + "\n" + 
				"		var c = input2 - input1;" + "\n" + 
				"		var mySin2 = c * Math.sin(mapVal * (Math.PI/2)) + input1;" + "\n" + 
				"		return mySin2;" + "\n" + 
				"    }" + "\n" + 
				"}" + "\n" + 
				"function easeSwitch(val,min1,max1,input1,input2,morph){" + "\n" + 
				"	if(morph < 0){" + "\n" + 
				"		return cosEase(val,min1,max1,input1,input2);" + "\n" + 
				"	}else{" + "\n" + 
				"		return sinEase(val,min1,max1,input1,input2);" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"function unArray(inKey){" + "\n" + 
				"    if(inKey instanceof Array && inKey.length === 1){" + "\n" + 
				"        return inKey[0];" + "\n" + 
				"    }else{" + "\n" + 
				"        return inKey;" + "\n" + 
				"    }" + "\n" + 
				"}" + "\n" + 
				"function moClamp(a,b,c){" + "\n" + 
				"	if(!(a instanceof Array)){" + "\n" + 
				"		return (Math.max(b, Math.min(c, a)));" + "\n" + 
				"	}else{" + "\n" + 
				"		var aryHold = [];" + "\n" + 
				"		for(var x = 0; x < a.length; x++){" + "\n" + 
				"			aryHold.push(Math.max(b, Math.min(c, a[x])));" + "\n" + 
				"		}return aryHold;" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"joystick(value);";
		} catch (err) {}
		try {
			eyebrowR.property("ADBE Transform Group").property("ADBE Rotate Z").expression = "/////// BEGIN JOYSTICK CODE ///////" + "\n" + 
				"function joystick(inputResult){" + "\n" + 
				"    var easeOverride_right = null;" + "\n" + 
				"    var easeOverride_left =  null;" + "\n" + 
				"    var easeOverride_up =    null;" + "\n" + 
				"    var easeOverride_down =  null;" + "\n" + 
				"	var contrl = thisComp.layer(\"Ctrl Eyebrows\");" + "\n" + 
				"	var myLimit = contrl(\"ADBE Effect Parade\")(\"joystickLimit\")(\"ADBE Slider Control-0001\");" + "\n" + 
				"	var contrlCurVal = contrl(\"ADBE Transform Group\")(\"ADBE Position\");" + "\n" + 
				"	var resultVal;" + "\n" + 
				"	var key1 = [0];" + "\n" + 
				"	var key2 = [5];" + "\n" + 
				"	var key3 = [-14];" + "\n" + 
				"	var key4 = [20];" + "\n" + 
				"	var key5 = [-25];" + "\n" + 
				"    key1 = unArray(key1);" + "\n" + 
				"    key2 = unArray(key2);" + "\n" + 
				"    key3 = unArray(key3);" + "\n" + 
				"    key4 = unArray(key4);" + "\n" + 
				"    key5 = unArray(key5);" + "\n" + 
				"	try{" + "\n" + 
				"        if(!thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\").active){" + "\n" + 
				"			throw (\"inactive\");" + "\n" + 
				"        }" + "\n" + 
				"		slideR = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0001\");" + "\n" + 
				"		slideL = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0002\");" + "\n" + 
				"		slideU = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0003\");" + "\n" + 
				"		slideD = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0004\");" + "\n" + 
				"	}catch(err){" + "\n" + 
				"		slideR = 0;" + "\n" + 
				"		slideL = 0;" + "\n" + 
				"		slideU = 0;" + "\n" + 
				"		slideD = 0;" + "\n" + 
				"	}" + "\n" + 
				"    if(easeOverride_right !== null && !isNaN(easeOverride_right)){" + "\n" + 
				"        slideR = moClamp(easeOverride_right,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_left !== null && !isNaN(easeOverride_left)){" + "\n" + 
				"        slideL = moClamp(easeOverride_left,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_up !== null && !isNaN(easeOverride_up)){" + "\n" + 
				"        slideU = moClamp(easeOverride_up,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_down !== null && !isNaN(easeOverride_down)){" + "\n" + 
				"        slideD = moClamp(easeOverride_down,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"	var easeResultX,easeResultY;" + "\n" + 
				"	if(contrlCurVal[0]>=0){" + "\n" + 
				"		resultVal = linear(contrlCurVal[0], 0, myLimit, key1, key2);" + "\n" + 
				"		if(slideR !==0){" + "\n" + 
				"			easeResultX = easeSwitch(contrlCurVal[0], 0, myLimit, key1, key2,slideR);" + "\n" + 
				"			resultVal = linear(Math.abs(slideR),0,100, resultVal,easeResultX);" + "\n" + 
				"		}" + "\n" + 
				"	}else{" + "\n" + 
				"		resultVal = linear(-contrlCurVal[0], 0, myLimit, key1, key3);" + "\n" + 
				"		if(slideL !==0){" + "\n" + 
				"			easeResultX = easeSwitch(-contrlCurVal[0], 0, myLimit, key1, key3,slideL);" + "\n" + 
				"			resultVal = linear(Math.abs(slideL),0,100, resultVal,easeResultX);" + "\n" + 
				"		}" + "\n" + 
				"	}" + "\n" + 
				"	var resultAdd = 0;" + "\n" + 
				"	if(contrlCurVal[1]<=0){" + "\n" + 
				"		resultAdd = linear(-contrlCurVal[1], 0, myLimit, key1, key4)- key1;" + "\n" + 
				"		if(slideU !==0){" + "\n" + 
				"			easeResultY = easeSwitch(-contrlCurVal[1], 0, myLimit, key1, key4,slideU)- key1;" + "\n" + 
				"			resultAdd = linear(Math.abs(slideU),0,100, resultAdd,easeResultY);" + "\n" + 
				"		}" + "\n" + 
				"	}else{" + "\n" + 
				"		resultAdd = linear(contrlCurVal[1], 0, myLimit, key1, key5)- key1;" + "\n" + 
				"		if(slideD!==0){" + "\n" + 
				"			easeResultY = easeSwitch(contrlCurVal[1], 0, myLimit, key1, key5,slideD)- key1;" + "\n" + 
				"			resultAdd = linear(Math.abs(slideD),0,100, resultAdd,easeResultY);" + "\n" + 
				"		}" + "\n" + 
				"	}" + "\n" + 
				"	return (resultVal+resultAdd)+(inputResult-key1);" + "\n" + 
				"}" + "\n" + 
				"function cosEase(val,min1,max1,input1,input2){" + "\n" + 
				"	var myCos = [];" + "\n" + 
				"    if(input1 instanceof Array){" + "\n" + 
				"        for(var x = 0; x < input1.length; x++){" + "\n" + 
				"            myCos.push(getMeCos(val, min1,max1,input1[x],input2[x]));" + "\n" + 
				"        }" + "\n" + 
				"    }else{ myCos = getMeCos(val, min1,max1,input1,input2);" + "\n" + 
				"	}return myCos;" + "\n" + 
				"	function getMeCos(val,min1,max1,input1,input2){" + "\n" + 
				"		var mapVal = moClamp(val/(max1-min1),0,1);" + "\n" + 
				"		var c = input2 - input1;" + "\n" + 
				"		var myCos2 = -c * Math.cos(mapVal * (Math.PI/2)) + c+ input1;" + "\n" + 
				"		return myCos2;" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"function sinEase(val,min1,max1,input1,input2){" + "\n" + 
				"	var mySin = [];" + "\n" + 
				"    if(input1 instanceof Array){" + "\n" + 
				"        for(var x = 0; x < input1.length; x++){" + "\n" + 
				"            mySin.push(getMeSin(val, min1,max1,input1[x],input2[x]));" + "\n" + 
				"        }" + "\n" + 
				"    }else{ mySin = getMeSin(val, min1,max1,input1,input2);" + "\n" + 
				"	}return mySin;" + "\n" + 
				"	function getMeSin(val,min1,max1,input1,input2){" + "\n" + 
				"		var mapVal = moClamp(val/(max1-min1),0,1);" + "\n" + 
				"		var c = input2 - input1;" + "\n" + 
				"		var mySin2 = c * Math.sin(mapVal * (Math.PI/2)) + input1;" + "\n" + 
				"		return mySin2;" + "\n" + 
				"    }" + "\n" + 
				"}" + "\n" + 
				"function easeSwitch(val,min1,max1,input1,input2,morph){" + "\n" + 
				"	if(morph < 0){" + "\n" + 
				"		return cosEase(val,min1,max1,input1,input2);" + "\n" + 
				"	}else{" + "\n" + 
				"		return sinEase(val,min1,max1,input1,input2);" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"function unArray(inKey){" + "\n" + 
				"    if(inKey instanceof Array && inKey.length === 1){" + "\n" + 
				"        return inKey[0];" + "\n" + 
				"    }else{" + "\n" + 
				"        return inKey;" + "\n" + 
				"    }" + "\n" + 
				"}" + "\n" + 
				"function moClamp(a,b,c){" + "\n" + 
				"	if(!(a instanceof Array)){" + "\n" + 
				"		return (Math.max(b, Math.min(c, a)));" + "\n" + 
				"	}else{" + "\n" + 
				"		var aryHold = [];" + "\n" + 
				"		for(var x = 0; x < a.length; x++){" + "\n" + 
				"			aryHold.push(Math.max(b, Math.min(c, a[x])));" + "\n" + 
				"		}return aryHold;" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"joystick(value);";
		} catch (err) {}
		try {
			eyebrowL.property("ADBE Transform Group").property("ADBE Position").expression = "/////// BEGIN JOYSTICK CODE ///////" + "\n" + 
				"function joystick(inputResult){" + "\n" + 
				"    var easeOverride_right = null;" + "\n" + 
				"    var easeOverride_left =  null;" + "\n" + 
				"    var easeOverride_up =    null;" + "\n" + 
				"    var easeOverride_down =  null;" + "\n" + 
				"	var contrl = thisComp.layer(\"Ctrl Eyebrows\");" + "\n" + 
				"	var myLimit = contrl(\"ADBE Effect Parade\")(\"joystickLimit\")(\"ADBE Slider Control-0001\");" + "\n" + 
				"	var contrlCurVal = contrl(\"ADBE Transform Group\")(\"ADBE Position\");" + "\n" + 
				"	var resultVal;" + "\n" + 
				"	var key1 = [189,202.75,0];" + "\n" + 
				"	var key2 = [188.5,192.25,0];" + "\n" + 
				"	var key3 = [188.5,204.25,0];" + "\n" + 
				"	var key4 = [187.5,197.75,0];" + "\n" + 
				"	var key5 = [190.5,207.75,0];" + "\n" + 
				"    key1 = unArray(key1);" + "\n" + 
				"    key2 = unArray(key2);" + "\n" + 
				"    key3 = unArray(key3);" + "\n" + 
				"    key4 = unArray(key4);" + "\n" + 
				"    key5 = unArray(key5);" + "\n" + 
				"	try{" + "\n" + 
				"        if(!thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\").active){" + "\n" + 
				"			throw (\"inactive\");" + "\n" + 
				"        }" + "\n" + 
				"		slideR = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0001\");" + "\n" + 
				"		slideL = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0002\");" + "\n" + 
				"		slideU = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0003\");" + "\n" + 
				"		slideD = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0004\");" + "\n" + 
				"	}catch(err){" + "\n" + 
				"		slideR = 0;" + "\n" + 
				"		slideL = 0;" + "\n" + 
				"		slideU = 0;" + "\n" + 
				"		slideD = 0;" + "\n" + 
				"	}" + "\n" + 
				"    if(easeOverride_right !== null && !isNaN(easeOverride_right)){" + "\n" + 
				"        slideR = moClamp(easeOverride_right,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_left !== null && !isNaN(easeOverride_left)){" + "\n" + 
				"        slideL = moClamp(easeOverride_left,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_up !== null && !isNaN(easeOverride_up)){" + "\n" + 
				"        slideU = moClamp(easeOverride_up,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_down !== null && !isNaN(easeOverride_down)){" + "\n" + 
				"        slideD = moClamp(easeOverride_down,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"	var easeResultX,easeResultY;" + "\n" + 
				"	if(contrlCurVal[0]>=0){" + "\n" + 
				"		resultVal = linear(contrlCurVal[0], 0, myLimit, key1, key2);" + "\n" + 
				"		if(slideR !==0){" + "\n" + 
				"			easeResultX = easeSwitch(contrlCurVal[0], 0, myLimit, key1, key2,slideR);" + "\n" + 
				"			resultVal = linear(Math.abs(slideR),0,100, resultVal,easeResultX);" + "\n" + 
				"		}" + "\n" + 
				"	}else{" + "\n" + 
				"		resultVal = linear(-contrlCurVal[0], 0, myLimit, key1, key3);" + "\n" + 
				"		if(slideL !==0){" + "\n" + 
				"			easeResultX = easeSwitch(-contrlCurVal[0], 0, myLimit, key1, key3,slideL);" + "\n" + 
				"			resultVal = linear(Math.abs(slideL),0,100, resultVal,easeResultX);" + "\n" + 
				"		}" + "\n" + 
				"	}" + "\n" + 
				"	var resultAdd = 0;" + "\n" + 
				"	if(contrlCurVal[1]<=0){" + "\n" + 
				"		resultAdd = linear(-contrlCurVal[1], 0, myLimit, key1, key4)- key1;" + "\n" + 
				"		if(slideU !==0){" + "\n" + 
				"			easeResultY = easeSwitch(-contrlCurVal[1], 0, myLimit, key1, key4,slideU)- key1;" + "\n" + 
				"			resultAdd = linear(Math.abs(slideU),0,100, resultAdd,easeResultY);" + "\n" + 
				"		}" + "\n" + 
				"	}else{" + "\n" + 
				"		resultAdd = linear(contrlCurVal[1], 0, myLimit, key1, key5)- key1;" + "\n" + 
				"		if(slideD!==0){" + "\n" + 
				"			easeResultY = easeSwitch(contrlCurVal[1], 0, myLimit, key1, key5,slideD)- key1;" + "\n" + 
				"			resultAdd = linear(Math.abs(slideD),0,100, resultAdd,easeResultY);" + "\n" + 
				"		}" + "\n" + 
				"	}" + "\n" + 
				"	return (resultVal+resultAdd)+(inputResult-key1);" + "\n" + 
				"}" + "\n" + 
				"function cosEase(val,min1,max1,input1,input2){" + "\n" + 
				"	var myCos = [];" + "\n" + 
				"    if(input1 instanceof Array){" + "\n" + 
				"        for(var x = 0; x < input1.length; x++){" + "\n" + 
				"            myCos.push(getMeCos(val, min1,max1,input1[x],input2[x]));" + "\n" + 
				"        }" + "\n" + 
				"    }else{ myCos = getMeCos(val, min1,max1,input1,input2);" + "\n" + 
				"	}return myCos;" + "\n" + 
				"	function getMeCos(val,min1,max1,input1,input2){" + "\n" + 
				"		var mapVal = moClamp(val/(max1-min1),0,1);" + "\n" + 
				"		var c = input2 - input1;" + "\n" + 
				"		var myCos2 = -c * Math.cos(mapVal * (Math.PI/2)) + c+ input1;" + "\n" + 
				"		return myCos2;" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"function sinEase(val,min1,max1,input1,input2){" + "\n" + 
				"	var mySin = [];" + "\n" + 
				"    if(input1 instanceof Array){" + "\n" + 
				"        for(var x = 0; x < input1.length; x++){" + "\n" + 
				"            mySin.push(getMeSin(val, min1,max1,input1[x],input2[x]));" + "\n" + 
				"        }" + "\n" + 
				"    }else{ mySin = getMeSin(val, min1,max1,input1,input2);" + "\n" + 
				"	}return mySin;" + "\n" + 
				"	function getMeSin(val,min1,max1,input1,input2){" + "\n" + 
				"		var mapVal = moClamp(val/(max1-min1),0,1);" + "\n" + 
				"		var c = input2 - input1;" + "\n" + 
				"		var mySin2 = c * Math.sin(mapVal * (Math.PI/2)) + input1;" + "\n" + 
				"		return mySin2;" + "\n" + 
				"    }" + "\n" + 
				"}" + "\n" + 
				"function easeSwitch(val,min1,max1,input1,input2,morph){" + "\n" + 
				"	if(morph < 0){" + "\n" + 
				"		return cosEase(val,min1,max1,input1,input2);" + "\n" + 
				"	}else{" + "\n" + 
				"		return sinEase(val,min1,max1,input1,input2);" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"function unArray(inKey){" + "\n" + 
				"    if(inKey instanceof Array && inKey.length === 1){" + "\n" + 
				"        return inKey[0];" + "\n" + 
				"    }else{" + "\n" + 
				"        return inKey;" + "\n" + 
				"    }" + "\n" + 
				"}" + "\n" + 
				"function moClamp(a,b,c){" + "\n" + 
				"	if(!(a instanceof Array)){" + "\n" + 
				"		return (Math.max(b, Math.min(c, a)));" + "\n" + 
				"	}else{" + "\n" + 
				"		var aryHold = [];" + "\n" + 
				"		for(var x = 0; x < a.length; x++){" + "\n" + 
				"			aryHold.push(Math.max(b, Math.min(c, a[x])));" + "\n" + 
				"		}return aryHold;" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"joystick(value);";
		} catch (err) {}
		try {
			eyebrowL.property("ADBE Transform Group").property("ADBE Scale").expression = "/////// BEGIN JOYSTICK CODE ///////" + "\n" + 
				"function joystick(inputResult){" + "\n" + 
				"    var easeOverride_right = null;" + "\n" + 
				"    var easeOverride_left =  null;" + "\n" + 
				"    var easeOverride_up =    null;" + "\n" + 
				"    var easeOverride_down =  null;" + "\n" + 
				"	var contrl = thisComp.layer(\"Ctrl Head\");" + "\n" + 
				"	var myLimit = contrl(\"ADBE Effect Parade\")(\"joystickLimit\")(\"ADBE Slider Control-0001\");" + "\n" + 
				"	var contrlCurVal = contrl(\"ADBE Transform Group\")(\"ADBE Position\");" + "\n" + 
				"	var resultVal;" + "\n" + 
				"	var key1 = [100,100,100];" + "\n" + 
				"	var key2 = [100,100,100];" + "\n" + 
				"	var key3 = [80,100,100];" + "\n" + 
				"	var key4 = [100,100,100];" + "\n" + 
				"	var key5 = [100,100,100];" + "\n" + 
				"    key1 = unArray(key1);" + "\n" + 
				"    key2 = unArray(key2);" + "\n" + 
				"    key3 = unArray(key3);" + "\n" + 
				"    key4 = unArray(key4);" + "\n" + 
				"    key5 = unArray(key5);" + "\n" + 
				"	try{" + "\n" + 
				"        if(!thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\").active){" + "\n" + 
				"			throw (\"inactive\");" + "\n" + 
				"        }" + "\n" + 
				"		slideR = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0001\");" + "\n" + 
				"		slideL = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0002\");" + "\n" + 
				"		slideU = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0003\");" + "\n" + 
				"		slideD = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0004\");" + "\n" + 
				"	}catch(err){" + "\n" + 
				"		slideR = 0;" + "\n" + 
				"		slideL = 0;" + "\n" + 
				"		slideU = 0;" + "\n" + 
				"		slideD = 0;" + "\n" + 
				"	}" + "\n" + 
				"    if(easeOverride_right !== null && !isNaN(easeOverride_right)){" + "\n" + 
				"        slideR = moClamp(easeOverride_right,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_left !== null && !isNaN(easeOverride_left)){" + "\n" + 
				"        slideL = moClamp(easeOverride_left,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_up !== null && !isNaN(easeOverride_up)){" + "\n" + 
				"        slideU = moClamp(easeOverride_up,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_down !== null && !isNaN(easeOverride_down)){" + "\n" + 
				"        slideD = moClamp(easeOverride_down,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"	var easeResultX,easeResultY;" + "\n" + 
				"	if(contrlCurVal[0]>=0){" + "\n" + 
				"		resultVal = linear(contrlCurVal[0], 0, myLimit, key1, key2);" + "\n" + 
				"		if(slideR !==0){" + "\n" + 
				"			easeResultX = easeSwitch(contrlCurVal[0], 0, myLimit, key1, key2,slideR);" + "\n" + 
				"			resultVal = linear(Math.abs(slideR),0,100, resultVal,easeResultX);" + "\n" + 
				"		}" + "\n" + 
				"	}else{" + "\n" + 
				"		resultVal = linear(-contrlCurVal[0], 0, myLimit, key1, key3);" + "\n" + 
				"		if(slideL !==0){" + "\n" + 
				"			easeResultX = easeSwitch(-contrlCurVal[0], 0, myLimit, key1, key3,slideL);" + "\n" + 
				"			resultVal = linear(Math.abs(slideL),0,100, resultVal,easeResultX);" + "\n" + 
				"		}" + "\n" + 
				"	}" + "\n" + 
				"	var resultAdd = 0;" + "\n" + 
				"	if(contrlCurVal[1]<=0){" + "\n" + 
				"		resultAdd = linear(-contrlCurVal[1], 0, myLimit, key1, key4)- key1;" + "\n" + 
				"		if(slideU !==0){" + "\n" + 
				"			easeResultY = easeSwitch(-contrlCurVal[1], 0, myLimit, key1, key4,slideU)- key1;" + "\n" + 
				"			resultAdd = linear(Math.abs(slideU),0,100, resultAdd,easeResultY);" + "\n" + 
				"		}" + "\n" + 
				"	}else{" + "\n" + 
				"		resultAdd = linear(contrlCurVal[1], 0, myLimit, key1, key5)- key1;" + "\n" + 
				"		if(slideD!==0){" + "\n" + 
				"			easeResultY = easeSwitch(contrlCurVal[1], 0, myLimit, key1, key5,slideD)- key1;" + "\n" + 
				"			resultAdd = linear(Math.abs(slideD),0,100, resultAdd,easeResultY);" + "\n" + 
				"		}" + "\n" + 
				"	}" + "\n" + 
				"	return (resultVal+resultAdd)+(inputResult-key1);" + "\n" + 
				"}" + "\n" + 
				"function cosEase(val,min1,max1,input1,input2){" + "\n" + 
				"	var myCos = [];" + "\n" + 
				"    if(input1 instanceof Array){" + "\n" + 
				"        for(var x = 0; x < input1.length; x++){" + "\n" + 
				"            myCos.push(getMeCos(val, min1,max1,input1[x],input2[x]));" + "\n" + 
				"        }" + "\n" + 
				"    }else{ myCos = getMeCos(val, min1,max1,input1,input2);" + "\n" + 
				"	}return myCos;" + "\n" + 
				"	function getMeCos(val,min1,max1,input1,input2){" + "\n" + 
				"		var mapVal = moClamp(val/(max1-min1),0,1);" + "\n" + 
				"		var c = input2 - input1;" + "\n" + 
				"		var myCos2 = -c * Math.cos(mapVal * (Math.PI/2)) + c+ input1;" + "\n" + 
				"		return myCos2;" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"function sinEase(val,min1,max1,input1,input2){" + "\n" + 
				"	var mySin = [];" + "\n" + 
				"    if(input1 instanceof Array){" + "\n" + 
				"        for(var x = 0; x < input1.length; x++){" + "\n" + 
				"            mySin.push(getMeSin(val, min1,max1,input1[x],input2[x]));" + "\n" + 
				"        }" + "\n" + 
				"    }else{ mySin = getMeSin(val, min1,max1,input1,input2);" + "\n" + 
				"	}return mySin;" + "\n" + 
				"	function getMeSin(val,min1,max1,input1,input2){" + "\n" + 
				"		var mapVal = moClamp(val/(max1-min1),0,1);" + "\n" + 
				"		var c = input2 - input1;" + "\n" + 
				"		var mySin2 = c * Math.sin(mapVal * (Math.PI/2)) + input1;" + "\n" + 
				"		return mySin2;" + "\n" + 
				"    }" + "\n" + 
				"}" + "\n" + 
				"function easeSwitch(val,min1,max1,input1,input2,morph){" + "\n" + 
				"	if(morph < 0){" + "\n" + 
				"		return cosEase(val,min1,max1,input1,input2);" + "\n" + 
				"	}else{" + "\n" + 
				"		return sinEase(val,min1,max1,input1,input2);" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"function unArray(inKey){" + "\n" + 
				"    if(inKey instanceof Array && inKey.length === 1){" + "\n" + 
				"        return inKey[0];" + "\n" + 
				"    }else{" + "\n" + 
				"        return inKey;" + "\n" + 
				"    }" + "\n" + 
				"}" + "\n" + 
				"function moClamp(a,b,c){" + "\n" + 
				"	if(!(a instanceof Array)){" + "\n" + 
				"		return (Math.max(b, Math.min(c, a)));" + "\n" + 
				"	}else{" + "\n" + 
				"		var aryHold = [];" + "\n" + 
				"		for(var x = 0; x < a.length; x++){" + "\n" + 
				"			aryHold.push(Math.max(b, Math.min(c, a[x])));" + "\n" + 
				"		}return aryHold;" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"joystick(value);";
		} catch (err) {}
		try {
			eyebrowL.property("ADBE Transform Group").property("ADBE Rotate Z").expression = "/////// BEGIN JOYSTICK CODE ///////" + "\n" + 
				"function joystick(inputResult){" + "\n" + 
				"    var easeOverride_right = null;" + "\n" + 
				"    var easeOverride_left =  null;" + "\n" + 
				"    var easeOverride_up =    null;" + "\n" + 
				"    var easeOverride_down =  null;" + "\n" + 
				"	var contrl = thisComp.layer(\"Ctrl Eyebrows\");" + "\n" + 
				"	var myLimit = contrl(\"ADBE Effect Parade\")(\"joystickLimit\")(\"ADBE Slider Control-0001\");" + "\n" + 
				"	var contrlCurVal = contrl(\"ADBE Transform Group\")(\"ADBE Position\");" + "\n" + 
				"	var resultVal;" + "\n" + 
				"	var key1 = [0];" + "\n" + 
				"	var key2 = [14];" + "\n" + 
				"	var key3 = [-5];" + "\n" + 
				"	var key4 = [-20];" + "\n" + 
				"	var key5 = [25];" + "\n" + 
				"    key1 = unArray(key1);" + "\n" + 
				"    key2 = unArray(key2);" + "\n" + 
				"    key3 = unArray(key3);" + "\n" + 
				"    key4 = unArray(key4);" + "\n" + 
				"    key5 = unArray(key5);" + "\n" + 
				"	try{" + "\n" + 
				"        if(!thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\").active){" + "\n" + 
				"			throw (\"inactive\");" + "\n" + 
				"        }" + "\n" + 
				"		slideR = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0001\");" + "\n" + 
				"		slideL = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0002\");" + "\n" + 
				"		slideU = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0003\");" + "\n" + 
				"		slideD = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0004\");" + "\n" + 
				"	}catch(err){" + "\n" + 
				"		slideR = 0;" + "\n" + 
				"		slideL = 0;" + "\n" + 
				"		slideU = 0;" + "\n" + 
				"		slideD = 0;" + "\n" + 
				"	}" + "\n" + 
				"    if(easeOverride_right !== null && !isNaN(easeOverride_right)){" + "\n" + 
				"        slideR = moClamp(easeOverride_right,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_left !== null && !isNaN(easeOverride_left)){" + "\n" + 
				"        slideL = moClamp(easeOverride_left,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_up !== null && !isNaN(easeOverride_up)){" + "\n" + 
				"        slideU = moClamp(easeOverride_up,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_down !== null && !isNaN(easeOverride_down)){" + "\n" + 
				"        slideD = moClamp(easeOverride_down,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"	var easeResultX,easeResultY;" + "\n" + 
				"	if(contrlCurVal[0]>=0){" + "\n" + 
				"		resultVal = linear(contrlCurVal[0], 0, myLimit, key1, key2);" + "\n" + 
				"		if(slideR !==0){" + "\n" + 
				"			easeResultX = easeSwitch(contrlCurVal[0], 0, myLimit, key1, key2,slideR);" + "\n" + 
				"			resultVal = linear(Math.abs(slideR),0,100, resultVal,easeResultX);" + "\n" + 
				"		}" + "\n" + 
				"	}else{" + "\n" + 
				"		resultVal = linear(-contrlCurVal[0], 0, myLimit, key1, key3);" + "\n" + 
				"		if(slideL !==0){" + "\n" + 
				"			easeResultX = easeSwitch(-contrlCurVal[0], 0, myLimit, key1, key3,slideL);" + "\n" + 
				"			resultVal = linear(Math.abs(slideL),0,100, resultVal,easeResultX);" + "\n" + 
				"		}" + "\n" + 
				"	}" + "\n" + 
				"	var resultAdd = 0;" + "\n" + 
				"	if(contrlCurVal[1]<=0){" + "\n" + 
				"		resultAdd = linear(-contrlCurVal[1], 0, myLimit, key1, key4)- key1;" + "\n" + 
				"		if(slideU !==0){" + "\n" + 
				"			easeResultY = easeSwitch(-contrlCurVal[1], 0, myLimit, key1, key4,slideU)- key1;" + "\n" + 
				"			resultAdd = linear(Math.abs(slideU),0,100, resultAdd,easeResultY);" + "\n" + 
				"		}" + "\n" + 
				"	}else{" + "\n" + 
				"		resultAdd = linear(contrlCurVal[1], 0, myLimit, key1, key5)- key1;" + "\n" + 
				"		if(slideD!==0){" + "\n" + 
				"			easeResultY = easeSwitch(contrlCurVal[1], 0, myLimit, key1, key5,slideD)- key1;" + "\n" + 
				"			resultAdd = linear(Math.abs(slideD),0,100, resultAdd,easeResultY);" + "\n" + 
				"		}" + "\n" + 
				"	}" + "\n" + 
				"	return (resultVal+resultAdd)+(inputResult-key1);" + "\n" + 
				"}" + "\n" + 
				"function cosEase(val,min1,max1,input1,input2){" + "\n" + 
				"	var myCos = [];" + "\n" + 
				"    if(input1 instanceof Array){" + "\n" + 
				"        for(var x = 0; x < input1.length; x++){" + "\n" + 
				"            myCos.push(getMeCos(val, min1,max1,input1[x],input2[x]));" + "\n" + 
				"        }" + "\n" + 
				"    }else{ myCos = getMeCos(val, min1,max1,input1,input2);" + "\n" + 
				"	}return myCos;" + "\n" + 
				"	function getMeCos(val,min1,max1,input1,input2){" + "\n" + 
				"		var mapVal = moClamp(val/(max1-min1),0,1);" + "\n" + 
				"		var c = input2 - input1;" + "\n" + 
				"		var myCos2 = -c * Math.cos(mapVal * (Math.PI/2)) + c+ input1;" + "\n" + 
				"		return myCos2;" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"function sinEase(val,min1,max1,input1,input2){" + "\n" + 
				"	var mySin = [];" + "\n" + 
				"    if(input1 instanceof Array){" + "\n" + 
				"        for(var x = 0; x < input1.length; x++){" + "\n" + 
				"            mySin.push(getMeSin(val, min1,max1,input1[x],input2[x]));" + "\n" + 
				"        }" + "\n" + 
				"    }else{ mySin = getMeSin(val, min1,max1,input1,input2);" + "\n" + 
				"	}return mySin;" + "\n" + 
				"	function getMeSin(val,min1,max1,input1,input2){" + "\n" + 
				"		var mapVal = moClamp(val/(max1-min1),0,1);" + "\n" + 
				"		var c = input2 - input1;" + "\n" + 
				"		var mySin2 = c * Math.sin(mapVal * (Math.PI/2)) + input1;" + "\n" + 
				"		return mySin2;" + "\n" + 
				"    }" + "\n" + 
				"}" + "\n" + 
				"function easeSwitch(val,min1,max1,input1,input2,morph){" + "\n" + 
				"	if(morph < 0){" + "\n" + 
				"		return cosEase(val,min1,max1,input1,input2);" + "\n" + 
				"	}else{" + "\n" + 
				"		return sinEase(val,min1,max1,input1,input2);" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"function unArray(inKey){" + "\n" + 
				"    if(inKey instanceof Array && inKey.length === 1){" + "\n" + 
				"        return inKey[0];" + "\n" + 
				"    }else{" + "\n" + 
				"        return inKey;" + "\n" + 
				"    }" + "\n" + 
				"}" + "\n" + 
				"function moClamp(a,b,c){" + "\n" + 
				"	if(!(a instanceof Array)){" + "\n" + 
				"		return (Math.max(b, Math.min(c, a)));" + "\n" + 
				"	}else{" + "\n" + 
				"		var aryHold = [];" + "\n" + 
				"		for(var x = 0; x < a.length; x++){" + "\n" + 
				"			aryHold.push(Math.max(b, Math.min(c, a[x])));" + "\n" + 
				"		}return aryHold;" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"joystick(value);";
		} catch (err) {}
		try {
			eyeR.property("ADBE Mask Parade").property(1).property("ADBE Mask Offset").expression = "thisComp.layer(\"Ctrl Eyes\").effect(\"EVT4.1 Eyes Control\")(9)";
		} catch (err) {}
		try {
			eyeR.property("ADBE Mask Parade").property(2).property("ADBE Mask Offset").expression = "thisComp.layer(\"Ctrl Eyes\").effect(\"EVT4.1 Eyes Control\")(10)";
		} catch (err) {}
		try {
			eyeR.property("ADBE Transform Group").property("ADBE Position").expression = "/////// BEGIN JOYSTICK CODE ///////" + "\n" + 
				"function joystick(inputResult){" + "\n" + 
				"    var easeOverride_right = null;" + "\n" + 
				"    var easeOverride_left =  null;" + "\n" + 
				"    var easeOverride_up =    null;" + "\n" + 
				"    var easeOverride_down =  null;" + "\n" + 
				"	var contrl = thisComp.layer(\"Ctrl Eyes Position\");" + "\n" + 
				"	var myLimit = contrl(\"ADBE Effect Parade\")(\"joystickLimit\")(\"ADBE Slider Control-0001\");" + "\n" + 
				"	var contrlCurVal = contrl(\"ADBE Transform Group\")(\"ADBE Position\");" + "\n" + 
				"	var resultVal;" + "\n" + 
				"	var key1 = [50,50,0];" + "\n" + 
				"	var key2 = [56,50,0];" + "\n" + 
				"	var key3 = [44,50,0];" + "\n" + 
				"	var key4 = [50,44,0];" + "\n" + 
				"	var key5 = [50,56,0];" + "\n" + 
				"    key1 = unArray(key1);" + "\n" + 
				"    key2 = unArray(key2);" + "\n" + 
				"    key3 = unArray(key3);" + "\n" + 
				"    key4 = unArray(key4);" + "\n" + 
				"    key5 = unArray(key5);" + "\n" + 
				"	try{" + "\n" + 
				"        if(!thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\").active){" + "\n" + 
				"			throw (\"inactive\");" + "\n" + 
				"        }" + "\n" + 
				"		slideR = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0001\");" + "\n" + 
				"		slideL = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0002\");" + "\n" + 
				"		slideU = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0003\");" + "\n" + 
				"		slideD = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0004\");" + "\n" + 
				"	}catch(err){" + "\n" + 
				"		slideR = 0;" + "\n" + 
				"		slideL = 0;" + "\n" + 
				"		slideU = 0;" + "\n" + 
				"		slideD = 0;" + "\n" + 
				"	}" + "\n" + 
				"    if(easeOverride_right !== null && !isNaN(easeOverride_right)){" + "\n" + 
				"        slideR = moClamp(easeOverride_right,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_left !== null && !isNaN(easeOverride_left)){" + "\n" + 
				"        slideL = moClamp(easeOverride_left,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_up !== null && !isNaN(easeOverride_up)){" + "\n" + 
				"        slideU = moClamp(easeOverride_up,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_down !== null && !isNaN(easeOverride_down)){" + "\n" + 
				"        slideD = moClamp(easeOverride_down,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"	var easeResultX,easeResultY;" + "\n" + 
				"	if(contrlCurVal[0]>=0){" + "\n" + 
				"		resultVal = linear(contrlCurVal[0], 0, myLimit, key1, key2);" + "\n" + 
				"		if(slideR !==0){" + "\n" + 
				"			easeResultX = easeSwitch(contrlCurVal[0], 0, myLimit, key1, key2,slideR);" + "\n" + 
				"			resultVal = linear(Math.abs(slideR),0,100, resultVal,easeResultX);" + "\n" + 
				"		}" + "\n" + 
				"	}else{" + "\n" + 
				"		resultVal = linear(-contrlCurVal[0], 0, myLimit, key1, key3);" + "\n" + 
				"		if(slideL !==0){" + "\n" + 
				"			easeResultX = easeSwitch(-contrlCurVal[0], 0, myLimit, key1, key3,slideL);" + "\n" + 
				"			resultVal = linear(Math.abs(slideL),0,100, resultVal,easeResultX);" + "\n" + 
				"		}" + "\n" + 
				"	}" + "\n" + 
				"	var resultAdd = 0;" + "\n" + 
				"	if(contrlCurVal[1]<=0){" + "\n" + 
				"		resultAdd = linear(-contrlCurVal[1], 0, myLimit, key1, key4)- key1;" + "\n" + 
				"		if(slideU !==0){" + "\n" + 
				"			easeResultY = easeSwitch(-contrlCurVal[1], 0, myLimit, key1, key4,slideU)- key1;" + "\n" + 
				"			resultAdd = linear(Math.abs(slideU),0,100, resultAdd,easeResultY);" + "\n" + 
				"		}" + "\n" + 
				"	}else{" + "\n" + 
				"		resultAdd = linear(contrlCurVal[1], 0, myLimit, key1, key5)- key1;" + "\n" + 
				"		if(slideD!==0){" + "\n" + 
				"			easeResultY = easeSwitch(contrlCurVal[1], 0, myLimit, key1, key5,slideD)- key1;" + "\n" + 
				"			resultAdd = linear(Math.abs(slideD),0,100, resultAdd,easeResultY);" + "\n" + 
				"		}" + "\n" + 
				"	}" + "\n" + 
				"	return (resultVal+resultAdd)+(inputResult-key1);" + "\n" + 
				"}" + "\n" + 
				"function cosEase(val,min1,max1,input1,input2){" + "\n" + 
				"	var myCos = [];" + "\n" + 
				"    if(input1 instanceof Array){" + "\n" + 
				"        for(var x = 0; x < input1.length; x++){" + "\n" + 
				"            myCos.push(getMeCos(val, min1,max1,input1[x],input2[x]));" + "\n" + 
				"        }" + "\n" + 
				"    }else{ myCos = getMeCos(val, min1,max1,input1,input2);" + "\n" + 
				"	}return myCos;" + "\n" + 
				"	function getMeCos(val,min1,max1,input1,input2){" + "\n" + 
				"		var mapVal = moClamp(val/(max1-min1),0,1);" + "\n" + 
				"		var c = input2 - input1;" + "\n" + 
				"		var myCos2 = -c * Math.cos(mapVal * (Math.PI/2)) + c+ input1;" + "\n" + 
				"		return myCos2;" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"function sinEase(val,min1,max1,input1,input2){" + "\n" + 
				"	var mySin = [];" + "\n" + 
				"    if(input1 instanceof Array){" + "\n" + 
				"        for(var x = 0; x < input1.length; x++){" + "\n" + 
				"            mySin.push(getMeSin(val, min1,max1,input1[x],input2[x]));" + "\n" + 
				"        }" + "\n" + 
				"    }else{ mySin = getMeSin(val, min1,max1,input1,input2);" + "\n" + 
				"	}return mySin;" + "\n" + 
				"	function getMeSin(val,min1,max1,input1,input2){" + "\n" + 
				"		var mapVal = moClamp(val/(max1-min1),0,1);" + "\n" + 
				"		var c = input2 - input1;" + "\n" + 
				"		var mySin2 = c * Math.sin(mapVal * (Math.PI/2)) + input1;" + "\n" + 
				"		return mySin2;" + "\n" + 
				"    }" + "\n" + 
				"}" + "\n" + 
				"function easeSwitch(val,min1,max1,input1,input2,morph){" + "\n" + 
				"	if(morph < 0){" + "\n" + 
				"		return cosEase(val,min1,max1,input1,input2);" + "\n" + 
				"	}else{" + "\n" + 
				"		return sinEase(val,min1,max1,input1,input2);" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"function unArray(inKey){" + "\n" + 
				"    if(inKey instanceof Array && inKey.length === 1){" + "\n" + 
				"        return inKey[0];" + "\n" + 
				"    }else{" + "\n" + 
				"        return inKey;" + "\n" + 
				"    }" + "\n" + 
				"}" + "\n" + 
				"function moClamp(a,b,c){" + "\n" + 
				"	if(!(a instanceof Array)){" + "\n" + 
				"		return (Math.max(b, Math.min(c, a)));" + "\n" + 
				"	}else{" + "\n" + 
				"		var aryHold = [];" + "\n" + 
				"		for(var x = 0; x < a.length; x++){" + "\n" + 
				"			aryHold.push(Math.max(b, Math.min(c, a[x])));" + "\n" + 
				"		}return aryHold;" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"joystick(value);";
		} catch (err) {}
		try {
			eyeR2.property("ADBE Mask Parade").property(1).property("ADBE Mask Offset").expression = "thisComp.layer(\"Ctrl Eyes\").effect(\"EVT4.1 Eyes Control\")(9)";
		} catch (err) {}
		try {
			eyeR2.property("ADBE Mask Parade").property(2).property("ADBE Mask Offset").expression = "thisComp.layer(\"Ctrl Eyes\").effect(\"EVT4.1 Eyes Control\")(10)";
		} catch (err) {}
		try {
			eyeR2.property("ADBE Transform Group").property("ADBE Position").expression = "/////// BEGIN JOYSTICK CODE ///////" + "\n" + 
				"function joystick(inputResult){" + "\n" + 
				"    var easeOverride_right = null;" + "\n" + 
				"    var easeOverride_left =  null;" + "\n" + 
				"    var easeOverride_up =    null;" + "\n" + 
				"    var easeOverride_down =  null;" + "\n" + 
				"	var contrl = thisComp.layer(\"Ctrl Head\");" + "\n" + 
				"	var myLimit = contrl(\"ADBE Effect Parade\")(\"joystickLimit\")(\"ADBE Slider Control-0001\");" + "\n" + 
				"	var contrlCurVal = contrl(\"ADBE Transform Group\")(\"ADBE Position\");" + "\n" + 
				"	var resultVal;" + "\n" + 
				"	var key1 = [264,220.5,0];" + "\n" + 
				"	var key2 = [284.204071044922,220.5,0];" + "\n" + 
				"	var key3 = [245.836730957031,220.5,0];" + "\n" + 
				"	var key4 = [264,205.598037719727,0];" + "\n" + 
				"	var key5 = [264,234.362747192383,0];" + "\n" + 
				"    key1 = unArray(key1);" + "\n" + 
				"    key2 = unArray(key2);" + "\n" + 
				"    key3 = unArray(key3);" + "\n" + 
				"    key4 = unArray(key4);" + "\n" + 
				"    key5 = unArray(key5);" + "\n" + 
				"	try{" + "\n" + 
				"        if(!thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\").active){" + "\n" + 
				"			throw (\"inactive\");" + "\n" + 
				"        }" + "\n" + 
				"		slideR = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0001\");" + "\n" + 
				"		slideL = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0002\");" + "\n" + 
				"		slideU = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0003\");" + "\n" + 
				"		slideD = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0004\");" + "\n" + 
				"	}catch(err){" + "\n" + 
				"		slideR = 0;" + "\n" + 
				"		slideL = 0;" + "\n" + 
				"		slideU = 0;" + "\n" + 
				"		slideD = 0;" + "\n" + 
				"	}" + "\n" + 
				"    if(easeOverride_right !== null && !isNaN(easeOverride_right)){" + "\n" + 
				"        slideR = moClamp(easeOverride_right,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_left !== null && !isNaN(easeOverride_left)){" + "\n" + 
				"        slideL = moClamp(easeOverride_left,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_up !== null && !isNaN(easeOverride_up)){" + "\n" + 
				"        slideU = moClamp(easeOverride_up,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_down !== null && !isNaN(easeOverride_down)){" + "\n" + 
				"        slideD = moClamp(easeOverride_down,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"	var easeResultX,easeResultY;" + "\n" + 
				"	if(contrlCurVal[0]>=0){" + "\n" + 
				"		resultVal = linear(contrlCurVal[0], 0, myLimit, key1, key2);" + "\n" + 
				"		if(slideR !==0){" + "\n" + 
				"			easeResultX = easeSwitch(contrlCurVal[0], 0, myLimit, key1, key2,slideR);" + "\n" + 
				"			resultVal = linear(Math.abs(slideR),0,100, resultVal,easeResultX);" + "\n" + 
				"		}" + "\n" + 
				"	}else{" + "\n" + 
				"		resultVal = linear(-contrlCurVal[0], 0, myLimit, key1, key3);" + "\n" + 
				"		if(slideL !==0){" + "\n" + 
				"			easeResultX = easeSwitch(-contrlCurVal[0], 0, myLimit, key1, key3,slideL);" + "\n" + 
				"			resultVal = linear(Math.abs(slideL),0,100, resultVal,easeResultX);" + "\n" + 
				"		}" + "\n" + 
				"	}" + "\n" + 
				"	var resultAdd = 0;" + "\n" + 
				"	if(contrlCurVal[1]<=0){" + "\n" + 
				"		resultAdd = linear(-contrlCurVal[1], 0, myLimit, key1, key4)- key1;" + "\n" + 
				"		if(slideU !==0){" + "\n" + 
				"			easeResultY = easeSwitch(-contrlCurVal[1], 0, myLimit, key1, key4,slideU)- key1;" + "\n" + 
				"			resultAdd = linear(Math.abs(slideU),0,100, resultAdd,easeResultY);" + "\n" + 
				"		}" + "\n" + 
				"	}else{" + "\n" + 
				"		resultAdd = linear(contrlCurVal[1], 0, myLimit, key1, key5)- key1;" + "\n" + 
				"		if(slideD!==0){" + "\n" + 
				"			easeResultY = easeSwitch(contrlCurVal[1], 0, myLimit, key1, key5,slideD)- key1;" + "\n" + 
				"			resultAdd = linear(Math.abs(slideD),0,100, resultAdd,easeResultY);" + "\n" + 
				"		}" + "\n" + 
				"	}" + "\n" + 
				"	return (resultVal+resultAdd)+(inputResult-key1);" + "\n" + 
				"}" + "\n" + 
				"function cosEase(val,min1,max1,input1,input2){" + "\n" + 
				"	var myCos = [];" + "\n" + 
				"    if(input1 instanceof Array){" + "\n" + 
				"        for(var x = 0; x < input1.length; x++){" + "\n" + 
				"            myCos.push(getMeCos(val, min1,max1,input1[x],input2[x]));" + "\n" + 
				"        }" + "\n" + 
				"    }else{ myCos = getMeCos(val, min1,max1,input1,input2);" + "\n" + 
				"	}return myCos;" + "\n" + 
				"	function getMeCos(val,min1,max1,input1,input2){" + "\n" + 
				"		var mapVal = moClamp(val/(max1-min1),0,1);" + "\n" + 
				"		var c = input2 - input1;" + "\n" + 
				"		var myCos2 = -c * Math.cos(mapVal * (Math.PI/2)) + c+ input1;" + "\n" + 
				"		return myCos2;" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"function sinEase(val,min1,max1,input1,input2){" + "\n" + 
				"	var mySin = [];" + "\n" + 
				"    if(input1 instanceof Array){" + "\n" + 
				"        for(var x = 0; x < input1.length; x++){" + "\n" + 
				"            mySin.push(getMeSin(val, min1,max1,input1[x],input2[x]));" + "\n" + 
				"        }" + "\n" + 
				"    }else{ mySin = getMeSin(val, min1,max1,input1,input2);" + "\n" + 
				"	}return mySin;" + "\n" + 
				"	function getMeSin(val,min1,max1,input1,input2){" + "\n" + 
				"		var mapVal = moClamp(val/(max1-min1),0,1);" + "\n" + 
				"		var c = input2 - input1;" + "\n" + 
				"		var mySin2 = c * Math.sin(mapVal * (Math.PI/2)) + input1;" + "\n" + 
				"		return mySin2;" + "\n" + 
				"    }" + "\n" + 
				"}" + "\n" + 
				"function easeSwitch(val,min1,max1,input1,input2,morph){" + "\n" + 
				"	if(morph < 0){" + "\n" + 
				"		return cosEase(val,min1,max1,input1,input2);" + "\n" + 
				"	}else{" + "\n" + 
				"		return sinEase(val,min1,max1,input1,input2);" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"function unArray(inKey){" + "\n" + 
				"    if(inKey instanceof Array && inKey.length === 1){" + "\n" + 
				"        return inKey[0];" + "\n" + 
				"    }else{" + "\n" + 
				"        return inKey;" + "\n" + 
				"    }" + "\n" + 
				"}" + "\n" + 
				"function moClamp(a,b,c){" + "\n" + 
				"	if(!(a instanceof Array)){" + "\n" + 
				"		return (Math.max(b, Math.min(c, a)));" + "\n" + 
				"	}else{" + "\n" + 
				"		var aryHold = [];" + "\n" + 
				"		for(var x = 0; x < a.length; x++){" + "\n" + 
				"			aryHold.push(Math.max(b, Math.min(c, a[x])));" + "\n" + 
				"		}return aryHold;" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"joystick(value);";
		} catch (err) {}
		try {
			eyeR2.property("ADBE Transform Group").property("ADBE Scale").expression = "/////// BEGIN JOYSTICK CODE ///////" + "\n" + 
				"function joystick(inputResult){" + "\n" + 
				"    var easeOverride_right = null;" + "\n" + 
				"    var easeOverride_left =  null;" + "\n" + 
				"    var easeOverride_up =    null;" + "\n" + 
				"    var easeOverride_down =  null;" + "\n" + 
				"	var contrl = thisComp.layer(\"Ctrl Head\");" + "\n" + 
				"	var myLimit = contrl(\"ADBE Effect Parade\")(\"joystickLimit\")(\"ADBE Slider Control-0001\");" + "\n" + 
				"	var contrlCurVal = contrl(\"ADBE Transform Group\")(\"ADBE Position\");" + "\n" + 
				"	var resultVal;" + "\n" + 
				"	var key1 = [100,100,100];" + "\n" + 
				"	var key2 = [90,100,100];" + "\n" + 
				"	var key3 = [100,100,100];" + "\n" + 
				"	var key4 = [100,100,100];" + "\n" + 
				"	var key5 = [100,100,100];" + "\n" + 
				"    key1 = unArray(key1);" + "\n" + 
				"    key2 = unArray(key2);" + "\n" + 
				"    key3 = unArray(key3);" + "\n" + 
				"    key4 = unArray(key4);" + "\n" + 
				"    key5 = unArray(key5);" + "\n" + 
				"	try{" + "\n" + 
				"        if(!thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\").active){" + "\n" + 
				"			throw (\"inactive\");" + "\n" + 
				"        }" + "\n" + 
				"		slideR = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0001\");" + "\n" + 
				"		slideL = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0002\");" + "\n" + 
				"		slideU = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0003\");" + "\n" + 
				"		slideD = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0004\");" + "\n" + 
				"	}catch(err){" + "\n" + 
				"		slideR = 0;" + "\n" + 
				"		slideL = 0;" + "\n" + 
				"		slideU = 0;" + "\n" + 
				"		slideD = 0;" + "\n" + 
				"	}" + "\n" + 
				"    if(easeOverride_right !== null && !isNaN(easeOverride_right)){" + "\n" + 
				"        slideR = moClamp(easeOverride_right,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_left !== null && !isNaN(easeOverride_left)){" + "\n" + 
				"        slideL = moClamp(easeOverride_left,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_up !== null && !isNaN(easeOverride_up)){" + "\n" + 
				"        slideU = moClamp(easeOverride_up,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_down !== null && !isNaN(easeOverride_down)){" + "\n" + 
				"        slideD = moClamp(easeOverride_down,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"	var easeResultX,easeResultY;" + "\n" + 
				"	if(contrlCurVal[0]>=0){" + "\n" + 
				"		resultVal = linear(contrlCurVal[0], 0, myLimit, key1, key2);" + "\n" + 
				"		if(slideR !==0){" + "\n" + 
				"			easeResultX = easeSwitch(contrlCurVal[0], 0, myLimit, key1, key2,slideR);" + "\n" + 
				"			resultVal = linear(Math.abs(slideR),0,100, resultVal,easeResultX);" + "\n" + 
				"		}" + "\n" + 
				"	}else{" + "\n" + 
				"		resultVal = linear(-contrlCurVal[0], 0, myLimit, key1, key3);" + "\n" + 
				"		if(slideL !==0){" + "\n" + 
				"			easeResultX = easeSwitch(-contrlCurVal[0], 0, myLimit, key1, key3,slideL);" + "\n" + 
				"			resultVal = linear(Math.abs(slideL),0,100, resultVal,easeResultX);" + "\n" + 
				"		}" + "\n" + 
				"	}" + "\n" + 
				"	var resultAdd = 0;" + "\n" + 
				"	if(contrlCurVal[1]<=0){" + "\n" + 
				"		resultAdd = linear(-contrlCurVal[1], 0, myLimit, key1, key4)- key1;" + "\n" + 
				"		if(slideU !==0){" + "\n" + 
				"			easeResultY = easeSwitch(-contrlCurVal[1], 0, myLimit, key1, key4,slideU)- key1;" + "\n" + 
				"			resultAdd = linear(Math.abs(slideU),0,100, resultAdd,easeResultY);" + "\n" + 
				"		}" + "\n" + 
				"	}else{" + "\n" + 
				"		resultAdd = linear(contrlCurVal[1], 0, myLimit, key1, key5)- key1;" + "\n" + 
				"		if(slideD!==0){" + "\n" + 
				"			easeResultY = easeSwitch(contrlCurVal[1], 0, myLimit, key1, key5,slideD)- key1;" + "\n" + 
				"			resultAdd = linear(Math.abs(slideD),0,100, resultAdd,easeResultY);" + "\n" + 
				"		}" + "\n" + 
				"	}" + "\n" + 
				"	return (resultVal+resultAdd)+(inputResult-key1);" + "\n" + 
				"}" + "\n" + 
				"function cosEase(val,min1,max1,input1,input2){" + "\n" + 
				"	var myCos = [];" + "\n" + 
				"    if(input1 instanceof Array){" + "\n" + 
				"        for(var x = 0; x < input1.length; x++){" + "\n" + 
				"            myCos.push(getMeCos(val, min1,max1,input1[x],input2[x]));" + "\n" + 
				"        }" + "\n" + 
				"    }else{ myCos = getMeCos(val, min1,max1,input1,input2);" + "\n" + 
				"	}return myCos;" + "\n" + 
				"	function getMeCos(val,min1,max1,input1,input2){" + "\n" + 
				"		var mapVal = moClamp(val/(max1-min1),0,1);" + "\n" + 
				"		var c = input2 - input1;" + "\n" + 
				"		var myCos2 = -c * Math.cos(mapVal * (Math.PI/2)) + c+ input1;" + "\n" + 
				"		return myCos2;" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"function sinEase(val,min1,max1,input1,input2){" + "\n" + 
				"	var mySin = [];" + "\n" + 
				"    if(input1 instanceof Array){" + "\n" + 
				"        for(var x = 0; x < input1.length; x++){" + "\n" + 
				"            mySin.push(getMeSin(val, min1,max1,input1[x],input2[x]));" + "\n" + 
				"        }" + "\n" + 
				"    }else{ mySin = getMeSin(val, min1,max1,input1,input2);" + "\n" + 
				"	}return mySin;" + "\n" + 
				"	function getMeSin(val,min1,max1,input1,input2){" + "\n" + 
				"		var mapVal = moClamp(val/(max1-min1),0,1);" + "\n" + 
				"		var c = input2 - input1;" + "\n" + 
				"		var mySin2 = c * Math.sin(mapVal * (Math.PI/2)) + input1;" + "\n" + 
				"		return mySin2;" + "\n" + 
				"    }" + "\n" + 
				"}" + "\n" + 
				"function easeSwitch(val,min1,max1,input1,input2,morph){" + "\n" + 
				"	if(morph < 0){" + "\n" + 
				"		return cosEase(val,min1,max1,input1,input2);" + "\n" + 
				"	}else{" + "\n" + 
				"		return sinEase(val,min1,max1,input1,input2);" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"function unArray(inKey){" + "\n" + 
				"    if(inKey instanceof Array && inKey.length === 1){" + "\n" + 
				"        return inKey[0];" + "\n" + 
				"    }else{" + "\n" + 
				"        return inKey;" + "\n" + 
				"    }" + "\n" + 
				"}" + "\n" + 
				"function moClamp(a,b,c){" + "\n" + 
				"	if(!(a instanceof Array)){" + "\n" + 
				"		return (Math.max(b, Math.min(c, a)));" + "\n" + 
				"	}else{" + "\n" + 
				"		var aryHold = [];" + "\n" + 
				"		for(var x = 0; x < a.length; x++){" + "\n" + 
				"			aryHold.push(Math.max(b, Math.min(c, a[x])));" + "\n" + 
				"		}return aryHold;" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"joystick(value);";
		} catch (err) {}
		try {
			eyeR2.property("ADBE Transform Group").property("ADBE Rotate Z").expression = "transform.rotation+thisComp.layer(\"Ctrl Eyes\").effect(\"EVT4.1 Eyes Control\")(12);";
		} catch (err) {}
		try {
			eyeL.property("ADBE Mask Parade").property(1).property("ADBE Mask Offset").expression = "thisComp.layer(\"Ctrl Eyes\").effect(\"EVT4.1 Eyes Control\")(7)";
		} catch (err) {}
		try {
			eyeL.property("ADBE Mask Parade").property(2).property("ADBE Mask Offset").expression = "thisComp.layer(\"Ctrl Eyes\").effect(\"EVT4.1 Eyes Control\")(8)";
		} catch (err) {}
		try {
			eyeL.property("ADBE Transform Group").property("ADBE Position").expression = "/////// BEGIN JOYSTICK CODE ///////" + "\n" + 
				"function joystick(inputResult){" + "\n" + 
				"    var easeOverride_right = null;" + "\n" + 
				"    var easeOverride_left =  null;" + "\n" + 
				"    var easeOverride_up =    null;" + "\n" + 
				"    var easeOverride_down =  null;" + "\n" + 
				"	var contrl = thisComp.layer(\"Ctrl Eyes Position\");" + "\n" + 
				"	var myLimit = contrl(\"ADBE Effect Parade\")(\"joystickLimit\")(\"ADBE Slider Control-0001\");" + "\n" + 
				"	var contrlCurVal = contrl(\"ADBE Transform Group\")(\"ADBE Position\");" + "\n" + 
				"	var resultVal;" + "\n" + 
				"	var key1 = [50,50,0];" + "\n" + 
				"	var key2 = [56,50,0];" + "\n" + 
				"	var key3 = [44,50,0];" + "\n" + 
				"	var key4 = [50,44,0];" + "\n" + 
				"	var key5 = [50,56,0];" + "\n" + 
				"    key1 = unArray(key1);" + "\n" + 
				"    key2 = unArray(key2);" + "\n" + 
				"    key3 = unArray(key3);" + "\n" + 
				"    key4 = unArray(key4);" + "\n" + 
				"    key5 = unArray(key5);" + "\n" + 
				"	try{" + "\n" + 
				"        if(!thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\").active){" + "\n" + 
				"			throw (\"inactive\");" + "\n" + 
				"        }" + "\n" + 
				"		slideR = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0001\");" + "\n" + 
				"		slideL = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0002\");" + "\n" + 
				"		slideU = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0003\");" + "\n" + 
				"		slideD = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0004\");" + "\n" + 
				"	}catch(err){" + "\n" + 
				"		slideR = 0;" + "\n" + 
				"		slideL = 0;" + "\n" + 
				"		slideU = 0;" + "\n" + 
				"		slideD = 0;" + "\n" + 
				"	}" + "\n" + 
				"    if(easeOverride_right !== null && !isNaN(easeOverride_right)){" + "\n" + 
				"        slideR = moClamp(easeOverride_right,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_left !== null && !isNaN(easeOverride_left)){" + "\n" + 
				"        slideL = moClamp(easeOverride_left,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_up !== null && !isNaN(easeOverride_up)){" + "\n" + 
				"        slideU = moClamp(easeOverride_up,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_down !== null && !isNaN(easeOverride_down)){" + "\n" + 
				"        slideD = moClamp(easeOverride_down,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"	var easeResultX,easeResultY;" + "\n" + 
				"	if(contrlCurVal[0]>=0){" + "\n" + 
				"		resultVal = linear(contrlCurVal[0], 0, myLimit, key1, key2);" + "\n" + 
				"		if(slideR !==0){" + "\n" + 
				"			easeResultX = easeSwitch(contrlCurVal[0], 0, myLimit, key1, key2,slideR);" + "\n" + 
				"			resultVal = linear(Math.abs(slideR),0,100, resultVal,easeResultX);" + "\n" + 
				"		}" + "\n" + 
				"	}else{" + "\n" + 
				"		resultVal = linear(-contrlCurVal[0], 0, myLimit, key1, key3);" + "\n" + 
				"		if(slideL !==0){" + "\n" + 
				"			easeResultX = easeSwitch(-contrlCurVal[0], 0, myLimit, key1, key3,slideL);" + "\n" + 
				"			resultVal = linear(Math.abs(slideL),0,100, resultVal,easeResultX);" + "\n" + 
				"		}" + "\n" + 
				"	}" + "\n" + 
				"	var resultAdd = 0;" + "\n" + 
				"	if(contrlCurVal[1]<=0){" + "\n" + 
				"		resultAdd = linear(-contrlCurVal[1], 0, myLimit, key1, key4)- key1;" + "\n" + 
				"		if(slideU !==0){" + "\n" + 
				"			easeResultY = easeSwitch(-contrlCurVal[1], 0, myLimit, key1, key4,slideU)- key1;" + "\n" + 
				"			resultAdd = linear(Math.abs(slideU),0,100, resultAdd,easeResultY);" + "\n" + 
				"		}" + "\n" + 
				"	}else{" + "\n" + 
				"		resultAdd = linear(contrlCurVal[1], 0, myLimit, key1, key5)- key1;" + "\n" + 
				"		if(slideD!==0){" + "\n" + 
				"			easeResultY = easeSwitch(contrlCurVal[1], 0, myLimit, key1, key5,slideD)- key1;" + "\n" + 
				"			resultAdd = linear(Math.abs(slideD),0,100, resultAdd,easeResultY);" + "\n" + 
				"		}" + "\n" + 
				"	}" + "\n" + 
				"	return (resultVal+resultAdd)+(inputResult-key1);" + "\n" + 
				"}" + "\n" + 
				"function cosEase(val,min1,max1,input1,input2){" + "\n" + 
				"	var myCos = [];" + "\n" + 
				"    if(input1 instanceof Array){" + "\n" + 
				"        for(var x = 0; x < input1.length; x++){" + "\n" + 
				"            myCos.push(getMeCos(val, min1,max1,input1[x],input2[x]));" + "\n" + 
				"        }" + "\n" + 
				"    }else{ myCos = getMeCos(val, min1,max1,input1,input2);" + "\n" + 
				"	}return myCos;" + "\n" + 
				"	function getMeCos(val,min1,max1,input1,input2){" + "\n" + 
				"		var mapVal = moClamp(val/(max1-min1),0,1);" + "\n" + 
				"		var c = input2 - input1;" + "\n" + 
				"		var myCos2 = -c * Math.cos(mapVal * (Math.PI/2)) + c+ input1;" + "\n" + 
				"		return myCos2;" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"function sinEase(val,min1,max1,input1,input2){" + "\n" + 
				"	var mySin = [];" + "\n" + 
				"    if(input1 instanceof Array){" + "\n" + 
				"        for(var x = 0; x < input1.length; x++){" + "\n" + 
				"            mySin.push(getMeSin(val, min1,max1,input1[x],input2[x]));" + "\n" + 
				"        }" + "\n" + 
				"    }else{ mySin = getMeSin(val, min1,max1,input1,input2);" + "\n" + 
				"	}return mySin;" + "\n" + 
				"	function getMeSin(val,min1,max1,input1,input2){" + "\n" + 
				"		var mapVal = moClamp(val/(max1-min1),0,1);" + "\n" + 
				"		var c = input2 - input1;" + "\n" + 
				"		var mySin2 = c * Math.sin(mapVal * (Math.PI/2)) + input1;" + "\n" + 
				"		return mySin2;" + "\n" + 
				"    }" + "\n" + 
				"}" + "\n" + 
				"function easeSwitch(val,min1,max1,input1,input2,morph){" + "\n" + 
				"	if(morph < 0){" + "\n" + 
				"		return cosEase(val,min1,max1,input1,input2);" + "\n" + 
				"	}else{" + "\n" + 
				"		return sinEase(val,min1,max1,input1,input2);" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"function unArray(inKey){" + "\n" + 
				"    if(inKey instanceof Array && inKey.length === 1){" + "\n" + 
				"        return inKey[0];" + "\n" + 
				"    }else{" + "\n" + 
				"        return inKey;" + "\n" + 
				"    }" + "\n" + 
				"}" + "\n" + 
				"function moClamp(a,b,c){" + "\n" + 
				"	if(!(a instanceof Array)){" + "\n" + 
				"		return (Math.max(b, Math.min(c, a)));" + "\n" + 
				"	}else{" + "\n" + 
				"		var aryHold = [];" + "\n" + 
				"		for(var x = 0; x < a.length; x++){" + "\n" + 
				"			aryHold.push(Math.max(b, Math.min(c, a[x])));" + "\n" + 
				"		}return aryHold;" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"joystick(value);";
		} catch (err) {}
		try {
			eyeL2.property("ADBE Mask Parade").property(1).property("ADBE Mask Offset").expression = "thisComp.layer(\"Ctrl Eyes\").effect(\"EVT4.1 Eyes Control\")(7)";
		} catch (err) {}
		try {
			eyeL2.property("ADBE Mask Parade").property(2).property("ADBE Mask Offset").expression = "thisComp.layer(\"Ctrl Eyes\").effect(\"EVT4.1 Eyes Control\")(8)";
		} catch (err) {}
		try {
			eyeL2.property("ADBE Transform Group").property("ADBE Position").expression = "/////// BEGIN JOYSTICK CODE ///////" + "\n" + 
				"function joystick(inputResult){" + "\n" + 
				"    var easeOverride_right = null;" + "\n" + 
				"    var easeOverride_left =  null;" + "\n" + 
				"    var easeOverride_up =    null;" + "\n" + 
				"    var easeOverride_down =  null;" + "\n" + 
				"	var contrl = thisComp.layer(\"Ctrl Head\");" + "\n" + 
				"	var myLimit = contrl(\"ADBE Effect Parade\")(\"joystickLimit\")(\"ADBE Slider Control-0001\");" + "\n" + 
				"	var contrlCurVal = contrl(\"ADBE Transform Group\")(\"ADBE Position\");" + "\n" + 
				"	var resultVal;" + "\n" + 
				"	var key1 = [186,220.5,0];" + "\n" + 
				"	var key2 = [211.306121826172,220.5,0];" + "\n" + 
				"	var key3 = [167.836730957031,220.5,0];" + "\n" + 
				"	var key4 = [186,205.598037719727,0];" + "\n" + 
				"	var key5 = [186,234.362747192383,0];" + "\n" + 
				"    key1 = unArray(key1);" + "\n" + 
				"    key2 = unArray(key2);" + "\n" + 
				"    key3 = unArray(key3);" + "\n" + 
				"    key4 = unArray(key4);" + "\n" + 
				"    key5 = unArray(key5);" + "\n" + 
				"	try{" + "\n" + 
				"        if(!thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\").active){" + "\n" + 
				"			throw (\"inactive\");" + "\n" + 
				"        }" + "\n" + 
				"		slideR = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0001\");" + "\n" + 
				"		slideL = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0002\");" + "\n" + 
				"		slideU = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0003\");" + "\n" + 
				"		slideD = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0004\");" + "\n" + 
				"	}catch(err){" + "\n" + 
				"		slideR = 0;" + "\n" + 
				"		slideL = 0;" + "\n" + 
				"		slideU = 0;" + "\n" + 
				"		slideD = 0;" + "\n" + 
				"	}" + "\n" + 
				"    if(easeOverride_right !== null && !isNaN(easeOverride_right)){" + "\n" + 
				"        slideR = moClamp(easeOverride_right,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_left !== null && !isNaN(easeOverride_left)){" + "\n" + 
				"        slideL = moClamp(easeOverride_left,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_up !== null && !isNaN(easeOverride_up)){" + "\n" + 
				"        slideU = moClamp(easeOverride_up,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_down !== null && !isNaN(easeOverride_down)){" + "\n" + 
				"        slideD = moClamp(easeOverride_down,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"	var easeResultX,easeResultY;" + "\n" + 
				"	if(contrlCurVal[0]>=0){" + "\n" + 
				"		resultVal = linear(contrlCurVal[0], 0, myLimit, key1, key2);" + "\n" + 
				"		if(slideR !==0){" + "\n" + 
				"			easeResultX = easeSwitch(contrlCurVal[0], 0, myLimit, key1, key2,slideR);" + "\n" + 
				"			resultVal = linear(Math.abs(slideR),0,100, resultVal,easeResultX);" + "\n" + 
				"		}" + "\n" + 
				"	}else{" + "\n" + 
				"		resultVal = linear(-contrlCurVal[0], 0, myLimit, key1, key3);" + "\n" + 
				"		if(slideL !==0){" + "\n" + 
				"			easeResultX = easeSwitch(-contrlCurVal[0], 0, myLimit, key1, key3,slideL);" + "\n" + 
				"			resultVal = linear(Math.abs(slideL),0,100, resultVal,easeResultX);" + "\n" + 
				"		}" + "\n" + 
				"	}" + "\n" + 
				"	var resultAdd = 0;" + "\n" + 
				"	if(contrlCurVal[1]<=0){" + "\n" + 
				"		resultAdd = linear(-contrlCurVal[1], 0, myLimit, key1, key4)- key1;" + "\n" + 
				"		if(slideU !==0){" + "\n" + 
				"			easeResultY = easeSwitch(-contrlCurVal[1], 0, myLimit, key1, key4,slideU)- key1;" + "\n" + 
				"			resultAdd = linear(Math.abs(slideU),0,100, resultAdd,easeResultY);" + "\n" + 
				"		}" + "\n" + 
				"	}else{" + "\n" + 
				"		resultAdd = linear(contrlCurVal[1], 0, myLimit, key1, key5)- key1;" + "\n" + 
				"		if(slideD!==0){" + "\n" + 
				"			easeResultY = easeSwitch(contrlCurVal[1], 0, myLimit, key1, key5,slideD)- key1;" + "\n" + 
				"			resultAdd = linear(Math.abs(slideD),0,100, resultAdd,easeResultY);" + "\n" + 
				"		}" + "\n" + 
				"	}" + "\n" + 
				"	return (resultVal+resultAdd)+(inputResult-key1);" + "\n" + 
				"}" + "\n" + 
				"function cosEase(val,min1,max1,input1,input2){" + "\n" + 
				"	var myCos = [];" + "\n" + 
				"    if(input1 instanceof Array){" + "\n" + 
				"        for(var x = 0; x < input1.length; x++){" + "\n" + 
				"            myCos.push(getMeCos(val, min1,max1,input1[x],input2[x]));" + "\n" + 
				"        }" + "\n" + 
				"    }else{ myCos = getMeCos(val, min1,max1,input1,input2);" + "\n" + 
				"	}return myCos;" + "\n" + 
				"	function getMeCos(val,min1,max1,input1,input2){" + "\n" + 
				"		var mapVal = moClamp(val/(max1-min1),0,1);" + "\n" + 
				"		var c = input2 - input1;" + "\n" + 
				"		var myCos2 = -c * Math.cos(mapVal * (Math.PI/2)) + c+ input1;" + "\n" + 
				"		return myCos2;" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"function sinEase(val,min1,max1,input1,input2){" + "\n" + 
				"	var mySin = [];" + "\n" + 
				"    if(input1 instanceof Array){" + "\n" + 
				"        for(var x = 0; x < input1.length; x++){" + "\n" + 
				"            mySin.push(getMeSin(val, min1,max1,input1[x],input2[x]));" + "\n" + 
				"        }" + "\n" + 
				"    }else{ mySin = getMeSin(val, min1,max1,input1,input2);" + "\n" + 
				"	}return mySin;" + "\n" + 
				"	function getMeSin(val,min1,max1,input1,input2){" + "\n" + 
				"		var mapVal = moClamp(val/(max1-min1),0,1);" + "\n" + 
				"		var c = input2 - input1;" + "\n" + 
				"		var mySin2 = c * Math.sin(mapVal * (Math.PI/2)) + input1;" + "\n" + 
				"		return mySin2;" + "\n" + 
				"    }" + "\n" + 
				"}" + "\n" + 
				"function easeSwitch(val,min1,max1,input1,input2,morph){" + "\n" + 
				"	if(morph < 0){" + "\n" + 
				"		return cosEase(val,min1,max1,input1,input2);" + "\n" + 
				"	}else{" + "\n" + 
				"		return sinEase(val,min1,max1,input1,input2);" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"function unArray(inKey){" + "\n" + 
				"    if(inKey instanceof Array && inKey.length === 1){" + "\n" + 
				"        return inKey[0];" + "\n" + 
				"    }else{" + "\n" + 
				"        return inKey;" + "\n" + 
				"    }" + "\n" + 
				"}" + "\n" + 
				"function moClamp(a,b,c){" + "\n" + 
				"	if(!(a instanceof Array)){" + "\n" + 
				"		return (Math.max(b, Math.min(c, a)));" + "\n" + 
				"	}else{" + "\n" + 
				"		var aryHold = [];" + "\n" + 
				"		for(var x = 0; x < a.length; x++){" + "\n" + 
				"			aryHold.push(Math.max(b, Math.min(c, a[x])));" + "\n" + 
				"		}return aryHold;" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"joystick(value);";
		} catch (err) {}
		try {
			eyeL2.property("ADBE Transform Group").property("ADBE Scale").expression = "/////// BEGIN JOYSTICK CODE ///////" + "\n" + 
				"function joystick(inputResult){" + "\n" + 
				"    var easeOverride_right = null;" + "\n" + 
				"    var easeOverride_left =  null;" + "\n" + 
				"    var easeOverride_up =    null;" + "\n" + 
				"    var easeOverride_down =  null;" + "\n" + 
				"	var contrl = thisComp.layer(\"Ctrl Head\");" + "\n" + 
				"	var myLimit = contrl(\"ADBE Effect Parade\")(\"joystickLimit\")(\"ADBE Slider Control-0001\");" + "\n" + 
				"	var contrlCurVal = contrl(\"ADBE Transform Group\")(\"ADBE Position\");" + "\n" + 
				"	var resultVal;" + "\n" + 
				"	var key1 = [100,100,100];" + "\n" + 
				"	var key2 = [100,100,100];" + "\n" + 
				"	var key3 = [90,100,100];" + "\n" + 
				"	var key4 = [100,100,100];" + "\n" + 
				"	var key5 = [100,100,100];" + "\n" + 
				"    key1 = unArray(key1);" + "\n" + 
				"    key2 = unArray(key2);" + "\n" + 
				"    key3 = unArray(key3);" + "\n" + 
				"    key4 = unArray(key4);" + "\n" + 
				"    key5 = unArray(key5);" + "\n" + 
				"	try{" + "\n" + 
				"        if(!thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\").active){" + "\n" + 
				"			throw (\"inactive\");" + "\n" + 
				"        }" + "\n" + 
				"		slideR = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0001\");" + "\n" + 
				"		slideL = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0002\");" + "\n" + 
				"		slideU = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0003\");" + "\n" + 
				"		slideD = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0004\");" + "\n" + 
				"	}catch(err){" + "\n" + 
				"		slideR = 0;" + "\n" + 
				"		slideL = 0;" + "\n" + 
				"		slideU = 0;" + "\n" + 
				"		slideD = 0;" + "\n" + 
				"	}" + "\n" + 
				"    if(easeOverride_right !== null && !isNaN(easeOverride_right)){" + "\n" + 
				"        slideR = moClamp(easeOverride_right,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_left !== null && !isNaN(easeOverride_left)){" + "\n" + 
				"        slideL = moClamp(easeOverride_left,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_up !== null && !isNaN(easeOverride_up)){" + "\n" + 
				"        slideU = moClamp(easeOverride_up,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_down !== null && !isNaN(easeOverride_down)){" + "\n" + 
				"        slideD = moClamp(easeOverride_down,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"	var easeResultX,easeResultY;" + "\n" + 
				"	if(contrlCurVal[0]>=0){" + "\n" + 
				"		resultVal = linear(contrlCurVal[0], 0, myLimit, key1, key2);" + "\n" + 
				"		if(slideR !==0){" + "\n" + 
				"			easeResultX = easeSwitch(contrlCurVal[0], 0, myLimit, key1, key2,slideR);" + "\n" + 
				"			resultVal = linear(Math.abs(slideR),0,100, resultVal,easeResultX);" + "\n" + 
				"		}" + "\n" + 
				"	}else{" + "\n" + 
				"		resultVal = linear(-contrlCurVal[0], 0, myLimit, key1, key3);" + "\n" + 
				"		if(slideL !==0){" + "\n" + 
				"			easeResultX = easeSwitch(-contrlCurVal[0], 0, myLimit, key1, key3,slideL);" + "\n" + 
				"			resultVal = linear(Math.abs(slideL),0,100, resultVal,easeResultX);" + "\n" + 
				"		}" + "\n" + 
				"	}" + "\n" + 
				"	var resultAdd = 0;" + "\n" + 
				"	if(contrlCurVal[1]<=0){" + "\n" + 
				"		resultAdd = linear(-contrlCurVal[1], 0, myLimit, key1, key4)- key1;" + "\n" + 
				"		if(slideU !==0){" + "\n" + 
				"			easeResultY = easeSwitch(-contrlCurVal[1], 0, myLimit, key1, key4,slideU)- key1;" + "\n" + 
				"			resultAdd = linear(Math.abs(slideU),0,100, resultAdd,easeResultY);" + "\n" + 
				"		}" + "\n" + 
				"	}else{" + "\n" + 
				"		resultAdd = linear(contrlCurVal[1], 0, myLimit, key1, key5)- key1;" + "\n" + 
				"		if(slideD!==0){" + "\n" + 
				"			easeResultY = easeSwitch(contrlCurVal[1], 0, myLimit, key1, key5,slideD)- key1;" + "\n" + 
				"			resultAdd = linear(Math.abs(slideD),0,100, resultAdd,easeResultY);" + "\n" + 
				"		}" + "\n" + 
				"	}" + "\n" + 
				"	return (resultVal+resultAdd)+(inputResult-key1);" + "\n" + 
				"}" + "\n" + 
				"function cosEase(val,min1,max1,input1,input2){" + "\n" + 
				"	var myCos = [];" + "\n" + 
				"    if(input1 instanceof Array){" + "\n" + 
				"        for(var x = 0; x < input1.length; x++){" + "\n" + 
				"            myCos.push(getMeCos(val, min1,max1,input1[x],input2[x]));" + "\n" + 
				"        }" + "\n" + 
				"    }else{ myCos = getMeCos(val, min1,max1,input1,input2);" + "\n" + 
				"	}return myCos;" + "\n" + 
				"	function getMeCos(val,min1,max1,input1,input2){" + "\n" + 
				"		var mapVal = moClamp(val/(max1-min1),0,1);" + "\n" + 
				"		var c = input2 - input1;" + "\n" + 
				"		var myCos2 = -c * Math.cos(mapVal * (Math.PI/2)) + c+ input1;" + "\n" + 
				"		return myCos2;" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"function sinEase(val,min1,max1,input1,input2){" + "\n" + 
				"	var mySin = [];" + "\n" + 
				"    if(input1 instanceof Array){" + "\n" + 
				"        for(var x = 0; x < input1.length; x++){" + "\n" + 
				"            mySin.push(getMeSin(val, min1,max1,input1[x],input2[x]));" + "\n" + 
				"        }" + "\n" + 
				"    }else{ mySin = getMeSin(val, min1,max1,input1,input2);" + "\n" + 
				"	}return mySin;" + "\n" + 
				"	function getMeSin(val,min1,max1,input1,input2){" + "\n" + 
				"		var mapVal = moClamp(val/(max1-min1),0,1);" + "\n" + 
				"		var c = input2 - input1;" + "\n" + 
				"		var mySin2 = c * Math.sin(mapVal * (Math.PI/2)) + input1;" + "\n" + 
				"		return mySin2;" + "\n" + 
				"    }" + "\n" + 
				"}" + "\n" + 
				"function easeSwitch(val,min1,max1,input1,input2,morph){" + "\n" + 
				"	if(morph < 0){" + "\n" + 
				"		return cosEase(val,min1,max1,input1,input2);" + "\n" + 
				"	}else{" + "\n" + 
				"		return sinEase(val,min1,max1,input1,input2);" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"function unArray(inKey){" + "\n" + 
				"    if(inKey instanceof Array && inKey.length === 1){" + "\n" + 
				"        return inKey[0];" + "\n" + 
				"    }else{" + "\n" + 
				"        return inKey;" + "\n" + 
				"    }" + "\n" + 
				"}" + "\n" + 
				"function moClamp(a,b,c){" + "\n" + 
				"	if(!(a instanceof Array)){" + "\n" + 
				"		return (Math.max(b, Math.min(c, a)));" + "\n" + 
				"	}else{" + "\n" + 
				"		var aryHold = [];" + "\n" + 
				"		for(var x = 0; x < a.length; x++){" + "\n" + 
				"			aryHold.push(Math.max(b, Math.min(c, a[x])));" + "\n" + 
				"		}return aryHold;" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"joystick(value);";
		} catch (err) {}
		try {
			eyeL2.property("ADBE Transform Group").property("ADBE Rotate Z").expression = "transform.rotation-thisComp.layer(\"Ctrl Eyes\").effect(\"EVT4.1 Eyes Control\")(12);";
		} catch (err) {}
		try {
			hairFront.property("ADBE Transform Group").property("ADBE Position").expression = "/////// BEGIN JOYSTICK CODE ///////" + "\n" + 
				"function joystick(inputResult){" + "\n" + 
				"    var easeOverride_right = null;" + "\n" + 
				"    var easeOverride_left =  null;" + "\n" + 
				"    var easeOverride_up =    null;" + "\n" + 
				"    var easeOverride_down =  null;" + "\n" + 
				"	var contrl = thisComp.layer(\"Ctrl Head\");" + "\n" + 
				"	var myLimit = contrl(\"ADBE Effect Parade\")(\"joystickLimit\")(\"ADBE Slider Control-0001\");" + "\n" + 
				"	var contrlCurVal = contrl(\"ADBE Transform Group\")(\"ADBE Position\");" + "\n" + 
				"	var resultVal;" + "\n" + 
				"	var key1 = [225,138,0];" + "\n" + 
				"	var key2 = [238,138,0];" + "\n" + 
				"	var key3 = [212,138,0];" + "\n" + 
				"	var key4 = [225,122.254905700684,0];" + "\n" + 
				"	var key5 = [225,157.784317016602,0];" + "\n" + 
				"    key1 = unArray(key1);" + "\n" + 
				"    key2 = unArray(key2);" + "\n" + 
				"    key3 = unArray(key3);" + "\n" + 
				"    key4 = unArray(key4);" + "\n" + 
				"    key5 = unArray(key5);" + "\n" + 
				"	try{" + "\n" + 
				"        if(!thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\").active){" + "\n" + 
				"			throw (\"inactive\");" + "\n" + 
				"        }" + "\n" + 
				"		slideR = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0001\");" + "\n" + 
				"		slideL = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0002\");" + "\n" + 
				"		slideU = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0003\");" + "\n" + 
				"		slideD = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0004\");" + "\n" + 
				"	}catch(err){" + "\n" + 
				"		slideR = 0;" + "\n" + 
				"		slideL = 0;" + "\n" + 
				"		slideU = 0;" + "\n" + 
				"		slideD = 0;" + "\n" + 
				"	}" + "\n" + 
				"    if(easeOverride_right !== null && !isNaN(easeOverride_right)){" + "\n" + 
				"        slideR = moClamp(easeOverride_right,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_left !== null && !isNaN(easeOverride_left)){" + "\n" + 
				"        slideL = moClamp(easeOverride_left,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_up !== null && !isNaN(easeOverride_up)){" + "\n" + 
				"        slideU = moClamp(easeOverride_up,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_down !== null && !isNaN(easeOverride_down)){" + "\n" + 
				"        slideD = moClamp(easeOverride_down,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"	var easeResultX,easeResultY;" + "\n" + 
				"	if(contrlCurVal[0]>=0){" + "\n" + 
				"		resultVal = linear(contrlCurVal[0], 0, myLimit, key1, key2);" + "\n" + 
				"		if(slideR !==0){" + "\n" + 
				"			easeResultX = easeSwitch(contrlCurVal[0], 0, myLimit, key1, key2,slideR);" + "\n" + 
				"			resultVal = linear(Math.abs(slideR),0,100, resultVal,easeResultX);" + "\n" + 
				"		}" + "\n" + 
				"	}else{" + "\n" + 
				"		resultVal = linear(-contrlCurVal[0], 0, myLimit, key1, key3);" + "\n" + 
				"		if(slideL !==0){" + "\n" + 
				"			easeResultX = easeSwitch(-contrlCurVal[0], 0, myLimit, key1, key3,slideL);" + "\n" + 
				"			resultVal = linear(Math.abs(slideL),0,100, resultVal,easeResultX);" + "\n" + 
				"		}" + "\n" + 
				"	}" + "\n" + 
				"	var resultAdd = 0;" + "\n" + 
				"	if(contrlCurVal[1]<=0){" + "\n" + 
				"		resultAdd = linear(-contrlCurVal[1], 0, myLimit, key1, key4)- key1;" + "\n" + 
				"		if(slideU !==0){" + "\n" + 
				"			easeResultY = easeSwitch(-contrlCurVal[1], 0, myLimit, key1, key4,slideU)- key1;" + "\n" + 
				"			resultAdd = linear(Math.abs(slideU),0,100, resultAdd,easeResultY);" + "\n" + 
				"		}" + "\n" + 
				"	}else{" + "\n" + 
				"		resultAdd = linear(contrlCurVal[1], 0, myLimit, key1, key5)- key1;" + "\n" + 
				"		if(slideD!==0){" + "\n" + 
				"			easeResultY = easeSwitch(contrlCurVal[1], 0, myLimit, key1, key5,slideD)- key1;" + "\n" + 
				"			resultAdd = linear(Math.abs(slideD),0,100, resultAdd,easeResultY);" + "\n" + 
				"		}" + "\n" + 
				"	}" + "\n" + 
				"	return (resultVal+resultAdd)+(inputResult-key1);" + "\n" + 
				"}" + "\n" + 
				"function cosEase(val,min1,max1,input1,input2){" + "\n" + 
				"	var myCos = [];" + "\n" + 
				"    if(input1 instanceof Array){" + "\n" + 
				"        for(var x = 0; x < input1.length; x++){" + "\n" + 
				"            myCos.push(getMeCos(val, min1,max1,input1[x],input2[x]));" + "\n" + 
				"        }" + "\n" + 
				"    }else{ myCos = getMeCos(val, min1,max1,input1,input2);" + "\n" + 
				"	}return myCos;" + "\n" + 
				"	function getMeCos(val,min1,max1,input1,input2){" + "\n" + 
				"		var mapVal = moClamp(val/(max1-min1),0,1);" + "\n" + 
				"		var c = input2 - input1;" + "\n" + 
				"		var myCos2 = -c * Math.cos(mapVal * (Math.PI/2)) + c+ input1;" + "\n" + 
				"		return myCos2;" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"function sinEase(val,min1,max1,input1,input2){" + "\n" + 
				"	var mySin = [];" + "\n" + 
				"    if(input1 instanceof Array){" + "\n" + 
				"        for(var x = 0; x < input1.length; x++){" + "\n" + 
				"            mySin.push(getMeSin(val, min1,max1,input1[x],input2[x]));" + "\n" + 
				"        }" + "\n" + 
				"    }else{ mySin = getMeSin(val, min1,max1,input1,input2);" + "\n" + 
				"	}return mySin;" + "\n" + 
				"	function getMeSin(val,min1,max1,input1,input2){" + "\n" + 
				"		var mapVal = moClamp(val/(max1-min1),0,1);" + "\n" + 
				"		var c = input2 - input1;" + "\n" + 
				"		var mySin2 = c * Math.sin(mapVal * (Math.PI/2)) + input1;" + "\n" + 
				"		return mySin2;" + "\n" + 
				"    }" + "\n" + 
				"}" + "\n" + 
				"function easeSwitch(val,min1,max1,input1,input2,morph){" + "\n" + 
				"	if(morph < 0){" + "\n" + 
				"		return cosEase(val,min1,max1,input1,input2);" + "\n" + 
				"	}else{" + "\n" + 
				"		return sinEase(val,min1,max1,input1,input2);" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"function unArray(inKey){" + "\n" + 
				"    if(inKey instanceof Array && inKey.length === 1){" + "\n" + 
				"        return inKey[0];" + "\n" + 
				"    }else{" + "\n" + 
				"        return inKey;" + "\n" + 
				"    }" + "\n" + 
				"}" + "\n" + 
				"function moClamp(a,b,c){" + "\n" + 
				"	if(!(a instanceof Array)){" + "\n" + 
				"		return (Math.max(b, Math.min(c, a)));" + "\n" + 
				"	}else{" + "\n" + 
				"		var aryHold = [];" + "\n" + 
				"		for(var x = 0; x < a.length; x++){" + "\n" + 
				"			aryHold.push(Math.max(b, Math.min(c, a[x])));" + "\n" + 
				"		}return aryHold;" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"joystick(value);";
		} catch (err) {}
		try {
			noseShape.property("ADBE Transform Group").property("ADBE Position").expression = "/////// BEGIN JOYSTICK CODE ///////" + "\n" + 
				"function joystick(inputResult){" + "\n" + 
				"    var easeOverride_right = null;" + "\n" + 
				"    var easeOverride_left =  null;" + "\n" + 
				"    var easeOverride_up =    null;" + "\n" + 
				"    var easeOverride_down =  null;" + "\n" + 
				"	var contrl = thisComp.layer(\"Ctrl Head\");" + "\n" + 
				"	var myLimit = contrl(\"ADBE Effect Parade\")(\"joystickLimit\")(\"ADBE Slider Control-0001\");" + "\n" + 
				"	var contrlCurVal = contrl(\"ADBE Transform Group\")(\"ADBE Position\");" + "\n" + 
				"	var resultVal;" + "\n" + 
				"	var key1 = [225,224,0];" + "\n" + 
				"	var key2 = [256.326538085938,224,0];" + "\n" + 
				"	var key3 = [194.183670043945,224,0];" + "\n" + 
				"	var key4 = [225,205.67707824707,0];" + "\n" + 
				"	var key5 = [225,241.401351928711,0];" + "\n" + 
				"    key1 = unArray(key1);" + "\n" + 
				"    key2 = unArray(key2);" + "\n" + 
				"    key3 = unArray(key3);" + "\n" + 
				"    key4 = unArray(key4);" + "\n" + 
				"    key5 = unArray(key5);" + "\n" + 
				"	try{" + "\n" + 
				"        if(!thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\").active){" + "\n" + 
				"			throw (\"inactive\");" + "\n" + 
				"        }" + "\n" + 
				"		slideR = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0001\");" + "\n" + 
				"		slideL = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0002\");" + "\n" + 
				"		slideU = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0003\");" + "\n" + 
				"		slideD = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0004\");" + "\n" + 
				"	}catch(err){" + "\n" + 
				"		slideR = 0;" + "\n" + 
				"		slideL = 0;" + "\n" + 
				"		slideU = 0;" + "\n" + 
				"		slideD = 0;" + "\n" + 
				"	}" + "\n" + 
				"    if(easeOverride_right !== null && !isNaN(easeOverride_right)){" + "\n" + 
				"        slideR = moClamp(easeOverride_right,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_left !== null && !isNaN(easeOverride_left)){" + "\n" + 
				"        slideL = moClamp(easeOverride_left,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_up !== null && !isNaN(easeOverride_up)){" + "\n" + 
				"        slideU = moClamp(easeOverride_up,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_down !== null && !isNaN(easeOverride_down)){" + "\n" + 
				"        slideD = moClamp(easeOverride_down,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"	var easeResultX,easeResultY;" + "\n" + 
				"	if(contrlCurVal[0]>=0){" + "\n" + 
				"		resultVal = linear(contrlCurVal[0], 0, myLimit, key1, key2);" + "\n" + 
				"		if(slideR !==0){" + "\n" + 
				"			easeResultX = easeSwitch(contrlCurVal[0], 0, myLimit, key1, key2,slideR);" + "\n" + 
				"			resultVal = linear(Math.abs(slideR),0,100, resultVal,easeResultX);" + "\n" + 
				"		}" + "\n" + 
				"	}else{" + "\n" + 
				"		resultVal = linear(-contrlCurVal[0], 0, myLimit, key1, key3);" + "\n" + 
				"		if(slideL !==0){" + "\n" + 
				"			easeResultX = easeSwitch(-contrlCurVal[0], 0, myLimit, key1, key3,slideL);" + "\n" + 
				"			resultVal = linear(Math.abs(slideL),0,100, resultVal,easeResultX);" + "\n" + 
				"		}" + "\n" + 
				"	}" + "\n" + 
				"	var resultAdd = 0;" + "\n" + 
				"	if(contrlCurVal[1]<=0){" + "\n" + 
				"		resultAdd = linear(-contrlCurVal[1], 0, myLimit, key1, key4)- key1;" + "\n" + 
				"		if(slideU !==0){" + "\n" + 
				"			easeResultY = easeSwitch(-contrlCurVal[1], 0, myLimit, key1, key4,slideU)- key1;" + "\n" + 
				"			resultAdd = linear(Math.abs(slideU),0,100, resultAdd,easeResultY);" + "\n" + 
				"		}" + "\n" + 
				"	}else{" + "\n" + 
				"		resultAdd = linear(contrlCurVal[1], 0, myLimit, key1, key5)- key1;" + "\n" + 
				"		if(slideD!==0){" + "\n" + 
				"			easeResultY = easeSwitch(contrlCurVal[1], 0, myLimit, key1, key5,slideD)- key1;" + "\n" + 
				"			resultAdd = linear(Math.abs(slideD),0,100, resultAdd,easeResultY);" + "\n" + 
				"		}" + "\n" + 
				"	}" + "\n" + 
				"	return (resultVal+resultAdd)+(inputResult-key1);" + "\n" + 
				"}" + "\n" + 
				"function cosEase(val,min1,max1,input1,input2){" + "\n" + 
				"	var myCos = [];" + "\n" + 
				"    if(input1 instanceof Array){" + "\n" + 
				"        for(var x = 0; x < input1.length; x++){" + "\n" + 
				"            myCos.push(getMeCos(val, min1,max1,input1[x],input2[x]));" + "\n" + 
				"        }" + "\n" + 
				"    }else{ myCos = getMeCos(val, min1,max1,input1,input2);" + "\n" + 
				"	}return myCos;" + "\n" + 
				"	function getMeCos(val,min1,max1,input1,input2){" + "\n" + 
				"		var mapVal = moClamp(val/(max1-min1),0,1);" + "\n" + 
				"		var c = input2 - input1;" + "\n" + 
				"		var myCos2 = -c * Math.cos(mapVal * (Math.PI/2)) + c+ input1;" + "\n" + 
				"		return myCos2;" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"function sinEase(val,min1,max1,input1,input2){" + "\n" + 
				"	var mySin = [];" + "\n" + 
				"    if(input1 instanceof Array){" + "\n" + 
				"        for(var x = 0; x < input1.length; x++){" + "\n" + 
				"            mySin.push(getMeSin(val, min1,max1,input1[x],input2[x]));" + "\n" + 
				"        }" + "\n" + 
				"    }else{ mySin = getMeSin(val, min1,max1,input1,input2);" + "\n" + 
				"	}return mySin;" + "\n" + 
				"	function getMeSin(val,min1,max1,input1,input2){" + "\n" + 
				"		var mapVal = moClamp(val/(max1-min1),0,1);" + "\n" + 
				"		var c = input2 - input1;" + "\n" + 
				"		var mySin2 = c * Math.sin(mapVal * (Math.PI/2)) + input1;" + "\n" + 
				"		return mySin2;" + "\n" + 
				"    }" + "\n" + 
				"}" + "\n" + 
				"function easeSwitch(val,min1,max1,input1,input2,morph){" + "\n" + 
				"	if(morph < 0){" + "\n" + 
				"		return cosEase(val,min1,max1,input1,input2);" + "\n" + 
				"	}else{" + "\n" + 
				"		return sinEase(val,min1,max1,input1,input2);" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"function unArray(inKey){" + "\n" + 
				"    if(inKey instanceof Array && inKey.length === 1){" + "\n" + 
				"        return inKey[0];" + "\n" + 
				"    }else{" + "\n" + 
				"        return inKey;" + "\n" + 
				"    }" + "\n" + 
				"}" + "\n" + 
				"function moClamp(a,b,c){" + "\n" + 
				"	if(!(a instanceof Array)){" + "\n" + 
				"		return (Math.max(b, Math.min(c, a)));" + "\n" + 
				"	}else{" + "\n" + 
				"		var aryHold = [];" + "\n" + 
				"		for(var x = 0; x < a.length; x++){" + "\n" + 
				"			aryHold.push(Math.max(b, Math.min(c, a[x])));" + "\n" + 
				"		}return aryHold;" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"joystick(value);";
		} catch (err) {}
		try {
			noseShape.property("ADBE Transform Group").property("ADBE Scale").expression = "/////// BEGIN JOYSTICK CODE ///////" + "\n" + 
				"function joystick(inputResult){" + "\n" + 
				"    var easeOverride_right = null;" + "\n" + 
				"    var easeOverride_left =  null;" + "\n" + 
				"    var easeOverride_up =    null;" + "\n" + 
				"    var easeOverride_down =  null;" + "\n" + 
				"	var contrl = thisComp.layer(\"Ctrl Head\");" + "\n" + 
				"	var myLimit = contrl(\"ADBE Effect Parade\")(\"joystickLimit\")(\"ADBE Slider Control-0001\");" + "\n" + 
				"	var contrlCurVal = contrl(\"ADBE Transform Group\")(\"ADBE Position\");" + "\n" + 
				"	var resultVal;" + "\n" + 
				"	var key1 = [100,100,100];" + "\n" + 
				"	var key2 = [100,100,100];" + "\n" + 
				"	var key3 = [100,100,100];" + "\n" + 
				"	var key4 = [100,80,100];" + "\n" + 
				"	var key5 = [100,100,100];" + "\n" + 
				"    key1 = unArray(key1);" + "\n" + 
				"    key2 = unArray(key2);" + "\n" + 
				"    key3 = unArray(key3);" + "\n" + 
				"    key4 = unArray(key4);" + "\n" + 
				"    key5 = unArray(key5);" + "\n" + 
				"	try{" + "\n" + 
				"        if(!thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\").active){" + "\n" + 
				"			throw (\"inactive\");" + "\n" + 
				"        }" + "\n" + 
				"		slideR = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0001\");" + "\n" + 
				"		slideL = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0002\");" + "\n" + 
				"		slideU = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0003\");" + "\n" + 
				"		slideD = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0004\");" + "\n" + 
				"	}catch(err){" + "\n" + 
				"		slideR = 0;" + "\n" + 
				"		slideL = 0;" + "\n" + 
				"		slideU = 0;" + "\n" + 
				"		slideD = 0;" + "\n" + 
				"	}" + "\n" + 
				"    if(easeOverride_right !== null && !isNaN(easeOverride_right)){" + "\n" + 
				"        slideR = moClamp(easeOverride_right,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_left !== null && !isNaN(easeOverride_left)){" + "\n" + 
				"        slideL = moClamp(easeOverride_left,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_up !== null && !isNaN(easeOverride_up)){" + "\n" + 
				"        slideU = moClamp(easeOverride_up,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_down !== null && !isNaN(easeOverride_down)){" + "\n" + 
				"        slideD = moClamp(easeOverride_down,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"	var easeResultX,easeResultY;" + "\n" + 
				"	if(contrlCurVal[0]>=0){" + "\n" + 
				"		resultVal = linear(contrlCurVal[0], 0, myLimit, key1, key2);" + "\n" + 
				"		if(slideR !==0){" + "\n" + 
				"			easeResultX = easeSwitch(contrlCurVal[0], 0, myLimit, key1, key2,slideR);" + "\n" + 
				"			resultVal = linear(Math.abs(slideR),0,100, resultVal,easeResultX);" + "\n" + 
				"		}" + "\n" + 
				"	}else{" + "\n" + 
				"		resultVal = linear(-contrlCurVal[0], 0, myLimit, key1, key3);" + "\n" + 
				"		if(slideL !==0){" + "\n" + 
				"			easeResultX = easeSwitch(-contrlCurVal[0], 0, myLimit, key1, key3,slideL);" + "\n" + 
				"			resultVal = linear(Math.abs(slideL),0,100, resultVal,easeResultX);" + "\n" + 
				"		}" + "\n" + 
				"	}" + "\n" + 
				"	var resultAdd = 0;" + "\n" + 
				"	if(contrlCurVal[1]<=0){" + "\n" + 
				"		resultAdd = linear(-contrlCurVal[1], 0, myLimit, key1, key4)- key1;" + "\n" + 
				"		if(slideU !==0){" + "\n" + 
				"			easeResultY = easeSwitch(-contrlCurVal[1], 0, myLimit, key1, key4,slideU)- key1;" + "\n" + 
				"			resultAdd = linear(Math.abs(slideU),0,100, resultAdd,easeResultY);" + "\n" + 
				"		}" + "\n" + 
				"	}else{" + "\n" + 
				"		resultAdd = linear(contrlCurVal[1], 0, myLimit, key1, key5)- key1;" + "\n" + 
				"		if(slideD!==0){" + "\n" + 
				"			easeResultY = easeSwitch(contrlCurVal[1], 0, myLimit, key1, key5,slideD)- key1;" + "\n" + 
				"			resultAdd = linear(Math.abs(slideD),0,100, resultAdd,easeResultY);" + "\n" + 
				"		}" + "\n" + 
				"	}" + "\n" + 
				"	return (resultVal+resultAdd)+(inputResult-key1);" + "\n" + 
				"}" + "\n" + 
				"function cosEase(val,min1,max1,input1,input2){" + "\n" + 
				"	var myCos = [];" + "\n" + 
				"    if(input1 instanceof Array){" + "\n" + 
				"        for(var x = 0; x < input1.length; x++){" + "\n" + 
				"            myCos.push(getMeCos(val, min1,max1,input1[x],input2[x]));" + "\n" + 
				"        }" + "\n" + 
				"    }else{ myCos = getMeCos(val, min1,max1,input1,input2);" + "\n" + 
				"	}return myCos;" + "\n" + 
				"	function getMeCos(val,min1,max1,input1,input2){" + "\n" + 
				"		var mapVal = moClamp(val/(max1-min1),0,1);" + "\n" + 
				"		var c = input2 - input1;" + "\n" + 
				"		var myCos2 = -c * Math.cos(mapVal * (Math.PI/2)) + c+ input1;" + "\n" + 
				"		return myCos2;" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"function sinEase(val,min1,max1,input1,input2){" + "\n" + 
				"	var mySin = [];" + "\n" + 
				"    if(input1 instanceof Array){" + "\n" + 
				"        for(var x = 0; x < input1.length; x++){" + "\n" + 
				"            mySin.push(getMeSin(val, min1,max1,input1[x],input2[x]));" + "\n" + 
				"        }" + "\n" + 
				"    }else{ mySin = getMeSin(val, min1,max1,input1,input2);" + "\n" + 
				"	}return mySin;" + "\n" + 
				"	function getMeSin(val,min1,max1,input1,input2){" + "\n" + 
				"		var mapVal = moClamp(val/(max1-min1),0,1);" + "\n" + 
				"		var c = input2 - input1;" + "\n" + 
				"		var mySin2 = c * Math.sin(mapVal * (Math.PI/2)) + input1;" + "\n" + 
				"		return mySin2;" + "\n" + 
				"    }" + "\n" + 
				"}" + "\n" + 
				"function easeSwitch(val,min1,max1,input1,input2,morph){" + "\n" + 
				"	if(morph < 0){" + "\n" + 
				"		return cosEase(val,min1,max1,input1,input2);" + "\n" + 
				"	}else{" + "\n" + 
				"		return sinEase(val,min1,max1,input1,input2);" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"function unArray(inKey){" + "\n" + 
				"    if(inKey instanceof Array && inKey.length === 1){" + "\n" + 
				"        return inKey[0];" + "\n" + 
				"    }else{" + "\n" + 
				"        return inKey;" + "\n" + 
				"    }" + "\n" + 
				"}" + "\n" + 
				"function moClamp(a,b,c){" + "\n" + 
				"	if(!(a instanceof Array)){" + "\n" + 
				"		return (Math.max(b, Math.min(c, a)));" + "\n" + 
				"	}else{" + "\n" + 
				"		var aryHold = [];" + "\n" + 
				"		for(var x = 0; x < a.length; x++){" + "\n" + 
				"			aryHold.push(Math.max(b, Math.min(c, a[x])));" + "\n" + 
				"		}return aryHold;" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"joystick(value);";
		} catch (err) {}
		try {
			noseShape.property("ADBE Transform Group").property("ADBE Rotate Z").expression = "/////// BEGIN JOYSTICK CODE ///////" + "\n" + 
				"function joystick(inputResult){" + "\n" + 
				"    var easeOverride_right = null;" + "\n" + 
				"    var easeOverride_left =  null;" + "\n" + 
				"    var easeOverride_up =    null;" + "\n" + 
				"    var easeOverride_down =  null;" + "\n" + 
				"	var contrl = thisComp.layer(\"Ctrl Head\");" + "\n" + 
				"	var myLimit = contrl(\"ADBE Effect Parade\")(\"joystickLimit\")(\"ADBE Slider Control-0001\");" + "\n" + 
				"	var contrlCurVal = contrl(\"ADBE Transform Group\")(\"ADBE Position\");" + "\n" + 
				"	var resultVal;" + "\n" + 
				"	var key1 = [0];" + "\n" + 
				"	var key2 = [-4];" + "\n" + 
				"	var key3 = [4];" + "\n" + 
				"	var key4 = [0];" + "\n" + 
				"	var key5 = [0];" + "\n" + 
				"    key1 = unArray(key1);" + "\n" + 
				"    key2 = unArray(key2);" + "\n" + 
				"    key3 = unArray(key3);" + "\n" + 
				"    key4 = unArray(key4);" + "\n" + 
				"    key5 = unArray(key5);" + "\n" + 
				"	try{" + "\n" + 
				"        if(!thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\").active){" + "\n" + 
				"			throw (\"inactive\");" + "\n" + 
				"        }" + "\n" + 
				"		slideR = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0001\");" + "\n" + 
				"		slideL = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0002\");" + "\n" + 
				"		slideU = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0003\");" + "\n" + 
				"		slideD = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0004\");" + "\n" + 
				"	}catch(err){" + "\n" + 
				"		slideR = 0;" + "\n" + 
				"		slideL = 0;" + "\n" + 
				"		slideU = 0;" + "\n" + 
				"		slideD = 0;" + "\n" + 
				"	}" + "\n" + 
				"    if(easeOverride_right !== null && !isNaN(easeOverride_right)){" + "\n" + 
				"        slideR = moClamp(easeOverride_right,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_left !== null && !isNaN(easeOverride_left)){" + "\n" + 
				"        slideL = moClamp(easeOverride_left,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_up !== null && !isNaN(easeOverride_up)){" + "\n" + 
				"        slideU = moClamp(easeOverride_up,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_down !== null && !isNaN(easeOverride_down)){" + "\n" + 
				"        slideD = moClamp(easeOverride_down,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"	var easeResultX,easeResultY;" + "\n" + 
				"	if(contrlCurVal[0]>=0){" + "\n" + 
				"		resultVal = linear(contrlCurVal[0], 0, myLimit, key1, key2);" + "\n" + 
				"		if(slideR !==0){" + "\n" + 
				"			easeResultX = easeSwitch(contrlCurVal[0], 0, myLimit, key1, key2,slideR);" + "\n" + 
				"			resultVal = linear(Math.abs(slideR),0,100, resultVal,easeResultX);" + "\n" + 
				"		}" + "\n" + 
				"	}else{" + "\n" + 
				"		resultVal = linear(-contrlCurVal[0], 0, myLimit, key1, key3);" + "\n" + 
				"		if(slideL !==0){" + "\n" + 
				"			easeResultX = easeSwitch(-contrlCurVal[0], 0, myLimit, key1, key3,slideL);" + "\n" + 
				"			resultVal = linear(Math.abs(slideL),0,100, resultVal,easeResultX);" + "\n" + 
				"		}" + "\n" + 
				"	}" + "\n" + 
				"	var resultAdd = 0;" + "\n" + 
				"	if(contrlCurVal[1]<=0){" + "\n" + 
				"		resultAdd = linear(-contrlCurVal[1], 0, myLimit, key1, key4)- key1;" + "\n" + 
				"		if(slideU !==0){" + "\n" + 
				"			easeResultY = easeSwitch(-contrlCurVal[1], 0, myLimit, key1, key4,slideU)- key1;" + "\n" + 
				"			resultAdd = linear(Math.abs(slideU),0,100, resultAdd,easeResultY);" + "\n" + 
				"		}" + "\n" + 
				"	}else{" + "\n" + 
				"		resultAdd = linear(contrlCurVal[1], 0, myLimit, key1, key5)- key1;" + "\n" + 
				"		if(slideD!==0){" + "\n" + 
				"			easeResultY = easeSwitch(contrlCurVal[1], 0, myLimit, key1, key5,slideD)- key1;" + "\n" + 
				"			resultAdd = linear(Math.abs(slideD),0,100, resultAdd,easeResultY);" + "\n" + 
				"		}" + "\n" + 
				"	}" + "\n" + 
				"	return (resultVal+resultAdd)+(inputResult-key1);" + "\n" + 
				"}" + "\n" + 
				"function cosEase(val,min1,max1,input1,input2){" + "\n" + 
				"	var myCos = [];" + "\n" + 
				"    if(input1 instanceof Array){" + "\n" + 
				"        for(var x = 0; x < input1.length; x++){" + "\n" + 
				"            myCos.push(getMeCos(val, min1,max1,input1[x],input2[x]));" + "\n" + 
				"        }" + "\n" + 
				"    }else{ myCos = getMeCos(val, min1,max1,input1,input2);" + "\n" + 
				"	}return myCos;" + "\n" + 
				"	function getMeCos(val,min1,max1,input1,input2){" + "\n" + 
				"		var mapVal = moClamp(val/(max1-min1),0,1);" + "\n" + 
				"		var c = input2 - input1;" + "\n" + 
				"		var myCos2 = -c * Math.cos(mapVal * (Math.PI/2)) + c+ input1;" + "\n" + 
				"		return myCos2;" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"function sinEase(val,min1,max1,input1,input2){" + "\n" + 
				"	var mySin = [];" + "\n" + 
				"    if(input1 instanceof Array){" + "\n" + 
				"        for(var x = 0; x < input1.length; x++){" + "\n" + 
				"            mySin.push(getMeSin(val, min1,max1,input1[x],input2[x]));" + "\n" + 
				"        }" + "\n" + 
				"    }else{ mySin = getMeSin(val, min1,max1,input1,input2);" + "\n" + 
				"	}return mySin;" + "\n" + 
				"	function getMeSin(val,min1,max1,input1,input2){" + "\n" + 
				"		var mapVal = moClamp(val/(max1-min1),0,1);" + "\n" + 
				"		var c = input2 - input1;" + "\n" + 
				"		var mySin2 = c * Math.sin(mapVal * (Math.PI/2)) + input1;" + "\n" + 
				"		return mySin2;" + "\n" + 
				"    }" + "\n" + 
				"}" + "\n" + 
				"function easeSwitch(val,min1,max1,input1,input2,morph){" + "\n" + 
				"	if(morph < 0){" + "\n" + 
				"		return cosEase(val,min1,max1,input1,input2);" + "\n" + 
				"	}else{" + "\n" + 
				"		return sinEase(val,min1,max1,input1,input2);" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"function unArray(inKey){" + "\n" + 
				"    if(inKey instanceof Array && inKey.length === 1){" + "\n" + 
				"        return inKey[0];" + "\n" + 
				"    }else{" + "\n" + 
				"        return inKey;" + "\n" + 
				"    }" + "\n" + 
				"}" + "\n" + 
				"function moClamp(a,b,c){" + "\n" + 
				"	if(!(a instanceof Array)){" + "\n" + 
				"		return (Math.max(b, Math.min(c, a)));" + "\n" + 
				"	}else{" + "\n" + 
				"		var aryHold = [];" + "\n" + 
				"		for(var x = 0; x < a.length; x++){" + "\n" + 
				"			aryHold.push(Math.max(b, Math.min(c, a[x])));" + "\n" + 
				"		}return aryHold;" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"joystick(value);";
		} catch (err) {}
		try {
			mouth.property("ADBE Transform Group").property("ADBE Position").expression = "/////// BEGIN JOYSTICK CODE ///////" + "\n" + 
				"function joystick(inputResult){" + "\n" + 
				"    var easeOverride_right = null;" + "\n" + 
				"    var easeOverride_left =  null;" + "\n" + 
				"    var easeOverride_up =    null;" + "\n" + 
				"    var easeOverride_down =  null;" + "\n" + 
				"	var contrl = thisComp.layer(\"Ctrl Head\");" + "\n" + 
				"	var myLimit = contrl(\"ADBE Effect Parade\")(\"joystickLimit\")(\"ADBE Slider Control-0001\");" + "\n" + 
				"	var contrlCurVal = contrl(\"ADBE Transform Group\")(\"ADBE Position\");" + "\n" + 
				"	var resultVal;" + "\n" + 
				"	var key1 = [49.75,72.0300064086914,0];" + "\n" + 
				"	var key2 = [76,72.0300064086914,0];" + "\n" + 
				"	var key3 = [28,72.0300064086914,0];" + "\n" + 
				"	var key4 = [49.75,48.2579765319824,0];" + "\n" + 
				"	var key5 = [49.75,88.2184295654297,0];" + "\n" + 
				"    key1 = unArray(key1);" + "\n" + 
				"    key2 = unArray(key2);" + "\n" + 
				"    key3 = unArray(key3);" + "\n" + 
				"    key4 = unArray(key4);" + "\n" + 
				"    key5 = unArray(key5);" + "\n" + 
				"	try{" + "\n" + 
				"        if(!thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\").active){" + "\n" + 
				"			throw (\"inactive\");" + "\n" + 
				"        }" + "\n" + 
				"		slideR = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0001\");" + "\n" + 
				"		slideL = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0002\");" + "\n" + 
				"		slideU = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0003\");" + "\n" + 
				"		slideD = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0004\");" + "\n" + 
				"	}catch(err){" + "\n" + 
				"		slideR = 0;" + "\n" + 
				"		slideL = 0;" + "\n" + 
				"		slideU = 0;" + "\n" + 
				"		slideD = 0;" + "\n" + 
				"	}" + "\n" + 
				"    if(easeOverride_right !== null && !isNaN(easeOverride_right)){" + "\n" + 
				"        slideR = moClamp(easeOverride_right,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_left !== null && !isNaN(easeOverride_left)){" + "\n" + 
				"        slideL = moClamp(easeOverride_left,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_up !== null && !isNaN(easeOverride_up)){" + "\n" + 
				"        slideU = moClamp(easeOverride_up,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_down !== null && !isNaN(easeOverride_down)){" + "\n" + 
				"        slideD = moClamp(easeOverride_down,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"	var easeResultX,easeResultY;" + "\n" + 
				"	if(contrlCurVal[0]>=0){" + "\n" + 
				"		resultVal = linear(contrlCurVal[0], 0, myLimit, key1, key2);" + "\n" + 
				"		if(slideR !==0){" + "\n" + 
				"			easeResultX = easeSwitch(contrlCurVal[0], 0, myLimit, key1, key2,slideR);" + "\n" + 
				"			resultVal = linear(Math.abs(slideR),0,100, resultVal,easeResultX);" + "\n" + 
				"		}" + "\n" + 
				"	}else{" + "\n" + 
				"		resultVal = linear(-contrlCurVal[0], 0, myLimit, key1, key3);" + "\n" + 
				"		if(slideL !==0){" + "\n" + 
				"			easeResultX = easeSwitch(-contrlCurVal[0], 0, myLimit, key1, key3,slideL);" + "\n" + 
				"			resultVal = linear(Math.abs(slideL),0,100, resultVal,easeResultX);" + "\n" + 
				"		}" + "\n" + 
				"	}" + "\n" + 
				"	var resultAdd = 0;" + "\n" + 
				"	if(contrlCurVal[1]<=0){" + "\n" + 
				"		resultAdd = linear(-contrlCurVal[1], 0, myLimit, key1, key4)- key1;" + "\n" + 
				"		if(slideU !==0){" + "\n" + 
				"			easeResultY = easeSwitch(-contrlCurVal[1], 0, myLimit, key1, key4,slideU)- key1;" + "\n" + 
				"			resultAdd = linear(Math.abs(slideU),0,100, resultAdd,easeResultY);" + "\n" + 
				"		}" + "\n" + 
				"	}else{" + "\n" + 
				"		resultAdd = linear(contrlCurVal[1], 0, myLimit, key1, key5)- key1;" + "\n" + 
				"		if(slideD!==0){" + "\n" + 
				"			easeResultY = easeSwitch(contrlCurVal[1], 0, myLimit, key1, key5,slideD)- key1;" + "\n" + 
				"			resultAdd = linear(Math.abs(slideD),0,100, resultAdd,easeResultY);" + "\n" + 
				"		}" + "\n" + 
				"	}" + "\n" + 
				"	return (resultVal+resultAdd)+(inputResult-key1);" + "\n" + 
				"}" + "\n" + 
				"function cosEase(val,min1,max1,input1,input2){" + "\n" + 
				"	var myCos = [];" + "\n" + 
				"    if(input1 instanceof Array){" + "\n" + 
				"        for(var x = 0; x < input1.length; x++){" + "\n" + 
				"            myCos.push(getMeCos(val, min1,max1,input1[x],input2[x]));" + "\n" + 
				"        }" + "\n" + 
				"    }else{ myCos = getMeCos(val, min1,max1,input1,input2);" + "\n" + 
				"	}return myCos;" + "\n" + 
				"	function getMeCos(val,min1,max1,input1,input2){" + "\n" + 
				"		var mapVal = moClamp(val/(max1-min1),0,1);" + "\n" + 
				"		var c = input2 - input1;" + "\n" + 
				"		var myCos2 = -c * Math.cos(mapVal * (Math.PI/2)) + c+ input1;" + "\n" + 
				"		return myCos2;" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"function sinEase(val,min1,max1,input1,input2){" + "\n" + 
				"	var mySin = [];" + "\n" + 
				"    if(input1 instanceof Array){" + "\n" + 
				"        for(var x = 0; x < input1.length; x++){" + "\n" + 
				"            mySin.push(getMeSin(val, min1,max1,input1[x],input2[x]));" + "\n" + 
				"        }" + "\n" + 
				"    }else{ mySin = getMeSin(val, min1,max1,input1,input2);" + "\n" + 
				"	}return mySin;" + "\n" + 
				"	function getMeSin(val,min1,max1,input1,input2){" + "\n" + 
				"		var mapVal = moClamp(val/(max1-min1),0,1);" + "\n" + 
				"		var c = input2 - input1;" + "\n" + 
				"		var mySin2 = c * Math.sin(mapVal * (Math.PI/2)) + input1;" + "\n" + 
				"		return mySin2;" + "\n" + 
				"    }" + "\n" + 
				"}" + "\n" + 
				"function easeSwitch(val,min1,max1,input1,input2,morph){" + "\n" + 
				"	if(morph < 0){" + "\n" + 
				"		return cosEase(val,min1,max1,input1,input2);" + "\n" + 
				"	}else{" + "\n" + 
				"		return sinEase(val,min1,max1,input1,input2);" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"function unArray(inKey){" + "\n" + 
				"    if(inKey instanceof Array && inKey.length === 1){" + "\n" + 
				"        return inKey[0];" + "\n" + 
				"    }else{" + "\n" + 
				"        return inKey;" + "\n" + 
				"    }" + "\n" + 
				"}" + "\n" + 
				"function moClamp(a,b,c){" + "\n" + 
				"	if(!(a instanceof Array)){" + "\n" + 
				"		return (Math.max(b, Math.min(c, a)));" + "\n" + 
				"	}else{" + "\n" + 
				"		var aryHold = [];" + "\n" + 
				"		for(var x = 0; x < a.length; x++){" + "\n" + 
				"			aryHold.push(Math.max(b, Math.min(c, a[x])));" + "\n" + 
				"		}return aryHold;" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"joystick(value);";
		} catch (err) {}
		try {
			mouth.property("ADBE Transform Group").property("ADBE Scale").expression = "/////// BEGIN JOYSTICK CODE ///////" + "\n" + 
				"function joystick(inputResult){" + "\n" + 
				"    var easeOverride_right = null;" + "\n" + 
				"    var easeOverride_left =  null;" + "\n" + 
				"    var easeOverride_up =    null;" + "\n" + 
				"    var easeOverride_down =  null;" + "\n" + 
				"	var contrl = thisComp.layer(\"Ctrl Head\");" + "\n" + 
				"	var myLimit = contrl(\"ADBE Effect Parade\")(\"joystickLimit\")(\"ADBE Slider Control-0001\");" + "\n" + 
				"	var contrlCurVal = contrl(\"ADBE Transform Group\")(\"ADBE Position\");" + "\n" + 
				"	var resultVal;" + "\n" + 
				"	var key1 = [100,100,100];" + "\n" + 
				"	var key2 = [85,100,100];" + "\n" + 
				"	var key3 = [85,100,100];" + "\n" + 
				"	var key4 = [105,90,100];" + "\n" + 
				"	var key5 = [105,90,100];" + "\n" + 
				"    key1 = unArray(key1);" + "\n" + 
				"    key2 = unArray(key2);" + "\n" + 
				"    key3 = unArray(key3);" + "\n" + 
				"    key4 = unArray(key4);" + "\n" + 
				"    key5 = unArray(key5);" + "\n" + 
				"	try{" + "\n" + 
				"        if(!thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\").active){" + "\n" + 
				"			throw (\"inactive\");" + "\n" + 
				"        }" + "\n" + 
				"		slideR = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0001\");" + "\n" + 
				"		slideL = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0002\");" + "\n" + 
				"		slideU = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0003\");" + "\n" + 
				"		slideD = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0004\");" + "\n" + 
				"	}catch(err){" + "\n" + 
				"		slideR = 0;" + "\n" + 
				"		slideL = 0;" + "\n" + 
				"		slideU = 0;" + "\n" + 
				"		slideD = 0;" + "\n" + 
				"	}" + "\n" + 
				"    if(easeOverride_right !== null && !isNaN(easeOverride_right)){" + "\n" + 
				"        slideR = moClamp(easeOverride_right,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_left !== null && !isNaN(easeOverride_left)){" + "\n" + 
				"        slideL = moClamp(easeOverride_left,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_up !== null && !isNaN(easeOverride_up)){" + "\n" + 
				"        slideU = moClamp(easeOverride_up,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_down !== null && !isNaN(easeOverride_down)){" + "\n" + 
				"        slideD = moClamp(easeOverride_down,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"	var easeResultX,easeResultY;" + "\n" + 
				"	if(contrlCurVal[0]>=0){" + "\n" + 
				"		resultVal = linear(contrlCurVal[0], 0, myLimit, key1, key2);" + "\n" + 
				"		if(slideR !==0){" + "\n" + 
				"			easeResultX = easeSwitch(contrlCurVal[0], 0, myLimit, key1, key2,slideR);" + "\n" + 
				"			resultVal = linear(Math.abs(slideR),0,100, resultVal,easeResultX);" + "\n" + 
				"		}" + "\n" + 
				"	}else{" + "\n" + 
				"		resultVal = linear(-contrlCurVal[0], 0, myLimit, key1, key3);" + "\n" + 
				"		if(slideL !==0){" + "\n" + 
				"			easeResultX = easeSwitch(-contrlCurVal[0], 0, myLimit, key1, key3,slideL);" + "\n" + 
				"			resultVal = linear(Math.abs(slideL),0,100, resultVal,easeResultX);" + "\n" + 
				"		}" + "\n" + 
				"	}" + "\n" + 
				"	var resultAdd = 0;" + "\n" + 
				"	if(contrlCurVal[1]<=0){" + "\n" + 
				"		resultAdd = linear(-contrlCurVal[1], 0, myLimit, key1, key4)- key1;" + "\n" + 
				"		if(slideU !==0){" + "\n" + 
				"			easeResultY = easeSwitch(-contrlCurVal[1], 0, myLimit, key1, key4,slideU)- key1;" + "\n" + 
				"			resultAdd = linear(Math.abs(slideU),0,100, resultAdd,easeResultY);" + "\n" + 
				"		}" + "\n" + 
				"	}else{" + "\n" + 
				"		resultAdd = linear(contrlCurVal[1], 0, myLimit, key1, key5)- key1;" + "\n" + 
				"		if(slideD!==0){" + "\n" + 
				"			easeResultY = easeSwitch(contrlCurVal[1], 0, myLimit, key1, key5,slideD)- key1;" + "\n" + 
				"			resultAdd = linear(Math.abs(slideD),0,100, resultAdd,easeResultY);" + "\n" + 
				"		}" + "\n" + 
				"	}" + "\n" + 
				"	return (resultVal+resultAdd)+(inputResult-key1);" + "\n" + 
				"}" + "\n" + 
				"function cosEase(val,min1,max1,input1,input2){" + "\n" + 
				"	var myCos = [];" + "\n" + 
				"    if(input1 instanceof Array){" + "\n" + 
				"        for(var x = 0; x < input1.length; x++){" + "\n" + 
				"            myCos.push(getMeCos(val, min1,max1,input1[x],input2[x]));" + "\n" + 
				"        }" + "\n" + 
				"    }else{ myCos = getMeCos(val, min1,max1,input1,input2);" + "\n" + 
				"	}return myCos;" + "\n" + 
				"	function getMeCos(val,min1,max1,input1,input2){" + "\n" + 
				"		var mapVal = moClamp(val/(max1-min1),0,1);" + "\n" + 
				"		var c = input2 - input1;" + "\n" + 
				"		var myCos2 = -c * Math.cos(mapVal * (Math.PI/2)) + c+ input1;" + "\n" + 
				"		return myCos2;" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"function sinEase(val,min1,max1,input1,input2){" + "\n" + 
				"	var mySin = [];" + "\n" + 
				"    if(input1 instanceof Array){" + "\n" + 
				"        for(var x = 0; x < input1.length; x++){" + "\n" + 
				"            mySin.push(getMeSin(val, min1,max1,input1[x],input2[x]));" + "\n" + 
				"        }" + "\n" + 
				"    }else{ mySin = getMeSin(val, min1,max1,input1,input2);" + "\n" + 
				"	}return mySin;" + "\n" + 
				"	function getMeSin(val,min1,max1,input1,input2){" + "\n" + 
				"		var mapVal = moClamp(val/(max1-min1),0,1);" + "\n" + 
				"		var c = input2 - input1;" + "\n" + 
				"		var mySin2 = c * Math.sin(mapVal * (Math.PI/2)) + input1;" + "\n" + 
				"		return mySin2;" + "\n" + 
				"    }" + "\n" + 
				"}" + "\n" + 
				"function easeSwitch(val,min1,max1,input1,input2,morph){" + "\n" + 
				"	if(morph < 0){" + "\n" + 
				"		return cosEase(val,min1,max1,input1,input2);" + "\n" + 
				"	}else{" + "\n" + 
				"		return sinEase(val,min1,max1,input1,input2);" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"function unArray(inKey){" + "\n" + 
				"    if(inKey instanceof Array && inKey.length === 1){" + "\n" + 
				"        return inKey[0];" + "\n" + 
				"    }else{" + "\n" + 
				"        return inKey;" + "\n" + 
				"    }" + "\n" + 
				"}" + "\n" + 
				"function moClamp(a,b,c){" + "\n" + 
				"	if(!(a instanceof Array)){" + "\n" + 
				"		return (Math.max(b, Math.min(c, a)));" + "\n" + 
				"	}else{" + "\n" + 
				"		var aryHold = [];" + "\n" + 
				"		for(var x = 0; x < a.length; x++){" + "\n" + 
				"			aryHold.push(Math.max(b, Math.min(c, a[x])));" + "\n" + 
				"		}return aryHold;" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"joystick(value);";
		} catch (err) {}
		try {
			beard.property("ADBE Transform Group").property("ADBE Position").expression = "/////// BEGIN JOYSTICK CODE ///////" + "\n" + 
				"function joystick(inputResult){" + "\n" + 
				"    var easeOverride_right = null;" + "\n" + 
				"    var easeOverride_left =  null;" + "\n" + 
				"    var easeOverride_up =    null;" + "\n" + 
				"    var easeOverride_down =  null;" + "\n" + 
				"	var contrl = thisComp.layer(\"Ctrl Head\");" + "\n" + 
				"	var myLimit = contrl(\"ADBE Effect Parade\")(\"joystickLimit\")(\"ADBE Slider Control-0001\");" + "\n" + 
				"	var contrlCurVal = contrl(\"ADBE Transform Group\")(\"ADBE Position\");" + "\n" + 
				"	var resultVal;" + "\n" + 
				"	var key1 = [225,309,0];" + "\n" + 
				"	var key2 = [241.775512695313,309,0];" + "\n" + 
				"	var key3 = [209.244903564453,309,0];" + "\n" + 
				"	var key4 = [225,287.196075439453,0];" + "\n" + 
				"	var key5 = [225,321.960784912109,0];" + "\n" + 
				"    key1 = unArray(key1);" + "\n" + 
				"    key2 = unArray(key2);" + "\n" + 
				"    key3 = unArray(key3);" + "\n" + 
				"    key4 = unArray(key4);" + "\n" + 
				"    key5 = unArray(key5);" + "\n" + 
				"	try{" + "\n" + 
				"        if(!thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\").active){" + "\n" + 
				"			throw (\"inactive\");" + "\n" + 
				"        }" + "\n" + 
				"		slideR = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0001\");" + "\n" + 
				"		slideL = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0002\");" + "\n" + 
				"		slideU = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0003\");" + "\n" + 
				"		slideD = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0004\");" + "\n" + 
				"	}catch(err){" + "\n" + 
				"		slideR = 0;" + "\n" + 
				"		slideL = 0;" + "\n" + 
				"		slideU = 0;" + "\n" + 
				"		slideD = 0;" + "\n" + 
				"	}" + "\n" + 
				"    if(easeOverride_right !== null && !isNaN(easeOverride_right)){" + "\n" + 
				"        slideR = moClamp(easeOverride_right,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_left !== null && !isNaN(easeOverride_left)){" + "\n" + 
				"        slideL = moClamp(easeOverride_left,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_up !== null && !isNaN(easeOverride_up)){" + "\n" + 
				"        slideU = moClamp(easeOverride_up,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_down !== null && !isNaN(easeOverride_down)){" + "\n" + 
				"        slideD = moClamp(easeOverride_down,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"	var easeResultX,easeResultY;" + "\n" + 
				"	if(contrlCurVal[0]>=0){" + "\n" + 
				"		resultVal = linear(contrlCurVal[0], 0, myLimit, key1, key2);" + "\n" + 
				"		if(slideR !==0){" + "\n" + 
				"			easeResultX = easeSwitch(contrlCurVal[0], 0, myLimit, key1, key2,slideR);" + "\n" + 
				"			resultVal = linear(Math.abs(slideR),0,100, resultVal,easeResultX);" + "\n" + 
				"		}" + "\n" + 
				"	}else{" + "\n" + 
				"		resultVal = linear(-contrlCurVal[0], 0, myLimit, key1, key3);" + "\n" + 
				"		if(slideL !==0){" + "\n" + 
				"			easeResultX = easeSwitch(-contrlCurVal[0], 0, myLimit, key1, key3,slideL);" + "\n" + 
				"			resultVal = linear(Math.abs(slideL),0,100, resultVal,easeResultX);" + "\n" + 
				"		}" + "\n" + 
				"	}" + "\n" + 
				"	var resultAdd = 0;" + "\n" + 
				"	if(contrlCurVal[1]<=0){" + "\n" + 
				"		resultAdd = linear(-contrlCurVal[1], 0, myLimit, key1, key4)- key1;" + "\n" + 
				"		if(slideU !==0){" + "\n" + 
				"			easeResultY = easeSwitch(-contrlCurVal[1], 0, myLimit, key1, key4,slideU)- key1;" + "\n" + 
				"			resultAdd = linear(Math.abs(slideU),0,100, resultAdd,easeResultY);" + "\n" + 
				"		}" + "\n" + 
				"	}else{" + "\n" + 
				"		resultAdd = linear(contrlCurVal[1], 0, myLimit, key1, key5)- key1;" + "\n" + 
				"		if(slideD!==0){" + "\n" + 
				"			easeResultY = easeSwitch(contrlCurVal[1], 0, myLimit, key1, key5,slideD)- key1;" + "\n" + 
				"			resultAdd = linear(Math.abs(slideD),0,100, resultAdd,easeResultY);" + "\n" + 
				"		}" + "\n" + 
				"	}" + "\n" + 
				"	return (resultVal+resultAdd)+(inputResult-key1);" + "\n" + 
				"}" + "\n" + 
				"function cosEase(val,min1,max1,input1,input2){" + "\n" + 
				"	var myCos = [];" + "\n" + 
				"    if(input1 instanceof Array){" + "\n" + 
				"        for(var x = 0; x < input1.length; x++){" + "\n" + 
				"            myCos.push(getMeCos(val, min1,max1,input1[x],input2[x]));" + "\n" + 
				"        }" + "\n" + 
				"    }else{ myCos = getMeCos(val, min1,max1,input1,input2);" + "\n" + 
				"	}return myCos;" + "\n" + 
				"	function getMeCos(val,min1,max1,input1,input2){" + "\n" + 
				"		var mapVal = moClamp(val/(max1-min1),0,1);" + "\n" + 
				"		var c = input2 - input1;" + "\n" + 
				"		var myCos2 = -c * Math.cos(mapVal * (Math.PI/2)) + c+ input1;" + "\n" + 
				"		return myCos2;" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"function sinEase(val,min1,max1,input1,input2){" + "\n" + 
				"	var mySin = [];" + "\n" + 
				"    if(input1 instanceof Array){" + "\n" + 
				"        for(var x = 0; x < input1.length; x++){" + "\n" + 
				"            mySin.push(getMeSin(val, min1,max1,input1[x],input2[x]));" + "\n" + 
				"        }" + "\n" + 
				"    }else{ mySin = getMeSin(val, min1,max1,input1,input2);" + "\n" + 
				"	}return mySin;" + "\n" + 
				"	function getMeSin(val,min1,max1,input1,input2){" + "\n" + 
				"		var mapVal = moClamp(val/(max1-min1),0,1);" + "\n" + 
				"		var c = input2 - input1;" + "\n" + 
				"		var mySin2 = c * Math.sin(mapVal * (Math.PI/2)) + input1;" + "\n" + 
				"		return mySin2;" + "\n" + 
				"    }" + "\n" + 
				"}" + "\n" + 
				"function easeSwitch(val,min1,max1,input1,input2,morph){" + "\n" + 
				"	if(morph < 0){" + "\n" + 
				"		return cosEase(val,min1,max1,input1,input2);" + "\n" + 
				"	}else{" + "\n" + 
				"		return sinEase(val,min1,max1,input1,input2);" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"function unArray(inKey){" + "\n" + 
				"    if(inKey instanceof Array && inKey.length === 1){" + "\n" + 
				"        return inKey[0];" + "\n" + 
				"    }else{" + "\n" + 
				"        return inKey;" + "\n" + 
				"    }" + "\n" + 
				"}" + "\n" + 
				"function moClamp(a,b,c){" + "\n" + 
				"	if(!(a instanceof Array)){" + "\n" + 
				"		return (Math.max(b, Math.min(c, a)));" + "\n" + 
				"	}else{" + "\n" + 
				"		var aryHold = [];" + "\n" + 
				"		for(var x = 0; x < a.length; x++){" + "\n" + 
				"			aryHold.push(Math.max(b, Math.min(c, a[x])));" + "\n" + 
				"		}return aryHold;" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"joystick(value);";
		} catch (err) {}
		try {
			beard.property("ADBE Transform Group").property("ADBE Rotate Z").expression = "/////// BEGIN JOYSTICK CODE ///////" + "\n" + 
				"function joystick(inputResult){" + "\n" + 
				"    var easeOverride_right = null;" + "\n" + 
				"    var easeOverride_left =  null;" + "\n" + 
				"    var easeOverride_up =    null;" + "\n" + 
				"    var easeOverride_down =  null;" + "\n" + 
				"	var contrl = thisComp.layer(\"Ctrl Head\");" + "\n" + 
				"	var myLimit = contrl(\"ADBE Effect Parade\")(\"joystickLimit\")(\"ADBE Slider Control-0001\");" + "\n" + 
				"	var contrlCurVal = contrl(\"ADBE Transform Group\")(\"ADBE Position\");" + "\n" + 
				"	var resultVal;" + "\n" + 
				"	var key1 = [0];" + "\n" + 
				"	var key2 = [2];" + "\n" + 
				"	var key3 = [-2];" + "\n" + 
				"	var key4 = [0];" + "\n" + 
				"	var key5 = [0];" + "\n" + 
				"    key1 = unArray(key1);" + "\n" + 
				"    key2 = unArray(key2);" + "\n" + 
				"    key3 = unArray(key3);" + "\n" + 
				"    key4 = unArray(key4);" + "\n" + 
				"    key5 = unArray(key5);" + "\n" + 
				"	try{" + "\n" + 
				"        if(!thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\").active){" + "\n" + 
				"			throw (\"inactive\");" + "\n" + 
				"        }" + "\n" + 
				"		slideR = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0001\");" + "\n" + 
				"		slideL = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0002\");" + "\n" + 
				"		slideU = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0003\");" + "\n" + 
				"		slideD = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0004\");" + "\n" + 
				"	}catch(err){" + "\n" + 
				"		slideR = 0;" + "\n" + 
				"		slideL = 0;" + "\n" + 
				"		slideU = 0;" + "\n" + 
				"		slideD = 0;" + "\n" + 
				"	}" + "\n" + 
				"    if(easeOverride_right !== null && !isNaN(easeOverride_right)){" + "\n" + 
				"        slideR = moClamp(easeOverride_right,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_left !== null && !isNaN(easeOverride_left)){" + "\n" + 
				"        slideL = moClamp(easeOverride_left,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_up !== null && !isNaN(easeOverride_up)){" + "\n" + 
				"        slideU = moClamp(easeOverride_up,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_down !== null && !isNaN(easeOverride_down)){" + "\n" + 
				"        slideD = moClamp(easeOverride_down,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"	var easeResultX,easeResultY;" + "\n" + 
				"	if(contrlCurVal[0]>=0){" + "\n" + 
				"		resultVal = linear(contrlCurVal[0], 0, myLimit, key1, key2);" + "\n" + 
				"		if(slideR !==0){" + "\n" + 
				"			easeResultX = easeSwitch(contrlCurVal[0], 0, myLimit, key1, key2,slideR);" + "\n" + 
				"			resultVal = linear(Math.abs(slideR),0,100, resultVal,easeResultX);" + "\n" + 
				"		}" + "\n" + 
				"	}else{" + "\n" + 
				"		resultVal = linear(-contrlCurVal[0], 0, myLimit, key1, key3);" + "\n" + 
				"		if(slideL !==0){" + "\n" + 
				"			easeResultX = easeSwitch(-contrlCurVal[0], 0, myLimit, key1, key3,slideL);" + "\n" + 
				"			resultVal = linear(Math.abs(slideL),0,100, resultVal,easeResultX);" + "\n" + 
				"		}" + "\n" + 
				"	}" + "\n" + 
				"	var resultAdd = 0;" + "\n" + 
				"	if(contrlCurVal[1]<=0){" + "\n" + 
				"		resultAdd = linear(-contrlCurVal[1], 0, myLimit, key1, key4)- key1;" + "\n" + 
				"		if(slideU !==0){" + "\n" + 
				"			easeResultY = easeSwitch(-contrlCurVal[1], 0, myLimit, key1, key4,slideU)- key1;" + "\n" + 
				"			resultAdd = linear(Math.abs(slideU),0,100, resultAdd,easeResultY);" + "\n" + 
				"		}" + "\n" + 
				"	}else{" + "\n" + 
				"		resultAdd = linear(contrlCurVal[1], 0, myLimit, key1, key5)- key1;" + "\n" + 
				"		if(slideD!==0){" + "\n" + 
				"			easeResultY = easeSwitch(contrlCurVal[1], 0, myLimit, key1, key5,slideD)- key1;" + "\n" + 
				"			resultAdd = linear(Math.abs(slideD),0,100, resultAdd,easeResultY);" + "\n" + 
				"		}" + "\n" + 
				"	}" + "\n" + 
				"	return (resultVal+resultAdd)+(inputResult-key1);" + "\n" + 
				"}" + "\n" + 
				"function cosEase(val,min1,max1,input1,input2){" + "\n" + 
				"	var myCos = [];" + "\n" + 
				"    if(input1 instanceof Array){" + "\n" + 
				"        for(var x = 0; x < input1.length; x++){" + "\n" + 
				"            myCos.push(getMeCos(val, min1,max1,input1[x],input2[x]));" + "\n" + 
				"        }" + "\n" + 
				"    }else{ myCos = getMeCos(val, min1,max1,input1,input2);" + "\n" + 
				"	}return myCos;" + "\n" + 
				"	function getMeCos(val,min1,max1,input1,input2){" + "\n" + 
				"		var mapVal = moClamp(val/(max1-min1),0,1);" + "\n" + 
				"		var c = input2 - input1;" + "\n" + 
				"		var myCos2 = -c * Math.cos(mapVal * (Math.PI/2)) + c+ input1;" + "\n" + 
				"		return myCos2;" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"function sinEase(val,min1,max1,input1,input2){" + "\n" + 
				"	var mySin = [];" + "\n" + 
				"    if(input1 instanceof Array){" + "\n" + 
				"        for(var x = 0; x < input1.length; x++){" + "\n" + 
				"            mySin.push(getMeSin(val, min1,max1,input1[x],input2[x]));" + "\n" + 
				"        }" + "\n" + 
				"    }else{ mySin = getMeSin(val, min1,max1,input1,input2);" + "\n" + 
				"	}return mySin;" + "\n" + 
				"	function getMeSin(val,min1,max1,input1,input2){" + "\n" + 
				"		var mapVal = moClamp(val/(max1-min1),0,1);" + "\n" + 
				"		var c = input2 - input1;" + "\n" + 
				"		var mySin2 = c * Math.sin(mapVal * (Math.PI/2)) + input1;" + "\n" + 
				"		return mySin2;" + "\n" + 
				"    }" + "\n" + 
				"}" + "\n" + 
				"function easeSwitch(val,min1,max1,input1,input2,morph){" + "\n" + 
				"	if(morph < 0){" + "\n" + 
				"		return cosEase(val,min1,max1,input1,input2);" + "\n" + 
				"	}else{" + "\n" + 
				"		return sinEase(val,min1,max1,input1,input2);" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"function unArray(inKey){" + "\n" + 
				"    if(inKey instanceof Array && inKey.length === 1){" + "\n" + 
				"        return inKey[0];" + "\n" + 
				"    }else{" + "\n" + 
				"        return inKey;" + "\n" + 
				"    }" + "\n" + 
				"}" + "\n" + 
				"function moClamp(a,b,c){" + "\n" + 
				"	if(!(a instanceof Array)){" + "\n" + 
				"		return (Math.max(b, Math.min(c, a)));" + "\n" + 
				"	}else{" + "\n" + 
				"		var aryHold = [];" + "\n" + 
				"		for(var x = 0; x < a.length; x++){" + "\n" + 
				"			aryHold.push(Math.max(b, Math.min(c, a[x])));" + "\n" + 
				"		}return aryHold;" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"joystick(value);";
		} catch (err) {}
		try {
			hairMiddle.property("ADBE Transform Group").property("ADBE Position").expression = "/////// BEGIN JOYSTICK CODE ///////" + "\n" + 
				"function joystick(inputResult){" + "\n" + 
				"    var easeOverride_right = null;" + "\n" + 
				"    var easeOverride_left =  null;" + "\n" + 
				"    var easeOverride_up =    null;" + "\n" + 
				"    var easeOverride_down =  null;" + "\n" + 
				"	var contrl = thisComp.layer(\"Ctrl Head\");" + "\n" + 
				"	var myLimit = contrl(\"ADBE Effect Parade\")(\"joystickLimit\")(\"ADBE Slider Control-0001\");" + "\n" + 
				"	var contrlCurVal = contrl(\"ADBE Transform Group\")(\"ADBE Position\");" + "\n" + 
				"	var resultVal;" + "\n" + 
				"	var key1 = [225,221.25,0];" + "\n" + 
				"	var key2 = [225,221.25,0];" + "\n" + 
				"	var key3 = [225,221.25,0];" + "\n" + 
				"	var key4 = [225,219.25,0];" + "\n" + 
				"	var key5 = [225,224.25,0];" + "\n" + 
				"    key1 = unArray(key1);" + "\n" + 
				"    key2 = unArray(key2);" + "\n" + 
				"    key3 = unArray(key3);" + "\n" + 
				"    key4 = unArray(key4);" + "\n" + 
				"    key5 = unArray(key5);" + "\n" + 
				"	try{" + "\n" + 
				"        if(!thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\").active){" + "\n" + 
				"			throw (\"inactive\");" + "\n" + 
				"        }" + "\n" + 
				"		slideR = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0001\");" + "\n" + 
				"		slideL = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0002\");" + "\n" + 
				"		slideU = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0003\");" + "\n" + 
				"		slideD = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0004\");" + "\n" + 
				"	}catch(err){" + "\n" + 
				"		slideR = 0;" + "\n" + 
				"		slideL = 0;" + "\n" + 
				"		slideU = 0;" + "\n" + 
				"		slideD = 0;" + "\n" + 
				"	}" + "\n" + 
				"    if(easeOverride_right !== null && !isNaN(easeOverride_right)){" + "\n" + 
				"        slideR = moClamp(easeOverride_right,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_left !== null && !isNaN(easeOverride_left)){" + "\n" + 
				"        slideL = moClamp(easeOverride_left,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_up !== null && !isNaN(easeOverride_up)){" + "\n" + 
				"        slideU = moClamp(easeOverride_up,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_down !== null && !isNaN(easeOverride_down)){" + "\n" + 
				"        slideD = moClamp(easeOverride_down,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"	var easeResultX,easeResultY;" + "\n" + 
				"	if(contrlCurVal[0]>=0){" + "\n" + 
				"		resultVal = linear(contrlCurVal[0], 0, myLimit, key1, key2);" + "\n" + 
				"		if(slideR !==0){" + "\n" + 
				"			easeResultX = easeSwitch(contrlCurVal[0], 0, myLimit, key1, key2,slideR);" + "\n" + 
				"			resultVal = linear(Math.abs(slideR),0,100, resultVal,easeResultX);" + "\n" + 
				"		}" + "\n" + 
				"	}else{" + "\n" + 
				"		resultVal = linear(-contrlCurVal[0], 0, myLimit, key1, key3);" + "\n" + 
				"		if(slideL !==0){" + "\n" + 
				"			easeResultX = easeSwitch(-contrlCurVal[0], 0, myLimit, key1, key3,slideL);" + "\n" + 
				"			resultVal = linear(Math.abs(slideL),0,100, resultVal,easeResultX);" + "\n" + 
				"		}" + "\n" + 
				"	}" + "\n" + 
				"	var resultAdd = 0;" + "\n" + 
				"	if(contrlCurVal[1]<=0){" + "\n" + 
				"		resultAdd = linear(-contrlCurVal[1], 0, myLimit, key1, key4)- key1;" + "\n" + 
				"		if(slideU !==0){" + "\n" + 
				"			easeResultY = easeSwitch(-contrlCurVal[1], 0, myLimit, key1, key4,slideU)- key1;" + "\n" + 
				"			resultAdd = linear(Math.abs(slideU),0,100, resultAdd,easeResultY);" + "\n" + 
				"		}" + "\n" + 
				"	}else{" + "\n" + 
				"		resultAdd = linear(contrlCurVal[1], 0, myLimit, key1, key5)- key1;" + "\n" + 
				"		if(slideD!==0){" + "\n" + 
				"			easeResultY = easeSwitch(contrlCurVal[1], 0, myLimit, key1, key5,slideD)- key1;" + "\n" + 
				"			resultAdd = linear(Math.abs(slideD),0,100, resultAdd,easeResultY);" + "\n" + 
				"		}" + "\n" + 
				"	}" + "\n" + 
				"	return (resultVal+resultAdd)+(inputResult-key1);" + "\n" + 
				"}" + "\n" + 
				"function cosEase(val,min1,max1,input1,input2){" + "\n" + 
				"	var myCos = [];" + "\n" + 
				"    if(input1 instanceof Array){" + "\n" + 
				"        for(var x = 0; x < input1.length; x++){" + "\n" + 
				"            myCos.push(getMeCos(val, min1,max1,input1[x],input2[x]));" + "\n" + 
				"        }" + "\n" + 
				"    }else{ myCos = getMeCos(val, min1,max1,input1,input2);" + "\n" + 
				"	}return myCos;" + "\n" + 
				"	function getMeCos(val,min1,max1,input1,input2){" + "\n" + 
				"		var mapVal = moClamp(val/(max1-min1),0,1);" + "\n" + 
				"		var c = input2 - input1;" + "\n" + 
				"		var myCos2 = -c * Math.cos(mapVal * (Math.PI/2)) + c+ input1;" + "\n" + 
				"		return myCos2;" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"function sinEase(val,min1,max1,input1,input2){" + "\n" + 
				"	var mySin = [];" + "\n" + 
				"    if(input1 instanceof Array){" + "\n" + 
				"        for(var x = 0; x < input1.length; x++){" + "\n" + 
				"            mySin.push(getMeSin(val, min1,max1,input1[x],input2[x]));" + "\n" + 
				"        }" + "\n" + 
				"    }else{ mySin = getMeSin(val, min1,max1,input1,input2);" + "\n" + 
				"	}return mySin;" + "\n" + 
				"	function getMeSin(val,min1,max1,input1,input2){" + "\n" + 
				"		var mapVal = moClamp(val/(max1-min1),0,1);" + "\n" + 
				"		var c = input2 - input1;" + "\n" + 
				"		var mySin2 = c * Math.sin(mapVal * (Math.PI/2)) + input1;" + "\n" + 
				"		return mySin2;" + "\n" + 
				"    }" + "\n" + 
				"}" + "\n" + 
				"function easeSwitch(val,min1,max1,input1,input2,morph){" + "\n" + 
				"	if(morph < 0){" + "\n" + 
				"		return cosEase(val,min1,max1,input1,input2);" + "\n" + 
				"	}else{" + "\n" + 
				"		return sinEase(val,min1,max1,input1,input2);" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"function unArray(inKey){" + "\n" + 
				"    if(inKey instanceof Array && inKey.length === 1){" + "\n" + 
				"        return inKey[0];" + "\n" + 
				"    }else{" + "\n" + 
				"        return inKey;" + "\n" + 
				"    }" + "\n" + 
				"}" + "\n" + 
				"function moClamp(a,b,c){" + "\n" + 
				"	if(!(a instanceof Array)){" + "\n" + 
				"		return (Math.max(b, Math.min(c, a)));" + "\n" + 
				"	}else{" + "\n" + 
				"		var aryHold = [];" + "\n" + 
				"		for(var x = 0; x < a.length; x++){" + "\n" + 
				"			aryHold.push(Math.max(b, Math.min(c, a[x])));" + "\n" + 
				"		}return aryHold;" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"joystick(value);";
		} catch (err) {}
		try {
			faceShape.property("ADBE Transform Group").property("ADBE Position").expression = "/////// BEGIN JOYSTICK CODE ///////" + "\n" + 
				"function joystick(inputResult){" + "\n" + 
				"    var easeOverride_right = null;" + "\n" + 
				"    var easeOverride_left =  null;" + "\n" + 
				"    var easeOverride_up =    null;" + "\n" + 
				"    var easeOverride_down =  null;" + "\n" + 
				"	var contrl = thisComp.layer(\"Ctrl Head\");" + "\n" + 
				"	var myLimit = contrl(\"ADBE Effect Parade\")(\"joystickLimit\")(\"ADBE Slider Control-0001\");" + "\n" + 
				"	var contrlCurVal = contrl(\"ADBE Transform Group\")(\"ADBE Position\");" + "\n" + 
				"	var resultVal;" + "\n" + 
				"	var key1 = [125,177,0];" + "\n" + 
				"	var key2 = [137,177,0];" + "\n" + 
				"	var key3 = [113,177,0];" + "\n" + 
				"	var key4 = [125,174,0];" + "\n" + 
				"	var key5 = [125,180,0];" + "\n" + 
				"    key1 = unArray(key1);" + "\n" + 
				"    key2 = unArray(key2);" + "\n" + 
				"    key3 = unArray(key3);" + "\n" + 
				"    key4 = unArray(key4);" + "\n" + 
				"    key5 = unArray(key5);" + "\n" + 
				"	try{" + "\n" + 
				"        if(!thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\").active){" + "\n" + 
				"			throw (\"inactive\");" + "\n" + 
				"        }" + "\n" + 
				"		slideR = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0001\");" + "\n" + 
				"		slideL = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0002\");" + "\n" + 
				"		slideU = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0003\");" + "\n" + 
				"		slideD = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0004\");" + "\n" + 
				"	}catch(err){" + "\n" + 
				"		slideR = 0;" + "\n" + 
				"		slideL = 0;" + "\n" + 
				"		slideU = 0;" + "\n" + 
				"		slideD = 0;" + "\n" + 
				"	}" + "\n" + 
				"    if(easeOverride_right !== null && !isNaN(easeOverride_right)){" + "\n" + 
				"        slideR = moClamp(easeOverride_right,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_left !== null && !isNaN(easeOverride_left)){" + "\n" + 
				"        slideL = moClamp(easeOverride_left,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_up !== null && !isNaN(easeOverride_up)){" + "\n" + 
				"        slideU = moClamp(easeOverride_up,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_down !== null && !isNaN(easeOverride_down)){" + "\n" + 
				"        slideD = moClamp(easeOverride_down,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"	var easeResultX,easeResultY;" + "\n" + 
				"	if(contrlCurVal[0]>=0){" + "\n" + 
				"		resultVal = linear(contrlCurVal[0], 0, myLimit, key1, key2);" + "\n" + 
				"		if(slideR !==0){" + "\n" + 
				"			easeResultX = easeSwitch(contrlCurVal[0], 0, myLimit, key1, key2,slideR);" + "\n" + 
				"			resultVal = linear(Math.abs(slideR),0,100, resultVal,easeResultX);" + "\n" + 
				"		}" + "\n" + 
				"	}else{" + "\n" + 
				"		resultVal = linear(-contrlCurVal[0], 0, myLimit, key1, key3);" + "\n" + 
				"		if(slideL !==0){" + "\n" + 
				"			easeResultX = easeSwitch(-contrlCurVal[0], 0, myLimit, key1, key3,slideL);" + "\n" + 
				"			resultVal = linear(Math.abs(slideL),0,100, resultVal,easeResultX);" + "\n" + 
				"		}" + "\n" + 
				"	}" + "\n" + 
				"	var resultAdd = 0;" + "\n" + 
				"	if(contrlCurVal[1]<=0){" + "\n" + 
				"		resultAdd = linear(-contrlCurVal[1], 0, myLimit, key1, key4)- key1;" + "\n" + 
				"		if(slideU !==0){" + "\n" + 
				"			easeResultY = easeSwitch(-contrlCurVal[1], 0, myLimit, key1, key4,slideU)- key1;" + "\n" + 
				"			resultAdd = linear(Math.abs(slideU),0,100, resultAdd,easeResultY);" + "\n" + 
				"		}" + "\n" + 
				"	}else{" + "\n" + 
				"		resultAdd = linear(contrlCurVal[1], 0, myLimit, key1, key5)- key1;" + "\n" + 
				"		if(slideD!==0){" + "\n" + 
				"			easeResultY = easeSwitch(contrlCurVal[1], 0, myLimit, key1, key5,slideD)- key1;" + "\n" + 
				"			resultAdd = linear(Math.abs(slideD),0,100, resultAdd,easeResultY);" + "\n" + 
				"		}" + "\n" + 
				"	}" + "\n" + 
				"	return (resultVal+resultAdd)+(inputResult-key1);" + "\n" + 
				"}" + "\n" + 
				"function cosEase(val,min1,max1,input1,input2){" + "\n" + 
				"	var myCos = [];" + "\n" + 
				"    if(input1 instanceof Array){" + "\n" + 
				"        for(var x = 0; x < input1.length; x++){" + "\n" + 
				"            myCos.push(getMeCos(val, min1,max1,input1[x],input2[x]));" + "\n" + 
				"        }" + "\n" + 
				"    }else{ myCos = getMeCos(val, min1,max1,input1,input2);" + "\n" + 
				"	}return myCos;" + "\n" + 
				"	function getMeCos(val,min1,max1,input1,input2){" + "\n" + 
				"		var mapVal = moClamp(val/(max1-min1),0,1);" + "\n" + 
				"		var c = input2 - input1;" + "\n" + 
				"		var myCos2 = -c * Math.cos(mapVal * (Math.PI/2)) + c+ input1;" + "\n" + 
				"		return myCos2;" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"function sinEase(val,min1,max1,input1,input2){" + "\n" + 
				"	var mySin = [];" + "\n" + 
				"    if(input1 instanceof Array){" + "\n" + 
				"        for(var x = 0; x < input1.length; x++){" + "\n" + 
				"            mySin.push(getMeSin(val, min1,max1,input1[x],input2[x]));" + "\n" + 
				"        }" + "\n" + 
				"    }else{ mySin = getMeSin(val, min1,max1,input1,input2);" + "\n" + 
				"	}return mySin;" + "\n" + 
				"	function getMeSin(val,min1,max1,input1,input2){" + "\n" + 
				"		var mapVal = moClamp(val/(max1-min1),0,1);" + "\n" + 
				"		var c = input2 - input1;" + "\n" + 
				"		var mySin2 = c * Math.sin(mapVal * (Math.PI/2)) + input1;" + "\n" + 
				"		return mySin2;" + "\n" + 
				"    }" + "\n" + 
				"}" + "\n" + 
				"function easeSwitch(val,min1,max1,input1,input2,morph){" + "\n" + 
				"	if(morph < 0){" + "\n" + 
				"		return cosEase(val,min1,max1,input1,input2);" + "\n" + 
				"	}else{" + "\n" + 
				"		return sinEase(val,min1,max1,input1,input2);" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"function unArray(inKey){" + "\n" + 
				"    if(inKey instanceof Array && inKey.length === 1){" + "\n" + 
				"        return inKey[0];" + "\n" + 
				"    }else{" + "\n" + 
				"        return inKey;" + "\n" + 
				"    }" + "\n" + 
				"}" + "\n" + 
				"function moClamp(a,b,c){" + "\n" + 
				"	if(!(a instanceof Array)){" + "\n" + 
				"		return (Math.max(b, Math.min(c, a)));" + "\n" + 
				"	}else{" + "\n" + 
				"		var aryHold = [];" + "\n" + 
				"		for(var x = 0; x < a.length; x++){" + "\n" + 
				"			aryHold.push(Math.max(b, Math.min(c, a[x])));" + "\n" + 
				"		}return aryHold;" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"joystick(value);";
		} catch (err) {}
		try {
			faceShape.property("ADBE Transform Group").property("ADBE Scale").expression = "/////// BEGIN JOYSTICK CODE ///////" + "\n" + 
				"function joystick(inputResult){" + "\n" + 
				"    var easeOverride_right = null;" + "\n" + 
				"    var easeOverride_left =  null;" + "\n" + 
				"    var easeOverride_up =    null;" + "\n" + 
				"    var easeOverride_down =  null;" + "\n" + 
				"	var contrl = thisComp.layer(\"Ctrl Head\");" + "\n" + 
				"	var myLimit = contrl(\"ADBE Effect Parade\")(\"joystickLimit\")(\"ADBE Slider Control-0001\");" + "\n" + 
				"	var contrlCurVal = contrl(\"ADBE Transform Group\")(\"ADBE Position\");" + "\n" + 
				"	var resultVal;" + "\n" + 
				"	var key1 = [100,100,100];" + "\n" + 
				"	var key2 = [98,100,100];" + "\n" + 
				"	var key3 = [98,100,100];" + "\n" + 
				"	var key4 = [100,102,100];" + "\n" + 
				"	var key5 = [100,102,100];" + "\n" + 
				"    key1 = unArray(key1);" + "\n" + 
				"    key2 = unArray(key2);" + "\n" + 
				"    key3 = unArray(key3);" + "\n" + 
				"    key4 = unArray(key4);" + "\n" + 
				"    key5 = unArray(key5);" + "\n" + 
				"	try{" + "\n" + 
				"        if(!thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\").active){" + "\n" + 
				"			throw (\"inactive\");" + "\n" + 
				"        }" + "\n" + 
				"		slideR = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0001\");" + "\n" + 
				"		slideL = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0002\");" + "\n" + 
				"		slideU = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0003\");" + "\n" + 
				"		slideD = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0004\");" + "\n" + 
				"	}catch(err){" + "\n" + 
				"		slideR = 0;" + "\n" + 
				"		slideL = 0;" + "\n" + 
				"		slideU = 0;" + "\n" + 
				"		slideD = 0;" + "\n" + 
				"	}" + "\n" + 
				"    if(easeOverride_right !== null && !isNaN(easeOverride_right)){" + "\n" + 
				"        slideR = moClamp(easeOverride_right,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_left !== null && !isNaN(easeOverride_left)){" + "\n" + 
				"        slideL = moClamp(easeOverride_left,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_up !== null && !isNaN(easeOverride_up)){" + "\n" + 
				"        slideU = moClamp(easeOverride_up,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_down !== null && !isNaN(easeOverride_down)){" + "\n" + 
				"        slideD = moClamp(easeOverride_down,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"	var easeResultX,easeResultY;" + "\n" + 
				"	if(contrlCurVal[0]>=0){" + "\n" + 
				"		resultVal = linear(contrlCurVal[0], 0, myLimit, key1, key2);" + "\n" + 
				"		if(slideR !==0){" + "\n" + 
				"			easeResultX = easeSwitch(contrlCurVal[0], 0, myLimit, key1, key2,slideR);" + "\n" + 
				"			resultVal = linear(Math.abs(slideR),0,100, resultVal,easeResultX);" + "\n" + 
				"		}" + "\n" + 
				"	}else{" + "\n" + 
				"		resultVal = linear(-contrlCurVal[0], 0, myLimit, key1, key3);" + "\n" + 
				"		if(slideL !==0){" + "\n" + 
				"			easeResultX = easeSwitch(-contrlCurVal[0], 0, myLimit, key1, key3,slideL);" + "\n" + 
				"			resultVal = linear(Math.abs(slideL),0,100, resultVal,easeResultX);" + "\n" + 
				"		}" + "\n" + 
				"	}" + "\n" + 
				"	var resultAdd = 0;" + "\n" + 
				"	if(contrlCurVal[1]<=0){" + "\n" + 
				"		resultAdd = linear(-contrlCurVal[1], 0, myLimit, key1, key4)- key1;" + "\n" + 
				"		if(slideU !==0){" + "\n" + 
				"			easeResultY = easeSwitch(-contrlCurVal[1], 0, myLimit, key1, key4,slideU)- key1;" + "\n" + 
				"			resultAdd = linear(Math.abs(slideU),0,100, resultAdd,easeResultY);" + "\n" + 
				"		}" + "\n" + 
				"	}else{" + "\n" + 
				"		resultAdd = linear(contrlCurVal[1], 0, myLimit, key1, key5)- key1;" + "\n" + 
				"		if(slideD!==0){" + "\n" + 
				"			easeResultY = easeSwitch(contrlCurVal[1], 0, myLimit, key1, key5,slideD)- key1;" + "\n" + 
				"			resultAdd = linear(Math.abs(slideD),0,100, resultAdd,easeResultY);" + "\n" + 
				"		}" + "\n" + 
				"	}" + "\n" + 
				"	return (resultVal+resultAdd)+(inputResult-key1);" + "\n" + 
				"}" + "\n" + 
				"function cosEase(val,min1,max1,input1,input2){" + "\n" + 
				"	var myCos = [];" + "\n" + 
				"    if(input1 instanceof Array){" + "\n" + 
				"        for(var x = 0; x < input1.length; x++){" + "\n" + 
				"            myCos.push(getMeCos(val, min1,max1,input1[x],input2[x]));" + "\n" + 
				"        }" + "\n" + 
				"    }else{ myCos = getMeCos(val, min1,max1,input1,input2);" + "\n" + 
				"	}return myCos;" + "\n" + 
				"	function getMeCos(val,min1,max1,input1,input2){" + "\n" + 
				"		var mapVal = moClamp(val/(max1-min1),0,1);" + "\n" + 
				"		var c = input2 - input1;" + "\n" + 
				"		var myCos2 = -c * Math.cos(mapVal * (Math.PI/2)) + c+ input1;" + "\n" + 
				"		return myCos2;" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"function sinEase(val,min1,max1,input1,input2){" + "\n" + 
				"	var mySin = [];" + "\n" + 
				"    if(input1 instanceof Array){" + "\n" + 
				"        for(var x = 0; x < input1.length; x++){" + "\n" + 
				"            mySin.push(getMeSin(val, min1,max1,input1[x],input2[x]));" + "\n" + 
				"        }" + "\n" + 
				"    }else{ mySin = getMeSin(val, min1,max1,input1,input2);" + "\n" + 
				"	}return mySin;" + "\n" + 
				"	function getMeSin(val,min1,max1,input1,input2){" + "\n" + 
				"		var mapVal = moClamp(val/(max1-min1),0,1);" + "\n" + 
				"		var c = input2 - input1;" + "\n" + 
				"		var mySin2 = c * Math.sin(mapVal * (Math.PI/2)) + input1;" + "\n" + 
				"		return mySin2;" + "\n" + 
				"    }" + "\n" + 
				"}" + "\n" + 
				"function easeSwitch(val,min1,max1,input1,input2,morph){" + "\n" + 
				"	if(morph < 0){" + "\n" + 
				"		return cosEase(val,min1,max1,input1,input2);" + "\n" + 
				"	}else{" + "\n" + 
				"		return sinEase(val,min1,max1,input1,input2);" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"function unArray(inKey){" + "\n" + 
				"    if(inKey instanceof Array && inKey.length === 1){" + "\n" + 
				"        return inKey[0];" + "\n" + 
				"    }else{" + "\n" + 
				"        return inKey;" + "\n" + 
				"    }" + "\n" + 
				"}" + "\n" + 
				"function moClamp(a,b,c){" + "\n" + 
				"	if(!(a instanceof Array)){" + "\n" + 
				"		return (Math.max(b, Math.min(c, a)));" + "\n" + 
				"	}else{" + "\n" + 
				"		var aryHold = [];" + "\n" + 
				"		for(var x = 0; x < a.length; x++){" + "\n" + 
				"			aryHold.push(Math.max(b, Math.min(c, a[x])));" + "\n" + 
				"		}return aryHold;" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"joystick(value);";
		} catch (err) {}
		try {
			faceShape.property("ADBE Transform Group").property("ADBE Rotate Z").expression = "/////// BEGIN JOYSTICK CODE ///////" + "\n" + 
				"function joystick(inputResult){" + "\n" + 
				"    var easeOverride_right = null;" + "\n" + 
				"    var easeOverride_left =  null;" + "\n" + 
				"    var easeOverride_up =    null;" + "\n" + 
				"    var easeOverride_down =  null;" + "\n" + 
				"	var contrl = thisComp.layer(\"Ctrl Head\");" + "\n" + 
				"	var myLimit = contrl(\"ADBE Effect Parade\")(\"joystickLimit\")(\"ADBE Slider Control-0001\");" + "\n" + 
				"	var contrlCurVal = contrl(\"ADBE Transform Group\")(\"ADBE Position\");" + "\n" + 
				"	var resultVal;" + "\n" + 
				"	var key1 = [0];" + "\n" + 
				"	var key2 = [-3];" + "\n" + 
				"	var key3 = [3];" + "\n" + 
				"	var key4 = [0];" + "\n" + 
				"	var key5 = [0];" + "\n" + 
				"    key1 = unArray(key1);" + "\n" + 
				"    key2 = unArray(key2);" + "\n" + 
				"    key3 = unArray(key3);" + "\n" + 
				"    key4 = unArray(key4);" + "\n" + 
				"    key5 = unArray(key5);" + "\n" + 
				"	try{" + "\n" + 
				"        if(!thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\").active){" + "\n" + 
				"			throw (\"inactive\");" + "\n" + 
				"        }" + "\n" + 
				"		slideR = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0001\");" + "\n" + 
				"		slideL = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0002\");" + "\n" + 
				"		slideU = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0003\");" + "\n" + 
				"		slideD = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0004\");" + "\n" + 
				"	}catch(err){" + "\n" + 
				"		slideR = 0;" + "\n" + 
				"		slideL = 0;" + "\n" + 
				"		slideU = 0;" + "\n" + 
				"		slideD = 0;" + "\n" + 
				"	}" + "\n" + 
				"    if(easeOverride_right !== null && !isNaN(easeOverride_right)){" + "\n" + 
				"        slideR = moClamp(easeOverride_right,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_left !== null && !isNaN(easeOverride_left)){" + "\n" + 
				"        slideL = moClamp(easeOverride_left,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_up !== null && !isNaN(easeOverride_up)){" + "\n" + 
				"        slideU = moClamp(easeOverride_up,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_down !== null && !isNaN(easeOverride_down)){" + "\n" + 
				"        slideD = moClamp(easeOverride_down,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"	var easeResultX,easeResultY;" + "\n" + 
				"	if(contrlCurVal[0]>=0){" + "\n" + 
				"		resultVal = linear(contrlCurVal[0], 0, myLimit, key1, key2);" + "\n" + 
				"		if(slideR !==0){" + "\n" + 
				"			easeResultX = easeSwitch(contrlCurVal[0], 0, myLimit, key1, key2,slideR);" + "\n" + 
				"			resultVal = linear(Math.abs(slideR),0,100, resultVal,easeResultX);" + "\n" + 
				"		}" + "\n" + 
				"	}else{" + "\n" + 
				"		resultVal = linear(-contrlCurVal[0], 0, myLimit, key1, key3);" + "\n" + 
				"		if(slideL !==0){" + "\n" + 
				"			easeResultX = easeSwitch(-contrlCurVal[0], 0, myLimit, key1, key3,slideL);" + "\n" + 
				"			resultVal = linear(Math.abs(slideL),0,100, resultVal,easeResultX);" + "\n" + 
				"		}" + "\n" + 
				"	}" + "\n" + 
				"	var resultAdd = 0;" + "\n" + 
				"	if(contrlCurVal[1]<=0){" + "\n" + 
				"		resultAdd = linear(-contrlCurVal[1], 0, myLimit, key1, key4)- key1;" + "\n" + 
				"		if(slideU !==0){" + "\n" + 
				"			easeResultY = easeSwitch(-contrlCurVal[1], 0, myLimit, key1, key4,slideU)- key1;" + "\n" + 
				"			resultAdd = linear(Math.abs(slideU),0,100, resultAdd,easeResultY);" + "\n" + 
				"		}" + "\n" + 
				"	}else{" + "\n" + 
				"		resultAdd = linear(contrlCurVal[1], 0, myLimit, key1, key5)- key1;" + "\n" + 
				"		if(slideD!==0){" + "\n" + 
				"			easeResultY = easeSwitch(contrlCurVal[1], 0, myLimit, key1, key5,slideD)- key1;" + "\n" + 
				"			resultAdd = linear(Math.abs(slideD),0,100, resultAdd,easeResultY);" + "\n" + 
				"		}" + "\n" + 
				"	}" + "\n" + 
				"	return (resultVal+resultAdd)+(inputResult-key1);" + "\n" + 
				"}" + "\n" + 
				"function cosEase(val,min1,max1,input1,input2){" + "\n" + 
				"	var myCos = [];" + "\n" + 
				"    if(input1 instanceof Array){" + "\n" + 
				"        for(var x = 0; x < input1.length; x++){" + "\n" + 
				"            myCos.push(getMeCos(val, min1,max1,input1[x],input2[x]));" + "\n" + 
				"        }" + "\n" + 
				"    }else{ myCos = getMeCos(val, min1,max1,input1,input2);" + "\n" + 
				"	}return myCos;" + "\n" + 
				"	function getMeCos(val,min1,max1,input1,input2){" + "\n" + 
				"		var mapVal = moClamp(val/(max1-min1),0,1);" + "\n" + 
				"		var c = input2 - input1;" + "\n" + 
				"		var myCos2 = -c * Math.cos(mapVal * (Math.PI/2)) + c+ input1;" + "\n" + 
				"		return myCos2;" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"function sinEase(val,min1,max1,input1,input2){" + "\n" + 
				"	var mySin = [];" + "\n" + 
				"    if(input1 instanceof Array){" + "\n" + 
				"        for(var x = 0; x < input1.length; x++){" + "\n" + 
				"            mySin.push(getMeSin(val, min1,max1,input1[x],input2[x]));" + "\n" + 
				"        }" + "\n" + 
				"    }else{ mySin = getMeSin(val, min1,max1,input1,input2);" + "\n" + 
				"	}return mySin;" + "\n" + 
				"	function getMeSin(val,min1,max1,input1,input2){" + "\n" + 
				"		var mapVal = moClamp(val/(max1-min1),0,1);" + "\n" + 
				"		var c = input2 - input1;" + "\n" + 
				"		var mySin2 = c * Math.sin(mapVal * (Math.PI/2)) + input1;" + "\n" + 
				"		return mySin2;" + "\n" + 
				"    }" + "\n" + 
				"}" + "\n" + 
				"function easeSwitch(val,min1,max1,input1,input2,morph){" + "\n" + 
				"	if(morph < 0){" + "\n" + 
				"		return cosEase(val,min1,max1,input1,input2);" + "\n" + 
				"	}else{" + "\n" + 
				"		return sinEase(val,min1,max1,input1,input2);" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"function unArray(inKey){" + "\n" + 
				"    if(inKey instanceof Array && inKey.length === 1){" + "\n" + 
				"        return inKey[0];" + "\n" + 
				"    }else{" + "\n" + 
				"        return inKey;" + "\n" + 
				"    }" + "\n" + 
				"}" + "\n" + 
				"function moClamp(a,b,c){" + "\n" + 
				"	if(!(a instanceof Array)){" + "\n" + 
				"		return (Math.max(b, Math.min(c, a)));" + "\n" + 
				"	}else{" + "\n" + 
				"		var aryHold = [];" + "\n" + 
				"		for(var x = 0; x < a.length; x++){" + "\n" + 
				"			aryHold.push(Math.max(b, Math.min(c, a[x])));" + "\n" + 
				"		}return aryHold;" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"joystick(value);";
		} catch (err) {}
		try {
			earL.property("ADBE Transform Group").property("ADBE Position").expression = "/////// BEGIN JOYSTICK CODE ///////" + "\n" + 
				"function joystick(inputResult){" + "\n" + 
				"    var easeOverride_right = null;" + "\n" + 
				"    var easeOverride_left =  null;" + "\n" + 
				"    var easeOverride_up =    null;" + "\n" + 
				"    var easeOverride_down =  null;" + "\n" + 
				"	var contrl = thisComp.layer(\"Ctrl Head\");" + "\n" + 
				"	var myLimit = contrl(\"ADBE Effect Parade\")(\"joystickLimit\")(\"ADBE Slider Control-0001\");" + "\n" + 
				"	var contrlCurVal = contrl(\"ADBE Transform Group\")(\"ADBE Position\");" + "\n" + 
				"	var resultVal;" + "\n" + 
				"	var key1 = [225,246.5,0];" + "\n" + 
				"	var key2 = [225.979598999023,246.5,0];" + "\n" + 
				"	var key3 = [248.26530456543,246.5,0];" + "\n" + 
				"	var key4 = [225,257.441162109375,0];" + "\n" + 
				"	var key5 = [225,240.460784912109,0];" + "\n" + 
				"    key1 = unArray(key1);" + "\n" + 
				"    key2 = unArray(key2);" + "\n" + 
				"    key3 = unArray(key3);" + "\n" + 
				"    key4 = unArray(key4);" + "\n" + 
				"    key5 = unArray(key5);" + "\n" + 
				"	try{" + "\n" + 
				"        if(!thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\").active){" + "\n" + 
				"			throw (\"inactive\");" + "\n" + 
				"        }" + "\n" + 
				"		slideR = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0001\");" + "\n" + 
				"		slideL = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0002\");" + "\n" + 
				"		slideU = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0003\");" + "\n" + 
				"		slideD = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0004\");" + "\n" + 
				"	}catch(err){" + "\n" + 
				"		slideR = 0;" + "\n" + 
				"		slideL = 0;" + "\n" + 
				"		slideU = 0;" + "\n" + 
				"		slideD = 0;" + "\n" + 
				"	}" + "\n" + 
				"    if(easeOverride_right !== null && !isNaN(easeOverride_right)){" + "\n" + 
				"        slideR = moClamp(easeOverride_right,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_left !== null && !isNaN(easeOverride_left)){" + "\n" + 
				"        slideL = moClamp(easeOverride_left,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_up !== null && !isNaN(easeOverride_up)){" + "\n" + 
				"        slideU = moClamp(easeOverride_up,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_down !== null && !isNaN(easeOverride_down)){" + "\n" + 
				"        slideD = moClamp(easeOverride_down,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"	var easeResultX,easeResultY;" + "\n" + 
				"	if(contrlCurVal[0]>=0){" + "\n" + 
				"		resultVal = linear(contrlCurVal[0], 0, myLimit, key1, key2);" + "\n" + 
				"		if(slideR !==0){" + "\n" + 
				"			easeResultX = easeSwitch(contrlCurVal[0], 0, myLimit, key1, key2,slideR);" + "\n" + 
				"			resultVal = linear(Math.abs(slideR),0,100, resultVal,easeResultX);" + "\n" + 
				"		}" + "\n" + 
				"	}else{" + "\n" + 
				"		resultVal = linear(-contrlCurVal[0], 0, myLimit, key1, key3);" + "\n" + 
				"		if(slideL !==0){" + "\n" + 
				"			easeResultX = easeSwitch(-contrlCurVal[0], 0, myLimit, key1, key3,slideL);" + "\n" + 
				"			resultVal = linear(Math.abs(slideL),0,100, resultVal,easeResultX);" + "\n" + 
				"		}" + "\n" + 
				"	}" + "\n" + 
				"	var resultAdd = 0;" + "\n" + 
				"	if(contrlCurVal[1]<=0){" + "\n" + 
				"		resultAdd = linear(-contrlCurVal[1], 0, myLimit, key1, key4)- key1;" + "\n" + 
				"		if(slideU !==0){" + "\n" + 
				"			easeResultY = easeSwitch(-contrlCurVal[1], 0, myLimit, key1, key4,slideU)- key1;" + "\n" + 
				"			resultAdd = linear(Math.abs(slideU),0,100, resultAdd,easeResultY);" + "\n" + 
				"		}" + "\n" + 
				"	}else{" + "\n" + 
				"		resultAdd = linear(contrlCurVal[1], 0, myLimit, key1, key5)- key1;" + "\n" + 
				"		if(slideD!==0){" + "\n" + 
				"			easeResultY = easeSwitch(contrlCurVal[1], 0, myLimit, key1, key5,slideD)- key1;" + "\n" + 
				"			resultAdd = linear(Math.abs(slideD),0,100, resultAdd,easeResultY);" + "\n" + 
				"		}" + "\n" + 
				"	}" + "\n" + 
				"	return (resultVal+resultAdd)+(inputResult-key1);" + "\n" + 
				"}" + "\n" + 
				"function cosEase(val,min1,max1,input1,input2){" + "\n" + 
				"	var myCos = [];" + "\n" + 
				"    if(input1 instanceof Array){" + "\n" + 
				"        for(var x = 0; x < input1.length; x++){" + "\n" + 
				"            myCos.push(getMeCos(val, min1,max1,input1[x],input2[x]));" + "\n" + 
				"        }" + "\n" + 
				"    }else{ myCos = getMeCos(val, min1,max1,input1,input2);" + "\n" + 
				"	}return myCos;" + "\n" + 
				"	function getMeCos(val,min1,max1,input1,input2){" + "\n" + 
				"		var mapVal = moClamp(val/(max1-min1),0,1);" + "\n" + 
				"		var c = input2 - input1;" + "\n" + 
				"		var myCos2 = -c * Math.cos(mapVal * (Math.PI/2)) + c+ input1;" + "\n" + 
				"		return myCos2;" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"function sinEase(val,min1,max1,input1,input2){" + "\n" + 
				"	var mySin = [];" + "\n" + 
				"    if(input1 instanceof Array){" + "\n" + 
				"        for(var x = 0; x < input1.length; x++){" + "\n" + 
				"            mySin.push(getMeSin(val, min1,max1,input1[x],input2[x]));" + "\n" + 
				"        }" + "\n" + 
				"    }else{ mySin = getMeSin(val, min1,max1,input1,input2);" + "\n" + 
				"	}return mySin;" + "\n" + 
				"	function getMeSin(val,min1,max1,input1,input2){" + "\n" + 
				"		var mapVal = moClamp(val/(max1-min1),0,1);" + "\n" + 
				"		var c = input2 - input1;" + "\n" + 
				"		var mySin2 = c * Math.sin(mapVal * (Math.PI/2)) + input1;" + "\n" + 
				"		return mySin2;" + "\n" + 
				"    }" + "\n" + 
				"}" + "\n" + 
				"function easeSwitch(val,min1,max1,input1,input2,morph){" + "\n" + 
				"	if(morph < 0){" + "\n" + 
				"		return cosEase(val,min1,max1,input1,input2);" + "\n" + 
				"	}else{" + "\n" + 
				"		return sinEase(val,min1,max1,input1,input2);" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"function unArray(inKey){" + "\n" + 
				"    if(inKey instanceof Array && inKey.length === 1){" + "\n" + 
				"        return inKey[0];" + "\n" + 
				"    }else{" + "\n" + 
				"        return inKey;" + "\n" + 
				"    }" + "\n" + 
				"}" + "\n" + 
				"function moClamp(a,b,c){" + "\n" + 
				"	if(!(a instanceof Array)){" + "\n" + 
				"		return (Math.max(b, Math.min(c, a)));" + "\n" + 
				"	}else{" + "\n" + 
				"		var aryHold = [];" + "\n" + 
				"		for(var x = 0; x < a.length; x++){" + "\n" + 
				"			aryHold.push(Math.max(b, Math.min(c, a[x])));" + "\n" + 
				"		}return aryHold;" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"joystick(value);";
		} catch (err) {}
		try {
			earR.property("ADBE Transform Group").property("ADBE Position").expression = "/////// BEGIN JOYSTICK CODE ///////" + "\n" + 
				"function joystick(inputResult){" + "\n" + 
				"    var easeOverride_right = null;" + "\n" + 
				"    var easeOverride_left =  null;" + "\n" + 
				"    var easeOverride_up =    null;" + "\n" + 
				"    var easeOverride_down =  null;" + "\n" + 
				"	var contrl = thisComp.layer(\"Ctrl Head\");" + "\n" + 
				"	var myLimit = contrl(\"ADBE Effect Parade\")(\"joystickLimit\")(\"ADBE Slider Control-0001\");" + "\n" + 
				"	var contrlCurVal = contrl(\"ADBE Transform Group\")(\"ADBE Position\");" + "\n" + 
				"	var resultVal;" + "\n" + 
				"	var key1 = [225,246.5,0];" + "\n" + 
				"	var key2 = [203.775512695313,246.5,0];" + "\n" + 
				"	var key3 = [225.040817260742,246.5,0];" + "\n" + 
				"	var key4 = [225,257.441162109375,0];" + "\n" + 
				"	var key5 = [225,240.460784912109,0];" + "\n" + 
				"    key1 = unArray(key1);" + "\n" + 
				"    key2 = unArray(key2);" + "\n" + 
				"    key3 = unArray(key3);" + "\n" + 
				"    key4 = unArray(key4);" + "\n" + 
				"    key5 = unArray(key5);" + "\n" + 
				"	try{" + "\n" + 
				"        if(!thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\").active){" + "\n" + 
				"			throw (\"inactive\");" + "\n" + 
				"        }" + "\n" + 
				"		slideR = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0001\");" + "\n" + 
				"		slideL = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0002\");" + "\n" + 
				"		slideU = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0003\");" + "\n" + 
				"		slideD = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0004\");" + "\n" + 
				"	}catch(err){" + "\n" + 
				"		slideR = 0;" + "\n" + 
				"		slideL = 0;" + "\n" + 
				"		slideU = 0;" + "\n" + 
				"		slideD = 0;" + "\n" + 
				"	}" + "\n" + 
				"    if(easeOverride_right !== null && !isNaN(easeOverride_right)){" + "\n" + 
				"        slideR = moClamp(easeOverride_right,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_left !== null && !isNaN(easeOverride_left)){" + "\n" + 
				"        slideL = moClamp(easeOverride_left,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_up !== null && !isNaN(easeOverride_up)){" + "\n" + 
				"        slideU = moClamp(easeOverride_up,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_down !== null && !isNaN(easeOverride_down)){" + "\n" + 
				"        slideD = moClamp(easeOverride_down,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"	var easeResultX,easeResultY;" + "\n" + 
				"	if(contrlCurVal[0]>=0){" + "\n" + 
				"		resultVal = linear(contrlCurVal[0], 0, myLimit, key1, key2);" + "\n" + 
				"		if(slideR !==0){" + "\n" + 
				"			easeResultX = easeSwitch(contrlCurVal[0], 0, myLimit, key1, key2,slideR);" + "\n" + 
				"			resultVal = linear(Math.abs(slideR),0,100, resultVal,easeResultX);" + "\n" + 
				"		}" + "\n" + 
				"	}else{" + "\n" + 
				"		resultVal = linear(-contrlCurVal[0], 0, myLimit, key1, key3);" + "\n" + 
				"		if(slideL !==0){" + "\n" + 
				"			easeResultX = easeSwitch(-contrlCurVal[0], 0, myLimit, key1, key3,slideL);" + "\n" + 
				"			resultVal = linear(Math.abs(slideL),0,100, resultVal,easeResultX);" + "\n" + 
				"		}" + "\n" + 
				"	}" + "\n" + 
				"	var resultAdd = 0;" + "\n" + 
				"	if(contrlCurVal[1]<=0){" + "\n" + 
				"		resultAdd = linear(-contrlCurVal[1], 0, myLimit, key1, key4)- key1;" + "\n" + 
				"		if(slideU !==0){" + "\n" + 
				"			easeResultY = easeSwitch(-contrlCurVal[1], 0, myLimit, key1, key4,slideU)- key1;" + "\n" + 
				"			resultAdd = linear(Math.abs(slideU),0,100, resultAdd,easeResultY);" + "\n" + 
				"		}" + "\n" + 
				"	}else{" + "\n" + 
				"		resultAdd = linear(contrlCurVal[1], 0, myLimit, key1, key5)- key1;" + "\n" + 
				"		if(slideD!==0){" + "\n" + 
				"			easeResultY = easeSwitch(contrlCurVal[1], 0, myLimit, key1, key5,slideD)- key1;" + "\n" + 
				"			resultAdd = linear(Math.abs(slideD),0,100, resultAdd,easeResultY);" + "\n" + 
				"		}" + "\n" + 
				"	}" + "\n" + 
				"	return (resultVal+resultAdd)+(inputResult-key1);" + "\n" + 
				"}" + "\n" + 
				"function cosEase(val,min1,max1,input1,input2){" + "\n" + 
				"	var myCos = [];" + "\n" + 
				"    if(input1 instanceof Array){" + "\n" + 
				"        for(var x = 0; x < input1.length; x++){" + "\n" + 
				"            myCos.push(getMeCos(val, min1,max1,input1[x],input2[x]));" + "\n" + 
				"        }" + "\n" + 
				"    }else{ myCos = getMeCos(val, min1,max1,input1,input2);" + "\n" + 
				"	}return myCos;" + "\n" + 
				"	function getMeCos(val,min1,max1,input1,input2){" + "\n" + 
				"		var mapVal = moClamp(val/(max1-min1),0,1);" + "\n" + 
				"		var c = input2 - input1;" + "\n" + 
				"		var myCos2 = -c * Math.cos(mapVal * (Math.PI/2)) + c+ input1;" + "\n" + 
				"		return myCos2;" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"function sinEase(val,min1,max1,input1,input2){" + "\n" + 
				"	var mySin = [];" + "\n" + 
				"    if(input1 instanceof Array){" + "\n" + 
				"        for(var x = 0; x < input1.length; x++){" + "\n" + 
				"            mySin.push(getMeSin(val, min1,max1,input1[x],input2[x]));" + "\n" + 
				"        }" + "\n" + 
				"    }else{ mySin = getMeSin(val, min1,max1,input1,input2);" + "\n" + 
				"	}return mySin;" + "\n" + 
				"	function getMeSin(val,min1,max1,input1,input2){" + "\n" + 
				"		var mapVal = moClamp(val/(max1-min1),0,1);" + "\n" + 
				"		var c = input2 - input1;" + "\n" + 
				"		var mySin2 = c * Math.sin(mapVal * (Math.PI/2)) + input1;" + "\n" + 
				"		return mySin2;" + "\n" + 
				"    }" + "\n" + 
				"}" + "\n" + 
				"function easeSwitch(val,min1,max1,input1,input2,morph){" + "\n" + 
				"	if(morph < 0){" + "\n" + 
				"		return cosEase(val,min1,max1,input1,input2);" + "\n" + 
				"	}else{" + "\n" + 
				"		return sinEase(val,min1,max1,input1,input2);" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"function unArray(inKey){" + "\n" + 
				"    if(inKey instanceof Array && inKey.length === 1){" + "\n" + 
				"        return inKey[0];" + "\n" + 
				"    }else{" + "\n" + 
				"        return inKey;" + "\n" + 
				"    }" + "\n" + 
				"}" + "\n" + 
				"function moClamp(a,b,c){" + "\n" + 
				"	if(!(a instanceof Array)){" + "\n" + 
				"		return (Math.max(b, Math.min(c, a)));" + "\n" + 
				"	}else{" + "\n" + 
				"		var aryHold = [];" + "\n" + 
				"		for(var x = 0; x < a.length; x++){" + "\n" + 
				"			aryHold.push(Math.max(b, Math.min(c, a[x])));" + "\n" + 
				"		}return aryHold;" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"joystick(value);";
		} catch (err) {}
		try {
			neck.property("ADBE Transform Group").property("ADBE Anchor Point").expression = "W=thisComp.layer(\"Ctrl Limbs\").effect(\"EVT4.1 Limbs Control\");" + "\n" + 
				"" + "\n" + 
				"BL=W(17);" + "\n" + 
				"" + "\n" + 
				"L=W(5);" + "\n" + 
				"" + "\n" + 
				"BT=W(21);" + "\n" + 
				"" + "\n" + 
				"T=W(11);" + "\n" + 
				"" + "\n" + 
				"L=thisComp.layer(\"Ctrl Limbs\").effect(\"EVT4.1 Limbs Control\")(5);" + "\n" + 
				"" + "\n" + 
				"[transform.anchorPoint[0],transform.anchorPoint[1]-((BL-L)/2)+((BT-T)/2)];";
		} catch (err) {}
		try {
			neck.property("ADBE Transform Group").property("ADBE Position").expression = "W=thisComp.layer(\"Ctrl Limbs\").effect(\"EVT4.1 Limbs Control\");" + "\n" + 
				"" + "\n" + 
				"BL=W(16);" + "\n" + 
				"" + "\n" + 
				"L=W(4);" + "\n" + 
				"" + "\n" + 
				"BT=W(21);" + "\n" + 
				"" + "\n" + 
				"T=W(11);" + "\n" + 
				"" + "\n" + 
				"[transform.position[0], transform.position[1]+((BL-L)/2)];" + "\n" + 
				"";
		} catch (err) {}
		try {
			neck.property("ADBE Transform Group").property("ADBE Rotate Z").expression = "thisComp.layer(\"C_NECK\").transform.rotation";
		} catch (err) {}
		try {
			body2.property("ADBE Transform Group").property("ADBE Position").expression = "W=thisComp.layer(\"Ctrl Limbs\").effect(\"EVT4.1 Limbs Control\");" + "\n" + 
				"" + "\n" + 
				"BL=W(16);" + "\n" + 
				"" + "\n" + 
				"L=W(4);" + "\n" + 
				"" + "\n" + 
				"T=W(10);" + "\n" + 
				"" + "\n" + 
				"BT=W(20);" + "\n" + 
				"" + "\n" + 
				"[transform.position[0], transform.position[1]+(((BL-L)/2))];" + "\n" + 
				"";
		} catch (err) {}
		try {
			feetL2.property("ADBE Transform Group").property("ADBE Anchor Point").expression = "thisComp.layer(\"FEET L\").transform.anchorPoint";
		} catch (err) {}
		try {
			feetL2.property("ADBE Transform Group").property("ADBE Position").expression = "thisComp.layer(\"C_FEET L\").transform.position";
		} catch (err) {}
		try {
			feetL2.property("ADBE Transform Group").property("ADBE Rotate Z").expression = "thisComp.layer(\"C_FEET L\").transform.rotation";
		} catch (err) {}
		try {
			feetL.property("ADBE Transform Group").property("ADBE Position").expression = "W=thisComp.layer(\"Ctrl Limbs\").effect(\"EVT4.1 Limbs Control\");" + "\n" + 
				"" + "\n" + 
				"BL=W(15);" + "\n" + 
				"" + "\n" + 
				"L=W(3);" + "\n" + 
				"" + "\n" + 
				"T=W(9);" + "\n" + 
				"" + "\n" + 
				"BT=W(19);" + "\n" + 
				"" + "\n" + 
				"[transform.position[0], transform.position[1]+((L-BL)/2)];" + "\n" + 
				"";
		} catch (err) {}
		try {
			feetL.property("ADBE Transform Group").property("ADBE Rotate Z").expression = "thisComp.layer(\"C_FEET L\").transform.rotation";
		} catch (err) {}
		try {
			clafL.property("ADBE Transform Group").property("ADBE Anchor Point").expression = "W=thisComp.layer(\"Ctrl Limbs\").effect(\"EVT4.1 Limbs Control\");" + "\n" + 
				"" + "\n" + 
				"BL=W(15);" + "\n" + 
				"" + "\n" + 
				"L=W(3);" + "\n" + 
				"" + "\n" + 
				"T=W(9);" + "\n" + 
				"" + "\n" + 
				"BT=W(19);" + "\n" + 
				"" + "\n" + 
				"[transform.anchorPoint[0],transform.anchorPoint[1]-(L-BL)/2+((T-BT)/2)];";
		} catch (err) {}
		try {
			clafL.property("ADBE Transform Group").property("ADBE Position").expression = "W=thisComp.layer(\"Ctrl Limbs\").effect(\"EVT4.1 Limbs Control\");" + "\n" + 
				"" + "\n" + 
				"BL=W(15);" + "\n" + 
				"" + "\n" + 
				"L=W(3);" + "\n" + 
				"" + "\n" + 
				"T=W(9);" + "\n" + 
				"" + "\n" + 
				"BT=W(19);" + "\n" + 
				"" + "\n" + 
				"[transform.position[0], transform.position[1]+(L-BL-((L-BL)/2))-((T-BT)/2)];" + "\n" + 
				"" + "\n" + 
				"" + "\n" + 
				"";
		} catch (err) {}
		try {
			clafL.property("ADBE Transform Group").property("ADBE Rotate Z").expression = "//EVT4.1 Rig" + "\n" + 
				"" + "\n" + 
				"layer1 = thisComp.layer(\"THIGH L\");" + "\n" + 
				"" + "\n" + 
				"layer2 = thisComp.layer(\"CLAF L\");" + "\n" + 
				"" + "\n" + 
				"layer3 = thisComp.layer(\"FEET L\");" + "\n" + 
				"" + "\n" + 
				"controller = thisComp.layer(\"C_FEET L\");" + "\n" + 
				"" + "\n" + 
				"ctrlEffect = controller.effect(\"EVT4.1 Rig Control\")" + "\n" + 
				"" + "\n" + 
				"FK = ctrlEffect(6);" + "\n" + 
				"" + "\n" + 
				"IKFK = ctrlEffect(4) == 0;" + "\n" + 
				"" + "\n" + 
				"cw = ctrlEffect(1) == 0;" + "\n" + 
				"" + "\n" + 
				"function getWorldPos(L){" + "\n" + 
				"" + "\n" + 
				"return L.toWorld(L.anchorPoint);" + "\n" + 
				"" + "\n" + 
				"}" + "\n" + 
				"" + "\n" + 
				"function ik() {" + "\n" + 
				"" + "\n" + 
				"A = getWorldPos(layer1);" + "\n" + 
				"" + "\n" + 
				"B = getWorldPos(layer2);" + "\n" + 
				"" + "\n" + 
				"C = getWorldPos(layer3);" + "\n" + 
				"" + "\n" + 
				"E = getWorldPos(controller);" + "\n" + 
				"" + "\n" + 
				"a = length(B,C);" + "\n" + 
				"" + "\n" + 
				"b = length(E,A);" + "\n" + 
				"" + "\n" + 
				"c = length(A,B);" + "\n" + 
				"" + "\n" + 
				"x = (b*b + c*c - a*a )/(2*b);" + "\n" + 
				"" + "\n" + 
				"alpha = Math.acos(clamp(x/c,-1,1));" + "\n" + 
				"" + "\n" + 
				"y = b - x;" + "\n" + 
				"" + "\n" + 
				"  gamma = Math.acos(clamp(y/a,-1,1));" + "\n" + 
				"" + "\n" + 
				"result = (cw ? 1 : -1)*radiansToDegrees(gamma + alpha);  V1 = B - A;" + "\n" + 
				"" + "\n" + 
				"  adj1 = radiansToDegrees(Math.atan2(V1[1],V1[0]));" + "\n" + 
				"" + "\n" + 
				"  V2 = C - B;" + "\n" + 
				"" + "\n" + 
				"  adj2 = radiansToDegrees(Math.atan2(V2[1],V2[0]));" + "\n" + 
				"" + "\n" + 
				"  IK = result +  adj1 - adj2 + value;" + "\n" + 
				"" + "\n" + 
				"return IK;" + "\n" + 
				"" + "\n" + 
				"}" + "\n" + 
				"" + "\n" + 
				"IKFK ? ik() : FK;";
		} catch (err) {}
		try {
			thighL.property("ADBE Transform Group").property("ADBE Anchor Point").expression = "W=thisComp.layer(\"Ctrl Limbs\").effect(\"EVT4.1 Limbs Control\");" + "\n" + 
				"" + "\n" + 
				"BL=W(15);" + "\n" + 
				"" + "\n" + 
				"L=W(3);" + "\n" + 
				"" + "\n" + 
				"T=W(9);" + "\n" + 
				"" + "\n" + 
				"BT=W(19);" + "\n" + 
				"" + "\n" + 
				"[transform.anchorPoint[0],transform.anchorPoint[1]-(L-BL)/2+((T-BT)/2)];";
		} catch (err) {}
		try {
			thighL.property("ADBE Transform Group").property("ADBE Position").expression = "W=thisComp.layer(\"Ctrl Limbs\").effect(\"EVT4.1 Limbs Control\");" + "\n" + 
				"" + "\n" + 
				"H=W(10);" + "\n" + 
				"" + "\n" + 
				"ZH=W(20);" + "\n" + 
				"" + "\n" + 
				"SH=W(25);" + "\n" + 
				"" + "\n" + 
				"[transform.position[0]+((ZH-H)/2)-SH,transform.position[1]];";
		} catch (err) {}
		try {
			thighL.property("ADBE Transform Group").property("ADBE Rotate Z").expression = "//EVT4.1 Rig" + "\n" + 
				"" + "\n" + 
				"layer1 = thisComp.layer(\"THIGH L\");" + "\n" + 
				"" + "\n" + 
				"layer2 = thisComp.layer(\"CLAF L\");" + "\n" + 
				"" + "\n" + 
				"layer3 = thisComp.layer(\"FEET L\");" + "\n" + 
				"" + "\n" + 
				"controller = thisComp.layer(\"C_FEET L\");" + "\n" + 
				"" + "\n" + 
				"ctrlEffect = controller.effect(\"EVT4.1 Rig Control\")" + "\n" + 
				"" + "\n" + 
				"limit = effect(\"IK Limit\")(1);" + "\n" + 
				"" + "\n" + 
				"FK = ctrlEffect(5);" + "\n" + 
				"" + "\n" + 
				"IKFK = ctrlEffect(4) == 0;" + "\n" + 
				"" + "\n" + 
				"cw = ctrlEffect(1) == 0;" + "\n" + 
				"" + "\n" + 
				"function getWorldPos(L){" + "\n" + 
				"" + "\n" + 
				"return L.toWorld(L.anchorPoint);" + "\n" + 
				"" + "\n" + 
				"}" + "\n" + 
				"" + "\n" + 
				"function ik() {" + "\n" + 
				"" + "\n" + 
				"A = getWorldPos(layer1);" + "\n" + 
				"" + "\n" + 
				"B = getWorldPos(layer2);" + "\n" + 
				"" + "\n" + 
				"C = getWorldPos(layer3);" + "\n" + 
				"" + "\n" + 
				"E = getWorldPos(controller);" + "\n" + 
				"" + "\n" + 
				"a = length(B,C);" + "\n" + 
				"" + "\n" + 
				"b = length(E,A);" + "\n" + 
				"" + "\n" + 
				"c = length(A,B);" + "\n" + 
				"" + "\n" + 
				"x = (b*b + c*c - a*a )/(2*b);" + "\n" + 
				"" + "\n" + 
				"alpha = Math.acos(clamp(x/c,-1,1));" + "\n" + 
				"" + "\n" + 
				"D = E - A;" + "\n" + 
				"" + "\n" + 
				"delta = Math.atan2(D[1],D[0]);" + "\n" + 
				"" + "\n" + 
				"result = radiansToDegrees(delta - (cw ? 1 : -1)*alpha);" + "\n" + 
				"" + "\n" + 
				"V = B - A;" + "\n" + 
				"" + "\n" + 
				"adj1 = radiansToDegrees(Math.atan2(V[1],V[0]));" + "\n" + 
				"" + "\n" + 
				"IK = result - adj1 + value;" + "\n" + 
				"" + "\n" + 
				"if (IK < limit) IK+=360;" + "\n" + 
				"" + "\n" + 
				"return IK;" + "\n" + 
				"" + "\n" + 
				"}" + "\n" + 
				"" + "\n" + 
				"IKFK ? ik() : FK;";
		} catch (err) {}
		try {
			body1.property("ADBE Transform Group").property("ADBE Position").expression = "W=thisComp.layer(\"Ctrl Limbs\").effect(\"EVT4.1 Limbs Control\");" + "\n" + 
				"" + "\n" + 
				"BL=W(16);" + "\n" + 
				"" + "\n" + 
				"L=W(4);" + "\n" + 
				"" + "\n" + 
				"T=W(10);" + "\n" + 
				"" + "\n" + 
				"BT=W(20);" + "\n" + 
				"" + "\n" + 
				"[transform.position[0], transform.position[1]+(((BL-L)/2))];" + "\n" + 
				"";
		} catch (err) {}
		try {
			handR.property("ADBE Transform Group").property("ADBE Position").expression = "W=thisComp.layer(\"Ctrl Limbs\").effect(\"EVT4.1 Limbs Control\");" + "\n" + 
				"" + "\n" + 
				"BL=W(14);" + "\n" + 
				"" + "\n" + 
				"L=W(2);" + "\n" + 
				"" + "\n" + 
				"T=W(8);" + "\n" + 
				"" + "\n" + 
				"BT=W(18);" + "\n" + 
				"" + "\n" + 
				"[transform.position[0], transform.position[1]+(L-BL)/2-((T-BT)/2)];" + "\n" + 
				"";
		} catch (err) {}
		try {
			handR.property("ADBE Transform Group").property("ADBE Scale").expression = "temp = thisComp.layer(\"Ctrl Limbs\").effect(\"EVT4.1 Limbs Control\")(8);" + "\n" + 
				"" + "\n" + 
				"[temp, temp]";
		} catch (err) {}
		try {
			handR.property("ADBE Transform Group").property("ADBE Rotate Z").expression = "thisComp.layer(\"C_HAND R\").transform.rotation";
		} catch (err) {}
		try {
			forearmR.property("ADBE Transform Group").property("ADBE Anchor Point").expression = "W=thisComp.layer(\"Ctrl Limbs\").effect(\"EVT4.1 Limbs Control\");" + "\n" + 
				"" + "\n" + 
				"BL=W(14);" + "\n" + 
				"" + "\n" + 
				"L=W(2);" + "\n" + 
				"" + "\n" + 
				"T=W(8);" + "\n" + 
				"" + "\n" + 
				"BT=W(18);" + "\n" + 
				"" + "\n" + 
				"[transform.anchorPoint[0],transform.anchorPoint[1]-(L-BL)/2+((T-BT)/2)];";
		} catch (err) {}
		try {
			forearmR.property("ADBE Transform Group").property("ADBE Position").expression = "W=thisComp.layer(\"Ctrl Limbs\").effect(\"EVT4.1 Limbs Control\");" + "\n" + 
				"" + "\n" + 
				"BL=W(14);" + "\n" + 
				"" + "\n" + 
				"L=W(2);" + "\n" + 
				"" + "\n" + 
				"T=W(8);" + "\n" + 
				"" + "\n" + 
				"BT=W(18);" + "\n" + 
				"" + "\n" + 
				"[transform.position[0], transform.position[1]+(L-BL-((L-BL)/2))-((T-BT)/2)];" + "\n" + 
				"" + "\n" + 
				"" + "\n" + 
				"";
		} catch (err) {}
		try {
			forearmR.property("ADBE Transform Group").property("ADBE Rotate Z").expression = "//EVT4.1 Rig" + "\n" + 
				"" + "\n" + 
				"layer1 = thisComp.layer(\"UPPER ARM R\");" + "\n" + 
				"" + "\n" + 
				"layer2 = thisComp.layer(\"FOREARM R\");" + "\n" + 
				"" + "\n" + 
				"layer3 = thisComp.layer(\"HAND R\");" + "\n" + 
				"" + "\n" + 
				"controller = thisComp.layer(\"C_HAND R\");" + "\n" + 
				"" + "\n" + 
				"ctrlEffect = controller.effect(\"EVT4.1 Rig Control\")" + "\n" + 
				"" + "\n" + 
				"FK = ctrlEffect(6);" + "\n" + 
				"" + "\n" + 
				"IKFK = ctrlEffect(4) == 0;" + "\n" + 
				"" + "\n" + 
				"cw = ctrlEffect(1) == 0;" + "\n" + 
				"" + "\n" + 
				"function getWorldPos(L){" + "\n" + 
				"" + "\n" + 
				"return L.toWorld(L.anchorPoint);" + "\n" + 
				"" + "\n" + 
				"}" + "\n" + 
				"" + "\n" + 
				"function ik() {" + "\n" + 
				"" + "\n" + 
				"A = getWorldPos(layer1);" + "\n" + 
				"" + "\n" + 
				"B = getWorldPos(layer2);" + "\n" + 
				"" + "\n" + 
				"C = getWorldPos(layer3);" + "\n" + 
				"" + "\n" + 
				"E = getWorldPos(controller);" + "\n" + 
				"" + "\n" + 
				"a = length(B,C);" + "\n" + 
				"" + "\n" + 
				"b = length(E,A);" + "\n" + 
				"" + "\n" + 
				"c = length(A,B);" + "\n" + 
				"" + "\n" + 
				"x = (b*b + c*c - a*a )/(2*b);" + "\n" + 
				"" + "\n" + 
				"alpha = Math.acos(clamp(x/c,-1,1));" + "\n" + 
				"" + "\n" + 
				"y = b - x;" + "\n" + 
				"" + "\n" + 
				"  gamma = Math.acos(clamp(y/a,-1,1));" + "\n" + 
				"" + "\n" + 
				"result = (cw ? 1 : -1)*radiansToDegrees(gamma + alpha);  V1 = B - A;" + "\n" + 
				"" + "\n" + 
				"  adj1 = radiansToDegrees(Math.atan2(V1[1],V1[0]));" + "\n" + 
				"" + "\n" + 
				"  V2 = C - B;" + "\n" + 
				"" + "\n" + 
				"  adj2 = radiansToDegrees(Math.atan2(V2[1],V2[0]));" + "\n" + 
				"" + "\n" + 
				"  IK = result +  adj1 - adj2 + value;" + "\n" + 
				"" + "\n" + 
				"return IK;" + "\n" + 
				"" + "\n" + 
				"}" + "\n" + 
				"" + "\n" + 
				"IKFK ? ik() : FK;";
		} catch (err) {}
		try {
			upperArmR.property("ADBE Transform Group").property("ADBE Anchor Point").expression = "W=thisComp.layer(\"Ctrl Limbs\").effect(\"EVT4.1 Limbs Control\");" + "\n" + 
				"" + "\n" + 
				"BL=W(14);" + "\n" + 
				"" + "\n" + 
				"L=W(2);" + "\n" + 
				"" + "\n" + 
				"T=W(8);" + "\n" + 
				"" + "\n" + 
				"BT=W(18);" + "\n" + 
				"" + "\n" + 
				"[transform.anchorPoint[0],transform.anchorPoint[1]-(L-BL)/2+((T-BT)/2)];";
		} catch (err) {}
		try {
			upperArmR.property("ADBE Transform Group").property("ADBE Position").expression = "W=thisComp.layer(\"Ctrl Limbs\").effect(\"EVT4.1 Limbs Control\");" + "\n" + 
				"" + "\n" + 
				"BL=W(16);" + "\n" + 
				"" + "\n" + 
				"L=W(4);" + "\n" + 
				"" + "\n" + 
				"T=W(10);" + "\n" + 
				"" + "\n" + 
				"BT=W(20);" + "\n" + 
				"" + "\n" + 
				"SS=W(24);" + "\n" + 
				"" + "\n" + 
				"[transform.position[0]-((BT-T)/2)+SS, transform.position[1]+((BL-L)/2)];" + "\n" + 
				"";
		} catch (err) {}
		try {
			upperArmR.property("ADBE Transform Group").property("ADBE Rotate Z").expression = "//EVT4.1 Rig" + "\n" + 
				"" + "\n" + 
				"layer1 = thisComp.layer(\"UPPER ARM R\");" + "\n" + 
				"" + "\n" + 
				"layer2 = thisComp.layer(\"FOREARM R\");" + "\n" + 
				"" + "\n" + 
				"layer3 = thisComp.layer(\"HAND R\");" + "\n" + 
				"" + "\n" + 
				"controller = thisComp.layer(\"C_HAND R\");" + "\n" + 
				"" + "\n" + 
				"ctrlEffect = controller.effect(\"EVT4.1 Rig Control\")" + "\n" + 
				"" + "\n" + 
				"limit = effect(\"IK Limit\")(1);" + "\n" + 
				"" + "\n" + 
				"FK = ctrlEffect(5);" + "\n" + 
				"" + "\n" + 
				"IKFK = ctrlEffect(4) == 0;" + "\n" + 
				"" + "\n" + 
				"cw = ctrlEffect(1) == 0;" + "\n" + 
				"" + "\n" + 
				"function getWorldPos(L){" + "\n" + 
				"" + "\n" + 
				"return L.toWorld(L.anchorPoint);" + "\n" + 
				"" + "\n" + 
				"}" + "\n" + 
				"" + "\n" + 
				"function ik() {" + "\n" + 
				"" + "\n" + 
				"A = getWorldPos(layer1);" + "\n" + 
				"" + "\n" + 
				"B = getWorldPos(layer2);" + "\n" + 
				"" + "\n" + 
				"C = getWorldPos(layer3);" + "\n" + 
				"" + "\n" + 
				"E = getWorldPos(controller);" + "\n" + 
				"" + "\n" + 
				"a = length(B,C);" + "\n" + 
				"" + "\n" + 
				"b = length(E,A);" + "\n" + 
				"" + "\n" + 
				"c = length(A,B);" + "\n" + 
				"" + "\n" + 
				"x = (b*b + c*c - a*a )/(2*b);" + "\n" + 
				"" + "\n" + 
				"alpha = Math.acos(clamp(x/c,-1,1));" + "\n" + 
				"" + "\n" + 
				"D = E - A;" + "\n" + 
				"" + "\n" + 
				"delta = Math.atan2(D[1],D[0]);" + "\n" + 
				"" + "\n" + 
				"result = radiansToDegrees(delta - (cw ? 1 : -1)*alpha);" + "\n" + 
				"" + "\n" + 
				"V = B - A;" + "\n" + 
				"" + "\n" + 
				"adj1 = radiansToDegrees(Math.atan2(V[1],V[0]));" + "\n" + 
				"" + "\n" + 
				"IK = result - adj1 + value;" + "\n" + 
				"" + "\n" + 
				"if (IK < limit) IK+=360;" + "\n" + 
				"" + "\n" + 
				"return IK;" + "\n" + 
				"" + "\n" + 
				"}" + "\n" + 
				"" + "\n" + 
				"IKFK ? ik() : FK;";
		} catch (err) {}
		try {
			feetR2.property("ADBE Transform Group").property("ADBE Anchor Point").expression = "thisComp.layer(\"FEET R\").transform.anchorPoint";
		} catch (err) {}
		try {
			feetR2.property("ADBE Transform Group").property("ADBE Position").expression = "thisComp.layer(\"C_FEET R\").transform.position";
		} catch (err) {}
		try {
			feetR2.property("ADBE Transform Group").property("ADBE Rotate Z").expression = "thisComp.layer(\"C_FEET R\").transform.rotation";
		} catch (err) {}
		try {
			feetR.property("ADBE Transform Group").property("ADBE Position").expression = "W=thisComp.layer(\"Ctrl Limbs\").effect(\"EVT4.1 Limbs Control\");" + "\n" + 
				"" + "\n" + 
				"BL=W(15);" + "\n" + 
				"" + "\n" + 
				"L=W(3);" + "\n" + 
				"" + "\n" + 
				"T=W(9);" + "\n" + 
				"" + "\n" + 
				"BT=W(19);" + "\n" + 
				"" + "\n" + 
				"[transform.position[0], transform.position[1]+((L-BL)/2)];" + "\n" + 
				"";
		} catch (err) {}
		try {
			clafR.property("ADBE Transform Group").property("ADBE Anchor Point").expression = "W=thisComp.layer(\"Ctrl Limbs\").effect(\"EVT4.1 Limbs Control\");" + "\n" + 
				"" + "\n" + 
				"BL=W(15);" + "\n" + 
				"" + "\n" + 
				"L=W(3);" + "\n" + 
				"" + "\n" + 
				"T=W(9);" + "\n" + 
				"" + "\n" + 
				"BT=W(19);" + "\n" + 
				"" + "\n" + 
				"[transform.anchorPoint[0],transform.anchorPoint[1]-(L-BL)/2+((T-BT)/2)];";
		} catch (err) {}
		try {
			clafR.property("ADBE Transform Group").property("ADBE Position").expression = "W=thisComp.layer(\"Ctrl Limbs\").effect(\"EVT4.1 Limbs Control\");" + "\n" + 
				"" + "\n" + 
				"BL=W(15);" + "\n" + 
				"" + "\n" + 
				"L=W(3);" + "\n" + 
				"" + "\n" + 
				"T=W(9);" + "\n" + 
				"" + "\n" + 
				"BT=W(19);" + "\n" + 
				"" + "\n" + 
				"[transform.position[0], transform.position[1]+(L-BL-((L-BL)/2))-((T-BT)/2)];" + "\n" + 
				"" + "\n" + 
				"" + "\n" + 
				"";
		} catch (err) {}
		try {
			clafR.property("ADBE Transform Group").property("ADBE Rotate Z").expression = "//EVT4.1 Rig" + "\n" + 
				"" + "\n" + 
				"layer1 = thisComp.layer(\"THIGH R\");" + "\n" + 
				"" + "\n" + 
				"layer2 = thisComp.layer(\"CLAF R\");" + "\n" + 
				"" + "\n" + 
				"layer3 = thisComp.layer(\"FEET R\");" + "\n" + 
				"" + "\n" + 
				"controller = thisComp.layer(\"C_FEET R\");" + "\n" + 
				"" + "\n" + 
				"ctrlEffect = controller.effect(\"EVT4.1 Rig Control\")" + "\n" + 
				"" + "\n" + 
				"FK = ctrlEffect(6);" + "\n" + 
				"" + "\n" + 
				"IKFK = ctrlEffect(4) == 0;" + "\n" + 
				"" + "\n" + 
				"cw = ctrlEffect(1) == 0;" + "\n" + 
				"" + "\n" + 
				"function getWorldPos(L){" + "\n" + 
				"" + "\n" + 
				"return L.toWorld(L.anchorPoint);" + "\n" + 
				"" + "\n" + 
				"}" + "\n" + 
				"" + "\n" + 
				"function ik() {" + "\n" + 
				"" + "\n" + 
				"A = getWorldPos(layer1);" + "\n" + 
				"" + "\n" + 
				"B = getWorldPos(layer2);" + "\n" + 
				"" + "\n" + 
				"C = getWorldPos(layer3);" + "\n" + 
				"" + "\n" + 
				"E = getWorldPos(controller);" + "\n" + 
				"" + "\n" + 
				"a = length(B,C);" + "\n" + 
				"" + "\n" + 
				"b = length(E,A);" + "\n" + 
				"" + "\n" + 
				"c = length(A,B);" + "\n" + 
				"" + "\n" + 
				"x = (b*b + c*c - a*a )/(2*b);" + "\n" + 
				"" + "\n" + 
				"alpha = Math.acos(clamp(x/c,-1,1));" + "\n" + 
				"" + "\n" + 
				"y = b - x;" + "\n" + 
				"" + "\n" + 
				"  gamma = Math.acos(clamp(y/a,-1,1));" + "\n" + 
				"" + "\n" + 
				"result = (cw ? 1 : -1)*radiansToDegrees(gamma + alpha);  V1 = B - A;" + "\n" + 
				"" + "\n" + 
				"  adj1 = radiansToDegrees(Math.atan2(V1[1],V1[0]));" + "\n" + 
				"" + "\n" + 
				"  V2 = C - B;" + "\n" + 
				"" + "\n" + 
				"  adj2 = radiansToDegrees(Math.atan2(V2[1],V2[0]));" + "\n" + 
				"" + "\n" + 
				"  IK = result +  adj1 - adj2 + value;" + "\n" + 
				"" + "\n" + 
				"return IK;" + "\n" + 
				"" + "\n" + 
				"}" + "\n" + 
				"" + "\n" + 
				"IKFK ? ik() : FK;";
		} catch (err) {}
		try {
			thighR.property("ADBE Transform Group").property("ADBE Anchor Point").expression = "W=thisComp.layer(\"Ctrl Limbs\").effect(\"EVT4.1 Limbs Control\");" + "\n" + 
				"" + "\n" + 
				"BL=W(15);" + "\n" + 
				"" + "\n" + 
				"L=W(3);" + "\n" + 
				"" + "\n" + 
				"T=W(9);" + "\n" + 
				"" + "\n" + 
				"BT=W(19);" + "\n" + 
				"" + "\n" + 
				"[transform.anchorPoint[0],transform.anchorPoint[1]-(L-BL)/2+((T-BT)/2)];";
		} catch (err) {}
		try {
			thighR.property("ADBE Transform Group").property("ADBE Position").expression = "W=thisComp.layer(\"Ctrl Limbs\").effect(\"EVT4.1 Limbs Control\");" + "\n" + 
				"" + "\n" + 
				"H=W(10);" + "\n" + 
				"" + "\n" + 
				"ZH=W(20);" + "\n" + 
				"" + "\n" + 
				"SH=W(25);" + "\n" + 
				"" + "\n" + 
				"[transform.position[0]-((ZH-H)/2)+SH,transform.position[1]];";
		} catch (err) {}
		try {
			thighR.property("ADBE Transform Group").property("ADBE Rotate Z").expression = "//EVT4.1 Rig" + "\n" + 
				"" + "\n" + 
				"layer1 = thisComp.layer(\"THIGH R\");" + "\n" + 
				"" + "\n" + 
				"layer2 = thisComp.layer(\"CLAF R\");" + "\n" + 
				"" + "\n" + 
				"layer3 = thisComp.layer(\"FEET R\");" + "\n" + 
				"" + "\n" + 
				"controller = thisComp.layer(\"C_FEET R\");" + "\n" + 
				"" + "\n" + 
				"ctrlEffect = controller.effect(\"EVT4.1 Rig Control\")" + "\n" + 
				"" + "\n" + 
				"limit = effect(\"IK Limit\")(1);" + "\n" + 
				"" + "\n" + 
				"FK = ctrlEffect(5);" + "\n" + 
				"" + "\n" + 
				"IKFK = ctrlEffect(4) == 0;" + "\n" + 
				"" + "\n" + 
				"cw = ctrlEffect(1) == 0;" + "\n" + 
				"" + "\n" + 
				"function getWorldPos(L){" + "\n" + 
				"" + "\n" + 
				"return L.toWorld(L.anchorPoint);" + "\n" + 
				"" + "\n" + 
				"}" + "\n" + 
				"" + "\n" + 
				"function ik() {" + "\n" + 
				"" + "\n" + 
				"A = getWorldPos(layer1);" + "\n" + 
				"" + "\n" + 
				"B = getWorldPos(layer2);" + "\n" + 
				"" + "\n" + 
				"C = getWorldPos(layer3);" + "\n" + 
				"" + "\n" + 
				"E = getWorldPos(controller);" + "\n" + 
				"" + "\n" + 
				"a = length(B,C);" + "\n" + 
				"" + "\n" + 
				"b = length(E,A);" + "\n" + 
				"" + "\n" + 
				"c = length(A,B);" + "\n" + 
				"" + "\n" + 
				"x = (b*b + c*c - a*a )/(2*b);" + "\n" + 
				"" + "\n" + 
				"alpha = Math.acos(clamp(x/c,-1,1));" + "\n" + 
				"" + "\n" + 
				"D = E - A;" + "\n" + 
				"" + "\n" + 
				"delta = Math.atan2(D[1],D[0]);" + "\n" + 
				"" + "\n" + 
				"result = radiansToDegrees(delta - (cw ? 1 : -1)*alpha);" + "\n" + 
				"" + "\n" + 
				"V = B - A;" + "\n" + 
				"" + "\n" + 
				"adj1 = radiansToDegrees(Math.atan2(V[1],V[0]));" + "\n" + 
				"" + "\n" + 
				"IK = result - adj1 + value;" + "\n" + 
				"" + "\n" + 
				"if (IK < limit) IK+=360;" + "\n" + 
				"" + "\n" + 
				"return IK;" + "\n" + 
				"" + "\n" + 
				"}" + "\n" + 
				"" + "\n" + 
				"IKFK ? ik() : FK;";
		} catch (err) {}
		try {
			bodyBack.property("ADBE Transform Group").property("ADBE Position").expression = "W=thisComp.layer(\"Ctrl Limbs\").effect(\"EVT4.1 Limbs Control\");" + "\n" + 
				"" + "\n" + 
				"BL=W(16);" + "\n" + 
				"" + "\n" + 
				"L=W(4);" + "\n" + 
				"" + "\n" + 
				"T=W(10);" + "\n" + 
				"" + "\n" + 
				"BT=W(20);" + "\n" + 
				"" + "\n" + 
				"[transform.position[0], transform.position[1]+(((BL-L)/2))];" + "\n" + 
				"";
		} catch (err) {}
		try {
			hairBack.property("ADBE Transform Group").property("ADBE Position").expression = "/////// BEGIN JOYSTICK CODE ///////" + "\n" + 
				"function joystick(inputResult){" + "\n" + 
				"    var easeOverride_right = null;" + "\n" + 
				"    var easeOverride_left =  null;" + "\n" + 
				"    var easeOverride_up =    null;" + "\n" + 
				"    var easeOverride_down =  null;" + "\n" + 
				"	var contrl = thisComp.layer(\"Ctrl Head\");" + "\n" + 
				"	var myLimit = contrl(\"ADBE Effect Parade\")(\"joystickLimit\")(\"ADBE Slider Control-0001\");" + "\n" + 
				"	var contrlCurVal = contrl(\"ADBE Transform Group\")(\"ADBE Position\");" + "\n" + 
				"	var resultVal;" + "\n" + 
				"	var key1 = [225,257.5,0];" + "\n" + 
				"	var key2 = [209.89794921875,257.5,0];" + "\n" + 
				"	var key3 = [239.081634521484,257.5,0];" + "\n" + 
				"	var key4 = [225,269.460784912109,0];" + "\n" + 
				"	var key5 = [225,251,0];" + "\n" + 
				"    key1 = unArray(key1);" + "\n" + 
				"    key2 = unArray(key2);" + "\n" + 
				"    key3 = unArray(key3);" + "\n" + 
				"    key4 = unArray(key4);" + "\n" + 
				"    key5 = unArray(key5);" + "\n" + 
				"	try{" + "\n" + 
				"        if(!thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\").active){" + "\n" + 
				"			throw (\"inactive\");" + "\n" + 
				"        }" + "\n" + 
				"		slideR = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0001\");" + "\n" + 
				"		slideL = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0002\");" + "\n" + 
				"		slideU = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0003\");" + "\n" + 
				"		slideD = thisLayer(\"ADBE Effect Parade\")(\"Pseudo/1k48264d77gIB\")(\"Pseudo/1k48264d77gIB-0004\");" + "\n" + 
				"	}catch(err){" + "\n" + 
				"		slideR = 0;" + "\n" + 
				"		slideL = 0;" + "\n" + 
				"		slideU = 0;" + "\n" + 
				"		slideD = 0;" + "\n" + 
				"	}" + "\n" + 
				"    if(easeOverride_right !== null && !isNaN(easeOverride_right)){" + "\n" + 
				"        slideR = moClamp(easeOverride_right,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_left !== null && !isNaN(easeOverride_left)){" + "\n" + 
				"        slideL = moClamp(easeOverride_left,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_up !== null && !isNaN(easeOverride_up)){" + "\n" + 
				"        slideU = moClamp(easeOverride_up,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"    if(easeOverride_down !== null && !isNaN(easeOverride_down)){" + "\n" + 
				"        slideD = moClamp(easeOverride_down,-100,100);" + "\n" + 
				"    }" + "\n" + 
				"	var easeResultX,easeResultY;" + "\n" + 
				"	if(contrlCurVal[0]>=0){" + "\n" + 
				"		resultVal = linear(contrlCurVal[0], 0, myLimit, key1, key2);" + "\n" + 
				"		if(slideR !==0){" + "\n" + 
				"			easeResultX = easeSwitch(contrlCurVal[0], 0, myLimit, key1, key2,slideR);" + "\n" + 
				"			resultVal = linear(Math.abs(slideR),0,100, resultVal,easeResultX);" + "\n" + 
				"		}" + "\n" + 
				"	}else{" + "\n" + 
				"		resultVal = linear(-contrlCurVal[0], 0, myLimit, key1, key3);" + "\n" + 
				"		if(slideL !==0){" + "\n" + 
				"			easeResultX = easeSwitch(-contrlCurVal[0], 0, myLimit, key1, key3,slideL);" + "\n" + 
				"			resultVal = linear(Math.abs(slideL),0,100, resultVal,easeResultX);" + "\n" + 
				"		}" + "\n" + 
				"	}" + "\n" + 
				"	var resultAdd = 0;" + "\n" + 
				"	if(contrlCurVal[1]<=0){" + "\n" + 
				"		resultAdd = linear(-contrlCurVal[1], 0, myLimit, key1, key4)- key1;" + "\n" + 
				"		if(slideU !==0){" + "\n" + 
				"			easeResultY = easeSwitch(-contrlCurVal[1], 0, myLimit, key1, key4,slideU)- key1;" + "\n" + 
				"			resultAdd = linear(Math.abs(slideU),0,100, resultAdd,easeResultY);" + "\n" + 
				"		}" + "\n" + 
				"	}else{" + "\n" + 
				"		resultAdd = linear(contrlCurVal[1], 0, myLimit, key1, key5)- key1;" + "\n" + 
				"		if(slideD!==0){" + "\n" + 
				"			easeResultY = easeSwitch(contrlCurVal[1], 0, myLimit, key1, key5,slideD)- key1;" + "\n" + 
				"			resultAdd = linear(Math.abs(slideD),0,100, resultAdd,easeResultY);" + "\n" + 
				"		}" + "\n" + 
				"	}" + "\n" + 
				"	return (resultVal+resultAdd)+(inputResult-key1);" + "\n" + 
				"}" + "\n" + 
				"function cosEase(val,min1,max1,input1,input2){" + "\n" + 
				"	var myCos = [];" + "\n" + 
				"    if(input1 instanceof Array){" + "\n" + 
				"        for(var x = 0; x < input1.length; x++){" + "\n" + 
				"            myCos.push(getMeCos(val, min1,max1,input1[x],input2[x]));" + "\n" + 
				"        }" + "\n" + 
				"    }else{ myCos = getMeCos(val, min1,max1,input1,input2);" + "\n" + 
				"	}return myCos;" + "\n" + 
				"	function getMeCos(val,min1,max1,input1,input2){" + "\n" + 
				"		var mapVal = moClamp(val/(max1-min1),0,1);" + "\n" + 
				"		var c = input2 - input1;" + "\n" + 
				"		var myCos2 = -c * Math.cos(mapVal * (Math.PI/2)) + c+ input1;" + "\n" + 
				"		return myCos2;" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"function sinEase(val,min1,max1,input1,input2){" + "\n" + 
				"	var mySin = [];" + "\n" + 
				"    if(input1 instanceof Array){" + "\n" + 
				"        for(var x = 0; x < input1.length; x++){" + "\n" + 
				"            mySin.push(getMeSin(val, min1,max1,input1[x],input2[x]));" + "\n" + 
				"        }" + "\n" + 
				"    }else{ mySin = getMeSin(val, min1,max1,input1,input2);" + "\n" + 
				"	}return mySin;" + "\n" + 
				"	function getMeSin(val,min1,max1,input1,input2){" + "\n" + 
				"		var mapVal = moClamp(val/(max1-min1),0,1);" + "\n" + 
				"		var c = input2 - input1;" + "\n" + 
				"		var mySin2 = c * Math.sin(mapVal * (Math.PI/2)) + input1;" + "\n" + 
				"		return mySin2;" + "\n" + 
				"    }" + "\n" + 
				"}" + "\n" + 
				"function easeSwitch(val,min1,max1,input1,input2,morph){" + "\n" + 
				"	if(morph < 0){" + "\n" + 
				"		return cosEase(val,min1,max1,input1,input2);" + "\n" + 
				"	}else{" + "\n" + 
				"		return sinEase(val,min1,max1,input1,input2);" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"function unArray(inKey){" + "\n" + 
				"    if(inKey instanceof Array && inKey.length === 1){" + "\n" + 
				"        return inKey[0];" + "\n" + 
				"    }else{" + "\n" + 
				"        return inKey;" + "\n" + 
				"    }" + "\n" + 
				"}" + "\n" + 
				"function moClamp(a,b,c){" + "\n" + 
				"	if(!(a instanceof Array)){" + "\n" + 
				"		return (Math.max(b, Math.min(c, a)));" + "\n" + 
				"	}else{" + "\n" + 
				"		var aryHold = [];" + "\n" + 
				"		for(var x = 0; x < a.length; x++){" + "\n" + 
				"			aryHold.push(Math.max(b, Math.min(c, a[x])));" + "\n" + 
				"		}return aryHold;" + "\n" + 
				"	}" + "\n" + 
				"}" + "\n" + 
				"joystick(value);";
		} catch (err) {}
		try {
			forearm.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").expression = "W = comp(\"name:Character 04 Bicycle\").layer(\"Ctrl Limbs\").effect(\"EVT4.1 Limbs Control\");" + "\n" + 
				"" + "\n" + 
				"[W(8), W(2)]";
		} catch (err) {}
		try {
			upperArm.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").expression = "W = comp(\"name:Character 04 Bicycle\").layer(\"Ctrl Limbs\").effect(\"EVT4.1 Limbs Control\");" + "\n" + 
				"" + "\n" + 
				"[W(8), W(2)]";
		} catch (err) {}
		try {
			neck1.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").expression = "W = comp(\"name:Character 04 Bicycle\").layer(\"Ctrl Limbs\").effect(\"EVT4.1 Limbs Control\");" + "\n" + 
				"" + "\n" + 
				"[W(11), W(5)]" + "\n" + 
				"";
		} catch (err) {}
		try {
			bodyTop.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").expression = "W = comp(\"name:Character 04 Bicycle\").layer(\"Ctrl Limbs\").effect(\"EVT4.1 Limbs Control\");" + "\n" + 
				"" + "\n" + 
				"L = W(4);" + "\n" + 
				"" + "\n" + 
				"T = W(10);" + "\n" + 
				"" + "\n" + 
				"[T, L];";
		} catch (err) {}
		try {
			hips2.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").expression = "W = comp(\"name:Character 04 Bicycle\").layer(\"Ctrl Limbs\").effect(\"EVT4.1 Limbs Control\");" + "\n" + 
				"" + "\n" + 
				"T = W(10);" + "\n" + 
				"" + "\n" + 
				"BT = W(20);" + "\n" + 
				"" + "\n" + 
				"[T, T+((BT-T))];";
		} catch (err) {}
		try {
			hips1.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").expression = "W = comp(\"name:Character 04 Bicycle\").layer(\"Ctrl Limbs\").effect(\"EVT4.1 Limbs Control\");" + "\n" + 
				"" + "\n" + 
				"T = W(10);" + "\n" + 
				"" + "\n" + 
				"BT = W(20);" + "\n" + 
				"" + "\n" + 
				"[T, T+((BT-T))];";
		} catch (err) {}
		try {
			feet.property("ADBE Transform Group").property("ADBE Scale").expression = "comp(\"name:Character 04 Bicycle\").layer(\"C_FEET L\").transform.scale";
		} catch (err) {}
		try {
			calfTexture2.property("ADBE Transform Group").property("ADBE Position").expression = "W=comp(\"name:Character 04 Bicycle\").layer(\"Ctrl Limbs\").effect(\"EVT4.1 Limbs Control\");" + "\n" + 
				"" + "\n" + 
				"BL=W(15);" + "\n" + 
				"" + "\n" + 
				"L=W(3);" + "\n" + 
				"" + "\n" + 
				"[transform.position[0],transform.position[1]-((BL-L)/2)];";
		} catch (err) {}
		try {
			calf.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").expression = "W = comp(\"name:Character 04 Bicycle\").layer(\"Ctrl Limbs\").effect(\"EVT4.1 Limbs Control\");" + "\n" + 
				"" + "\n" + 
				"[W(9), W(3)]";
		} catch (err) {}
		try {
			tigh.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").expression = "W = comp(\"name:Character 04 Bicycle\").layer(\"Ctrl Limbs\").effect(\"EVT4.1 Limbs Control\");" + "\n" + 
				"" + "\n" + 
				"[W(9), W(3)]";
		} catch (err) {}
		try {
			bodyTop1.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").expression = "W = comp(\"name:Character 04 Bicycle\").layer(\"Ctrl Limbs\").effect(\"EVT4.1 Limbs Control\");" + "\n" + 
				"" + "\n" + 
				"L = W(4);" + "\n" + 
				"" + "\n" + 
				"T = W(10);" + "\n" + 
				"" + "\n" + 
				"[T, L];";
		} catch (err) {}
		try {
			spokes2.property("ADBE Transform Group").property("ADBE Rotate Z").expression = "time*-80";
		} catch (err) {}
		try {
			spokes.property("ADBE Transform Group").property("ADBE Rotate Z").expression = "thisComp.layer(\"spokes 2\").transform.rotation";
		} catch (err) {}
		try {
			forearm1.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").expression = "W = comp(\"name:Character 04 Bicycle\").layer(\"Ctrl Limbs\").effect(\"EVT4.1 Limbs Control\");" + "\n" + 
				"" + "\n" + 
				"[W(8), W(2)]";
		} catch (err) {}
		try {
			upperArm1.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").expression = "W = comp(\"name:Character 04 Bicycle\").layer(\"Ctrl Limbs\").effect(\"EVT4.1 Limbs Control\");" + "\n" + 
				"" + "\n" + 
				"[W(8), W(2)]";
		} catch (err) {}
		try {
			feet2.property("ADBE Transform Group").property("ADBE Scale").expression = "comp(\"name:Character 04 Bicycle\").layer(\"C_FEET R\").transform.scale";
		} catch (err) {}
		try {
			calfTexture3.property("ADBE Transform Group").property("ADBE Position").expression = "W=comp(\"name:Character 04 Bicycle\").layer(\"Ctrl Limbs\").effect(\"EVT4.1 Limbs Control\");" + "\n" + 
				"" + "\n" + 
				"BL=W(15);" + "\n" + 
				"" + "\n" + 
				"L=W(3);" + "\n" + 
				"" + "\n" + 
				"[transform.position[0],transform.position[1]-((BL-L)/2)];";
		} catch (err) {}
		try {
			calf1.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").expression = "W = comp(\"name:Character 04 Bicycle\").layer(\"Ctrl Limbs\").effect(\"EVT4.1 Limbs Control\");" + "\n" + 
				"" + "\n" + 
				"[W(9), W(3)]";
		} catch (err) {}
		try {
			tigh1.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").expression = "W = comp(\"name:Character 04 Bicycle\").layer(\"Ctrl Limbs\").effect(\"EVT4.1 Limbs Control\");" + "\n" + 
				"" + "\n" + 
				"[W(9), W(3)]";
		} catch (err) {}
		try {
			bodyTop2.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").expression = "W = comp(\"name:Character 04 Bicycle\").layer(\"Ctrl Limbs\").effect(\"EVT4.1 Limbs Control\");" + "\n" + 
				"" + "\n" + 
				"L = W(4);" + "\n" + 
				"" + "\n" + 
				"T = W(10);" + "\n" + 
				"" + "\n" + 
				"[T, L];";
		} catch (err) {}
		try {
			calf3.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").expression = "thisComp.layer(\"Thigh\").content(\"Rectangle 1\").content(\"Rectangle Path 1\").size";
		} catch (err) {}

for (var i = 0, il = renamedPropertiesArray.length; i < il; i++) {
	var curRenamedProperty = renamedPropertiesArray[i];
	var indicesArray = curRenamedProperty["indicesArray"];
	var propertyObject = unpackPropertyObject(indicesArray);
	var oldPropertyName = propertyObject.name;
	var newPropertyName = curRenamedProperty["newPropertyName"];
	propertyObject.name = newPropertyName;
	app.project.autoFixExpressions(oldPropertyName, newPropertyName);
}

character04Bicycle_comp.openInViewer();

return {
	compItem : character04Bicycle_comp
};

} catch (e) {
	alert (e.toString() + "\nScript File: " + File.decode(e.fileName).replace(/^.*[\|\/]/, '') + 
		"\nFunction: " + arguments.callee.name + 
		"\nError on Line: " + e.line.toString());
}
app.endUndoGroup();


function findProjectItem(searchFolder, recursion, userData) {
	var folderItem;
	for (var i = 1, il = searchFolder.items.length; i <= il; i++) {
		folderItem = searchFolder.items[i];
			if (propertiesMatch(folderItem, userData))
				return folderItem;
			else if (recursion === true && folderItem instanceof FolderItem && folderItem.numItems > 0) {
				var item = findProjectItem(folderItem, recursion, userData);
				if (item !== null) return item;
			}
		}
	return null;
}

function propertiesMatch(projectItem, userData) {
	if (typeof userData === "undefined") return true;

	for (var propertyName in userData) {
		if (!userData.hasOwnProperty(propertyName)) continue;

		if (typeof userData[propertyName] !== typeof projectItem[propertyName])
			return false;

		if (isArray(userData[propertyName]) && isArray(projectItem[propertyName])) {
			if (userData[propertyName].toString() !== projectItem[propertyName].toString()) {
				return false;
			}
		} else if (typeof userData[propertyName] === "object" && typeof projectItem[propertyName] === "object") {
			if (!propertiesMatch(projectItem[propertyName], userData[propertyName])) {
				return false;
			}
		} else if (projectItem[propertyName] !== userData[propertyName]) {
			return false;
		}
	}
	return true;
}

function isArray(object) {
	return Object.prototype.toString.apply(object) === "[object Array]";
}

function promptName(message, propertyObject) {
	var strippedName = propertyObject.name.replace(/^name:/, "");
	var indicesArray = packPropertyObject(propertyObject);
	var newPropertyName = prompt(message, strippedName);
	if (newPropertyName) { renamedPropertiesArray.push({"indicesArray" : indicesArray, "newPropertyName" : newPropertyName }); }
	else { renamedPropertiesArray.push({"indicesArray" : indicesArray, "newPropertyName" : strippedName}); }
}

function unpackPropertyObject(indicesArray) {
	var propertyObject;
	if (typeof indicesArray.length === "undefined") {
		propertyObject = indicesArray;
	} else {
		propertyObject = indicesArray[0];
		for (var c = 1, cl = indicesArray.length; c < cl; c ++ ) {
			propertyObject = propertyObject.property(indicesArray[c]);
		}
	}
	return propertyObject;
}

function packPropertyObject(propertyObject){
	var indicesArray = [];
	if (!propertyObject.parentProperty) {
		indicesArray.push(propertyObject);
	} else {
		while (propertyObject) {
			indicesArray.unshift(propertyObject.propertyDepth < 1 ? propertyObject : propertyObject.propertyIndex );
			propertyObject = propertyObject.parentProperty;
		}
	}
	return indicesArray;
}

function applyEasing(property, keyTimesArray, easeInArray, easeOutArray, keyInterpolationArray) {
	var easeIn, easeOut, easeIn0, easeOut0, easeIn1, easeOut1, easeIn2, easeOut2;
	for (var i = 0, il = keyTimesArray.length; i < il; i ++) {
		if (property.propertyValueType === PropertyValueType.TwoD) {
			easeIn0 = new KeyframeEase(easeInArray[0][i][0], easeInArray[1][i][0]);
			easeOut0 = new KeyframeEase(easeOutArray[0][i][0], easeOutArray[1][i][0]);
			easeIn1 = new KeyframeEase(easeInArray[0][i][1], easeInArray[1][i][1]);
			easeOut1 = new KeyframeEase(easeOutArray[0][i][1], easeOutArray[1][i][1]);
			property.setTemporalEaseAtKey(i+1, [easeIn0, easeIn1], [easeOut0, easeOut1]);
		} else if (property.propertyValueType === PropertyValueType.ThreeD) {
			easeIn0 = new KeyframeEase(easeInArray[0][i][0], easeInArray[1][i][0]);
			easeOut0 = new KeyframeEase(easeOutArray[0][i][0], easeOutArray[1][i][0]);
			easeIn1 = new KeyframeEase(easeInArray[0][i][1], easeInArray[1][i][1]);
			easeOut1 = new KeyframeEase(easeOutArray[0][i][1], easeOutArray[1][i][1]);
			easeIn2 = new KeyframeEase(easeInArray[0][i][2], easeInArray[1][i][2]);
			easeOut2 = new KeyframeEase(easeOutArray[0][i][2], easeOutArray[1][i][2]);
			property.setTemporalEaseAtKey(i+1, [easeIn0, easeIn1, easeIn2], [easeOut0, easeOut1, easeOut2]);
		} else {
			easeIn = new KeyframeEase(easeInArray[0][i], easeInArray[1][i]);
			easeOut = new KeyframeEase(easeOutArray[0][i], easeOutArray[1][i]);
			if (keyInterpolationArray[1][i] !== KeyframeInterpolationType.HOLD) {
				property.setTemporalEaseAtKey(i+1, [easeIn], [easeOut]);
			} else {
				property.setTemporalEaseAtKey(i+1, [easeIn]);
			}
		}
		property.setInterpolationTypeAtKey(i+1, keyInterpolationArray[0][i], keyInterpolationArray[1][i]);
	}
}

function applySpatialTangents(property, keyTimesArray, inSpatialTangentsArray, outSpatialTangentsArray) {
	for (var sp = 0, spl = keyTimesArray.length; sp < spl; sp ++) {
		property.setSpatialTangentsAtKey(sp+1, inSpatialTangentsArray[sp], outSpatialTangentsArray[sp]);
	}
}
function makePseudoEffectLive(pathToFFX) {
	var tempComp = app.project.items.addComp("tempComp", 100, 100, 1, 1, 24);
	var tempLayer = tempComp.layers.addShape();
		tempLayer.applyPreset(File(pathToFFX));
	tempComp.remove();
}
}

