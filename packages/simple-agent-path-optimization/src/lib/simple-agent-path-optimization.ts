const OPPOSITES = {
  UP: "DOWN",
  DOWN: "UP",
  LEFT: "RIGHT",
  RIGHT: "LEFT"
}

function removeOpposites(result: any[], startingPosition: number): boolean {
  if (result[startingPosition - 1] === OPPOSITES[result[startingPosition]]) {
    result.splice(startingPosition - 1, 2);
    return true;
  }
  return false;
}

export function optimizeAgent(plan: any[]) {
  return plan.reduce(function(dirs, dir){
    if (dirs[dirs.length - 1] === OPPOSITES[dir])
      dirs.pop();
    else
      dirs.push(dir);
    return dirs;
  }, []);
}
