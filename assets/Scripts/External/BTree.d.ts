import { Draft } from './immer/immer';
export declare const enum NodeStatus {
    Ready = "Ready",
    Success = "Success",
    Failure = "Failure",
    Running = "Running"
}
export declare const enum NodeType {
    Action = "Action",
    Condition = "Condition",
    Decorator = "Decorator",
    Invert = "Invert",
    Parallel = "Parallel",
    Portal = "Portal",
    Root = "Root",
    Selector = "Selector",
    Sequence = "Sequence",
    State = "State"
}
export declare enum _StoreKey {
    Patches = "$patches",
    SequenceIndex = "$sequenceIndex",
    Status = "$status",
    Count = "$count",
    WasRun = "$wasRun"
}
export interface INodeState {
    [_StoreKey.Count]: number;
    [_StoreKey.Status]: NodeStatus;
}
export interface INodeTarget {
    addEventListener: (type: 'tickstart' | 'tickend', listener: () => void) => void;
    removeEventListener: (type: 'tickstart' | 'tickend', listener: () => void) => void;
    dispatchEvent: (event: CustomEvent) => boolean;
}
export interface IRootNode<State, Props> extends IWithNodeState, INodeTarget {
    id: string;
    name: string;
    type: NodeType.Root;
    state: State;
    children: ICompositeNode<State, Props>;
    tick: (props?: Props) => NodeStatus | undefined;
}
export interface IConditionNode<State, Props> extends IWithNodeState {
    id: string;
    name: string;
    type: NodeType.Condition;
    parent?: IAnyNode<State, Props>;
    exec(args: {
        state: State;
        node: IConditionNode<State, Props>;
        root: IRootNode<State, Props>;
    }, props: Props): any;
}
export interface IActionNode<State, Props> extends IWithNodeState {
    id: string;
    name: string;
    type: NodeType.Action;
    fn: (state: Draft<State>, props: Props) => void | Promise<void>;
    parent?: IAnyNode<State, Props>;
}
export interface IStateNode<State, Props> extends IWithNodeState {
    id: string;
    type: NodeType.State;
    parent?: IAnyNode<State, Props>;
    children: IAnyChildNode<State, Props>;
    state: any;
}
export interface IPortalNode<State, Props> extends IWithNodeState {
    id: string;
    type: NodeType.Portal;
    parent?: IAnyNode<State, Props>;
    children: Array<ICompositeNode<State, Props>>;
    clear: () => IPortalNode<State, Props>;
    mount: (children: ICompositeNode<State, Props>) => IPortalNode<State, Props>;
    unmount: (children: ICompositeNode<State, Props>) => IPortalNode<State, Props>;
}
export interface ISequenceNode<State, Props> extends IWithNodeState {
    id: string;
    type: NodeType.Sequence;
    parent?: IAnyNode<State, Props>;
    children: Array<ICompositeNode<State, Props> | ILeafNode<State, Props>>;
}
export interface IParallelNode<State, Props> extends IWithNodeState {
    id: string;
    type: NodeType.Parallel;
    parent?: IAnyNode<State, Props>;
    children: Array<ICompositeNode<State, Props> | IActionNode<State, Props>>;
}
export interface ISelectorNode<State, Props> extends IWithNodeState {
    id: string;
    type: NodeType.Selector;
    parent?: IAnyNode<State, Props>;
    children: Array<ICompositeNode<State, Props> | IActionNode<State, Props>>;
}
export interface IDecoratorNode<State, Props> extends IWithNodeState {
    id: string;
    type: NodeType.Decorator;
    parent?: IAnyNode<State, Props>;
    decorator: (status: NodeStatus) => NodeStatus;
    children: ILeafNode<State, Props>;
}
export interface IInvertNode<State, Props> extends IWithNodeState {
    id: string;
    type: NodeType.Invert;
    parent?: IAnyNode<State, Props>;
    children: IAnyChildNode<State, Props>;
}
export declare type ICompositeNode<State, Props> = ISelectorNode<State, Props> | ISequenceNode<State, Props> | IParallelNode<State, Props> | IDecoratorNode<State, Props> | IInvertNode<State, Props> | IPortalNode<State, Props> | IStateNode<State, Props>;
export declare type ILeafNode<State, Props> = IActionNode<State, Props> | IConditionNode<State, Props>;
export declare type IAnyChildNode<State, Props> = ICompositeNode<State, Props> | ILeafNode<State, Props>;
export declare type IAnyNode<State, Props> = IRootNode<State, Props> | IAnyChildNode<State, Props>;
export interface IWithNodeState {
    $nodeState: INodeState;
    /**
     * Get value form node state
     */
    getValue: <T>(key: string, defaultValue?: T) => T;
    /**
     * Set value in node state
     */
    setValue: (key: string, value: any) => any;
}
export declare type IOptions<Props> = {
    props?: Props;
    setState: any;
};
export  const nodes: {
    root: <State, Props>(name: string, childrenFactory: () => ICompositeNode<State, Props>) => (initialState: State, options?: IOptions<Props>) => IRootNode<State, Props>;
    /**
     * Runs child nodes in sequence until it finds one that succeeds. Succeeds when it finds the first child that succeeds. For child nodes that fail, it moves forward to the next child node. While a child is running it stays on that child node without moving forward.
     */
    selector: <State_1, Props_1>(children: (ISelectorNode<State_1, Props_1> | ISequenceNode<State_1, Props_1> | IParallelNode<State_1, Props_1> | IDecoratorNode<State_1, Props_1> | IInvertNode<State_1, Props_1> | IPortalNode<State_1, Props_1> | IStateNode<State_1, Props_1> | IActionNode<State_1, Props_1>)[]) => ISelectorNode<State_1, Props_1>;
    /**
     * Runs each child node one by one. Fails for the first child node that fails. Moves to the next child when the current running child succeeds. Stays on the current child node while it returns running. Succeeds when all child nodes have succeeded.
     */
    sequence: <State_2, Props_2>(children: (ISelectorNode<State_2, Props_2> | ISequenceNode<State_2, Props_2> | IParallelNode<State_2, Props_2> | IDecoratorNode<State_2, Props_2> | IInvertNode<State_2, Props_2> | IPortalNode<State_2, Props_2> | IStateNode<State_2, Props_2> | IActionNode<State_2, Props_2> | IConditionNode<State_2, Props_2>)[]) => ISequenceNode<State_2, Props_2>;
    /**
     * Runs all child nodes in parallel. Continues to run until a required number of child nodes have either failed or succeeded.
     */
    parallel: <State_3, Props_3>(children: (ISelectorNode<State_3, Props_3> | ISequenceNode<State_3, Props_3> | IParallelNode<State_3, Props_3> | IDecoratorNode<State_3, Props_3> | IInvertNode<State_3, Props_3> | IPortalNode<State_3, Props_3> | IStateNode<State_3, Props_3> | IActionNode<State_3, Props_3>)[]) => IParallelNode<State_3, Props_3>;
    condition: <State_4, Props_4>(name: string, fn?: ((state: State_4, props: Props_4) => void) | undefined) => IConditionNode<State_4, Props_4>;
    portal: <State_5, Props_5>() => IPortalNode<State_5, Props_5>;
    state: <State_6, Props_6>(state: any, children: IAnyChildNode<State_6, Props_6>) => IStateNode<State_6, Props_6>;
    invert: <State_7, Props_7>(children: IAnyChildNode<State_7, Props_7>) => IInvertNode<State_7, Props_7>;
    action: <State_8, Props_8>(name: string, fn: (state: Draft<State_8>, props: Props_8) => void) => IActionNode<State_8, Props_8>;
};
