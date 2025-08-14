(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/SubjectCard.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>SubjectCard
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/react-fontawesome/index.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/free-solid-svg-icons/index.mjs [app-client] (ecmascript)");
'use client';
;
;
;
function SubjectCard(param) {
    let { subject, state, onStateChange, color, categoryName, onPrerequisiteClick, findSubjectByCode, subjectStates, colors, darkMode = false } = param;
    const canTakeSubject = ()=>{
        // Si no tiene prerrequisitos, siempre se puede tomar
        if (subject.prerequisites.length === 0) return true;
        // Verificar que todos los prerrequisitos estén aprobados
        return subject.prerequisites.every((prereqCode)=>{
            const prereqState = subjectStates[prereqCode];
            return (prereqState === null || prereqState === void 0 ? void 0 : prereqState.status) === 'approved';
        });
    };
    const isBlocked = !canTakeSubject() && (state === null || state === void 0 ? void 0 : state.status) !== 'approved';
    // Devuelve clases de texto y borde con el color de la categoría como texto
    const getStatusColor = ()=>{
        if (isBlocked) {
            return 'border-gray-300 cursor-not-allowed';
        }
        switch(state === null || state === void 0 ? void 0 : state.status){
            case 'approved':
                return 'border-green-300';
            default:
                return 'border-gray-200 hover:border-gray-400';
        }
    };
    // El color del texto principal (ahora blanco para contrastar con el fondo de color)
    const getTextColor = ()=>{
        if (isBlocked) return '#9ca3af'; // gray-400
        if ((state === null || state === void 0 ? void 0 : state.status) === 'approved') return '#fff'; // blanco para green-50
        // blanco para contrastar con el color de fondo
        return '#fff';
    };
    // El fondo ahora usa el color de la categoría
    const getBackgroundColor = ()=>{
        if (isBlocked) return darkMode ? '#4b5563' : '#6b7280'; // gray-600 (dark) / gray-500 (light)
        if ((state === null || state === void 0 ? void 0 : state.status) === 'approved') return '#10b981'; // green-500 (same for both modes)
        // color de la categoría del JSON
        return color || (darkMode ? '#374151' : '#fff'); // gray-700 (dark) / white (light)
    };
    const handleClick = ()=>{
        // No permitir cambios si está bloqueada (excepto si ya está aprobada)
        if (isBlocked) return;
        // Alternar entre pendiente y aprobado con un simple click
        const newStatus = (state === null || state === void 0 ? void 0 : state.status) === 'approved' ? 'pending' : 'approved';
        onStateChange({
            status: newStatus
        });
    };
    const PrerequisiteChip = (param)=>{
        let { prereqCode } = param;
        var _colors_prereqSubject_type;
        const prereqSubject = findSubjectByCode(prereqCode);
        const prereqState = subjectStates[prereqCode];
        if (!prereqSubject) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "inline-block text-xs px-2 py-1 rounded bg-white/20 text-white/80",
                children: prereqCode
            }, void 0, false, {
                fileName: "[project]/src/components/SubjectCard.tsx",
                lineNumber: 88,
                columnNumber: 9
            }, this);
        }
        // Color de la categoría del prerrequisito
        const prereqColor = ((_colors_prereqSubject_type = colors[prereqSubject.type]) === null || _colors_prereqSubject_type === void 0 ? void 0 : _colors_prereqSubject_type[0]) || '#6b7280';
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: (e)=>{
                e.stopPropagation();
                onPrerequisiteClick(prereqCode);
            },
            className: "inline-flex items-center gap-1 text-xs px-1.5 py-0.5 rounded font-bold text-white hover:brightness-110 transition-all",
            style: {
                backgroundColor: prereqColor
            },
            title: "".concat(prereqSubject.name, " (").concat(prereqCode, ") - Click para ir al ramo"),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: prereqCode
                }, void 0, false, {
                    fileName: "[project]/src/components/SubjectCard.tsx",
                    lineNumber: 105,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-2 h-2 rounded-full border border-white ".concat((prereqState === null || prereqState === void 0 ? void 0 : prereqState.status) === 'approved' ? 'bg-green-400' : 'bg-red-400')
                }, void 0, false, {
                    fileName: "[project]/src/components/SubjectCard.tsx",
                    lineNumber: 106,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SubjectCard.tsx",
            lineNumber: 96,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative group w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative rounded-xl border ".concat(getStatusColor(), " cursor-pointer transition-all duration-300 overflow-hidden shadow-md hover:shadow-lg transform hover:scale-[1.02] min-h-[100px] flex flex-col w-full"),
            style: {
                backgroundColor: getBackgroundColor()
            },
            onClick: handleClick,
            title: isBlocked ? "".concat(subject.name, " - Bloqueada: completa los prerrequisitos primero") : "".concat(subject.name, " - Click para ").concat((state === null || state === void 0 ? void 0 : state.status) === 'approved' ? 'marcar como pendiente' : 'marcar como aprobada'),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-0 left-0 ".concat(darkMode ? 'bg-gray-800/90' : 'bg-white/85', " rounded-br-lg px-2 py-0.5"),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs font-bold",
                        style: {
                            color: getBackgroundColor()
                        },
                        children: subject.code
                    }, void 0, false, {
                        fileName: "[project]/src/components/SubjectCard.tsx",
                        lineNumber: 129,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/SubjectCard.tsx",
                    lineNumber: 128,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-0 right-0 ".concat(darkMode ? 'bg-gray-800/90' : 'bg-white/85', " rounded-bl-lg px-2 py-0.5"),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs font-bold",
                        style: {
                            color: getBackgroundColor()
                        },
                        children: subject.sctCredits
                    }, void 0, false, {
                        fileName: "[project]/src/components/SubjectCard.tsx",
                        lineNumber: 136,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/SubjectCard.tsx",
                    lineNumber: 135,
                    columnNumber: 9
                }, this),
                isBlocked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute bottom-0 right-0 ".concat(darkMode ? 'bg-gray-800/90' : 'bg-white/85', " rounded-tl-lg px-2 py-0.5"),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faLock"],
                        className: "text-xs",
                        style: {
                            color: getBackgroundColor()
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/SubjectCard.tsx",
                        lineNumber: 144,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/SubjectCard.tsx",
                    lineNumber: 143,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 px-3 pt-10 pb-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-bold text-xs leading-tight text-white mb-1 flex items-center gap-1",
                            children: subject.name
                        }, void 0, false, {
                            fileName: "[project]/src/components/SubjectCard.tsx",
                            lineNumber: 150,
                            columnNumber: 11
                        }, this),
                        subject.prerequisites.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-1",
                                children: subject.prerequisites.map((prereq)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PrerequisiteChip, {
                                        prereqCode: prereq
                                    }, prereq, false, {
                                        fileName: "[project]/src/components/SubjectCard.tsx",
                                        lineNumber: 159,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/SubjectCard.tsx",
                                lineNumber: 157,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/SubjectCard.tsx",
                            lineNumber: 156,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SubjectCard.tsx",
                    lineNumber: 149,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SubjectCard.tsx",
            lineNumber: 117,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/SubjectCard.tsx",
        lineNumber: 116,
        columnNumber: 5
    }, this);
}
_c = SubjectCard;
var _c;
__turbopack_context__.k.register(_c, "SubjectCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/StatsBar.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>StatsBar
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/react-fontawesome/index.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/free-solid-svg-icons/index.mjs [app-client] (ecmascript)");
'use client';
;
;
;
function StatsBar(param) {
    let { stats, onShowCategories, onReset, onPlayGraduationPlan, darkMode = false } = param;
    const handleReset = ()=>{
        onReset();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed bottom-4 left-4 right-4 z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "".concat(darkMode ? 'bg-gray-800/90 border-gray-600' : 'bg-white/80 border-gray-200', " rounded-xl shadow-lg border p-4 mx-auto max-w-3xl"),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-lg font-bold text-green-600",
                                        children: stats.approvedCredits
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/StatsBar.tsx",
                                        lineNumber: 34,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm ".concat(darkMode ? 'text-gray-300' : 'text-gray-700'),
                                        children: "Créditos"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/StatsBar.tsx",
                                        lineNumber: 37,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm ".concat(darkMode ? 'text-gray-400' : 'text-gray-500'),
                                        children: [
                                            "de ",
                                            stats.totalCredits
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/StatsBar.tsx",
                                        lineNumber: 38,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/StatsBar.tsx",
                                lineNumber: 33,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-lg font-bold text-blue-600",
                                        children: stats.approvedSubjects
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/StatsBar.tsx",
                                        lineNumber: 41,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm ".concat(darkMode ? 'text-gray-300' : 'text-gray-700'),
                                        children: "Asignaturas"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/StatsBar.tsx",
                                        lineNumber: 44,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm ".concat(darkMode ? 'text-gray-400' : 'text-gray-500'),
                                        children: [
                                            "de ",
                                            stats.totalSubjects
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/StatsBar.tsx",
                                        lineNumber: 45,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/StatsBar.tsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/StatsBar.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 flex-1 justify-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center flex-shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-lg font-bold text-purple-600",
                                        children: [
                                            stats.percentage.toFixed(1),
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/StatsBar.tsx",
                                        lineNumber: 52,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm ".concat(darkMode ? 'text-gray-300' : 'text-gray-700'),
                                        children: "Progreso"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/StatsBar.tsx",
                                        lineNumber: 55,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/StatsBar.tsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 max-w-xs",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full ".concat(darkMode ? 'bg-gray-600' : 'bg-gray-200', " rounded-full h-2 overflow-hidden"),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-500",
                                        style: {
                                            width: "".concat(stats.percentage, "%")
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/StatsBar.tsx",
                                        lineNumber: 59,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StatsBar.tsx",
                                    lineNumber: 58,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/StatsBar.tsx",
                                lineNumber: 57,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/StatsBar.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onPlayGraduationPlan,
                                className: "w-9 h-9 bg-green-500 hover:bg-green-600 text-white rounded-full transition-all duration-300 flex items-center justify-center hover:shadow-md hover:scale-105",
                                title: "Ver plan de graduación",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faPlay"],
                                    className: "text-sm"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StatsBar.tsx",
                                    lineNumber: 74,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/StatsBar.tsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onShowCategories,
                                className: "w-9 h-9 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-all duration-300 flex items-center justify-center hover:shadow-md hover:scale-105",
                                title: "Ver categorías de asignaturas",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faInfoCircle"],
                                    className: "text-sm"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StatsBar.tsx",
                                    lineNumber: 81,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/StatsBar.tsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleReset,
                                className: "w-9 h-9 bg-red-500 hover:bg-red-600 text-white rounded-full transition-all duration-300 flex items-center justify-center hover:shadow-md hover:scale-105",
                                title: "Reiniciar progreso",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faRotateLeft"],
                                    className: "text-sm"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StatsBar.tsx",
                                    lineNumber: 88,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/StatsBar.tsx",
                                lineNumber: 83,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/StatsBar.tsx",
                        lineNumber: 68,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/StatsBar.tsx",
                lineNumber: 30,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/StatsBar.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/StatsBar.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_c = StatsBar;
var _c;
__turbopack_context__.k.register(_c, "StatsBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/GraduationPlanModal.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>GraduationPlanModal
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/react-fontawesome/index.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/free-solid-svg-icons/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function GraduationPlanModal(param) {
    let { show, graduationPlan, isAnimating, onClose, colors } = param;
    _s();
    const [visibleSemesters, setVisibleSemesters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GraduationPlanModal.useEffect": ()=>{
            if (isAnimating && graduationPlan.length > 0) {
                setVisibleSemesters(0);
                const interval = setInterval({
                    "GraduationPlanModal.useEffect.interval": ()=>{
                        setVisibleSemesters({
                            "GraduationPlanModal.useEffect.interval": (prev)=>{
                                if (prev >= graduationPlan.length) {
                                    clearInterval(interval);
                                    return prev;
                                }
                                return prev + 1;
                            }
                        }["GraduationPlanModal.useEffect.interval"]);
                    }
                }["GraduationPlanModal.useEffect.interval"], 1000); // Mostrar un semestre cada segundo
                return ({
                    "GraduationPlanModal.useEffect": ()=>clearInterval(interval)
                })["GraduationPlanModal.useEffect"];
            }
        }
    }["GraduationPlanModal.useEffect"], [
        isAnimating,
        graduationPlan.length
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GraduationPlanModal.useEffect": ()=>{
            if (show && !isAnimating) {
                setVisibleSemesters(graduationPlan.length);
            }
        }
    }["GraduationPlanModal.useEffect"], [
        show,
        isAnimating,
        graduationPlan.length
    ]);
    if (!show) return null;
    const totalSemesters = graduationPlan.length;
    const totalCredits = graduationPlan.reduce((sum, semester)=>sum + semester.credits, 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/30 backdrop-blur-sm z-60 flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/30 max-w-6xl w-full max-h-[80vh] overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-gradient-to-r from-green-600/80 to-blue-600/80 backdrop-blur-lg text-white p-6 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-8 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faGraduationCap"],
                                        className: "text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GraduationPlanModal.tsx",
                                        lineNumber: 72,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/GraduationPlanModal.tsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold",
                                            children: "Plan de Graduación"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/GraduationPlanModal.tsx",
                                            lineNumber: 75,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-white/80",
                                            children: [
                                                totalSemesters,
                                                " semestres • ",
                                                totalCredits,
                                                " créditos restantes"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/GraduationPlanModal.tsx",
                                            lineNumber: 76,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/GraduationPlanModal.tsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/GraduationPlanModal.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "text-white/80 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-2xl backdrop-blur-sm",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faTimes"]
                            }, void 0, false, {
                                fileName: "[project]/src/components/GraduationPlanModal.tsx",
                                lineNumber: 85,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/GraduationPlanModal.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/GraduationPlanModal.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 overflow-y-auto max-h-[60vh]",
                    children: [
                        graduationPlan.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center py-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faGraduationCap"],
                                    className: "text-6xl text-green-500 mb-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/GraduationPlanModal.tsx",
                                    lineNumber: 93,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-2xl font-bold text-gray-800 mb-2",
                                    children: "¡Felicitaciones!"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/GraduationPlanModal.tsx",
                                    lineNumber: 94,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600",
                                    children: "Ya has completado todas las asignaturas de la carrera."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/GraduationPlanModal.tsx",
                                    lineNumber: 95,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/GraduationPlanModal.tsx",
                            lineNumber: 92,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
                            children: graduationPlan.slice(0, visibleSemesters).map((semesterPlan, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/50 backdrop-blur-sm rounded-2xl p-4 border border-gray-200 transition-all duration-500 transform ".concat(isAnimating && index === visibleSemesters - 1 ? 'scale-105 ring-2 ring-blue-400 shadow-lg' : 'scale-100'),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faCalendarAlt"],
                                                    className: "text-blue-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/GraduationPlanModal.tsx",
                                                    lineNumber: 110,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "font-bold text-gray-800",
                                                            children: semesterPlan.semester
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/GraduationPlanModal.tsx",
                                                            lineNumber: 112,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-gray-600",
                                                            children: [
                                                                semesterPlan.subjects.length,
                                                                " asignaturas • ",
                                                                semesterPlan.credits,
                                                                " créditos"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/GraduationPlanModal.tsx",
                                                            lineNumber: 115,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/GraduationPlanModal.tsx",
                                                    lineNumber: 111,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/GraduationPlanModal.tsx",
                                            lineNumber: 109,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: semesterPlan.subjects.map((subject)=>{
                                                var _colors_subject_type;
                                                const subjectColor = ((_colors_subject_type = colors[subject.type]) === null || _colors_subject_type === void 0 ? void 0 : _colors_subject_type[0]) || '#6b7280';
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-2 rounded-lg text-white text-xs font-medium shadow-sm",
                                                    style: {
                                                        backgroundColor: subjectColor
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-bold",
                                                            children: subject.code
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/GraduationPlanModal.tsx",
                                                            lineNumber: 131,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-white/90 text-xs truncate",
                                                            title: subject.name,
                                                            children: subject.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/GraduationPlanModal.tsx",
                                                            lineNumber: 132,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-white/80 text-xs",
                                                            children: [
                                                                subject.sctCredits,
                                                                " créditos"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/GraduationPlanModal.tsx",
                                                            lineNumber: 135,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, subject.code, true, {
                                                    fileName: "[project]/src/components/GraduationPlanModal.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 25
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/GraduationPlanModal.tsx",
                                            lineNumber: 122,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, semesterPlan.semester, true, {
                                    fileName: "[project]/src/components/GraduationPlanModal.tsx",
                                    lineNumber: 100,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/GraduationPlanModal.tsx",
                            lineNumber: 98,
                            columnNumber: 13
                        }, this),
                        isAnimating && graduationPlan.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 text-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-2 h-2 bg-blue-500 rounded-full animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GraduationPlanModal.tsx",
                                        lineNumber: 151,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-medium",
                                        children: [
                                            "Mostrando ",
                                            visibleSemesters,
                                            " de ",
                                            totalSemesters,
                                            " semestres"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/GraduationPlanModal.tsx",
                                        lineNumber: 152,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/GraduationPlanModal.tsx",
                                lineNumber: 150,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/GraduationPlanModal.tsx",
                            lineNumber: 149,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/GraduationPlanModal.tsx",
                    lineNumber: 90,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/GraduationPlanModal.tsx",
            lineNumber: 67,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/GraduationPlanModal.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_s(GraduationPlanModal, "bRsmf7kYvejvnsrP1k904bbd2wE=");
_c = GraduationPlanModal;
var _c;
__turbopack_context__.k.register(_c, "GraduationPlanModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/hooks/useCalculator.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useCalculator": ()=>useCalculator
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const STORAGE_KEY = 'curriculum-progress-inginf';
function useCalculator(subjects) {
    _s();
    const [subjectStates, setSubjectStates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Cargar el progreso guardado al inicializar
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCalculator.useEffect": ()=>{
            try {
                const savedProgress = localStorage.getItem(STORAGE_KEY);
                if (savedProgress) {
                    const parsedProgress = JSON.parse(savedProgress);
                    setSubjectStates(parsedProgress);
                }
            } catch (error) {
                console.error('Error loading saved progress:', error);
            } finally{
                setIsLoaded(true);
            }
        }
    }["useCalculator.useEffect"], []);
    // Guardar el progreso cada vez que cambie el estado
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCalculator.useEffect": ()=>{
            if (isLoaded && Object.keys(subjectStates).length > 0) {
                try {
                    localStorage.setItem(STORAGE_KEY, JSON.stringify(subjectStates));
                } catch (error) {
                    console.error('Error saving progress:', error);
                }
            }
        }
    }["useCalculator.useEffect"], [
        subjectStates,
        isLoaded
    ]);
    const updateSubjectState = (code, state)=>{
        setSubjectStates((prev)=>({
                ...prev,
                [code]: state
            }));
    };
    const resetCalculator = ()=>{
        setSubjectStates({});
        try {
            localStorage.removeItem(STORAGE_KEY);
        } catch (error) {
            console.error('Error clearing saved progress:', error);
        }
    };
    const calculateCredits = ()=>{
        if (!subjects || subjects.length === 0) {
            return {
                approvedCredits: 0,
                totalCredits: 0,
                approvedSubjects: 0,
                totalSubjects: 0,
                percentage: 0
            };
        }
        let approvedCredits = 0;
        let totalCredits = 0;
        let approvedSubjects = 0;
        let totalSubjects = subjects.length;
        subjects.forEach((subject)=>{
            totalCredits += Number(subject.sctCredits) || 0;
            const state = subjectStates[subject.code];
            if ((state === null || state === void 0 ? void 0 : state.status) === 'approved') {
                approvedSubjects += 1;
                approvedCredits += Number(subject.sctCredits) || 0;
            }
        });
        const percentage = totalCredits > 0 ? approvedCredits / totalCredits * 100 : 0;
        return {
            approvedCredits,
            totalCredits,
            approvedSubjects,
            totalSubjects,
            percentage
        };
    };
    return {
        subjectStates,
        updateSubjectState,
        resetCalculator,
        calculateCredits,
        isLoaded
    };
}
_s(useCalculator, "dhh9Y7lBrKJPD3Qm0onugqvA3UU=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/hooks/useConfetti.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useConfetti": ()=>useConfetti
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useConfetti() {
    _s();
    const checkAndTriggerConfetti = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useConfetti.useCallback[checkAndTriggerConfetti]": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                __turbopack_context__.r("[project]/node_modules/canvas-confetti/dist/confetti.module.mjs [app-client] (ecmascript, async loader)")(__turbopack_context__.i).then({
                    "useConfetti.useCallback[checkAndTriggerConfetti]": (confetti)=>{
                        // Confetti desde la izquierda
                        confetti.default({
                            particleCount: 100,
                            spread: 70,
                            origin: {
                                x: 0.1,
                                y: 0.6
                            },
                            colors: [
                                '#10b981',
                                '#3b82f6',
                                '#8b5cf6',
                                '#f59e0b',
                                '#ef4444'
                            ]
                        });
                        // Confetti desde la derecha
                        confetti.default({
                            particleCount: 100,
                            spread: 70,
                            origin: {
                                x: 0.9,
                                y: 0.6
                            },
                            colors: [
                                '#10b981',
                                '#3b82f6',
                                '#8b5cf6',
                                '#f59e0b',
                                '#ef4444'
                            ]
                        });
                        // Confetti desde el centro superior
                        confetti.default({
                            particleCount: 150,
                            spread: 90,
                            origin: {
                                x: 0.5,
                                y: 0.3
                            },
                            colors: [
                                '#10b981',
                                '#3b82f6',
                                '#8b5cf6',
                                '#f59e0b',
                                '#ef4444'
                            ]
                        });
                        // Confetti adicional desde abajo
                        setTimeout({
                            "useConfetti.useCallback[checkAndTriggerConfetti]": ()=>{
                                confetti.default({
                                    particleCount: 80,
                                    spread: 60,
                                    origin: {
                                        x: 0.3,
                                        y: 0.8
                                    },
                                    colors: [
                                        '#10b981',
                                        '#3b82f6',
                                        '#8b5cf6',
                                        '#f59e0b',
                                        '#ef4444'
                                    ]
                                });
                                confetti.default({
                                    particleCount: 80,
                                    spread: 60,
                                    origin: {
                                        x: 0.7,
                                        y: 0.8
                                    },
                                    colors: [
                                        '#10b981',
                                        '#3b82f6',
                                        '#8b5cf6',
                                        '#f59e0b',
                                        '#ef4444'
                                    ]
                                });
                            }
                        }["useConfetti.useCallback[checkAndTriggerConfetti]"], 300);
                    }
                }["useConfetti.useCallback[checkAndTriggerConfetti]"]);
            }
        }
    }["useConfetti.useCallback[checkAndTriggerConfetti]"], []);
    return {
        checkAndTriggerConfetti
    };
}
_s(useConfetti, "28BMZbxgZSId/ngkasQVasRBMzo=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/hooks/useGraduationPlan.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useGraduationPlan": ()=>useGraduationPlan
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const useGraduationPlan = (subjects, subjectStates)=>{
    _s();
    const [showGraduationPlan, setShowGraduationPlan] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [graduationPlan, setGraduationPlan] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isAnimating, setIsAnimating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isSubjectAvailable = (subject, completedSubjects)=>{
        return subject.prerequisites.every((prereq)=>completedSubjects.has(prereq));
    };
    const getCurrentAcademicLevel = (completedSubjects)=>{
        // Determinar el nivel académico actual basado en las materias completadas
        const semesterLevels = [
            's1',
            's2',
            's3',
            's4',
            's5',
            's6',
            's7',
            's8'
        ];
        for(let i = semesterLevels.length - 1; i >= 0; i--){
            const semesterSubjects = subjects.filter((s)=>s.semester === semesterLevels[i]);
            const completedInSemester = semesterSubjects.filter((s)=>completedSubjects.has(s.code));
            if (completedInSemester.length > 0) {
                // Si tiene materias completadas en este semestre, su nivel mínimo es el siguiente
                return semesterLevels[Math.min(i + 1, semesterLevels.length - 1)];
            }
        }
        // Si no tiene materias completadas, está en s1
        return 's1';
    };
    const canTakeSubjectFromSemester = (subjectSemester, currentLevel, completedSubjects)=>{
        const semesterLevels = [
            's1',
            's2',
            's3',
            's4',
            's5',
            's6',
            's7',
            's8'
        ];
        const currentIndex = semesterLevels.indexOf(currentLevel);
        const subjectIndex = semesterLevels.indexOf(subjectSemester);
        // Puede tomar materias de su semestre actual
        if (subjectIndex === currentIndex) return true;
        // Puede tomar materias del siguiente semestre solo si:
        // 1. Es exactamente el siguiente semestre
        // 2. Tiene prerrequisitos completos
        if (subjectIndex === currentIndex + 1) {
            return true; // Los prerrequisitos ya se verifican en isSubjectAvailable
        }
        // Puede tomar materias de semestres anteriores si las perdió
        if (subjectIndex < currentIndex) return true;
        // No puede adelantar más de un semestre
        return false;
    };
    const calculateGraduationPlan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useGraduationPlan.useCallback[calculateGraduationPlan]": ()=>{
            // Obtener materias no aprobadas
            const pendingSubjects = subjects.filter({
                "useGraduationPlan.useCallback[calculateGraduationPlan].pendingSubjects": (subject)=>{
                    var _subjectStates_subject_code;
                    return !((_subjectStates_subject_code = subjectStates[subject.code]) === null || _subjectStates_subject_code === void 0 ? void 0 : _subjectStates_subject_code.status) || subjectStates[subject.code].status !== 'approved';
                }
            }["useGraduationPlan.useCallback[calculateGraduationPlan].pendingSubjects"]);
            if (pendingSubjects.length === 0) {
                setGraduationPlan([]);
                return;
            }
            // Materias ya completadas
            const completedSubjects = new Set(subjects.filter({
                "useGraduationPlan.useCallback[calculateGraduationPlan]": (subject)=>{
                    var _subjectStates_subject_code;
                    return ((_subjectStates_subject_code = subjectStates[subject.code]) === null || _subjectStates_subject_code === void 0 ? void 0 : _subjectStates_subject_code.status) === 'approved';
                }
            }["useGraduationPlan.useCallback[calculateGraduationPlan]"]).map({
                "useGraduationPlan.useCallback[calculateGraduationPlan]": (subject)=>subject.code
            }["useGraduationPlan.useCallback[calculateGraduationPlan]"]));
            const plan = [];
            const remainingSubjects = [
                ...pendingSubjects
            ];
            let currentSemester = 1;
            const maxCreditsPerSemester = 30; // Límite de créditos por semestre en UTFSM
            const maxCreditsFirstYear = 25; // Límite de créditos para estudiantes de primer año
            const currentYear = new Date().getFullYear(); // Año actual
            const getSemesterName = {
                "useGraduationPlan.useCallback[calculateGraduationPlan].getSemesterName": (semesterNumber)=>{
                    const currentDate = new Date();
                    const currentYear = currentDate.getFullYear();
                    const currentMonth = currentDate.getMonth() + 1; // getMonth() returns 0-11
                    // Determinar el año y semestre base según la fecha actual
                    let baseYear = currentYear;
                    let baseSemester = 1;
                    // Si estamos en agosto o después, el próximo semestre será el segundo semestre del año actual
                    // Si estamos antes de agosto, el próximo semestre será el primer semestre del año actual
                    if (currentMonth >= 8) {
                        // Estamos en el segundo semestre del año actual
                        baseSemester = 2;
                    } else {
                        // Estamos en el primer semestre del año actual o entre semestres
                        baseSemester = 1;
                    }
                    // Calcular el año y semestre para el semestre número 'semesterNumber'
                    const totalSemesters = semesterNumber - 1;
                    const additionalYears = Math.floor(totalSemesters / 2);
                    const semesterInYear = totalSemesters % 2;
                    const finalYear = baseYear + additionalYears;
                    const finalSemester = (baseSemester - 1 + semesterInYear) % 2 + 1;
                    // Si el semestre calculado es mayor que 2, incrementar el año
                    if (baseSemester + semesterInYear > 2) {
                        return "".concat(finalYear + 1, "-").concat(finalSemester);
                    }
                    return "".concat(finalYear, "-").concat(finalSemester);
                }
            }["useGraduationPlan.useCallback[calculateGraduationPlan].getSemesterName"];
            const getMaxCreditsForLevel = {
                "useGraduationPlan.useCallback[calculateGraduationPlan].getMaxCreditsForLevel": (academicLevel)=>{
                    // Estudiantes de primer año (s1 y s2) tienen límite menor
                    return academicLevel === 's1' || academicLevel === 's2' ? maxCreditsFirstYear : maxCreditsPerSemester;
                }
            }["useGraduationPlan.useCallback[calculateGraduationPlan].getMaxCreditsForLevel"];
            while(remainingSubjects.length > 0 && currentSemester <= 20){
                // Determinar el nivel académico actual del estudiante
                const currentAcademicLevel = getCurrentAcademicLevel(completedSubjects);
                let availableSubjects = remainingSubjects.filter({
                    "useGraduationPlan.useCallback[calculateGraduationPlan].availableSubjects": (subject)=>{
                        // Verificar prerrequisitos
                        const hasPrerequisites = isSubjectAvailable(subject, completedSubjects);
                        // Verificar si puede tomar materias de este semestre según su nivel académico
                        const canTakeBySemester = subject.semester ? canTakeSubjectFromSemester(subject.semester, currentAcademicLevel, completedSubjects) : false;
                        return hasPrerequisites && canTakeBySemester;
                    }
                }["useGraduationPlan.useCallback[calculateGraduationPlan].availableSubjects"]);
                if (availableSubjects.length === 0) {
                    // Si no hay materias disponibles, avanzar al siguiente semestre
                    currentSemester++;
                    continue;
                }
                // Ordenar por prioridad: menos prerrequisitos pendientes primero
                availableSubjects.sort({
                    "useGraduationPlan.useCallback[calculateGraduationPlan]": (a, b)=>{
                        const aPendingPrereqs = a.prerequisites.filter({
                            "useGraduationPlan.useCallback[calculateGraduationPlan]": (prereq)=>!completedSubjects.has(prereq)
                        }["useGraduationPlan.useCallback[calculateGraduationPlan]"]).length;
                        const bPendingPrereqs = b.prerequisites.filter({
                            "useGraduationPlan.useCallback[calculateGraduationPlan]": (prereq)=>!completedSubjects.has(prereq)
                        }["useGraduationPlan.useCallback[calculateGraduationPlan]"]).length;
                        return aPendingPrereqs - bPendingPrereqs;
                    }
                }["useGraduationPlan.useCallback[calculateGraduationPlan]"]);
                // Seleccionar materias para este semestre
                const semesterSubjects = [];
                let semesterCredits = 0;
                const maxCreditsThisSemester = getMaxCreditsForLevel(currentAcademicLevel);
                for (const subject of availableSubjects){
                    if (semesterCredits + subject.sctCredits <= maxCreditsThisSemester) {
                        semesterSubjects.push(subject);
                        semesterCredits += subject.sctCredits;
                        completedSubjects.add(subject.code);
                        // Remover de materias pendientes
                        const index = remainingSubjects.findIndex({
                            "useGraduationPlan.useCallback[calculateGraduationPlan].index": (s)=>s.code === subject.code
                        }["useGraduationPlan.useCallback[calculateGraduationPlan].index"]);
                        if (index !== -1) {
                            remainingSubjects.splice(index, 1);
                        }
                    }
                }
                if (semesterSubjects.length > 0) {
                    plan.push({
                        semester: getSemesterName(currentSemester),
                        subjects: semesterSubjects,
                        credits: semesterCredits
                    });
                    // Verificar si el estudiante avanzó de nivel académico
                    const newAcademicLevel = getCurrentAcademicLevel(completedSubjects);
                // El nivel académico se actualiza automáticamente en la siguiente iteración
                }
                currentSemester++;
            }
            setGraduationPlan(plan);
        }
    }["useGraduationPlan.useCallback[calculateGraduationPlan]"], [
        subjects,
        subjectStates
    ]);
    const playGraduationAnimation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useGraduationPlan.useCallback[playGraduationAnimation]": ()=>{
            calculateGraduationPlan();
            setShowGraduationPlan(true);
            setIsAnimating(true);
            // Detener animación después de mostrar todos los semestres
            setTimeout({
                "useGraduationPlan.useCallback[playGraduationAnimation]": ()=>{
                    setIsAnimating(false);
                }
            }["useGraduationPlan.useCallback[playGraduationAnimation]"], graduationPlan.length * 1000 + 2000);
        }
    }["useGraduationPlan.useCallback[playGraduationAnimation]"], [
        calculateGraduationPlan,
        graduationPlan.length
    ]);
    const closeGraduationPlan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useGraduationPlan.useCallback[closeGraduationPlan]": ()=>{
            setShowGraduationPlan(false);
            setIsAnimating(false);
        }
    }["useGraduationPlan.useCallback[closeGraduationPlan]"], []);
    return {
        showGraduationPlan,
        graduationPlan,
        isAnimating,
        playGraduationAnimation,
        closeGraduationPlan
    };
};
_s(useGraduationPlan, "E2nCcPJ+7CtMoWy1YfKGDBeroSU=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/CurriculumGrid.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>CurriculumGrid
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/react-fontawesome/index.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/free-solid-svg-icons/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SubjectCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SubjectCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StatsBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/StatsBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GraduationPlanModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/GraduationPlanModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCalculator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useCalculator.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useConfetti$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useConfetti.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGraduationPlan$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useGraduationPlan.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
function CurriculumGrid() {
    _s();
    const [subjects, setSubjects] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [colors, setColors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [careerName, setCareerName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [careerColor, setCareerColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showCategoriesPopup, setShowCategoriesPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showCareerSelector, setShowCareerSelector] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [selectedCareer, setSelectedCareer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [casaCentralCareers, setCasaCentralCareers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [vinaConcepcionCareers, setVinaConcepcionCareers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [darkMode, setDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const subjectRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    // Detectar modo oscuro del sistema
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CurriculumGrid.useEffect": ()=>{
            const checkDarkMode = {
                "CurriculumGrid.useEffect.checkDarkMode": ()=>{
                    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                    setDarkMode(isDark);
                }
            }["CurriculumGrid.useEffect.checkDarkMode"];
            // Verificar al cargar
            checkDarkMode();
            // Escuchar cambios en el modo del sistema
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            mediaQuery.addEventListener('change', checkDarkMode);
            return ({
                "CurriculumGrid.useEffect": ()=>{
                    mediaQuery.removeEventListener('change', checkDarkMode);
                }
            })["CurriculumGrid.useEffect"];
        }
    }["CurriculumGrid.useEffect"], []);
    // Cargar carreras disponibles al iniciar
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CurriculumGrid.useEffect": ()=>{
            const loadCareers = {
                "CurriculumGrid.useEffect.loadCareers": async ()=>{
                    try {
                        const casaCentralModule = await __turbopack_context__.r("[project]/src/data/carreras_casa_central.json (json, async loader)")(__turbopack_context__.i);
                        const vinaConcepcionModule = await __turbopack_context__.r("[project]/src/data/carreras_vina_concepcion.json (json, async loader)")(__turbopack_context__.i);
                        const casaCentralData = casaCentralModule.default;
                        const vinaConcepcionData = vinaConcepcionModule.default;
                        setCasaCentralCareers(casaCentralData);
                        setVinaConcepcionCareers(vinaConcepcionData);
                    } catch (error) {
                        console.error('Error cargando carreras:', error);
                    }
                }
            }["CurriculumGrid.useEffect.loadCareers"];
            loadCareers();
        }
    }["CurriculumGrid.useEffect"], []);
    const { subjectStates, updateSubjectState, resetCalculator, calculateCredits, isLoaded } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCalculator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCalculator"])(subjects);
    const { checkAndTriggerConfetti } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useConfetti$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfetti"])();
    const { showGraduationPlan, graduationPlan, isAnimating, playGraduationAnimation, closeGraduationPlan } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGraduationPlan$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGraduationPlan"])(subjects, subjectStates);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CurriculumGrid.useEffect": ()=>{
            const loadCareerData = {
                "CurriculumGrid.useEffect.loadCareerData": async (careerLink)=>{
                    try {
                        setLoading(true);
                        // Cargar datos de la carrera específica
                        const dataModule = await __turbopack_context__.f({
                            "@/data/data_AFI.json": {
                                id: ()=>"[project]/src/data/data_AFI.json (json, async loader)",
                                module: ()=>__turbopack_context__.r("[project]/src/data/data_AFI.json (json, async loader)")(__turbopack_context__.i)
                            },
                            "@/data/data_ARQ.json": {
                                id: ()=>"[project]/src/data/data_ARQ.json (json, async loader)",
                                module: ()=>__turbopack_context__.r("[project]/src/data/data_ARQ.json (json, async loader)")(__turbopack_context__.i)
                            },
                            "@/data/data_CIV.json": {
                                id: ()=>"[project]/src/data/data_CIV.json (json, async loader)",
                                module: ()=>__turbopack_context__.r("[project]/src/data/data_CIV.json (json, async loader)")(__turbopack_context__.i)
                            },
                            "@/data/data_CONSTRU.json": {
                                id: ()=>"[project]/src/data/data_CONSTRU.json (json, async loader)",
                                module: ()=>__turbopack_context__.r("[project]/src/data/data_CONSTRU.json (json, async loader)")(__turbopack_context__.i)
                            },
                            "@/data/data_ELI.json": {
                                id: ()=>"[project]/src/data/data_ELI.json (json, async loader)",
                                module: ()=>__turbopack_context__.r("[project]/src/data/data_ELI.json (json, async loader)")(__turbopack_context__.i)
                            },
                            "@/data/data_ELO.json": {
                                id: ()=>"[project]/src/data/data_ELO.json (json, async loader)",
                                module: ()=>__turbopack_context__.r("[project]/src/data/data_ELO.json (json, async loader)")(__turbopack_context__.i)
                            },
                            "@/data/data_FIS.json": {
                                id: ()=>"[project]/src/data/data_FIS.json (json, async loader)",
                                module: ()=>__turbopack_context__.r("[project]/src/data/data_FIS.json (json, async loader)")(__turbopack_context__.i)
                            },
                            "@/data/data_IAC.json": {
                                id: ()=>"[project]/src/data/data_IAC.json (json, async loader)",
                                module: ()=>__turbopack_context__.r("[project]/src/data/data_IAC.json (json, async loader)")(__turbopack_context__.i)
                            },
                            "@/data/data_IBT.json": {
                                id: ()=>"[project]/src/data/data_IBT.json (json, async loader)",
                                module: ()=>__turbopack_context__.r("[project]/src/data/data_IBT.json (json, async loader)")(__turbopack_context__.i)
                            },
                            "@/data/data_ICA.json": {
                                id: ()=>"[project]/src/data/data_ICA.json (json, async loader)",
                                module: ()=>__turbopack_context__.r("[project]/src/data/data_ICA.json (json, async loader)")(__turbopack_context__.i)
                            },
                            "@/data/data_ICI.json": {
                                id: ()=>"[project]/src/data/data_ICI.json (json, async loader)",
                                module: ()=>__turbopack_context__.r("[project]/src/data/data_ICI.json (json, async loader)")(__turbopack_context__.i)
                            },
                            "@/data/data_ICM.json": {
                                id: ()=>"[project]/src/data/data_ICM.json (json, async loader)",
                                module: ()=>__turbopack_context__.r("[project]/src/data/data_ICM.json (json, async loader)")(__turbopack_context__.i)
                            },
                            "@/data/data_ICOM-0.json": {
                                id: ()=>"[project]/src/data/data_ICOM-0.json (json, async loader)",
                                module: ()=>__turbopack_context__.r("[project]/src/data/data_ICOM-0.json (json, async loader)")(__turbopack_context__.i)
                            },
                            "@/data/data_ICOM.json": {
                                id: ()=>"[project]/src/data/data_ICOM.json (json, async loader)",
                                module: ()=>__turbopack_context__.r("[project]/src/data/data_ICOM.json (json, async loader)")(__turbopack_context__.i)
                            },
                            "@/data/data_ICQ.json": {
                                id: ()=>"[project]/src/data/data_ICQ.json (json, async loader)",
                                module: ()=>__turbopack_context__.r("[project]/src/data/data_ICQ.json (json, async loader)")(__turbopack_context__.i)
                            },
                            "@/data/data_IDP.json": {
                                id: ()=>"[project]/src/data/data_IDP.json (json, async loader)",
                                module: ()=>__turbopack_context__.r("[project]/src/data/data_IDP.json (json, async loader)")(__turbopack_context__.i)
                            },
                            "@/data/data_INF-0.json": {
                                id: ()=>"[project]/src/data/data_INF-0.json (json, async loader)",
                                module: ()=>__turbopack_context__.r("[project]/src/data/data_INF-0.json (json, async loader)")(__turbopack_context__.i)
                            },
                            "@/data/data_INF.json": {
                                id: ()=>"[project]/src/data/data_INF.json (json, async loader)",
                                module: ()=>__turbopack_context__.r("[project]/src/data/data_INF.json (json, async loader)")(__turbopack_context__.i)
                            },
                            "@/data/data_INGINF.json": {
                                id: ()=>"[project]/src/data/data_INGINF.json (json, async loader)",
                                module: ()=>__turbopack_context__.r("[project]/src/data/data_INGINF.json (json, async loader)")(__turbopack_context__.i)
                            },
                            "@/data/data_MAT.json": {
                                id: ()=>"[project]/src/data/data_MAT.json (json, async loader)",
                                module: ()=>__turbopack_context__.r("[project]/src/data/data_MAT.json (json, async loader)")(__turbopack_context__.i)
                            },
                            "@/data/data_MEC.json": {
                                id: ()=>"[project]/src/data/data_MEC.json (json, async loader)",
                                module: ()=>__turbopack_context__.r("[project]/src/data/data_MEC.json (json, async loader)")(__turbopack_context__.i)
                            },
                            "@/data/data_MET.json": {
                                id: ()=>"[project]/src/data/data_MET.json (json, async loader)",
                                module: ()=>__turbopack_context__.r("[project]/src/data/data_MET.json (json, async loader)")(__turbopack_context__.i)
                            },
                            "@/data/data_QUI.json": {
                                id: ()=>"[project]/src/data/data_QUI.json (json, async loader)",
                                module: ()=>__turbopack_context__.r("[project]/src/data/data_QUI.json (json, async loader)")(__turbopack_context__.i)
                            },
                            "@/data/data_TEL.json": {
                                id: ()=>"[project]/src/data/data_TEL.json (json, async loader)",
                                module: ()=>__turbopack_context__.r("[project]/src/data/data_TEL.json (json, async loader)")(__turbopack_context__.i)
                            }
                        }).import("@/data/data_".concat(careerLink, ".json"));
                        const colorsModule = await __turbopack_context__.f({
                            "@/data/colors_AFI.json": {
                                id: ()=>"[project]/src/data/colors_AFI.json (json, async loader)",
                                module: ()=>__turbopack_context__.r("[project]/src/data/colors_AFI.json (json, async loader)")(__turbopack_context__.i)
                            },
                            "@/data/colors_ARQ.json": {
                                id: ()=>"[project]/src/data/colors_ARQ.json (json, async loader)",
                                module: ()=>__turbopack_context__.r("[project]/src/data/colors_ARQ.json (json, async loader)")(__turbopack_context__.i)
                            },
                            "@/data/colors_CIV.json": {
                                id: ()=>"[project]/src/data/colors_CIV.json (json, async loader)",
                                module: ()=>__turbopack_context__.r("[project]/src/data/colors_CIV.json (json, async loader)")(__turbopack_context__.i)
                            },
                            "@/data/colors_CONSTRU.json": {
                                id: ()=>"[project]/src/data/colors_CONSTRU.json (json, async loader)",
                                module: ()=>__turbopack_context__.r("[project]/src/data/colors_CONSTRU.json (json, async loader)")(__turbopack_context__.i)
                            },
                            "@/data/colors_ELI.json": {
                                id: ()=>"[project]/src/data/colors_ELI.json (json, async loader)",
                                module: ()=>__turbopack_context__.r("[project]/src/data/colors_ELI.json (json, async loader)")(__turbopack_context__.i)
                            },
                            "@/data/colors_ELO.json": {
                                id: ()=>"[project]/src/data/colors_ELO.json (json, async loader)",
                                module: ()=>__turbopack_context__.r("[project]/src/data/colors_ELO.json (json, async loader)")(__turbopack_context__.i)
                            },
                            "@/data/colors_FIS.json": {
                                id: ()=>"[project]/src/data/colors_FIS.json (json, async loader)",
                                module: ()=>__turbopack_context__.r("[project]/src/data/colors_FIS.json (json, async loader)")(__turbopack_context__.i)
                            },
                            "@/data/colors_IAC.json": {
                                id: ()=>"[project]/src/data/colors_IAC.json (json, async loader)",
                                module: ()=>__turbopack_context__.r("[project]/src/data/colors_IAC.json (json, async loader)")(__turbopack_context__.i)
                            },
                            "@/data/colors_IBT.json": {
                                id: ()=>"[project]/src/data/colors_IBT.json (json, async loader)",
                                module: ()=>__turbopack_context__.r("[project]/src/data/colors_IBT.json (json, async loader)")(__turbopack_context__.i)
                            },
                            "@/data/colors_ICA.json": {
                                id: ()=>"[project]/src/data/colors_ICA.json (json, async loader)",
                                module: ()=>__turbopack_context__.r("[project]/src/data/colors_ICA.json (json, async loader)")(__turbopack_context__.i)
                            },
                            "@/data/colors_ICI.json": {
                                id: ()=>"[project]/src/data/colors_ICI.json (json, async loader)",
                                module: ()=>__turbopack_context__.r("[project]/src/data/colors_ICI.json (json, async loader)")(__turbopack_context__.i)
                            },
                            "@/data/colors_ICM.json": {
                                id: ()=>"[project]/src/data/colors_ICM.json (json, async loader)",
                                module: ()=>__turbopack_context__.r("[project]/src/data/colors_ICM.json (json, async loader)")(__turbopack_context__.i)
                            },
                            "@/data/colors_ICOM-0.json": {
                                id: ()=>"[project]/src/data/colors_ICOM-0.json (json, async loader)",
                                module: ()=>__turbopack_context__.r("[project]/src/data/colors_ICOM-0.json (json, async loader)")(__turbopack_context__.i)
                            },
                            "@/data/colors_ICOM.json": {
                                id: ()=>"[project]/src/data/colors_ICOM.json (json, async loader)",
                                module: ()=>__turbopack_context__.r("[project]/src/data/colors_ICOM.json (json, async loader)")(__turbopack_context__.i)
                            },
                            "@/data/colors_ICQ.json": {
                                id: ()=>"[project]/src/data/colors_ICQ.json (json, async loader)",
                                module: ()=>__turbopack_context__.r("[project]/src/data/colors_ICQ.json (json, async loader)")(__turbopack_context__.i)
                            },
                            "@/data/colors_IDP.json": {
                                id: ()=>"[project]/src/data/colors_IDP.json (json, async loader)",
                                module: ()=>__turbopack_context__.r("[project]/src/data/colors_IDP.json (json, async loader)")(__turbopack_context__.i)
                            },
                            "@/data/colors_INF-0.json": {
                                id: ()=>"[project]/src/data/colors_INF-0.json (json, async loader)",
                                module: ()=>__turbopack_context__.r("[project]/src/data/colors_INF-0.json (json, async loader)")(__turbopack_context__.i)
                            },
                            "@/data/colors_INF.json": {
                                id: ()=>"[project]/src/data/colors_INF.json (json, async loader)",
                                module: ()=>__turbopack_context__.r("[project]/src/data/colors_INF.json (json, async loader)")(__turbopack_context__.i)
                            },
                            "@/data/colors_INGINF.json": {
                                id: ()=>"[project]/src/data/colors_INGINF.json (json, async loader)",
                                module: ()=>__turbopack_context__.r("[project]/src/data/colors_INGINF.json (json, async loader)")(__turbopack_context__.i)
                            },
                            "@/data/colors_MAT.json": {
                                id: ()=>"[project]/src/data/colors_MAT.json (json, async loader)",
                                module: ()=>__turbopack_context__.r("[project]/src/data/colors_MAT.json (json, async loader)")(__turbopack_context__.i)
                            },
                            "@/data/colors_MEC.json": {
                                id: ()=>"[project]/src/data/colors_MEC.json (json, async loader)",
                                module: ()=>__turbopack_context__.r("[project]/src/data/colors_MEC.json (json, async loader)")(__turbopack_context__.i)
                            },
                            "@/data/colors_MET.json": {
                                id: ()=>"[project]/src/data/colors_MET.json (json, async loader)",
                                module: ()=>__turbopack_context__.r("[project]/src/data/colors_MET.json (json, async loader)")(__turbopack_context__.i)
                            },
                            "@/data/colors_QUI.json": {
                                id: ()=>"[project]/src/data/colors_QUI.json (json, async loader)",
                                module: ()=>__turbopack_context__.r("[project]/src/data/colors_QUI.json (json, async loader)")(__turbopack_context__.i)
                            },
                            "@/data/colors_TEL.json": {
                                id: ()=>"[project]/src/data/colors_TEL.json (json, async loader)",
                                module: ()=>__turbopack_context__.r("[project]/src/data/colors_TEL.json (json, async loader)")(__turbopack_context__.i)
                            }
                        }).import("@/data/colors_".concat(careerLink, ".json"));
                        // Buscar la carrera en ambos campus
                        const allCareers = [
                            ...casaCentralCareers,
                            ...vinaConcepcionCareers
                        ];
                        const career = allCareers.find({
                            "CurriculumGrid.useEffect.loadCareerData.career": (carrera)=>carrera.Link === careerLink
                        }["CurriculumGrid.useEffect.loadCareerData.career"]);
                        const data = dataModule.default;
                        const colorsData = colorsModule.default;
                        // Obtener el nombre y color de la carrera
                        const careerNameFromJson = (career === null || career === void 0 ? void 0 : career.Nombre) || 'Carrera Desconocida';
                        setCareerName(careerNameFromJson);
                        setCareerColor(career === null || career === void 0 ? void 0 : career.Color);
                        // Procesar datos
                        const processedSubjects = [];
                        Object.entries(data).forEach({
                            "CurriculumGrid.useEffect.loadCareerData": (param)=>{
                                let [semester, semesterSubjects] = param;
                                semesterSubjects.forEach({
                                    "CurriculumGrid.useEffect.loadCareerData": (subjectArray)=>{
                                        const [name, code, usmCredits, sctCredits, type, prerequisites] = subjectArray;
                                        processedSubjects.push({
                                            name: name,
                                            code: code,
                                            usmCredits: usmCredits,
                                            sctCredits: Number(sctCredits),
                                            type: type,
                                            prerequisites: prerequisites || [],
                                            semester
                                        });
                                    }
                                }["CurriculumGrid.useEffect.loadCareerData"]);
                            }
                        }["CurriculumGrid.useEffect.loadCareerData"]);
                        setSubjects(processedSubjects);
                        setColors(colorsData);
                        setLoading(false);
                        setShowCareerSelector(false);
                    } catch (error) {
                        console.error('Error loading career data:', error);
                        setLoading(false);
                    }
                }
            }["CurriculumGrid.useEffect.loadCareerData"];
            // Solo cargar si hay una carrera seleccionada
            if (selectedCareer) {
                loadCareerData(selectedCareer);
            }
        }
    }["CurriculumGrid.useEffect"], [
        selectedCareer
    ]);
    // Función para seleccionar carrera
    const handleCareerSelection = (careerLink)=>{
        setSelectedCareer(careerLink);
    };
    const stats = calculateCredits();
    // Verificar si se alcanzó el 100% para lanzar confetti
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CurriculumGrid.useEffect": ()=>{
            if (stats.percentage >= 100) {
                checkAndTriggerConfetti();
            }
        }
    }["CurriculumGrid.useEffect"], [
        stats.percentage,
        checkAndTriggerConfetti
    ]);
    const getSemesterSubjects = (semester)=>{
        return subjects.filter((subject)=>subject.semester === semester);
    };
    const getSemesterTitle = (semester)=>{
        const semesterNumber = semester.replace('s', '');
        return "".concat(semesterNumber, "° Semestre");
    };
    const getSemesterCredits = (semester)=>{
        return getSemesterSubjects(semester).reduce((total, subject)=>total + Number(subject.sctCredits), 0);
    };
    const getSemesterApprovedCredits = (semester)=>{
        return getSemesterSubjects(semester).reduce((total, subject)=>{
            const state = subjectStates[subject.code];
            return total + ((state === null || state === void 0 ? void 0 : state.status) === 'approved' ? Number(subject.sctCredits) : 0);
        }, 0);
    };
    const scrollToSubject = (subjectCode)=>{
        const element = subjectRefs.current[subjectCode];
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
            // Destacar brevemente la tarjeta con animación
            element.classList.add('ring-4', 'ring-blue-400', 'ring-opacity-75', 'transform', 'scale-105');
            setTimeout(()=>{
                element.classList.remove('ring-4', 'ring-blue-400', 'ring-opacity-75', 'transform', 'scale-105');
            }, 2000);
        }
    };
    const findSubjectByCode = (code)=>{
        return subjects.find((subject)=>subject.code === code);
    };
    if (loading && selectedCareer || !isLoaded && subjects.length > 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center min-h-screen ".concat(darkMode ? 'bg-gray-900' : 'bg-gray-50'),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-32 w-32 border-b-2 ".concat(darkMode ? 'border-blue-400' : 'border-blue-600')
                    }, void 0, false, {
                        fileName: "[project]/src/components/CurriculumGrid.tsx",
                        lineNumber: 189,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm ".concat(darkMode ? 'text-gray-300' : 'text-gray-600'),
                        children: loading ? 'Cargando malla curricular...' : 'Restaurando progreso...'
                    }, void 0, false, {
                        fileName: "[project]/src/components/CurriculumGrid.tsx",
                        lineNumber: 190,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CurriculumGrid.tsx",
                lineNumber: 188,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/CurriculumGrid.tsx",
            lineNumber: 187,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen p-2 pb-32 ".concat(darkMode ? 'bg-gray-900' : 'bg-gray-50'),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full mx-auto",
                children: selectedCareer && !showCareerSelector && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-bold mb-6 text-center",
                                    style: careerColor ? {
                                        color: careerColor
                                    } : {},
                                    children: careerName
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CurriculumGrid.tsx",
                                    lineNumber: 206,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 gap-2",
                                    children: Array.from({
                                        length: 8
                                    }, (_, i)=>"s".concat(i + 1)).map((semester)=>{
                                        const semesterSubjects = getSemesterSubjects(semester);
                                        const semesterCredits = getSemesterCredits(semester);
                                        const approvedCredits = getSemesterApprovedCredits(semester);
                                        if (semesterSubjects.length === 0) return null;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col w-full rounded-2xl shadow-md border ".concat(darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-100 border-gray-200'),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-t-2xl p-3 text-center border-b ".concat(darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-200 border-gray-300'),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "font-bold text-sm ".concat(darkMode ? 'text-gray-100' : 'text-gray-800'),
                                                            children: getSemesterTitle(semester)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CurriculumGrid.tsx",
                                                            lineNumber: 229,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs mt-1 ".concat(darkMode ? 'text-gray-300' : 'text-gray-700'),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-medium",
                                                                    children: approvedCredits
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CurriculumGrid.tsx",
                                                                    lineNumber: 237,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "mx-1",
                                                                    children: "/"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CurriculumGrid.tsx",
                                                                    lineNumber: 238,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: [
                                                                        semesterCredits,
                                                                        " créditos"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/CurriculumGrid.tsx",
                                                                    lineNumber: 239,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CurriculumGrid.tsx",
                                                            lineNumber: 234,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-full rounded-full h-2 mt-2 overflow-hidden ".concat(darkMode ? 'bg-gray-600' : 'bg-gray-300'),
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full transition-all duration-500 shadow-sm",
                                                                style: {
                                                                    width: "".concat(semesterCredits > 0 ? approvedCredits / semesterCredits * 100 : 0, "%")
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CurriculumGrid.tsx",
                                                                lineNumber: 244,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CurriculumGrid.tsx",
                                                            lineNumber: 241,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CurriculumGrid.tsx",
                                                    lineNumber: 226,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col gap-3 p-3 rounded-b-2xl",
                                                    children: semesterSubjects.map((subject)=>{
                                                        var _colors_subject_type, _colors_subject_type1;
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            ref: (el)=>{
                                                                subjectRefs.current[subject.code] = el;
                                                            },
                                                            className: "transition-all duration-300 ease-in-out",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SubjectCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                subject: subject,
                                                                state: subjectStates[subject.code],
                                                                onStateChange: (state)=>updateSubjectState(subject.code, state),
                                                                color: ((_colors_subject_type = colors[subject.type]) === null || _colors_subject_type === void 0 ? void 0 : _colors_subject_type[0]) || '#6B7280',
                                                                categoryName: ((_colors_subject_type1 = colors[subject.type]) === null || _colors_subject_type1 === void 0 ? void 0 : _colors_subject_type1[1]) || 'Sin categoría',
                                                                onPrerequisiteClick: scrollToSubject,
                                                                findSubjectByCode: findSubjectByCode,
                                                                subjectStates: subjectStates,
                                                                colors: colors,
                                                                darkMode: darkMode
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CurriculumGrid.tsx",
                                                                lineNumber: 261,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, subject.code, false, {
                                                            fileName: "[project]/src/components/CurriculumGrid.tsx",
                                                            lineNumber: 254,
                                                            columnNumber: 23
                                                        }, this);
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CurriculumGrid.tsx",
                                                    lineNumber: 252,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, semester, true, {
                                            fileName: "[project]/src/components/CurriculumGrid.tsx",
                                            lineNumber: 222,
                                            columnNumber: 17
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CurriculumGrid.tsx",
                                    lineNumber: 213,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CurriculumGrid.tsx",
                            lineNumber: 205,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-12 text-center text-sm ".concat(darkMode ? 'text-gray-400' : 'text-gray-500'),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Universidad Técnica Federico Santa María"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CurriculumGrid.tsx",
                                    lineNumber: 286,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: careerName
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CurriculumGrid.tsx",
                                    lineNumber: 287,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CurriculumGrid.tsx",
                            lineNumber: 283,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/src/components/CurriculumGrid.tsx",
                lineNumber: 200,
                columnNumber: 7
            }, this),
            selectedCareer && !showCareerSelector && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StatsBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                stats: stats,
                onShowCategories: ()=>setShowCategoriesPopup(true),
                onReset: resetCalculator,
                onPlayGraduationPlan: playGraduationAnimation,
                darkMode: darkMode
            }, void 0, false, {
                fileName: "[project]/src/components/CurriculumGrid.tsx",
                lineNumber: 295,
                columnNumber: 9
            }, this),
            showCategoriesPopup && selectedCareer && !showCareerSelector && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/30 backdrop-blur-sm z-60 flex items-center justify-center p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "backdrop-blur-lg rounded-3xl shadow-2xl border max-w-4xl w-full max-h-[80vh] overflow-hidden ".concat(darkMode ? 'bg-gray-800/95 border-gray-600' : 'bg-white/95 border-white/30'),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "backdrop-blur-lg text-white p-6 flex items-center justify-between ".concat(darkMode ? 'bg-gray-700/80' : 'bg-gradient-to-r from-blue-600/80 to-indigo-600/80'),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-8 backdrop-blur-sm rounded-2xl flex items-center justify-center ".concat(darkMode ? 'bg-gray-600/50' : 'bg-white/20'),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faInfoCircle"],
                                                className: "text-white"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CurriculumGrid.tsx",
                                                lineNumber: 318,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CurriculumGrid.tsx",
                                            lineNumber: 315,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold",
                                                    children: "Categorías de Asignaturas"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CurriculumGrid.tsx",
                                                    lineNumber: 321,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-white/80",
                                                    children: "Colores utilizados para organizar las materias por área"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CurriculumGrid.tsx",
                                                    lineNumber: 322,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CurriculumGrid.tsx",
                                            lineNumber: 320,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CurriculumGrid.tsx",
                                    lineNumber: 314,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowCategoriesPopup(false),
                                    className: "text-white/80 hover:text-white transition-colors p-2 rounded-2xl backdrop-blur-sm ".concat(darkMode ? 'hover:bg-gray-600/30' : 'hover:bg-white/10'),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faTimes"]
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CurriculumGrid.tsx",
                                        lineNumber: 333,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CurriculumGrid.tsx",
                                    lineNumber: 327,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CurriculumGrid.tsx",
                            lineNumber: 311,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 overflow-y-auto max-h-[60vh]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                                children: Object.entries(colors).map((param)=>{
                                    let [key, colorArray] = param;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "backdrop-blur-sm rounded-2xl p-4 transition-all duration-300 border hover:shadow-lg ".concat(darkMode ? 'bg-gray-700/50 hover:bg-gray-700/70 border-gray-600' : 'bg-white/50 hover:bg-white/60 border-gray-200'),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-6 h-6 rounded-full shadow-lg border-2 border-white/30 flex-shrink-0",
                                                    style: {
                                                        backgroundColor: colorArray[0]
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CurriculumGrid.tsx",
                                                    lineNumber: 350,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-medium ".concat(darkMode ? 'text-gray-200' : 'text-gray-800'),
                                                        children: colorArray[1]
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CurriculumGrid.tsx",
                                                        lineNumber: 355,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CurriculumGrid.tsx",
                                                    lineNumber: 354,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CurriculumGrid.tsx",
                                            lineNumber: 349,
                                            columnNumber: 21
                                        }, this)
                                    }, key, false, {
                                        fileName: "[project]/src/components/CurriculumGrid.tsx",
                                        lineNumber: 341,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/CurriculumGrid.tsx",
                                lineNumber: 339,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/CurriculumGrid.tsx",
                            lineNumber: 338,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CurriculumGrid.tsx",
                    lineNumber: 307,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/CurriculumGrid.tsx",
                lineNumber: 306,
                columnNumber: 9
            }, this),
            showCareerSelector && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-70 flex items-center justify-center p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "backdrop-blur-lg rounded-3xl shadow-2xl border max-w-5xl w-full max-h-[80vh] overflow-hidden ".concat(darkMode ? 'bg-gray-800/95 border-gray-600' : 'bg-white/95 border-white/30'),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "backdrop-blur-sm border-b p-6 ".concat(darkMode ? 'bg-gray-700/50 border-gray-600' : 'bg-gray-50/80 border-gray-200'),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl font-bold ".concat(darkMode ? 'text-white' : 'text-gray-900'),
                                            children: "Selecciona tu Carrera"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CurriculumGrid.tsx",
                                            lineNumber: 380,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm mt-1 ".concat(darkMode ? 'text-gray-300' : 'text-gray-600'),
                                            children: "Elige la carrera para ver su malla curricular interactiva"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CurriculumGrid.tsx",
                                            lineNumber: 383,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CurriculumGrid.tsx",
                                    lineNumber: 379,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/CurriculumGrid.tsx",
                                lineNumber: 378,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/CurriculumGrid.tsx",
                            lineNumber: 375,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 overflow-y-auto max-h-[60vh]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold mb-4 ".concat(darkMode ? 'text-white' : 'text-gray-800'),
                                            children: "Casa Central / San Joaquín"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CurriculumGrid.tsx",
                                            lineNumber: 394,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                                            children: casaCentralCareers.map((career)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleCareerSelection(career.Link),
                                                    className: "backdrop-blur-sm rounded-2xl p-4 transition-all duration-300 border hover:shadow-lg hover:scale-105 text-left ".concat(darkMode ? 'bg-gray-700/30 border-gray-600 hover:bg-gray-600/40' : 'bg-white/40 border-white/50 hover:bg-white/60'),
                                                    style: {
                                                        borderColor: career.Color ? "".concat(career.Color, "40") : undefined,
                                                        backgroundColor: career.Color ? "".concat(career.Color, "10") : undefined
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-4 h-4 rounded-full flex-shrink-0",
                                                                style: {
                                                                    backgroundColor: career.Color || '#6B7280'
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CurriculumGrid.tsx",
                                                                lineNumber: 413,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-sm font-medium ".concat(darkMode ? 'text-gray-200' : 'text-gray-800'),
                                                                        children: career.Nombre
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CurriculumGrid.tsx",
                                                                        lineNumber: 418,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-xs mt-1 ".concat(darkMode ? 'text-gray-400' : 'text-gray-600'),
                                                                        children: career.Link
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CurriculumGrid.tsx",
                                                                        lineNumber: 423,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CurriculumGrid.tsx",
                                                                lineNumber: 417,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CurriculumGrid.tsx",
                                                        lineNumber: 412,
                                                        columnNumber: 23
                                                    }, this)
                                                }, career.Link, false, {
                                                    fileName: "[project]/src/components/CurriculumGrid.tsx",
                                                    lineNumber: 399,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CurriculumGrid.tsx",
                                            lineNumber: 397,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CurriculumGrid.tsx",
                                    lineNumber: 393,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold mb-4 ".concat(darkMode ? 'text-white' : 'text-gray-800'),
                                            children: "Viña del Mar / Concepción"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CurriculumGrid.tsx",
                                            lineNumber: 437,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                                            children: vinaConcepcionCareers.map((career)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleCareerSelection(career.Link),
                                                    className: "backdrop-blur-sm rounded-2xl p-4 transition-all duration-300 border hover:shadow-lg hover:scale-105 text-left ".concat(darkMode ? 'bg-gray-700/30 border-gray-600 hover:bg-gray-600/40' : 'bg-white/40 border-white/50 hover:bg-white/60'),
                                                    style: {
                                                        borderColor: career.Color ? "".concat(career.Color, "40") : undefined,
                                                        backgroundColor: career.Color ? "".concat(career.Color, "10") : undefined
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-4 h-4 rounded-full flex-shrink-0",
                                                                style: {
                                                                    backgroundColor: career.Color || '#6B7280'
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CurriculumGrid.tsx",
                                                                lineNumber: 456,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-sm font-medium ".concat(darkMode ? 'text-gray-200' : 'text-gray-800'),
                                                                        children: career.Nombre
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CurriculumGrid.tsx",
                                                                        lineNumber: 461,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-xs mt-1 ".concat(darkMode ? 'text-gray-400' : 'text-gray-600'),
                                                                        children: career.Link
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CurriculumGrid.tsx",
                                                                        lineNumber: 466,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CurriculumGrid.tsx",
                                                                lineNumber: 460,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CurriculumGrid.tsx",
                                                        lineNumber: 455,
                                                        columnNumber: 23
                                                    }, this)
                                                }, career.Link, false, {
                                                    fileName: "[project]/src/components/CurriculumGrid.tsx",
                                                    lineNumber: 442,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CurriculumGrid.tsx",
                                            lineNumber: 440,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CurriculumGrid.tsx",
                                    lineNumber: 436,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CurriculumGrid.tsx",
                            lineNumber: 391,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CurriculumGrid.tsx",
                    lineNumber: 371,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/CurriculumGrid.tsx",
                lineNumber: 370,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GraduationPlanModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                show: showGraduationPlan,
                graduationPlan: graduationPlan,
                isAnimating: isAnimating,
                onClose: closeGraduationPlan,
                colors: colors
            }, void 0, false, {
                fileName: "[project]/src/components/CurriculumGrid.tsx",
                lineNumber: 483,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CurriculumGrid.tsx",
        lineNumber: 199,
        columnNumber: 5
    }, this);
}
_s(CurriculumGrid, "Ia09oKLkULBRaGClGF+02MOBawg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCalculator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCalculator"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useConfetti$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfetti"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGraduationPlan$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGraduationPlan"]
    ];
});
_c = CurriculumGrid;
var _c;
__turbopack_context__.k.register(_c, "CurriculumGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_b0f6a6a5._.js.map