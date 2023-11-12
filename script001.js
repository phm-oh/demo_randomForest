function decisionTree(context) {




    if (context.late > 1.5) {
        if (context.writng > 0.5) {
            if (context.reading > 0.5) {
                if (context.mood > 1.5) {
                    return "close up {care=0, close up=29, trust=0}";
                } else {
                    if (context.drug > 0.5) {
                        return "close up {care=0, close up=12, trust=0}";
                    } else {
                        if (context.income > 0.5) {
                            if (context.violence > 0.5) {
                                if (context.gambling > 0.5) {
                                    return "{care=9, close up=0, trust=0}";
                                } else {
                                    if (context.congenital > 1.5) {
                                        return "close up {care=0, close up=7, trust=0}";
                                    } else {
                                        return "{care=14, close up=2, trust=0}";
                                    }
                                }
                            } else {
                                if (context.visual > 0.5) {
                                    if (context.gambling > 0.5) {
                                        return "{care=26, close up=0, trust=0}";
                                    } else {
                                        return "{care=17, close up=2, trust=1}";
                                    }
                                } else {
                                    return "close up {care=0, close up=4, trust=0}";
                                }
                            }
                        } else {
                            if (context.Not_passing > 1.5) {
                                return "close up {care=0, close up=6, trust=0}";
                            } else {
                                if (context.grade > 1.5) {
                                    if (context.gambling > 0.5) {
                                        return "{care=7, close up=0, trust=0}";
                                    } else {
                                        return "close up {care=9, close up=16, trust=0}";
                                    }
                                } else {
                                    if (context.congenital > 0.5) {
                                        return "{care=9, close up=2, trust=0}";
                                    } else {
                                        return "{care=4, close up=0, trust=3}";
                                    }
                                }
                            }
                        }
                    }
                }
            } else {
                return "close up {care=0, close up=35, trust=0}";
            }
        } else {
            return "close up {care=0, close up=72, trust=0}";
        }
    }

    
}
