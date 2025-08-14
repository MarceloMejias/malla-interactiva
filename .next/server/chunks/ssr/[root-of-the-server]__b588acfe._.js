module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/src/components/SubjectCard.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>SubjectCard
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/react-fontawesome/index.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/free-solid-svg-icons/index.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
function SubjectCard({ subject, state, onStateChange, color, categoryName, onPrerequisiteClick, findSubjectByCode, subjectStates, colors, darkMode = false }) {
    const canTakeSubject = ()=>{
        // Si no tiene prerrequisitos, siempre se puede tomar
        if (subject.prerequisites.length === 0) return true;
        // Verificar que todos los prerrequisitos estén aprobados
        return subject.prerequisites.every((prereqCode)=>{
            const prereqState = subjectStates[prereqCode];
            return prereqState?.status === 'approved';
        });
    };
    const isBlocked = !canTakeSubject() && state?.status !== 'approved';
    // Devuelve clases de texto y borde con el color de la categoría como texto
    const getStatusColor = ()=>{
        if (isBlocked) {
            return 'border-gray-300 cursor-not-allowed';
        }
        switch(state?.status){
            case 'approved':
                return 'border-green-300';
            default:
                return 'border-gray-200 hover:border-gray-400';
        }
    };
    // El color del texto principal (ahora blanco para contrastar con el fondo de color)
    const getTextColor = ()=>{
        if (isBlocked) return '#9ca3af'; // gray-400
        if (state?.status === 'approved') return '#fff'; // blanco para green-50
        // blanco para contrastar con el color de fondo
        return '#fff';
    };
    // El fondo ahora usa el color de la categoría
    const getBackgroundColor = ()=>{
        if (isBlocked) return darkMode ? '#4b5563' : '#6b7280'; // gray-600 (dark) / gray-500 (light)
        if (state?.status === 'approved') return '#10b981'; // green-500 (same for both modes)
        // color de la categoría del JSON
        return color || (darkMode ? '#374151' : '#fff'); // gray-700 (dark) / white (light)
    };
    const handleClick = ()=>{
        // No permitir cambios si está bloqueada (excepto si ya está aprobada)
        if (isBlocked) return;
        // Alternar entre pendiente y aprobado con un simple click
        const newStatus = state?.status === 'approved' ? 'pending' : 'approved';
        onStateChange({
            status: newStatus
        });
    };
    const PrerequisiteChip = ({ prereqCode })=>{
        const prereqSubject = findSubjectByCode(prereqCode);
        const prereqState = subjectStates[prereqCode];
        if (!prereqSubject) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "inline-block text-xs px-2 py-1 rounded bg-white/20 text-white/80",
                children: prereqCode
            }, void 0, false, {
                fileName: "[project]/src/components/SubjectCard.tsx",
                lineNumber: 88,
                columnNumber: 9
            }, this);
        }
        // Color de la categoría del prerrequisito
        const prereqColor = colors[prereqSubject.type]?.[0] || '#6b7280';
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: (e)=>{
                e.stopPropagation();
                onPrerequisiteClick(prereqCode);
            },
            className: `inline-flex items-center gap-1 text-xs px-1.5 py-0.5 rounded font-bold text-white hover:brightness-110 transition-all`,
            style: {
                backgroundColor: prereqColor
            },
            title: `${prereqSubject.name} (${prereqCode}) - Click para ir al ramo`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: prereqCode
                }, void 0, false, {
                    fileName: "[project]/src/components/SubjectCard.tsx",
                    lineNumber: 105,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `w-2 h-2 rounded-full border border-white ${prereqState?.status === 'approved' ? 'bg-green-400' : 'bg-red-400'}`
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative group w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `relative rounded-xl border ${getStatusColor()} cursor-pointer transition-all duration-300 overflow-hidden shadow-md hover:shadow-lg transform hover:scale-[1.02] min-h-[100px] flex flex-col w-full`,
            style: {
                backgroundColor: getBackgroundColor()
            },
            onClick: handleClick,
            title: isBlocked ? `${subject.name} - Bloqueada: completa los prerrequisitos primero` : `${subject.name} - Click para ${state?.status === 'approved' ? 'marcar como pendiente' : 'marcar como aprobada'}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `absolute top-0 left-0 ${darkMode ? 'bg-gray-800/90' : 'bg-white/85'} rounded-br-lg px-2 py-0.5`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `absolute top-0 right-0 ${darkMode ? 'bg-gray-800/90' : 'bg-white/85'} rounded-bl-lg px-2 py-0.5`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                isBlocked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `absolute bottom-0 right-0 ${darkMode ? 'bg-gray-800/90' : 'bg-white/85'} rounded-tl-lg px-2 py-0.5`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faLock"],
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 px-3 pt-10 pb-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-bold text-xs leading-tight text-white mb-1 flex items-center gap-1",
                            children: subject.name
                        }, void 0, false, {
                            fileName: "[project]/src/components/SubjectCard.tsx",
                            lineNumber: 150,
                            columnNumber: 11
                        }, this),
                        subject.prerequisites.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-1",
                                children: subject.prerequisites.map((prereq)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PrerequisiteChip, {
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
}),
"[project]/src/components/StatsBar.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>StatsBar
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/react-fontawesome/index.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/free-solid-svg-icons/index.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
function StatsBar({ stats, onShowCategories, onReset, onPlayGraduationPlan, darkMode = false }) {
    const handleReset = ()=>{
        onReset();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed bottom-4 left-4 right-4 z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `${darkMode ? 'bg-gray-800/90 border-gray-600' : 'bg-white/80 border-gray-200'} rounded-xl shadow-lg border p-4 mx-auto max-w-3xl`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-lg font-bold text-green-600",
                                        children: stats.approvedCredits
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/StatsBar.tsx",
                                        lineNumber: 34,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`,
                                        children: "Créditos"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/StatsBar.tsx",
                                        lineNumber: 37,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`,
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-lg font-bold text-blue-600",
                                        children: stats.approvedSubjects
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/StatsBar.tsx",
                                        lineNumber: 41,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`,
                                        children: "Asignaturas"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/StatsBar.tsx",
                                        lineNumber: 44,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`,
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 flex-1 justify-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center flex-shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`,
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 max-w-xs",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `w-full ${darkMode ? 'bg-gray-600' : 'bg-gray-200'} rounded-full h-2 overflow-hidden`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-500",
                                        style: {
                                            width: `${stats.percentage}%`
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onPlayGraduationPlan,
                                className: "w-9 h-9 bg-green-500 hover:bg-green-600 text-white rounded-full transition-all duration-300 flex items-center justify-center hover:shadow-md hover:scale-105",
                                title: "Ver plan de graduación",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faPlay"],
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onShowCategories,
                                className: "w-9 h-9 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-all duration-300 flex items-center justify-center hover:shadow-md hover:scale-105",
                                title: "Ver categorías de asignaturas",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faInfoCircle"],
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleReset,
                                className: "w-9 h-9 bg-red-500 hover:bg-red-600 text-white rounded-full transition-all duration-300 flex items-center justify-center hover:shadow-md hover:scale-105",
                                title: "Reiniciar progreso",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faRotateLeft"],
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
}),
"[project]/src/components/GraduationPlanModal.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>GraduationPlanModal
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/react-fontawesome/index.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/free-solid-svg-icons/index.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function GraduationPlanModal({ show, graduationPlan, isAnimating, onClose, colors }) {
    const [visibleSemesters, setVisibleSemesters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isAnimating && graduationPlan.length > 0) {
            setVisibleSemesters(0);
            const interval = setInterval(()=>{
                setVisibleSemesters((prev)=>{
                    if (prev >= graduationPlan.length) {
                        clearInterval(interval);
                        return prev;
                    }
                    return prev + 1;
                });
            }, 1000); // Mostrar un semestre cada segundo
            return ()=>clearInterval(interval);
        }
    }, [
        isAnimating,
        graduationPlan.length
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (show && !isAnimating) {
            setVisibleSemesters(graduationPlan.length);
        }
    }, [
        show,
        isAnimating,
        graduationPlan.length
    ]);
    if (!show) return null;
    const totalSemesters = graduationPlan.length;
    const totalCredits = graduationPlan.reduce((sum, semester)=>sum + semester.credits, 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/30 backdrop-blur-sm z-60 flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/30 max-w-6xl w-full max-h-[80vh] overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-gradient-to-r from-green-600/80 to-blue-600/80 backdrop-blur-lg text-white p-6 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-8 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faGraduationCap"],
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold",
                                            children: "Plan de Graduación"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/GraduationPlanModal.tsx",
                                            lineNumber: 75,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "text-white/80 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-2xl backdrop-blur-sm",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faTimes"]
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 overflow-y-auto max-h-[60vh]",
                    children: [
                        graduationPlan.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center py-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faGraduationCap"],
                                    className: "text-6xl text-green-500 mb-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/GraduationPlanModal.tsx",
                                    lineNumber: 93,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-2xl font-bold text-gray-800 mb-2",
                                    children: "¡Felicitaciones!"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/GraduationPlanModal.tsx",
                                    lineNumber: 94,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
                            children: graduationPlan.slice(0, visibleSemesters).map((semesterPlan, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `bg-white/50 backdrop-blur-sm rounded-2xl p-4 border border-gray-200 transition-all duration-500 transform ${isAnimating && index === visibleSemesters - 1 ? 'scale-105 ring-2 ring-blue-400 shadow-lg' : 'scale-100'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faCalendarAlt"],
                                                    className: "text-blue-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/GraduationPlanModal.tsx",
                                                    lineNumber: 110,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "font-bold text-gray-800",
                                                            children: semesterPlan.semester
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/GraduationPlanModal.tsx",
                                                            lineNumber: 112,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: semesterPlan.subjects.map((subject)=>{
                                                const subjectColor = colors[subject.type]?.[0] || '#6b7280';
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-2 rounded-lg text-white text-xs font-medium shadow-sm",
                                                    style: {
                                                        backgroundColor: subjectColor
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-bold",
                                                            children: subject.code
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/GraduationPlanModal.tsx",
                                                            lineNumber: 131,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-white/90 text-xs truncate",
                                                            title: subject.name,
                                                            children: subject.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/GraduationPlanModal.tsx",
                                                            lineNumber: 132,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        isAnimating && graduationPlan.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 text-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-2 h-2 bg-blue-500 rounded-full animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GraduationPlanModal.tsx",
                                        lineNumber: 151,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
}),
"[project]/src/hooks/useCalculator.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "useCalculator": ()=>useCalculator
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const STORAGE_KEY_PREFIX = 'curriculum-progress';
function useCalculator(subjects, careerKey) {
    const [subjectStates, setSubjectStates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Generar clave única para cada carrera
    const getStorageKey = (career)=>`${STORAGE_KEY_PREFIX}-${career}`;
    // Cargar el progreso guardado al inicializar o cambiar de carrera
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!careerKey) {
            setIsLoaded(true);
            return;
        }
        try {
            const storageKey = getStorageKey(careerKey);
            const savedProgress = localStorage.getItem(storageKey);
            if (savedProgress) {
                const parsedProgress = JSON.parse(savedProgress);
                setSubjectStates(parsedProgress);
            } else {
                // Si no hay progreso guardado para esta carrera, inicializar vacío
                setSubjectStates({});
            }
        } catch (error) {
            console.error('Error loading saved progress:', error);
            setSubjectStates({});
        } finally{
            setIsLoaded(true);
        }
    }, [
        careerKey
    ]);
    // Guardar el progreso cada vez que cambie el estado
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isLoaded && careerKey && Object.keys(subjectStates).length >= 0) {
            try {
                const storageKey = getStorageKey(careerKey);
                localStorage.setItem(storageKey, JSON.stringify(subjectStates));
            } catch (error) {
                console.error('Error saving progress:', error);
            }
        }
    }, [
        subjectStates,
        isLoaded,
        careerKey
    ]);
    const updateSubjectState = (code, state)=>{
        setSubjectStates((prev)=>({
                ...prev,
                [code]: state
            }));
    };
    const resetCalculator = ()=>{
        setSubjectStates({});
        if (careerKey) {
            try {
                const storageKey = getStorageKey(careerKey);
                localStorage.removeItem(storageKey);
            } catch (error) {
                console.error('Error clearing saved progress:', error);
            }
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
            if (state?.status === 'approved') {
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
}),
"[project]/src/hooks/useConfetti.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "useConfetti": ()=>useConfetti
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useConfetti() {
    const checkAndTriggerConfetti = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }, []);
    return {
        checkAndTriggerConfetti
    };
}
}),
"[project]/src/hooks/useGraduationPlan.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "useGraduationPlan": ()=>useGraduationPlan
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const useGraduationPlan = (subjects, subjectStates)=>{
    const [showGraduationPlan, setShowGraduationPlan] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [graduationPlan, setGraduationPlan] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isAnimating, setIsAnimating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
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
        // Estudiantes de primer semestre solo pueden tomar materias de s1
        if (currentLevel === 's1') {
            return subjectIndex === 0; // Solo s1
        }
        // Estudiantes de segundo semestre pueden tomar s1 y s2
        if (currentLevel === 's2') {
            return subjectIndex <= 1; // s1 o s2
        }
        // Estudiantes de tercer semestre en adelante pueden tomar cualquier materia
        // siempre que cumplan los prerrequisitos (verificado en isSubjectAvailable)
        return true;
    };
    const calculateGraduationPlan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        // Obtener materias no aprobadas
        const pendingSubjects = subjects.filter((subject)=>!subjectStates[subject.code]?.status || subjectStates[subject.code].status !== 'approved');
        if (pendingSubjects.length === 0) {
            setGraduationPlan([]);
            return;
        }
        // Materias ya completadas
        const completedSubjects = new Set(subjects.filter((subject)=>subjectStates[subject.code]?.status === 'approved').map((subject)=>subject.code));
        const plan = [];
        const remainingSubjects = [
            ...pendingSubjects
        ];
        let currentSemester = 1;
        const maxCreditsPerSemester = 30; // Límite de créditos por semestre en UTFSM
        const currentYear = new Date().getFullYear(); // Año actual
        const getSemesterName = (semesterNumber)=>{
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
                return `${finalYear + 1}-${finalSemester}`;
            }
            return `${finalYear}-${finalSemester}`;
        };
        while(remainingSubjects.length > 0 && currentSemester <= 20){
            // Determinar el nivel académico actual del estudiante
            const currentAcademicLevel = getCurrentAcademicLevel(completedSubjects);
            let availableSubjects = remainingSubjects.filter((subject)=>{
                // Verificar prerrequisitos
                const hasPrerequisites = isSubjectAvailable(subject, completedSubjects);
                // Verificar si puede tomar materias de este semestre según su nivel académico
                const canTakeBySemester = subject.semester ? canTakeSubjectFromSemester(subject.semester, currentAcademicLevel, completedSubjects) : false;
                return hasPrerequisites && canTakeBySemester;
            });
            if (availableSubjects.length === 0) {
                // Si no hay materias disponibles, avanzar al siguiente semestre
                currentSemester++;
                continue;
            }
            // Ordenar por prioridad: menos prerrequisitos pendientes primero
            availableSubjects.sort((a, b)=>{
                const aPendingPrereqs = a.prerequisites.filter((prereq)=>!completedSubjects.has(prereq)).length;
                const bPendingPrereqs = b.prerequisites.filter((prereq)=>!completedSubjects.has(prereq)).length;
                return aPendingPrereqs - bPendingPrereqs;
            });
            // Seleccionar materias para este semestre
            const semesterSubjects = [];
            let semesterCredits = 0;
            const maxCreditsThisSemester = maxCreditsPerSemester; // Sin límite especial para primer año
            for (const subject of availableSubjects){
                if (semesterCredits + subject.sctCredits <= maxCreditsThisSemester) {
                    semesterSubjects.push(subject);
                    semesterCredits += subject.sctCredits;
                    completedSubjects.add(subject.code);
                    // Remover de materias pendientes
                    const index = remainingSubjects.findIndex((s)=>s.code === subject.code);
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
    }, [
        subjects,
        subjectStates
    ]);
    const playGraduationAnimation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        calculateGraduationPlan();
        setShowGraduationPlan(true);
        setIsAnimating(true);
        // Detener animación después de mostrar todos los semestres
        setTimeout(()=>{
            setIsAnimating(false);
        }, graduationPlan.length * 1000 + 2000);
    }, [
        calculateGraduationPlan,
        graduationPlan.length
    ]);
    const closeGraduationPlan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setShowGraduationPlan(false);
        setIsAnimating(false);
    }, []);
    return {
        showGraduationPlan,
        graduationPlan,
        isAnimating,
        playGraduationAnimation,
        closeGraduationPlan
    };
};
}),
"[project]/src/components/CurriculumGrid.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>CurriculumGrid
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/react-fontawesome/index.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/free-solid-svg-icons/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SubjectCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SubjectCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StatsBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/StatsBar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GraduationPlanModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/GraduationPlanModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCalculator$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useCalculator.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useConfetti$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useConfetti.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGraduationPlan$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useGraduationPlan.ts [app-ssr] (ecmascript)");
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
;
function CurriculumGrid() {
    const [subjects, setSubjects] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [colors, setColors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [careerName, setCareerName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [careerColor, setCareerColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showCategoriesPopup, setShowCategoriesPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showCareerSelector, setShowCareerSelector] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedCareer, setSelectedCareer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [casaCentralCareers, setCasaCentralCareers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [vinaConcepcionCareers, setVinaConcepcionCareers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [darkMode, setDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isInitialized, setIsInitialized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const subjectRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({});
    // Detectar modo oscuro del sistema
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkDarkMode = ()=>{
            const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setDarkMode(isDark);
        };
        // Verificar al cargar
        checkDarkMode();
        // Escuchar cambios en el modo del sistema
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQuery.addEventListener('change', checkDarkMode);
        return ()=>{
            mediaQuery.removeEventListener('change', checkDarkMode);
        };
    }, []);
    // Cargar carreras disponibles y última carrera seleccionada al iniciar
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const loadCareers = async ()=>{
            try {
                const casaCentralModule = await __turbopack_context__.r("[project]/src/data/carreras_casa_central.json (json, async loader)")(__turbopack_context__.i);
                const vinaConcepcionModule = await __turbopack_context__.r("[project]/src/data/carreras_vina_concepcion.json (json, async loader)")(__turbopack_context__.i);
                const casaCentralData = casaCentralModule.default;
                const vinaConcepcionData = vinaConcepcionModule.default;
                setCasaCentralCareers(casaCentralData);
                setVinaConcepcionCareers(vinaConcepcionData);
                // Cargar la última carrera seleccionada
                const lastSelectedCareer = localStorage.getItem('last-selected-career');
                if (lastSelectedCareer) {
                    // Verificar que la carrera existe en los datos
                    const allCareers = [
                        ...casaCentralData,
                        ...vinaConcepcionData
                    ];
                    const careerExists = allCareers.some((career)=>career.Link === lastSelectedCareer);
                    if (careerExists) {
                        setSelectedCareer(lastSelectedCareer);
                        setShowCareerSelector(false);
                    } else {
                        // Si la carrera guardada no existe, mostrar selector
                        setShowCareerSelector(true);
                    }
                } else {
                    // Primera vez, mostrar selector
                    setShowCareerSelector(true);
                }
                setIsInitialized(true);
            } catch (error) {
                console.error('Error cargando carreras:', error);
                setShowCareerSelector(true);
                setIsInitialized(true);
            }
        };
        loadCareers();
    }, []);
    const { subjectStates, updateSubjectState, resetCalculator, calculateCredits, isLoaded } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCalculator$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCalculator"])(subjects, selectedCareer);
    const { checkAndTriggerConfetti } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useConfetti$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useConfetti"])();
    const { showGraduationPlan, graduationPlan, isAnimating, playGraduationAnimation, closeGraduationPlan } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGraduationPlan$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGraduationPlan"])(subjects, subjectStates);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const loadCareerData = async (careerLink)=>{
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
                }).import(`@/data/data_${careerLink}.json`);
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
                }).import(`@/data/colors_${careerLink}.json`);
                // Buscar la carrera en ambos campus
                const allCareers = [
                    ...casaCentralCareers,
                    ...vinaConcepcionCareers
                ];
                const career = allCareers.find((carrera)=>carrera.Link === careerLink);
                const data = dataModule.default;
                const colorsData = colorsModule.default;
                // Obtener el nombre y color de la carrera
                const careerNameFromJson = career?.Nombre || 'Carrera Desconocida';
                setCareerName(careerNameFromJson);
                setCareerColor(career?.Color);
                // Procesar datos
                const processedSubjects = [];
                Object.entries(data).forEach(([semester, semesterSubjects])=>{
                    semesterSubjects.forEach((subjectArray)=>{
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
                    });
                });
                setSubjects(processedSubjects);
                setColors(colorsData);
                setLoading(false);
                setShowCareerSelector(false);
            } catch (error) {
                console.error('Error loading career data:', error);
                setLoading(false);
            }
        };
        // Solo cargar si hay una carrera seleccionada
        if (selectedCareer) {
            loadCareerData(selectedCareer);
        }
    }, [
        selectedCareer
    ]);
    // Función para seleccionar carrera
    const handleCareerSelection = (careerLink)=>{
        setSelectedCareer(careerLink);
        // Guardar la carrera seleccionada en localStorage
        localStorage.setItem('last-selected-career', careerLink);
    };
    // Función para volver al selector de carreras
    const handleBackToCareerSelector = ()=>{
        setShowCareerSelector(true);
    // No limpiamos selectedCareer aquí para mantener la referencia
    // setSelectedCareer('');
    // setCareerName('');
    // setCareerColor(undefined);
    // setSubjects([]);
    // setColors({});
    // Nota: No necesitamos resetear el progreso aquí ya que se guarda por carrera
    };
    const stats = calculateCredits();
    // Verificar si se alcanzó el 100% para lanzar confetti
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (stats.percentage >= 100) {
            checkAndTriggerConfetti();
        }
    }, [
        stats.percentage,
        checkAndTriggerConfetti
    ]);
    const getSemesterSubjects = (semester)=>{
        return subjects.filter((subject)=>subject.semester === semester);
    };
    const getSemesterTitle = (semester)=>{
        const semesterNumber = semester.replace('s', '');
        return `${semesterNumber}° Semestre`;
    };
    const getSemesterCredits = (semester)=>{
        return getSemesterSubjects(semester).reduce((total, subject)=>total + Number(subject.sctCredits), 0);
    };
    const getSemesterApprovedCredits = (semester)=>{
        return getSemesterSubjects(semester).reduce((total, subject)=>{
            const state = subjectStates[subject.code];
            return total + (state?.status === 'approved' ? Number(subject.sctCredits) : 0);
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
    if (!isInitialized || loading && selectedCareer || !isLoaded && subjects.length > 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `flex items-center justify-center min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `animate-spin rounded-full h-32 w-32 border-b-2 ${darkMode ? 'border-blue-400' : 'border-blue-600'}`
                    }, void 0, false, {
                        fileName: "[project]/src/components/CurriculumGrid.tsx",
                        lineNumber: 227,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`,
                        children: !isInitialized ? 'Iniciando aplicación...' : loading ? 'Cargando malla curricular...' : 'Restaurando progreso...'
                    }, void 0, false, {
                        fileName: "[project]/src/components/CurriculumGrid.tsx",
                        lineNumber: 228,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CurriculumGrid.tsx",
                lineNumber: 226,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/CurriculumGrid.tsx",
            lineNumber: 225,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `min-h-screen p-2 pb-32 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full mx-auto",
                children: selectedCareer && !showCareerSelector && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-center mb-6 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleBackToCareerSelector,
                                            className: `flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105 ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-200 border border-gray-600' : 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 shadow-sm'}`,
                                            title: "Cambiar carrera",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faArrowLeft"],
                                                    className: "text-sm"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CurriculumGrid.tsx",
                                                    lineNumber: 255,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-medium",
                                                    children: "Cambiar carrera"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CurriculumGrid.tsx",
                                                    lineNumber: 256,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CurriculumGrid.tsx",
                                            lineNumber: 246,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl font-bold text-center flex-1",
                                            style: careerColor ? {
                                                color: careerColor
                                            } : {},
                                            children: careerName
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CurriculumGrid.tsx",
                                            lineNumber: 259,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-32"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CurriculumGrid.tsx",
                                            lineNumber: 267,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CurriculumGrid.tsx",
                                    lineNumber: 245,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 gap-2",
                                    children: Array.from({
                                        length: 8
                                    }, (_, i)=>`s${i + 1}`).map((semester)=>{
                                        const semesterSubjects = getSemesterSubjects(semester);
                                        const semesterCredits = getSemesterCredits(semester);
                                        const approvedCredits = getSemesterApprovedCredits(semester);
                                        if (semesterSubjects.length === 0) return null;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `flex flex-col w-full rounded-2xl shadow-md border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-100 border-gray-200'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `rounded-t-2xl p-3 text-center border-b ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-200 border-gray-300'}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: `font-bold text-sm ${darkMode ? 'text-gray-100' : 'text-gray-800'}`,
                                                            children: getSemesterTitle(semester)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CurriculumGrid.tsx",
                                                            lineNumber: 286,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `text-xs mt-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-medium",
                                                                    children: approvedCredits
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CurriculumGrid.tsx",
                                                                    lineNumber: 294,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "mx-1",
                                                                    children: "/"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CurriculumGrid.tsx",
                                                                    lineNumber: 295,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: [
                                                                        semesterCredits,
                                                                        " créditos"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/CurriculumGrid.tsx",
                                                                    lineNumber: 296,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CurriculumGrid.tsx",
                                                            lineNumber: 291,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `w-full rounded-full h-2 mt-2 overflow-hidden ${darkMode ? 'bg-gray-600' : 'bg-gray-300'}`,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full transition-all duration-500 shadow-sm",
                                                                style: {
                                                                    width: `${semesterCredits > 0 ? approvedCredits / semesterCredits * 100 : 0}%`
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CurriculumGrid.tsx",
                                                                lineNumber: 301,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CurriculumGrid.tsx",
                                                            lineNumber: 298,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CurriculumGrid.tsx",
                                                    lineNumber: 283,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col gap-3 p-3 rounded-b-2xl",
                                                    children: semesterSubjects.map((subject)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            ref: (el)=>{
                                                                subjectRefs.current[subject.code] = el;
                                                            },
                                                            className: "transition-all duration-300 ease-in-out",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SubjectCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                subject: subject,
                                                                state: subjectStates[subject.code],
                                                                onStateChange: (state)=>updateSubjectState(subject.code, state),
                                                                color: colors[subject.type]?.[0] || '#6B7280',
                                                                categoryName: colors[subject.type]?.[1] || 'Sin categoría',
                                                                onPrerequisiteClick: scrollToSubject,
                                                                findSubjectByCode: findSubjectByCode,
                                                                subjectStates: subjectStates,
                                                                colors: colors,
                                                                darkMode: darkMode
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CurriculumGrid.tsx",
                                                                lineNumber: 318,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, subject.code, false, {
                                                            fileName: "[project]/src/components/CurriculumGrid.tsx",
                                                            lineNumber: 311,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CurriculumGrid.tsx",
                                                    lineNumber: 309,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, semester, true, {
                                            fileName: "[project]/src/components/CurriculumGrid.tsx",
                                            lineNumber: 279,
                                            columnNumber: 17
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CurriculumGrid.tsx",
                                    lineNumber: 270,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CurriculumGrid.tsx",
                            lineNumber: 243,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `mt-12 text-center text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Universidad Técnica Federico Santa María"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CurriculumGrid.tsx",
                                    lineNumber: 343,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: careerName
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CurriculumGrid.tsx",
                                    lineNumber: 344,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CurriculumGrid.tsx",
                            lineNumber: 340,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/src/components/CurriculumGrid.tsx",
                lineNumber: 238,
                columnNumber: 7
            }, this),
            selectedCareer && !showCareerSelector && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StatsBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                stats: stats,
                onShowCategories: ()=>setShowCategoriesPopup(true),
                onReset: resetCalculator,
                onPlayGraduationPlan: playGraduationAnimation,
                darkMode: darkMode
            }, void 0, false, {
                fileName: "[project]/src/components/CurriculumGrid.tsx",
                lineNumber: 352,
                columnNumber: 9
            }, this),
            showCategoriesPopup && selectedCareer && !showCareerSelector && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/30 backdrop-blur-sm z-60 flex items-center justify-center p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `backdrop-blur-lg rounded-3xl shadow-2xl border max-w-4xl w-full max-h-[80vh] overflow-hidden ${darkMode ? 'bg-gray-800/95 border-gray-600' : 'bg-white/95 border-white/30'}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `backdrop-blur-lg text-white p-6 flex items-center justify-between ${darkMode ? 'bg-gray-700/80' : 'bg-gradient-to-r from-blue-600/80 to-indigo-600/80'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `w-8 h-8 backdrop-blur-sm rounded-2xl flex items-center justify-center ${darkMode ? 'bg-gray-600/50' : 'bg-white/20'}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faInfoCircle"],
                                                className: "text-white"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CurriculumGrid.tsx",
                                                lineNumber: 375,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CurriculumGrid.tsx",
                                            lineNumber: 372,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold",
                                                    children: "Categorías de Asignaturas"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CurriculumGrid.tsx",
                                                    lineNumber: 378,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-white/80",
                                                    children: "Colores utilizados para organizar las materias por área"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CurriculumGrid.tsx",
                                                    lineNumber: 379,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CurriculumGrid.tsx",
                                            lineNumber: 377,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CurriculumGrid.tsx",
                                    lineNumber: 371,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowCategoriesPopup(false),
                                    className: `text-white/80 hover:text-white transition-colors p-2 rounded-2xl backdrop-blur-sm ${darkMode ? 'hover:bg-gray-600/30' : 'hover:bg-white/10'}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faTimes"]
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CurriculumGrid.tsx",
                                        lineNumber: 390,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CurriculumGrid.tsx",
                                    lineNumber: 384,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CurriculumGrid.tsx",
                            lineNumber: 368,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 overflow-y-auto max-h-[60vh]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                                children: Object.entries(colors).map(([key, colorArray])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `backdrop-blur-sm rounded-2xl p-4 transition-all duration-300 border hover:shadow-lg ${darkMode ? 'bg-gray-700/50 hover:bg-gray-700/70 border-gray-600' : 'bg-white/50 hover:bg-white/60 border-gray-200'}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-6 h-6 rounded-full shadow-lg border-2 border-white/30 flex-shrink-0",
                                                    style: {
                                                        backgroundColor: colorArray[0]
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CurriculumGrid.tsx",
                                                    lineNumber: 407,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'}`,
                                                        children: colorArray[1]
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CurriculumGrid.tsx",
                                                        lineNumber: 412,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CurriculumGrid.tsx",
                                                    lineNumber: 411,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CurriculumGrid.tsx",
                                            lineNumber: 406,
                                            columnNumber: 21
                                        }, this)
                                    }, key, false, {
                                        fileName: "[project]/src/components/CurriculumGrid.tsx",
                                        lineNumber: 398,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/CurriculumGrid.tsx",
                                lineNumber: 396,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/CurriculumGrid.tsx",
                            lineNumber: 395,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CurriculumGrid.tsx",
                    lineNumber: 364,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/CurriculumGrid.tsx",
                lineNumber: 363,
                columnNumber: 9
            }, this),
            showCareerSelector && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-70 flex items-center justify-center p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `backdrop-blur-lg rounded-3xl shadow-2xl border max-w-5xl w-full max-h-[80vh] overflow-hidden ${darkMode ? 'bg-gray-800/95 border-gray-600' : 'bg-white/95 border-white/30'}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `backdrop-blur-sm border-b p-6 ${darkMode ? 'bg-gray-700/50 border-gray-600' : 'bg-gray-50/80 border-gray-200'}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: `text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`,
                                            children: "Selecciona tu Carrera"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CurriculumGrid.tsx",
                                            lineNumber: 437,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `text-sm mt-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`,
                                            children: "Elige la carrera para ver su malla curricular interactiva"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CurriculumGrid.tsx",
                                            lineNumber: 440,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CurriculumGrid.tsx",
                                    lineNumber: 436,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/CurriculumGrid.tsx",
                                lineNumber: 435,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/CurriculumGrid.tsx",
                            lineNumber: 432,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 overflow-y-auto max-h-[60vh]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: `text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`,
                                            children: "Viña del Mar / Concepción"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CurriculumGrid.tsx",
                                            lineNumber: 451,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                                            children: vinaConcepcionCareers.map((career)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleCareerSelection(career.Link),
                                                    className: `backdrop-blur-sm rounded-2xl p-4 transition-all duration-300 border hover:shadow-lg hover:scale-105 text-left ${darkMode ? 'bg-gray-700/30 border-gray-600 hover:bg-gray-600/40' : 'bg-white/40 border-white/50 hover:bg-white/60'}`,
                                                    style: {
                                                        borderColor: career.Color ? `${career.Color}40` : undefined,
                                                        backgroundColor: career.Color ? `${career.Color}10` : undefined
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-4 h-4 rounded-full flex-shrink-0",
                                                                style: {
                                                                    backgroundColor: career.Color || '#6B7280'
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CurriculumGrid.tsx",
                                                                lineNumber: 470,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'}`,
                                                                        children: career.Nombre
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CurriculumGrid.tsx",
                                                                        lineNumber: 475,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: `text-xs mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`,
                                                                        children: career.Link
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CurriculumGrid.tsx",
                                                                        lineNumber: 480,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CurriculumGrid.tsx",
                                                                lineNumber: 474,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CurriculumGrid.tsx",
                                                        lineNumber: 469,
                                                        columnNumber: 23
                                                    }, this)
                                                }, career.Link, false, {
                                                    fileName: "[project]/src/components/CurriculumGrid.tsx",
                                                    lineNumber: 456,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CurriculumGrid.tsx",
                                            lineNumber: 454,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CurriculumGrid.tsx",
                                    lineNumber: 450,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: `text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`,
                                            children: "Casa Central / San Joaquín"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CurriculumGrid.tsx",
                                            lineNumber: 494,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                                            children: casaCentralCareers.map((career)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleCareerSelection(career.Link),
                                                    className: `backdrop-blur-sm rounded-2xl p-4 transition-all duration-300 border hover:shadow-lg hover:scale-105 text-left ${darkMode ? 'bg-gray-700/30 border-gray-600 hover:bg-gray-600/40' : 'bg-white/40 border-white/50 hover:bg-white/60'}`,
                                                    style: {
                                                        borderColor: career.Color ? `${career.Color}40` : undefined,
                                                        backgroundColor: career.Color ? `${career.Color}10` : undefined
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-4 h-4 rounded-full flex-shrink-0",
                                                                style: {
                                                                    backgroundColor: career.Color || '#6B7280'
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CurriculumGrid.tsx",
                                                                lineNumber: 513,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'}`,
                                                                        children: career.Nombre
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CurriculumGrid.tsx",
                                                                        lineNumber: 518,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: `text-xs mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`,
                                                                        children: career.Link
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CurriculumGrid.tsx",
                                                                        lineNumber: 523,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CurriculumGrid.tsx",
                                                                lineNumber: 517,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CurriculumGrid.tsx",
                                                        lineNumber: 512,
                                                        columnNumber: 23
                                                    }, this)
                                                }, career.Link, false, {
                                                    fileName: "[project]/src/components/CurriculumGrid.tsx",
                                                    lineNumber: 499,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CurriculumGrid.tsx",
                                            lineNumber: 497,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CurriculumGrid.tsx",
                                    lineNumber: 493,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CurriculumGrid.tsx",
                            lineNumber: 448,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CurriculumGrid.tsx",
                    lineNumber: 428,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/CurriculumGrid.tsx",
                lineNumber: 427,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GraduationPlanModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                show: showGraduationPlan,
                graduationPlan: graduationPlan,
                isAnimating: isAnimating,
                onClose: closeGraduationPlan,
                colors: colors
            }, void 0, false, {
                fileName: "[project]/src/components/CurriculumGrid.tsx",
                lineNumber: 540,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CurriculumGrid.tsx",
        lineNumber: 237,
        columnNumber: 5
    }, this);
}
}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__b588acfe._.js.map