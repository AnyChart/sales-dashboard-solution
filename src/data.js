


var revenue_data = [
    ['January', 80540],
    ['February', 94190],
    ['March', 102610],
    ['April', 110430],
    ['May', 128000],
    ['June', 143760],
    ['July', 170670],
    ['August', 213210],
    ['September', 249980],
    ['October', 259680],
    ['November', 240980],
    ['December', 229580]
];

var revenue_planed = [
    ['January', 80540],
    ['February', 94190],
    ['March', 102610],
    ['April', 110430],
    ['May', 128000],
    ['June', 143760],
    ['July', 170670],
    ['August', 213210],
    ['September', 249980],
    ['October', 259680],
    ['November', 240980],
    ['December', 229580]
];


var categorized_data = anychart.data.set([
    ['Nail polish', 12814, 3054, 4376, 4229],
    ['Eyebrow pencil', 13012, 5067, 3987, 3932],
    ['Rouge', 11624, 7004, 3574, 5221],
    ['Lip gloss', 22998, 12043, 4572, 4008],
    ['Mascara', 11261, 10419, 6134, 18712]
]);

var table_data = {
    'Alabama': {
        actualSales: [2.173, 2.313, 2.233, 2.303, 3.743, 1.265, 1.881, 2.854, 1.009, 1.022, 3.165, 2.232],
        toGoal: [1.508, 3.252, 1.795, 1.329, 2.289, 3.464, 1.98, 3.301, 2.643, 2.254, 1.82, 3.868],
        profitTrend: [2.434, -1.593, 1.094, 3.264, 2.102, -2.003, 3.814, 2.564, 2.553, -1.903, 2.61, -2.123]
    },
    'Alaska': {
        actualSales: [3.92, 1.433, 2.181, 2.042, 3.357, 2.786, 2.441, 3.205, 1.342, 2.619, 1.811, 3.738],
        toGoal: [1.329, 1.226, 1.303, 2.848, 1.078, 1.32, 3.081, 1.153, 2.89, 1.911, 2.698, 3.406],
        profitTrend: [3.166, -3.161, 3.746, -1.057, -2.122, 3.207, 3.124, 2.358, 1.041, 3.781, 1.576, 3.51]
    },
    'Arizona': {
        actualSales: [2.171, 1.522, 3.418, 2.124, 3.741, 1.93, 2.019, 2.317, 1.038, 3.585, 2.048, 3.715],
        toGoal: [2.033, 1.141, 2.754, 1.386, 1.808, 1.671, 2.332, 3.274, 1.628, 1.588, 2.244, 1.872],
        profitTrend: [3.234, -1.492, 2.295, -2.02, 3.194, 2.546, 3.08, -2.702, 1.505, -1.074, 2.223, 1.723]
    },
    'Idaho': {
        actualSales: [1.831, 2.913, 2.781, 1.046, 2.032, 3.538, 3.746, 2.654, 1.32, 3.416, 3.86, 3.072],
        toGoal: [3.438, 3.772, 2.881, 1.971, 3.214, 1.403, 3.151, 2.31, 1.42, 1.117, 2.638, 3.578],
        profitTrend: [-1.783, 1.956, 2.133, 3.224, -1.346, -1.13, 3.561, 2.867, 1.769, -1.738, 3.901, 3.542]
    },
    'Illinois': {
        actualSales: [1.396, 2.276, 3.223, 1.376, 3.324, 3.671, 3.946, 3.148, 2.799, 3.537, 2.937, 2.203],
        toGoal: [3.539, 3.474, 3.363, 3.834, 2.237, 2.239, 3.833, 2.913, 1.29, 1.051, 1.098, 1.332],
        profitTrend: [2.29, 1.201, 2.566, -1.567, 3.748, 3.483, 2.01, 2.138, 1.316, -1.43, 1.1, 2.932]
    },
    'Indiana': {
        actualSales: [2.223, 2.979, 2.902, 1.321, 2.709, 3.249, 1.544, 1.863, 2.751, 3.566, 1.635, 1.772],
        toGoal: [2.005, 1.513, 1.835, 3.688, 1.776, 2.363, 3.928, 1.604, 1.12, 1.558, 3.978, 1.363],
        profitTrend: [3.262, -1.396, 2.679, 3.553, 2.489, 2.404, -1.774, 2.549, -1.201, 3.037, 1.38, 1.333]
    },
    'Ohio': {
        actualSales: [3.797, 2.34, 2.955, 1.645, 2.268, 2.507, 2.808, 1.762, 1.433, 3.76, 1.259, 2.017],
        toGoal: [1.21, 2.74, 3.919, 2.706, 1.44, 3.698, 2.558, 2.386, 1.764, 2.953, 2.166, 1.511],
        profitTrend: [3.042, -1.914, 2.443, 2.646, 3.761, 1.181, -1.746, 3.889, -1.73, 1.974, 2.831, 2.307]
    },
    'Oklahoma': {
        actualSales: [2.223, 3.569, 2.527, 3.449, 1.407, 2.24, 3.21, 3.104, 3.673, 3.365, 1.879, 2.703],
        toGoal: [2.441, 3.925, 1.915, 2.419, 2.447, 1.69, 3.138, 1.859, 3.886, 2.072, 3.131, 2.407],
        profitTrend: [2.061, 3.792, 3.711, -1.753, 1.947, 2.674, -1.873, 3.141, -2.636, 3.394, 1.074, 3.516]
    },
    'Oregon': {
        actualSales: [3.405, 1.784, 3.735, 1.768, 3.243, 2.868, 1.546, 3.761, 2.988, 2.579, 1.353, 2.119],
        toGoal: [2.516, 1.287, 3.444, 2.822, 3.376, 1.521, 2.289, 2.407, 2.821, 3.82, 3.931, 2.079],
        profitTrend: [2.327, 3.3, -1.302, 1.812, 1.906, 3.645, 1.727, -1.204, 3.882, -1.282, 1.541, 2.147]
    },
    'Vermont': {
        actualSales: [1.604, 2.514, 3.3, 1.54, 3.477, 1.834, 3.031, 2.749, 2.134, 2.722, 2.839, 1.228],
        toGoal: [3.024, 1.535, 1.81, 2.234, 3.456, 1.436, 3.891, 3.016, 3.785, 2.826, 1.324, 3.139],
        profitTrend: [-1.746, 2.522, 1.502, 2.094, 2.911, 2.024, 2.509, -1.758, 3.12, 2.521, 2.019, 1.093]
    },
    'Virginia': {
        actualSales: [2.316, 2.339, 1.547, 1.914, 2.731, 3.561, 1.349, 1.247, 2.634, 2.393, 2.264, 2.551],
        toGoal: [2.724, 3.603, 1.065, 3.948, 2.025, 3.046, 2.524, 3.118, 2.802, 1.878, 1.335, 2.197],
        profitTrend: [-1.334, 3.606, 3.518, 1.774, 2.552, 3.541, 2.385, 3.343, -1.871, 2.723, 3.023, 3.417]
    },
    'Washington': {
        actualSales: [3.718, 2.24, 1.779, 1.698, 1.612, 3.81, 1.548, 3.754, 1.655, 1.505, 3.567, 2.601],
        toGoal: [2.168, 1.641, 2.654, 3.205, 2.397, 1.37, 3.301, 2.553, 3.433, 3.084, 1.0, 1.49],
        profitTrend: [3.92, 3.257, 2.299, -1.358, -1.936, 2.097, 1.282, 1.642, 3.573, -2.761, 3.084, 1.319]
    }
};
