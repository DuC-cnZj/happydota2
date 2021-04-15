import {Input, Button} from 'antd'

const Home: React.FC = () => {
    return (
        <div className="app-home">
            <div className="container app-home-body">
                <div className="titles">
                    <span className="title-1">刀圈欢乐多</span>
                    <span className="title-2">dota2 玩家聚集地</span>
                    <span className="title-3">念念不忘，必有回响</span>
                </div>
                <div style={{width:"100%", display: "flex", justifyContent: "center"}}>
                    <Input
                        placeholder="输入您的email"
                        className="home-search font-mono"
                    />
                </div>
                <div className="home-join">
                    <Button type="primary" style={{marginRight: "10rem"}}>立刻加入</Button>
                    <Button type="ghost" className="my-ghost">已有账号，立即登录</Button>
                </div>
            </div>
        </div>
    )
}

export default Home;