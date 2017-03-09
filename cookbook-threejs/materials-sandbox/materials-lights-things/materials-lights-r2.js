	var materialsLibrary;

	var skyboxURLs = [];

	var p = 'https://rawgit.com/mrdoob/three.js/dev/examples/textures/cube/Bridge2/';
	skyboxURLs.push( [ 'Bridge2', [ p + 'posx.jpg', p + 'negx.jpg', p + 'posy.jpg', p + 'negy.jpg',p + 'posz.jpg',p +'negz.jpg' ] ] );

//	p = 'https://mrdoob.github.io/three.js/examples/textures/cube/Escher/';
//	skyboxURLs.push( [ 'escher', [ p + 'px.jpg', p + 'nx.jpg', p + 'py.jpg', p + 'ny.jpg',p + 'pz.jpg',p +'nz.jpg' ] ] );

	p = 'https://rawgit.com/mrdoob/three.js/dev/examples/textures/cube/MilkyWay/';
	skyboxURLs.push( [ 'MilkyWay', [ p + 'dark-s_px.jpg', p + 'dark-s_nx.jpg', p + 'dark-s_py.jpg', p + 'dark-s_ny.jpg',p + 'dark-s_pz.jpg', p +'dark-s_nz.jpg' ] ] );

	p = 'https://rawgit.com/mrdoob/three.js/dev/examples/textures/cube/Park2/';
	skyboxURLs.push( [ 'Park2', [ p + 'posx.jpg', p + 'negx.jpg', p + 'posy.jpg', p + 'negy.jpg',p + 'posz.jpg',p +'negz.jpg' ] ] );

	p = 'https://rawgit.com/mrdoob/three.js/dev/examples/textures/cube/Park3Med/';
	skyboxURLs.push( [ 'Park3Med', [ p + 'px.jpg', p + 'nx.jpg', p + 'py.jpg', p + 'ny.jpg',p + 'pz.jpg',p +'nz.jpg' ] ] );

	p = 'https://rawgit.com/mrdoob/three.js/dev/examples/textures/cube/pisa/';
	skyboxURLs.push( [ 'pisa', [ p + 'px.png', p + 'nx.png', p + 'py.png', p + 'ny.png',p + 'pz.png',p +'nz.png' ] ] );

	p = 'https://rawgit.com/mrdoob/three.js/dev/examples/textures/cube/skybox/';
	skyboxURLs.push( [ 'skyboxX', [ p + 'px.jpg', p + 'nx.jpg', p + 'py.jpg', p + 'ny.jpg',p + 'pz.jpg',p +'nz.jpg' ] ] );

	p = 'https://rawgit.com/mrdoob/three.js/dev/examples/textures/cube/SwedishRoyalCastle/';
	skyboxURLs.push( [ 'SwedishRoyalCastle', [ p + 'px.jpg', p + 'nx.jpg', p + 'py.jpg', p + 'ny.jpg',p + 'pz.jpg',p +'nz.jpg' ] ] );

	var skybox;

	function getMaterials() {

		THREE.ImageUtils.crossOrigin = 'anonymous';

		materialsLibrary = {

		'#Normal' : 'Normal',

		'Normal Side 2': { 'material': new THREE.MeshNormalMaterial( { side: 2  } ) },
		'Normal Side 2 Opacity 0.7' : { 'material' : new THREE.MeshNormalMaterial( { opacity: 0.7, side: 2, transparent: true   } ), },
		'Normal Wireframe': { 'material': new THREE.MeshNormalMaterial( { wireframe: true } ) },


		'#Basic': 'Basic',

		'Basic Defaults':
			{ 'material': new THREE.MeshBasicMaterial() },
		'Basic Red':
			{ 'material': new THREE.MeshBasicMaterial( { color: 0xff0000, opacity: 0.7, side: 2, transparent: true } ) },

		'Basic Green':
			{ 'material': new THREE.MeshBasicMaterial( { color: 0x00ff00, opacity: 0.7, side: 2, transparent: true } ) },

		'Basic Blue':
			{ 'material': new THREE.MeshBasicMaterial( { color: 0x0000ff, opacity: 0.7, side: 2, transparent: true } ) },

		'Basic Magenta':
			{ 'material': new THREE.MeshBasicMaterial( { color: 0xff00ff, opacity: 0.7, side: 2, transparent: true } ) },

		'Basic Yellow':
			{ 'material': new THREE.MeshBasicMaterial( { color: 0xffff00, opacity: 0.7, side: 2, transparent: true } ) },

		'Basic Cyan':
			{ 'material': new THREE.MeshBasicMaterial( { color: 0x00ffff, opacity: 0.7, side: 2, transparent: true } ) },

		"#Lambert":
			'<h4>Lambert</h4>',
		"Lambert Defaults":
			{ 'material': new THREE.MeshLambertMaterial() },

		"Lambert Red":
			{ 'material': new THREE.MeshLambertMaterial( { color: 0xff0000 } ) },

		"Lambert Red + specular":
			{ 'material': new THREE.MeshLambertMaterial( { color: 0xff0000 } ) },

		"Lambert Green":
			{ 'material': new THREE.MeshLambertMaterial( { color: 0x00ff00 } ) },

		"Lambert Blue":
			{ 'material': new THREE.MeshLambertMaterial( { color: 0x0000ff } ) },

		"Lambert Magenta":
			{ 'material': new THREE.MeshLambertMaterial( { color: 0xff00ff } ) },

		"Lambert Yellow":
			{ 'material': new THREE.MeshLambertMaterial( { color: 0xffff00 } ) },

		"Lambert Cyan":
			{ 'material': new THREE.MeshLambertMaterial( { color: 0x00ffff } ) },

		"#Phong":
			'<h4>Phong</h4>',
		"Phong Defaults":
			{ 'material': new THREE.MeshPhongMaterial() },
		"Phong Red":
			{ 'material': new THREE.MeshPhongMaterial( { color: 0xff0000 } ) },

		"Phong Red + color, specular":
			{ 'material': new THREE.MeshPhongMaterial( { color: 0xff0000, specular: 0x222222 } ) },

		"Phong Red + color, emissive, specular":
			{ 'material': new THREE.MeshPhongMaterial( { color: 0xff0000, emissive: 0x111111, specular: 0x111111 } ) },

		"Phong Green":
			{ 'material': new THREE.MeshPhongMaterial( { color: 0x00ff00, emissive: 0x444444, specular: 0x444444 } ) },

		"Phong Blue":
			{ 'material': new THREE.MeshPhongMaterial( { color: 0x0000ff, emissive: 0x444444, specular: 0x444444 } ) },

		"Phong Magenta":
			{ 'material': new THREE.MeshPhongMaterial( { color: 0xff00ff, emissive: 0x444444, specular: 0x444444 } ) },

		"Phong Yellow":
			{ 'material': new THREE.MeshPhongMaterial( { color: 0xffff00, emissive: 0x444444, specular: 0x444444 } ) },

		"Phong Cyan":
			{ 'material': new THREE.MeshPhongMaterial( { color: 0x00ffff, emissive: 0x444444, specular: 0x444444 } ) },

		'#Procedure Generated' : 'Procedure Generated',

		'red triangles' : {
			'material' : new THREE.MeshPhongMaterial( { color: 0xffffff } ),
			'texture' : new THREE.Texture( generateTriangles( 1, 0.5, 0 ), THREE.UVMapping ),
		},

		'red triangles + emissive, specular' : {
			'material' : new THREE.MeshPhongMaterial( { color: 0xffffff, emissive: 0x222222, specular: 0x222222 } ),
			'texture' : new THREE.Texture( generateTriangles( 1, 0.5, 0 ), THREE.UVMapping ),
			'textureCube' : true,
		},

		'green triangles' :  {
//			'material' : new THREE.MeshBasicMaterial( { } ),
			'material' : new THREE.MeshPhongMaterial( { color: 0xffffff, emissive: 0x111111, specular: 0x444444  } ),
			'texture' : new THREE.Texture( generateTriangles( 0, 1, 0 ), THREE.UVMapping ),
		},

		'blue triangles' :  {
//			'material' : new THREE.MeshBasicMaterial( { } ),
			'material' : new THREE.MeshPhongMaterial( { color: 0xffffff, emissive: 0x444444, specular: 0x444444  } ),
			'texture' : new THREE.Texture( generateTriangles( 0, 0.5, 1 ), THREE.UVMapping ),
		},

		'squares' :  {
//			'material' : new THREE.MeshBasicMaterial( { opacity : 0.7, transparent : true } ),
			'material' : new THREE.MeshPhongMaterial( { color: 0xffffff, emissive: 0x444444, specular: 0x444444  } ),
			'texture' : new THREE.Texture( generateSquares(), THREE.UVMapping ),
		},

		'random squiggles' :  {
//			'material' : new THREE.MeshBasicMaterial( { side: 2, transparent: true } ),
			'material' : new THREE.MeshPhongMaterial( { color: 0xffffff, emissive: 0x444444, specular: 0x444444  } ),
			'texture' : new THREE.Texture( generateRandomSquiggles(), THREE.UVMapping ),
		},

		'tron' :  {
//			'material' : new THREE.MeshBasicMaterial( { color: 0x00ff00 } ),
			'material' : new THREE.MeshPhongMaterial( { color: 0xffffff, emissive: 0x444444, specular: 0x444444  } ),
			'texture' : new THREE.Texture( setTron(), THREE.UVMapping ),
		},

		'random dots' :  {
//			'material' : new THREE.MeshBasicMaterial({ side: 2, transparent: true }),
			'material' : new THREE.MeshPhongMaterial( { color: 0xffffff, emissive: 0x444444, specular: 0x444444  } ),
			'texture' : new THREE.Texture( randomDots(), THREE.UVMapping ),
		},


		'#Textgen.js' : 'Textgen.js Textures',

		'texture1' : {
//			'material' : new THREE.MeshBasicMaterial( { side: 2 } ),
			'material' : new THREE.MeshPhongMaterial( { color: 0xffffff, emissive: 0x111111, specular: 0x222222, opacity : 0.7, transparent : true   } ),
			'texture' : new THREE.Texture( new TG.Texture( 256, 256 )
			.add( new TG.XOR().tint( 1, 0.5, 0.7 ) )
			.add( new TG.SinX().frequency( 0.004 ).tint( 0.5, 0, 0 ) )
			.mul( new TG.SinY().frequency( 0.004 ).tint( 0.5, 0, 0 ) )
			.add( new TG.SinX().frequency( 0.0065 ).tint( 0.1, 0.5, 0.2 ) )
			.add( new TG.SinY().frequency( 0.0065 ).tint( 0.5, 0.5, 0.5 ) )
			.add( new TG.Noise().tint( 0.1, 0.1, 0.2 ) )
			.toCanvas(), THREE.UVMapping ),
			'textureCube' : true,
		},

		'texture1a' : {
//			'material' : new THREE.MeshBasicMaterial( { side: 2 } ),
			'material' : new THREE.MeshPhongMaterial( { color: 0xffffff, opacity : 0.7, transparent : true   } ),
			'texture' : new THREE.Texture( new TG.Texture( 256, 256 )
			.add( new TG.XOR().tint( 1, 0.5, 0.7 ) )
			.add( new TG.SinX().frequency( 0.004 ).tint( 0.5, 0, 0 ) )
			.mul( new TG.SinY().frequency( 0.004 ).tint( 0.5, 0, 0 ) )
			.add( new TG.SinX().frequency( 0.0065 ).tint( 0.1, 0.5, 0.2 ) )
			.add( new TG.SinY().frequency( 0.0065 ).tint( 0.5, 0.5, 0.5 ) )
			.add( new TG.Noise().tint( 0.1, 0.1, 0.2 ) )
			.toCanvas(), THREE.UVMapping ),
		},

		'texture2' : {
//			'material' : new THREE.MeshBasicMaterial( { side: 2 } ),
			'material' : new THREE.MeshPhongMaterial( { color: 0xffffff, emissive: 0x444444, specular: 0x444444  } ),
			'texture' : new THREE.Texture( new TG.Texture( 256, 256 )
			.add( new TG.SinX().offset( - 16 ).frequency( 0.03 ).tint( 0.1, 0.25, 0.5 ) )
			.add( new TG.SinY().offset( - 16 ).frequency( 0.03 ).tint( 0.1, 0.25, 0.5 ) )
			.add( new TG.Number().tint( 0.75, 0.5, 0.5 ) )
			.add( new TG.SinX().frequency( 0.03 ).tint( 0.2, 0.2, 0.2 ) )
			.add( new TG.SinY().frequency( 0.03 ).tint( 0.2, 0.2, 0.2 ) )
			.add( new TG.Noise().tint( 0.1, 0, 0 ) )
			.add( new TG.Noise().tint( 0, 0.1, 0 ) )
			.add( new TG.Noise().tint( 0, 0, 0.1 ) )
			.toCanvas(), THREE.UVMapping ),
		},

		'texture3' : {
//			'material' : new THREE.MeshBasicMaterial( { side: 2 } ),
			'material' : new THREE.MeshPhongMaterial( { color: 0xffffff, emissive: 0x444444, specular: 0x444444  } ),
			'texture' : new THREE.Texture( new TG.Texture( 256, 256 )
			.add( new TG.SinX().frequency( 0.1 ) )
			.mul( new TG.SinX().frequency( 0.05 ) )
			.mul( new TG.SinX().frequency( 0.025 ) )
			.mul( new TG.SinY().frequency( 0.1 ) )
			.mul( new TG.SinY().frequency( 0.05 ) )
			.mul( new TG.SinY().frequency( 0.025 ) )
			.add( new TG.SinX().frequency( 0.004 ).tint( -0.25, 0.1, 0.6 ) )
			.toCanvas(), THREE.UVMapping ),
		},

		'texture4' : {
//			'material' : new THREE.MeshBasicMaterial( { side: 2 } ),
			'material' : new THREE.MeshPhongMaterial( { color: 0xffffff, emissive: 0x444444, specular: 0x444444  } ),
			'texture' : new THREE.Texture( new TG.Texture( 256, 256 )
			.add( new TG.XOR() )
			.mul( new TG.OR().tint( 0.5, 0.8, 0.5 ) )
			.mul( new TG.SinX().frequency( 0.0312 ) )
			.div( new TG.SinY().frequency( 0.0312 ) )
			.add( new TG.SinX().frequency( 0.004 ).tint( 0.5, 0, 0 ) )
			.add( new TG.Noise().tint( 0.1, 0.1, 0.2 ) )
			.toCanvas(), THREE.UVMapping ),
		},

		'texture5' : {
//			'material' : new THREE.MeshBasicMaterial( { side: 2 } ),
			'material' : new THREE.MeshPhongMaterial( { color: 0xffffff, emissive: 0x444444, specular: 0x444444  } ),
			'texture' : new THREE.Texture( new TG.Texture( 256, 256 )
			.add( new TG.SinX().frequency( 0.01 ) )
			.mul( new TG.SinY().frequency( 0.0075 ) )
			.add( new TG.SinX().frequency( 0.0225 ) )
			.mul( new TG.SinY().frequency( 0.015 ) )
			.add( new TG.Noise().tint( 0.1, 0.1, 0.3 ) )
			.toCanvas(), THREE.UVMapping ),
		},

		'texture6' : {
//			'material' : new THREE.MeshBasicMaterial( { side: 2 } ),
			'material' : new THREE.MeshPhongMaterial( { color: 0xffffff, emissive: 0x111111, specular: 0x222222, opacity : 0.7, transparent : true  } ),
			'texture' : new THREE.Texture( new TG.Texture( 256, 256 )
			.add( new TG.SinX().frequency( 0.05 ) )
			.mul( new TG.SinX().frequency( 0.08 ) )
			.add( new TG.SinY().frequency( 0.05 ) )
			.mul( new TG.SinY().frequency( 0.08 ) )
			.div( new TG.Number().tint( 1, 2, 1 ) )
			.add( new TG.SinX().frequency( 0.003 ).tint( 0.5, 0, 0 ) )
			.toCanvas(), THREE.UVMapping ),
		},

		'texture7' : {
//			'material' : new THREE.MeshBasicMaterial( { side: 2 } ),
			'material' : new THREE.MeshPhongMaterial( { color: 0xffffff, emissive: 0x111111, specular: 0x222222, opacity : 0.7, transparent : true  } ),
			'texture' : new THREE.Texture( new TG.Texture( 256, 256 )
			.add( new TG.SinX().frequency( 0.066 ) )
			.add( new TG.SinY().frequency( 0.066 ) )
			.mul( new TG.SinX().offset( 32 ).frequency( 0.044 ).tint( 2, 2, 2 ) )
			.mul( new TG.SinY().offset( 16 ).frequency( 0.044 ).tint( 2, 2, 2 ) )
			.sub( new TG.Number().tint( 0.5, 2, 4 ) )
			.toCanvas(), THREE.UVMapping ),
		},

		'texture8' : {
//			'material' : new THREE.MeshBasicMaterial( { side: 2 } ),
			'material' : new THREE.MeshPhongMaterial( { color: 0xffffff, emissive: 0x111111, specular: 0x222222, opacity : 0.7, transparent : true  } ),
			'texture' : new THREE.Texture( new TG.Texture( 256, 256 )
			.add( new TG.SinX().frequency( 0.004 ) )
			.mul( new TG.SinY().frequency( 0.004 ) )
			.mul( new TG.SinY().offset( 32 ).frequency( 0.02 ) )
			.div( new TG.SinX().frequency( 0.02 ).tint( 8, 5, 4 ) )
			.add( new TG.Noise().tint( 0.1, 0, 0 ) )
			.add( new TG.Noise().tint( 0, 0.1, 0 ) )
			.add( new TG.Noise().tint( 0, 0, 0.1 ) )
			.toCanvas(), THREE.UVMapping ),
		},

		'texture9' : {
//			'material' : new THREE.MeshBasicMaterial( { side: 2 } ),
			'material' : new THREE.MeshPhongMaterial( { color: 0xffffff, emissive: 0x111111, specular: 0x222222, opacity : 0.7, transparent : true  } ),
			'texture' : new THREE.Texture( new TG.Texture( 256, 256 )
			.add( new TG.CheckerBoard() )
			.add( new TG.CheckerBoard().size( 2, 2 ).tint( 0.5, 0, 0 ) )
			.add( new TG.CheckerBoard().size( 8, 8 ).tint( 1, 0.5, 0.5 ) )
			.sub( new TG.CheckerBoard().offset( 16, 16 ).tint( 0.5, 0.5, 0 ) )
			.toCanvas(), THREE.UVMapping ),
		},

		'texture10' : {
//			'material' : new THREE.MeshBasicMaterial( { side: 2 } ),
			'material' : new THREE.MeshPhongMaterial( { color: 0xffffff, emissive: 0x111111, specular: 0x222222, opacity : 0.7, transparent : true  } ),
			'texture' : new THREE.Texture( new TG.Texture( 256, 256 )
			.add( new TG.Rect().position( 50, 20 ).size( 150, 130 ).tint( 1, 0.25, 0.25 ) )
			.add( new TG.Rect().position( 20, 65 ).size( 210, 130 ).tint( 0.25, 1, 0.25 ) )
			.add( new TG.Rect().position( 50, 110 ).size( 150, 130 ).tint( 0.25, 0.25, 1 ) )
			.toCanvas(), THREE.UVMapping ),
		},

		'texture11' : {
//			'material' : new THREE.MeshBasicMaterial( { side: 2 } ),
			'material' : new THREE.MeshPhongMaterial( { color: 0xffffff, emissive: 0x111111, specular: 0x222222, opacity : 0.7, transparent : true  } ),
			'texture' : new THREE.Texture( new TG.Texture( 256, 256 )
			.add( new TG.CheckerBoard().size( 32, 32 ).tint( 0.5, 0, 0 ) )
			.set( new TG.SineDistort() )
			.toCanvas(), THREE.UVMapping ),
		},

		'texture12' : {
//			'material' : new THREE.MeshBasicMaterial( { side: 2 } ),
			'material' : new THREE.MeshPhongMaterial( { color: 0xffffff, emissive: 0x111111, specular: 0x222222, opacity : 0.7, transparent : true  } ),
			'texture' : new THREE.Texture( new TG.Texture( 256, 256 )
			.add( new TG.CheckerBoard().size( 32, 32 ).tint( 0.5, 0, 0 ) )
			.set( new TG.Twirl().radius( 128 ).strength ( 75 ) )
			.toCanvas(), THREE.UVMapping ),
		},

		'texture13' : {
//			'material' : new THREE.MeshBasicMaterial( { side: 2 } ),
			'material' : new THREE.MeshPhongMaterial( { color: 0xffffff, emissive: 0x111111, specular: 0x222222, opacity : 0.7, transparent : true  } ),
			'texture' : new THREE.Texture( new TG.Texture( 256, 256 )
			.add( new TG.Circle().position( 128, 128 ).radius( 64 ) )
			.toCanvas(), THREE.UVMapping ),
		},

		'texture14' : {
//			'material' : new THREE.MeshBasicMaterial( { side: 2 } ),
			'material' : new THREE.MeshPhongMaterial( { color: 0xffffff, emissive: 0x111111, specular: 0x222222, opacity : 0.7, transparent : true  } ),
			'texture' : new THREE.Texture( new TG.Texture( 256, 256 )
			.add( new TG.Circle().position( 128, 128 ).radius( 64 ).delta( 60 ).tint( 1, 0.25, 0.25 ) )
			.set( new TG.Pixelate().size( 8, 8 ) )
			.toCanvas(), THREE.UVMapping ),
		},

 		'texture15' : {
//			'material' : new THREE.MeshBasicMaterial( { side: 2 } ),
			'material' : new THREE.MeshPhongMaterial( { color: 0xffffff, emissive: 0x111111, specular: 0x222222, opacity : 0.7, transparent : true  } ),
			'texture' : new THREE.Texture( new TG.Texture( 256, 256 )
			.add( new TG.CheckerBoard().tint( 1, 1, 0 ) )
			.set( new TG.Transform().offset( 10, 20 ).angle( 23 ).scale( 2, 0.5 ) )
			.toCanvas(), THREE.UVMapping ),
		},

		'texture16' : {
//			'material' : new THREE.MeshBasicMaterial( { side: 2 } ),
			'material' : new THREE.MeshPhongMaterial( { color: 0xffffff, emissive: 0x111111, specular: 0x222222, opacity : 0.7, transparent : true  } ),
			'texture' : new THREE.Texture( new TG.Texture( 256, 256 )
			.add( new TG.CheckerBoard() )
			.and( new TG.Circle().position( 128, 128 ).radius( 80 ) )
			.xor( new TG.Circle().position( 128, 128 ).radius( 64 ) )
			.toCanvas(), THREE.UVMapping ),
		},

		'texture17' : {
//			'material' : new THREE.MeshBasicMaterial( { side: 2 } ),
			'material' : new THREE.MeshPhongMaterial( { color: 0xffffff, emissive: 0x111111, specular: 0x222222, opacity : 0.7, transparent : true  } ),
			'texture' : new THREE.Texture( new TG.Texture( 256, 256 )
			.add( new TG.CheckerBoard().size( 16,16 ) )
			.set( new TG.Twirl().radius( 128 ).strength ( 75 ) )
			.min( new TG.Circle().position( 128, 128 ).radius( 128 ).delta( 128 ) )
				.toCanvas(), THREE.UVMapping ),
		},

		'texture18' : {
//			'material' : new THREE.MeshBasicMaterial( { side: 2 } ),
			'material' : new THREE.MeshPhongMaterial( { color: 0xffffff, emissive: 0x111111, specular: 0x222222, opacity : 0.7, transparent : true  } ),
			'texture' : new THREE.Texture( new TG.Texture( 256, 256 )
			.add( new TG.LinearGradient().interpolation( 0 ).point( 0, [1,1,0,0] ).point( 0.25, [0.2,0,0.5,1]).point( 0.5, [0.5,0.2,0.5,1]).point( 1, [1,0,1,1]) )
			.toCanvas(), THREE.UVMapping ),
		},

		'texture19' : {
//			'material' : new THREE.MeshBasicMaterial( { side: 2 } ),
			'material' : new THREE.MeshPhongMaterial( { color: 0xffffff, emissive: 0x111111, specular: 0x222222, opacity : 0.7, transparent : true  } ),
			'texture' : new THREE.Texture( new TG.Texture( 256, 256 )
			.add( new TG.LinearGradient().interpolation( 1 ).point( 0, [1,1,0,0] ).point( 0.25, [0.2,0,0.5,1]).point( 0.5, [0.5,0.2,0.5,1]).point( 1, [1,0,1,1]) )
			.toCanvas(), THREE.UVMapping ),
		},

		'texture20' : {
//			'material' : new THREE.MeshBasicMaterial( { side: 2 } ),
			'material' : new THREE.MeshPhongMaterial( { color: 0xffffff, emissive: 0x111111, specular: 0x222222, opacity : 0.7, transparent : true  } ),
			'texture' : new THREE.Texture( new TG.Texture( 256, 256 )
			.add( new TG.LinearGradient().interpolation( 2 ).point( 0, [1,1,0,0] ).point( 0.25, [0.2,0,0.5,1]).point( 0.5, [0.5,0.2,0.5,1]).point( 1, [1,0,1,1]) )
			.toCanvas(), THREE.UVMapping ),
		},

		'texture21' : {
//			'material' : new THREE.MeshBasicMaterial( { side: 2 } ),
			'material' : new THREE.MeshPhongMaterial( { color: 0xffffff, emissive: 0x111111, specular: 0x222222, opacity : 0.7, transparent : true  } ),
			'texture' : new THREE.Texture( new TG.Texture( 256, 256 )
			.add( new TG.RadialGradient().center( 128, 128 ).radius( 32 ).repeat( true ).interpolation( 0 ).point( 0, [1,1,0,0] ).point( 0.25, [0.2,0,0.5,1]).point( 0.5, [0.5,0.2,0.5,1]).point( 1, [1,0,1,1]) )
			.toCanvas(), THREE.UVMapping ),
		},

		'texture22' : {
//			'material' : new THREE.MeshBasicMaterial( { side: 2 } ),
			'material' : new THREE.MeshPhongMaterial( { color: 0xffffff, emissive: 0x111111, specular: 0x222222, opacity : 0.7, transparent : true  } ),
			'texture' : new THREE.Texture( new TG.Texture( 256, 256 )
			.add( new TG.RadialGradient().center( 0, 0 ).radius( 512 ).interpolation( 1 ).point( 0, [1,1,0,0] ).point( 0.25, [0.2,0,0.5,1]).point( 0.5, [0.5,0.2,0.5,1]).point( 1, [1,0,1,1]) )
			.toCanvas(), THREE.UVMapping ),
		},

		'texture23' : {
//			'material' : new THREE.MeshBasicMaterial( { side: 2 } ),
			'material' : new THREE.MeshPhongMaterial( { color: 0xffffff, emissive: 0x111111, specular: 0x222222, opacity : 0.7, transparent : true  } ),
			'texture' : new THREE.Texture( new TG.Texture( 256, 256 )
			.add( new TG.RadialGradient().center( 128, 0 ).radius( 200 ).interpolation( 2 ).point( 0, [1,1,0,0] ).point( 0.25, [0.2,0,0.5,1]).point( 0.5, [0.5,0.2,0.5,1]).point( 1, [1,0,1,1]) )
			.toCanvas(), THREE.UVMapping ),
		},

// https://twitter.com/learningthreejs/status/579292161373405184
		'texture24' : {
//			'material' : new THREE.MeshBasicMaterial( { side: 2 } ),
			'material' : new THREE.MeshPhongMaterial( { color: 0xffffff, emissive: 0x111111, specular: 0x222222, opacity : 0.7, transparent : true  } ),
			'texture' : new THREE.Texture( new TG.Texture( 256, 256 )
			.add(new TG.SinY().frequency(0.16).offset(0))
			.add(new TG.SinX().frequency(0.16).offset(0))
			.add(new TG.Twirl().position(128, 128).radius(120).strength(0.37))
			.toCanvas(), THREE.UVMapping ),
		},

		};

		materialsKeys = Object.keys( materialsLibrary );

	}


	function generateTriangles( r, g, b ) {

		var canvas = document.createElement( 'canvas' );
		canvas.width = canvas.height = 256;
		var context = canvas.getContext( '2d' );

		var image = context.getImageData( 0, 0, 256, 256 );
		var x = 0, y = 0, p;

		for ( var i = 0, j = 0; i < image.data.length; i += 4, j++ ) {
			x = j % 256;
			y = x == 0 ? y + 1 : y;
			p = Math.floor( x ^ y );// ^ = xor

			image.data[ i ] = Math.floor( p * r );
			image.data[ i + 1 ] = Math.floor( p * g );
			image.data[ i + 2 ] = Math.floor( p * b );
			image.data[ i + 3 ] = 255;

		}

		context.putImageData( image, 0, 0 );
		return canvas;
	}


	function generateSquares() {

		var canvas = document.createElement( 'canvas' );
		canvas.width = canvas.height = 256;

		var context = canvas.getContext( '2d' );
		var image = context.getImageData( 0, 0, 256, 256 );

		var x = 0, y = 0;

		for ( var i = 0, j = 0, l = image.data.length; i < l; i += 4, j ++ ) {

			x = j % 256;
			y = x == 0 ? y + 1 : y;

			image.data[ i ] = 255;
			image.data[ i + 1 ] = 0;
			image.data[ i + 2 ] = 0;
			image.data[ i + 3 ] = Math.floor( x ^ y );

		}

		context.putImageData( image, 0, 0 );

		return canvas;

	}

	function generateRandomSquiggles() {

		var canvas = document.createElement( 'canvas' );
		canvas.width = canvas.height = 512;

		var context = canvas.getContext( '2d' );

		for ( var i = 0; i < 20000; i ++ ) {

			context.fillStyle = 'hsl( 0, 0%,' + ( Math.random() * 50 + 50 ) + '%)';
			context.beginPath();
			context.arc( Math.random() * canvas.width, Math.random() * canvas.height, Math.random() + 0.15, 0, Math.PI * 2, true );
			context.fill();

		}

		context.globalAlpha = 0.075;
		context.globalCompositeOperation = 'lighter';

		return canvas;

	}


	function setTron() {

		var canvas = document.createElement( 'canvas' );
		canvas.width = canvas.height = 256;
		var context = canvas.getContext( '2d' );

		var image = context.getImageData( 0, 0, 256, 256 );

		pos = 0; // index position into imagedata array

		xoff = canvas.width / 3; // offsets to "center"
		yoff = canvas.height / 3;

		// walk left-to-right, top-to-bottom; it's the
		// same as the ordering in the imagedata array:

		for (y = 0; y < canvas.height; y++) {
			for (x = 0; x < canvas.width; x++) {
				// calculate sine based on distance
				x2 = x - xoff;
				y2 = y - yoff;
				d = Math.sqrt( x2 * x2 + y2 * y2 );
				t = Math.sin( d/6.0 );

				// calculate RGB values based on sine
				r = t * 200;
				g = 125 + t * 80;
				b = 235 + t * 20;

				// set red, green, blue, and alpha:
				image.data[pos++] = Math.max(0,Math.min(255, r));
				image.data[pos++] = Math.max(0,Math.min(255, g));
				image.data[pos++] = Math.max(0,Math.min(255, b));
				image.data[pos++] = 255; // opaque alpha
			}
		}

		context.putImageData( image, 0, 0 );
		return canvas;
	}

	function randomDots() {

		var canvas = document.createElement( 'canvas' );
		canvas.width = canvas.height = 256;
		var context = canvas.getContext( '2d' );

		var image = context.getImageData( 0, 0, 256, 256 );

// draw random dots
		for (i = 0; i < 10000; i++) {
			x = Math.random() * canvas.width | 0; // |0 to truncate to Int32
			y = Math.random() * canvas.height | 0;
			r = Math.random() * 256 | 0;
			g = Math.random() * 256 | 0;
			b = Math.random() * 256 | 0;

			index = (x + y * image.width) * 4;
			image.data[index+0] = r;
			image.data[index+1] = g;
			image.data[index+2] = b;
			image.data[index+3] = 255;
		}

		context.putImageData( image, 0, 0 );
		return canvas;
	}






	function addLights( size ) {

// 2016-02-21 ~ template-threejs-lights-r2.html

		var size = size ? size : 100;
		var lightAmbient, lightDirectional, lightPoint;


		lightAmbient = new THREE.AmbientLight( 0x444444 );
		scene.add( lightAmbient );


		lightDirectional = new THREE.DirectionalLight( 0xffffff, 0.5 );
		lightDirectional.position.set( -size, size, size );

		var d = size;
		lightDirectional.shadow.camera.left = -d;
		lightDirectional.shadow.camera.right = d;
		lightDirectional.shadow.camera.top = d;
		lightDirectional.shadow.camera.bottom = -d;

		lightDirectional.shadow.camera.near = 0;
		lightDirectional.shadow.camera.far = 3 * size;

// helps stop appearance of grid lines in objects
		lightDirectional.shadow.bias = -0.001; // default 0 ~ distance from corners?

		lightDirectional.shadow.mapSize.width = 2048;  // default 512
		lightDirectional.shadow.mapSize.height = 2048;

		lightDirectional.castShadow = true;
		scene.add( lightDirectional );

//		scene.add( new THREE.CameraHelper( lightDirectional.shadow.camera ) );

		lightPoint = new THREE.PointLight( 0xffffff, 0.5 );
		camera.add( lightPoint );
		lightPoint.position = new THREE.Vector3( 0, 0, 1 );
		scene.add( camera );

	}

	function addShadows() {

// 2016-02-21 ~ add-lights/template-threejs-lights-r2.html

		renderer.shadowMap.enabled = true;
		renderer.shadowMap.cullFace = THREE.CullFaceBack;
		renderer.gammaInput = true;
		renderer.gammaOutput = true;
		renderer.shadowMap.type = THREE.PCFSoftShadowMap;

		scene.traverse( function ( child ) {

			if ( child instanceof THREE.Mesh ) {

				child.castShadow = true
				child.receiveShadow = true;
//				child.material.needsUpdate = true;

			}

		} );

	}



	function getMaterial( index ) {

		if ( !materialsLibrary ) { getMaterials(); }

		if ( index ) {

			mat =  materialsLibrary[ index ];
			material = mat.material;

			if ( mat.texture ) {

				texture = mat.texture;
				texture.needsUpdate = true;
				material.map = texture;

			}

			if ( chkEnvMap.checked ) {


				urls = skyboxURLs[ selSkybox.selectedIndex ][ 1 ];

				var loader, textureCube;

				loader = new THREE.CubeTextureLoader();
				loader.setCrossOrigin( 'anonymous' );

				textureCube = loader.load( urls );

//				textureCube = THREE.ImageUtils.loadTextureCube( urls );
				textureCube.format = THREE.RGBFormat;
				material.envMap = textureCube;
//				material.refractionRatio = 0.85;
				material.reflectivity = 0.85;

			}

		} else {

console.log( 'no index' );

			mat = materialsLibrary[ 'texture1' ];
			material = mat.material
			texture = mat.texture;
			texture.needsUpdate = true;
			material.map = texture;

			urls = skyboxURLs[ selSkybox.selectedIndex ][ 1 ];

			var loader, textureCube;

			loader = new THREE.CubeTextureLoader();
			loader.setCrossOrigin( 'anonymous' );

			textureCube = loader.load( urls );

			textureCube.format = THREE.RGBFormat;
			material.envMap = textureCube;
//			material.refractionRatio = 0.85;
			material.reflectivity = 0.85;

		}

		material.side = 2;

		return material;

	}

	function updateMaterial( index ) {

		material = getMaterial( index );

		scene.traverse( function ( child ) {

			if ( child instanceof THREE.Mesh ) {

				child.castShadow = true
				child.receiveShadow = true;
//				child.material.needsUpdate = true;

				child.material = material;

			}

		} );

	}