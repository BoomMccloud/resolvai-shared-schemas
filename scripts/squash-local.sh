#!/bin/sh

# 获取当前分支名
branch=$(git rev-parse --abbrev-ref HEAD)
# 计算 ahead 数
ahead=$(git rev-list --count origin/$branch..HEAD)

if [ "$ahead" -eq 0 ]; then
  echo "没有本地未推送的 commit,无需合并。"
  exit 0
fi

echo "将 $ahead 个本地 commit 合并到暂存区..."
git reset --soft HEAD~$ahead
echo "合并完成！所有更改已暂存，您可以手动提交。"
echo "使用 'git commit -m \"your message\"' 来提交更改。" 