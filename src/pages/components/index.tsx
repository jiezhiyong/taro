import { View } from "@tarojs/components";
import {
  Button,
  Badge,
  Tag,
  Avatar,
  Swiper,
  SwiperItem,
  Cell,
  Space
} from "@nutui/nutui-react-taro";
import "./index.scss";

export default function Components() {
  const swiperList = [
    'https://via.placeholder.com/300x150/ff6b6b/ffffff?text=Slide+1',
    'https://via.placeholder.com/300x150/4ecdc4/ffffff?text=Slide+2',
    'https://via.placeholder.com/300x150/45b7d1/ffffff?text=Slide+3',
  ];

  return (
    <View className="container p-4">
      {/* 按钮组件 */}
      <Cell.Group title="Button 按钮">
        <Cell>
          <Space wrap>
            <Button type="primary">主要按钮</Button>
            <Button type="info">信息按钮</Button>
            <Button type="success">成功按钮</Button>
            <Button type="warning">警告按钮</Button>
            <Button type="danger">危险按钮</Button>
          </Space>
        </Cell>
        <Cell>
          <Space wrap>
            <Button type="primary" size="small">小尺寸</Button>
            <Button type="primary" size="normal">正常尺寸</Button>
            <Button type="primary" size="large">大尺寸</Button>
          </Space>
        </Cell>
      </Cell.Group>

      {/* 标记组件 */}
      <Cell.Group title="Badge 标记">
        <Cell>
          <Space>
            <Badge value={8}>
              <Avatar shape="square" />
            </Badge>
            <Badge value={76}>
              <Avatar shape="square" />
            </Badge>
            <Badge value="Hot">
              <Avatar shape="square" />
            </Badge>
            <Badge dot>
              <Avatar shape="square" />
            </Badge>
          </Space>
        </Cell>
      </Cell.Group>

      {/* 标签组件 */}
      <Cell.Group title="Tag 标签">
        <Cell>
          <Space wrap>
            <Tag type="primary">主要标签</Tag>
            <Tag type="success">成功标签</Tag>
            <Tag type="warning">警告标签</Tag>
            <Tag type="danger">危险标签</Tag>
            <Tag type="info">信息标签</Tag>
          </Space>
        </Cell>
        <Cell>
          <Space wrap>
            <Tag type="primary" round>圆角标签</Tag>
            <Tag type="success" mark>标记标签</Tag>
            <Tag type="info" closable>可关闭</Tag>
          </Space>
        </Cell>
      </Cell.Group>

      {/* 头像组件 */}
      <Cell.Group title="Avatar 头像">
        <Cell>
          <Space>
            <Avatar size={40} />
            <Avatar size={50} />
            <Avatar size={60} />
          </Space>
        </Cell>
        <Cell>
          <Space>
            <Avatar shape="square" />
            <Avatar shape="round" />
          </Space>
        </Cell>
      </Cell.Group>

      {/* 轮播组件 */}
      <Cell.Group title="Swiper 轮播">
        <Cell>
          <Swiper
            autoPlay
            height={150}
            indicator
            style={{ borderRadius: '8px', overflow: 'hidden' }}
          >
            {swiperList.map((item, index) => (
              <SwiperItem key={index}>
                <img
                  src={item}
                  alt={`轮播图${index + 1}`}
                  style={{ width: '100%', height: '150px', objectFit: 'cover' }}
                />
              </SwiperItem>
            ))}
          </Swiper>
        </Cell>
      </Cell.Group>
    </View>
  );
}