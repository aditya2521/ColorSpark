// 40+ named palettes used across 100 levels — giving 1000+ color combinations

export interface Palette {
  name: string;
  colors: string[]; // up to 20 hex colors indexed 0-19, maps to colorNumber 1-20
}

export const PALETTES: Palette[] = [
  // ── BRIGHT / CLASSIC ──
  { name: 'Classic Bright',  colors: ['#87CEEB','#7EC850','#FF6B6B','#FFD93D','#C8A8E9','#FF8C42','#4ECDC4','#F8B4D9','#B8860B','#6BCB77','#4A90D9','#FF4757','#FFA502','#2ED573','#5352ED','#FF6348','#3742FA','#2F3542','#ECCC68','#FF4757'] },
  { name: 'Pastel Dream',    colors: ['#B5EAD7','#FFDAC1','#FFB7B2','#FF9AA2','#C7CEEA','#E2F0CB','#FFEAA7','#DDA0DD','#98D8C8','#F7D794','#AED6F1','#F9E4B7','#D5AAFF','#C3F0CA','#FFD3B6','#A8D8EA','#AA96DA','#FCBAD3','#FFFFD2','#C9B1FF'] },
  { name: 'Neon Pop',        colors: ['#0A0A0A','#39FF14','#FF073A','#04D9FF','#FFFC00','#FF6EFF','#00FF85','#FF5F1F','#BF00FF','#00FFFF','#FF2400','#7FFF00','#FF00C8','#0080FF','#FFD700','#FF4400','#00FF00','#FF0090','#00BFFF','#FFFF33'] },
  { name: 'Sunset Glow',     colors: ['#2C3E50','#E8A838','#D35400','#E74C3C','#C0392B','#F39C12','#E67E22','#FAD7A0','#FDEBD0','#F5CBA7','#DC7633','#CA6F1E','#AF601A','#935116','#784212','#6E2C00','#EB984E','#F0B27A','#FAD7A0','#FDEBD0'] },
  { name: 'Ocean Blues',     colors: ['#001F5B','#003087','#1560BD','#4169E1','#6699CC','#87CEEB','#B0E0E6','#E0F7FA','#00CED1','#20B2AA','#008B8B','#006666','#004C4C','#003333','#40E0D0','#7FFFD4','#00FA9A','#98FB98','#F0FFF0','#E8F8F5'] },
  { name: 'Forest Earth',    colors: ['#1A5276','#1ABC9C','#27AE60','#2ECC71','#52BE80','#7DCEA0','#A9DFBF','#D5F5E3','#F0FFF0','#8B4513','#A0522D','#CD853F','#D2691E','#DEB887','#F5DEB3','#FAF0E6','#F5F5DC','#FAEBD7','#FFE4B5','#FFDEAD'] },
  { name: 'Royal Purple',    colors: ['#1A1A2E','#16213E','#0F3460','#533483','#6B3FA0','#7B2D8B','#9B59B6','#AF7AC5','#C39BD3','#D7BDE2','#E8DAEF','#F4ECF7','#EAD1DC','#F1948A','#E74C3C','#C0392B','#D98880','#F0B27A','#FAD7A0','#FDEBD0'] },
  { name: 'Cherry Blossom',  colors: ['#1B1B2F','#2A2A4A','#E63946','#F4A261','#E9C46A','#264653','#2A9D8F','#F48FB1','#F8BBD0','#FCE4EC','#EF9A9A','#EF5350','#E53935','#B71C1C','#FF8A80','#FF80AB','#EA80FC','#B388FF','#82B1FF','#80D8FF'] },
  { name: 'Tropical',        colors: ['#006994','#0097A7','#00BCD4','#4DD0E1','#80DEEA','#B2EBF2','#E0F7FA','#FFD54F','#FFCA28','#FFC107','#FFB300','#FFA000','#FF8F00','#FF6F00','#FF5722','#FF7043','#FF8A65','#FFAB91','#FFCCBC','#FBE9E7'] },
  { name: 'Galaxy',          colors: ['#0D0D0D','#1A0033','#2D004C','#4D0080','#6600CC','#8000FF','#9933FF','#B366FF','#CC99FF','#E6CCFF','#F3E5F5','#CE93D8','#AB47BC','#8E24AA','#6A1B9A','#4A148C','#1E88E5','#42A5F5','#90CAF9','#E3F2FD'] },

  // ── ANIMALS SPECIFIC ──
  { name: 'Cat Colors',      colors: ['#F5DEB3','#FFF8DC','#FFDEAD','#D2B48C','#C4A882','#8B7355','#696969','#FFFFFF','#000000','#FF69B4','#90EE90','#87CEEB','#DDA0DD','#FFD700','#FFA500','#CD853F','#A0522D','#8B4513','#F0E68C','#E6E6FA'] },
  { name: 'Dog Colors',      colors: ['#D2691E','#A0522D','#8B4513','#CD853F','#DEB887','#F5DEB3','#FFFFF0','#FFFFFF','#000000','#F08080','#ADD8E6','#90EE90','#FFD700','#FFA07A','#DAA520','#B8860B','#808080','#C0C0C0','#D3D3D3','#F5F5F5'] },
  { name: 'Ocean Colors',    colors: ['#006994','#0097A7','#0288D1','#039BE5','#03A9F4','#29B6F6','#4FC3F7','#81D4FA','#B3E5FC','#E1F5FE','#00897B','#26A69A','#4DB6AC','#80CBC4','#B2DFDB','#E0F2F1','#FFEB3B','#FFF176','#FFFDE7','#F5F5F5'] },
  { name: 'Bird Colors',     colors: ['#1565C0','#1976D2','#1E88E5','#2196F3','#42A5F5','#64B5F6','#90CAF9','#FF8F00','#FFA000','#FFB300','#FFC107','#FFD54F','#FFE082','#FFF8E1','#F44336','#E53935','#D32F2F','#C62828','#B71C1C','#FFFFFF'] },

  // ── FOOD SPECIFIC ──
  { name: 'Candy Shop',      colors: ['#FF69B4','#FF1493','#FF6347','#FF8C00','#FFD700','#ADFF2F','#00FA9A','#00CED1','#1E90FF','#9370DB','#FF00FF','#FF4500','#32CD32','#00BFFF','#FF69B4','#FFDAB9','#98FB98','#87CEEB','#DDA0DD','#F0E68C'] },
  { name: 'Ice Cream',       colors: ['#FFF0F5','#FFB6C1','#FFC0CB','#FFDAB9','#FFEFD5','#F0FFF0','#F5FFFA','#E0FFFF','#F0F8FF','#FFF5EE','#F5F5DC','#FFFACD','#FAFAD2','#FFFFE0','#FFFFF0','#F8F8FF','#F0FFFF','#FAEBD7','#FAF0E6','#FFF8DC'] },
  { name: 'Fruit Basket',    colors: ['#FF4500','#FF6347','#FF7F50','#FFA07A','#FFB347','#FFD700','#ADFF2F','#7CFC00','#32CD32','#00FF00','#9ACD32','#6B8E23','#228B22','#006400','#008000','#90EE90','#98FB98','#00FA9A','#00CED1','#48D1CC'] },

  // ── NATURE SPECIFIC ──
  { name: 'Spring Garden',   colors: ['#87CEEB','#98FB98','#90EE90','#32CD32','#228B22','#FFB6C1','#FF69B4','#FF1493','#DDA0DD','#DA70D6','#BA55D3','#9932CC','#8B008B','#FFD700','#FFA500','#FFFFFF','#F5F5F5','#E8E8E8','#D3D3D3','#C0C0C0'] },
  { name: 'Autumn Leaves',   colors: ['#4A2C2A','#6B3A2A','#8B4513','#A0522D','#CD853F','#D2691E','#DEB887','#DAA520','#B8860B','#FFD700','#FFA500','#FF8C00','#FF7F50','#FF6347','#FF4500','#DC143C','#B22222','#8B0000','#2F4F4F','#556B2F'] },
  { name: 'Winter Snow',     colors: ['#E3F2FD','#BBDEFB','#90CAF9','#64B5F6','#42A5F5','#2196F3','#1E88E5','#1976D2','#1565C0','#0D47A1','#FFFFFF','#F5F5F5','#EEEEEE','#E0E0E0','#BDBDBD','#9E9E9E','#FFB300','#FFA000','#FF8F00','#FF6F00'] },
  { name: 'Tropical Rain',   colors: ['#004D40','#00695C','#00796B','#00897B','#009688','#26A69A','#4DB6AC','#80CBC4','#B2DFDB','#E0F2F1','#1B5E20','#2E7D32','#388E3C','#43A047','#4CAF50','#66BB6A','#81C784','#A5D6A7','#C8E6C9','#E8F5E9'] },

  // ── FANTASY SPECIFIC ──
  { name: 'Dragon Fire',     colors: ['#1A1A2E','#16213E','#B71C1C','#C62828','#D32F2F','#E53935','#F44336','#EF5350','#FF8C00','#FFA500','#FFB300','#FFC107','#FFD700','#FFECB3','#FFF8E1','#212121','#424242','#616161','#757575','#9E9E9E'] },
  { name: 'Unicorn Magic',   colors: ['#FCE4EC','#F48FB1','#F06292','#EC407A','#E91E63','#AD1457','#E1F5FE','#81D4FA','#29B6F6','#F3E5F5','#CE93D8','#AB47BC','#FFF9C4','#FFF59D','#FFF176','#E8F5E9','#A5D6A7','#66BB6A','#FFE0B2','#FFB74D'] },
  { name: 'Space Explorer',  colors: ['#000000','#0D0D0D','#1A1A1A','#263238','#37474F','#455A64','#546E7A','#607D8B','#1565C0','#0D47A1','#7B1FA2','#4A148C','#B71C1C','#E65100','#F57F17','#FFFFFF','#F5F5F5','#EEEEEE','#FFD700','#FFA500'] },
  { name: 'Fairy Tales',     colors: ['#F8BBD0','#F48FB1','#F06292','#EC407A','#E91E63','#AD1457','#880E4F','#D1C4E9','#B39DDB','#9575CD','#7E57C2','#673AB7','#4527A0','#311B92','#B3E5FC','#81D4FA','#4FC3F7','#29B6F6','#03A9F4','#0288D1'] },

  // ── VEHICLE / PLACE SPECIFIC ──
  { name: 'Sky High',        colors: ['#E3F2FD','#BBDEFB','#90CAF9','#64B5F6','#FFFFFF','#F5F5F5','#FF7043','#FF5722','#F4511E','#E64A19','#BF360C','#FFB300','#FF8F00','#FF6F00','#E65100','#C43E00','#BDBDBD','#9E9E9E','#757575','#616161'] },
  { name: 'City Lights',     colors: ['#1A1A2E','#16213E','#0F3460','#533483','#E94560','#FFFFFF','#FFD700','#FFA500','#FF4500','#FF6347','#4169E1','#1E90FF','#87CEEB','#B0C4DE','#778899','#708090','#2F4F4F','#696969','#808080','#A9A9A9'] },
  { name: 'Underwater',      colors: ['#000033','#000055','#000077','#000099','#0000BB','#006994','#0097A7','#00BCD4','#4DD0E1','#80DEEA','#00FF7F','#00FA9A','#00CED1','#20B2AA','#3CB371','#32CD32','#FFD700','#FF8C00','#FF4500','#FF0000'] },

  // ── EXTRA VARIETY ──
  { name: 'Rainbow Bright',  colors: ['#FF0000','#FF7F00','#FFFF00','#00FF00','#0000FF','#8B00FF','#FF69B4','#FFFFFF','#000000','#808080','#FF1493','#00CED1','#FFD700','#32CD32','#1E90FF','#FF4500','#9400D3','#00FF7F','#FF6347','#40E0D0'] },
  { name: 'Earth Tones',     colors: ['#8B4513','#A0522D','#CD853F','#D2691E','#DEB887','#F5DEB3','#FAEBD7','#FAF0E6','#FFFFF0','#F5F5DC','#228B22','#2E8B57','#3CB371','#6B8E23','#808000','#9ACD32','#6495ED','#4682B4','#5F9EA0','#708090'] },
  { name: 'Monochrome',      colors: ['#000000','#111111','#222222','#333333','#444444','#555555','#666666','#777777','#888888','#999999','#AAAAAA','#BBBBBB','#CCCCCC','#DDDDDD','#EEEEEE','#F5F5F5','#FAFAFA','#FFFFFF','#C0C0C0','#808080'] },
  { name: 'Retro 80s',       colors: ['#FF6EC7','#FF00FF','#7B00D4','#001AFF','#00EAFF','#00FF00','#FFFF00','#FF8C00','#FF0000','#FF69B4','#B400FF','#0040FF','#00D4FF','#00FF88','#CCFF00','#FF9900','#FF2200','#FF77FF','#44AAFF','#FFDD00'] },
  { name: 'Watercolor',      colors: ['#A8D8EA','#AA96DA','#FCBAD3','#FFFFD2','#C8E6C9','#FFCDD2','#B3E5FC','#F8BBD0','#D1C4E9','#DCEDC8','#FFF9C4','#E1F5FE','#FCE4EC','#F3E5F5','#E8F5E9','#E8EAF6','#FBE9E7','#FAFAFA','#FFFFFF','#F5F5F5'] },
  { name: 'Jewel Tones',     colors: ['#009B77','#DD4132','#9B2335','#45B5AA','#D6ED17','#BC243C','#C3447A','#98B4D4','#88B04B','#F7CAC9','#92A8D1','#955251','#B163A3','#55B4B0','#E15D44','#7FCDCD','#BC70A4','#BFD641','#F5DF4D','#EFC050'] },
  { name: 'Material Design', colors: ['#F44336','#E91E63','#9C27B0','#673AB7','#3F51B5','#2196F3','#03A9F4','#00BCD4','#009688','#4CAF50','#8BC34A','#CDDC39','#FFEB3B','#FFC107','#FF9800','#FF5722','#795548','#9E9E9E','#607D8B','#FFFFFF'] },
  { name: 'Kids Crayon',     colors: ['#FF0000','#FF6600','#FFFF00','#00AA00','#0000FF','#8B00FF','#FF00FF','#00FFFF','#FF69B4','#A52A2A','#808080','#FFFFFF','#000000','#FFD700','#FFA500','#90EE90','#87CEEB','#DDA0DD','#F4A460','#CD853F'] },
  { name: 'Muted Elegance',  colors: ['#9E9E9E','#A5927D','#B59A7C','#C4A882','#D3B68B','#E2C499','#F1D2A7','#E8CFA0','#DECCA0','#D4C99F','#607D8B','#78909C','#90A4AE','#B0BEC5','#CFD8DC','#ECEFF1','#546E7A','#455A64','#37474F','#263238'] },
  { name: 'Vibrant Mix',     colors: ['#FF2D55','#FF9500','#FFCC00','#4CD964','#5AC8FA','#007AFF','#5856D6','#FF2D55','#FF6B00','#FFDC00','#36D399','#00C6FF','#0063FF','#7B5CF0','#FF5C8D','#FF8000','#EEFF00','#00FF88','#00AAFF','#5500FF'] },
];
