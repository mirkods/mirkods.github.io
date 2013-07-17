var dom1D, dom2D;

function bezierMappata_1D(controlpoints){
  return BEZIER(S0)(controlpoints)
}

function bezierMappata_2D(functions){
  var x = BEZIER(S1)(functions)
  return MAP(x)(dom2D)
}

function halfStructure(z){
  // bracciolo curvo
  var b1 = [[6.13, 0.05,z], [5.51, 2.57,z], [4.31, 2.67,z], [1.64, 2.63,z]];
  var b1 = BEZIER(S0)(b1);

  var b2 = [[6.2, 0.05,z], [5.68, 2.53,z], [4.31, 2.79,z], [1.64, 2.72,z]];
  var b2 = BEZIER(S0)(b2);

  var b1d = [[6.13, 0.05,Math.abs(z-0.5)], [5.51, 2.57,Math.abs(z-0.5)], [4.31, 2.67,Math.abs(z-0.5)], [1.64, 2.63,Math.abs(z-0.5)]];
  var b1d = BEZIER(S0)(b1d);

  var b2d = [[6.2, 0.05,Math.abs(z-0.5)], [5.68, 2.53,Math.abs(z-0.5)], [4.31, 2.79,Math.abs(z-0.5)], [1.64, 2.72,Math.abs(z-0.5)]];
  var b2d = BEZIER(S0)(b2d);

  var bc1 = [[6.13, 0.05,z],[6.2, 0.05,z]];
  var bc1 = BEZIER(S0)(bc1);

  var bc2 = [[6.13, 0.05,Math.abs(z-0.5)],[6.2, 0.05,Math.abs(z-0.5)]];
  var bc2 = BEZIER(S0)(bc2);

  var bc3 = [[1.64, 2.63,z],[1.64, 2.72,z]];
  var bc3 = BEZIER(S0)(bc3);

  var bc4 = [[1.64, 2.63,Math.abs(z-0.5)],[1.64, 2.72,Math.abs(z-0.5)]];
  var bc4 = BEZIER(S0)(bc4);

  var bb1 = bezierMappata_2D([b1,b2]);
  var bb2 = bezierMappata_2D([b1d,b2d]);
  var bb3 = bezierMappata_2D([b1,b1d]);
  var bb4 = bezierMappata_2D([b2,b2d]);
  var bbc1 = bezierMappata_2D([bc1,bc2]);
  var bbc2 = bezierMappata_2D([bc3,bc4]);

  var bracciolo = STRUCT([bb1,bb2,bb3,bb4,bbc1,bbc2]);

  // struttura verticale
  var s1 = [[2.29, 3.91,Math.abs(z-0.5)], [2.73, 0.14,Math.abs(z-0.5)]];
  var s1 = BEZIER(S0)(s1);

  var s2 = [[2.39, 3.91,Math.abs(z-0.5)], [2.8, 0.14,Math.abs(z-0.5)]];
  var s2 = BEZIER(S0)(s2);

  var s1d = [[2.29, 3.91,Math.abs(z-1)], [2.73, 0.14,Math.abs(z-1)]];
  var s1d = BEZIER(S0)(s1d);

  var s2d = [[2.39, 3.91,Math.abs(z-1)], [2.8, 0.14,Math.abs(z-1)]];
  var s2d = BEZIER(S0)(s2d);

  var sc1 = [[2.29, 3.91,Math.abs(z-0.5)],[2.39, 3.91,Math.abs(z-0.5)]];
  var sc1 = BEZIER(S0)(sc1);

  var sc2 = [[2.29, 3.91,Math.abs(z-1)],[2.39, 3.91,Math.abs(z-1)]];
  var sc2 = BEZIER(S0)(sc2);

  var sc3 = [[2.73, 0.14,Math.abs(z-0.5)],[2.8, 0.14,Math.abs(z-0.5)]];
  var sc3 = BEZIER(S0)(sc3);

  var sc4 = [[2.73, 0.14,Math.abs(z-1)],[2.8, 0.14,Math.abs(z-1)]];
  var sc4 = BEZIER(S0)(sc4);


  var ss1 = bezierMappata_2D([s1,s2]);
  var ss2 = bezierMappata_2D([s1d,s2d]);
  var ss3 = bezierMappata_2D([s1,s1d]);
  var ss4 = bezierMappata_2D([s2,s2d]);

  var ssc1 = bezierMappata_2D([sc1,sc2]);
  var ssc2 = bezierMappata_2D([sc3,sc4]);


  var verticale = STRUCT([ss1,ss2,ss3,ss4,ssc1,ssc2]);

  // struttura orizzontale
  var o1 = [[2.66, 1.28,Math.abs(z-0.5)], [5.5, 1.59,Math.abs(z-0.5)]];
  var o1 = BEZIER(S0)(o1);

  var o2 = [[2.66, 1.35,Math.abs(z-0.5)], [5.5, 1.67,Math.abs(z-0.5)]];
  var o2 = BEZIER(S0)(o2);

  var o1d = [[2.66, 1.28,Math.abs(z-1)], [5.5, 1.59,Math.abs(z-1)]];
  var o1d = BEZIER(S0)(o1d);

  var o2d = [[2.66, 1.35,Math.abs(z-1)], [5.5, 1.67,Math.abs(z-1)]];
  var o2d = BEZIER(S0)(o2d);

  var oc1 = [[2.66, 1.28,Math.abs(z-0.5)],[2.66, 1.35,Math.abs(z-0.5)]];
  var oc1 = BEZIER(S0)(oc1);

  var oc2 = [[2.66, 1.28,Math.abs(z-1)],[2.66, 1.35,Math.abs(z-1)]];
  var oc2 = BEZIER(S0)(oc2);

  var oc3 = [[5.5, 1.59,Math.abs(z-0.5)],[5.5, 1.67,Math.abs(z-0.5)]];
  var oc3 = BEZIER(S0)(oc3);

  var oc4 = [[5.5, 1.59,Math.abs(z-1)],[5.5, 1.67,Math.abs(z-1)]];
  var oc4 = BEZIER(S0)(oc4);


  var oo1 = bezierMappata_2D([o1,o2]);
  var oo2 = bezierMappata_2D([o1d,o2d]);
  var oo3 = bezierMappata_2D([o1,o1d]);
  var oo4 = bezierMappata_2D([o2,o2d]);

  var ooc1 = bezierMappata_2D([oc1,oc2]);
  var ooc2 = bezierMappata_2D([oc3,oc4]);


  var orizzontale = STRUCT([oo1,oo2,oo3,oo4,ooc1,ooc2]);


  return COLOR([0/255,0/255,0/255])(STRUCT([bracciolo,verticale,orizzontale]));
}

var showModelRossi = function(){

  dom1D = INTERVALS(1)(32);
  dom2D = DOMAIN([[0,1],[0,1]])([30,30]);

  var z_init = 0;
  var z_end = 4.5;

  var mezzaSedia1 = halfStructure(z_init);
  var mezzaSedia2 = halfStructure(z_end);


  // seduta verticale
  var sv1 = [[2.66, 1.35,z_init+0.5], [2.39, 3.91,z_init+0.5]];
  var sv1 = BEZIER(S0)(sv1);

  var sv2 = [[3.18, 1.41,z_init+0.5], [2.9, 3.97,z_init+0.5]];
  var sv2 = BEZIER(S0)(sv2);

  var sv1d = [[2.66, 1.35,z_end-0.5], [2.39, 3.91,z_end-0.5]];
  var sv1d = BEZIER(S0)(sv1d);

  var sv2d = [[3.18, 1.41,z_end-0.5], [2.9, 3.97,z_end-0.5]];
  var sv2d = BEZIER(S0)(sv2d);

  var svc1 = [[2.66, 1.35,z_init+0.5],[3.18, 1.41,z_init+0.5]];
  var svc1 = BEZIER(S0)(svc1);

  var svc2 = [[2.66, 1.35,z_end-0.5],[3.18, 1.41,z_end-0.5]];
  var svc2 = BEZIER(S0)(svc2);

  var svc3 = [[2.39, 3.91,z_init+0.5],[2.9, 3.97,z_init+0.5]];
  var svc3 = BEZIER(S0)(svc3);

  var svc4 = [[2.39, 3.91,z_end-0.5],[2.9, 3.97,z_end-0.5]];
  var svc4 = BEZIER(S0)(svc4);

  var ssv1 = bezierMappata_2D([sv1,sv2]);
  var ssv2 = bezierMappata_2D([sv1d,sv2d]);
  var ssv3 = bezierMappata_2D([sv1,sv1d]);
  var ssv4 = bezierMappata_2D([sv2,sv2d]);
  var ssvc1 = bezierMappata_2D([svc1,svc2]);
  var ssvc2 = bezierMappata_2D([svc3,svc4]);

  // // seduta orizzontale
  var so1 = [[3.18, 1.41,z_init+0.5],[5.5, 1.67,z_init+0.5]];
  var so1 = BEZIER(S0)(so1);

  var so2 = [[3.11, 1.94,z_init+0.5],[5.38, 2.18,z_init+0.5]];
  var so2 = BEZIER(S0)(so2);

  var so1d = [[3.18, 1.41,z_end-0.5],[5.5, 1.67,z_end-0.5]];
  var so1d = BEZIER(S0)(so1d);

  var so2d = [[3.11, 1.94,z_end-0.5],[5.38, 2.18,z_end-0.5]];
  var so2d = BEZIER(S0)(so2d);

  var soc1 = [[3.18, 1.41,z_init+0.5],[3.11, 1.94,z_init+0.5]];
  var soc1 = BEZIER(S0)(soc1);

  var soc2 = [[3.18, 1.41,z_end-0.5],[3.11, 1.94,z_end-0.5]];
  var soc2 = BEZIER(S0)(soc2);

  var soc3 = [[5.5, 1.67,z_init+0.5],[5.38, 2.18,z_init+0.5]];
  var soc3 = BEZIER(S0)(soc3);

  var soc4 = [[5.5, 1.67,z_end-0.5],[5.38, 2.18,z_end-0.5]];
  var soc4 = BEZIER(S0)(soc4);

  var sso1 = bezierMappata_2D([so1,so2]);
  var sso2 = bezierMappata_2D([so1d,so2d]);
  var sso3 = bezierMappata_2D([so1,so1d]);
  var sso4 = bezierMappata_2D([so2,so2d]);
  var ssoc1 = bezierMappata_2D([soc1,soc2]);
  var ssoc2 = bezierMappata_2D([soc3,soc4]);


  var sedutaVerticale = COLOR([255/255,0/255,0/255])(STRUCT([ssv1,ssv2,ssv3,ssv4,ssvc1,ssvc2]));
  var sedutaOrizzontale = COLOR([255/255,0/255,0/255])(STRUCT([sso1,sso2,sso3,sso4,ssoc1,ssoc2]));


  var sedia = STRUCT([mezzaSedia1, mezzaSedia2,sedutaVerticale, sedutaOrizzontale]);
  sedia = T([0,1,2])([-4,-0.1,-2.2])(sedia);

  DRAW(sedia);
}
