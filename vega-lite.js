var vg_1 = "tourney_hosts.json";
vegaEmbed("#tourney_map", vg_1).then(function(result) {

}).catch(console.error);

var vg_2 = "prize_pool.json";
vegaEmbed("#prizepool_linechart", vg_2).then(function(result) {

}).catch(console.error);

var vg_3 = "HLTV_ratings.json";
vegaEmbed("#hltv_radarchart", vg_3).then(function(result) {

}).catch(console.error);